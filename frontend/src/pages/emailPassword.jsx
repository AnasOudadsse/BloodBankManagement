import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Heading,
  VStack,
  Text,
  Link
} from '@chakra-ui/react';
import { Header } from "@/components/header";;import Footer from './footer/footer';
import { Link as RouterLink } from 'react-router-dom';  // Assuming you are using react-router for navigation

export function ResetPasswordRequest() {
  const [Email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/resetPassRequest',  { Email: Email } );
      toast({
        title: "Success",
        description: "A password reset link has been sent to your Email. Please check your inbox to continue.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top"  // or any other preferred position
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send password reset link. Please ensure your Email is correct and try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top"  // or any other preferred position
      });
      console.log(Email)
    }
  };

  return (
    <>
      <Header/>
      <Container centerContent mt="12">
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg="white"
          
        >
          <VStack spacing={4} as="form" onSubmit={handleSubmit} align="stretch">
            <Heading as="h2" size="lg" textAlign="center" mb={4}>
              Reset Your Password
            </Heading>
            <Text textAlign="center" mb={6}>
              Enter your Email address below and we'll send you a link to reset your password.
            </Text>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="Email"
                placeholder="Enter your Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.100"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="red"
              size="lg"
              fontSize="md"
              mt={4}
            >
              Send Reset Link
            </Button>
            <Text textAlign="center" mt={4}>
              Remember your password? <Link as={RouterLink} to="/login" color="blue.500">Log in</Link>
            </Text>
          </VStack>
        </Box>
      </Container>
      <Footer/>
    </>
  );
}

export default ResetPasswordRequest;
