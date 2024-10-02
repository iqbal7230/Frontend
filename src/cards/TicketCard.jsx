import React from 'react';

const TicketCard = ({ eventName, ticketId, date }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold">Event: {eventName}</h2>
      <p className="text-gray-600">Ticket ID: {ticketId}</p>
      <p className="text-gray-600">Date: {date}</p>
    </div>
  );
};

export default TicketCard;
