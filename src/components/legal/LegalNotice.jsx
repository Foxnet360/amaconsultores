import React from 'react';
import { Scale, AlertTriangle, Info } from 'lucide-react';

/**
 * LegalNotice - Componente para mostrar bases normativas y notas legales
 * 
 * Props:
 * - type: 'normative' | 'disclaimer' | 'warning' | 'info' - Tipo de nota
 * - text: string - Texto a mostrar
 * - className: string - Clases adicionales (opcional)
 */
const LegalNotice = ({ type = 'info', text, className = '' }) => {
  const styles = {
    normative: {
      bg: 'bg-blue-900/30',
      border: 'border-blue-500/30',
      text: 'text-blue-200',
      icon: Scale,
    },
    disclaimer: {
      bg: 'bg-amber-900/20',
      border: 'border-amber-500/30',
      text: 'text-amber-200',
      icon: AlertTriangle,
    },
    warning: {
      bg: 'bg-red-900/20',
      border: 'border-red-500/30',
      text: 'text-red-200',
      icon: AlertTriangle,
    },
    info: {
      bg: 'bg-slate-800/50',
      border: 'border-slate-500/30',
      text: 'text-slate-200',
      icon: Info,
    },
  };

  const style = styles[type] || styles.info;
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-3 mb-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Icon className={`${style.text} flex-shrink-0 mt-0.5`} size={18} />
        <p className={`${style.text} text-sm leading-relaxed`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;