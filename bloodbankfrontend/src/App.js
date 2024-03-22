import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HospitalForm from './addHospital';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={<HospitalForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
