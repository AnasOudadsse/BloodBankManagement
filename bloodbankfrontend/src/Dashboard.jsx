import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalUnitsCollected: 0,
    totalUnitsDistributed: 0,
    totalDonors: 0,
    pendingRequests: 0,
    inventoryStatus: [],
    recentDonations: [],
    donorDemographics: []
  });

  useEffect(() => {
    // Simulate fetching data
    axios.get('/api/dashboardData').then(response => {
      setDashboardData(response.data);
    }).catch(error => {
      console.error('Failed to fetch dashboard data', error);
    });
  }, []);

  return (
    <Box padding={4}>
      <SimpleGrid columns={4} spacing={10}>
        <Stat>
          <StatLabel>Total Blood Units Collected</StatLabel>
          <StatNumber>{dashboardData.totalUnitsCollected}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Blood Units Distributed</StatLabel>
          <StatNumber>{dashboardData.totalUnitsDistributed}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Donors</StatLabel>
          <StatNumber>{dashboardData.totalDonors}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Pending Blood Requests</StatLabel>
          <StatNumber>{dashboardData.pendingRequests}</StatNumber>
        </Stat>
      </SimpleGrid>

      <Box mt={10}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dashboardData.recentDonations}>
            <Bar dataKey="units" fill="#8884d8" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box mt={10}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dashboardData.donorDemographics}>
            <Bar dataKey="count" fill="#82ca9d" />
            <XAxis dataKey="ageGroup" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
export default Dashboard;
