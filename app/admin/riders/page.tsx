'use client'

import React, { useState, useEffect } from 'react'
import { 
  Users, 
  Plus, 
  MapPin, 
  Package, 
  Star, 
  Clock, 
  TrendingUp, 
  Search,
  Filter,
  MoreVertical,
  Phone,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Navigation,
  Truck,
  DollarSign
} from 'lucide-react'
import LiveTrackingMap from '@/components/LiveTrackingMap'
import { 
  getRiders, 
  subscribeToRiders, 
  createRider, 
  updateRiderStatus,
  getAvailableRiders,
  assignRiderToOrder,
  getOrders
} from '@/lib/firebase'

// Import the OrderData type we defined in firebase.ts
interface OrderData {
  id: string
  orderNumber?: string
  customerId?: string
  customerPhone?: string
  customerName?: string
  riderId?: string
  items: Array<{
    id?: string
    productId?: string
    name: string
    quantity?: number
    qty?: number
    price: number
    image?: string
  }>
  address?: {
    fullName?: string
    phoneNumber?: string
    addressLine1?: string
    addressLine2?: string
    street?: string
    city?: string
    state?: string
    pincode?: string
    landmark?: string
    coordinates?: { lat: number; lng: number }
  }
  total?: number
  totalAmount?: number
  subtotal?: number
  deliveryFee?: number
  status: string
  paymentMethod?: string
  riderAssignedAt?: Date
  pickedUpAt?: Date
  outForDeliveryAt?: Date
  deliveredAt?: Date
  estimatedDeliveryTime?: Date
  actualDeliveryTime?: Date
  deliveryProof?: any
  createdAt: any
  updatedAt?: any
}

interface Rider {
  id: string
  name: string
  phone: string
  email?: string
  vehicleType: string
  vehicleNumber: string
  licenseNumber?: string
  aadharNumber?: string
  address?: string
  status: 'online' | 'offline' | 'busy'
  currentLocation?: { lat: number; lng: number; accuracy?: number; timestamp?: Date } | null
  currentOrderId?: string | null
  totalDeliveries: number
  completedDeliveries: number
  cancelledDeliveries: number
  rating: number
  totalEarnings: number
  isActive: boolean
  isVerified: boolean
  performance?: {
    avgDeliveryTime: number
    onTimeDeliveryRate: number
    customerRating: number
  }
  createdAt: Date | any
  lastActiveAt?: Date | any | null
}

