import React from 'react';
import { bloodStock, recentDonations, pendingRequests } from './MockData';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  // Simple chart data
  const chartData = Object.entries(bloodStock).map(([type, units]) => ({ type, units }));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blood Stock Levels */}
        <div className="col-span-1 lg:col-span-2 bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-xl mb-4">Blood Stock Levels</h2>
          <LineChart width={730} height={250} data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="units" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* Recent Donations */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-xl mb-4">Recent Donations</h2>
          <ul className="max-h-56 overflow-auto">
            {recentDonations.map(donation => (
              <li key={donation.id} className="flex justify-between items-center py-2">
                <span className="text-gray-600">{donation.name} ({donation.type})</span>
                <span className="text-sm text-gray-500">{donation.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pending Requests */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-xl mb-4">Pending Requests</h2>
          <ul className="max-h-56 overflow-auto">
            {pendingRequests.map(request => (
              <li key={request.id} className="flex justify-between items-center py-2">
                <span className="text-gray-600">{request.patientName} ({request.type})</span>
                <span className={`text-sm font-semibold ${request.urgency === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>{request.urgency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
