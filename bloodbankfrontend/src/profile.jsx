import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    Stack,
    Text,
    VStack,
    Icon
  } from '@chakra-ui/react';
import { FaTint, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaVenusMars, FaIdCard } from 'react-icons/fa';
import { Header } from './header';
import Footer from './footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

  export default function BloodDonationProfilePage() {
    // Mock user data for demonstration; replace with real data
    const userlocal = localStorage.getItem('user')
    const user = JSON.parse(userlocal)
    const [Image, setImage] = useState(null);

    console.log(Image)
    console.log(user.Cin);
    const userData = {
      Cin: user.Cin,
      Name: user.Name,
      PhoneNumber: user.PhoneNumber,
      Email: user.Email,
      BirthDate: user.BirthDate,
      Gender: user.Gender,
      City: user.City,
      Address: user.Address,
    //   Image: user.Image,
      bloodType: user.bloodType,
    };

    useEffect(() => {
        if (!user || !user.Cin) {
            console.error('User data is invalid or missing');
            return; // Exit if user or user.Cin is undefined
        }

        console.log('Fetching data for ID:', user.Cin); // Debug: log the current ID

        axios.get(`http://127.0.0.1:8000/api/getImage/${user.Cin}`)
            .then(response => {
                setImage(response.data);
                console.log('Data received for ID:', user.Cin); // Debug: confirm data reception
            })
            .catch(error => {
                console.error('Error fetching Image data:', error);
            });
    }, [user?.Cin]); // Dependency on user.Cin to handle changes

    if (user.Role == 'Donor'){
        if (!Image) {
        return <div>Loading Image data...</div>;
    }
    }
  

  
    const handleResetPassword = () => {
      // Handle password reset logic here
      alert('Redirecting to password reset page');
    };
  
    return (
        <>
        <Header/>
      <Container maxW="container.md"  transform={'scale(0.85)'}>
        <Flex direction="column" alignItems="center" bg="gray.50" p={8} borderRadius="lg" boxShadow="lg">
          <Heading as="h1" size="lg" mb={6} color="red.600">
            My Profile
          </Heading>
        {
          user.Role == 'Donor' ? (
                                <Box
            width="150px"
            height="150px"
            borderRadius="full"
            overflow="hidden"
            mb={6}
            border="4px solid red"
          >
            <img src={Image.image_url} alt="User Avatar" width="100%" />
          </Box>
          ):(
            <></>
          )
        }

  
          <VStack spacing={4} align="stretch" width="full">
            <Box>
              <Text fontWeight="bold"><Icon as={FaIdCard} /> CIN:</Text>
              <Text>{userData.Cin}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaUser} /> Name:</Text>
              <Text>{userData.Name}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaPhone} /> Phone Number:</Text>
              <Text>{userData.PhoneNumber}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaEnvelope} /> Email:</Text>
              <Text>{userData.Email}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaBirthdayCake} /> Birth Date:</Text>
              <Text>{userData.BirthDate}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaVenusMars} /> Gender:</Text>
              <Text>{userData.Gender}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaMapMarkerAlt} /> City:</Text>
              <Text>{userData.City}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaMapMarkerAlt} /> Address:</Text>
              <Text>{userData.Address}</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontWeight="bold"><Icon as={FaTint} color="red.600" /> Blood Type:</Text>
              <Text>{userData.bloodType}</Text>
            </Box>
          </VStack>
  
          <Button colorScheme="red" mt={6} onClick={handleResetPassword}>
            <a href="/resetPassRequest">
                Reset Password
            </a>
          </Button>
        </Flex>
      </Container>
      <Footer/>
      </>
    );
  }
  