import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Text,
  useToast
} from '@chakra-ui/react';
import Footer from "./footer";
import { Header } from "./header";

export function UpdateDonation() {
    let { id } = useParams();
    const [BloodType, setBloodType] = useState([]);
    const [Donation, setDonation] = useState(null);
    const [BloodCamps, setBloodCamps] = useState([]);

    let navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/editDonation/${id}`);
                setDonation(response.data[0]);
            } catch (error) {
                console.error('Failed to fetch the donation:', error.response?.data || error.message);
                toast({
                    title: "Error",
                    description: "Failed to fetch donation details.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        };
        fetchDonation();
    }, [id]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getBloodType').then(response => {
            setBloodType(response.data);
        }).catch(error => {
            console.error('Failed to fetch BloodType', error);
        });

        axios.get('http://127.0.0.1:8000/api/getBloodCamps').then(response => {
            setBloodCamps(response.data);
        }).catch(error => {
            console.error('Failed to fetch BloodCamps', error);
        });
    }, []);

    const handleInputChange = (field, value) => {
        setDonation(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/updateDonation`, Donation);
            if (response.status === 200) {
                navigate('/donationListedit');
                toast({
                    title: "Success",
                    description: "Donation updated successfully!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Failed to update the donation', error.response?.data || error.message);
            toast({
                title: "Error",
                description: "Failed to update the donation.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    if (!Donation) return <Box>Loading...</Box>;

    return (
        <>
        <Header/>
        <Box p={5} transform={'scale(0.97)'} height={516}  mt={10}>
            <VStack spacing={4}>
                <Text fontSize="2xl" fontWeight="bold">Edit Donation Details</Text>
                <Text fontSize="md">Update the fields to modify the donation record.</Text>
                <Box as="form" onSubmit={handleSubmit} width="100%">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Donation ID</Th>
                                <Th>Donor CIN</Th>
                                <Th>Blood Type</Th>
                                <Th>Quantity donated</Th>
                                <Th>Donation date</Th>
                                <Th>Blood camp</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{Donation.id}</Td>
                                <Td>
                                    <Select onChange={e => handleInputChange('donor_cin', e.target.value)} placeholder="Select Donor's CIN">
                                        {BloodCamps.map((camp) => (
                                            <option key={camp.id} value={camp.id}>{camp.Name}</option>
                                        ))}
                                    </Select>
                                </Td>
                                <Td>
                                    <Select onChange={e => handleInputChange('blood_type_id', e.target.value)} placeholder="Select Blood Type">
                                        {BloodType.map(type => (
                                            <option key={type.id} value={type.id}>{type.BloodType}</option>
                                        ))}
                                    </Select>
                                </Td>
                                <Td>
                                    <Input type="number" value={Donation.QuantityDonated} onChange={e => handleInputChange('QuantityDonated', e.target.value)} />
                                </Td>
                                <Td>
                                    <Input type="date" value={Donation.DonationDate} onChange={e => handleInputChange('DonationDate', e.target.value)} />
                                </Td>
                                <Td>
                                    <Select onChange={e => handleInputChange('blood_camp_id', e.target.value)} placeholder="Select Blood Camp">
                                        {BloodCamps.map((camp) => (
                                            <option key={camp.id} value={camp.id}>{camp.Name}</option>
                                        ))}
                                    </Select>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Button mt={4} colorScheme="red" type="submit">Save Changes</Button>
                </Box>
            </VStack>
        </Box>  
        <Footer/>
        </>

    );
}
