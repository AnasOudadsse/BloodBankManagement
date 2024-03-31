import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationListView = () => {
  const [donationsWithDonors, setdonationsWithDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(donationsWithDonors)

  useEffect(() => {
    // Fetch donationsWithDonors when the component is mounted
    axios.get('http://127.0.0.1:8000/api/donationList')
      .then(response => {
        setdonationsWithDonors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donationsWithDonors', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filtereddonationsWithDonors = donationsWithDonors.filter(
    donation =>
      donation.donor.Cin.includes(searchTerm) || donation.donor.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search by CIN or Name" value={searchTerm} onChange={handleSearch} />
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Donation ID</th>
            <th scope="col" class="px-6 py-3">Donor CIN</th>
            <th scope="col" class="px-6 py-3">Donor Name</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtereddonationsWithDonors.map(donation => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={donation.id}>
              <td class="px-6 py-4">{donation.id}</td>
              <td class="px-6 py-4">{donation.donor.Cin}</td>
              <td class="px-6 py-4">{donation.donor.Name}</td>
              <td class="px-6 py-4">
                <a href={`/donations/${donation.id}/report`}>Add Report</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationListView;
