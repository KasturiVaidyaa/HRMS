import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import './SettingsCard.css'

function SettingsCard({ icon: Icon, title, subtitle, items, accentColor }) {
  const navigate = useNavigate()

  const handleItemClick = (item) => {
    if (item.link) {
      navigate(item.link)
    }
  }

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <div className="settings-card-icon">
          <Icon size={20} />
        </div>
        <div className="settings-card-header-text">
          <h3 className="settings-card-title">{title}</h3>
          <span className="settings-card-subtitle">{subtitle}</span>
        </div>
      </div>
      <div className="settings-card-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`settings-card-item${item.link ? ' clickable' : ''}`}
            style={index < items.length - 1 ? { borderBottom: '1px solid #F3F4F6' } : {}}
            onClick={() => handleItemClick(item)}
          >
            <div className="settings-card-item-left">
              <span className="settings-card-item-label">{item.label}</span>
              {item.badge && (
                <span className={`settings-card-badge ${item.badgeType === 'warning' ? 'badge-warning' : 'badge-default'}`}>
                  {item.badge}
                </span>
              )}
            </div>
            <div className="settings-card-item-right">
              {item.detail && (
                <span className="settings-card-item-detail">{item.detail}</span>
              )}
              <ChevronRight size={16} className="settings-card-chevron" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SettingsCard
