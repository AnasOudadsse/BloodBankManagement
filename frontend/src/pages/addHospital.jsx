import React, { useState } from 'react';
import axios from 'axios';
import { Box, FormControl,Heading, FormLabel, Input, Button, useToast, VStack } from '@chakra-ui/react';
import Footer from './footer/footer';
import Header from './header/header';

function HospitalForm() {
  const [HospitalData, setHospitalData] = useState({
    Name: '',
    Address: '',
    PhoneNumber: '',
  });

  const toast = useToast();

  const handleChange = (e) => {
    setHospitalData({ ...HospitalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addHospital', HospitalData);
      toast({
        title: 'Success',
        description: 'Hospital added successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setHospitalData({ Name: '', Address: '', PhoneNumber: '' }); // Clear form
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error submitting the form!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Header />
      <Box mt={20} mx="auto" maxW="md" p={5} borderWidth="1px" borderRadius="lg" mb={20} >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
          <Heading size="lg" mb={4} textAlign="center" color="red.500">
            Add Hospital
          </Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="Name">Hospital Name</FormLabel>
              <Input
                id="Name"
                type="text"
                name="Name"
                value={HospitalData.Name}
                onChange={handleChange}
                placeholder="Enter hospital name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="Address">Address</FormLabel>
              <Input
                id="Address"
                type="text"
                name="Address"
                value={HospitalData.Address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="PhoneNumber">Phone Number</FormLabel>
              <Input
                id="PhoneNumber"
                type="text"
                name="PhoneNumber"
                value={HospitalData.PhoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </FormControl>
            <Button type="submit" colorScheme="red" size="lg" fontSize="md">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
      <Footer/>
    </>
  );
}

export default HospitalForm;
