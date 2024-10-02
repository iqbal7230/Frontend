import React from 'react';

const NEFTDetails = ({ details }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold">Transaction Details</h2>
      <p className="text-gray-600">Sender: {details.sender}</p>
      <p className="text-gray-600">Receiver: {details.receiver}</p>
      <p className="text-gray-600">Amount: Rs. {details.amount}</p>
      <p className="text-gray-600">Transaction Date: {details.date}</p>
      <p className="text-gray-600">Status: {details.status}</p>
    </div>
  );
};

export default NEFTDetails;
