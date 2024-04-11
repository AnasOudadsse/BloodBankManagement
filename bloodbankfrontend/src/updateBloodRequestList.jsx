import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function UpdateBloodRequest() {

    let {id} = useParams()
    const [BloodRequest, setBloodRequest] = useState([]);
    // const [updatedBloodRequest, setUpdatedBloodRequest] = useState([]);
    useEffect(() => {
        const fetchBloodRequest = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/editBloodRequest/${id}`);
                console.log(response.data);
                setBloodRequest(response.data);
            } catch (err) {
                console.log('Failed to fetch blood requests', err.response?.data);
            }
        };
        fetchBloodRequest();
    }, []);



    return (
        <div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-20 px-6 py-3">ID</th>
                        <th scope="col" className="w-32 px-6 py-3">Quantity</th>
                        <th scope="col" className="w-32 px-6 py-3">Urgency</th>
                        <th scope="col" className="w-32 px-6 py-3">Status</th>
                        <th scope="col" className="w-32 px-6 py-3">Blood Type</th>
                        <th scope="col" className="w-48 px-6 py-3">Hospital name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {BloodRequest.map((e) => (
                        <tr key={e.id}>
                            <td className="px-6 py-3">
                                <input type="text" 
                                value={e.id}  
                                />
                            </td>
                            <td className="px-6 py-3">{e.Quantity}</td>
                            <td className="px-6 py-3">{e.Urgency}</td>
                            <td className="px-6 py-3"> 
                                <select
                                    value={e.Status}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="declined">Declined</option>
                                    {/* Add more status options as needed */}
                                </select></td>
                            <td className="px-6 py-3">{e.blood_type?.BloodType}</td>
                            <td className="px-6 py-3">{e.hospital?.Name ?? 'No hospital info'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
