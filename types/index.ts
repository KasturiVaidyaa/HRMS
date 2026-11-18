import type { LucideIcon } from 'lucide-react'

export interface SettingsItem {
  label: string
  detail: string
  link?: string
  badge?: string
  badgeType?: 'warning' | 'default'
}

export interface SettingsCardData {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  items: SettingsItem[]
}

export interface Department {
  id: number
  name: string
  head: string
  employees: number
  createdOn: string
}

export interface DepartmentFormData {
  name: string
  head: string
  employees: number
}
