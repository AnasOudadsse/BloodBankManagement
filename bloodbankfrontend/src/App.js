import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HospitalForm from './addHospital';
import { BloodCampForm } from './addBloodCamp';
import { HospitalStaffForm } from './addHospitalStaff';
import { BloodCampStaffForm } from './addBloodCampStaff';
import { DonorForm } from './addDonor';
import DonationForm from './addDonation';
import { BloodRequestForm } from './addBloodRequest';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/addHospital" element={<HospitalForm/>}/>
          <Route path="/addBloodCamp" element={<BloodCampForm/>}/>
          <Route path="/addHospitalStaff" element={<HospitalStaffForm/>} />
          <Route path="/addBloodCampStaff" element={<BloodCampStaffForm/>} />
          <Route path='/addDonor' element={<DonorForm/>} />
          <Route path='/addDonation' element={<DonationForm/>} />
          <Route path='/addBloodRequest'  element={<BloodRequestForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
