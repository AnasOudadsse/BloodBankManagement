import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  useToast,
  Heading,
  Container,
  Text,
  Link
} from '@chakra-ui/react';
import AsyncSelect from 'react-select/async';
import { Header } from './header';
import Footer from './footer';

export const DonationForm = () => {
  const user = localStorage.getItem('user');
  const bloodcampstaff = JSON.parse(user);
  const [BloodType, setBloodType] = useState([]);
  const [donationData, setDonationData] = useState({
    QuantityDonated: '',
    DonationDate: '',
    donor_cin: '',
    blood_type_id: '',
    blood_camp_id: '',
    bloodcampstaff_cin: bloodcampstaff.Cin
  });

  const toast = useToast();

  // Load options for donors
  const loadDonorOptions = async (inputValue) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/searchDonors?q=${inputValue}`);
      return response.data.map(donor => ({ value: donor.Cin, label: donor.Name }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch donors",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  // Load options for blood camps
  const loadBloodCampOptions = async (inputValue) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/searchBloodCamps?q=${inputValue}`);
      return response.data.map(camp => ({ value: camp.id, label: camp.Name }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blood camps",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  useEffect(() => {
    const fetchBloodType = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getBloodType');
        setBloodType(response.data);
      } catch (error) {
        console.error('Failed to fetch BloodType', error);
      }
    };
    fetchBloodType();
  }, []);

  const handleInputChange = (fieldName) => (selectedOption) => {
    setDonationData(prevState => ({
      ...prevState,
      [fieldName]: selectedOption ? selectedOption.value : null
    }));
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setDonationData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/addDonation', donationData);
      console.log(response.data);
      toast({
        title: "Success",
        description: "Donation recorded successfully",
        status: "success",
        duration: 3000,
        isClosable: true
      });
    } catch (error) {
      console.error('Failed to record donation', error.response?.data || error.message);
      toast({
        title: "Error",
        description: "Failed to record donation",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
  <>
  <Header/>
    <Container maxW="container.sm" mt={10} transform={'scale(0.9)'}>
      <Box bg="white" p={8} boxShadow="lg" rounded="lg">
        <VStack as="form" onSubmit={handleFormSubmit} spacing={4} align="stretch">
          <Heading size="lg" color="red.500">Record Donation</Heading>
          <FormControl isRequired>
            <FormLabel>Donor</FormLabel>
            <AsyncSelect
              loadOptions={loadDonorOptions}
              defaultOptions
              onChange={handleInputChange('donor_cin')}
              placeholder="Search and select a donor..."
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Blood Camp</FormLabel>
            <AsyncSelect
              loadOptions={loadBloodCampOptions}
              defaultOptions
              onChange={handleInputChange('blood_camp_id')}
              placeholder="Search and select a blood camp..."
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Blood Type</FormLabel>
            <Select placeholder="Select Blood Type" onChange={(e) => handleInputChange('blood_type_id')({ value: e.target.value })}>
              {BloodType.map(bloodType => (
                <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Quantity Donated</FormLabel>
            <Input type="number" placeholder="Quantity Donated" name="QuantityDonated" onChange={handleTextChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Donation Date</FormLabel>
            <Input type="date" name="DonationDate" onChange={handleTextChange} />
          </FormControl>
          <Button colorScheme="red" type="submit" size="lg" width="full">Record Donation</Button>
          <Text align="center" mt={6}>
        <Link as={RouterLink} to="/addDonor" color="teal.500">Donor not registered? Register now!</Link>
      </Text>
        </VStack>
      </Box>

    </Container>
    <Footer/>
    </>

  );
};

export default DonationForm;
