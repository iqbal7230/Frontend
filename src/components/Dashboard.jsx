// Dashboard.js
import React from 'react';
import RevenueCard from '../cards/RevenueCard';
import OrderTable from '../cards/OrderTable';
import { data } from '../data/data';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

     
      <div className="grid grid-cols-3 gap-4 mt-6">
        <RevenueCard title="Total Revenue(Rs)" value={`${data.revenue.totalRevenue}`} />
        <RevenueCard title="Average Order Value(Rs)" value={`${data.revenue.averageOrderValue}`} />
        <RevenueCard title="Tickets Sold" value={data.revenue.ticketsSold} />
      </div>

    
      <h2 className="text-xl font-semibold mt-8">Recent Orders</h2>
      <OrderTable orders={data.recentOrders} />
    </div>
  );
};

export default Dashboard;
