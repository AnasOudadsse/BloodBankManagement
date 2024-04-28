import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
    VStack,
    Image,
    useBreakpointValue,
    Stack,
    Container,
    InputGroup,
    InputRightElement,
    useBoolean
  } from '@chakra-ui/react';
import Footer from './footer.';
import { Header } from './header';
  
  export const BloodDonationLogin = () => {
    const [showPassword, setShowPassword] = useBoolean();
    const handleShowClick = () => setShowPassword(!showPassword);
  
    const formCardSize = useBreakpointValue({ base: '90%', md: '420px' });
  
    return (
        <>
        <Header/>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center" transform="scale(0.9)">
          <VStack alignItems="flex-start" spacing={3} p={10}>
            <Heading size="2xl">Donate Blood, Save Lives</Heading>
            <Text>Your donation can make a difference. Join our community of lifesavers and help those in need.</Text>
            <Button size="lg" colorScheme="red">
              Donate Blood
            </Button>
          </VStack>
        <Box minH="100vh"  display="flex" alignItems="center" justifyContent="center">
      <Container maxW="md" bg="white" boxShadow="2xl" p={8} rounded="lg">
        <Heading size="xl" textAlign="center" mb={6} color="red.600">
          Blood Donation Portal
        </Heading>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} placeholder="Enter password" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={setShowPassword.toggle}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme="red" variant="solid">
              Log In
            </Button>
            <Stack direction={{ base: 'column', sm: 'row' }} justify="space-between">
              <Link color="red.500" href="#">
                Forgot password?
              </Link>
              <Link color="red.500" href="#">
                Create new account
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
      </Flex>   
        <Footer/>
      </>

      
    );
  };
  
  export default BloodDonationLogin;
  