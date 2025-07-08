'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Loader2, Navigation, Phone, MapPin, Clock, Truck, Package, CheckCircle } from 'lucide-react'
import { Loader } from '@googlemaps/js-api-loader'

interface Location {
  lat: number
  lng: number
}

interface TrackingData {
  orderId: string
  riderId: string
  status: string
  customerLocation?: Location
  riderLocation?: Location
  estimatedArrival?: Date
  route?: Location[]
  trackingEvents: Array<{
    event: string
    timestamp: Date
    location?: Location
    note: string
  }>
}

interface LiveTrackingMapProps {
  orderId?: string
  trackingData?: TrackingData
  mode: 'customer' | 'rider' | 'admin'
  height?: string
  showControls?: boolean
  showRoute?: boolean
  onLocationUpdate?: (location: Location) => void
  onDirectionsClick?: () => void
  riderInfo?: {
    name: string
    phone: string
    vehicle: string
    rating: number
  }
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({
  orderId,
  trackingData,
  mode,
  height = '400px',
  showControls = true,
  showRoute = true,
  onLocationUpdate,
  onDirectionsClick,
  riderInfo
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const riderMarkerRef = useRef<any>(null)
  const customerMarkerRef = useRef<any>(null)
  const directionsServiceRef = useRef<any>(null)
  const directionsRendererRef = useRef<any>(null)
  const watchPositionIdRef = useRef<number | null>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [mapError, setMapError] = useState<string | null>(null)
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [isTrackingLocation, setIsTrackingLocation] = useState(false)

  // Initialize the map
  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.google) {
      setMapError('Map container not available')
      return
    }

    try {
      // Default center (you can customize this)
      const defaultCenter = { lat: 28.6139, lng: 77.2090 } // Delhi

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        zoom: 14,
        center: defaultCenter,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: mode === 'admin',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      })

