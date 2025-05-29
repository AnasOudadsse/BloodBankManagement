import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Header from "./header/header";
import Footer from "./footer/footer";

export function ListedBloodRequestsAdmin() {
    const [bloodRequests, setBloodRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchBloodRequests() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodRequests');
                setBloodRequests(response.data);
            } catch (err) {
                console.error('Failed to fetch blood requests', err.response?.data);
            }
        }
        fetchBloodRequests();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBloodRequests = bloodRequests.filter(bloodRequest => {
        const searchLower = searchTerm.toLowerCase();
        const bloodRequestId = String(bloodRequest.id);
        const hospitalName = bloodRequest.hospital?.Name ?? 'No hospital info available';
        return bloodRequestId.includes(searchLower) || hospitalName.toLowerCase().includes(searchLower);
    });

    const deleteItem = async (id) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/deleteRequest', { id });
            window.location.reload();
        } catch (err) {
            console.error('Failed to delete request', err.response?.data);
        }
    };

    return (
        <>
        <Header />
        <div className="p-6 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Blood Requests</h1>
                <p className="text-gray-600 mb-6">
                    Below you can find a comprehensive list of all blood requests. Use the search function to quickly find specific requests by ID or hospital name. You can edit the status or delete requests as needed.
                </p>
                <input
                    type="text"
                    placeholder="Search by request ID or hospital..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="mb-4 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                <tr key={request.id} className="border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{request.id}</td>
                                    <td className="px-6 py-4">{request.Quantity}</td>
                                    <td className="px-6 py-4">{request.Urgency}</td>
                                    <td className="px-6 py-4">{request.Status}</td>
                                    <td className="px-6 py-4">{request.blood_type?.BloodType}</td>
                                    <td className="px-6 py-4">{request.hospital?.Name ?? 'No hospital info'}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <Link to={`/editBloodRequeststatus/${request.id}`} className="text-blue-500 hover:text-blue-600">
                                            <FontAwesomeIcon icon={faEdit} />
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
        <Footer />
        </>
    );
}
