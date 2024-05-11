import { Box, Flex, Button, Container, Heading, useColorModeValue, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Header = () => {
  const bgColor = useColorModeValue('red.600', 'gray.800');
  const color = useColorModeValue('gray.600', 'whiteAlpha.900');

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const role = localStorage.getItem('role'); 

  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const links = {
    Donor: [{ href: '/login', text: 'Login' }, { href: '/register', text: 'Register' }],
    HospitalStaff: [{ href: '/login', text: 'Login' }, { href: '/register', text: 'Register' }],
    Admin: [{ href: '/login', text: 'Login' }, { href: '/register', text: 'Register' }],
    LabTech: [{ href: '/login', text: 'Login' }, { href: '/register', text: 'Register' }],
    BloodCampStaff: [{ href: '/profile', text: 'Profile' }, { href: '/adddonation', text: 'Add Donation' }, { href: '/adddonor', text: 'Register Donor' }],
  };

  const renderLinks = () => {
    let roleLinks = links[role] || links.Donor; // Changed from links.guest assuming default to 'Donor' or any appropriate default
    return (
      roleLinks.map((link, index) => (
        <Link key={index} href={link.href} px={3} py={2} rounded="md" color="white" _hover={{ bg: 'red.500' }}>
          {link.text}
        </Link>
      ))
    );
  };

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
    <Box bg={bgColor} color={color} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading as="h1" size="md" letterSpacing={'tighter'} color={'white'}>
            Blood Donation Network
          </Heading>
          <Flex grow={1} justifyContent="center">
            {renderLinks()}
          </Flex>
          <Flex alignItems={'center'}>
            {isLoggedIn ? (
              <Button variant={'outline'} size={'sm'} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant={'solid'} colorScheme={'red'} size={'sm'} mr={4} as="a" href="/adddonor">
                  Register
                </Button>
                <Button variant={'outline'} size={'sm'} as="a" href="/login">
                  Login
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
