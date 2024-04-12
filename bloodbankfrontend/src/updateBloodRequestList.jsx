import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function UpdateBloodRequest() {
    let { id } = useParams();
    const [BloodType, setBloodType] = useState([])
    const [Hospitals, setHospitals] = useState([])
    const [bloodRequest, setBloodRequest] = useState(null); 

    useEffect(() => {
        const fetchBloodRequest = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/editBloodRequest/${id}`);
                setBloodRequest(response.data[0]); 
            } catch (err) {
                console.error('Failed to fetch blood request:', err.response?.data || err.message);
            }
        };
        fetchBloodRequest();
    }, [id]);


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



    const handleInputChange = (field, value) => {
        if (field === "BloodType") {
            setBloodRequest(prevRequest => ({
                ...prevRequest,
                blood_type: { ...prevRequest.blood_type, BloodType: value }
            }));
        } else if (field === "HospitalName") {
            setBloodRequest(prevRequest => ({
                ...prevRequest,
                hospital: { ...prevRequest.hospital, Name: value }
            }));
        } else {
            setBloodRequest(prevRequest => ({
                ...prevRequest,
                [field]: value
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {        
                Quantity : bloodRequest.Quantity , 
                // Status : bloodRequest.Status , 
                Urgency : bloodRequest.Urgency , 
                blood_id : bloodRequest.blood_id , 
                hospital_id : bloodRequest.hospital_id , 
                id : bloodRequest.id , 
            };
            console.log('payload',payload)

            const response = await axios.put(`http://127.0.0.1:8000/api/updateBloodRequest`, payload);
            if (response.status === 200) {
                alert('Blood request updated successfully');
            } else {                
                console.log('payload',payload)
                console.error('Failed to update blood request:', response.data);

            }
        } catch (err) {
            console.error('Failed to update blood request:', err.response?.data || err.message);
        }
    };

    if (!bloodRequest) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Blood Request</h2>
            <form onSubmit={handleSubmit}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="w-20 px-6 py-3">ID</th>
                            <th scope="col" className="w-32 px-6 py-3">Quantity</th>
                            <th scope="col" className="w-32 px-6 py-3">Urgency</th>
                            <th scope="col" className="w-32 px-6 py-3">Blood Type</th>
                            <th scope="col" className="w-48 px-6 py-3">Hospital Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">{bloodRequest.id}</td>
                            <td className="px-6 py-3">
                                <input type="number" value={bloodRequest.Quantity} onChange={(e) => handleInputChange('Quantity', e.target.value)} />
                            </td>
                            <td className="px-6 py-3">
                                <input type="text" value={bloodRequest.Urgency} onChange={(e) => handleInputChange('Urgency', e.target.value)} />
                            </td>
                            {/* <td className="px-6 py-3">
                                <select value={bloodRequest.Status} onChange={(e) => handleInputChange('Status', e.target.value)}>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="declined">Declined</option>
                                </select>
                            </td> */}
                            <td className="px-6 py-3">
                                <input type="text" value={bloodRequest.blood_type?.BloodType} onChange={(e) => handleInputChange('BloodType', e.target.value)} />
                            </td>
                            <td className="px-6 py-3">
                                <input type="text" value={bloodRequest.hospital?.Name} onChange={(e) => handleInputChange('HospitalName', e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                </button>
            </form>
        </div>
    );
}