const AdminRidersPage = () => {
  const [riders, setRiders] = useState<Rider[]>([])
  const [filteredRiders, setFilteredRiders] = useState<Rider[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [showAddRider, setShowAddRider] = useState(false)
  const [selectedRider, setSelectedRider] = useState<Rider | null>(null)
  const [showTrackingModal, setShowTrackingModal] = useState(false)
  const [showAssignOrderModal, setShowAssignOrderModal] = useState(false)
  const [availableOrders, setAvailableOrders] = useState<OrderData[]>([])

  // Stats
  const [stats, setStats] = useState({
    totalRiders: 0,
    onlineRiders: 0,
    busyRiders: 0,
    totalDeliveries: 0,
    avgRating: 0
  })

  // Load riders data
  useEffect(() => {
    const unsubscribe = subscribeToRiders((ridersData) => {
      setRiders(ridersData)
      setFilteredRiders(ridersData)
      calculateStats(ridersData)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Load available orders for assignment
  useEffect(() => {
    loadAvailableOrders()
  }, [])

  const loadAvailableOrders = async () => {
    try {
      const orders = await getOrders()
      const typedOrders = orders as OrderData[]
      const pendingOrders = typedOrders.filter(order => order.status === 'pending')
      setAvailableOrders(pendingOrders)
    } catch (error) {
      console.error('Error loading orders:', error)
    }
  }

  // Calculate stats
  const calculateStats = (ridersData: Rider[]) => {
    const totalRiders = ridersData.length
    const onlineRiders = ridersData.filter(r => r.status === 'online').length
    const busyRiders = ridersData.filter(r => r.status === 'busy').length
    const totalDeliveries = ridersData.reduce((sum, r) => sum + r.totalDeliveries, 0)
    const avgRating = ridersData.length > 0 
      ? ridersData.reduce((sum, r) => sum + r.rating, 0) / ridersData.length 
      : 0

    setStats({
      totalRiders,
      onlineRiders,
      busyRiders,
      totalDeliveries,
      avgRating: Math.round(avgRating * 10) / 10
    })
  }

  // Filter riders
  useEffect(() => {
    let filtered = riders

    if (searchTerm) {
      filtered = filtered.filter(rider =>
        rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rider.phone.includes(searchTerm) ||
        rider.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(rider => rider.status === statusFilter)
    }

    setFilteredRiders(filtered)
  }, [riders, searchTerm, statusFilter])

  // Handle rider creation
  const handleCreateRider = async (riderData: any) => {
    try {
      await createRider(riderData)
      setShowAddRider(false)
    } catch (error) {
      console.error('Error creating rider:', error)
    }
  }

  // Handle status update
  const handleStatusUpdate = async (riderId: string, newStatus: 'online' | 'offline') => {
    try {
      await updateRiderStatus(riderId, newStatus)
    } catch (error) {
      console.error('Error updating rider status:', error)
    }
  }

  // Handle order assignment
  const handleAssignOrder = async (orderId: string, riderId: string) => {
    try {
      await assignRiderToOrder(orderId, riderId)
      setShowAssignOrderModal(false)
      setSelectedRider(null)
      loadAvailableOrders() // Refresh orders
    } catch (error) {
      console.error('Error assigning order:', error)
    }
  }

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-100 text-green-800'
      case 'busy':
        return 'bg-yellow-100 text-yellow-800'
      case 'offline':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Delivery Partners</h1>
          <p className="text-gray-600">Manage your delivery team and track performance</p>
        </div>
        <button
          onClick={() => setShowAddRider(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
        >
          <Plus className="w-5 h-5" />
          Add Rider
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Riders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalRiders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Online</p>
              <p className="text-2xl font-bold text-gray-900">{stats.onlineRiders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Truck className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Busy</p>
              <p className="text-2xl font-bold text-gray-900">{stats.busyRiders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Deliveries</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalDeliveries}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search riders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="online">Online</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </div>
      </div>

      {/* Riders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-900">Rider</th>
                <th className="text-left p-4 font-medium text-gray-900">Status</th>
                <th className="text-left p-4 font-medium text-gray-900">Vehicle</th>
                <th className="text-left p-4 font-medium text-gray-900">Deliveries</th>
                <th className="text-left p-4 font-medium text-gray-900">Rating</th>
                <th className="text-left p-4 font-medium text-gray-900">Earnings</th>
                <th className="text-left p-4 font-medium text-gray-900">Last Active</th>
                <th className="text-right p-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRiders.map((rider) => (
                <tr key={rider.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{rider.name}</p>
                        <p className="text-sm text-gray-600">{rider.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rider.status)}`}>
                      {rider.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{rider.vehicleType}</p>
                      <p className="text-sm text-gray-600">{rider.vehicleNumber}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{rider.completedDeliveries}</p>
                      <p className="text-sm text-gray-600">of {rider.totalDeliveries}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{rider.rating}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-medium text-gray-900">₹{rider.totalEarnings}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-gray-600">
                      {rider.lastActiveAt 
                        ? new Date(
                            typeof rider.lastActiveAt === 'object' && 'toDate' in rider.lastActiveAt 
                              ? (rider.lastActiveAt as any).toDate() 
                              : rider.lastActiveAt
                          ).toLocaleDateString()
                        : 'Never'
                      }
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 justify-end">
                      {rider.currentLocation && (
                        <button
                          onClick={() => {
                            setSelectedRider(rider)
                            setShowTrackingModal(true)
                          }}
                          className="p-2 text-gray-400 hover:text-blue-600"
                          title="Track Location"
                        >
                          <MapPin className="w-4 h-4" />
                        </button>
                      )}
                      
                      {rider.status === 'online' && availableOrders.length > 0 && (
                        <button
                          onClick={() => {
                            setSelectedRider(rider)
                            setShowAssignOrderModal(true)
                          }}
                          className="p-2 text-gray-400 hover:text-green-600"
                          title="Assign Order"
                        >
                          <Package className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={() => window.open(`tel:${rider.phone}`)}
                        className="p-2 text-gray-400 hover:text-green-600"
                        title="Call Rider"
                      >
                        <Phone className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          const newStatus = rider.status === 'online' ? 'offline' : 'online'
                          handleStatusUpdate(rider.id, newStatus)
                        }}
                        className={`p-2 hover:text-white rounded ${
                          rider.status === 'online' 
                            ? 'text-gray-400 hover:bg-red-600' 
                            : 'text-gray-400 hover:bg-green-600'
                        }`}
                        title={rider.status === 'online' ? 'Set Offline' : 'Set Online'}
                      >
                        {rider.status === 'online' ? 
                          <UserX className="w-4 h-4" /> : 
                          <UserCheck className="w-4 h-4" />
                        }
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRiders.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No riders found</p>
            </div>
          )}
        </div>
      </div>

      {/* Live Tracking Modal */}
      {showTrackingModal && selectedRider && selectedRider.currentLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Live Tracking - {selectedRider.name}
                </h2>
                <button
                  onClick={() => setShowTrackingModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4">
                <LiveTrackingMap
                  mode="admin"
                  height="400px"
                  trackingData={{
                    orderId: selectedRider.currentOrderId || '',
                    riderId: selectedRider.id,
                    status: selectedRider.status,
                    riderLocation: selectedRider.currentLocation,
                    trackingEvents: []
                  }}
                  riderInfo={{
                    name: selectedRider.name,
                    phone: selectedRider.phone,
                    vehicle: selectedRider.vehicleType,
                    rating: selectedRider.rating
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Current Status</p>
                  <p className="font-medium">{selectedRider.status.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Vehicle</p>
                  <p className="font-medium">{selectedRider.vehicleType} - {selectedRider.vehicleNumber}</p>
                </div>
                <div>
                  <p className="text-gray-600">Completed Deliveries</p>
                  <p className="font-medium">{selectedRider.completedDeliveries}</p>
                </div>
                <div>
                  <p className="text-gray-600">Rating</p>
                  <p className="font-medium">{selectedRider.rating} ⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Assignment Modal */}
      {showAssignOrderModal && selectedRider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Assign Order to {selectedRider.name}
                </h2>
                <button
                  onClick={() => setShowAssignOrderModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {availableOrders.map((order) => (
                  <div 
                    key={order.id}
                    className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleAssignOrder(order.id, selectedRider.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">#{order.orderNumber || order.id.slice(-8)}</span>
                      <span className="text-sm text-gray-600">₹{order.totalAmount || order.total || 0}</span>
                    </div>
                    <p className="text-sm text-gray-600">{order.customerName || order.address?.fullName || 'N/A'}</p>
                    <p className="text-xs text-gray-500">{order.address?.street || order.address?.addressLine1 || 'Address not available'}</p>
                  </div>
                ))}
              </div>

              {availableOrders.length === 0 && (
                <p className="text-center text-gray-500 py-4">No pending orders available</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Rider Modal */}
      {showAddRider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Add New Rider</h2>
                <button
                  onClick={() => setShowAddRider(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <AddRiderForm onSubmit={handleCreateRider} onCancel={() => setShowAddRider(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Add Rider Form Component
const AddRiderForm = ({ onSubmit, onCancel }: { onSubmit: (data: any) => void, onCancel: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: 'bike',
    vehicleNumber: '',
    licenseNumber: '',
    aadharNumber: '',
    address: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await onSubmit(formData)
    } catch (error) {
      console.error('Error creating rider:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Enter rider's full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="+91 9876543210"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="rider@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type *</label>
        <select
          required
          value={formData.vehicleType}
          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="bike">Bike</option>
          <option value="scooter">Scooter</option>
          <option value="cycle">Cycle</option>
          <option value="car">Car</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number *</label>
        <input
          type="text"
          required
          value={formData.vehicleNumber}
          onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="MH12AB1234"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
        <input
          type="text"
          value={formData.licenseNumber}
          onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="DL-0120110149646"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Number</label>
        <input
          type="text"
          value={formData.aadharNumber}
          onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="1234 5678 9012"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <textarea
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Enter rider's address"
          rows={3}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Adding...' : 'Add Rider'}
        </button>
      </div>
    </form>
  )
}

export default AdminRidersPage 