import { Building2, Users, CreditCard, Palette, Receipt } from 'lucide-react'
import type { SettingsCardData } from '@/types'

export const settingsData: SettingsCardData[] = [
  {
    id: 'organisation',
    icon: Building2,
    title: 'Organisation',
    subtitle: 'Company profile, branding and structure',
    items: [
      { label: 'Profile', detail: 'Name, email, timezone, address', link: '/settings/organisation/profile' },
      { label: 'Branding', detail: 'Logo and colours', link: '/settings/organisation/branding' },
      { label: 'Work locations', detail: '4 locations', link: '/settings/organisation/work-locations' },
      { label: 'AI Integrations', detail: '', badge: 'Incomplete', badgeType: 'warning', link: '/settings/organisation/ai-integrations' },
      { label: 'Branches and shifts', detail: '2 branches, 3 shifts' },
      { label: 'Roles', detail: '5 roles' },
      { label: 'Users', detail: '12 active' },
    ]
  },
  {
    id: 'my-employees',
    icon: Users,
    title: 'My Employees',
    subtitle: 'Titles and Depts',
    items: [
      { label: 'Onboarding preferences', detail: '32 fields' },
      { label: 'Designations', detail: '14 designations', link: '/settings/organisation/designations' },
      { label: 'Departments', detail: '8 departments', link: '/settings/organisation/departments' },
    ]
  },
  {
    id: 'payment-configs',
    icon: CreditCard,
    title: 'Payment configs',
    subtitle: 'Payroll rules and Payout files',
    items: [
      { label: 'Pay schedule', detail: 'Monthly, last working day' },
      { label: 'Statutory components', detail: 'PF, ESIC, PT' },
      { label: 'Salary components', detail: '14 components' },
      { label: 'Run Controls', detail: '3 components' },
      { label: 'Claims and declarations', detail: '6 types' },
      { label: 'Bank accounts', detail: '1 account' },
      { label: 'Bank file templates', detail: '3 templates' },
    ]
  },
  {
    id: 'customisations',
    icon: Palette,
    title: 'Customisations',
    subtitle: 'Templates and communication',
    items: [
      { label: 'Email templates', detail: '9 templates' },
      { label: 'Sender email preferences', detail: 'hr@company.in' },
      { label: 'Salary templates', detail: '3 templates' },
      { label: 'PDF templates', detail: '4 templates' },
      { label: 'Reporting tags', detail: '6 tags' },
    ]
  },
  {
    id: 'subscription',
    icon: Receipt,
    title: 'Subscription',
    subtitle: 'Plan, usage and billing',
    items: [
      { label: 'Plan and usage', detail: 'Business, 48 of 100 employees', link: '/settings/organisation/subscriptions' },
      { label: 'Billing history', detail: 'Last invoice: 01 Oct 2026' },
    ]
  },
]
