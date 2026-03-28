import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/personas" element={<ServicesPage />} />
          <Route path="/servicios/personas/espana" element={<ServicesPage />} />
          <Route path="/servicios/personas/colombia" element={<ServicesPage />} />
          <Route path="/servicios/entidades" element={<ServicesPage />} />
          <Route path="/servicios/entidades/proyectos" element={<ServicesPage />} />
          <Route path="/servicios/entidades/asesoria" element={<ServicesPage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          {/* Redirección legacy */}
          <Route path="/evaluacion" element={<Navigate to="/contacto" replace />} />
        </Routes>
      </MainLayout>
      <Toaster />
    </Router>
  );
}

export default App;