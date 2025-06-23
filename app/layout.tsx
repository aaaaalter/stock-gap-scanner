import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stock Gap Scanner',
  description: 'Real-time pre-market gap scanner with news integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
