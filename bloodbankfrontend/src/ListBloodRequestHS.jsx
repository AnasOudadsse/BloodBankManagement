import React, {useEffect, useState} from "react";
import axios from 'axios';



export function ListedBloodRequests(){

const [BloodRequests, setBloodRequests] =  useState([]);
const [searchTerm, setSearchTerm] = useState('');
useEffect( () => {

    const fetchBloodRequests = async ()=>{

        try{
            const response = await axios.get('http://127.0.0.1:8000/api/getBloodRequests', BloodRequests)
            console.log(response.data)
            setBloodRequests(response.data)            

        }

        catch(err){
            console.log('failed to fetch bloodRequest', err.response.data)
        }
    }
    fetchBloodRequests();
},[])
            console.log('bloodRequest', BloodRequests)

const handleSearch = (event)=>{
    setSearchTerm(event.target.value)
}

const filteredBloodRequests =  BloodRequests.filter(bloodRequest=>{

    const searchLower = searchTerm.toLowerCase();
    const bloodRequestId = String(bloodRequest.id);
    const HospitalName = bloodRequest.hospital?.Name ?? 'No hospital info available' ;

    return bloodRequestId.includes(searchLower) || HospitalName.includes(searchLower)

})

    return(
        <div>
        <input type="text" name="searchBar" value={searchTerm} onChange={handleSearch}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                <tr>
                    <th scope="col" class="px-6 py-3"  >ID</th>
                    <th scope="col" class="px-6 py-3">Quantity	</th>
                    <th scope="col" class="px-6 py-3">Urgency</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                    <th scope="col" class="px-6 py-3">Blood Type</th>
                    <th scope="col" class="px-6 py-3">Hospital name </th>
                </tr>
            </thead>
            <tbody>
                {
                filteredBloodRequests.map(e=>(
                    <>
                    <tr key={e.id}>
                        <td scope="col" class="px-6 py-3" key={e.id}>{e.id}</td>
                        <td scope="col" class="px-6 py-3" key={e.id}>{e.Quantity}</td>
                        <td scope="col" class="px-6 py-3" key={e.id}>{e.Urgency}</td>
                        <td scope="col" class="px-6 py-3" key={e.id}>{e.Status}</td>
                        <td scope="col" class="px-6 py-3" key={e.id}>{e.blood_type.BloodType}</td>
                        <td scope="col" class="px-6 py-3" key={e.id}>{e.hospital.Name}</td>
                    </tr>
                    </>
                ))
                }
            </tbody>
        </table>
        </div>
    )

}