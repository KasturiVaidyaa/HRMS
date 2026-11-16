import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import DepartmentsPage from './DepartmentsPage'
import ProfilePage from './ProfilePage'
import BrandingPage from './BrandingPage'
import WorkLocationsPage from './WorkLocationsPage'
import DesignationsPage from './DesignationsPage'
import AIIntegrationsPage from './AIIntegrationsPage'
import SubscriptionsPage from './SubscriptionsPage'
import './OrganisationSettings.css'

const tabs = [
  { label: 'Profile', path: 'profile' },
  { label: 'Branding', path: 'branding' },
  { label: 'Work locations', path: 'work-locations' },
  { label: 'Departments', path: 'departments' },
  { label: 'Designations', path: 'designations' },
  { label: 'AI integrations', path: 'ai-integrations' },
  { label: 'Subscriptions', path: 'subscriptions' },
]

function OrganisationSettings() {
  return (
    <div className="org-settings">
      <h1 className="org-settings-title">Organisation settings</h1>
      <nav className="org-tabs">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={`/settings/organisation/${tab.path}`}
            className={({ isActive }) =>
              `org-tab${isActive ? ' active' : ''}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
      <div className="org-tab-content">
        <Routes>
          <Route index element={<Navigate to="departments" replace />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="branding" element={<BrandingPage />} />
          <Route path="work-locations" element={<WorkLocationsPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="designations" element={<DesignationsPage />} />
          <Route path="ai-integrations" element={<AIIntegrationsPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default OrganisationSettings
