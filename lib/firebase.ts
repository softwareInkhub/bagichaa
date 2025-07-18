import { initializeApp, getApps } from 'firebase/app'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc, query, where, orderBy, limit, onSnapshot, Timestamp, writeBatch, increment, DocumentData } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

// Type definitions for our data models
interface RiderData extends DocumentData {
  id: string
  name: string
  phone: string
  email?: string
  vehicleType: string
  vehicleNumber: string
  status: 'online' | 'offline' | 'busy'
  currentLocation?: { lat: number; lng: number; accuracy?: number; timestamp?: Date }
  currentOrderId?: string
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
  createdAt: Date
  lastLocationUpdate?: Date
  lastActiveAt?: Date
}

interface OrderData extends DocumentData {
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
    street?: string
    city?: string
    state?: string
    coordinates?: { lat: number; lng: number }
  }
  total?: number
  totalAmount?: number
  status: string
  riderAssignedAt?: Date
  pickedUpAt?: Date
  outForDeliveryAt?: Date
  deliveredAt?: Date
  estimatedDeliveryTime?: Date
  actualDeliveryTime?: Date
  deliveryProof?: any
  createdAt: Date
  updatedAt?: Date
}

interface TrackingData extends DocumentData {
  id: string
  orderId: string
  riderId: string
  status: string
  customerLocation?: { lat: number; lng: number }
  riderLocation?: { lat: number; lng: number }
  estimatedArrival?: Date
  trackingEvents: Array<{
    event: string
    timestamp: Date
    location?: { lat: number; lng: number }
    note: string
  }>
  createdAt: Date
  updatedAt: Date
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Firebase Storage
export const storage = getStorage(app)

// Production Firebase Auth configuration
auth.useDeviceLanguage()

// Setup reCAPTCHA verifier with better error handling
export const setupRecaptcha = (containerId: string) => {
  // Clear any existing reCAPTCHA
  const container = document.getElementById(containerId)
  if (container) {
    container.innerHTML = ''
  }

  const recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: () => {
      console.log('reCAPTCHA solved')
    },
    'expired-callback': () => {
      console.log('reCAPTCHA expired')
    }
  })
  return recaptchaVerifier
}

// Send OTP to phone number via Firebase SMS
export const sendOTP = async (phoneNumber: string, recaptchaVerifier: RecaptchaVerifier) => {
  try {
    if (!recaptchaVerifier) {
      throw new Error('reCAPTCHA verifier is required')
    }

    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
    return confirmationResult
  } catch (error: any) {
    console.error('Error sending OTP:', error)
    
    // Add specific error handling for common Firebase Auth errors
    if (error.code === 'auth/billing-not-enabled') {
      throw new Error('SMS service not enabled. Please contact support.')
    } else if (error.code === 'auth/too-many-requests') {
      throw new Error('Too many attempts. Please try again later.')
    } else if (error.code === 'auth/invalid-phone-number') {
      throw new Error('Invalid phone number format.')
    } else if (error.code === 'auth/missing-phone-number') {
      throw new Error('Phone number is required.')
    } else if (error.code === 'auth/quota-exceeded') {
      throw new Error('SMS quota exceeded. Please try again later.')
    }
    
    throw error
  }
}

// Product management functions
export const addProduct = async (productData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding product:', error)
    throw error
  }
}

export const updateProduct = async (productId: string, productData: any) => {
  try {
    const productRef = doc(db, 'products', productId)
    await updateDoc(productRef, {
      ...productData,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    await deleteDoc(doc(db, 'products', productId))
  } catch (error) {
    console.error('Error deleting product:', error)
    throw error
  }
}

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting products:', error)
    throw error
  }
}

export const getProduct = async (productId: string) => {
  try {
    const docSnap = await getDoc(doc(db, 'products', productId))
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      throw new Error('Product not found')
    }
  } catch (error) {
    console.error('Error getting product:', error)
    throw error
  }
}

// Order management functions
export const createOrder = async (orderData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const orderRef = doc(db, 'orders', orderId)
    await updateDoc(orderRef, {
      status,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating order status:', error)
    throw error
  }
}

export const getOrders = async () => {
  try {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting orders:', error)
    throw error
  }
}

export const getOrder = async (orderId: string): Promise<OrderData | null> => {
  try {
    const docSnap = await getDoc(doc(db, 'orders', orderId))
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as OrderData
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting order:', error)
    throw error
  }
}

// Category management functions
export const addCategory = async (categoryData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'categories'), {
      ...categoryData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding category:', error)
    throw error
  }
}

export const getCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'categories'))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting categories:', error)
    throw error
  }
}

