import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const DonationListEdit = () => {
  const [donationsWithDonors, setDonationsWithDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(donationsWithDonors)

  useEffect(() => {
    // Fetch donationsWithDonors when the component is mounted
    axios.get('http://127.0.0.1:8000/api/donationList')
      .then(response => {
        setDonationsWithDonors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donationsWithDonors', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDonationsWithDonors = donationsWithDonors.filter(donation => {
    // Using optional chaining to safely access nested properties
    const donorCin = donation.donor?.Cin ?? '';
    const donorName = donation.donor?.Name?.toLowerCase() ?? '';
    
    // Using toLowerCase() on searchTerm for case-insensitive comparison
    const searchLower = searchTerm.toLowerCase();
    
    return donorCin.includes(searchLower) || donorName.includes(searchLower);
  });

  const deleteItem = async (id) =>{
    const data = {
        id: id
    } 
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/deleteDonation', data);
        // setRender(render + 1)
        window.location.reload()
    }
    catch(err){
        console.log('Failed to delete request', err.response?.data);
    }
  }


  return (
    <div>
      <input type="text" placeholder="Search by CIN or Name" value={searchTerm} onChange={handleSearch}         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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
          {filteredDonationsWithDonors.map(donation => (
            <tr key={donation.id}>
              <td scope="col" class="px-6 py-3">{donation.id}</td>
              <td scope="col" class="px-6 py-3">{donation.donor?.Cin ?? 'N/A'}</td>
              <td scope="col" class="px-6 py-3">{donation.donor?.Name ?? 'N/A'}</td>
              <td scope="col" class="px-6 py-3">
                {donation.donor ? (
                  <>                  
                  <Link className='px-1' to={`/editDonation/${donation.id}`}> <FontAwesomeIcon icon={faEdit}/> </Link> 
                  <button className='px-1' onClick={ ()=> deleteItem(donation.id)} >  <FontAwesomeIcon icon={faTrashAlt} /> </button>

                  </>
                  
                ) : (
                  <span>No donor available</span>
                )}
              </td>
            </tr>
          ))}
</tbody>

      </table>
    </div>
  );
};

export default DonationListEdit;
