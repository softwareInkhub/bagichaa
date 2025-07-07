'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  Package, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle, 
  Truck, 
  Navigation, 
  Star,
  ArrowLeft,
  MessageCircle,
  RefreshCw
} from 'lucide-react'
import LiveTrackingMap from '@/components/LiveTrackingMap'
import { 
  getOrder, 
  getOrderTracking, 
  subscribeToOrderTracking,
  getRiders
} from '@/lib/firebase'
import { useToast } from '@/components/ToastProvider'

interface TrackingEvent {
  event: string
  timestamp: Date
  location?: { lat: number; lng: number }
  note: string
}

interface OrderData {
  id: string
  orderNumber: string
  customerName: string
  customerPhone: string
  address: {
    street: string
    city: string
    coordinates?: { lat: number; lng: number }
  }
  items: Array<{
    name: string
    quantity: number
    price: number
    image?: string
  }>
  totalAmount: number
  status: string
  riderId?: string
  createdAt: Date
  estimatedDeliveryTime?: Date
  actualDeliveryTime?: Date
}

interface TrackingData {
  orderId: string
  riderId: string
  status: string
  customerLocation?: { lat: number; lng: number }
  riderLocation?: { lat: number; lng: number }
  estimatedArrival?: Date
  trackingEvents: TrackingEvent[]
}

interface RiderInfo {
  id: string
  name: string
  phone: string
  vehicleType: string
  vehicleNumber: string
  rating: number
}

