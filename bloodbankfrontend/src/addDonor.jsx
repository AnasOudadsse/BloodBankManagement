import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  useToast,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Header } from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router";

export function DonorForm() {
  const [BloodType, setBloodType] = useState([]);
  const navigate = useNavigate()
  const [role, setRole] = useState('Donor')
  const [DonorData, setDonorData] = useState({
    Cin: "",
    Name: "",
    PhoneNumber: "",
    Email: "",
    BirthDate: "",
    Gender: "",
    EncryptedPassword: "",
    Role: "Donor",
    City: "",
    Address: "",
    Image: "",
    blood_id: "",
  });
  const toast = useToast();

  useEffect(() => {
    const fetchBloodType = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getBloodType");
        setBloodType(response.data);
      } catch (error) {
        console.error("Failed to fetch BloodType", error);
      }
    };
    fetchBloodType();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "Image") {
      setDonorData({ ...DonorData, Image: e.target.files[0] });
    } else {
      setDonorData({ ...DonorData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    // Check for role in local storage
    setRole(localStorage.getItem('role'));
      console.log('role :', role)            
  
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append all the DonorData properties to formData
    for (const key in DonorData) {
      formData.append(key, DonorData[key]);
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/addDonor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast({
        title: "Registration successful",
        description: "You have been registered as a donor.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Failed to register as a donor.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if (role === 'Donor') {
      navigate('/login');
    } else if (role === 'Admin' || role === 'BloodCampStaff' ){
      navigate('/');
  }
  };

  return (
    <>
    <Header/>
    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" margin="0 auto" transform="scale(0.9)">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading size="lg">Donor Registration</Heading>
        {["Cin", "Name", "PhoneNumber", "City", "Address", "Email", "EncryptedPassword"].map((field) => (
          <FormControl key={field} isRequired>
            <FormLabel htmlFor={field}>{field}</FormLabel>
            <Input
              id={field}
              name={field}
              onChange={handleChange}
              type={field === "EncryptedPassword" ? "password" : "text"}
              value={DonorData[field]}
            />
          </FormControl>
        ))}
        <FormControl isRequired>
          <FormLabel htmlFor="BirthDate">Birth Date</FormLabel>
          <Input id="BirthDate" name="BirthDate" type="date" onChange={handleChange} value={DonorData.BirthDate} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="Gender">Gender</FormLabel>
          <Select id="Gender" name="Gender" placeholder="Select Gender" onChange={handleChange} value={DonorData.Gender}>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="blood_id">Blood Type</FormLabel>
          <Select id="blood_id" name="blood_id" placeholder="Select blood type" onChange={handleChange} value={DonorData.blood_id}>
            {BloodType.map((type) => (
              <option key={type.id} value={type.id}>
                {type.BloodType}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="Image">Profile Image</FormLabel>
          <Input id="Image" name="Image" type="file" onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="red" size="lg" fontSize="md">
          Submit
        </Button>
      </VStack>
    </Box>

    <Footer/>
    </>
  );
}

export default DonorForm;