      // Initialize directions service and renderer
      directionsServiceRef.current = new window.google.maps.DirectionsService()
      directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: '#10B981',
          strokeWeight: 4,
          strokeOpacity: 0.8
        }
      })
      directionsRendererRef.current.setMap(mapInstanceRef.current)

      setIsLoading(false)

      // Start location tracking for riders
      if (mode === 'rider') {
        startLocationTracking()
      }

      // Set initial markers if tracking data exists
      if (trackingData) {
        updateMapWithTrackingData(trackingData)
      }

    } catch (error) {
      console.error('Error initializing map:', error)
      setMapError('Failed to initialize map')
      setIsLoading(false)
    }
  }, [mode, trackingData])

  // Load Google Maps API using the recommended loader
  const loadGoogleMaps = useCallback(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: 'weekly',
      libraries: ['geometry', 'places'],
    })
    loader.load().then(() => {
      initializeMap()
    }).catch(() => setMapError('Failed to load Google Maps'))
  }, [initializeMap])

  // Start GPS location tracking for riders
  const startLocationTracking = useCallback(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported')
      return
    }

    setIsTrackingLocation(true)

    watchPositionIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        setCurrentLocation(newLocation)

        if (onLocationUpdate) {
          onLocationUpdate(newLocation)
        }

        // Update rider marker position
        if (riderMarkerRef.current) {
          riderMarkerRef.current.setPosition(newLocation)
        } else {
          addRiderMarker(newLocation)
        }

        // Center map on current location
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setCenter(newLocation)
        }
      },
      (error) => {
        console.error('Error getting location:', error)
        setIsTrackingLocation(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000
      }
    )
  }, [onLocationUpdate])

  // Stop location tracking
  const stopLocationTracking = useCallback(() => {
    if (watchPositionIdRef.current) {
      navigator.geolocation.clearWatch(watchPositionIdRef.current)
      watchPositionIdRef.current = null
    }
    setIsTrackingLocation(false)
  }, [])

  // Add rider marker using AdvancedMarkerElement
  const addRiderMarker = useCallback((location: Location) => {
    if (!mapInstanceRef.current || !window.google) return

    if (riderMarkerRef.current) {
      riderMarkerRef.current.map = null
    }

    const { AdvancedMarkerElement } = window.google.maps.marker
    riderMarkerRef.current = new AdvancedMarkerElement({
      map: mapInstanceRef.current,
      position: location,
      title: 'Delivery Partner',
      content: (() => {
        const div = document.createElement('div')
        div.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="#10B981" stroke="#ffffff" stroke-width="3"/><path d="M10 16L14 20L22 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        return div
      })(),
    })

    // Add info window for rider (optional, can be migrated to Advanced InfoWindow if needed)
    if (riderInfo && mode !== 'rider') {
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-3 min-w-[200px]">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="currentColor" class="text-green-600">
                  <path d="M8 16l2.879-2.879a3 3 0 114.242 4.242L8 24l-7.121-7.121a3 3 0 114.242-4.242L8 16z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">${riderInfo.name}</h4>
                <p class="text-sm text-gray-600">${riderInfo.vehicle}</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span class="text-yellow-400">⭐</span>
                <span class="text-sm font-medium">${riderInfo.rating}</span>
              </div>
              <button onclick="window.open('tel:${riderInfo.phone}')" 
                class="bg-green-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                <svg width="14" height="14" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call
              </button>
            </div>
          </div>
        `
      })

      riderMarkerRef.current.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, riderMarkerRef.current)
      })
    }
  }, [riderInfo, mode])

  // Add customer marker using AdvancedMarkerElement
  const addCustomerMarker = useCallback((location: Location) => {
    if (!mapInstanceRef.current || !window.google) return

    if (customerMarkerRef.current) {
      customerMarkerRef.current.map = null
    }

    const { AdvancedMarkerElement } = window.google.maps.marker
    customerMarkerRef.current = new AdvancedMarkerElement({
      map: mapInstanceRef.current,
      position: location,
      title: 'Delivery Address',
      content: (() => {
        const div = document.createElement('div')
        div.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="#EF4444" stroke="#ffffff" stroke-width="3"/><path d="M16 8v8l4 4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        return div
      })(),
    })
  }, [])

  // Calculate and display route
  const calculateRoute = useCallback((origin: Location, destination: Location) => {
    if (!directionsServiceRef.current || !directionsRendererRef.current) return

    directionsServiceRef.current.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
        optimizeWaypoints: true
      },
      (result: any, status: any) => {
        if (status === 'OK') {
          directionsRendererRef.current.setDirections(result)
        } else {
          console.error('Directions request failed:', status)
        }
      }
    )
  }, [])

  // Update map with tracking data
  const updateMapWithTrackingData = useCallback((data: TrackingData) => {
    if (!mapInstanceRef.current) return

    // Add rider marker if location available
    if (data.riderLocation) {
      addRiderMarker(data.riderLocation)
    }

    // Add customer marker if location available
    if (data.customerLocation) {
      addCustomerMarker(data.customerLocation)
    }

    // Calculate route if both locations available and showRoute enabled
    if (data.riderLocation && data.customerLocation && showRoute) {
      calculateRoute(data.riderLocation, data.customerLocation)
    }

    // Adjust map bounds to fit all markers
    if (data.riderLocation || data.customerLocation) {
      const bounds = new window.google.maps.LatLngBounds()
      
      if (data.riderLocation) {
        bounds.extend(data.riderLocation)
      }
      
      if (data.customerLocation) {
        bounds.extend(data.customerLocation)
      }
      
      mapInstanceRef.current.fitBounds(bounds)
      
      // Ensure minimum zoom level
      window.google.maps.event.addListenerOnce(mapInstanceRef.current, 'bounds_changed', () => {
        if (mapInstanceRef.current.getZoom() > 16) {
          mapInstanceRef.current.setZoom(16)
        }
      })
    }
  }, [showRoute, addRiderMarker, addCustomerMarker, calculateRoute])

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'assigned':
        return <Package className="w-4 h-4" />
      case 'picked_up':
        return <Truck className="w-4 h-4" />
      case 'out_for_delivery':
        return <Navigation className="w-4 h-4" />
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned':
        return 'text-blue-600 bg-blue-100'
      case 'picked_up':
        return 'text-orange-600 bg-orange-100'
      case 'out_for_delivery':
        return 'text-green-600 bg-green-100'
      case 'delivered':
        return 'text-purple-600 bg-purple-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  useEffect(() => {
    loadGoogleMaps()

    return () => {
      if (watchPositionIdRef.current) {
        navigator.geolocation.clearWatch(watchPositionIdRef.current)
      }
    }
  }, [loadGoogleMaps])

  useEffect(() => {
    if (trackingData && mapInstanceRef.current) {
      updateMapWithTrackingData(trackingData)
    }
  }, [trackingData, updateMapWithTrackingData])

  if (mapError) {
    return (
      <div 
        className="bg-red-50 border border-red-200 rounded-lg p-8 text-center"
        style={{ height }}
      >
        <div className="text-red-600 mb-2">
          <MapPin className="w-8 h-8 mx-auto" />
        </div>
        <p className="text-red-700 font-medium">Map Error</p>
        <p className="text-red-600 text-sm mt-1">{mapError}</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full rounded-lg border border-gray-200"
        style={{ height }}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-green-600 mx-auto mb-2" />
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {/* Status Bar */}
      {showControls && trackingData && (
        <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${getStatusColor(trackingData.status)}`}>
                {getStatusIcon(trackingData.status)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 capitalize">
                  {trackingData.status.replace('_', ' ')}
                </p>
                {trackingData.estimatedArrival && (
                  <p className="text-sm text-gray-600">
                    ETA: {new Date(trackingData.estimatedArrival).toLocaleTimeString()}
                  </p>
                )}
              </div>
            </div>

            {mode === 'rider' && onDirectionsClick && (
              <button
                onClick={onDirectionsClick}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Directions
              </button>
            )}
          </div>
        </div>
      )}

      {/* Location Tracking Indicator for Riders */}
      {mode === 'rider' && (
        <div className="absolute bottom-4 left-4">
          <div className={`px-3 py-2 rounded-lg shadow-lg ${
            isTrackingLocation 
              ? 'bg-green-600 text-white' 
              : 'bg-yellow-600 text-white'
          }`}>
            <div className="flex items-center gap-2">
              {isTrackingLocation ? (
                <>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Tracking</span>
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">GPS Disabled</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Order Info Panel for Customers */}
      {mode === 'customer' && trackingData && riderInfo && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{riderInfo.name}</p>
                <p className="text-sm text-gray-600">{riderInfo.vehicle}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium">{riderInfo.rating}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open(`tel:${riderInfo.phone}`)}
              className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LiveTrackingMap 