import React, { useState } from "react";
import axios from "axios";

export function HospitalStaffForm(){

    const [AdminData, setAdminData] = useState({
        Cin: '',
        Name : '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'Admin',
        is_super_admin: false,
        blood_bank_id: '1'
    })  

    const handleChange = (e)=>{
        setAdminData({...AdminData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://127.0.0.1:8000/api/addAdmin', AdminData);
          // Handle success (e.g., clear form, show success message)
        } catch (error) {
          console.error('Failed to submit form', error);
          // Handle error
        }
      };

      return (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Cin"
        value={AdminData.Cin}
        onChange={handleChange}
        placeholder="Cin"
      /><br /> <br />

      <input
        type="text"
        name="Name"
        value={AdminData.Name}
        onChange={handleChange}
        placeholder="Full Name"
      /><br /> <br />

      <input
        type="tel"
        name="PhoneNumber"
        value={AdminData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      /><br /> <br />

      <input
        type="date"
        name="BirthDate"
        value={AdminData.BirthDate}
        onChange={handleChange}
      /><br /> <br />

      <select
        name="Gender"
        value={AdminData.Gender}
        onChange={handleChange}
      >
        <option value="" selected disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br /> <br />


      <input
        type="email"
        name="Email"
        value={AdminData.Email}
        onChange={handleChange}
        placeholder="Email"
      /><br /> <br />

      <input
        type="password"
        name="EncryptedPassword"
        value={AdminData.EncryptedPassword}
        onChange={handleChange}
        placeholder="Password"
      /><br /> <br />
      <button type="submit">Submit</button>
    </form>
      )
}