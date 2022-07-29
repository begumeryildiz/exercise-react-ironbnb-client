//import axios from 'axios';
//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ApartmentDetails from './components/ApartmentDetails';
import ApartmentsList from './components/ApartmentsList';
import CreateApartment from './components/CreateApartment';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/apartments' element={<ApartmentsList/>} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;