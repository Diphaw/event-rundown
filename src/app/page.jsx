'use client'

import EventList from '../components/EventList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-600">Event Rundown Creator</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <EventList />
      </main>
    </div>
  )
}

