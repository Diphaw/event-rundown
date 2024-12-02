import { useState } from 'react'

export default function EventForm({ onAddEvent }) {
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (eventName && eventDate) {
      onAddEvent({ name: eventName, date: eventDate })
      setEventName('')
      setEventDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name"
          className="border rounded px-3 py-2 w-full"
          required
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-auto"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto">
          Add Event
        </button>
      </div>
    </form>
  )
}

