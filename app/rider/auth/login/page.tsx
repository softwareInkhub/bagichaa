'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Phone, Shield, Loader2, User, Truck, ArrowLeft } from 'lucide-react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { authenticateRider, setCurrentRider, isRiderLoggedIn } from '@/lib/firebase'

// Extend Window interface to include recaptchaVerifier
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier | null
  }
}

const RiderLogin = () => {
  const router = useRouter()
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [confirmationResult, setConfirmationResult] = useState<any>(null)
  const [resendTimer, setResendTimer] = useState(0)

  // Redirect if already logged in
  useEffect(() => {
    if (isRiderLoggedIn()) {
      router.push('/rider')
    }
  }, [router])

  // Initialize RecaptchaVerifier
  useEffect(() => {
    const auth = getAuth()
    
    if (typeof window !== 'undefined' && !window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: () => {
            // reCAPTCHA solved
          }
        })
      } catch (error) {
        console.error('Error initializing reCAPTCHA:', error)
      }
    }

    return () => {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear()
        } catch (error) {
          console.error('Error clearing reCAPTCHA:', error)
        }
        window.recaptchaVerifier = null
      }
    }
  }, [])



  // Send OTP
  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number')
      return
    }

    setLoading(true)
    setError('')

    try {
      const auth = getAuth()
      const formattedPhone = `+91${phoneNumber}`
      
      const appVerifier = window.recaptchaVerifier
      if (!appVerifier) {
        throw new Error('reCAPTCHA verifier not initialized')
      }
      
      const confirmResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier)
      
      setConfirmationResult(confirmResult)
      setStep('otp')
      setResendTimer(30)
      
      // Start countdown timer
      const timer = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)

    } catch (error: any) {
      console.error('Error sending OTP:', error)
      if (error.code === 'auth/invalid-phone-number') {
        setError('Invalid phone number format')
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many requests. Please try again later.')
      } else {
        setError('Failed to send OTP. Please try again.')
      }
      
      // Reset recaptcha
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear()
        } catch (clearError) {
          console.error('Error clearing reCAPTCHA:', clearError)
        }
        window.recaptchaVerifier = null
      }
    } finally {
      setLoading(false)
    }
  }

  // Verify OTP and authenticate rider
  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Authenticate rider using our custom function
      const riderData = await authenticateRider(phoneNumber, otp, confirmationResult)
      
      // Set rider session
      setCurrentRider(riderData)
      
      // Redirect to dashboard
      router.push('/rider')
      
    } catch (error: any) {
      console.error('Error verifying OTP:', error)
      if (error.message.includes('Rider not found')) {
        setError('No rider account found with this phone number. Please contact admin.')
      } else if (error.message.includes('deactivated')) {
        setError('Your rider account is deactivated. Please contact admin.')
      } else if (error.code === 'auth/invalid-verification-code') {
        setError('Invalid OTP. Please check and try again.')
      } else if (error.code === 'auth/code-expired') {
        setError('OTP has expired. Please request a new one.')
      } else {
        setError('Authentication failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  // Resend OTP
  const handleResendOTP = async () => {
    if (resendTimer > 0) return
    
    setOtp('')
    setError('')
    await handleSendOTP()
  }

  // Go back to phone step
  const goBackToPhone = () => {
    setStep('phone')
    setOtp('')
    setError('')
    setConfirmationResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Bagicha Rider</h1>
          <p className="text-gray-600">Sign in to start delivering</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {step === 'phone' ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Enter Phone Number</h2>
                <p className="text-gray-600 text-sm">We'll send you an OTP to verify your account</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        if (value.length <= 10) {
                          setPhoneNumber(value)
                        }
                      }}
                      placeholder="98765 43210"
                      className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      maxLength={10}
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleSendOTP}
                  disabled={loading || phoneNumber.length !== 10}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      Send OTP
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <button
                  onClick={goBackToPhone}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Verify OTP</h2>
                <p className="text-gray-600 text-sm">
                  Enter the 6-digit code sent to +91 {phoneNumber}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OTP Code
                  </label>
                  <input
                    type="number"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value.length <= 6) {
                        setOtp(value)
                      }
                    }}
                    placeholder="123456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-2xl tracking-widest"
                    maxLength={6}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <User className="w-5 h-5" />
                      Verify & Login
                    </>
                  )}
                </button>

                <div className="text-center">
                  {resendTimer > 0 ? (
                    <p className="text-gray-500 text-sm">
                      Resend OTP in {resendTimer}s
                    </p>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Don't have a rider account?{' '}
            <span className="text-green-600 font-medium">Contact Admin</span>
          </p>
        </div>

        {/* Hidden reCAPTCHA container */}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  )
}

export default RiderLogin 