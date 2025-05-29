import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header/header";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  useToast,
  Text
} from '@chakra-ui/react';
import Footer from "./footer/footer";

export function HospitalStaffForm() {
  const [Hospitals, setHospitals] = useState([]);
  const [HospitalStaffData, setHospitalStaffData] = useState({
    Cin: '',
    Name: '',
    PhoneNumber: '',
    Email: '',
    BirthDate: '',
    Gender: '',
    EncryptedPassword: '',
    Role: 'HospitalStaff',
    Position: '',
    hospital_id: ''
  });

  const toast = useToast();

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getHospitals');
        setHospitals(response.data);
      } catch (error) {
        console.error('Failed to fetch hospitals', error);
        toast({
          title: "Error",
          description: "Failed to fetch hospitals",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom"
        });
      }
    }
    fetchHospitals();
  }, []);

  const handleChange = (e) => {
    setHospitalStaffData({ ...HospitalStaffData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addHospitalStaff', HospitalStaffData);
      toast({
        title: "Success",
        description: "Hospital staff added successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      // Optionally reset form here
      setHospitalStaffData({
        Cin: '',
        Name: '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'HospitalStaff',
        Position: '',
        hospital_id: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }
  };

  return (
    <>
      <Header />
      <Box as="form"  mb={10} onSubmit={handleSubmit} p={5} mx="auto" maxW="500px" borderWidth="1px" borderRadius="lg" transform={'scale(0.9)'}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Hospital Staff Registration</Text>
          <FormControl isRequired>
            <FormLabel htmlFor="Cin">Cin</FormLabel>
            <Input id="Cin" name="Cin" value={HospitalStaffData.Cin} onChange={handleChange} placeholder="Cin" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Name">Full Name</FormLabel>
            <Input id="Name" name="Name" value={HospitalStaffData.Name} onChange={handleChange} placeholder="Full Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="PhoneNumber">Phone Number</FormLabel>
            <Input id="PhoneNumber" name="PhoneNumber" type="tel" value={HospitalStaffData.PhoneNumber} onChange={handleChange} placeholder="Phone Number" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="BirthDate">Birth Date</FormLabel>
            <Input id="BirthDate" name="BirthDate" type="date" value={HospitalStaffData.BirthDate} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Gender">Gender</FormLabel>
            <Select id="Gender" name="Gender" value={HospitalStaffData.Gender} onChange={handleChange} placeholder="Select Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Position">Position</FormLabel>
            <Input id="Position" name="Position" value={HospitalStaffData.Position} onChange={handleChange} placeholder="Position" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="hospital_id">Select Hospital</FormLabel>
            <Select id="hospital_id" name="hospital_id" value={HospitalStaffData.hospital_id} onChange={handleChange} placeholder="Select Hospital">
              {Hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.id}>{hospital.Name}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Email">Email</FormLabel>
            <Input id="Email" name="Email" type="email" value={HospitalStaffData.Email} onChange={handleChange} placeholder="Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="EncryptedPassword">Password</FormLabel>
            <Input id="EncryptedPassword" name="EncryptedPassword" type="password" value={HospitalStaffData.EncryptedPassword} onChange={handleChange} placeholder="Password" />
          </FormControl>
          <Button type="submit" colorScheme="red" size="lg">Submit</Button>
        </VStack>
      </Box>
      <Footer/>
    </>
  );
}
