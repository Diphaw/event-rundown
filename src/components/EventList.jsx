import { useState } from 'react'
import EventForm from './EventForm'
import EventItem from './EventItem'

export default function EventList() {
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now(), rundownItems: [] }])
  }

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
  }

  const updateRundown = (eventId, newRundownItems) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, rundownItems: newRundownItems } : event
    ))
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

