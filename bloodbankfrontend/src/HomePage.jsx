import { Box, Flex, IconButton, Image, Text, useColorModeValue, VStack, SimpleGrid, Heading, Divider, Button, Link } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { Header } from './header';
import Footer from './footer';

export function HomePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const bgFooter = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('white', 'gray.200');

  const photos = [
    { src: '/nguy-n-hi-p-2rNHliX6XHk-unsplash.jpg' },
    { src: '/donors.jpg' },
  ];

  const SlickArrowLeft = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      icon={<FaArrowLeft />}
      aria-label="Previous slide"
      variant="ghost"
      position="absolute"
      left="32px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      color='red'
      fontSize="24px"
    />
  );
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

  const SlickArrowRight = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      icon={<FaArrowRight />}
      aria-label="Next slide"
      variant="ghost"
      position="absolute"
      right="32px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      color='red'
      fontSize="24px"
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
      <Header />
      <Box position="relative" width="full">
        <Slider {...sliderSettings}>
          {photos.map((photo, idx) => (
            <Box key={idx} position="relative"  width="full" >
              
              <Image src={photo.src} alt={`Slide ${idx}`} fit="cover" />
              <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                justifyContent="center"
                alignItems="center"
                p="32px"
                bgGradient="linear(to left, rgba(255,255,255,0), rgba(200,200,200,0.8))"
                >
                <Text fontSize={40} fontWeight={700} color="#D2122E" textAlign="center" position='absolute'  bottom={370}>Donate Blood Save A Life!</Text>
                <Text fontSize={50} fontWeight={700} color="black" textAlign="center" position='absolute' bottom={200}>Donate Blood And <br/> Inspire Others!</Text>
                  <Link href="/adddonor" >                
                    <Button
                      bg="#D2122E" 
                      color="white"
                      fontSize="md"
                      fontWeight="bold"
                      p="4" 
                      _hover={{ bg: "red.700" }}
                      position='absolute'
                      left={580}
                      bottom={110}
                    >
                      Become A Donor
                    </Button>
                  </Link>
              </Flex>
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
        
      
      <Footer />
    </>
  );
};