export const updateCategory = async (categoryId: string, categoryData: any) => {
  try {
    const categoryRef = doc(db, 'categories', categoryId)
    await updateDoc(categoryRef, {
      ...categoryData,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating category:', error)
    throw error
  }
}

export const deleteCategory = async (categoryId: string) => {
  try {
    await deleteDoc(doc(db, 'categories', categoryId))
  } catch (error) {
    console.error('Error deleting category:', error)
    throw error
  }
}

// Real-time listeners
export const subscribeToOrders = (callback: (orders: any[]) => void) => {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
  return onSnapshot(q, (querySnapshot) => {
    const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    callback(orders)
  })
}

export const subscribeToProducts = (callback: (products: any[]) => void) => {
  const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'))
  return onSnapshot(q, (querySnapshot) => {
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    callback(products)
  })
}

// Enhanced Customer Management Functions
export const createCustomer = async (customerData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'customers'), {
      ...customerData,
      createdAt: new Date(),
      updatedAt: new Date(),
      totalOrders: 0,
      totalSpent: 0,
      lastOrderDate: null,
      loyaltyPoints: 0,
      preferredCategories: [],
      averageOrderValue: 0
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating customer:', error)
    throw error
  }
}

export const updateCustomer = async (customerId: string, customerData: any) => {
  try {
    const customerRef = doc(db, 'customers', customerId)
    await updateDoc(customerRef, {
      ...customerData,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating customer:', error)
    throw error
  }
}

export const getCustomers = async () => {
  try {
    const q = query(collection(db, 'customers'), orderBy('totalSpent', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting customers:', error)
    throw error
  }
}

export const getCustomer = async (customerId: string) => {
  try {
    const docSnap = await getDoc(doc(db, 'customers', customerId))
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      throw new Error('Customer not found')
    }
  } catch (error) {
    console.error('Error getting customer:', error)
    throw error
  }
}

export const getCustomerByPhone = async (phone: string) => {
  try {
    const q = query(collection(db, 'customers'), where('phone', '==', phone))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return { id: doc.id, ...doc.data() }
    }
    return null
  } catch (error) {
    console.error('Error getting customer by phone:', error)
    throw error
  }
}

export const getCustomerOrders = async (customerId: string) => {
  try {
    const q = query(
      collection(db, 'orders'), 
      where('customerId', '==', customerId),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting customer orders:', error)
    throw error
  }
}

// Advanced Order Management Functions
export const addOrderNote = async (orderId: string, note: string, addedBy: string) => {
  try {
    const orderRef = doc(db, 'orders', orderId)
    const orderDoc = await getDoc(orderRef)
    
    if (orderDoc.exists()) {
      const currentNotes = orderDoc.data().notes || []
      const newNote = {
        id: Date.now().toString(),
        note,
        addedBy,
        addedAt: new Date()
      }
      
      await updateDoc(orderRef, {
        notes: [...currentNotes, newNote],
        updatedAt: new Date()
      })
    }
  } catch (error) {
    console.error('Error adding order note:', error)
    throw error
  }
}

export const updateOrderTracking = async (orderId: string, trackingData: any) => {
  try {
    const orderRef = doc(db, 'orders', orderId)
    await updateDoc(orderRef, {
      tracking: trackingData,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating order tracking:', error)
    throw error
  }
}

export const getOrdersByDateRange = async (startDate: Date, endDate: Date) => {
  try {
    const q = query(
      collection(db, 'orders'),
      where('createdAt', '>=', startDate),
      where('createdAt', '<=', endDate),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting orders by date range:', error)
    throw error
  }
}

export const getOrdersByStatus = async (status: string) => {
  try {
    const q = query(
      collection(db, 'orders'),
      where('status', '==', status),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting orders by status:', error)
    throw error
  }
}

export const bulkUpdateOrderStatus = async (orderIds: string[], newStatus: string) => {
  try {
    const batch = []
    for (const orderId of orderIds) {
      const orderRef = doc(db, 'orders', orderId)
      batch.push(updateDoc(orderRef, { 
        status: newStatus, 
        updatedAt: new Date() 
      }))
    }
    await Promise.all(batch)
  } catch (error) {
    console.error('Error bulk updating order status:', error)
    throw error
  }
}

// Analytics and Reporting Functions
export const getAnalyticsData = async (period: 'day' | 'week' | 'month' | 'year' = 'month') => {
  try {
    const now = new Date()
    const startDate = new Date()
    
    switch (period) {
      case 'day':
        startDate.setDate(now.getDate() - 30) // Last 30 days
        break
      case 'week':
        startDate.setDate(now.getDate() - 7 * 12) // Last 12 weeks
        break
      case 'month':
        startDate.setMonth(now.getMonth() - 12) // Last 12 months
        break
      case 'year':
        startDate.setFullYear(now.getFullYear() - 5) // Last 5 years
        break
    }

    const [orders, products, customers] = await Promise.all([
      getOrdersByDateRange(startDate, now),
      getProducts(),
      getCustomers()
    ])

    return {
      orders,
      products,
      customers,
      period,
      dateRange: { startDate, endDate: now }
    }
  } catch (error) {
    console.error('Error getting analytics data:', error)
    throw error
  }
}

export const getRevenueAnalytics = async (period: string = 'month') => {
  try {
    const analyticsData = await getAnalyticsData(period as any)
    const { orders } = analyticsData
    
    const revenueByPeriod = new Map()
    const revenueByCategory = new Map()
    const revenueByProduct = new Map()
    
    let totalRevenue = 0
    let totalOrders = orders.length
    let averageOrderValue = 0
    
    orders.forEach((order: any) => {
      const orderDate = order.createdAt?.toDate() || new Date(order.createdAt)
      const revenue = order.total || 0
      totalRevenue += revenue
      
      // Group by period
      let periodKey = ''
      switch (period) {
        case 'day':
          periodKey = orderDate.toISOString().split('T')[0]
          break
        case 'week':
          const weekStart = new Date(orderDate)
          weekStart.setDate(orderDate.getDate() - orderDate.getDay())
          periodKey = weekStart.toISOString().split('T')[0]
          break
        case 'month':
          periodKey = `${orderDate.getFullYear()}-${(orderDate.getMonth() + 1).toString().padStart(2, '0')}`
          break
        case 'year':
          periodKey = orderDate.getFullYear().toString()
          break
      }
      
      revenueByPeriod.set(periodKey, (revenueByPeriod.get(periodKey) || 0) + revenue)
      
      // Revenue by product
      order.items?.forEach((item: any) => {
        const productRevenue = (item.price || 0) * (item.qty || 0)
        revenueByProduct.set(item.name, (revenueByProduct.get(item.name) || 0) + productRevenue)
        
        // Category would need to be retrieved from product data
        const category = item.category || 'Other'
        revenueByCategory.set(category, (revenueByCategory.get(category) || 0) + productRevenue)
      })
    })
    
    averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
    
    return {
      totalRevenue,
      totalOrders,
      averageOrderValue,
      revenueByPeriod: Array.from(revenueByPeriod.entries()).map(([period, revenue]) => ({ period, revenue })),
      revenueByCategory: Array.from(revenueByCategory.entries()).map(([category, revenue]) => ({ category, revenue })),
      topProducts: Array.from(revenueByProduct.entries())
        .map(([name, revenue]) => ({ name, revenue }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 10)
    }
  } catch (error) {
    console.error('Error getting revenue analytics:', error)
    throw error
  }
}

export const getCustomerAnalytics = async () => {
  try {
    const [customers, orders] = await Promise.all([
      getCustomers(),
      getOrders()
    ])
    
    // Handle empty customer data gracefully
    if (!customers || customers.length === 0) {
      return {
        totalCustomers: 0,
        segments: { new: 0, active: 0, inactive: 0, churned: 0 },
        averageLifetimeValue: 0,
        geographicDistribution: [],
        topCustomers: []
      }
    }
    
    // Customer segmentation
    const segments = {
      new: 0, // 0-30 days
      active: 0, // 31-90 days
      inactive: 0, // 91-180 days
      churned: 0 // 180+ days
    }
    
    const customerLifetimeValue = new Map()
    const orderFrequency = new Map()
    const geographicDistribution = new Map()
    
    const now = new Date()
    
    customers.forEach((customer: any) => {
      // Handle missing lastOrderDate
      let lastOrderDate = customer.lastOrderDate
      if (lastOrderDate) {
        lastOrderDate = lastOrderDate.toDate ? lastOrderDate.toDate() : new Date(lastOrderDate)
      } else {
        // If no last order date, use created date or current date
        lastOrderDate = customer.createdAt ? 
          (customer.createdAt.toDate ? customer.createdAt.toDate() : new Date(customer.createdAt)) :
          new Date()
      }
      
      const daysSinceLastOrder = (now.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24)
      
      if (daysSinceLastOrder <= 30) segments.new++
      else if (daysSinceLastOrder <= 90) segments.active++
      else if (daysSinceLastOrder <= 180) segments.inactive++
      else segments.churned++
      
      customerLifetimeValue.set(customer.id, customer.totalSpent || 0)
      orderFrequency.set(customer.id, customer.totalOrders || 0)
      
      const location = `${customer.city || 'Unknown'}, ${customer.state || 'Unknown'}`
      geographicDistribution.set(location, (geographicDistribution.get(location) || 0) + 1)
    })
    
    const totalSpent = customers.reduce((sum: number, c: any) => sum + (c.totalSpent || 0), 0)
    const averageLifetimeValue = customers.length > 0 ? totalSpent / customers.length : 0
    
    return {
      totalCustomers: customers.length,
      segments,
      averageLifetimeValue,
      geographicDistribution: Array.from(geographicDistribution.entries()).map(([location, count]) => ({ location, count })),
      topCustomers: customers.slice(0, 10).map((c: any) => ({
        id: c.id,
        name: c.name,
        phone: c.phone,
        totalSpent: c.totalSpent || 0,
        totalOrders: c.totalOrders || 0
      }))
    }
  } catch (error) {
    console.error('Error getting customer analytics:', error)
    // Return empty analytics if there's an error
    return {
      totalCustomers: 0,
      segments: { new: 0, active: 0, inactive: 0, churned: 0 },
      averageLifetimeValue: 0,
      geographicDistribution: [],
      topCustomers: []
    }
  }
}

export const getProductAnalytics = async () => {
  try {
    const [products, orders] = await Promise.all([
      getProducts(),
      getOrders()
    ])
    
    const productSales = new Map()
    const categoryPerformance = new Map()
    const inventoryStatus = new Map()
    
    // Initialize product sales tracking
    products.forEach((product: any) => {
      productSales.set(product.id, {
        name: product.name,
        category: product.category,
        price: product.price,
        inventory: product.inventory || 0,
        sold: 0,
        revenue: 0
      })
    })
    
    // Calculate sales from orders
    orders.forEach((order: any) => {
      order.items?.forEach((item: any) => {
        const productId = item.productId || item.id
        if (productSales.has(productId)) {
          const productData = productSales.get(productId)
          productData.sold += item.qty || 0
          productData.revenue += (item.price || 0) * (item.qty || 0)
          
          const category = productData.category || 'Other'
          const categoryData = categoryPerformance.get(category) || { sold: 0, revenue: 0 }
          categoryData.sold += item.qty || 0
          categoryData.revenue += (item.price || 0) * (item.qty || 0)
          categoryPerformance.set(category, categoryData)
        }
      })
    })
    
    const topSellingProducts = Array.from(productSales.values())
      .sort((a: any, b: any) => b.sold - a.sold)
      .slice(0, 10)
    
    const topRevenueProducts = Array.from(productSales.values())
      .sort((a: any, b: any) => b.revenue - a.revenue)
      .slice(0, 10)
    
    return {
      totalProducts: products.length,
      topSellingProducts,
      topRevenueProducts,
      categoryPerformance: Array.from(categoryPerformance.entries()).map(([category, data]) => ({ category, ...data })),
      lowStockAlerts: Array.from(productSales.values()).filter((p: any) => p.inventory < 10)
    }
  } catch (error) {
    console.error('Error getting product analytics:', error)
    throw error
  }
}

// Real-time Subscriptions
export const subscribeToCustomers = (callback: (customers: any[]) => void) => {
  const q = query(collection(db, 'customers'), orderBy('totalSpent', 'desc'))
  return onSnapshot(q, (querySnapshot) => {
    const customers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    callback(customers)
  })
}

export const subscribeToAnalytics = (callback: (data: any) => void) => {
  // Subscribe to orders for real-time analytics updates
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'), limit(100))
  return onSnapshot(q, async (querySnapshot) => {
    const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    
    // Calculate basic analytics
    const totalRevenue = orders.reduce((sum, order: any) => sum + (order.total || 0), 0)
    const totalOrders = orders.length
    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
    
    const statusCounts = orders.reduce((acc: any, order: any) => {
      acc[order.status] = (acc[order.status] || 0) + 1
      return acc
    }, {})
    
    callback({
      totalRevenue,
      totalOrders,
      averageOrderValue,
      statusCounts,
      recentOrders: orders.slice(0, 10)
    })
  })
}

// Function to create sample customer data for testing
export const createSampleCustomers = async () => {
  try {
    const sampleCustomers = [
      {
        name: 'Rajesh Kumar',
        phone: '+91-9876543210',
        email: 'rajesh.kumar@email.com',
        city: 'Delhi',
        state: 'Delhi',
        totalOrders: 5,
        totalSpent: 12500,
        lastOrderDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        firstOrderDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 3 months ago
        loyaltyPoints: 125,
        preferredCategories: ['plants', 'fertilizers']
      },
      {
        name: 'Priya Sharma',
        phone: '+91-9876543211',
        email: 'priya.sharma@email.com',
        city: 'Mumbai',
        state: 'Maharashtra',
        totalOrders: 8,
        totalSpent: 18750,
        lastOrderDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        firstOrderDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 4 months ago
        loyaltyPoints: 188,
        preferredCategories: ['plants', 'tools']
      },
      {
        name: 'Amit Patel',
        phone: '+91-9876543212',
        email: 'amit.patel@email.com',
        city: 'Bangalore',
        state: 'Karnataka',
        totalOrders: 3,
        totalSpent: 7250,
        lastOrderDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
        firstOrderDate: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000), // 2.5 months ago
        loyaltyPoints: 72,
        preferredCategories: ['seeds', 'fertilizers']
      },
      {
        name: 'Sunita Verma',
        phone: '+91-9876543213',
        email: 'sunita.verma@email.com',
        city: 'Chennai',
        state: 'Tamil Nadu',
        totalOrders: 12,
        totalSpent: 28900,
        lastOrderDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        firstOrderDate: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000), // 6 months ago
        loyaltyPoints: 289,
        preferredCategories: ['plants', 'fertilizers', 'tools']
      },
      {
        name: 'Ravi Singh',
        phone: '+91-9876543214',
        city: 'Pune',
        state: 'Maharashtra',
        totalOrders: 2,
        totalSpent: 4500,
        lastOrderDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 4 months ago
        firstOrderDate: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000), // 5 months ago
        loyaltyPoints: 45,
        preferredCategories: ['seeds']
      },
      {
        name: 'Meera Gupta',
        phone: '+91-9876543215',
        email: 'meera.gupta@email.com',
        city: 'Kolkata',
        state: 'West Bengal',
        totalOrders: 6,
        totalSpent: 15200,
        lastOrderDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
        firstOrderDate: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000), // 3.3 months ago
        loyaltyPoints: 152,
        preferredCategories: ['plants', 'tools']
      },
      {
        name: 'Karan Joshi',
        phone: '+91-9876543216',
        email: 'karan.joshi@email.com',
        city: 'Ahmedabad',
        state: 'Gujarat',
        totalOrders: 4,
        totalSpent: 9800,
        lastOrderDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 1 month ago
        firstOrderDate: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000), // 2.7 months ago
        loyaltyPoints: 98,
        preferredCategories: ['fertilizers', 'tools']
      },
      {
        name: 'Deepika Reddy',
        phone: '+91-9876543217',
        email: 'deepika.reddy@email.com',
        city: 'Hyderabad',
        state: 'Telangana',
        totalOrders: 9,
        totalSpent: 22300,
        lastOrderDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
        firstOrderDate: new Date(Date.now() - 130 * 24 * 60 * 60 * 1000), // 4.3 months ago
        loyaltyPoints: 223,
        preferredCategories: ['plants', 'fertilizers', 'seeds']
      }
    ]

    const customerIds = []
    for (const customerData of sampleCustomers) {
      const customerId = await createCustomer(customerData)
      customerIds.push(customerId)
      console.log(`Created customer: ${customerData.name} with ID: ${customerId}`)
    }

    return customerIds
  } catch (error) {
    console.error('Error creating sample customers:', error)
    throw error
  }
}

export const createSampleCategories = async () => {
  try {
    console.log('Creating sample categories...')
    
    const sampleCategories = [
      {
        name: 'Indoor Plants',
        description: 'Perfect plants for your home and office spaces',
        icon: '🪴',
        subcategories: ['Succulents', 'Ferns', 'Air Purifying', 'Low Light', 'Snake Plants', 'Pothos', 'Monstera', 'Peace Lily']
      },
      {
        name: 'Outdoor Plants',
        description: 'Beautiful plants for gardens and outdoor spaces',
        icon: '🌳',
        subcategories: ['Trees', 'Shrubs', 'Climbers', 'Ground Cover', 'Fruit Trees', 'Flowering Trees', 'Shade Trees']
      },
      {
        name: 'Flowering Plants',
        description: 'Vibrant flowers to brighten your space',
        icon: '🌸',
        subcategories: ['Roses', 'Lilies', 'Marigolds', 'Jasmine', 'Sunflowers', 'Petunias', 'Orchids', 'Tulips']
      },
      {
        name: 'Tools',
        description: 'Professional gardening tools and equipment',
        icon: '🛠️',
        subcategories: ['Hand Tools', 'Watering Tools', 'Pruning Tools', 'Digging Tools', 'Measuring Tools', 'Protective Gear']
      },
      {
        name: 'Soil & Fertilizer',
        description: 'Organic soil and plant nutrition products',
        icon: '🪨',
        subcategories: ['Potting Mix', 'Organic Fertilizers', 'Liquid Fertilizers', 'Compost', 'Soil Amendments', 'Mulch']
      },
      {
        name: 'Pots & Planters',
        description: 'Beautiful containers for your plants',
        icon: '🏺',
        subcategories: ['Ceramic Pots', 'Plastic Planters', 'Terracotta Pots', 'Hanging Planters', 'Self-Watering', 'Decorative Pots']
      },
      {
        name: 'Seeds',
        description: 'High-quality seeds for growing your own plants',
        icon: '🌾',
        subcategories: ['Flower Seeds', 'Vegetable Seeds', 'Herb Seeds', 'Grass Seeds', 'Exotic Seeds', 'Organic Seeds']
      }
    ]

    const promises = sampleCategories.map(category => addCategory(category))
    await Promise.all(promises)
    
    console.log('Sample categories created successfully!')
    return true
  } catch (error) {
    console.error('Error creating sample categories:', error)
    return false
  }
}

export const createSampleProducts = async () => {
  try {
    console.log('Creating sample products...')
    
    const sampleProducts = [
      {
        name: 'Snake Plant (Sansevieria)',
        category: 'Indoor Plants',
        subcategory: 'Snake Plants',
        price: 599,
        originalPrice: 799,
        rating: 4.8,
        reviews: 234,
        image: '', // Will be added via admin panel
        badge: 'Bestseller',
        badgeColor: 'bg-green-500',
        inStock: true,
        fastDelivery: true,
        organic: true,
        features: ['Air Purifying', 'Low Maintenance', 'Low Light Tolerant'],
        description: 'Perfect air-purifying plant for beginners. Thrives in low light and requires minimal watering.'
      },
      {
        name: 'Monstera Deliciosa',
        category: 'Indoor Plants',
        subcategory: 'Monstera',
        price: 1299,
        originalPrice: 1599,
        rating: 4.9,
        reviews: 156,
        image: '',
        badge: 'Premium',
        badgeColor: 'bg-purple-500',
        inStock: true,
        fastDelivery: false,
        organic: true,
        features: ['Instagram Favorite', 'Fast Growing', 'Statement Plant'],
        description: 'Popular tropical houseplant with stunning split leaves. Perfect for bright, indirect light.'
      },
      {
        name: 'Rose Plant - Red Beauty',
        category: 'Flowering Plants',
        subcategory: 'Roses',
        price: 349,
        originalPrice: 499,
        rating: 4.6,
        reviews: 89,
        image: '',
        badge: 'New',
        badgeColor: 'bg-blue-500',
        inStock: true,
        fastDelivery: true,
        organic: false,
        features: ['Fragrant Blooms', 'Long Lasting', 'Garden Classic'],
        description: 'Beautiful red roses that bloom throughout the season. Perfect for gardens and bouquets.'
      },
      {
        name: 'Professional Pruning Shears',
        category: 'Tools',
        subcategory: 'Pruning Tools',
        price: 899,
        originalPrice: 1199,
        rating: 4.7,
        reviews: 267,
        image: '',
        badge: 'Tool of the Month',
        badgeColor: 'bg-orange-500',
        inStock: true,
        fastDelivery: true,
        organic: false,
        features: ['Sharp Blades', 'Ergonomic Handle', 'Lifetime Warranty'],
        description: 'Professional-grade pruning shears for precise cuts. Ideal for roses, shrubs, and small branches.'
      },
      {
        name: 'Organic Potting Mix - 5kg',
        category: 'Soil & Fertilizer',
        subcategory: 'Potting Mix',
        price: 299,
        originalPrice: 399,
        rating: 4.5,
        reviews: 445,
        image: '',
        badge: 'Organic',
        badgeColor: 'bg-emerald-500',
        inStock: true,
        fastDelivery: true,
        organic: true,
        features: ['100% Organic', 'Ready to Use', 'Nutrient Rich'],
        description: 'Premium organic potting mix perfect for indoor and outdoor plants. Enriched with natural nutrients.'
      },
      {
        name: 'Ceramic Planter - White',
        category: 'Pots & Planters',
        subcategory: 'Ceramic Pots',
        price: 799,
        originalPrice: 999,
        rating: 4.4,
        reviews: 123,
        image: '',
        badge: 'Trending',
        badgeColor: 'bg-pink-500',
        inStock: true,
        fastDelivery: false,
        organic: false,
        features: ['Drainage Holes', 'Modern Design', 'Weather Resistant'],
        description: 'Elegant white ceramic planter with drainage holes. Perfect for indoor and covered outdoor spaces.'
      },
      {
        name: 'Sunflower Seeds - Premium Mix',
        category: 'Seeds',
        subcategory: 'Flower Seeds',
        price: 149,
        originalPrice: 199,
        rating: 4.6,
        reviews: 89,
        image: '',
        badge: 'Flower Seeds',
        badgeColor: 'bg-pink-500',
        inStock: true,
        fastDelivery: true,
        organic: true,
        features: ['Fast Germination', 'High Yield', 'Disease Resistant'],
        description: 'Premium sunflower seed mix for beautiful garden blooms. Easy to grow and perfect for beginners.'
      },
      {
        name: 'Organic Tomato Seeds - Cherry Variety',
        category: 'Seeds',
        subcategory: 'Vegetable Seeds',
        price: 99,
        originalPrice: 129,
        rating: 4.8,
        reviews: 156,
        image: '',
        badge: 'Vegetable Seeds',
        badgeColor: 'bg-green-500',
        inStock: true,
        fastDelivery: true,
        organic: true,
        features: ['Organic Certified', 'Sweet Flavor', 'High Yield'],
        description: 'Organic cherry tomato seeds that produce sweet, juicy fruits. Perfect for containers and gardens.'
      },
      {
        name: 'Basil Seeds - Sweet Genovese',
        category: 'Seeds',
        subcategory: 'Herb Seeds',
        price: 79,
        originalPrice: 99,
        rating: 4.7,
        reviews: 234,
        image: '',
        badge: 'Herb Seeds',
        badgeColor: 'bg-emerald-500',
        inStock: true,
        fastDelivery: true,
        organic: true,
        features: ['Aromatic', 'Fast Growing', 'Culinary Use'],
        description: 'Classic Genovese basil seeds for aromatic herbs. Essential for Italian cooking and pesto making.'
      },
      {
        name: 'Lawn Grass Seeds - Bermuda Mix',
        category: 'Seeds',
        subcategory: 'Grass Seeds',
        price: 299,
        originalPrice: 399,
        rating: 4.5,
        reviews: 67,
        image: '',
        badge: 'Grass Seeds',
        badgeColor: 'bg-lime-500',
        inStock: true,
        fastDelivery: false,
        organic: false,
        features: ['Drought Resistant', 'Low Maintenance', 'Dense Growth'],
        description: 'Premium Bermuda grass seed mix for lush, green lawns. Perfect for warm climates and high-traffic areas.'
      },
      {
        name: 'Exotic Orchid Seeds - Phalaenopsis',
        category: 'Seeds',
        subcategory: 'Exotic Seeds',
        price: 599,
        originalPrice: 799,
        rating: 4.9,
        reviews: 45,
        image: '',
        badge: 'Exotic Seeds',
        badgeColor: 'bg-purple-500',
        inStock: true,
        fastDelivery: false,
        organic: false,
        features: ['Rare Variety', 'Beautiful Blooms', 'Collector Item'],
        description: 'Rare Phalaenopsis orchid seeds for exotic flower enthusiasts. Requires special care but produces stunning blooms.'
      },
      {
        name: 'Ceramic Planter - Modern White',
        category: 'Pots & Planters',
        subcategory: 'Ceramic Pots',
        price: 899,
        originalPrice: 1199,
        rating: 4.7,
        reviews: 189,
        image: '',
        badge: 'Ceramic Pots',
        badgeColor: 'bg-blue-500',
        inStock: true,
        fastDelivery: true,
        organic: false,
        features: ['Drainage Holes', 'Modern Design', 'Weather Resistant'],
        description: 'Elegant white ceramic planter with drainage holes. Perfect for indoor and covered outdoor spaces.'
      },
      {
        name: 'Hanging Planter - Macrame Style',
        category: 'Pots & Planters',
        subcategory: 'Hanging Planters',
        price: 649,
        originalPrice: 849,
        rating: 4.6,
        reviews: 234,
        image: '',
        badge: 'Hanging Planters',
        badgeColor: 'bg-purple-500',
        inStock: true,
        fastDelivery: false,
        organic: false,
        features: ['Macrame Design', 'Adjustable Length', 'Indoor Use'],
        description: 'Beautiful macrame hanging planter perfect for trailing plants. Adds bohemian charm to any space.'
      },
      {
        name: 'Self-Watering Planter - Smart Pot',
        category: 'Pots & Planters',
        subcategory: 'Self-Watering',
        price: 1299,
        originalPrice: 1599,
        rating: 4.8,
        reviews: 156,
        image: '',
        badge: 'Self-Watering',
        badgeColor: 'bg-teal-500',
        inStock: true,
        fastDelivery: true,
        organic: false,
        features: ['Water Reservoir', 'Moisture Indicator', 'Overflow Protection'],
        description: 'Smart self-watering planter with built-in water reservoir. Perfect for busy plant parents.'
      },
      {
        name: 'Terracotta Pot - Classic Round',
        category: 'Pots & Planters',
        subcategory: 'Terracotta Pots',
        price: 299,
        originalPrice: 399,
        rating: 4.5,
        reviews: 445,
        image: '',
        badge: 'Terracotta Pots',
        badgeColor: 'bg-orange-500',
        inStock: true,
        fastDelivery: true,
        organic: true,
        features: ['Natural Material', 'Breathable', 'Classic Design'],
        description: 'Classic terracotta pot made from natural clay. Excellent for root health and moisture regulation.'
      },
      {
        name: 'Decorative Planter - Geometric Pattern',
        category: 'Pots & Planters',
        subcategory: 'Decorative Pots',
        price: 799,
        originalPrice: 999,
        rating: 4.4,
        reviews: 123,
        image: '',
        badge: 'Decorative Pots',
        badgeColor: 'bg-pink-500',
        inStock: true,
        fastDelivery: false,
        organic: false,
        features: ['Geometric Design', 'Modern Aesthetic', 'Statement Piece'],
        description: 'Stunning geometric planter that doubles as home decor. Perfect for showcasing your favorite plants.'
      }
    ]

    const promises = sampleProducts.map(product => addProduct(product))
    await Promise.all(promises)
    
    console.log('Sample products created successfully!')
    return true
  } catch (error) {
    console.error('Error creating sample products:', error)
    return false
  }
}

// Image Upload Utilities
export const uploadImage = async (file: File, folder: string = 'images'): Promise<string> => {
  try {
    // Create a unique filename
    const timestamp = Date.now()
    const filename = `${timestamp}_${file.name}`
    const storageRef = ref(storage, `${folder}/${filename}`)
    
    // Upload the file
    const snapshot = await uploadBytes(storageRef, file)
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    console.log('Image uploaded successfully:', downloadURL)
    return downloadURL
  } catch (error) {
    console.error('Error uploading image:', error)
    throw new Error('Failed to upload image. Please try again.')
  }
}

export const uploadMultipleImages = async (files: File[], folder: string = 'images'): Promise<string[]> => {
  try {
    const uploadPromises = files.map(file => uploadImage(file, folder))
    const urls = await Promise.all(uploadPromises)
    return urls
  } catch (error) {
    console.error('Error uploading multiple images:', error)
    throw new Error('Failed to upload images. Please try again.')
  }
}

export const deleteImageFromStorage = async (imageUrl: string): Promise<boolean> => {
  try {
    // Extract the path from the URL
    const urlParts = imageUrl.split('/')
    const fileName = urlParts[urlParts.length - 1].split('?')[0]
    
    // Create reference and delete
    const imageRef = ref(storage, fileName)
    await deleteObject(imageRef)
    
    console.log('Image deleted successfully')
    return true
  } catch (error) {
    console.error('Error deleting image:', error)
    return false
  }
}

// Image validation utility
export const validateImageFile = (file: File): { isValid: boolean; error?: string } => {
  // Check file type
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  if (!allowedTypes.includes(file.type)) {
    return { 
      isValid: false, 
      error: 'Please select a valid image file (JPEG, PNG, WebP, or GIF)' 
    }
  }
  
  // Check file size (max 5MB)
  const maxSize = 5 * 1024 * 1024 // 5MB in bytes
  if (file.size > maxSize) {
    return { 
      isValid: false, 
      error: 'Image size must be less than 5MB' 
    }
  }
  
  return { isValid: true }
}

// Image compression utility (optional)
export const compressImage = (file: File, maxWidth: number = 800, quality: number = 0.8): Promise<File> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      // Calculate new dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height)
      canvas.width = img.width * ratio
      canvas.height = img.height * ratio
      
      // Draw and compress
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      canvas.toBlob((blob) => {
        if (blob) {
          const compressedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now()
          })
          resolve(compressedFile)
        } else {
          resolve(file) // Return original if compression fails
        }
      }, file.type, quality)
    }
    
    img.src = URL.createObjectURL(file)
  })
}

