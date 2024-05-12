import { Box, Flex, IconButton,Stack,Grid,GridItem, Image, Text, useColorModeValue, VStack, SimpleGrid, Heading, Divider, Button, Link } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { Header } from './header';
import Footer from './footer';
import { FAQ } from './FAQ';
import { Testimonial } from './Testimonial';

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
                bgGradient="linear(to left, rgba(255,255,255,0), rgba(150,150,150,1))"
                >
                <Text fontFamily={'Chivo'} fontSize={40} fontWeight={700} color="#e4181e" textAlign="center" position='absolute'  bottom={370}>Donate Blood Save A Life!</Text>
                <Text fontFamily={'Chivo'} fontSize={50} fontWeight={700} color="black" textAlign="center" position='absolute' bottom={200}>Donate Blood And <br/> Inspire Others!</Text>
                  <Link href="/adddonor" >                
                    <Button
                      bg="#e4181e" 
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

      <Box maxW="1200px" m={81} mx="auto" px={4} py={8} bg={useColorModeValue('white.100', 'white.700')}>
      <Stack spacing={6} alignItems="center" textAlign="center">
        <Box        color="black  "
        bg="red.100"
        borderRadius={9}
        px={3}
        py={1}
        transform={'scale(0.85)'}

        >
          Why Donate Blood?
        </Box>
        <Heading fontSize="3xl">The Importance of Blood Donation</Heading>
        <Text color='gray' fontSize="lg" mb={10}>
          Blood donation is a simple way to save lives. Every donation can help up to three people in need.
          Donating blood is safe, easy, and can make a huge difference.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10} textAlign="left">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Help Patients in Need</Heading>
            <Text mt={4}>
              Your donation can help patients undergoing surgery, cancer treatment, and other medical procedures.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Support Your Community</Heading>
            <Text mt={4}>
              Blood donation is a simple way to make a positive impact in your local community.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Be a Hero</Heading>
            <Text mt={4}>
              By donating blood, you can become a hero to those in need and make a lasting difference.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Box>

    <Box bg={useColorModeValue('gray.100', 'gray.700')} mb={81}>
    <Box maxWidth="1200px" mx="auto" px={6} py={10} transform={'scale(0.9)'} >
      <Grid templateColumns="2fr 1fr" gap={10}>
        <GridItem position={'relative'} top={100} >
          <VStack spacing={4} align="flex-start">
          <Box        color="black  "
            bg="red.100"
            borderRadius={9}
            px={4}
            py={1}

            >
            The Donation Process            
          </Box>            
            <Heading as="h1"  fontWeight="bold">What to Expect When Donating Blood</Heading>
            <Text color='gray' fontSize="xl">
              The blood donation process is safe, simple, and takes less than an hour.
              Our experienced staff will guide you through each step to ensure a comfortable experience.
            </Text>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="flex-start" spacing={8}>
            <Box>
              <Heading  fontSize={23} mb={2}>Registration</Heading>
              <Text color='gray' fontSize="md">
                Fill out a brief questionnaire to ensure you're eligible to donate.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={23} mb={2}>Mini-Physical</Heading>
              <Text color='gray' fontSize="md">
                Our staff will check your vital signs and ensure you're healthy to donate.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={23} mb={2}>Donation</Heading>
              <Text color='gray' fontSize="md">
                The actual blood donation process takes about 8-10 minutes.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={23} mb={2}>Refreshments</Heading>
              <Text color='gray' fontSize="md">
                Enjoy a snack and drink to replenish fluids after your donation.
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
    </Box>
      
      <Box>
      <Grid placeItems='center'>
        <Box        
        color="black  "
        bg="red.100"
        borderRadius={9}
        px={4}
        py={1}
        width='fit-content'
        transform={'scale(0.85)'}
        >
        Donor Testimonials
        </Box>
        <Heading fontSize="3xl">Hear from Our Donors</Heading>
        <Text fontSize="lg" color='gray' mb={5}>
        Our donors share their experiences and the impact their donations have made.
        </Text> 
      </Grid>
     
        <Flex justifyContent={'space-evently'} mr={20} mb={20} ml={20}>
          <Testimonial
              content="The donation process was quick and easy. The staff were very supportive and made sure I was comfortable throughout my visit."
              authorName="John Doe"
              authorTitle="Donor"
              authorImage="https://bit.ly/dan-abramov"
          />
          <Testimonial
              content="Every visit is well-organized, from the moment I arrive to when I leave. It's great to see such professionalism in action."
              authorName="Michael Lee"
              authorTitle="First-time Donor"
              authorImage="https://bit.ly/code-beast"
          />
          <Testimonial
              content="I never knew donating blood could feel so rewarding until I visited your center. Thank you for making it a seamless experience!"
              authorName="Emily R."
              authorTitle="Regular Donor"
              authorImage="https://bit.ly/kent-c-dodds"
          />


        </Flex>
        </Box>


      <Box bg='gray.100' p={41}>
      <Box position="relative" left={81} width={1200} >
          <FAQ/>
      </Box>
      </Box>
      <Footer />
    </>
  );
};

