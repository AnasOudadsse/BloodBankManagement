import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const AnalysisForm = () => {
  let { id } = useParams()
  const [donationData, setdonationData] = useState({});
  const [AnalysisData, setAnalysisData] = useState({
    isGood: '', 
    donation_id: '',
    AnalysisReport: ''
  });



  // Use the id to fetch data or for form submission



  const handleChange = (e) =>{
    setAnalysisData({...AnalysisData , [e.target.name]: e.target.name})
  }

  // useEffect( () =>
  // {
  //     const fetchDonation = async ()=>
  //     {
  //         try {
  //             const response = await axios.get('http://127.0.0.1:8000/api/getDonations');
  //             setdonationData(response.data);
  //             console.log("response", response.data)
  //             console.log(response.data)
  //         }catch (error) {
  //             console.error('Failed to fetch BloodCamps', error);
  //         }
  //     }
  //     fetchDonation();
  // },[]
  // )
  useEffect(
    ()=>{
        const fetchDonation = async () =>
        {
            try{
              const response = await axios.get(`http://localhost:8000/api/addAnalysis/${id}`)
              console.log("response", response.data)
              console.log(donationData)
              setdonationData(response.data);
            }
            catch(error){
              console.error('failed to fetch the donation', error)
            }

     } 
    fetchDonation()
},[])


  const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        await axios.post('http://127.0.0.1:8000/api/addAnalysis', AnalysisData);
      }
      catch(error){
        console.error('Failed to submit form', error);
      }
  }

  return(

    <>
    <form onSubmit={handleSubmit} >
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-3 p-4">
      <h3 className="text-lg font-semibold border-b pb-2">Donation Information</h3>
      <div className="mt-3">
        <h5 className="text-sm font-medium text-gray-600">Donation ID:</h5>
        <p className="font-medium">{donationData.id}</p>
      </div>
      <div className="mt-3">
      <h5 className="text-sm font-medium text-gray-600">Donor Name:</h5>
        {donationData.donor ? (
          <p className="font-medium">{donationData.donor.Name}</p>
        ) : (
          <p className="font-medium">Loading donor name...</p>
        )}
      </div>
      <div className="mt-3">
      <h5 className="text-sm font-medium text-gray-600">Donor Name:</h5>
          {donationData.donor ? (
            <p className="font-medium">{donationData.donor.Cin}</p>
          ) : (
            <p className="font-medium">Loading donor cin...</p>
          )}
      </div>
      <div className="mt-3">
        <label htmlFor="good-blood" className="text-sm font-medium text-gray-600">
          Good Blood:
        </label>
        <select onChange={handleChange} id="good-blood" className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded shadow-sm">
          <option>Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mt-3">
        <label htmlFor="picture" className="text-sm font-medium text-gray-600">
          Picture:
        </label>
        <input onChange={handleChange} id="picture" type="file" className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded shadow-sm"/>
      </div>
    </div>
    </form>
 

    </>

  )


}