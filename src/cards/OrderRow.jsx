
import React from 'react';

const OrderRow = ({ orderNumber, purchaseDate, customer, event, amount }) => {
  return (
    <tr>
      <td className="py-2 px-4">{orderNumber}</td>
      <td className="py-2 px-4">{purchaseDate}</td>
      <td className="py-2 px-4">{customer}</td>
      <td className="py-2 px-4">{event}</td>
      <td className="py-2 px-4">{amount}</td>
    </tr>
  );
};

export default OrderRow;
