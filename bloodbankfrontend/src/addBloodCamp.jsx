import React, { useState } from "react";
import axios from "axios";



export function BloodCampForm(){

    const [BloodCampData, setBloodCampData] = useState({
        Name: '' ,
        Address: '' ,
        StartTime: '' ,
        EndTime: ''
    })

    const handleChange = (e) => 
    {
        setBloodCampData({...BloodCampData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try{
            
            const response  = await axios.post('http://127.0.0.1:8000/api/addBloodCamp', BloodCampData)
            console.log(response.data)
        }
        catch(err){
            alert('There was an error submitting the form!', err);
            console.log(BloodCampData)

        }
    }

    return(
      <>
      
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          value={BloodCampData.Name}
          onChange={handleChange}
          placeholder="Blood Camp Name"
        />
        <input
          type="text"
          name="Address"
          value={BloodCampData.Address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="datetime-local"
          name="StartTime"
          value={BloodCampData.PhoneNumber}
          onChange={handleChange}
          placeholder="Start Date"
        />
        <input
          type="datetime-local"
          name="EndTime"
          value={BloodCampData.PhoneNumber}
          onChange={handleChange}
          placeholder="End Date"
        />

        <button type="submit">Submit</button>
      </form>
      </>
    )
}