import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios', hasDropdown: true },
    { name: 'Quiénes somos', path: '/sobre-nosotros' },
    { name: 'Opiniones', path: '/opiniones', comingSoon: true },
    { name: 'Blog', path: '/blog', comingSoon: true },
    { name: 'Contacto', path: '/contacto' },
  ];

  const servicesDropdownItems = [
    { 
      name: 'Para Personas', 
      path: '/servicios?type=personas',
      subItems: [
        { name: 'En España', path: '/servicios/personas/espana' },
        { name: 'En Colombia', path: '/servicios/personas/colombia' },
      ]
    },
    { 
      name: 'Para Entidades', 
      path: '/servicios?type=entidades',
      subItems: [
        { name: 'Proyectos Europeos', path: '/servicios/entidades/proyectos' },
        { name: 'Asesoría Migratoria', path: '/servicios/entidades/asesoria' },
      ]
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-gold-400 font-bold text-xl">AMA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">AMA Consultores</span>
                <span className="text-gold-400 text-xs leading-tight">Movilidad Internacional</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors relative group ${
                        location.pathname.startsWith('/servicios')
                          ? 'text-gold-400'
                          : 'text-gray-200 hover:text-gold-400'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold-400 transform origin-left transition-transform ${
                          location.pathname.startsWith('/servicios') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2 z-50"
                        >
                          {servicesDropdownItems.map((service) => (
                            <div key={service.path} className="px-4 py-2">
                              <Link
                                to={service.path}
                                className="block text-white font-medium hover:text-gold-400 transition-colors"
                              >
                                {service.name}
                              </Link>
                              <div className="mt-1 ml-3 space-y-1">
                                {service.subItems.map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    className="block text-sm text-gray-400 hover:text-gold-400 transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors relative group ${
                      location.pathname === item.path
                        ? 'text-gold-400'
                        : item.comingSoon
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-gray-200 hover:text-gold-400'
                    }`}
                  >
                    {item.name}
                    {item.comingSoon && (
                      <span className="ml-1 text-xs text-gold-400">(próximamente)</span>
                    )}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold-400 transform origin-left transition-transform ${
                        location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
            className="md:hidden bg-slate-900 border-t border-slate-800 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/'
                    ? 'bg-gold-400/20 text-gold-400'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                Inicio
              </Link>
              
              {/* Servicios con submenú */}
              <div className="space-y-1">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    location.pathname.startsWith('/servicios')
                      ? 'bg-gold-400/20 text-gold-400'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  <span>Servicios</span>
                  <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 space-y-1"
                    >
                      <Link
                        to="/servicios?type=personas"
                        className="block px-4 py-2 text-gray-300 hover:text-gold-400 rounded-lg"
                      >
                        Para Personas
                      </Link>
                      <Link
                        to="/servicios/personas/espana"
                        className="block px-4 py-2 text-gray-400 hover:text-gold-400 rounded-lg ml-4"
                      >
                        En España
                      </Link>
                      <Link
                        to="/servicios/personas/colombia"
                        className="block px-4 py-2 text-gray-400 hover:text-gold-400 rounded-lg ml-4"
                      >
                        En Colombia
                      </Link>
                      <Link
                        to="/servicios?type=entidades"
                        className="block px-4 py-2 text-gray-300 hover:text-gold-400 rounded-lg"
                      >
                        Para Entidades
                      </Link>
                      <Link
                        to="/servicios/entidades/proyectos"
                        className="block px-4 py-2 text-gray-400 hover:text-gold-400 rounded-lg ml-4"
                      >
                        Proyectos Europeos
                      </Link>
                      <Link
                        to="/servicios/entidades/asesoria"
                        className="block px-4 py-2 text-gray-400 hover:text-gold-400 rounded-lg ml-4"
                      >
                        Asesoría Migratoria
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link
                to="/sobre-nosotros"
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/sobre-nosotros'
                    ? 'bg-gold-400/20 text-gold-400'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                Quiénes somos
              </Link>
              
              <div className="block px-4 py-3 text-gray-500 cursor-not-allowed">
                Opiniones <span className="text-xs text-gold-400">(próximamente)</span>
              </div>
              
              <div className="block px-4 py-3 text-gray-500 cursor-not-allowed">
                Blog <span className="text-xs text-gold-400">(próximamente)</span>
              </div>
              
              <Link
                to="/contacto"
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/contacto'
                    ? 'bg-gold-400/20 text-gold-400'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;