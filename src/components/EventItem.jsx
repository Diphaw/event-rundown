import { useState } from 'react'
import RundownForm from './RundownForm'
import RundownList from './RundownList'

export default function EventItem({ event, onDeleteEvent, onUpdateRundown }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [rundownItems, setRundownItems] = useState(event.rundownItems)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [isEditing, setIsEditing] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const addRundownItem = (item) => {
    setRundownItems([...rundownItems, { ...item, id: Date.now() }])
  }

  const deleteRundownItem = (id) => {
    setRundownItems(rundownItems.filter(item => item.id !== id))
  }

  const editRundownItem = (id, updatedItem) => {
    setRundownItems(rundownItems.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ))
  }

  const handleSaveRundown = () => {
    onUpdateRundown(event.id, rundownItems)
    setSaveSuccess(true)
    setIsEditing(false)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleEditRundown = () => {
    setIsEditing(true)
  }

  const handleDeleteConfirm = () => {
    setShowDeleteConfirm(true)
  }

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false)
  }

  const handleDeleteConfirmed = () => {
    onDeleteEvent(event.id)
    setShowDeleteConfirm(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
      <div className="p-6 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{event.name}</h2>
            <p className="text-teal-100">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <button 
            onClick={handleDeleteConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Delete Event
          </button>
        </div>
      </div>
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Are you sure you want to delete this event?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                No
              </button>
              <button
                onClick={handleDeleteConfirmed}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="p-6">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-teal-100 text-teal-600 px-4 py-2 rounded-full hover:bg-teal-200 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          <span>{isExpanded ? 'Hide' : 'Show'} Rundown</span>
          <svg className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded && (
          <div className="animate-fade-in mt-4">
            {isEditing && <RundownForm onAddItem={addRundownItem} />}
            <RundownList 
              items={rundownItems} 
              onDeleteItem={deleteRundownItem}
              onEditItem={editRundownItem}
              isEditing={isEditing}
            />
            <div className="mt-4 flex items-center">
              {isEditing ? (
                <button 
                  onClick={handleSaveRundown}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Save Rundown
                </button>
              ) : (
                <button 
                  onClick={handleEditRundown}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                >
                  Edit Rundown
                </button>
              )}
              {saveSuccess && (
                <span className="ml-4 text-green-600 font-semibold animate-fade-in">Rundown saved successfully!</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

