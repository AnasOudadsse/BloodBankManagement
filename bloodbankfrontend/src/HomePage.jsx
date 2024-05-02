import {
    Box,
    Container,
    Flex,
    Text,
    Heading,
    Button,
    SimpleGrid,
    Image,
    VStack,
    Divider,
    Stack,
    Icon,
    Input,
    useColorModeValue,
    useBreakpointValue,
    IconButton
  } from '@chakra-ui/react';
  import { FaPhone, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
  import Slider from 'react-slick';
  import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

  const steps = [
    {
      number: '01.',
      title: 'Become a Donor',
      description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but because occasionally.',
    },
    {
      number: '02.',
      title: 'Why Give Blood?',
      description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but because occasionally.',
    },
    {
      number: '03.',
      title: 'How Donations Helps',
      description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but because occasionally.',
    },
  ];

  const photos = [
    // Replace with your own image URLs
    { src: '/nguy-n-hi-p-2rNHliX6XHk-unsplash.jpg' },
    { src: '/Blood donation guidelines .png' },
    { src: '/Blood-Donor-min-1-scaled.jpg' },
  ];
  export default function HomePage() {
    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const color = useColorModeValue('gray.600', 'whiteAlpha.900');
    const bgFooter = useColorModeValue('gray.200', 'gray.700');
  
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <IconButton
        {...props}
        aria-label="prev"
        variant="ghost"
        position="absolute"
        left={0}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        icon={<FaArrowLeft />}
      />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <IconButton
        {...props}
        aria-label="next"
        variant="ghost"
        position="absolute"
        right={0}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        icon={<FaArrowRight />}
      />
    );

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        adaptiveHeight: true,
      };
    return (
      <>
      <Box position="relative" width="full" height="800" overflow="hidden">
      <Slider {...sliderSettings}>
        {photos.map((photo, idx) => (
          <Box key={idx} height="full" width="full">
            <Image src={photo.src} alt={`Slide ${idx}`} boxSize="fit-content" objectFit="cover" />
          </Box>
        ))}
      </Slider>
    </Box>
  
        <Box py={16} ml={20} mr={20} >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {steps.map((step, index) => (
          <VStack key={index} spacing={4} alignItems="flex-start">
            <Text fontSize="5xl" fontWeight="bold">
              {step.number}
            </Text>
            <Divider borderColor="black" />
            <Heading size="md" fontWeight="semibold">
              {step.title}
            </Heading>
            <Text color="gray.600">{step.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  

  
        {/* Footer */}
        <Box bg={bgFooter} color="white" p={10}>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              <Box>
                <Heading size="md" mb={4}>
                  About Us
                </Heading>
                <Text fontSize="sm">
                  {/* Company Info */}
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  Contact Us
                </Heading>
                {/* Contact Details */}
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  Stay Connected
                </Heading>
                <Stack direction="row" spacing={2}>
                  <Icon as={FaFacebookF} />
                  <Icon as={FaTwitter} />
                  <Icon as={FaInstagram} />
                  {/* More Social Icons */}
                </Stack>
              </Box>
              <Box>
                <Heading size="md" mb={4}>
                  Subscribe
                </Heading>
                <Input placeholder="Enter your email" />
                <Button mt={2} colorScheme="red">
                  Subscribe
                </Button>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      </>

    );
  }
  