const OrderTrackingPage = () => {
  const params = useParams()
  const router = useRouter()
  const orderId = params.orderId as string

  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null)
  const [riderInfo, setRiderInfo] = useState<RiderInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const { showToast } = useToast()
  const prevStatusRef = React.useRef<string | null>(null)

  // Load order and tracking data
  useEffect(() => {
    if (!orderId) return

    loadOrderData()
    
    // Subscribe to real-time tracking updates
    const unsubscribe = subscribeToOrderTracking(orderId, (tracking) => {
      if (tracking) {
        setTrackingData(tracking)
        if (tracking.riderId && !riderInfo) {
          loadRiderInfo(tracking.riderId)
        }
      }
    })

    return () => unsubscribe()
  }, [orderId])

  useEffect(() => {
    if (trackingData && trackingData.status) {
      if (prevStatusRef.current && prevStatusRef.current !== trackingData.status) {
        showToast(`Order status updated: ${trackingData.status.replace('_', ' ')}`, 'info')
      }
      prevStatusRef.current = trackingData.status
    }
  }, [trackingData?.status])

  const loadOrderData = async () => {
    try {
      setLoading(true)
      const order = await getOrder(orderId)
      
      if (!order) {
        setError('Order not found')
        setLoading(false)
        return
      }

      setOrderData(order as OrderData)

      // Load rider info if order is assigned
      if (order.riderId) {
        await loadRiderInfo(order.riderId)
      }

      setLoading(false)
    } catch (error) {
      console.error('Error loading order:', error)
      setError('Failed to load order details')
      setLoading(false)
    }
  }

  const loadRiderInfo = async (riderId: string) => {
    try {
      const riders = await getRiders()
      const rider = riders.find(r => r.id === riderId)
      if (rider) {
        setRiderInfo({
          id: rider.id,
          name: rider.name,
          phone: rider.phone,
          vehicleType: rider.vehicleType,
          vehicleNumber: rider.vehicleNumber,
          rating: rider.rating
        })
      }
    } catch (error) {
      console.error('Error loading rider info:', error)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadOrderData()
    setRefreshing(false)
  }

  // Get status display info
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          color: 'text-yellow-600 bg-yellow-100',
          icon: <Clock className="w-5 h-5" />,
          title: 'Order Confirmed',
          description: 'Your order is being prepared'
        }
      case 'assigned':
        return {
          color: 'text-blue-600 bg-blue-100',
          icon: <Package className="w-5 h-5" />,
          title: 'Rider Assigned',
          description: 'A delivery partner has been assigned'
        }
      case 'picked_up':
        return {
          color: 'text-orange-600 bg-orange-100',
          icon: <Package className="w-5 h-5" />,
          title: 'Order Picked Up',
          description: 'Your order has been picked up'
        }
      case 'out_for_delivery':
        return {
          color: 'text-green-600 bg-green-100',
          icon: <Truck className="w-5 h-5" />,
          title: 'Out for Delivery',
          description: 'Your order is on the way'
        }
      case 'delivered':
        return {
          color: 'text-purple-600 bg-purple-100',
          icon: <CheckCircle className="w-5 h-5" />,
          title: 'Delivered',
          description: 'Your order has been delivered successfully'
        }
      default:
        return {
          color: 'text-gray-600 bg-gray-100',
          icon: <Clock className="w-5 h-5" />,
          title: 'Processing',
          description: 'Your order is being processed'
        }
    }
  }

  // Get estimated delivery time
  const getEstimatedDelivery = () => {
    if (orderData?.actualDeliveryTime) {
      return `Delivered at ${new Date(orderData.actualDeliveryTime).toLocaleTimeString()}`
    }
    
    if (trackingData?.estimatedArrival) {
      return `Estimated arrival: ${new Date(trackingData.estimatedArrival).toLocaleTimeString()}`
    }
    
    if (orderData?.estimatedDeliveryTime) {
      return `Estimated delivery: ${new Date(orderData.estimatedDeliveryTime).toLocaleTimeString()}`
    }
    
    return 'Calculating delivery time...'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Not Found</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  if (!orderData) return null

  const statusInfo = getStatusInfo(orderData.status)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="font-semibold text-gray-900">Track Order</h1>
              <p className="text-sm text-gray-600">#{orderData.orderNumber || orderData.id}</p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Current Status */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-full ${statusInfo.color}`}>
              {statusInfo.icon}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900">{statusInfo.title}</h2>
              <p className="text-sm text-gray-600">{statusInfo.description}</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>{getEstimatedDelivery()}</p>
          </div>
        </div>

        {/* Live Tracking Map */}
        {trackingData && riderInfo && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-900">Live Tracking</h3>
            </div>
            <LiveTrackingMap
              orderId={orderId}
              trackingData={trackingData}
              mode="customer"
              height="300px"
              riderInfo={{
                name: riderInfo.name,
                phone: riderInfo.phone,
                vehicle: `${riderInfo.vehicleType} - ${riderInfo.vehicleNumber}`,
                rating: riderInfo.rating
              }}
            />
          </div>
        )}

        {/* Rider Information */}
        {riderInfo && orderData.status !== 'pending' && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Your Delivery Partner</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{riderInfo.name}</p>
                  <p className="text-sm text-gray-600">{riderInfo.vehicleType} - {riderInfo.vehicleNumber}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{riderInfo.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.open(`tel:${riderInfo.phone}`)}
                  className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                >
                  <Phone className="w-5 h-5" />
                </button>
                <button
                  onClick={() => window.open(`sms:${riderInfo.phone}`)}
                  className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-gray-900">Order Items</h3>
          </div>
          <div className="p-4 space-y-3">
            {orderData.items.map((item, index) => {
              const quantity = item.quantity || (item as any).qty || 1
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-gray-900">₹{item.price * quantity}</p>
                </div>
              )
            })}
            
            <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
              <span>Total Amount</span>
              <span>₹{orderData.totalAmount || (orderData as any).total || 0}</span>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Delivery Address</h3>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-gray-900">{orderData.address?.street || 'Address not available'}</p>
              <p className="text-sm text-gray-600">{orderData.address?.city || ''}</p>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        {trackingData && trackingData.trackingEvents.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-900">Order Timeline</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {trackingData.trackingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 capitalize">
                        {event.event.replace('_', ' ')}
                      </p>
                      <p className="text-sm text-gray-600">{event.note}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(event.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Contact Customer Support</span>
                <Phone className="w-4 h-4 text-gray-400" />
              </div>
            </button>
            <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Report an Issue</span>
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTrackingPage 