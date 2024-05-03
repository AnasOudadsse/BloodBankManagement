import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import HospitalForm from './addHospital';
import { BloodCampForm } from './addBloodCamp';
import { HospitalStaffForm } from './addHospitalStaff';
import { BloodCampStaffForm } from './addBloodCampStaff';
import { DonorForm } from './addDonor';
import DonationForm from './addDonation';
import { BloodRequestForm } from './addBloodRequest';
import { AdminForm } from './addAdmin';
import { LabTechForm } from './addLabTech';
import DonationListView from './DonationList';
import { AnalysisForm } from './addAnalysis';
import Dashboard from './Dashboard';
import { SendNotificationForm } from './addNotification';
import { ListedBloodRequests } from './ListBloodRequest';
import { UpdateBloodRequest } from './updateBloodRequestList';
import { UpdateBloodRequestStatus } from './updateRequestStatus';
import {ListedBloodRequestsAdmin} from './ListBloodRequestAdmin'
import DonationListEdit from './DonationListEdit';
import { UpdateDonation } from './updateDonation';
import LoginPage from './Login';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Effect to check authentication status
  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      console.log('user is logged in', ' token :', token)            
      console.log('isloged',isLoggedIn);
    }
    else{
      console.log('user is not logged in')
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  // Effect to set up the Axios interceptor
  useEffect(() => {
    const setupInterceptor = () => {
      axios.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }, (error) => Promise.reject(error));
    };

    setupInterceptor(); // Call the setup function
  }, []); 
 
  // if (loading) {
  //    return <div>Loading...</div>; // Or a loading spinner
  // }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/addHospital" element={isLoggedIn ? <HospitalForm /> : <Navigate to="/login" replace/>}/>
          <Route path="/addBloodCamp" element={<BloodCampForm/>}/>
          <Route path="/addHospitalStaff" element={<HospitalStaffForm/>} />
          <Route path="/addBloodCampStaff" element={<BloodCampStaffForm/>} />
          <Route path='/addDonor' element={<DonorForm/>} />
          <Route path='/addDonation' element={<DonationForm/>} />
          <Route path='/addBloodRequest'  element={<BloodRequestForm/>} />
          <Route path='/addAdmin' element={<AdminForm/>} />
          <Route path="/addLabTech" element={<LabTechForm/>} />
          <Route path='donationList' element={<DonationListView/>} />
          <Route path="/addAnalysis/:id" element={<AnalysisForm/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path='/addNotif' element={<SendNotificationForm/>}   />
          <Route path='bloodRequestList' element={<ListedBloodRequests/>} />
          <Route path='bloodRequestListstatus' element={<ListedBloodRequestsAdmin/>} />
          <Route path='editBloodRequest/:id' element={<UpdateBloodRequest/>} />
          <Route path='editBloodRequeststatus/:id' element={<UpdateBloodRequestStatus/>} />
          <Route path='editDonation/:id' element={<UpdateDonation/>} />
          <Route path='DonationListedit' element={<DonationListEdit/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='/' element={<HomePage/>} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