// Customer Session Management
export const getCurrentCustomer = () => {
  if (typeof window !== 'undefined') {
    const customerData = localStorage.getItem('currentCustomer')
    return customerData ? JSON.parse(customerData) : null
  }
  return null
}

export const setCurrentCustomer = (customer: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentCustomer', JSON.stringify(customer))
  }
}

export const clearCurrentCustomer = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentCustomer')
  }
}

export const isCustomerLoggedIn = () => {
  return getCurrentCustomer() !== null
}

// Enhanced customer creation with better defaults
export const createCustomerAccount = async (customerData: any) => {
  try {
    const enhancedData = {
      ...customerData,
      createdAt: new Date(),
      firstOrderDate: null,
      lastOrderDate: null,
      totalOrders: 0,
      totalSpent: 0,
      loyaltyPoints: 0,
      preferredCategories: [],
      isActive: true
    }
    
    return await createCustomer(enhancedData)
  } catch (error) {
    console.error('Error creating customer account:', error)
    throw error
  }
}

// Search-related functions
export const getSearchSuggestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'searchSuggestions'))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting search suggestions:', error)
    return []
  }
}

export const getRecentSearches = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'recentSearches'))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting recent searches:', error)
    return []
  }
}

export const getTrendingSearches = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'trendingSearches'))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting trending searches:', error)
    return []
  }
}

