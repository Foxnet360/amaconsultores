import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import TidyCalModal from './TidyCalModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Handle scroll para cambiar el fondo de la navegación
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const openTidyCalModal = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios/regularizacion', hasDropdown: true },
    { name: 'Precios', path: '/precios' },
    { name: 'Blog', path: '/blog' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const serviceLinks = [
    { name: 'Regularización Migratoria', path: '/servicios/regularizacion' },
    { name: 'Movilidad Profesional', path: '/servicios/movilidad' },
    { name: 'Convenios España-Colombia', path: '/servicios/convenios' },
    { name: 'Trámites en Colombia', path: '/servicios/colombia' },
    { name: 'Servicios para Empresas', path: '/servicios/empresas' },
  ];

  // Determinar clases de color según el estado
  const isHomePage = location.pathname === '/';
  
  // Navbar degradado sobre hero (home sin scroll), sólido al hacer scroll
  const getNavbarClasses = () => {
    if (isHomePage && !scrolled) {
      // Degradado sobre el hero en home
      return 'bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e3a5f]/90 to-[#0f2744]/85';
    }
    // Sólido #1a2335 para scroll o otras páginas
    return 'bg-[#1a2335] shadow-lg';
  };
  
  const textColorClass = (isHomePage && !scrolled) 
    ? 'text-white' 
    : 'text-white';
  
  const bgClass = getNavbarClasses();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/Logo-transparente.png"
              alt="Logo AMA Consultores - Consultoría en migraciones España-Colombia"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(true)}
                    onMouseLeave={() => setActiveDropdown(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-poppins font-medium text-sm transition-colors ${
                        isActive(link.path) ? 'text-gold' : textColorClass
                      } hover:text-gold`}
                      aria-expanded={activeDropdown}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown */}
                    <AnimatePresence>
                      {activeDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 pt-2 w-64"
                        >
                          <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block px-4 py-2 text-sm font-lato text-primary-dark hover:bg-primary-blue hover:text-white transition-colors"
                                onClick={() => setActiveDropdown(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-poppins font-medium text-sm transition-colors relative group ${
                      isActive(link.path) ? 'text-gold' : textColorClass
                    } hover:text-gold`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold transform origin-left transition-transform ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={openTidyCalModal}
              className="bg-gold hover:bg-gold-dark text-primary-dark font-poppins font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Agendar consulta gratuita (30 min)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${textColorClass}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg font-poppins font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary-blue text-white'
                      : 'text-primary-dark hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    if (!link.hasDropdown) setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Service Links */}
              <div className="pt-2 border-t border-gray-100">
                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Servicios</p>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-primary-dark hover:text-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={openTidyCalModal}
                className="w-full mt-4 bg-gold hover:bg-gold-dark text-primary-dark font-poppins font-semibold py-3 rounded-lg transition-colors"
              >
                Agendar consulta gratuita (30 min)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <TidyCalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navigation;