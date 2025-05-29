import React, { useEffect, useState } from 'react';
import {
  Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatGroup,
  Heading, Text, Flex, IconButton, useColorMode, useColorModeValue,
  Icon, Button, HStack, VStack
} from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';
import Header from "./header/header";import Footer from './footer/footer';
import { pendingRequests, recentDonations } from './MockData';
import { FaTint, FaHandHoldingMedical, FaUsers, FaClock, FaMoon, FaSun } from 'react-icons/fa';

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('white', 'gray.700');

  const [stats, setStats] = useState({
    QuantityDonated: 0,
    QuantityDistributed: 0,
    TotalDonors: 0,
    PendingRequests: 0,
    QuantityAvailable: 0,
    recentDonations : null
  });

  const BloodStock = {
    APositive: stats.APositive || 0,
    ANegative: stats.ANegative || 0,
    BPositive: stats.BPositive || 0,
    BNegative: stats.BNegative || 0,
    OPositive: stats.OPositive || 0,
    ONegative: stats.ONegative || 0,
    ABPositive: stats.ABPositive || 0,
    ABNegative: stats.ABNegative || 0,
  };

  const recentDonations = stats.recentDonations

  const activeBloodCamps = stats.activeBloodCamps

  const chartData = Object.entries(BloodStock).map(([type, units]) => ({ type, units }));

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/dashboard')
      .then(response => {
        setStats(response.data);
        console.log(response.data);
      })
      .catch(error => {
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
      bg={formBackground}
    >
      <Flex align="center">
        <Icon as={icon} w={10} h={10} mb={4} color="#D2122E" />
        <Box ml="4">
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {value.toLocaleString()}
          </StatNumber>
          <StatLabel fontSize={'md'} color={'gray.500'}>
            {label}
          </StatLabel>
        </Box>
      </Flex>
    </Stat>
  );


  return (
    <>
      <Header />
      <Box bg='gray.100' >
        <HStack justifyContent="space-between" transform={'scale(0.9)'}>
          <Heading as="h1" size="xl" mb={6}>
            Dashboard
          </Heading>
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            isRound={true}
            size="lg"
            alignSelf="flex-start"
            onClick={toggleColorMode}
          />
        </HStack>
        <SimpleGrid columns={[1, null, 5]} spacing="40px" mb={10} transform={'scale(0.9)'}>
          <StatCard icon={FaTint} label="Total blood units available" value={stats.QuantityAvailable} />
          <StatCard icon={FaTint} label="Total blood units collected" value={stats.QuantityDonated} />
          <StatCard icon={FaHandHoldingMedical} label="Total blood units distributed" value={stats.QuantityDistributed} />
          <StatCard icon={FaUsers} label="Total donors" value={stats.TotalDonors} />
          <StatCard icon={FaClock} label="Pending blood requests" value={stats.PendingRequests} />
        </SimpleGrid>

        <VStack spacing={10}>
          <Flex>
          <Box bg={formBackground} shadow="lg" p={5} rounded="lg" mb={10} mr={10}>
            <Heading as="h2" size="lg" mb={4}>
              Blood Stock Levels
            </Heading>
            <LineChart width={730} height={250} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="units" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </Box>

          <Box p={5} bg="white" shadow="md"  borderRadius="lg" w={216} transform={'scale(0.9)'} position='relative' bottom={5}  ml={10}  >
            <Heading size="lg" mb={4} color="black.500">Actice blood camps</Heading>
            <VStack spacing={4} align="stretch">
              {activeBloodCamps?.map((camp, index) => (
                <Box key={index} p={4} bg="gray.100" borderRadius="md">
                  <Text color="gray.600" fontSize="sm" mb={1}>
                    {new Date(camp.StartTime).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </Text>
                  <Heading size="sm" mb={1}>{camp.Name}</Heading>
                  <Text fontSize="sm">{camp.Address}</Text>
                </Box>
              ))}
            </VStack>
            </Box>
          </Flex>
 

            <Box bg={formBackground} shadow="lg" p={5} rounded="lg" mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                Recent Donations
              </Heading>
              <SimpleGrid columns={1} spacing={5} display='flex'>
                {recentDonations?.map(donation => (
                  <Box key={donation.id} p={5} shadow="md" borderWidth="1px" rounded="md" bg="white" _dark={{ bg: "gray.800" }}>
                    <Text fontSize="lg" fontWeight="bold">{donation.donor.Name}</Text>
                    <Text fontSize="sm">{new Date(donation.DonationDate).toLocaleDateString()}</Text>
                    <Text fontSize="sm" color="gray.500">Quantity Donated: {donation.QuantityDonated} units</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
   
        </VStack>


      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;
