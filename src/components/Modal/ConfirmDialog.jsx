import { AlertTriangle, X } from 'lucide-react'
import './ConfirmDialog.css'

function ConfirmDialog({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null

  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="confirm-container" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-header">
          <div className="confirm-icon-wrapper">
            <AlertTriangle size={24} />
          </div>
          <button className="confirm-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="confirm-body">
          <h3 className="confirm-title">{title || 'Delete Department'}</h3>
          <p className="confirm-message">{message}</p>
        </div>
        <div className="confirm-footer">
          <button className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
