// AllEvents.js
import React, { useState } from 'react';
import { data } from '../data/data';
import EventCard from '../cards/EventCard';
import EventFilters from '../cards/EventFilter';

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
    alert(`Ticket for event ID ${eventId} bought successfully!`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">All Events</h1>

      {/* Event Filters */}
      <EventFilters
        search={search}
        setSearch={setSearch}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      {/* Events Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              handleBuyTicket={handleBuyTicket}
            />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
