'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import SettingsCard from '@/components/Settings/SettingsCard'
import { settingsData } from '@/data/settingsData'

export default function SettingsDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCards = settingsData
    .map((card) => {
      if (!searchQuery.trim()) return card
      const query = searchQuery.toLowerCase()
      const titleMatch = card.title.toLowerCase().includes(query)
      const filteredItems = card.items.filter(
        (item) => item.label.toLowerCase().includes(query)
      )
      if (titleMatch) return card
      if (filteredItems.length > 0) return { ...card, items: filteredItems }
      return null
    })
    .filter(Boolean)

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text mb-1">Settings</h1>
          <p className="text-sm text-text-secondary">
            Manage your organisation, users, payroll setup and templates.
          </p>
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search settings"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-70 py-2.5 pl-10 pr-4 border border-border rounded-lg text-sm outline-none bg-white focus:border-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {filteredCards.map((card) => card && (
          <SettingsCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            items={card.items}
          />
        ))}
      </div>
    </div>
  )
}
