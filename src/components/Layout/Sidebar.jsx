import { NavLink } from 'react-router-dom'
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
import './Sidebar.css'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/employees', icon: Users, label: 'Employees' },
  { to: '/attendance', icon: Clock, label: 'Attendance' },
  { to: '/leave', icon: CalendarDays, label: 'Leave' },
  { to: '/requests', icon: FileText, label: 'Requests' },
  { to: '/payroll', icon: Wallet, label: 'Payroll' },
  { to: '/documents', icon: FolderOpen, label: 'Documents' },
  { to: '/announcement', icon: Megaphone, label: 'Announcement' },
  { to: '/activity-logs', icon: Activity, label: 'Activity logs' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon" />
        <span className="sidebar-logo-text">HRMS</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-nav-item${isActive ? ' active' : ''}`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
