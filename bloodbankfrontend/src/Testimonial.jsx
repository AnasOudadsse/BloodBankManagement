import React from 'react';
import { Box, Image, Text, Stack, useColorModeValue, Avatar } from '@chakra-ui/react';

export const Testimonial = ({ content, authorName, authorTitle, authorImage }) => {
    return (
        <Box
            transform={'scale(0.8)'}
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
                
            <Stack>
                <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}>
                    Testimonial
                </Text>
                <Text
                    color={useColorModeValue('gray.800', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}>
                    "{content}"
                </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                    src={authorImage}
                    alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>{authorName}</Text>
                    <Text color={'gray.500'}>{authorTitle}</Text>
                </Stack>
            </Stack>
        </Box>
    );
};

