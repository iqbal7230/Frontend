
import React from 'react';

const EventCard = ({ event, handleBuyTicket }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
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

    
      <button
        onClick={() => handleBuyTicket(event.id)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Buy Ticket
      </button>
    </div>
  );
};

export default EventCard;
