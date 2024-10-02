
import React from 'react';

const RevenueCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded">
      <p>{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
};

export default RevenueCard;
