import { useState } from 'react'

export default function RundownForm({ onAddItem }) {
  const [time, setTime] = useState('')
  const [activity, setActivity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (time && activity) {
      onAddItem({ time, activity })
      setTime('')
      setActivity('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-teal-50 p-4 rounded-lg shadow-md">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <label htmlFor="time" className="block text-sm font-medium text-teal-700 mb-1">Time</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <div className="flex-grow">
          <label htmlFor="activity" className="block text-sm font-medium text-teal-700 mb-1">Activity</label>
          <input
            id="activity"
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="Enter activity"
            className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <div className="flex items-end">
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
            Add Item
          </button>
        </div>
      </div>
    </form>
  )
}

