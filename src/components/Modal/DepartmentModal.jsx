import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import './DepartmentModal.css'

function DepartmentModal({ isOpen, onClose, onSave, department }) {
  const [formData, setFormData] = useState({
    name: '',
    head: '',
    employees: 0,
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (department) {
      setFormData({
        name: department.name,
        head: department.head,
        employees: department.employees,
      })
    } else {
      setFormData({ name: '', head: '', employees: 0 })
    }
    setErrors({})
  }, [department, isOpen])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Department name is required'
    }
    if (!formData.head.trim()) {
      newErrors.head = 'Department head is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onSave({
        ...formData,
        employees: Number(formData.employees) || 0,
      })
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {department ? 'Edit Department' : 'Add Department'}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label" htmlFor="dept-name">
                Department Name <span className="required">*</span>
              </label>
              <input
                id="dept-name"
                type="text"
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="Enter department name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="dept-head">
                Department Head <span className="required">*</span>
              </label>
              <input
                id="dept-head"
                type="text"
                className={`form-input ${errors.head ? 'input-error' : ''}`}
                placeholder="Enter department head name"
                value={formData.head}
                onChange={(e) => handleChange('head', e.target.value)}
              />
              {errors.head && <span className="error-message">{errors.head}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="dept-employees">
                Number of Employees
              </label>
              <input
                id="dept-employees"
                type="number"
                className="form-input"
                placeholder="0"
                min="0"
                value={formData.employees}
                onChange={(e) => handleChange('employees', e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-save">
              {department ? 'Save Changes' : 'Add Department'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DepartmentModal
