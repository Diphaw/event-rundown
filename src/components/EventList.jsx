import { useState, useEffect } from 'react'
import EventForm from './EventForm'
import EventItem from './EventItem'

export default function EventList() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const savedEvents = localStorage.getItem('events')
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents))
    }
  }, [])

  const saveEvents = (updatedEvents) => {
    setEvents(updatedEvents)
    localStorage.setItem('events', JSON.stringify(updatedEvents))
  }

  const addEvent = (event) => {
    const updatedEvents = [...events, { ...event, id: Date.now(), rundownItems: [] }]
    saveEvents(updatedEvents)
  }

  const deleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id)
    saveEvents(updatedEvents)
  }

  const updateRundown = (eventId, newRundownItems) => {
    const updatedEvents = events.map(event => 
      event.id === eventId ? { ...event, rundownItems: newRundownItems } : event
    )
    saveEvents(updatedEvents)
  }

  return (
    <div>
      <EventForm onAddEvent={addEvent} />
      <div className="mt-8 space-y-8">
        {events.map(event => (
          <EventItem 
            key={event.id} 
            event={event} 
            onDeleteEvent={deleteEvent}
            onUpdateRundown={updateRundown}
          />
        ))}
      </div>
    </div>
  )
}

