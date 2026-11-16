import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SettingsDashboard from './pages/Settings/SettingsDashboard'
import OrganisationSettings from './pages/Organisation/OrganisationSettings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/settings" replace />} />
        <Route path="settings" element={<SettingsDashboard />} />
        <Route path="settings/organisation/*" element={<OrganisationSettings />} />
      </Route>
    </Routes>
  )
}

export default App
