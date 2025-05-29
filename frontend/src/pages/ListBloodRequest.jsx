import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Header from "./header/header";
import Footer from "./footer/footer";

export function ListedBloodRequests() {
    const [BloodRequests, setBloodRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const user = localStorage.getItem('user')
    let navigate = useNavigate();

    useEffect(() => {
        const fetchBloodRequests = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodRequests');
                setBloodRequests(response.data);
            } catch (err) {
                console.error('Failed to fetch blood requests', err.response?.data);
            }
        };
        fetchBloodRequests();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBloodRequests = BloodRequests.filter(bloodRequest => {
        const searchLower = searchTerm.toLowerCase();
        const bloodRequestId = String(bloodRequest.id);
        const hospitalName = bloodRequest.hospital?.Name ?? 'No hospital info available';
        return bloodRequestId.includes(searchLower) || hospitalName.toLowerCase().includes(searchLower);
    });

    const deleteItem = async (id) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/deleteRequest', { id });
            setBloodRequests(prev => prev.filter(request => request.id !== id));
            navigate('/blood-requests');
        } catch (err) {
            console.error('Failed to delete request', err.response?.data);
        }
    };

    return (
        <>
        <Header/>
        <div className="p-6 pt-20  bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">Blood Request Management</h1>
                <p className="text-gray-600 mb-4">
                    Manage and respond to blood requests effectively. You can search for requests by ID or hospital name. Use the options provided to edit or delete requests as needed.
                </p>
                <input
                    type="text"
                    name="searchBar"
                    placeholder="Search by request ID or hospital..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="mb-4 w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Urgency</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Blood Type</th>
                                <th scope="col" className="px-6 py-3">Hospital name</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBloodRequests.map((request) => (
                                <tr key={request.id}>
                                    <td className="px-6 py-4">{request.id}</td>
                                    <td className="px-6 py-4">{request.Quantity}</td>
                                    <td className="px-6 py-4">{request.Urgency}</td>
                                    <td className="px-6 py-4">{request.Status}</td>
                                    <td className="px-6 py-4">{request.blood_type?.BloodType}</td>
                                    <td className="px-6 py-4">{request.hospital?.Name ?? 'No hospital info'}</td>
                                    <td className="px-6 py-4 flex space-x-3">
                                        <Link to={`/editBloodRequest/${request.id}`} className="text-blue-500 hover:text-blue-700">
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </Link>
                                        <button onClick={() => deleteItem(request.id)} className="text-red-500 hover:text-red-600">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
