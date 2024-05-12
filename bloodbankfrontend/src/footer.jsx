import { Box, Flex, Link, Image, Text, Icon, Divider } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaDiscord, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="#AB0003" color="white">
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" maxW="container.xl" mx="auto" p={4} py={6}>
        <Box mb={6} flex="1">
          <Link href="https://flowbite.com/" display="flex" alignItems="center">
            <Image src="logo.png" h="8" me="3" alt="FlowBite Logo" />
            <Text fontSize="2xl" fontWeight="semibold">OurBlood</Text>
          </Link>
        </Box>
        <Flex gridGap={8} flex="2">
          <Box>
            <Text mb={6} fontSize="sm" fontWeight="semibold" textTransform="uppercase">Resources</Text>
            <Link href="https://flowbite.com/" _hover={{ textDecoration: 'underline' }}>Flowbite</Link>
            <Link href="https://tailwindcss.com/" _hover={{ textDecoration: 'underline' }} mt={4} display="block">Tailwind CSS</Link>
          </Box>
          <Box>
            <Text mb={6} fontSize="sm" fontWeight="semibold" textTransform="uppercase">Follow us</Text>
            <Link href="https://github.com/themesberg/flowbite" _hover={{ textDecoration: 'underline' }}>Github</Link>
            <Link href="https://discord.gg/4eeurUVvTy" _hover={{ textDecoration: 'underline' }} mt={4} display="block">Discord</Link>
          </Box>
          <Box>
            <Text mb={6} fontSize="sm" fontWeight="semibold" textTransform="uppercase">Legal</Text>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>Privacy Policy</Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }} mt={4} display="block">Terms & Conditions</Link>
          </Box>
        </Flex>
      </Flex>
      <Divider my={6} borderColor="gray.200" />
      <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align="center" px={6} py={2}>
        <Text fontSize="sm" textAlign="center">© 2023 Flowbite™. All Rights Reserved.</Text>
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