export const searchProducts = async (query: string) => {
  try {
    const products = await getProducts()
    const searchTerm = query.toLowerCase()
    
    return products.filter((product: any) => {
      const name = product.name?.toLowerCase() || ''
      const category = product.category?.toLowerCase() || ''
      const subcategory = product.subcategory?.toLowerCase() || ''
      const description = product.description?.toLowerCase() || ''
      const features = product.features?.join(' ').toLowerCase() || ''
      
      return name.includes(searchTerm) || 
             category.includes(searchTerm) || 
             subcategory.includes(searchTerm) || 
             description.includes(searchTerm) || 
             features.includes(searchTerm)
    })
  } catch (error) {
    console.error('Error searching products:', error)
    return []
  }
}

export const addRecentSearch = async (searchTerm: string) => {
  try {
    // Check if search term already exists
    const existingSearches = await getRecentSearches()
    const existing = existingSearches.find((search: any) => search.term === searchTerm)
    
    if (existing) {
      // Update timestamp if exists
      await updateDoc(doc(db, 'recentSearches', existing.id), {
        timestamp: new Date()
      })
    } else {
      // Add new search term
      await addDoc(collection(db, 'recentSearches'), {
        term: searchTerm,
        timestamp: new Date()
      })
    }
  } catch (error) {
    console.error('Error adding recent search:', error)
  }
}

