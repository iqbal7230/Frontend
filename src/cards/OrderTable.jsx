
import React from 'react';
import OrderRow from './OrderRow';

const OrderTable = ({ orders }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded mt-4">
      <thead>
        <tr>
          <th className="py-2 px-4">Order Number</th>
          <th className="py-2 px-4">Purchase Date</th>
          <th className="py-2 px-4">Customer</th>
          <th className="py-2 px-4">Event</th>
          <th className="py-2 px-4">Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderRow
              key={order.orderNumber}
              orderNumber={order.orderNumber}
              purchaseDate={order.purchaseDate}
              customer={order.customer}
              event={order.event}
              amount={order.amount}
            />
          ))
        ) : (
          <tr>
            <td className="py-2 px-4" colSpan="5">No results.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrderTable;
