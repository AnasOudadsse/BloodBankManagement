import { Box, Container, Stack, Text, IconButton, Flex, Input, Button, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  const bgColor = useColorModeValue('red.600', 'gray.800');
  const color = useColorModeValue('gray.600', 'whiteAlpha.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} color={color} borderTop="1px" borderColor={borderColor} mt={10}>
      <Container as={Stack} maxW="container.xl" py={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing="4" justifyContent="space-between" alignItems="center">
          <Text>© {new Date().getFullYear()} Blood Donation Network. All rights reserved.</Text>
          <Stack direction="row" spacing="6">
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </Stack>
        </Stack>
        <Flex alignItems="center" mt={5} direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
          <Text>Join our community and save lives.</Text>
          <Flex mt={{ base: 5, md: 0 }}>
            <Input placeholder="Enter your email" mr={2} />
            <Button variant="solid" colorScheme="red">
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
