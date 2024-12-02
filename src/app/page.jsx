"use client";

import { useState } from 'react';
import RundownForm from '../components/RundownForm';
import RundownList from '../components/RundownList';
import EventDetails from '../components/EventDetails';
import EventList from '../components/EventList';

export default function Home() {
  const [rundownItems, setRundownItems] = useState([]);
  const [eventDetails, setEventDetails] = useState(null);
  const [showEventList, setShowEventList] = useState(true); 

  // Tambahkan item rundown
  const addRundownItem = (item) => {
    setRundownItems([...rundownItems, { ...item, id: Date.now() }]);
  };

  // Hapus item rundown
  const deleteRundownItem = (id) => {
    setRundownItems(rundownItems.filter((item) => item.id !== id));
  };

  // Edit item rundown
  const editRundownItem = (id, updatedItem) => {
    setRundownItems(
      rundownItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  // Simpan detail event
  const saveEventDetails = (details) => {
    setEventDetails(details);
    setShowEventList(false);
  };

  // Reset untuk kembali ke daftar event
  const resetToEventList = () => {
    setEventDetails(null);
    setShowEventList(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Event Rundown Creator
      </h1>
      {showEventList ? (
        // Tampilan daftar event
        <EventList />
      ) : (
        <>
          {/* Jika detail event belum disimpan */}
          {!eventDetails ? (
            <EventDetails onSave={saveEventDetails} />
          ) : (
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold">{eventDetails.name}</h2>
              <p className="text-lg text-gray-600">
                {new Date(eventDetails.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <button
                onClick={resetToEventList}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Back to Event List
              </button>
            </div>
          )}
          {/* Form dan daftar rundown */}
          <RundownForm onAddItem={addRundownItem} />
          <RundownList
            items={rundownItems}
            onDeleteItem={deleteRundownItem}
            onEditItem={editRundownItem}
          />
        </>
      )}
    </div>
  );
}
