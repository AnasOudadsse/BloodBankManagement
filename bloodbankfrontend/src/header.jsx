import { Box, Flex, Button, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Header = () => {
  const bgColor = useColorModeValue('red.600', 'gray.800');
  const color = useColorModeValue('gray.600', 'whiteAlpha.900');

  const navigate = useNavigate();

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
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            Blood Donation Network
          </Heading>
          <Flex alignItems={'center'}>
            <Button variant={'solid'} colorScheme={'red'} size={'sm'} mr={4}>
              Donate
            </Button>
            <Button variant={'outline'} size={'sm'} onClick={handleLogout} > 
              logout
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

