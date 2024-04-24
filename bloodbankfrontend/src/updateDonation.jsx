import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export function UpdateDonation() {
    let { id } = useParams();
    const [BloodType, setBloodType] = useState([])
    const [Donation, setDonation] = useState(null)
    const [BloodCamps, setBloodCamps] = useState([])

    const Donor = [Donation?.donor]


    let navigate = useNavigate();

    useEffect(() => {
        console.log('Donation',Donation)
    }, [Donation]);

    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/editDonation/${id}`);
                setDonation(response.data[0]); 
                console.log('donor', Donor)

            } catch (err) {
                console.error('Failed to fetch the donation:', err.response?.data || err.message);
            }
        };
        fetchDonation();
    }, [id]);
  
  
    useEffect( () =>
      {
          const fetchBloodType = async ()=>
          {
              try {
                  const response = await axios.get('http://127.0.0.1:8000/api/getBloodType');
                  console.log('bloodtype',response.data)
                  setBloodType(response.data);
              }catch (error) {
                  console.error('Failed to fetch BloodType', error);
              }
          }
          fetchBloodType();
      },[]
      )

      useEffect( () =>
      {
          const fetchBloodCamps = async ()=>
          {
              try {
                  const response = await axios.get('http://127.0.0.1:8000/api/getBloodCamps');
                  setBloodCamps(response.data);
                  console.log(response.data)
              }catch (error) {
                  console.error('Failed to fetch BloodCamps', error);
              }
          }
          fetchBloodCamps();
      },[]
      )


    const handleInputChange = (field, value) => {

            setDonation(prevRequest => ({
                ...prevRequest,
                [field]: value
            }));
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {        
                DonationDate: Donation.DonationDate,
                QuantityDonated: Donation.QuantityDonated,
                blood_camp_id: Donation.blood_camp_id,
                blood_type_id: Donation.blood_type_id,
                donor_cin: Donation.donor_cin,
                id: Donation.id
            };
            console.log('payload',payload)

            const response = await axios.put(`http://127.0.0.1:8000/api/updateDonation`, payload);
            if (response.status === 200) {
                navigate('/donationList')
                alert('Blood request updated successfully');
            } else {                
                console.log('payload',payload)
                console.error('Failed to update blood request:', response.data);

            }
        } catch (err) {
            console.error('Failed to update the donnation', err.response?.data || err.message);
        }
    };

    if (!Donation) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Donation</h2>
            <form onSubmit={handleSubmit}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Donation ID</th>
                            <th scope="col" class="px-6 py-3">Donor CIN</th>
                            <th scope="col" className="w-32 px-6 py-3">Blood Type</th>
                            <th scope="col" class="px-6 py-3">Quantity donated</th>
                            <th scope="col" class="px-6 py-3">Donation date</th>
                            <th scope="col" className="w-32 px-6 py-3">Blood camp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">{Donation.id}</td>
                            <td className="px-6 py-3">
                                <select name="blood_type_id" onChange={(e) => handleInputChange('donor_cin', e.target.value)}>
                                    
                                    <option value="">Select the donor's cin</option>
                                    {
                                    Donor.map(e =>
                                    (
                                        <option value={e.Cin}>{e.Name} | {e.Cin}</option>
                                    ))
                                }
                            </select>
                            </td>
                            <td className="px-6 py-3">

                                <select name="blood_type_id" onChange={ (e) => handleInputChange('blood_type_id', e.target.value)}>
                                    
                                        <option value="">Select the blood type</option>
                                        {
                                        BloodType.map(e =>
                                        (
                                            <option value={e.id}>{e.BloodType}</option>
                                        ))
                                    }
                                </select>
                            </td>
                            <td className="px-6 py-3">
                                <input type="number" value={Donation.QuantityDonated} onChange={(e) => handleInputChange('QuantityDonated', e.target.value)} />
                            </td>

                            <td className="px-6 py-3">
                                <input type="date" value={Donation.DonationDate} onChange={(e) => handleInputChange('DonationDate', e.target.value)} />
                            </td>
                            
                            <td className="px-6 py-3">
                            <select name="blood_camp_id" onChange={ (e) => handleInputChange('blood_camp_id', e.target.value)}>
                                    
                                    <option value="">Select the blood camp</option>
                                    {
                                    BloodCamps.map(e =>
                                    (
                                        <option value={e.id}>{e.Name}</option>
                                    ))
                                }
                            </select>  </td>
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
