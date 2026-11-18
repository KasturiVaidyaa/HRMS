'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Clock,
  CalendarDays,
  FileText,
  Wallet,
  FolderOpen,
  Megaphone,
  Activity,
  Settings,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavItem {
  href: string
  icon: LucideIcon
  label: string
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/employees', icon: Users, label: 'Employees' },
  { href: '/attendance', icon: Clock, label: 'Attendance' },
  { href: '/leave', icon: CalendarDays, label: 'Leave' },
  { href: '/requests', icon: FileText, label: 'Requests' },
  { href: '/payroll', icon: Wallet, label: 'Payroll' },
  { href: '/documents', icon: FolderOpen, label: 'Documents' },
  { href: '/announcement', icon: Megaphone, label: 'Announcement' },
  { href: '/activity-logs', icon: Activity, label: 'Activity logs' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 w-[var(--sidebar-width)] h-screen bg-white border-r border-border flex flex-col z-[100]">
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-border">
        <div className="w-7 h-7 bg-primary rounded-md" />
        <span className="text-lg font-bold text-text">HRMS</span>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 h-10 px-5 text-sm border-l-3 transition-colors duration-150 ${
                isActive
                  ? 'border-l-primary bg-primary-light text-primary font-medium'
                  : 'border-l-transparent text-text-secondary hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
