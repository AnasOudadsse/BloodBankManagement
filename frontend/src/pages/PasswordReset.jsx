// Import necessary hooks and libraries
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Heading,
  Container
} from '@chakra-ui/react';
import Header from "./header/header";import Footer from './footer/footer';

export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token } = useParams(); // Access token from URL
    const toast = useToast();

    console.log('password :', password, 'token :', token);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast({
                title: "Error",
                description: "Passwords do not match",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/passwordreset', {
                token,
                password,
                password_confirmation: confirmPassword
            });
            console.log(response.data)
            toast({
                title: "Success",
                description: "Your password has been successfully reset",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error,
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            console.log(error.response.data)

        }
    };

    return (
      <>
      <Header/>
        <Container centerContent mt="20" mb="20">
            <Box p={8} maxW="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                    <Heading as="h1" size="lg">Reset Your Password</Heading>
                    <FormControl id="password" isRequired>
                        <FormLabel>New Password</FormLabel>
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="New Password" required />
                    </FormControl>
                    <FormControl id="confirm-password" isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                    </FormControl>
                    <Button colorScheme="red" type="submit" width="full" mt={4}>Reset Password</Button>
                </VStack>
            </Box>
        </Container>
        <Footer/>
        </>

    );
};
