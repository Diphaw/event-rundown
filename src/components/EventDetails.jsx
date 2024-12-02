import { useState } from 'react'

export default function EventDetails({ onSave }) {
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (eventName && eventDate) {
      onSave({ name: eventName, date: eventDate })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name"
          className="border rounded px-3 py-2 flex-grow"
          required
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-auto"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Save Event Details
        </button>
      </div>
    </form>
  )
}

