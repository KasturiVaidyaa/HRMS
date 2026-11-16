import { User } from 'lucide-react'

function ProfilePage() {
  return (
    <div className="placeholder-page">
      <div className="placeholder-icon">
        <User size={48} />
      </div>
      <h2 className="placeholder-title">Company Profile</h2>
      <p className="placeholder-description">
        Manage your company name, email, timezone, and address.
      </p>
      <span className="placeholder-badge">Design specifications pending</span>
    </div>
  )
}

export default ProfilePage
