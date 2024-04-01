import React,  { useState, useEffect } from 'react';
import axios from 'axios';

export  const BloodRequestForm = () => {

    const [BloodType, setBloodType] = useState([])
    const [Hospitals, setHospitals] = useState([])
    const [BloodRequest, setBloodRequest] = useState({
        Quantity: '',
        Urgency: '',
        Status : '',
        blood_id : '',
        hospital_id : ''

  });

  useEffect( () =>
  {
      const fetchHospitals = async ()=>
      {
          try {
              const response = await axios.get('http://127.0.0.1:8000/api/getHospitals');
              setHospitals(response.data);
              console.log(response.data)
          }catch (error) {
              console.error('Failed to fetch hospitals', error);
          }
      }
      fetchHospitals();
  },[]
  )


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

    const handleChange = (e)=>{

          setBloodRequest({ ...BloodRequest, [e.target.name]: e.target.value });
      }    

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addBloodRequest', BloodRequest);
      console.log(response.data);
      // Handle success (clear form, show success message)
    } catch (error) {
      console.error('Failed to record the blood request', error.response.data);
      console.log(BloodRequest);
        }
  };

  return (
    <>
    <form onSubmit={handleFormSubmit} class="max-w-sm mx-auto">
     
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
        name="Quantity"
        value={ BloodRequest.Quantity}
        onChange={handleChange}
        placeholder="Quantity"
        /> <br />

        <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="Urgency"
            value={BloodRequest.Urgency}
            onChange={handleChange}
        >
            <option value="" disabled>Select Urgency</option>
            <option value="immediate">Immediate</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select> <br />

        <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="Status"
            value={BloodRequest.Status}
            onChange={handleChange}
        >
            <option value="" disabled>Select Status</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="fulfilled">Fulfilled</option>
            <option value="cancelled">Cancelled</option>
        </select> <br />

        <select        
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="hospital_id"
        value={BloodRequest.hospital_id}
        onChange={handleChange}
      >                    
      
            <option value="" selected disabled>Select Hospital</option>
            {Hospitals.map((hospital) => (
                <>
                    <option key={hospital.id} value={hospital.id}>{hospital.Name}</option>
                </>
                
            
    ))}

      </select><br />

      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="blood_id"
        value={BloodRequest.blood_id}
        onChange={handleChange}
      >                    
      
            <option value="" selected disabled>Select bloodType</option>
            {BloodType.map((bloodType) => (
                <>
                    <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
                </>
            
    ))}

      </select><br />


      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Record Donation</button>

    </form>

    </>

  );
  }

