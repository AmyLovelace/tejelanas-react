
import './App.css'
import { useState, useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard.jsx';
import Layout from '../layout/Layout.jsx';
import Page2 from '../pages/ruta2.jsx';
import Home from '../pages/home.jsx';

import { alertSwal, alertConf } from '../utils/alerts.js';

import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Este efecto simula un app loader
    setTimeout(() => {
      setLoading(false);

      // Ejemplos de uso de alertSwal

      // alertSwal('success', 'Bienvenido', 'Sistema de gestión de IPSS', 2000); 
      
      // alertConf('Estás seguro de enviar el correo xxxxx')
      // .then((res) => {
      //   console.log(res);
      //   if (res) {
      //     alertSwal('success', 'Correo enviado', 'El correo fue enviado correctamente', 2000);
      //   } else {
      //     alertSwal('error', 'Correo no enviado', 'El correo no fue enviado', 2000);
      //   }
      // }
      // );
      
    }, 3000);
  }
  , []);

  if (loading) {
    return (
      <div className="loading-animation">
        <LoadingAnimation />
      </div>
    );
  }

  
  return (
    <>
      <CssBaseline>
          <Routes>
              <Route
                path="/"
                element={<Layout> <Home/></Layout>}
              />
            </Routes>
      </CssBaseline >
    </>
  );
}
