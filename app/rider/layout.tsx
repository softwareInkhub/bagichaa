import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bagicha Rider - Delivery Partner Dashboard',
  description: 'Bagicha delivery partner app for managing orders and tracking deliveries',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#16a34a',
  manifest: '/manifest.json'
}

export default function RiderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 