import { useState } from 'react'
import RundownForm from './RundownForm'
import RundownList from './RundownList'

export default function EventItem({ event, onDeleteEvent, onUpdateRundown }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const addRundownItem = (item) => {
    const newRundownItems = [...event.rundownItems, { ...item, id: Date.now() }]
    onUpdateRundown(event.id, newRundownItems)
  }

  const deleteRundownItem = (id) => {
    const newRundownItems = event.rundownItems.filter(item => item.id !== id)
    onUpdateRundown(event.id, newRundownItems)
  }

  const editRundownItem = (id, updatedItem) => {
    const newRundownItems = event.rundownItems.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    )
    onUpdateRundown(event.id, newRundownItems)
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">{event.name}</h2>
          <p className="text-sm sm:text-base text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
          >
            {isExpanded ? 'Hide Rundown' : 'Show Rundown'}
          </button>
          <button 
            onClick={() => onDeleteEvent(event.id)} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
          >
            Delete Event
          </button>
        </div>
      </div>
      {isExpanded && (
        <div>
          <RundownForm onAddItem={addRundownItem} />
          <RundownList 
            items={event.rundownItems} 
            onDeleteItem={deleteRundownItem}
            onEditItem={editRundownItem}
          />
        </div>
      )}
    </div>
  )
}

