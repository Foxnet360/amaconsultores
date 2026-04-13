import React from 'react';
import { Badge } from '@/components/ui/badge';

/**
 * PriceTag - Componente para mostrar precios en formato badge dorado
 * 
 * Props:
 * - price: string - Precio a mostrar (ej: "380€ IVA incluido")
 * - size: 'sm' | 'md' | 'lg' - Tamaño del badge (default: 'md')
 * - className: string - Clases adicionales (opcional)
 */
const PriceTag = ({ price, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <Badge 
      className={`bg-gold-500 text-navy-900 font-bold ${sizeClasses[size]} ${className}`}
    >
      {price}
    </Badge>
  );
};

export default PriceTag;