import { Box, Flex, Button, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Header = () => {
  const bgColor = useColorModeValue('red.600', 'gray.800');
  const color = useColorModeValue('gray.600', 'whiteAlpha.900');

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Effect to check authentication status
  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      console.log('user is logged in', ' token :', token)            
      console.log('isloged',isLoggedIn);
    }
    else{
      console.log('user is not logged in')
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);


  const handleLogout = () => {
      axios.post('http://localhost:8000/api/logout')
          .then(() => {
              // Clear token from local storage
              localStorage.removeItem('token');

              // Redirect to the login page
              navigate('/login');
          })
          .catch((error) => {
              console.error('Error during logout:', error);
          });
  };

  return (
    <>
    <Box bg={bgColor} color={color} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading as="h1" size="md" letterSpacing={'tighter'} color={'white'}>
            Blood Donation Network
          </Heading>
          <Flex alignItems={'center'}>

          {

          isLoggedIn? ( <></> ) : (

            <Button variant={'solid'} colorScheme={'red'} size={'sm'} mr={4}>
              <a href="adddonor">Register</a>
            </Button>  
          )}
       
          {
            isLoggedIn?    (
          
              <Button vari  ant={'outline'} size={'sm'} onClick={handleLogout} > 
              logout
            </Button>  
            ) : (
            <Button variant={'outline'} size={'sm'} > 
              <a href="/login">login</a>   
            </Button>
          )}
          </Flex>

        </Flex>
      </Container>
    </Box>
    </>
  );
};

