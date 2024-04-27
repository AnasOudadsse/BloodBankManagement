import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
