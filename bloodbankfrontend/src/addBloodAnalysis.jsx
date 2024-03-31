import React, { useState } from 'react';
import axios from 'axios';

const BloodAnalysisForm = () => {
  const [reportData, setReportData] = useState({
    isGood: '', 
    donation_id: '',
    AnalysisReport: ''
  });


  useEffect( () =>
  {
      const fetchDonation  = async ()=>
      {
          try {
              const response = await axios.get('http://127.0.0.1:8000/api/getBloodType');
              setBloodType(response.data);
          }catch (error) {
              console.error('Failed to fetch BloodType', error);
          }
      }
      fetchBloodType();
  },[]
  )

}