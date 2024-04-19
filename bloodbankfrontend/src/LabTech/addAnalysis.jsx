import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const AnalysisForm = () => {
  let { id } = useParams()
  const [donationData, setdonationData] = useState({});
  const [AnalysisData, setAnalysisData] = useState({
    IsGood: '', 
    donation_id: '',
    AnalysisReport: ''
  });




  const handleChange = (e) =>{
    if (e.target.name === "AnalysisReport") {
      // For file inputs, store the File object directly
      setAnalysisData({ ...AnalysisData, AnalysisReport: e.target.files[0] });
  } else {
    setAnalysisData({...AnalysisData , [e.target.name]: e.target.value})
  }}


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
},[id])


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('donation_id', donationData.id);
  formData.append('IsGood', AnalysisData.IsGood);
  formData.append('donorCin', donationData.donor.Cin);
  if (AnalysisData.AnalysisReport) {
    formData.append('AnalysisReport', AnalysisData.AnalysisReport);
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addAnalysis', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    for (let [key, value] of formData.entries()) {
      console.log('formdata',key, value);
    }
    console.log('Form submission successful', response.data);
  } catch (error) {
    console.error('Failed to submit form', error.response?.data || error);
    for (let [key, value] of formData.entries()) {
      console.log('formdata',key, value);
    }
  }
};

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
        <select onChange={handleChange} name='IsGood' className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded shadow-sm">
          <option>Select</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
      </div>
      <div className="mt-3">
        <label htmlFor="picture" className="text-sm font-medium text-gray-600">
          Picture:
        </label>
        <input onChange={handleChange} name='AnalysisReport' type="file" className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded shadow-sm"/>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
        Submit
      </button>
    </div>

    </form>
 

    </>

  )


}