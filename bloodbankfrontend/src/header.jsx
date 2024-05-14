import { Box, Flex, Button, Container, Heading, useColorModeValue, Link, Text,IconButton, Tooltip,Stack,Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdPersonAdd, MdDashboard, MdNotificationsActive } from 'react-icons/md';
import { FaHospital, FaUserMd } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { MdBloodtype } from "react-icons/md";
import { MdBiotech } from "react-icons/md";

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
    Donor: [{ href: '/DonationHistory', text: 'Donation History' }],
    HospitalStaff: [{ href: '/addBloodRequest', text: 'Add Blood Request' }, { href: '/register', text: 'Register' }, { href: '/bloodRequestList', text: 'Blood Requests History' }],
    LabTech: [{ href: '/donationList', text: 'Donation List' }, { href: '/register', text: 'Register' }],
    BloodCampStaff: [{ href: '/adddonation', text: 'Add Donation' }, { href: '/adddonor', text: 'Register Donor' }, { href: '/DonationListedit', text: 'Donation List' }],
  };
  const adminLinks = [
    { href: '/addHospital', text: 'Add Hospital', icon: <FaHospital /> },
    { href: '/addBloodCamp', text: 'Add BloodCamp', icon: <MdAddCircleOutline /> },
    { href: '/addHospitalStaff', text: 'Add Hospital Staff', icon: <FaUserMd /> },
    { href: '/addBloodCampStaff', text: 'Add BloodCamp Staff', icon: <MdPersonAdd /> },
    { href: '/addLabTech', text: 'Add Lab Tech', icon: <MdBiotech />  },
    { href: '/Dashboard', text: 'Dashboard', icon: <RxDashboard />  },
    { href: '/addNotif', text: 'Alert Notification', icon: <MdNotificationsActive /> },
    { href: '/bloodRequestListstatus', text: 'Blood Requests', icon: <MdBloodtype />

  },
  ];

  const renderLinks = () => {
    let roleLinks = links[role]; // Changed from links.guest assuming default to 'Donor' or any appropriate default

    {

      if (roleLinks) {    
        return (
        roleLinks?.map((link, index) => (
          <Link key={index} href={link.href} px={3} py={2} rounded="md" color="white" _hover={{ bg: 'red.500' }}>
            {link.text}
          </Link>
        )))}

        else if (role == 'Admin'){
          return(
            <Stack direction="row" spacing={4}>
              {adminLinks.map((link, index) => (
                <Tooltip key={index} label={link.text} fontSize="md" placement="bottom" hasArrow>
                  <IconButton
                    as="a"
                    href={link.href}
                    aria-label={link.text}
                    icon={link.icon}
                    variant="ghost"
                    colorScheme="white"
                    color='white'
                    size="lg"
                  />
                </Tooltip>
              ))}
            </Stack>
          )

        }
 
    }



  };
    // <Menu>
    //   <MenuButton as={Button} colorScheme="blue">
    //     ehe
    //   </MenuButton>
    //   <MenuList>
    //     {adminLinks.map((item, index) => (
    //       <MenuItem key={index} as="a" href={item.href}>
    //         {item.text}
    //       </MenuItem>
    //     ))}
    //   </MenuList>
    // </Menu>  )

  const handleLogout = () => {
    axios.post('http://localhost:8000/api/logout')
        .then(() => {
            // Clear token from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.setItem('role', 'Guest')

            // Redirect to the login page
            navigate('/');
        })
        .catch((error) => {
            console.error('Error during logout:', error.data);
        });
  };

  return (
    <Box bg={"#e4181e"} color={color} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <img style={{width:45, marginRight: 10}} src="/lgo.png" alt="Logo" />
            <Text color='white' fontWeight={500} fontSize={25} >NationBlood</Text>
          <Flex grow={1} justifyContent="center">
            {renderLinks()}
          </Flex>
          <Flex alignItems={'center'}>
            {isLoggedIn ? (
              <>
              <Link mr={6}  href='/profile' transform={'scale(1.6)'} px={3} py={2} color={'white'}  _hover={{ color: 'black' }}>
              <CgProfile />
            </Link>
              <Button variant={'outline'} size={'sm'} onClick={handleLogout} bgColor={'white'}>
                Logout
              </Button>
              </>
            ) : (
              <>
                <Button variant={'solid'} colorScheme={'#D2122E'} size={'sm'} mr={4} as="a" href="/adddonor">
                  Register
                </Button>
                <Button variant={'outline'} size={'sm'} as="a" href="/login" bg={'white'}>
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
