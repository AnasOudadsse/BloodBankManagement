import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HospitalForm from './Admin/addHospital';
import { BloodCampForm } from './Admin/addBloodCamp';
import { HospitalStaffForm } from './Admin/addHospitalStaff';
import { BloodCampStaffForm } from './Admin/addBloodCampStaff';
import { DonorForm } from './BloodCampStaff/addDonor';
import DonationForm from './BloodCampStaff/addDonation';
import { BloodRequestForm } from './HospitalStaff/addBloodRequest';
import { AdminForm } from './Admin/addAdmin';
import { LabTechForm } from './Admin/addLabTech';
import DonationListView from './LabTech/DonationList';
import { AnalysisForm } from './LabTech/addAnalysis';
import Dashboard from './Dashboard';
import { SendNotificationForm } from './Admin/addNotification';
import { ListedBloodRequests } from './ListBloodRequest';
import InlineEditTable from './editRequestHS';
import { UpdateBloodRequest } from './updateBloodRequestList';
import { UpdateBloodRequestStatus } from './updateRequestStatus';
import {ListedBloodRequestsAdmin} from './Admin/ListBloodRequestAdmin'
import DonationListEdit from './DonationListEdit';
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
          <Route path='editDonation' element={<DonationListEdit/>} />
          <Route path='editable' element={<InlineEditTable/>} />
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
