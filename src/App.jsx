import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AnalyticsProvider from './components/AnalyticsProvider';

// New pages for restructured navigation
import PricingPage from './pages/PricingPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import AgendaPage from './pages/AgendaPage';
import CondicionesServicioPage from './pages/CondicionesServicioPage';

// Service pages
import ServicesPage from './pages/ServicesPage';
import RegularizacionPage from './pages/services/RegularizacionPage';
import MovilidadPage from './pages/services/MovilidadPage';
import ConveniosPage from './pages/services/ConveniosPage';
import ColombiaPage from './pages/services/ColombiaPage';
import EmpresasPage from './pages/services/EmpresasPage';

// Legal pages (standalone, not part of one-page)
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage';
import AvisoLegalPage from './pages/AvisoLegalPage';
import PoliticaCookiesPage from './pages/PoliticaCookiesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

// Legacy hash redirect handler
function LegacyHashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Handle legacy hash anchors
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      const redirectMap = {
        'regularizacion': '/servicios/regularizacion',
        'movilidad': '/servicios/movilidad',
        'convenios': '/servicios/convenios',
        'colombia': '/servicios/colombia',
        'entidades': '/servicios/empresas',
        'equipo': '/equipo',
        'asesoria': '/contacto', // Redirigir a contacto ya que ahora es modal
        'contacto': '/contacto'
      };
      
      if (redirectMap[hash]) {
        navigate(redirectMap[hash], { replace: true });
      }
    }
  }, [location, navigate]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LegacyHashRedirect />
      <AnalyticsProvider>
      <MainLayout>
        <Routes>
          {/* Main home route */}
          <Route path="/" element={<HomePage />} />
          
          {/* New top-level pages */}
          <Route path="/precios" element={<PricingPage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/condiciones-servicio" element={<CondicionesServicioPage />} />
          
          {/* Service pages */}
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/regularizacion" element={<RegularizacionPage />} />
          <Route path="/servicios/movilidad" element={<MovilidadPage />} />
          <Route path="/servicios/convenios" element={<ConveniosPage />} />
          <Route path="/servicios/colombia" element={<ColombiaPage />} />
          <Route path="/servicios/empresas" element={<EmpresasPage />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Legal pages */}
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookiesPage />} />
          
          {/* Legacy redirects */}
          <Route path="/sobre-nosotros" element={<Navigate to="/equipo" replace />} />
          <Route path="/evaluacion" element={<Navigate to="/" replace />} />
          
          {/* Catch all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
      </AnalyticsProvider>
      <Toaster />
    </Router>
  );
}

export default App;