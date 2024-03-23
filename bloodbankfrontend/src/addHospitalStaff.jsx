import React, { useEffect, useState } from "react";
import axios from "axios";
import HospitalForm from "./addHospital";

export function HospitalStaffForm(){

    const [Hospitals, setHospitals] = useState([])
    const [HospitalStaffData, setHospitalStaffData] = useState({
        Name : '',
        PhoneNumber: '',
        Email: '',
        BirthDate: '',
        Gender: '',
        EncryptedPassword: '',
        Role: 'HospitalStaff',
        Position: '',
        hospital_id: ''
    })  
    console.log(Hospitals)

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

    const handleChange = (e)=>{
        setHospitalStaffData({...HospitalStaffData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://127.0.0.1:8000/api/addHospitalStaff', HospitalStaffData);
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
        name="Name"
        value={HospitalStaffData.Name}
        onChange={handleChange}
        placeholder="Full Name"
      />

      <input
        type="tel"
        name="PhoneNumber"
        value={HospitalStaffData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />

      <input
        type="date"
        name="BirthDate"
        value={HospitalStaffData.BirthDate}
        onChange={handleChange}
      />

      <select
        name="Gender"
        value={HospitalStaffData.Gender}
        onChange={handleChange}
      >
        <option value="" selected disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="text"
        name="Position"
        value={HospitalStaffData.Position}
        onChange={handleChange}
        placeholder="Position"
      />

      <select
        name="hospital_id"
        value={HospitalStaffData.hospital_id}
        onChange={handleChange}
      >                    
      
            <option value="" selected disabled>Select Hospital</option>
            {Hospitals.map((hospital) => (
                <>
                    <option key={hospital.id} value={hospital.id}>{hospital.Name}</option>
                </>
                
            
    ))}

      </select>

      <input
        type="email"
        name="Email"
        value={HospitalStaffData.Email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="password"
        name="EncryptedPassword"
        value={HospitalStaffData.EncryptedPassword}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
      )
}