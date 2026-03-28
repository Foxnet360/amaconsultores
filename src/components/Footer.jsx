import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-gold-400 font-bold text-xl">AMA</span>
              </div>
              <span className="text-white font-bold text-lg">AMA Consultores</span>
            </div>
            <p className="text-sm text-gray-400">
              Expertos en movilidad internacional y seguridad jurídica transnacional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gold-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm hover:text-gold-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-sm hover:text-gold-400 transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm hover:text-gold-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-white font-semibold mb-4 block">Servicios</span>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Movilidad Profesional</li>
              <li>Integración y Protección</li>
              <li>Consultoría Institucional</li>
              <li>Gestión Documental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-white font-semibold mb-4 block">Contacto</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:angela.morales@amaconsultores.eu" className="text-gray-400 hover:text-gold-400 transition-colors block">
                    angela.morales@amaconsultores.eu
                  </a>
                  <a href="mailto:info@amaconsultores.eu" className="text-gray-400 hover:text-gold-400 transition-colors block">
                    info@amaconsultores.eu
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+34664824098" className="text-gray-400 hover:text-gold-400 transition-colors block">
                    España: +34 664 824 098
                  </a>
                  <a href="tel:+573017174478" className="text-gray-400 hover:text-gold-400 transition-colors block">
                    Colombia: +57 301 717 4478
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">España y Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 AMA Consultores. Todos los derechos reservados. | Política de Privacidad | RGPD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;