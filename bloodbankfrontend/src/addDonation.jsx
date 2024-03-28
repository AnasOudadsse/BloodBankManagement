import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const DonationForm = () => {

    const [BloodType, setBloodType] = useState([])
    const [donationData, setDonationData] = useState({
        QuantityDonated: '',
        DonationDate: '',
        donor_cin : '',
        blood_type_id : '',
        blood_camp_id : ''

  });

  // Function to load options for donors dynamically
  const loadDonorOptions = async (inputValue) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/searchDonors?q=${inputValue}`);
    return response.data.map(donor => ({ value: donor.Cin, label: donor.Name }));
  };

  // Function to load options for blood camps dynamically
  const loadBloodCampOptions = async (inputValue) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/searchBloodCamps?q=${inputValue}`);
    return response.data.map(camp => ({ value: camp.id, label: camp.Name }));
  };

  // Handle selection changes for both donors and blood camps
  const handleInputChange = (fieldName) => (selectedOption) => {
    setDonationData(prevState => ({
        ...prevState,
        [fieldName]: selectedOption ? selectedOption.value : null
    }));
};

  // Handle changes for text inputs
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setDonationData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect( () =>
    {
        const fetchBloodType = async ()=>
        {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodType');
                setBloodType(response.data);
            }catch (error) {
                console.error('Failed to fetch BloodType', error);
            }
        }
        fetchBloodType();
    },[]
    )

  // Form submission handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addDonation', donationData);
      console.log(response.data);
      // Handle success (clear form, show success message)
    } catch (error) {
      console.error('Failed to record donation', error.response.data);
      console.log(donationData);
      // Handle error (show error message)
    }
  };

  return (
    <>
    <form onSubmit={handleFormSubmit} class="max-w-sm mx-auto">
        <br /><br />
      <AsyncSelect
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        cacheOptions
        loadOptions={loadDonorOptions}
        defaultOptions
        onChange={handleInputChange('donor_cin')}
        placeholder="Search and select a donor..."
      /> <br />
      <AsyncSelect
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        cacheOptions
        loadOptions={loadBloodCampOptions}
        defaultOptions
        onChange={handleInputChange('blood_camp_id')}
        placeholder="Search and select a blood camp..."
      /> <br />
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="blood_id"
        value={donationData.blood_id}
        onChange={(e) => handleInputChange('blood_type_id')({ value: e.target.value })}
      >                    
      
            <option value="" selected disabled>Select bloodType</option>
            {BloodType.map((bloodType) => (
                <>
                    <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
                </>
            
    ))}

      </select><br />

      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

        type="number"
        name="QuantityDonated"
        value={donationData.QuantityDonated}
        onChange={handleTextChange}
        placeholder="Quantity Donated"
      /> <br />
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

        type="date"
        name="DonationDate"
        value={donationData.DonationDate}
        onChange={handleTextChange}
        placeholder="Donation Date"
      /> <br />
      <button type="submit"       class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >Record Donation</button>
    </form>

    <Link to={'/addDonor'}> Donor not registered? Register now! </Link>

    </>
  );
};

export default DonationForm;
