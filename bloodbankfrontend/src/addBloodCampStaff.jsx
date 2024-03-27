import React, { useEffect, useState } from "react";
import axios from "axios";
import HospitalForm from "./addHospital";

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
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Cin"
        value={BloodCampStaffData.Cin}
        onChange={handleChange}
        placeholder="Cin"
      />

      <br /><br />
      <input
        type="text"
        name="Name"
        value={BloodCampStaffData.Name}
        onChange={handleChange}
        placeholder="Full Name"
      />

      <input
        type="tel"
        name="PhoneNumber"
        value={BloodCampStaffData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      /> <br /><br />

      <input
        type="date"
        name="BirthDate"
        value={BloodCampStaffData.BirthDate}
        onChange={handleChange}
      /> <br /> <br />

      <select
        name="Gender"
        value={BloodCampStaffData.Gender}
        onChange={handleChange}
      >
        <option value="" selected disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br /> <br />

      <select
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

      </select><br /> <br />

      <input
        type="email"
        name="Email"
        value={BloodCampStaffData.Email}
        onChange={handleChange}
        placeholder="Email"
      /><br /> <br />

      <input
        type="password"
        name="EncryptedPassword"
        value={BloodCampStaffData.EncryptedPassword}
        onChange={handleChange}
        placeholder="Password"
      /><br /> <br />
      <button type="submit">Submit</button>
    </form>
      )
}