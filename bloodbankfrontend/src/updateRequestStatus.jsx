import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export function UpdateBloodRequestStatus() {
    let { id } = useParams();

    const [bloodRequest, setBloodRequest] = useState(null); 
    let navigate = useNavigate();

    useEffect(() => {
        console.log('blood request',bloodRequest)
    }, [bloodRequest]);

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






    const handleInputChange = (field, value) => {


            setBloodRequest(prevRequest => ({
                ...prevRequest,
                [field]: value
            }));
        }
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {        
                Status : bloodRequest.Status , 

            };
            console.log('payload',payload)

            const response = await axios.put(`http://127.0.0.1:8000/api/updateBloodRequest`, payload);
            if (response.status === 200) {
                navigate('/bloodrequestlist')
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
                            {bloodRequest.Quantity}
                        </td>
                        <td className="px-6 py-3">
                            {bloodRequest.Urgency}
                        </td>
                        <td className="px-6 py-3">
                            <select value={bloodRequest.Status} onChange={(e) => handleInputChange('Status', e.target.value)}>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="declined">Declined</option>
                            </select>
                        </td>
                        <td className="px-6 py-3">
                            {bloodRequest.blood_type.BloodType}
                        </td>
                        <td className="px-6 py-3">
                        {bloodRequest.hospital.Name}
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
