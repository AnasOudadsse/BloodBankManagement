import React, { useState } from "react";
import axios from "axios";

export function LabTechForm(){

    const [LabTechData, setLabTechData] = useState({
        Cin: '',
        Name : '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'LabTech',
        blood_bank_id: '1'
    })  

    const handleChange = (e)=>{
        setLabTechData({...LabTechData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://127.0.0.1:8000/api/addLabTech', LabTechData);
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
        value={LabTechData.Cin}
        onChange={handleChange}
        placeholder="Cin"
      /><br /> <br />

      <input
        type="text"
        name="Name"
        value={LabTechData.Name}
        onChange={handleChange}
        placeholder="Full Name"
      /><br /> <br />

      <input
        type="tel"
        name="PhoneNumber"
        value={LabTechData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      /><br /> <br />

      <input
        type="date"
        name="BirthDate"
        value={LabTechData.BirthDate}
        onChange={handleChange}
      /><br /> <br />

      <select
        name="Gender"
        value={LabTechData.Gender}
        onChange={handleChange}
      >
        <option value="" selected disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br /> <br />


      <input
        type="email"
        name="Email"
        value={LabTechData.Email}
        onChange={handleChange}
        placeholder="Email"
      /><br /> <br />

      <input
        type="password"
        name="EncryptedPassword"
        value={LabTechData.EncryptedPassword}
        onChange={handleChange}
        placeholder="Password"
      /><br /> <br />
      <button type="submit">Submit</button>
    </form>
      )
}