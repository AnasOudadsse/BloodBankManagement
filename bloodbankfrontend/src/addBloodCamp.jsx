import React, { useState } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Text, useToast } from '@chakra-ui/react';

export function BloodCampForm() {
    const [BloodCampData, setBloodCampData] = useState({
        Name: '',
        Address: '',
        StartTime: '',
        EndTime: ''
    });

    const toast = useToast();

    const handleChange = (e) => {
        setBloodCampData({ ...BloodCampData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/addBloodCamp', BloodCampData);
            if (response.status === 200) {
                toast({
                    title: "Success",
                    description: "Blood camp added successfully!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                });
                // Optionally clear form here
                setBloodCampData({
                    Name: '',
                    Address: '',
                    StartTime: '',
                    EndTime: ''
                });
            } else {
                throw new Error('Non-200 response');
            }
        } catch (err) {
            toast({
                title: "Error",
                description: "There was an error submitting the form: " + err.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
        }
    };

    return (
      <>
        <Box maxW="500px" mx="auto" p={5} mt={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
                <Heading as="h1" size="xl">Register Blood Camp</Heading>
                <Text fontSize="md">Fill out the form below to add a new blood donation camp.</Text>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Blood Camp Name</FormLabel>
                        <Input
                            type="text"
                            name="Name"
                            value={BloodCampData.Name}
                            onChange={handleChange}
                            placeholder="Enter blood camp name"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input
                            type="text"
                            name="Address"
                            value={BloodCampData.Address}
                            onChange={handleChange}
                            placeholder="Enter address"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Start Time</FormLabel>
                        <Input
                            type="datetime-local"
                            name="StartTime"
                            value={BloodCampData.StartTime}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>End Time</FormLabel>
                        <Input
                            type="datetime-local"
                            name="EndTime"
                            value={BloodCampData.EndTime}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Button colorScheme="red" mt={4} type="submit">Submit</Button>
                </form>
            </VStack>
        </Box>
        </>
    );
}
