import { Box, Flex, Link, Image, Text, Icon, Divider } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaDiscord, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="#e4181e" color="white" pt={3} pb={3}>
      <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align="center" px={6} py={2}>
        <Text fontSize="sm" textAlign="center">© 2024 NationBlood™. All Rights Reserved.</Text>
        <Flex mt={{ base: 4, sm: 0 }} justify="center">
          <Link href="#" aria-label="Facebook" icon={<FaFacebookF />} _hover={{ color: 'gray.900' }}>
            <Icon as={FaFacebookF} w={4} h={4} />
          </Link>
          <Link href="#" aria-label="Twitter" icon={<FaTwitter />} _hover={{ color: 'gray.900' }} ml={5}>
            <Icon as={FaTwitter} w={4} h={4} />
          </Link>
          <Link href="#" aria-label="Instagram" icon={<FaInstagram />} _hover={{ color: 'gray.900' }} ml={5}>
            <Icon as={FaInstagram} w={4} h={4} />
          </Link>
          <Link href="#" aria-label="Github" icon={<FaGithub />} _hover={{ color: 'gray.900' }} ml={5}>
            <Icon as={FaGithub} w={4} h={4} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
