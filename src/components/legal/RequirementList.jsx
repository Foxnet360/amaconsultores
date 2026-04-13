import React from 'react';
import { Star } from 'lucide-react';

/**
 * RequirementList - Componente para mostrar lista de requisitos con símbolos ★
 * 
 * Props:
 * - items: string[] - Array de requisitos
 * - className: string - Clases adicionales (opcional)
 */
const RequirementList = ({ items, className = '' }) => {
  if (!items || items.length === 0) return null;

  return (
    <ol className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
        >
          <Star 
            className="text-gold-400 flex-shrink-0 mt-1" 
            size={14} 
            fill="#d4af37"
          />
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
};

export default RequirementList;