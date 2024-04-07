import React, {useEffect, useState} from "react";
import { axios } from "axios";
const [BloodRequests, setBloodRequests] =  useState([]);
const [searchTerm, setSearchTerm] = useState('');


function ListedBloodRequests(){


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

const handleSearch = (event)=>{
    setSearchTerm(event.target.value)
}

const filteredBloodRequests =  BloodRequests.filter(bloodRequest=>{

    const searchLower = searchTerm.toLowerCase();

    return bloodRequest.id.includes(searchLower)

})

    return
    (
        <table>
            
        </table>
    )


}