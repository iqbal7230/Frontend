import React from 'react';
import { data } from '../data/data';

const MyTickets = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">My Tickets</h1>
      <div className="grid grid-cols-1 gap-6">
        {data.myTickets.length > 0 ? (
          data.myTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white p-4 shadow-md rounded">
              <h2 className="text-xl font-bold">Event: {ticket.eventName}</h2>
              <p className="text-gray-600">Ticket ID: {ticket.ticketId}</p>
              <p className="text-gray-600">Date: {ticket.date}</p>
            </div>
          ))
        ) : (
          <p>No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
