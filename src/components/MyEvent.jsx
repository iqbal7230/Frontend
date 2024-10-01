import React from 'react';
import { data } from '../data/data';

const MyEvents = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">My Events</h1>
      <div className="grid grid-cols-1 gap-6">
        {data.myEvents.length > 0 ? (
          data.myEvents.map((event) => (
            <div key={event.id} className="bg-white p-4 shadow-md rounded">
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default MyEvents;
