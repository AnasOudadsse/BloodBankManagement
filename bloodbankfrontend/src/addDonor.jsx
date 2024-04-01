import React, { useEffect, useState } from "react";
import axios from "axios";


export function DonorForm(){

    const [BloodType, setBloodType] = useState([])
    const [DonorData, setDonorData] = useState({
        Cin: '',
        Name : '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'Donor',
        City: '',
        Address : '',
        Image: '',
        blood_id: ''
    })  

    console.log(DonorData)

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
      if (e.target.name === "Image") {
        // For file inputs, store the File object directly
        setDonorData({ ...DonorData, Image: e.target.files[0] });
    } else {
        // For all other inputs, proceed as before
        setDonorData({ ...DonorData, [e.target.name]: e.target.value });
    }    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://127.0.0.1:8000/api/addDonor', DonorData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
            });
          console.log(DonorData)
          // Handle success (e.g., clear form, show success message)
        } catch (error) {
          console.error('Failed to submit form', error.response.data);
          console.log('error :', DonorData)

          // Handle error
        }
      };

      return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" class="max-w-lg mx-auto my-10 p-8 rounded-lg shadow-lg">
        <div class="mb-4">
            <label for="Cin" class="block text-sm font-medium text-gray-700">Cin</label>
            <input
                type="text"
                name="Cin"
                id="Cin"
                value={DonorData.Cin}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="Name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
                type="text"
                name="Name"
                id="Name"
                value={DonorData.Name}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="PhoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
                type="tel"
                name="PhoneNumber"
                id="PhoneNumber"
                value={DonorData.PhoneNumber}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="BirthDate" class="block text-sm font-medium text-gray-700">Birth Date</label>
            <input
                type="date"
                name="BirthDate"
                id="BirthDate"
                value={DonorData.BirthDate} 
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="Gender" class="block text-sm font-medium text-gray-700">Gender</label>
            <select
                name="Gender"
                id="Gender"
                value={DonorData.Gender}
                onChange={handleChange}
                class="block w-full pl-3 pr-10 py-2 text-base border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-deep-red-600"
            >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    
        <div class="mb-4">
            <label for="City" class="block text-sm font-medium text-gray-700">City</label>
            <input
                type="text"
                name="City"
                id="City"
                value={DonorData.City}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="Address" class="block text-sm font-medium text-gray-700">Address</label>
            <input
                type="text"
                name="Address"
                id="Address"
                value={DonorData.Address}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="Image" class="block text-sm font-medium text-gray-700">Image</label>
            <input
                type="file"
                name="Image"
                id="Image"
                onChange={handleChange}
                class="mt-1 block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-deep-red-50 file:text-deep-red-700
                       hover:file:bg-deep-red-100"
            />
        </div>
    
        <div class="mb-4">
            <label for="blood_id" class="block text-sm font-medium text-gray-700">Blood Type</label>
            <select
                name="blood_id"
                id="blood_id"
                value={DonorData.blood_id}
                onChange={handleChange}
                class="block w-full pl-3 pr-10 py-2 text-base border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-deep-red-600"
            >
                <option value="" disabled>Select Blood Type</option>
                {BloodType.map((bloodType) => (
                    <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
                ))}
            </select>
        </div>
    
        <div class="mb-4">
            <label for="Email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                name="Email"
                id="Email"
                value={DonorData.Email}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <div class="mb-4">
            <label for="EncryptedPassword" class="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                name="EncryptedPassword"
                id="EncryptedPassword"
                value={DonorData.EncryptedPassword}
                onChange={handleChange}
                class="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-deep-red-600"
            />
        </div>
    
        <button type="submit" class="mt-4 w-full bg-deep-red-600 text-black font-bold py-2 px-4 rounded hover:bg-deep-red-700 focus:outline-none focus:shadow-outline">Submit</button>
    </form>
    
    
    
      )
}