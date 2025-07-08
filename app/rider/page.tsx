'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Package, 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp, 
  Wallet, 
  Navigation,
  CheckCircle,
  Phone,
  User,
  LogOut,
  Truck,
  AlertCircle
} from 'lucide-react'
import LiveTrackingMap from '@/components/LiveTrackingMap'
import { 
  getCurrentRider, 
  isRiderLoggedIn, 
  getRiderOrders, 
  updateRiderStatus, 
  updateRiderLocation,
  updateOrderStatusWithRider,
  subscribeToOrderTracking,
  getOrderTracking,
  subscribeToRiderOrders
} from '@/lib/firebase'
import { useToast } from '@/components/ToastProvider'

interface Order {
  id: string
  orderNumber?: string
  customerName?: string
  customerPhone?: string
  address?: {
    street?: string
    city?: string
    coordinates?: { lat: number; lng: number }
    addressLine1?: string
    addressLine2?: string
    landmark?: string
    state?: string
  }
  items: Array<{
    name: string
    quantity?: number
    qty?: number
    price: number
  }>
  totalAmount?: number
  total?: number
  status: string
  createdAt: Date | any
  estimatedDeliveryTime?: Date
}

const RiderDashboard = () => {
  const router = useRouter()
  const [currentRider, setCurrentRider] = useState<any>(null)
  const [activeOrder, setActiveOrder] = useState<Order | null>(null)
  const [orderHistory, setOrderHistory] = useState<Order[]>([])
  const [trackingData, setTrackingData] = useState<any>(null)
  const [riderStats, setRiderStats] = useState({
    totalDeliveries: 0,
    completedToday: 0,
    earnings: 0,
    rating: 5.0
  })
  const [isOnline, setIsOnline] = useState(false)
  const [currentLocation, setCurrentLocation] = useState<{lat: number, lng: number} | null>(null)
  const [loading, setLoading] = useState(true)
  const locationIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const { showToast } = useToast()
  const prevOrderStatusRef = useRef<string | null>(null)

  // Authentication check
  useEffect(() => {
    if (!isRiderLoggedIn()) {
      router.push('/rider/auth/login')
      return
    }

    const rider = getCurrentRider()
    setCurrentRider(rider)
    setIsOnline(rider?.status === 'online')
    
    // Use real-time subscription for rider orders
    let unsubscribe: (() => void) | undefined
    if (rider?.id) {
      unsubscribe = subscribeToRiderOrders(rider.id, (orders) => {
        const active = orders.find(order => 
          ['assigned', 'picked_up', 'out_for_delivery'].includes(order.status)
        )
        const history = orders.filter(order => 
          !['assigned', 'picked_up', 'out_for_delivery'].includes(order.status)
        ).slice(0, 10)

        setActiveOrder(active || null)
        setOrderHistory(history)

        // If there's an active order, subscribe to tracking
        if (active) {
          subscribeToOrderTracking(active.id, (tracking) => {
            setTrackingData(tracking)
          })
        } else {
          setTrackingData(null)
        }
        setLoading(false)
      })
    } else {
      // No rider ID, set loading to false
      setLoading(false)
    }
    
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [router])

  // Location tracking effect
  useEffect(() => {
    if (isOnline && currentRider && currentRider.id) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            updateRiderLocation(currentRider.id, location)
          },
          (error) => {
            alert('Location permission denied. Please enable location sharing to receive orders and update your location.')
            setIsOnline(false)
          },
          { enableHighAccuracy: true }
        )
        // Start periodic updates
        locationIntervalRef.current = setInterval(() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }
              updateRiderLocation(currentRider.id, location)
            },
            (error) => {
              alert('Location update failed. Please check your device settings.')
              setIsOnline(false)
            },
            { enableHighAccuracy: true }
          )
        }, 10000)
      } else {
        alert('Geolocation is not supported by your browser.')
        setIsOnline(false)
      }
    } else {
      if (locationIntervalRef.current) {
        clearInterval(locationIntervalRef.current)
        locationIntervalRef.current = null
      }
    }
    return () => {
      if (locationIntervalRef.current) {
        clearInterval(locationIntervalRef.current)
        locationIntervalRef.current = null
      }
    }
  }, [isOnline, currentRider && currentRider.id])

  useEffect(() => {
    if (activeOrder && activeOrder.status) {
      if (prevOrderStatusRef.current && prevOrderStatusRef.current !== activeOrder.status) {
        showToast(`Order status updated: ${activeOrder.status.replace('_', ' ')}`, 'info')
      }
      prevOrderStatusRef.current = activeOrder.status
    }
  }, [activeOrder?.status])

  // Handle online/offline toggle
  const handleStatusToggle = async () => {
    if (!currentRider || !currentRider.id) return
    try {
      const newStatus = isOnline ? 'offline' : 'online'
      await updateRiderStatus(currentRider.id, newStatus)
      setIsOnline(!isOnline)
      
      // Update local storage
      const updatedRider = { ...currentRider, status: newStatus }
      setCurrentRider(updatedRider)
      localStorage.setItem('currentRider', JSON.stringify(updatedRider))
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  // Handle location update
  const handleLocationUpdate = async (location: {lat: number, lng: number}) => {
    setCurrentLocation(location)
    
    if (currentRider?.id) {
      try {
        await updateRiderLocation(currentRider.id, location)
        
        // Update tracking if there's an active order
        if (activeOrder) {
          // This will be handled by the map component
        }
      } catch (error) {
        console.error('Error updating location:', error)
      }
    }
  }

  // Handle order status update
  const handleOrderStatusUpdate = async (status: 'picked_up' | 'out_for_delivery' | 'delivered') => {
    if (!activeOrder || !currentRider?.id) return

    try {
      const additionalData: any = {
        location: currentLocation,
        note: `Order ${status.replace('_', ' ')} by rider`
      }

      if (status === 'delivered') {
        // In a real app, you'd capture delivery proof here
        additionalData.deliveryProof = {
          type: 'photo',
          url: 'placeholder-proof-url',
          timestamp: new Date()
        }
      }

      await updateOrderStatusWithRider(activeOrder.id, status, additionalData)
    } catch (error) {
      console.error('Error updating order status:', error)
    }
  }

  // Open navigation app
  const openDirections = () => {
    if (activeOrder?.address?.coordinates) {
      const { lat, lng } = activeOrder.address.coordinates
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`
      window.open(url, '_blank')
    } else {
      console.warn('No coordinates available for navigation')
    }
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentRider')
    router.push('/rider/auth/login')
  }

  // Defensive: If activeOrder exists but no riderLocation, show a prompt
  if (activeOrder && !trackingData?.riderLocation) {
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center mb-4">
      <p className="text-yellow-700 font-medium">
        Location not shared. Please enable location sharing to update your position for live tracking.
      </p>
    </div>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">{currentRider?.name}</h1>
                <p className="text-sm text-gray-600">{currentRider?.vehicle}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Status Toggle */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="font-medium text-gray-900">
                {isOnline ? 'You are Online' : 'You are Offline'}
              </span>
            </div>
            <button
              onClick={handleStatusToggle}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isOnline 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Total Orders</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{riderStats.totalDeliveries}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Today</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{riderStats.completedToday}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600">Earnings</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{riderStats.earnings}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-sm text-gray-600">Rating</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{riderStats.rating}</p>
          </div>
        </div>

        {/* Active Order */}
        {activeOrder ? (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-gray-900">Active Order</h2>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activeOrder.status === 'assigned' ? 'bg-blue-100 text-blue-700' :
                  activeOrder.status === 'picked_up' ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {activeOrder.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-600">#{activeOrder.orderNumber}</p>
            </div>

            <div className="p-4 space-y-4">
              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{activeOrder.customerName || 'Customer'}</p>
                  <p className="text-sm text-gray-600">
                    {activeOrder.address?.street ||
                     activeOrder.address?.addressLine1 ||
                     activeOrder.address?.addressLine2 ||
                     activeOrder.address?.landmark ||
                     activeOrder.address?.city ||
                     activeOrder.address?.state ||
                     'Address not available'}
                  </p>
                  <p className="text-sm text-gray-600">{activeOrder.address?.city || activeOrder.address?.state || ''}</p>
                </div>
                <button
                  onClick={() => window.open(`tel:${activeOrder.customerPhone}`)}
                  className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                >
                  <Phone className="w-5 h-5" />
                </button>
              </div>

              {/* Order Items */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">Items ({activeOrder.items.length})</p>
                {activeOrder.items.slice(0, 3).map((item, index) => {
                  const quantity = item.quantity || item.qty || 1
                  return (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{quantity}x {item.name}</span>
                      <span className="text-gray-900">₹{item.price * quantity}</span>
                    </div>
                  )
                })}
                {activeOrder.items.length > 3 && (
                  <p className="text-sm text-gray-500">+{activeOrder.items.length - 3} more items</p>
                )}
                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total Amount</span>
                  <span>₹{activeOrder.totalAmount || activeOrder.total || 0}</span>
                </div>
              </div>

              {/* Map */}
              {trackingData && (
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-900">Live Tracking</h3>
                  <LiveTrackingMap
                    orderId={activeOrder.id}
                    trackingData={trackingData}
                    mode="rider"
                    height="200px"
                    onLocationUpdate={handleLocationUpdate}
                    onDirectionsClick={openDirections}
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2">
                {activeOrder.status === 'assigned' && (
                  <button
                    onClick={() => handleOrderStatusUpdate('picked_up')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
                  >
                    Mark as Picked Up
                  </button>
                )}
                
                {activeOrder.status === 'picked_up' && (
                  <button
                    onClick={() => handleOrderStatusUpdate('out_for_delivery')}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700"
                  >
                    Start Delivery
                  </button>
                )}
                
                {activeOrder.status === 'out_for_delivery' && (
                  <button
                    onClick={() => handleOrderStatusUpdate('delivered')}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
                  >
                    Mark as Delivered
                  </button>
                )}
                
                <button
                  onClick={openDirections}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Open in Maps
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">No Active Orders</h3>
            <p className="text-gray-600 text-sm">
              {isOnline ? 'You\'ll receive new orders when available' : 'Go online to start receiving orders'}
            </p>
          </div>
        )}

        {/* Recent Orders */}
        {orderHistory.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-gray-900">Recent Orders</h2>
            </div>
            <div className="divide-y">
              {orderHistory.map((order) => (
                <div key={order.id} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">#{order.orderNumber}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {order.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{order.customerName}</p>
                  <p className="text-sm text-gray-600">₹{order.totalAmount}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RiderDashboard 