import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './pages/Navbar';
import Home from './pages/home';
import Sup_details from './pages/Sup_details';
import Insert from './pages/Insert';
import Edit_supplier from './pages/View';
import Edit_sup_form from './pages/Edit';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit_supplier />} />
          <Route path='/view' element={<Sup_details />} />
          <Route path='/add' element={<Insert />} />
          <Route path='/edit_sup_form/:id' element={<Edit_sup_form/>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
