import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Center minHeight="100vh" bg="gray.100" p={8}>
      <Box
        p={8}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        maxWidth="md"
        textAlign="center"
      >
        <VStack spacing={6}>
          <Heading as="h1" size="2xl" color="red.600">
            401
          </Heading>
          <Text fontSize="lg">
            You don't have access to this page.
          </Text>
          <Button
            colorScheme="red"
            size="lg"
            onClick={handleGoHome}
          >
            Go Back Home
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
