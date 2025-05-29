import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from "./header/header";
import Footer from "./footer/footer";

export function UpdateBloodRequest() {
    let { id } = useParams();
    const [BloodType, setBloodType] = useState([]);
    const [Hospitals, setHospitals] = useState([]);
    const [bloodRequest, setBloodRequest] = useState(null); 
    let navigate = useNavigate();

    useEffect(() => {
        const fetchBloodRequest = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/editBloodRequest/${id}`);
                setBloodRequest(response.data[0]);
            } catch (err) {
                console.error('Failed to fetch blood request:', err);
            }
        };
        fetchBloodRequest();
    }, [id]);

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getHospitals');
                setHospitals(response.data);
            } catch (error) {
                console.error('Failed to fetch hospitals', error);
            }
        };
        fetchHospitals();
    }, []);

    useEffect(() => {
        const fetchBloodType = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodType');
                setBloodType(response.data);
            } catch (error) {
                console.error('Failed to fetch BloodType', error);
            }
        };
        fetchBloodType();
    }, []);

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
                Quantity: bloodRequest.Quantity,
                Urgency: bloodRequest.Urgency,
                blood_id: bloodRequest.blood_id,
                hospital_id: bloodRequest.hospital_id,
                id: bloodRequest.id,
            };
            const response = await axios.put(`http://127.0.0.1:8000/api/updateBloodRequest`, payload);
            if (response.status === 200) {
                navigate('/bloodrequestlist');
                alert('Blood request updated successfully');
            }
        } catch (err) {
            console.error('Failed to update blood request:', err);
        }
    };

    if (!bloodRequest) return <div>Loading...</div>;

    return (
        <>
        <Header/>
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold text-red-600 mb-2">Edit Blood Request</h1>
                <p className="mb-4 text-gray-600">
                    Update the details of the blood request. Adjust the quantity, urgency, blood type, and hospital to match current requirements. Ensure accurate data to help facilitate urgent needs effectively.
                </p>
                <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Quantity:</label>
                        <input
                            type="number"
                            value={bloodRequest.Quantity}
                            onChange={(e) => handleInputChange('Quantity', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Urgency:</label>
                        <select
                            name="Urgency"
                            value={bloodRequest.Urgency}
                            onChange={(e) => handleInputChange('Urgency', e.target.value)}
                            className="block w-full mt-1 pl-3 pr-10 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="immediate">Immediate</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Blood Type:</label>
                        <select
                            name="blood_id"
                            value={bloodRequest.blood_id}
                            onChange={(e) => handleInputChange('blood_id', e.target.value)}
                            className="block w-full mt-1 pl-3 pr-10 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select the blood type</option>
                            {BloodType.map((type) => (
                                <option key={type.id} value={type.id}>{type.BloodType}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Hospital Name:</label>
                        <select
                            name="hospital_id"
                            value={bloodRequest.hospital_id}
                            onChange={(e) => handleInputChange('hospital_id', e.target.value)}
                            className="block w-full mt-1 pl-3 pr-10 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select the hospital</option>
                            {Hospitals.map((hospital) => (
                                <option key={hospital.id} value={hospital.id}>{hospital.Name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}
