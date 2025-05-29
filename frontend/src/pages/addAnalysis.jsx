import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  FormHelperText,
  useToast,
  Container,
  Heading
} from '@chakra-ui/react';
import Header from "./header/header";import Footer from './footer/footer';

export const AnalysisForm = () => {
  let { id } = useParams();
  const [donationData, setDonationData] = useState({});
  const [AnalysisData, setAnalysisData] = useState({
    IsGood: '', 
    donation_id: '',
    AnalysisReport: ''
  });
  const toast = useToast();

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/addAnalysis/${id}`);
        setDonationData(response.data);
      } catch (error) {
        console.error('Failed to fetch the donation', error);
        toast({
          title: "Error",
          description: "Failed to load donation data.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };
    fetchDonation();
  }, [id, toast]);

  const handleChange = (e) => {
    if (e.target.name === "AnalysisReport") {
      setAnalysisData({ ...AnalysisData, AnalysisReport: e.target.files[0] });
    } else {
      setAnalysisData({ ...AnalysisData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('donation_id', donationData.id);
    formData.append('IsGood', AnalysisData.IsGood);
    formData.append('donorCin', donationData.donor.Cin);
    if (AnalysisData.AnalysisReport) {
      formData.append('AnalysisReport', AnalysisData.AnalysisReport);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/addAnalysis', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast({
        title: "Success",
        description: "Analysis data successfully submitted.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to submit form', error.response?.data || error);
      toast({
        title: "Error",
        description: "Failed to submit analysis data.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <Header/>
    <Container maxW="container.md" centerContent transform={'scale(0.8)'}>
      <Box bg="white" p={6} boxShadow="lg" rounded="md" w="full" mt={12}>
        <VStack spacing={5} as="form" onSubmit={handleSubmit}>
          <Heading as="h2" size="lg" textAlign="center">Analysis Form</Heading>
          <FormControl isRequired>
            <FormLabel>Donation ID</FormLabel>
            <Input type="text" value={donationData.id || ''} isReadOnly bg="gray.100"/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Donor Name</FormLabel>
            <Input type="text" value={donationData.donor?.Name || 'Loading...'} isReadOnly bg="gray.100"/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Donor CIN</FormLabel>
            <Input type="text" value={donationData.donor?.Cin || 'Loading...'} isReadOnly bg="gray.100"/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Is the Blood Good?</FormLabel>
            <Select placeholder="Select option" onChange={handleChange} name="IsGood">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Analysis Report</FormLabel>
            <Input type="file" onChange={handleChange} name="AnalysisReport" p={1} border="2px"/>
            <FormHelperText>Attach the analysis report file here.</FormHelperText>
          </FormControl>
          <Button colorScheme="red" type="submit" size="lg" width="full">Submit Analysis</Button>
        </VStack>
      </Box>
    </Container>
    <Footer/>
    </>
  );
};

export default AnalysisForm;
