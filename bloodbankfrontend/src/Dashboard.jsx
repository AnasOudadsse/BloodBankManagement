import React, { useEffect, useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { FaTint, FaHandHoldingMedical, FaUsers, FaClock } from 'react-icons/fa';
import { bloodStock, recentDonations, pendingRequests } from './MockData';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatGroup } from '@chakra-ui/react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { Header } from './header';
import Footer from './footer';
const Dashboard = () => {
  // Simple chart data


  
  const [stats, setStats] = useState({
    QuantityDonated: 0,
    QuantityDistributed: 0,
    TotalDonors: 0,
    PendingRequests: 0,
    QuantityAvailable:0
});

 const BloodStock = {
  APositive: stats.APositive,
  ANegative: stats.ANegative,
  BPositive: stats.BPositive,
  BNegative: stats.BNegative,
  OPositive: stats.OPositive,
  ONegative: stats.ONegative,
  ABPositive: stats.ABPositive,
  ABNegative: stats.ABNegative,
 }

 const chartData = Object.entries(BloodStock).map(([type, units]) => ({ type, units }));

  useEffect(() => {
    // Simulate fetching data
    axios.get('http://127.0.0.1:8000/api/dashboard').then(response => {
      setStats(response.data);
      console.log(response.data);
    }).catch(error => {
      console.error('Failed to fetch dashboard data', error);
    });
  }, []);

  const StatCard = ({ icon, label, value }) => (
    <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={'gray.200'}
        rounded={'lg'}
        >
        <StatGroup >
            <Icon as={icon} w={10} h={10} mb={4} color="red" />
            <Box ml="4" m={8} >
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                    {value.toLocaleString()}
                </StatNumber>
                <StatLabel fontSize={'md'} color={'gray.500'}>
                    {label}
                </StatLabel>
            </Box>
        </StatGroup>
    </Stat>
);
  return (
    <>
    <Header/>
    <Box p={5} transform={'scale(0.9)'}>
            <SimpleGrid columns={[1, null, 5]} spacing="40px">
                <StatCard
                    icon={FaTint}
                    label="Total blood units Available"
                    value={stats.QuantityAvailable}
                />
                <StatCard
                    icon={FaTint}
                    label="Total blood units collected"
                    value={stats.QuantityDonated}
                />
                <StatCard
                    icon={FaHandHoldingMedical}
                    label="Total blood units distributed"
                    value={stats.QuantityDistributed}
                />
                <StatCard
                    icon={FaUsers}
                    label="Total Donors"
                    value={stats.TotalDonors}
                />
                <StatCard
                    icon={FaClock}
                    label="Pending Blood requests"
                    value={stats.PendingRequests}
                />
            </SimpleGrid>
        </Box>


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
    <Footer/>
    </>
  );
};

export default Dashboard;
