import { Box, Flex, Button, Container, Heading, useColorModeValue } from '@chakra-ui/react';

export const Header = () => {
  const bgColor = useColorModeValue('red.600', 'gray.800');
  const color = useColorModeValue('gray.600', 'whiteAlpha.900');

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
            <Button variant={'outline'} size={'sm'}>
              Log In
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

