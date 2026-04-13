import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items, className = '' }) => {
  const location = useLocation();
  
  // Estructura de navegación predefinida
  const defaultPaths = {
    '/servicios': { label: 'Servicios', parent: '/' },
    '/servicios/regularizacion': { label: 'Regularización', parent: '/servicios' },
    '/servicios/movilidad': { label: 'Movilidad Profesional', parent: '/servicios' },
    '/servicios/convenios': { label: 'Convenios', parent: '/servicios' },
    '/servicios/colombia': { label: 'Trámites en Colombia', parent: '/servicios' },
    '/servicios/empresas': { label: 'Para Empresas', parent: '/servicios' },
    '/equipo': { label: 'Quiénes Somos', parent: '/' },
    '/blog': { label: 'Blog', parent: '/' },
    '/contacto': { label: 'Contacto', parent: '/' },
    '/precios': { label: 'Precios', parent: '/' },
  };

  // Si se pasan items personalizados, usarlos
  if (items && items.length > 0) {
    return (
      <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight size={16} className="text-white/40" />}
            {item.href ? (
              <Link 
                to={item.href} 
                className="text-white/70 hover:text-gold transition-colors flex items-center gap-1"
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </Link>
            ) : (
              <span className="text-gold font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }

  // Generar breadcrumb automáticamente basado en la ruta actual
  const currentPath = location.pathname;
  const pathInfo = defaultPaths[currentPath];
  
  if (!pathInfo) return null;

  const breadcrumbItems = [
    { label: 'Inicio', href: '/', icon: <Home size={16} /> },
  ];

  // Agregar padre si existe
  if (pathInfo.parent && pathInfo.parent !== '/') {
    const parentInfo = defaultPaths[pathInfo.parent];
    if (parentInfo) {
      breadcrumbItems.push({ 
        label: parentInfo.label, 
        href: pathInfo.parent 
      });
    }
  }

  // Agregar página actual
  breadcrumbItems.push({ 
    label: pathInfo.label, 
    href: null 
  });

  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} className="text-white/40" />}
          {item.href ? (
            <Link 
              to={item.href} 
              className="text-white/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              {item.icon}
              {!item.icon && item.label}
            </Link>
          ) : (
            <span className="text-gold font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;