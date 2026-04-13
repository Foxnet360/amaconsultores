import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import LegalNotice from './LegalNotice';
import RequirementList from './RequirementList';
import PriceTag from './PriceTag';

/**
 * LegalCard - Componente principal para mostrar servicios legales
 * 
 * Props:
 * - title: string - Título del servicio
 * - article: string - Artículo legal (ej: "art. 127.a")
 * - baseNormativa: string - Base normativa (ej: "RD 1155/2024")
 * - price: string - Precio del servicio (ej: "380€ IVA incluido")
 * - description: string - Descripción del servicio
 * - requirements: string[] - Lista de requisitos
 * - duration: string - Duración de la autorización
 * - notes: string - Notas adicionales (opcional)
 * - showCTA: boolean - Mostrar botón de CTA (default: true)
 * - ctaText: string - Texto del CTA (default: "Agenda tu asesoría — 50€")
 */
const LegalCard = ({
  title,
  article,
  baseNormativa,
  price,
  description,
  requirements,
  duration,
  notes,
  showCTA = true,
  ctaText = "Agenda tu asesoría — 50€",
}) => {
  return (
    <Card className="bg-navy-800 shadow-lg border border-white/10 mb-6 hover:border-gold-500/30 transition-all">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">
              {title}
              {article && (
                <span className="text-gold-400 font-normal ml-2 text-base">
                  ({article})
                </span>
              )}
            </h3>
            {baseNormativa && (
              <LegalNotice type="normative" text={baseNormativa} />
            )}
          </div>
          {price && <PriceTag price={price} />}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-white/80 mb-4 leading-relaxed">
          {description}
        </p>
        
        {requirements && requirements.length > 0 && (
          <div className="mb-4">
            <RequirementList items={requirements} />
          </div>
        )}
        
        {duration && (
          <p className="text-gold-400 text-sm mb-4 font-medium">
            {duration}
          </p>
        )}
        
        {notes && (
          <p className="text-white/80 text-sm italic mb-4">
            {notes}
          </p>
        )}
        
        {showCTA && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <Link to="/contacto">
              <Button 
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {ctaText}
              </Button>
            </Link>
            <p className="text-white/50 text-xs mt-2">
              La asesoría inicial de 50€ se descuenta del total si decides continuar tu proceso con nosotros.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LegalCard;