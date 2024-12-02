import { useState } from 'react'

export default function RundownItem({ item, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTime, setEditedTime] = useState(item.time)
  const [editedActivity, setEditedActivity] = useState(item.activity)

  const handleEdit = () => {
    onEdit(item.id, { time: editedTime, activity: editedActivity })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-100 p-4 rounded">
        <input
          type="time"
          value={editedTime}
          onChange={(e) => setEditedTime(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/4"
        />
        <input
          type="text"
          value={editedActivity}
          onChange={(e) => setEditedActivity(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:flex-grow"
        />
        <div className="flex w-full sm:w-auto space-x-2 mt-2 sm:mt-0">
          <button onClick={handleEdit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex-grow sm:flex-grow-0">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex-grow sm:flex-grow-0">
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded shadow">
      <span className="w-full sm:w-1/4 font-semibold text-center sm:text-left">{item.time}</span>
      <span className="flex-grow text-center sm:text-left">{item.activity}</span>
      <div className="flex w-full sm:w-auto space-x-2 mt-2 sm:mt-0">
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex-grow sm:flex-grow-0">
          Edit
        </button>
        <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex-grow sm:flex-grow-0">
          Delete
        </button>
      </div>
    </div>
  )
}

