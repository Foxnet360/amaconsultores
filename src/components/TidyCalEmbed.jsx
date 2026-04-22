import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Loader2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * TidyCalEmbed - Componente para integrar TidyCal mediante iframe
 * 
 * Props:
 * - url: string - URL de TidyCal (default: "https://tidycal.com/amaconsultores")
 * - height: string - Altura del iframe (default: "800px")
 * - className: string - Clases adicionales
 */
const TidyCalEmbed = ({
  url = "https://tidycal.com/amaconsultores",
  height = "800px",
  className = "",
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="bg-navy-800 border border-red-500/30 rounded-xl p-8 text-center">
        <AlertCircle className="mx-auto text-red-400 mb-4" size={48} />
        <h3 className="text-lg font-semibold text-white mb-2">
          No se pudo cargar el calendario
        </h3>
        <p className="text-white/70 mb-6">
          Ha ocurrido un error al cargar el sistema de reservas. Por favor, contáctanos directamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900"
          >
            Intentar de nuevo
          </Button>
          <Button
            onClick={() => navigate('/contacto')}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold"
          >
            Contactar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-navy-800 flex flex-col items-center justify-center z-10 rounded-xl">
          <Loader2 className="animate-spin text-gold-400 mb-4" size={48} />
          <p className="text-white/70">Cargando calendario...</p>
        </div>
      )}
      
      <iframe
        src={url}
        width="100%"
        height={height}
        frameBorder="0"
        className="rounded-xl bg-white"
        title="Agendar asesoría con AMA Consultores"
        onLoad={handleLoad}
        onError={handleError}
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
};

export default TidyCalEmbed;