export const createSampleSearchData = async () => {
  try {
    console.log('Creating sample search data...')
    
    // Sample search suggestions
    const searchSuggestions = [
      { term: 'monstera plant', type: 'product', category: 'Indoor Plants' },
      { term: 'snake plant', type: 'product', category: 'Indoor Plants' },
      { term: 'gardening tools', type: 'category', category: 'Tools' },
      { term: 'organic soil', type: 'product', category: 'Soil & Fertilizer' },
      { term: 'flower seeds', type: 'product', category: 'Seeds' },
      { term: 'plant pots', type: 'product', category: 'Pots & Planters' },
      { term: 'fertilizer', type: 'category', category: 'Soil & Fertilizer' },
      { term: 'succulents', type: 'product', category: 'Indoor Plants' },
      { term: 'air purifying plants', type: 'product', category: 'Indoor Plants' },
      { term: 'herb garden', type: 'category', category: 'Seeds' },
      { term: 'bonsai trees', type: 'product', category: 'Outdoor Plants' },
      { term: 'vertical garden', type: 'category', category: 'Tools' }
    ]

    // Sample recent searches
    const recentSearches = [
      { term: 'monstera plant', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) }, // 2 hours ago
      { term: 'gardening tools', timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // 1 day ago
      { term: 'organic soil', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) }, // 2 days ago
      { term: 'flower seeds', timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) }, // 3 days ago
      { term: 'plant pots', timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) } // 5 days ago
    ]

    // Sample trending searches
    const trendingSearches = [
      { term: 'succulents', count: 156, trend: 'up' },
      { term: 'air purifying plants', count: 134, trend: 'up' },
      { term: 'herb garden', count: 98, trend: 'up' },
      { term: 'bonsai trees', count: 87, trend: 'stable' },
      { term: 'vertical garden', count: 76, trend: 'up' }
    ]

    // Add search suggestions
    for (const suggestion of searchSuggestions) {
      await addDoc(collection(db, 'searchSuggestions'), suggestion)
    }

    // Add recent searches
    for (const search of recentSearches) {
      await addDoc(collection(db, 'recentSearches'), search)
    }

    // Add trending searches
    for (const trend of trendingSearches) {
      await addDoc(collection(db, 'trendingSearches'), trend)
    }
    
    console.log('Sample search data created successfully!')
    return true
  } catch (error) {
    console.error('Error creating sample search data:', error)
    return false
  }
}

