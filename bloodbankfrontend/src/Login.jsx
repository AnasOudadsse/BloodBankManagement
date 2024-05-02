import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box, Button, Flex, FormControl, FormLabel, Heading, Input, VStack, Container,
    InputGroup, InputRightElement, useBoolean, Stack, useBreakpointValue
} from '@chakra-ui/react';

export const BloodDonationLogin = () => {
    const [showPassword, setShowPassword] = useBoolean();
    const [credentials, setCredentials] = useState({ Email: '', EncryptedPassword: '', Role: 'Donor' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const formCardSize = useBreakpointValue({ base: '90%', md: '420px' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevents the form from refreshing the page
        setError(''); // Reset error message

        try {
            // Here you would make the API call to your authentication endpoint
            const response = await axios.post('http://127.0.0.1:8000/api/login', credentials, {
                headers: { 'Content-Type': 'application/json' }
            });

            // Check response
            if (response.status === 200) {
                const data = response.data;

                console.log('Login successful:', data);

                // Handle success
                localStorage.setItem('token', data.token);

                // Navigate based on user role
                if (data.role === 'Donor') {
                    navigate('/dashboard');
                } else {
                    navigate('/addDonor');
                }
            } else {
                // Handle errors
                console.error('Login failed:', response.data.message);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <Flex align="center" justify="center" height="100vh">
            <Container width={formCardSize}>
                <form onSubmit={handleLogin}>
                    <VStack spacing={4}>
                        <Heading>Login</Heading>
                        <FormControl id="Email">
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="Email"
                                value={credentials.Email}
                                onChange={handleChange}
                                type="Email"
                                placeholder="Enter your Email"
                            />
                        </FormControl>
                        <FormControl id="EncryptedPassword">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    name="EncryptedPassword"
                                    value={credentials.EncryptedPassword}
                                    onChange={handleChange}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                />
                                <InputRightElement>
                                    <Button onClick={setShowPassword.toggle}>
                                        {showPassword ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        {error && <Box color="red">{error}</Box>}
                        <Button type="submit" colorScheme="blue">Login</Button>
                    </VStack>
                </form>
            </Container>
        </Flex>
    );
};

export default BloodDonationLogin;
