import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import HospitalForm from './pages/addHospital';
import { BloodCampForm } from './pages/addBloodCamp';
import { HospitalStaffForm } from './pages/addHospitalStaff';
import { BloodCampStaffForm } from './pages/addBloodCampStaff';
import { DonorForm } from './pages/addDonor';
import DonationForm from './pages/addDonation';
import { BloodRequestForm } from './pages/addBloodRequest';
import { AdminForm } from './pages/addAdmin';
import { LabTechForm } from './pages/addLabTech';
import DonationListView from './pages/DonationList';
import { AnalysisForm } from './pages/addAnalysis';
import Dashboard from './pages/Dashboard' 
import { SendNotificationForm } from './pages/addNotification';
import { ListedBloodRequests } from './pages/ListBloodRequest';
import { UpdateBloodRequest } from './pages/updateBloodRequestList';
import { UpdateBloodRequestStatus } from './pages/updateRequestStatus';
import {ListedBloodRequestsAdmin} from './pages/ListBloodRequestAdmin'
import DonationListEdit from './pages/DonationListEdit';
import { UpdateDonation } from './pages/updateDonation';
import LoginPage from './pages/login/Login';
import {HomePage} from './pages/HomePage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RoleProtectedRoute from './pages/RoleProtectiongRoute';
import UnauthorizedPage from './pages/unauthorized';
import Profile from './pages/profile';
import { ResetPasswordRequest } from './pages/emailPassword';
import { ResetPassword } from './pages/PasswordReset';
import DonationHistory from './pages/DonationHistory';


function App() {

    // const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true);


//   const navigate =  useNavigate()

  // Effect to check authentication status
  useEffect(() => {
    // Check for token in local storage
    // localStorage.setItem('role', 'Donor');
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
      console.log('user is logged in', ' token :', token)            
      console.log('isloged',isLoggedIn);
      console.log('role :', role);
        
    }
    else{
      console.log('user is not logged in')
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

//   useEffect(() => {

//     const role = localStorage.getItem('role');

//     switch(role){
//         case 'admin' :
//             return navigate('dashboard')
//     }

//   })

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

    setupInterceptor(); 
  }, []); 
 

  return (
    <BrowserRouter>
      <Routes>
              <Route
                path="/addHospital"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <HospitalForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
              <Route
                path="/donationHistory"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Donor']}>
                        <DonationHistory/>
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addBloodCamp"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <BloodCampForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addHospitalStaff"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <HospitalStaffForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addBloodCampStaff"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <BloodCampStaffForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}  
            />
            <Route
                path="/addDonor"
                element={ <>
                     <DonorForm />
                    {/* <Navigate to="/login" replace /> */}
                    </>
                }
            />
            <Route
                path="/addDonation"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['BloodCampStaff']}>
                        <DonationForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addBloodRequest"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['HospitalStaff']}>
                        <BloodRequestForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addAdmin"
                element={isLoggedIn ? (
                        <AdminForm />
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addLabTech"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <LabTechForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/donationList"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['LabTech']}>
                        <DonationListView />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addAnalysis/:id"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['LabTech']}>
                        <AnalysisForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/Dashboard"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <Dashboard />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/addNotif"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <SendNotificationForm />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/bloodRequestList"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['HospitalStaff']}>
                        <ListedBloodRequests />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/bloodRequestListstatus"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin' ]}>
                        <ListedBloodRequestsAdmin />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/editBloodRequest/:id"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['HospitalStaff']}>
                        <UpdateBloodRequest />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/editBloodRequeststatus/:id"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['Admin']}>
                        <UpdateBloodRequestStatus />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/editDonation/:id"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['BloodCampStaff']}>
                        <UpdateDonation />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/DonationListedit"
                element={isLoggedIn ? (
                    <RoleProtectedRoute allowedRoles={['BloodCampStaff']}>
                        <DonationListEdit />
                    </RoleProtectedRoute>
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/profile"
                element={isLoggedIn ? (
                        <Profile />
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
            <Route
                path="/resetpassword"
                element={isLoggedIn ? (
                        <DonationListEdit />
                ) : (
                    <Navigate to="/login" replace />
                )}
            />
          <Route path='login' element={<LoginPage/>} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/unauthorized' element={<UnauthorizedPage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/resetPassRequest' element={<ResetPasswordRequest/>} />
          <Route path='/resetpassword/:token' element={<ResetPassword/>} />
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
