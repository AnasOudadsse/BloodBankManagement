import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box, Button, Flex, FormControl, FormLabel, Heading, Input, VStack, Container,Text,
    InputGroup, InputRightElement, useBoolean, Stack, useBreakpointValue, IconButton
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const BloodDonationLogin = () => {

    const [showPassword, setShowPassword] = useState(true);
    const [credentials, setCredentials] = useState({ Email: '', EncryptedPassword: '', Role: 'Donor' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const formCardSize = useBreakpointValue({ base: '90%', md: '420px' });
    const handleClick = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    
    const handleLogin = async (event) => {
        event.preventDefault(); 
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
                console.log('token :', data.access_token);
                console.log('role :', data.role);
                

                // Handle success
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('role', data.role);

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
        <>  
        <Flex minHeight="100vh" width="full" align="center" justifyContent="space-around" bg={'gray.50'}>
            <VStack
                w={formCardSize}
                h="full"
                p={10}
                spacing={10}
                alignItems="flex-start"
                bg="white"
                boxShadow="md"
            >
        <VStack alignItems="flex-start" spacing={3}>
          <Heading size="2xl">Donate Blood, Save Lives</Heading>
          <Text>Your donation can make a difference. Join our community of lifesavers and help those in need.</Text>
          <Button size="lg" colorScheme="red">
            Donate Blood
          </Button>
        </VStack>
      </VStack>
      <Box
        boxShadow="xl"
        bg="white"
        borderRadius="lg"
        m={8}
        p={8}
        width={formCardSize}
      >
        <Heading size="lg" fontWeight="600" color="gray.800" mb={4}>
          Log In
        </Heading>
        <form onSubmit={handleLogin}>
        <VStack spacing={4} mb={4} >
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input  type="Email"                                 
                    name="Email"
                    value={credentials.Email}
                    onChange={handleChange} 
                    placeholder="example@email.com" />
          </FormControl>
          <FormControl isRequired>
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
                    <IconButton
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        onClick={handleClick}
                        variant="ghost"
                    />

                    </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="red" w="full" mt={4}>
            Log In
          </Button>
        </VStack>
        {error && <Box color="red">{error}</Box>}
        <Flex justifyContent="space-around" w="full">
          <Button variant="link" colorScheme="black">
            Sign Up
          </Button>
          <Button variant="link" colorScheme="black">
            Reset Password
          </Button>        

        </Flex>          
        </form>

      </Box>
    </Flex>

        {/* <Flex align="center" justify="center" height="100vh">
            <a href="addhospital">addhospital</a>
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
        </Flex> */}
        </>
    );
};

export default BloodDonationLogin;
