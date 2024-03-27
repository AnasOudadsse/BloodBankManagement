import React, { useEffect, useState } from "react";
import axios from "axios";
export function BloodCampStaffForm(){

    const [BloodCamps, setBloodCamps] = useState([])
    const [BloodCampStaffData, setBloodCampStaffData] = useState({
        Cin: '',
        Name : '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'BloodCampStaff',
        blood_camp_id: ''
    })  

    useEffect( () =>
    {
        const fetchBloodCamps = async ()=>
        {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodCamps');
                setBloodCamps(response.data);
                console.log(response.data)
            }catch (error) {
                console.error('Failed to fetch BloodCamps', error);
            }
        }
        fetchBloodCamps();
    },[]
    )

    const handleChange = (e)=>{
        setBloodCampStaffData({...BloodCampStaffData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://127.0.0.1:8000/api/addBloodCampStaff', BloodCampStaffData);
          // Handle success (e.g., clear form, show success message)
        } catch (error) {
          console.error('Failed to submit form', error);
          // Handle error
        }
      };

      return (
      <form onSubmit={handleSubmit}  class="max-w-sm mx-auto">
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        name="Cin"
        value={BloodCampStaffData.Cin}
        onChange={handleChange}
        placeholder="Cin"
      />

      <br />
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        name="Name"
        value={BloodCampStaffData.Name}
        onChange={handleChange}
        placeholder="Full Name"
      />  <br />

      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="tel"
        name="PhoneNumber"
        value={BloodCampStaffData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      /> <br />

      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="date"
        name="BirthDate"
        value={BloodCampStaffData.BirthDate}
        onChange={handleChange}
      /> <br />

      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="Gender"
        value={BloodCampStaffData.Gender}
        onChange={handleChange}
      >
        <option value="" selected disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />

      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="blood_camp_id"
        value={BloodCampStaffData.blood_camp_id}
        onChange={handleChange}
      >                    
      
            <option value="" selected disabled>Select BloodCamp</option>
            {BloodCamps.map((BloodCamp) => (
                <>
                   <option key={BloodCamp.id} value={BloodCamp.id}>{BloodCamp.Name}</option>
                </>
                
            
    ))}

      </select><br />

      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="email"
        name="Email"
        value={BloodCampStaffData.Email}
        onChange={handleChange}
        placeholder="Email"
      /><br />

      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="password"
        name="EncryptedPassword"
        value={BloodCampStaffData.EncryptedPassword}
        onChange={handleChange}
        placeholder="Password"
      /><br />
      <button 
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="submit">
        Submit
      </button>
    </form>
      )
}