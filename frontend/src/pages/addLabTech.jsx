import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  useToast
} from '@chakra-ui/react';
import Header from "./header/header";
import Footer from "./footer/footer";

export function LabTechForm() {
    const [LabTechData, setLabTechData] = useState({
        Cin: '',
        Name: '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'LabTech',
        blood_bank_id: '1'  // Assuming this is static for simplicity
    });

    const toast = useToast();

    const handleChange = (e) => {
        setLabTechData({ ...LabTechData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/addLabTech', LabTechData);
            toast({
                title: "Success",
                description: "Lab Technician added successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
            // Optionally clear form here
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
      <Header/>
        <Box p={5} maxW="500px" borderWidth="1px" borderRadius="lg" mx="auto" mt={4} transform={'scale(0.9)'}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Cin">CIN</FormLabel>
                        <Input id="Cin" name="Cin" value={LabTechData.Cin} onChange={handleChange} placeholder="Enter CIN" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Name">Full Name</FormLabel>
                        <Input id="Name" name="Name" value={LabTechData.Name} onChange={handleChange} placeholder="Enter full name" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="PhoneNumber">Phone Number</FormLabel>
                        <Input id="PhoneNumber" type="tel" name="PhoneNumber" value={LabTechData.PhoneNumber} onChange={handleChange} placeholder="Enter phone number" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="BirthDate">Birth Date</FormLabel>
                        <Input id="BirthDate" type="date" name="BirthDate" value={LabTechData.BirthDate} onChange={handleChange} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Gender">Gender</FormLabel>
                        <Select id="Gender" name="Gender" value={LabTechData.Gender} onChange={handleChange} placeholder="Select Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Email">Email</FormLabel>
                        <Input id="Email" type="email" name="Email" value={LabTechData.Email} onChange={handleChange} placeholder="Enter email" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="EncryptedPassword">Password</FormLabel>
                        <Input id="EncryptedPassword" type="password" name="EncryptedPassword" value={LabTechData.EncryptedPassword} onChange={handleChange} placeholder="Enter password" />
                    </FormControl>
                    <Button colorScheme="red" type="submit">Submit</Button>
                </VStack>
            </form>
        </Box>
        <Footer/>
        </>
    );
}
