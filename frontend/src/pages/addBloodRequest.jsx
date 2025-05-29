import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react';
import Header from "./header/header";import Footer from './footer/footer';

export const BloodRequestForm = () => {
    const [BloodType, setBloodType] = useState([]);
    const [Hospitals, setHospitals] = useState([]);
    const [BloodRequest, setBloodRequest] = useState({
        Quantity: '',
        Urgency: '',
        blood_id: '',
        hospital_id: ''
    });

    const toast = useToast();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getHospitals')
            .then(response => setHospitals(response.data))
            .catch(error => {
                console.error('Failed to fetch hospitals', error);
                toast({
                    title: "Error",
                    description: "Failed to fetch hospitals",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });

        axios.get('http://127.0.0.1:8000/api/getBloodType')
            .then(response => setBloodType(response.data))
            .catch(error => {
                console.error('Failed to fetch BloodType', error);
            });
    }, []);

    const handleChange = (e) => {
        setBloodRequest({ ...BloodRequest, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/addBloodRequest', BloodRequest);
            toast({
                title: "Success",
                description: "Blood request recorded successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            // Optionally clear form here
        } catch (error) {
            console.error('Failed to record the blood request', error);
            toast({
                title: "Error",
                description: "Failed to record the blood request",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <>
        <Header/>
        <Box maxW="md" mx="auto" p={6} mt={5} borderWidth="1px" borderRadius="lg" transform={'scale(0.92)'}>
            <VStack spacing={5}>
                <Heading as="h2" size="xl">Blood Request Form</Heading>
                <Text fontSize="md">Please fill out the form below to submit a blood request. Ensure you select the correct blood type and urgency level required.</Text>
                <form onSubmit={handleFormSubmit}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Quantity">Quantity</FormLabel>
                        <Input id="Quantity" type="number" name="Quantity" value={BloodRequest.Quantity} onChange={handleChange} placeholder="Enter Quantity" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Urgency">Urgency Level</FormLabel>
                        <Select id="Urgency" name="Urgency" value={BloodRequest.Urgency} onChange={handleChange} placeholder="Select Urgency">
                            <option value="immediate">Immediate</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="hospital_id">Hospital</FormLabel>
                        <Select id="hospital_id" name="hospital_id" value={BloodRequest.hospital_id} onChange={handleChange} placeholder="Select Hospital">
                            {Hospitals.map(hospital => (
                                <option key={hospital.id} value={hospital.id}>{hospital.Name}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="blood_id">Blood Type</FormLabel>
                        <Select id="blood_id" name="blood_id" value={BloodRequest.blood_id} onChange={handleChange} placeholder="Select Blood Type">
                            {BloodType.map(bloodType => (
                                <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <Button colorScheme="red" size="lg" fontSize="md" type="submit">
                        Record Blood Request
                    </Button>
                </form>
            </VStack>
        </Box>
        <Footer/>
        </>
    );
};
