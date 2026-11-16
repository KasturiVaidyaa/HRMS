import { useState } from 'react'
import { Search } from 'lucide-react'
import SettingsCard from '../../components/Settings/SettingsCard'
import { settingsData } from '../../data/settingsData'
import './SettingsDashboard.css'

function SettingsDashboard() {
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
    <div className="settings-page">
      <div className="settings-header">
        <div>
          <h1 className="settings-title">Settings</h1>
          <p className="settings-description">
            Manage your organisation, users, payroll setup and templates.
          </p>
        </div>
        <div className="settings-search">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search settings"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="settings-grid">
        {filteredCards.map((card) => (
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

export default SettingsDashboard