export default app 

// ============================================================================
// RIDER MANAGEMENT SYSTEM - Enhanced for Delivery Tracking
// ============================================================================

// Rider Authentication and Management
export const authenticateRider = async (phoneNumber: string, otp: string, confirmationResult: any): Promise<RiderData> => {
  try {
    // Verify OTP
    const result = await confirmationResult.confirm(otp)
    const user = result.user
    
    // Check if rider exists in database
    const ridersRef = collection(db, 'riders')
    const q = query(ridersRef, where('phone', '==', phoneNumber))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      throw new Error('Rider not found. Please contact admin for registration.')
    }
    
    const riderDoc = querySnapshot.docs[0]
    const riderData = { id: riderDoc.id, ...riderDoc.data() } as RiderData
    
    // Check if rider is active
    if (!riderData.isActive) {
      throw new Error('Rider account is deactivated. Please contact admin.')
    }
    
    // Update last active timestamp
    await updateDoc(riderDoc.ref, {
      lastActiveAt: new Date(),
      status: 'online'
    })
    
    return riderData
  } catch (error) {
    console.error('Error authenticating rider:', error)
    throw error
  }
}

// Create new rider (Admin function)
export const createRider = async (riderData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'riders'), {
      ...riderData,
      status: 'offline',
      currentLocation: null,
      currentOrderId: null,
      totalDeliveries: 0,
      completedDeliveries: 0,
      cancelledDeliveries: 0,
      rating: 5.0,
      totalEarnings: 0,
      isActive: true,
      isVerified: false,
      performance: {
        avgDeliveryTime: 0,
        onTimeDeliveryRate: 100,
        customerRating: 5.0
      },
      createdAt: new Date(),
      lastLocationUpdate: null,
      lastActiveAt: null
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating rider:', error)
    throw error
  }
}

