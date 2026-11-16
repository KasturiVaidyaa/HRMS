import { useState, useMemo } from 'react'
import { Search, Plus, Info, X, FileSearch } from 'lucide-react'
import { initialDepartments } from '../../data/departmentsData'
import DepartmentModal from '../../components/Modal/DepartmentModal'
import ConfirmDialog from '../../components/Modal/ConfirmDialog'
import './DepartmentsPage.css'

const ITEMS_PER_PAGE = 6

function DepartmentsPage() {
  const [departments, setDepartments] = useState(initialDepartments)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showBanner, setShowBanner] = useState(true)

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingDepartment, setEditingDepartment] = useState(null)

  // Confirm dialog state
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [deletingDepartment, setDeletingDepartment] = useState(null)

  // Filtered departments
  const filteredDepartments = useMemo(() => {
    if (!searchQuery.trim()) return departments
    const query = searchQuery.toLowerCase()
    return departments.filter((dept) =>
      dept.name.toLowerCase().includes(query)
    )
  }, [departments, searchQuery])

  // Pagination
  const totalItems = filteredDepartments.length
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE))
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems)
  const paginatedDepartments = filteredDepartments.slice(startIndex, endIndex)

  // Reset page when search changes
  const handleSearch = (value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  // Add / Edit
  const handleOpenAdd = () => {
    setEditingDepartment(null)
    setIsModalOpen(true)
  }

  const handleOpenEdit = (dept) => {
    setEditingDepartment(dept)
    setIsModalOpen(true)
  }

  const handleSave = (formData) => {
    if (editingDepartment) {
      setDepartments((prev) =>
        prev.map((d) =>
          d.id === editingDepartment.id ? { ...d, ...formData } : d
        )
      )
    } else {
      const newDept = {
        ...formData,
        id: Date.now(),
        createdOn: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      }
      setDepartments((prev) => [...prev, newDept])
    }
    setIsModalOpen(false)
    setEditingDepartment(null)
  }

  // Delete
  const handleOpenDelete = (dept) => {
    setDeletingDepartment(dept)
    setIsConfirmOpen(true)
  }

  const handleConfirmDelete = () => {
    if (deletingDepartment) {
      setDepartments((prev) => prev.filter((d) => d.id !== deletingDepartment.id))
      // Adjust current page if needed
      const newTotal = departments.length - 1
      const newTotalPages = Math.max(1, Math.ceil(newTotal / ITEMS_PER_PAGE))
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages)
      }
    }
    setIsConfirmOpen(false)
    setDeletingDepartment(null)
  }

  // Pagination controls
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 4
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div className="departments-page">
      {/* Toolbar */}
      <div className="departments-toolbar">
        <div className="departments-search">
          <Search size={18} className="departments-search-icon" />
          <input
            type="text"
            placeholder="Search departments..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <button className="btn-new-department" onClick={handleOpenAdd}>
          <Plus size={18} />
          New department
        </button>
      </div>

      {/* Info Banner */}
      {showBanner && (
        <div className="departments-banner">
          <div className="departments-banner-content">
            <Info size={16} className="departments-banner-icon" />
            <span>Departments are used in attendance, leave and payroll filters.</span>
          </div>
          <button
            className="departments-banner-close"
            onClick={() => setShowBanner(false)}
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Table */}
      {filteredDepartments.length > 0 ? (
        <>
          <div className="departments-table-wrapper">
            <table className="departments-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Head</th>
                  <th>Employees</th>
                  <th>Created on</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedDepartments.map((dept) => (
                  <tr key={dept.id}>
                    <td className="dept-name">{dept.name}</td>
                    <td className="dept-head">{dept.head}</td>
                    <td className="dept-employees">{dept.employees} employees</td>
                    <td className="dept-date">{dept.createdOn}</td>
                    <td className="dept-actions">
                      <button
                        className="action-edit"
                        onClick={() => handleOpenEdit(dept)}
                      >
                        Edit
                      </button>
                      <button
                        className="action-delete"
                        onClick={() => handleOpenDelete(dept)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="departments-pagination">
            <span className="pagination-info">
              Showing {startIndex + 1}-{endIndex} of {totalItems} departments
            </span>
            <div className="pagination-controls">
              <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Previous
              </button>
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  className={`pagination-page${currentPage === page ? ' active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="departments-empty">
          <FileSearch size={48} className="empty-icon" />
          <h3 className="empty-title">No departments found</h3>
          <p className="empty-description">
            {searchQuery
              ? `No departments match "${searchQuery}". Try a different search term.`
              : 'No departments have been created yet.'}
          </p>
        </div>
      )}

      {/* Modal */}
      <DepartmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingDepartment(null)
        }}
        onSave={handleSave}
        department={editingDepartment}
      />

      {/* Confirm Dialog */}
      <ConfirmDialog
        isOpen={isConfirmOpen}
        onClose={() => {
          setIsConfirmOpen(false)
          setDeletingDepartment(null)
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Department"
        message={
          deletingDepartment
            ? `Are you sure you want to delete "${deletingDepartment.name}"? This action cannot be undone.`
            : ''
        }
      />
    </div>
  )
}

export default DepartmentsPage
