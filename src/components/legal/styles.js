/**
 * Estilos compartidos para componentes legales
 * 
 * Estos estilos mantienen consistencia visual en todo el contenido legal
 * siguiendo el esquema de colores existente del sitio.
 */

export const legalStyles = {
  // Colores del esquama
  colors: {
    primary: '#1e3a8a',      // Azul marino
    gold: '#d4af37',         // Dorado
    goldLight: '#f4d03f',    // Dorado claro
    goldDark: '#b8941f',     // Dorado oscuro
    white: '#ffffff',
    white80: 'rgba(255, 255, 255, 0.8)',
    white60: 'rgba(255, 255, 255, 0.6)',
    white40: 'rgba(255, 255, 255, 0.4)',
    white20: 'rgba(255, 255, 255, 0.2)',
    white10: 'rgba(255, 255, 255, 0.1)',
    navy800: '#1e293b',      // Navy para cards
    navy900: '#0f172a',      // Navy oscuro
  },
  
  // Bordes consistentes
  borders: {
    card: 'border border-white/10',
    cardHover: 'hover:border-gold-500/30',
    section: 'border-t border-white/10',
  },
  
  // Espaciado consistente
  spacing: {
    section: 'py-16 lg:py-20',
    card: 'p-6 lg:p-8',
    cardHeader: 'pb-4',
    cardContent: 'pt-0',
  },
  
  // Tipografía
  typography: {
    title: 'text-xl lg:text-2xl font-bold text-white',
    subtitle: 'text-base lg:text-lg text-white/80',
    body: 'text-sm lg:text-base text-white/80 leading-relaxed',
    caption: 'text-xs text-white/60',
    legal: 'text-sm text-blue-200',
  },
  
  // Layouts
  layouts: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8',
    flexBetween: 'flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4',
  },
};

// Utilidades para clases condicionales
export const cn = (...classes) => classes.filter(Boolean).join(' ');

// Clases comunes predefinidas
export const commonClasses = {
  card: `${legalStyles.borders.card} ${legalStyles.borders.cardHover} bg-navy-800 shadow-lg transition-all`,
  section: legalStyles.spacing.section,
  container: legalStyles.layouts.container,
  title: legalStyles.typography.title,
  body: legalStyles.typography.body,
};
