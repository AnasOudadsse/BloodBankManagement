import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
export function ListedBloodRequests() {
    const [BloodRequests, setBloodRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBloodRequests = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/getBloodRequests');
                console.log(response.data);
                setBloodRequests(response.data);
            } catch (err) {
                console.log('Failed to fetch blood requests', err.response?.data);
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
        const HospitalName = bloodRequest.hospital?.Name ?? 'No hospital info available';

        return bloodRequestId.includes(searchLower) || HospitalName.toLowerCase().includes(searchLower);
    });

    return (
        <div>
            <input
                type="text"
                name="searchBar"
                placeholder="Search by request ID or hospital..."
                value={searchTerm}
                onChange={handleSearch}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-20 px-6 py-3">ID</th>
                        <th scope="col" className="w-32 px-6 py-3">Quantity</th>
                        <th scope="col" className="w-32 px-6 py-3">Urgency</th>
                        <th scope="col" className="w-32 px-6 py-3">Status</th>
                        <th scope="col" className="w-32 px-6 py-3">Blood Type</th>
                        <th scope="col" className="w-48 px-6 py-3">Hospital name</th>
                        <th scope="col" className="w-48 px-6 py-3">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredBloodRequests.map((e) => (
                        <tr key={e.id}>
                            <td className="px-6 py-3">{e.id}</td>
                            <td className="px-6 py-3">{e.Quantity}</td>
                            <td className="px-6 py-3">{e.Urgency}</td>
                            <td className="px-6 py-3">{e.Status}</td>
                            <td className="px-6 py-3">{e.blood_type?.BloodType}</td>
                            <td className="px-6 py-3">{e.hospital?.Name ?? 'No hospital info'}</td>
                            <td className="px-6 py-3 w-10" > 
                            <Link className='px-1' to={`/editBloodRequest/${e.id}`}> <FontAwesomeIcon icon={faEdit}/> </Link> 
                            <Link className='px-1' >  <FontAwesomeIcon icon={faTrashAlt} /> </Link>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
