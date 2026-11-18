'use client'

import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { SettingsItem } from '@/types'

interface SettingsCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  items: SettingsItem[]
}

export default function SettingsCard({ icon: Icon, title, subtitle, items }: SettingsCardProps) {
  const router = useRouter()

  const handleItemClick = (item: SettingsItem) => {
    if (item.link) {
      router.push(item.link)
    }
  }

  return (
    <div className="bg-white border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0">
          <Icon size={20} />
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-semibold text-text">{title}</h3>
          <span className="text-[13px] text-text-secondary">{subtitle}</span>
        </div>
      </div>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between py-3 cursor-pointer rounded transition-colors duration-150 hover:bg-bg ${
              index < items.length - 1 ? 'border-b border-gray-100' : ''
            }`}
            onClick={() => handleItemClick(item)}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">{item.label}</span>
              {item.badge && (
                <span className={`inline-flex items-center px-2 py-0.5 rounded-[10px] text-[11px] font-medium ${
                  item.badgeType === 'warning'
                    ? 'bg-warning-bg text-warning-text'
                    : 'bg-primary-light text-primary'
                }`}>
                  {item.badge}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {item.detail && (
                <span className="text-[13px] text-text-secondary">{item.detail}</span>
              )}
              <ChevronRight size={16} className="text-gray-400 shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
