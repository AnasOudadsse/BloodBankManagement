import React, { useEffect, useState } from "react";
import axios from "axios";
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
  Text,
  Flex
} from '@chakra-ui/react';
import Footer from "./footer";
import { Header } from "./header";

export function BloodCampStaffForm() {
    const [BloodCamps, setBloodCamps] = useState([]);
    const [BloodCampStaffData, setBloodCampStaffData] = useState({
        Cin: '',
        Name: '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'BloodCampStaff',
        blood_camp_id: ''
    });  

    const toast = useToast();

    useEffect(() => {
        const fetchBloodCamps = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodCamps');
                setBloodCamps(response.data);
            } catch (error) {
                console.error('Failed to fetch BloodCamps', error);
                toast({
                  title: "Fetching Error",
                  description: "Failed to fetch BloodCamps",
                  status: "error",
                  duration: 9000,
                  isClosable: true
                });
            }
        }
        fetchBloodCamps();
    }, []);

    const handleChange = (e) => {
        setBloodCampStaffData({ ...BloodCampStaffData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/addBloodCampStaff', BloodCampStaffData);
          toast({
            title: "Success",
            description: "Blood Camp Staff added successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top"
          });
          // Optionally clear form here
        } catch (error) {
          console.error('Failed to submit form', error);
          toast({
            title: "Submission Error",
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
      <Header/>
      
        <Box p={5} shadow="md" borderWidth="1px" maxWidth="500px" mx="auto" transform={'scale(0.9)'}>
          <Flex justifyContent='center'>
              <Text mb={10} fontSize="2xl" fontWeight="bold">BloodCamp Staff Registration</Text>
          </Flex>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Cin">CIN</FormLabel>
                        <Input id="Cin" type="text" name="Cin" value={BloodCampStaffData.Cin} onChange={handleChange} placeholder="Enter CIN"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Name">Full Name</FormLabel>
                        <Input id="Name" type="text" name="Name" value={BloodCampStaffData.Name} onChange={handleChange} placeholder="Full Name"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="PhoneNumber">Phone Number</FormLabel>
                        <Input id="PhoneNumber" type="tel" name="PhoneNumber" value={BloodCampStaffData.PhoneNumber} onChange={handleChange} placeholder="Phone Number"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="BirthDate">Birth Date</FormLabel>
                        <Input id="BirthDate" type="date" name="BirthDate" value={BloodCampStaffData.BirthDate} onChange={handleChange}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Gender">Gender</FormLabel>
                        <Select id="Gender" name="Gender" value={BloodCampStaffData.Gender} onChange={handleChange} placeholder="Select Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="blood_camp_id">Blood Camp</FormLabel>
                        <Select id="blood_camp_id" name="blood_camp_id" value={BloodCampStaffData.blood_camp_id} onChange={handleChange} placeholder="Select BloodCamp">
                            {BloodCamps.map((camp) => (
                                <option key={camp.id} value={camp.id}>{camp.Name}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Email">Email</FormLabel>
                        <Input id="Email" type="email" name="Email" value={BloodCampStaffData.Email} onChange={handleChange} placeholder="Email"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="EncryptedPassword">Password</FormLabel>
                        <Input id="EncryptedPassword" type="password" name="EncryptedPassword" value={BloodCampStaffData.EncryptedPassword} onChange={handleChange} placeholder="Password"/>
                    </FormControl>
                    <Button type="submit" colorScheme="red" size="lg">Submit</Button>
                </VStack>
            </form>
        </Box>
        <Footer/>
        </>
    );
}