// Get all riders with real-time updates
export const getRiders = async (): Promise<RiderData[]> => {
  try {
    const ridersRef = collection(db, 'riders')
    const q = query(ridersRef, orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as RiderData))
  } catch (error) {
    console.error('Error getting riders:', error)
    throw error
  }
}

// Real-time rider subscription
export const subscribeToRiders = (callback: (riders: any[]) => void) => {
  const ridersRef = collection(db, 'riders')
  const q = query(ridersRef, orderBy('createdAt', 'desc'))
  return onSnapshot(q, (querySnapshot) => {
    const riders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    callback(riders)
  })
}

// Update rider status
export const updateRiderStatus = async (riderId: string, status: 'online' | 'offline' | 'busy') => {
  try {
    const riderRef = doc(db, 'riders', riderId)
    await updateDoc(riderRef, {
      status,
      lastActiveAt: new Date()
    })
  } catch (error) {
    console.error('Error updating rider status:', error)
    throw error
  }
}

// Update rider location
export const updateRiderLocation = async (riderId: string, location: {lat: number, lng: number}) => {
  try {
    const riderRef = doc(db, 'riders', riderId)
    await updateDoc(riderRef, {
      currentLocation: {
        ...location,
        accuracy: 10, // meters
        timestamp: new Date()
      },
      lastLocationUpdate: new Date()
    })

    // Also update riderLocation in order_tracking for the active order
    // Find the rider's current order
    const riderSnap = await getDoc(riderRef)
    const riderData = riderSnap.data()
    const currentOrderId = riderData?.currentOrderId
    if (currentOrderId) {
      const trackingRef = query(
        collection(db, 'order_tracking'),
        where('orderId', '==', currentOrderId)
      )
      const trackingSnap = await getDocs(trackingRef)
      if (!trackingSnap.empty) {
        const trackingDoc = trackingSnap.docs[0]
        await updateDoc(trackingDoc.ref, {
          riderLocation: location,
          updatedAt: new Date()
        })
      }
    }
  } catch (error) {
    console.error('Error updating rider location:', error)
    throw error
  }
}

// Get available riders for order assignment
export const getAvailableRiders = async (customerLocation?: {lat: number, lng: number}): Promise<RiderData[]> => {
  try {
    const ridersRef = collection(db, 'riders')
    const q = query(
      ridersRef, 
      where('status', 'in', ['online']),
      where('isActive', '==', true)
    )
    const querySnapshot = await getDocs(q)
    const riders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as RiderData))
    
    // If customer location provided, sort by distance
    if (customerLocation) {
      return riders.filter(rider => rider.currentLocation).sort((a, b) => {
        const distanceA = calculateDistance(customerLocation, a.currentLocation!)
        const distanceB = calculateDistance(customerLocation, b.currentLocation!)
        return distanceA - distanceB
      })
    }
    
    return riders
  } catch (error) {
    console.error('Error getting available riders:', error)
    throw error
  }
}

// ============================================================================
// ENHANCED ORDER MANAGEMENT WITH RIDER ASSIGNMENT
// ============================================================================

