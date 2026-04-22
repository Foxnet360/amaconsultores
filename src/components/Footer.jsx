import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Cookie } from 'lucide-react';
import CookiePreferences from './CookiePreferences';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showCookiePrefs, setShowCookiePrefs] = useState(false);

  const footerLinks = {
    servicios: [
      { name: 'Regularización Migratoria', path: '/servicios/regularizacion' },
      { name: 'Movilidad Profesional', path: '/servicios/movilidad' },
      { name: 'Convenios España-Colombia', path: '/servicios/convenios' },
      { name: 'Servicios para Empresas', path: '/servicios/empresas' },
    ],
    empresa: [
      { name: 'Quiénes Somos', path: '/equipo' },
      { name: 'Blog', path: '/blog' },
      { name: 'Precios', path: '/precios' },
      { name: 'Contacto', path: '/contacto' },
    ],
    legal: [
      { name: 'Política de Privacidad', path: '/politica-de-privacidad' },
      { name: 'Aviso Legal', path: '/aviso-legal' },
      { name: 'Política de Cookies', path: '/politica-de-cookies' },
      { name: 'Condiciones del Servicio', path: '/condiciones-servicio' },
    ],
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
            <img
              src="/images/Logo-transparente.png"
              alt="Logo AMA Consultores - Consultoría en migraciones España-Colombia"
              className="h-16 w-auto"
            />
            </Link>
            <p className="font-lato text-white/70 text-sm leading-relaxed">
              Equipo con presencia jurídica en España y Colombia. Clientes en todo el mundo.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-poppins font-semibold text-gold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-lato text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-poppins font-semibold text-gold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-lato text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-poppins font-semibold text-gold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@amaconsultores.eu"
                  className="font-lato text-sm text-white/70 hover:text-gold transition-colors"
                >
                  info@amaconsultores.eu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="font-lato text-sm">
                  <a href="tel:+34664824098" className="hover:text-gold transition-colors block text-white font-semibold">
                    España: +34 664 824 098
                  </a>
                  <a href="tel:+573017174478" className="hover:text-gold transition-colors block text-white/70">
                    Colombia: +57 301 717 4478
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-lato text-sm text-white/70">
                  España y Colombia
                </span>
              </li>
            </ul>
            <a
              href="/#asesoria"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-gold hover:bg-gold-dark text-primary-dark font-poppins font-semibold rounded-lg transition-all duration-300 text-sm"
            >
              Agenda tu asesoría — 50€
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="font-lato text-xs text-white/50 text-center leading-relaxed">
            El equipo de AMA Consultores integra abogados titulados en Colombia y en España. En España, AMA Consultores opera como consultora especializada y, para las actuaciones que requieren firma letrada ante tribunales o administraciones españolas, coordina con abogados colaboradores debidamente colegiados en el Colegio de Abogados correspondiente. En Colombia, las actuaciones jurídicas son realizadas por abogados colegiados en ejercicio en el territorio colombiano.
          </p>
        </div>

        {/* Legal Links y Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-lato text-sm text-white/50">
              © {currentYear} AMA Consultores |{" "}
              {footerLinks.legal.map((link, idx) => (
                <React.Fragment key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold transition-colors underline"
                  >
                    {link.name}
                  </Link>
                  {idx < footerLinks.legal.length - 1 && " | "}
                </React.Fragment>
              ))}
            </p>
            <button
              onClick={() => setShowCookiePrefs(true)}
              className="font-lato text-sm text-white/50 hover:text-gold transition-colors underline flex items-center gap-1"
            >
              <Cookie size={14} />
              Configuración de cookies
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      <CookiePreferences 
        isOpen={showCookiePrefs} 
        onClose={() => setShowCookiePrefs(false)} 
      />
    </footer>
  );
};

export default Footer;