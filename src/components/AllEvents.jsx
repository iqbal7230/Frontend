import React, { useState } from 'react';
import { data } from '../data/data';

const AllEvents = () => {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Function to handle filtering by name and date
  const filteredEvents = data.allEvents.filter((event) => {
    const matchesName = event.name.toLowerCase().includes(search.toLowerCase());
    const matchesDate = dateFilter ? event.date.includes(dateFilter) : true;
    return matchesName && matchesDate;
  });

  // Function to handle ticket buying logic (placeholder)
  const handleBuyTicket = (eventId) => {
    // Placeholder logic, you can integrate your payment API or redirect here
    alert(`Ticket for event ID ${eventId} bought successfully!`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">All Events</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by event name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Events Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="bg-white p-4 shadow-md rounded">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Venue: {event.venue}</p>
              <p className="text-gray-600">Ticket Price: Rs. {event.price}</p>
              <p className="mt-2">{event.description}</p>

              {/* Buy Ticket Button */}
              <button
                onClick={() => handleBuyTicket(event.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Buy Ticket
              </button>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
