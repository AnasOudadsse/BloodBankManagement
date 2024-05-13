import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import {
  useToast,
  Text,
  Link,
  Grid
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Header } from './header';
import Footer from './footer';

const DonationListEdit = () => {
  const [donationsWithDonors, setDonationsWithDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const toast = useToast();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/donationList')
      .then(response => {
        setDonationsWithDonors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donations', error);
        toast({
          title: 'Error loading donations',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  }, [toast]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDonations = donationsWithDonors.filter(donation => {
    const donorCin = donation.donor?.Cin ?? '';
    const donorName = donation.donor?.Name?.toLowerCase() ?? '';
    const searchLower = searchTerm.toLowerCase();
    return donorCin.includes(searchLower) || donorName.includes(searchLower);
  });

  const deleteItem = async (id) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/deleteDonation', { id });
      setDonationsWithDonors(prev => prev.filter(donation => donation.id !== id));
      toast({
        title: 'Donation Deleted',
        description: 'The donation record has been successfully deleted.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log('Failed to delete donation', error.response?.data);
      toast({
        title: 'Error Deleting Donation',
        description: 'Failed to delete donation. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <Header/>
    <div className="p-8 bg-gray-100 min-h-screen" >
    <Grid placeItems='center'>
          <Text as="h1" fontSize="2xl" fontWeight="bold" mb={2} color="red.600" >Donation Records Dashboard</Text>
          <Text mb={7} fontSize="md" color="gray.600" textAlign='center'>
            Review and manage all donation records. Utilize the search functionality to quickly locate records by donor CIN or name. This dashboard allows for the modification or deletion of donation entries to keep data up-to-date.
    </Text>
    </Grid>

      <div className="max-w-4xl mx-auto">
        <input 
          type="text" 
          placeholder="Search by CIN or Name" 
          value={searchTerm} 
          onChange={handleSearch} 
          className="mb-4 w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Donation ID</th>
                <th scope="col" className="px-6 py-3">Donor CIN</th>
                <th scope="col" className="px-6 py-3">Quantity donated</th>
                <th scope="col" className="px-6 py-3">Donation date</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonations.map(donation => (
                <tr key={donation.id} className="bg-white border-b">
                  <td className="px-6 py-4">{donation.id}</td>
                  <td className="px-6 py-4">{donation.donor?.Cin ?? 'N/A'}</td>
                  <td className="px-6 py-4">{donation.QuantityDonated ?? 'N/A'}</td>
                  <td className="px-6 py-4">{donation.DonationDate ?? 'N/A'}</td>
                  <td className="px-6 py-4 flex space-x-3">
                    <a className="text-blue-500 hover:text-blue-700" href='/editDonation/${donation.id}'>
                      <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/icons/pencil-square.svg" alt="Edit" />
                    </a>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deleteItem(donation.id)}>
                      <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/icons/trash.svg" alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DonationListEdit;
