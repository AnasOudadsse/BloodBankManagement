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
      <form onSubmit={handleSubmit} encType="multipart/form-data">

      <input
        type="text"
        name="Cin"
        value={DonorData.Cin}
        onChange={handleChange}
        placeholder="Cin"
      />
      <br /><br />
      <input
        type="text"
        name="Name"
        value={DonorData.Name}
        onChange={handleChange}
        placeholder="Full Name"
      /> <br /><br />

      <input
        type="tel"
        name="PhoneNumber"
        value={DonorData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      /><br /><br />

      <input
        type="date"
        name="BirthDate"
        value={DonorData.BirthDate} 
        onChange={handleChange}
      /><br /><br />

      <select
        name="Gender"
        value={DonorData.Gender}
        onChange={handleChange}
      >
        <option value="" selected disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br /><br />

      <input
        type="text"
        name="City"
        value={DonorData.City}
        onChange={handleChange}
        placeholder="City"
      /><br /><br />

      <input
        type="text"
        name="Address"
        value={DonorData.Address}
        onChange={handleChange}
        placeholder="Address"
      /><br /><br />

      <input
        type="file"
        name="Image"
        onChange={handleChange}
        placeholder="Image"
      /><br /><br />

      <select
        name="blood_id"
        value={DonorData.blood_id}
        onChange={handleChange}
      >                    
      
            <option value="" selected disabled>Select bloodType</option>
            {BloodType.map((bloodType) => (
                <>
                    <option key={bloodType.id} value={bloodType.id}>{bloodType.BloodType}</option>
                </>
            
    ))}

      </select><br /><br />

      <input
        type="email"
        name="Email"
        value={DonorData.Email}
        onChange={handleChange}
        placeholder="Email"
      /><br /><br />

      <input
        type="password"
        name="EncryptedPassword"
        value={DonorData.EncryptedPassword}
        onChange={handleChange}
        placeholder="Password"
      /><br /><br />
      <button type="submit">Submit</button>    
    </form>
      )
}