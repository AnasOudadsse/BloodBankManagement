import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from "./header";
import Footer from "./footer";

export function UpdateBloodRequestStatus() {
    let { id } = useParams();
    const [bloodRequest, setBloodRequest] = useState(null); 
    let navigate = useNavigate();

    useEffect(() => {
        const fetchBloodRequest = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/editBloodRequest/${id}`);
                setBloodRequest(response.data[0]); 
            } catch (err) {
                console.error('Failed to fetch blood request:', err.response?.data || err.message);
                navigate('/login');
            }
        };
        fetchBloodRequest();
    }, [id, navigate]);

    const handleInputChange = (field, value) => {
        setBloodRequest(prevRequest => ({
            ...prevRequest,
            [field]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {
                id: id,
                Status: bloodRequest.Status,
                BloodType: bloodRequest.blood_id,
                Quantity: bloodRequest.Quantity
            };

            const response = await axios.put(`http://127.0.0.1:8000/api/updateBloodRequestStatus`, payload);
            if (response.status === 200) {
                navigate('/bloodrequestliststatus');
                alert('Blood request updated successfully');
            }
        } catch (err) {
            console.error('Failed to update blood request:', err.response?.data || err.message);
            navigate('/login');
        }
    };

    if (!bloodRequest) return <div>Loading...</div>;

    return (
        <>
        <Header />
        <div className="p-20 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">Edit Blood Request Status</h1>
                <p className="text-gray-600">
                    Modify the status of a blood request. You can update the status to reflect current needs and processing stages. Make sure to save changes to ensure updates are applied.
                </p>
                <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Urgency</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Blood Type</th>
                                <th scope="col" className="px-6 py-3">Hospital Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-3">{bloodRequest.id}</td>
                                <td className="px-6 py-3">{bloodRequest.Quantity}</td>
                                <td className="px-6 py-3">{bloodRequest.Urgency}</td>
                                <td className="px-6 py-3">
                                    <select value={bloodRequest.Status} onChange={(e) => handleInputChange('Status', e.target.value)} className="block w-full mt-1 pl-3 pr-10 py-2 border border-gray-300 rounded-md">
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="declined">Declined</option>
                                    </select>
                                </td>
                                <td className="px-6 py-3">{bloodRequest.blood_type?.BloodType}</td>
                                <td className="px-6 py-3">{bloodRequest.hospital?.Name}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
}
