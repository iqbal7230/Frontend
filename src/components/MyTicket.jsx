import React from 'react';
import { data } from '../data/data';
import TicketCard from '../cards/TicketCard'; 

const MyTickets = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">My Tickets</h1>
      <div className="grid grid-cols-1 gap-6">
        {data.myTickets.length > 0 ? (
          data.myTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              eventName={ticket.eventName}
              ticketId={ticket.ticketId}
              date={ticket.date}
            />
          ))
        ) : (
          <p>No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
