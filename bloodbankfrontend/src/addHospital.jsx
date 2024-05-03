import React, { useState } from 'react';
import axios from 'axios';
import { Header } from './header';
function HospitalForm() {
  const [HospitalData, setHospitalData] = useState({
    Name: '',
    Address: '',
    PhoneNumber: '',
  });

    const handleChange = (e) => {
        setHospitalData({ ...HospitalData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/addHospital', HospitalData);
      console.log(response.data);
      // Handle successful form submission (e.g., clear form, show message)
    } catch (error) {
      alert('There was an error submitting the form!', error);
      // Handle error 
    }
  };

  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        value={HospitalData.Name}
        onChange={handleChange}
        placeholder="Hospital Name"
      />
      <input
        type="text"
        name="Address"
        value={HospitalData.Address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="PhoneNumber"
        value={HospitalData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default HospitalForm;
