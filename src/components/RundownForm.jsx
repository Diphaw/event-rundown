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
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/4"
          required
        />
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter activity"
          className="border rounded px-3 py-2 w-full sm:flex-grow"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
          Add Item
        </button>
      </div>
    </form>
  )
}

