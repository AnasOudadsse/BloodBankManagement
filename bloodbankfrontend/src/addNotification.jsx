import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  useToast,
  Container,
  Icon
} from '@chakra-ui/react';
import { FaHeartbeat } from 'react-icons/fa'; // Icon representing health/blood donation
import Cities from './MoroccanCities.json'; // Your city data
import { Header } from './header';
import Footer from './footer';

export function SendNotificationForm() {
  const [criteria, setCriteria] = useState({
    bloodTypes: [],
    cities: Cities,
  });
  const [notificationData, setNotificationData] = useState({
    bloodType: "",
    city: "",
    title: '',
    message: '',
  });
  console.log(notificationData);
  const toast = useToast();

  useEffect(() => {
    const fetchBloodTypes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getBloodType");
        setCriteria(prevCriteria => ({
          ...prevCriteria,
          bloodTypes: response.data
        }));
      } catch (error) {
        console.error("Failed to fetch blood types", error);
        toast({
          title: "Error fetching blood types",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    fetchBloodTypes();
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotificationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addNotification', notificationData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("Notification sent successfully", response.data);
      toast({
        title: "Notification Sent",
        description: "Notification sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right"
      });
    } catch (error) {
      console.error("Failed to send notification", error);
      toast({
        title: "Failed to Send Notification",
        description: `Error: ${error.response?.data?.message || error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right"
      });
    }
  };
  

  return (
  <>
    <Header/>
    <Container maxW="container.md" mt={10} centerContent transform={'scale(0.9)'}>
      <Box bg="white" p={8} boxShadow="2xl" borderRadius="lg" w="full" border="2px" borderColor="red.400">
        <VStack as="form" onSubmit={handleSubmit} spacing={5} align="stretch">
          <Heading size="lg" mb={4} textAlign="center" color="red.500">
            <Icon as={FaHeartbeat} w={6} h={6} mr={2} />
            Send Alert Notification
          </Heading>
          <FormControl isRequired>
            <FormLabel>Blood Type</FormLabel>
            <Select name="bloodType" placeholder="Select Blood Type" onChange={handleChange} value={notificationData.bloodType}>
              {criteria.bloodTypes.map(type => (
                <option key={type.id} value={type.id}>{type.BloodType}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Select name="city" placeholder="Select City" onChange={handleChange} value={notificationData.city}>
              {criteria.cities.map(city => (
                <option key={city.id} value={city.ville}>{city.ville}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input name="title" placeholder="Notification Title" onChange={handleChange} value={notificationData.title} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" placeholder="Type your notification message here" onChange={handleChange} value={notificationData.message} />
          </FormControl>
          <Button colorScheme="red" type="submit" size="lg" width="full">Send Notification</Button>
        </VStack>
      </Box>
    </Container>
    <Footer/>
    </>
  );
}
