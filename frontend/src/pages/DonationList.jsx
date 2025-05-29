import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './footer/footer';
import Header from "./header/header";import {Text } from '@chakra-ui/react';
const DonationListView = () => {
  const [donationsWithDonors, setDonationsWithDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/donationList')
      .then(response => {
        setDonationsWithDonors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donations', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDonationsWithDonors = donationsWithDonors.filter(donation => {
    const donorCin = donation.donor?.Cin ?? '';
    const donorName = donation.donor?.Name?.toLowerCase() ?? '';
    const searchLower = searchTerm.toLowerCase();
    return donorCin.includes(searchLower) || donorName.includes(searchLower);
  });

  return (
    <>
    <Header/>

    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Donation Management</h1>
        <p className="mb-4 text-gray-600">
          Browse and manage all recorded donations below. Use the search bar to quickly find donations by donor's CIN or name. You can add reports for each donation where necessary.
        </p>
        <input
          type="text"
          placeholder="Search by CIN or Name"
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Donation ID</th>
                <th scope="col" className="px-6 py-3">Donor CIN</th>
                <th scope="col" className="px-6 py-3">Quantity donated</th>
                <th scope="col" className="px-6 py-3">Donation date</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonationsWithDonors.map(donation => (
                <tr key={donation.id} className="bg-white border-b">
                  <td className="px-6 py-4">{donation.id}</td>
                  <td className="px-6 py-4">{donation.donor?.Cin ?? 'N/A'}</td>
                  <td className="px-6 py-4">{donation.QuantityDonated ?? 'N/A'}</td>
                  <td className="px-6 py-4">{donation.DonationDate ?? 'N/A'}</td>
                  <td className="px-6 py-4">
                    {donation.donor ? (
                      <Link to={`/addAnalysis/${donation.id}`} className="text-blue-500 hover:text-blue-700">Add Report</Link>
                    ) : (
                      <span className="text-gray-500">No donor available</span>
                    )}
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

export default DonationListView;
