import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-6 shadow-md rounded">
          <p>Total Revenue</p>
          <h2 className="text-2xl font-bold">$0.00</h2>
        </div>
        <div className="bg-white p-6 shadow-md rounded">
          <p>Average Order Value</p>
          <h2 className="text-2xl font-bold">$0.00</h2>
        </div>
        <div className="bg-white p-6 shadow-md rounded">
          <p>Tickets Sold</p>
          <h2 className="text-2xl font-bold">0</h2>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-8">Recent Orders</h2>
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
          <tr>
            <td className="py-2 px-4" colSpan="5">No results.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
