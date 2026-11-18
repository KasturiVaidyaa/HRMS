import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Layout/Sidebar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HRMS - Human Resource Management System',
  description: 'Human Resource Management System',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="ml-[var(--sidebar-width)] flex-1 p-8 bg-bg min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
