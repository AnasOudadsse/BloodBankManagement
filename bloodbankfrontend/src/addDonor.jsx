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
        <form onSubmit={handleSubmit} encType="multipart/form-data" class="max-w-lg mx-auto space-y-6z">
        {/* Cin */}
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Cin"
            id="Cin"
            value={DonorData.Cin}
            onChange={handleChange}
            placeholder=" "
            required
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label htmlFor="Cin" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CIN</label>
        </div>
      
        {/* Full Name */}
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Name"
            id="Name"
            value={DonorData.Name}
            onChange={handleChange}
            placeholder=" "
            required
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label htmlFor="Name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
        </div>
      
        {/* Phone Number */}
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="PhoneNumber"
            id="PhoneNumber"
            value={DonorData.PhoneNumber}
            onChange={handleChange}
            placeholder=" "
            required
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label htmlFor="PhoneNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
        </div>
      
        {/* Birth Date */}
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="date"
            name="BirthDate"
            id="BirthDate"
            value={DonorData.BirthDate}
            onChange={handleChange}
            placeholder=" "
            required
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label htmlFor="BirthDate" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Date</label>
        </div>
      
        {/* Gender */}
        <div class="relative z-0 w-full mb-6 group">
          <select
            name="Gender"
            id="Gender"
            value={DonorData.Gender}
            onChange={handleChange}
            required
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          >
            <option value="">Select Gender</option> {/* Removed selected and disabled attributes for proper HTML validation */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="Gender" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
        </div>
      
        {/* City */}
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="City"
            id=""
            value={DonorData.City}
            onChange={handleChange}
            placeholder=" "
            required
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label htmlFor="City" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
        </div>
        {/* Address */}
<div class="relative z-0 w-full mb-6 group">
  <input
    type="text"
    name="Address"
    id="Address"
    value={DonorData.Address}
    onChange={handleChange}
    placeholder=" "
    required
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  />
  <label htmlFor="Address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
</div>

{/* Image File Upload */}
<div class="relative z-0 w-full mb-6 group">
  <input
    type="file"
    name="Image"
    id="Image"
    onChange={handleChange}
    class="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
  />
    </div>

{/* Blood Type Selection */}
<div class="relative z-0 w-full mb-6 group">
  <select
    name="blood_id"
    id="blood_id"
    value={DonorData.blood_id}
    onChange={handleChange}
    required
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  >
    <option value="">Select bloodType</option>
    {BloodType.map((bloodType) => (
      <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
    ))}
  </select>
  <label htmlFor="blood_id" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blood Type</label>
</div>

{/* Email */}
<div class="relative z-0 w-full mb-6 group">
  <input
    type="email"
    name="Email"
    id="Email"
    value={DonorData.Email}
    onChange={handleChange}
    placeholder=" "
    required
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  />
  <label htmlFor="Email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
</div>

{/* Password */}
<div class="relative z-0 w-full mb-6 group">
  <input
    type="password"
    name="EncryptedPassword"
    id="EncryptedPassword"
    value={DonorData.EncryptedPassword}
    onChange={handleChange}
    placeholder=" "
    required
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  />
  <label htmlFor="EncryptedPassword" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
</div>

{/* Submit Button */}
<button type="submit" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
</form>

      
    
    
    
      )
}