// Assign rider to order
export const assignRiderToOrder = async (orderId: string, riderId: string) => {
  try {
    const batch = writeBatch(db)
    
    // Update order with rider assignment
    const orderRef = doc(db, 'orders', orderId)
    batch.update(orderRef, {
      riderId,
      status: 'assigned',
      riderAssignedAt: new Date(),
      updatedAt: new Date()
    })
    
    // Update rider status to busy and assign order
    const riderRef = doc(db, 'riders', riderId)
    batch.update(riderRef, {
      status: 'busy',
      currentOrderId: orderId,
      lastActiveAt: new Date()
    })
    
    // Fetch order to get address coordinates
    const orderSnap = await getDoc(orderRef)
    let customerLocation = null
    if (orderSnap.exists()) {
      const orderData = orderSnap.data()
      customerLocation = orderData?.address?.coordinates || null
    }
    // Create tracking document
    const trackingRef = doc(collection(db, 'order_tracking'))
    batch.set(trackingRef, {
      orderId,
      riderId,
      status: 'assigned',
      customerLocation,
      riderLocation: null,
      estimatedArrival: null,
      actualDistance: null,
      estimatedDistance: null,
      route: [],
      trackingEvents: [{
        event: 'order_assigned',
        timestamp: new Date(),
        location: null,
        note: 'Order assigned to rider'
      }],
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    await batch.commit()
    
    return trackingRef.id
  } catch (error) {
    console.error('Error assigning rider to order:', error)
    throw error
  }
}

// Update order status with rider workflow
export const updateOrderStatusWithRider = async (
  orderId: string, 
  status: 'picked_up' | 'out_for_delivery' | 'delivered',
  additionalData?: any
) => {
  try {
    const batch = writeBatch(db)
    
    // Update order status
    const orderRef = doc(db, 'orders', orderId)
    const updateData: any = {
      status,
      updatedAt: new Date()
    }
    
    // Add timestamp for specific status
    switch (status) {
      case 'picked_up':
        updateData.pickedUpAt = new Date()
        break
      case 'out_for_delivery':
        updateData.outForDeliveryAt = new Date()
        break
      case 'delivered':
        updateData.deliveredAt = new Date()
        updateData.actualDeliveryTime = new Date()
        if (additionalData?.deliveryProof) {
          updateData.deliveryProof = additionalData.deliveryProof
        }
        break
    }
    
    batch.update(orderRef, updateData)
    
    // Update tracking document
    const trackingRef = query(
      collection(db, 'order_tracking'),
      where('orderId', '==', orderId)
    )
    const trackingSnapshot = await getDocs(trackingRef)
    
    if (!trackingSnapshot.empty) {
      const trackingDoc = trackingSnapshot.docs[0]
      const currentEvents = trackingDoc.data().trackingEvents || []
      
      batch.update(trackingDoc.ref, {
        status,
        trackingEvents: [
          ...currentEvents,
          {
            event: status,
            timestamp: new Date(),
            location: additionalData?.location || null,
            note: additionalData?.note || `Order ${status.replace('_', ' ')}`
          }
        ],
        updatedAt: new Date()
      })
    }
    
    // If delivered, update rider status back to online
    if (status === 'delivered') {
      const order = await getOrder(orderId)
      if (order?.riderId) {
        const riderRef = doc(db, 'riders', order.riderId)
        batch.update(riderRef, {
          status: 'online',
          currentOrderId: null,
          completedDeliveries: increment(1),
          totalDeliveries: increment(1),
          lastActiveAt: new Date()
        })
      }
    }
    
    await batch.commit()
  } catch (error) {
    console.error('Error updating order status:', error)
    throw error
  }
}

// ============================================================================
// REAL-TIME TRACKING SYSTEM
// ============================================================================

// Get tracking data for order
export const getOrderTracking = async (orderId: string) => {
  try {
    const trackingRef = collection(db, 'order_tracking')
    const q = query(trackingRef, where('orderId', '==', orderId))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      return null
    }
    
    const trackingDoc = querySnapshot.docs[0]
    return { id: trackingDoc.id, ...trackingDoc.data() }
  } catch (error) {
    console.error('Error getting order tracking:', error)
    throw error
  }
}

// Real-time tracking subscription
export const subscribeToOrderTracking = (orderId: string, callback: (tracking: any) => void) => {
  const trackingRef = collection(db, 'order_tracking')
  const q = query(trackingRef, where('orderId', '==', orderId))
  
  return onSnapshot(q, (querySnapshot) => {
    if (!querySnapshot.empty) {
      const trackingDoc = querySnapshot.docs[0]
      callback({ id: trackingDoc.id, ...trackingDoc.data() })
    } else {
      callback(null)
    }
  })
}

// Update tracking location
export const updateTrackingLocation = async (orderId: string, riderLocation: {lat: number, lng: number}) => {
  try {
    const trackingRef = collection(db, 'order_tracking')
    const q = query(trackingRef, where('orderId', '==', orderId))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const trackingDoc = querySnapshot.docs[0]
      await updateDoc(trackingDoc.ref, {
        riderLocation,
        updatedAt: new Date()
      })
    }
  } catch (error) {
    console.error('Error updating tracking location:', error)
    throw error
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Calculate distance between two coordinates (Haversine formula)
export const calculateDistance = (
  point1: {lat: number, lng: number}, 
  point2: {lat: number, lng: number}
): number => {
  const R = 6371 // Earth's radius in kilometers
  const dLat = (point2.lat - point1.lat) * Math.PI / 180
  const dLng = (point2.lng - point1.lng) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c // Distance in kilometers
}

// Get rider current session data
export const getCurrentRider = () => {
  if (typeof window !== 'undefined') {
    const riderData = localStorage.getItem('currentRider')
    return riderData ? JSON.parse(riderData) : null
  }
  return null
}

// Set rider session data
export const setCurrentRider = (riderData: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentRider', JSON.stringify(riderData))
  }
}

// Clear rider session
export const clearCurrentRider = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentRider')
  }
}

// Check if rider is logged in
export const isRiderLoggedIn = () => {
  return getCurrentRider() !== null
}

// Get rider orders
export const getRiderOrders = async (riderId: string, status?: string): Promise<OrderData[]> => {
  try {
    const ordersRef = collection(db, 'orders')
    let q = query(
      ordersRef,
      where('riderId', '==', riderId),
      orderBy('createdAt', 'desc')
    )
    
    if (status) {
      q = query(
        ordersRef,
        where('riderId', '==', riderId),
        where('status', '==', status),
        orderBy('createdAt', 'desc')
      )
    }
    
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as OrderData))
  } catch (error) {
    console.error('Error getting rider orders:', error)
    throw error
  }
}

// Enhanced order creation with address coordinates
export const createOrderWithCoordinates = async (orderData: any) => {
  try {
    // Add coordinates to address if not present
    if (orderData.address && !orderData.address.coordinates) {
      // You can integrate with Google Geocoding API here
      orderData.address.coordinates = { lat: 0, lng: 0 } // Placeholder
    }
    
    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderData,
      status: 'pending',
      riderId: null,
      riderAssignedAt: null,
      pickedUpAt: null,
      outForDeliveryAt: null,
      deliveredAt: null,
      estimatedDeliveryTime: null,
      actualDeliveryTime: null,
      deliveryProof: null,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating order with coordinates:', error)
    throw error
  }
}

// Real-time subscription to orders for a specific rider and status
export const subscribeToRiderOrders = (riderId: string, callback: (orders: OrderData[]) => void) => {
  const ordersRef = collection(db, 'orders')
  const q = query(
    ordersRef,
    where('riderId', '==', riderId),
    where('status', 'in', ['assigned', 'picked_up', 'out_for_delivery']),
    orderBy('createdAt', 'desc')
  )
  return onSnapshot(q, (querySnapshot) => {
    const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as OrderData))
    callback(orders)
  })
} 