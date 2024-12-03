import { useState } from 'react'

export default function RundownItem({ item, onDelete, onEdit, isEditing }) {
  const [isEditingItem, setIsEditingItem] = useState(false)
  const [editedTime, setEditedTime] = useState(item.time)
  const [editedActivity, setEditedActivity] = useState(item.activity)

  const handleEdit = () => {
    onEdit(item.id, { time: editedTime, activity: editedActivity })
    setIsEditingItem(false)
  }

  if (isEditingItem && isEditing) {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-teal-50 p-4 rounded-lg animate-fade-in">
        <input
          type="time"
          value={editedTime}
          onChange={(e) => setEditedTime(e.target.value)}
          className="border rounded-md px-3 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
        <input
          type="text"
          value={editedActivity}
          onChange={(e) => setEditedActivity(e.target.value)}
          className="border rounded-md px-3 py-2 w-full sm:flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
        <div className="flex w-full sm:w-auto space-x-2 mt-2 sm:mt-0">
          <button 
            onClick={handleEdit} 
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Save
          </button>
          <button 
            onClick={() => setIsEditingItem(false)} 
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors duration-200 flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
      <span className="w-full sm:w-1/4 font-semibold text-center sm:text-left text-teal-600">{item.time}</span>
      <span className="flex-grow text-center sm:text-left">{item.activity}</span>
      {isEditing && (
        <div className="flex w-full sm:w-auto space-x-2 mt-2 sm:mt-0">
          <button 
            onClick={() => setIsEditingItem(true)} 
            className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-200 flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(item.id)} 
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

