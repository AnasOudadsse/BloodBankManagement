import { Box, Flex, Button, Container, Heading, useColorModeValue, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Header = () => {
  const bgColor = useColorModeValue('red.500');
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
    HospitalStaff: [{ href: '/addBloodRequest', text: 'Add Blood Request' }, { href: '/register', text: 'Register' }, { href: '/bloodRequestList', text: 'Blood Requests History' }],
    Admin: [{ href: '/addHospital', text: 'Add Hospital' }, { href: '/addBloodCamp', text: 'Add BloodCamp' },{ href: '/addHospitalStaff', text: 'Add Hospital Staff' }, { href: '/addBloodCampStaff', text: 'Add BloodCamp Staff' },{ href: '/profile', text: 'Profile' }, { href: '/addLabTech', text: 'Add Lab Tech' },{ href: '/Dashboard', text: 'Dashboard' },{ href: '/addNotif', text: 'Alert Notification' },{ href: '/bloodRequestListstatus', text: 'Blood Requests' }],
    LabTech: [{ href: '/donationList', text: 'Donation List' }, { href: '/register', text: 'Register' }],
    BloodCampStaff: [{ href: '/profile', text: 'Profile' }, { href: '/adddonation', text: 'Add Donation' }, { href: '/adddonor', text: 'Register Donor' }, { href: '/DonationListedit', text: 'Donation List' }],
  };

  const renderLinks = () => {
    let roleLinks = links[role] || links.Donor; // Changed from links.guest assuming default to 'Donor' or any appropriate default
    return (
      roleLinks.map((link, index) => (
        <Link key={index} href={link.href} px={3} py={2} rounded="md" color="black" _hover={{ bg: 'red.500' }}>
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
    <Box bg={'white'} color={color} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <img style={{width:48}} src="/lgo.png" alt="Logo" />
          <Flex grow={1} justifyContent="center">
            {renderLinks()}
          </Flex>
          <Flex alignItems={'center'}>
            {isLoggedIn ? (
              <Button variant={'outline'} size={'sm'} onClick={handleLogout} bgColor={bgColor}>
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
