import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  VStack,
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react";
import { Header } from "./header";
import Footer from "./footer";

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userjson = localStorage.getItem("user");
  const user = userjson ? JSON.parse(userjson) : null;

  useEffect(() => {
    const fetchDonation = async () => {
      if (!user) {
        setError("User not logged in");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/DonationHistory", user);
        setDonations(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch donation history", err.response?.data);
        setError("Failed to fetch donation history");
        setLoading(false);
      }
    };
    fetchDonation();
  }, []);

  const calculateStats = (donations) => {
    if (donations.length === 0) return { totalDonations: 0, averageInterval: 0, nextEligibleDate: '' };

    const totalDonations = donations.length;

    const dates = donations.map((donation) => new Date(donation.DonationDate)).sort((a, b) => a - b);
    const intervals = dates.slice(1).map((date, i) => (date - dates[i]) / (1000 * 60 * 60 * 24));

    const averageInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;

    const lastDonationDate = dates[dates.length - 1];
    const nextEligibleDate = new Date(lastDonationDate);
    nextEligibleDate.setDate(nextEligibleDate.getDate() + 56);

    return {
      totalDonations,
      averageInterval: Math.round(averageInterval),
      nextEligibleDate: nextEligibleDate.toISOString().split("T")[0],
    };
  };

  const donationStats = calculateStats(donations);

  const StatCard = ({ label, value, helpText }) => (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"gray.200"}
      rounded={"lg"}
    >
      <Flex align="center">
        <Box ml="4">
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {value}
          </StatNumber>
          <StatLabel fontSize={"md"} color={"gray.500"}>
            {label}
          </StatLabel>
          {helpText && <StatHelpText>{helpText}</StatHelpText>}
        </Box>
      </Flex>
    </Stat>
  );

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <Header />
      <Box p={5} mb={80}>
        <Heading as="h1" size="xl" mb={6}>
          Donation History
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="40px" mt={10} mr={20} ml={20} mb={20}>
          <StatCard
            label="Total Donations"
            value={donationStats.totalDonations}
            helpText={`Last donation: ${donations.length > 0 ? new Date(donations[donations.length - 1].DonationDate).toLocaleDateString() : "N/A"}`}
          />
          <StatCard
            label="Average Donation Interval (days)"
            value={donationStats.averageInterval}
            helpText="Based on your donation history"
          />
          <StatCard
            label="Eligible for Next Donation"
            value={donationStats.nextEligibleDate}
            helpText="Based on your last donation"
          />
        </SimpleGrid>
        <Box bg="white" shadow="lg" p={5} rounded="lg" mb={10}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Donation ID</Th>
                <Th>Date of Donation</Th>
                <Th>Quantity Donated</Th>
                <Th>Blood Camp ID</Th>
                <Th>Staff CIN</Th>
              </Tr>
            </Thead>
            <Tbody>
              {donations.map((donation) => (
                <Tr key={donation.id}>
                  <Td>{donation.id}</Td>
                  <Td>{new Date(donation.DonationDate).toLocaleDateString()}</Td>
                  <Td>{donation.QuantityDonated} units</Td>
                  <Td>{donation.blood_camp_id}</Td>
                  <Td>{donation.bloodcampstaff_cin}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DonationHistory;
