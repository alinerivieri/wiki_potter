import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Spells from './pages/Spells';
import SpellDetails from './pages/SpellDetails';
import Edit from './components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/login' element={<Login/>} /> 
      <Route path='/signup' element={<Signup/>} /> 
      <Route path='/spells' element={<Spells/>} /> 
      <Route path='/spelldetails' element={<SpellDetails/>} /> 
      <Route path='/spelledit' element={<Edit/>} /> 
    </Routes>
  </BrowserRouter>
);


