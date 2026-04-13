import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ServiceTree from '@/components/services/ServiceTree';
import PersonasBranch from '@/components/services/PersonasBranch';
import EntidadesBranch from '@/components/services/EntidadesBranch';

const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || null);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setSelectedType(type);
    }
  }, [searchParams]);

  const handleSelectType = (type) => {
    setSelectedType(type);
    setSearchParams({ type });
  };

  return (
    <>
      <Helmet>
        <title>Servicios — AMA Consultores | Homologación de títulos, arraigo, regularización y visados Colombia</title>
        <meta name="description" content="Servicios especializados en movilidad profesional, regularización migratoria, proyectos europeos y asesoría para entidades en España y Colombia." />
        <meta property="og:title" content="Servicios — AMA Consultores" />
        <meta property="og:description" content="Especializados en migraciones internacionales para personas y entidades." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                  <Home size={16} />
                  Inicio
                </Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium">Servicios</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Nuestros Servicios
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                Especializados en migraciones internacionales y proyectos sociales para personas y entidades
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Tree or Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!selectedType ? (
              <ServiceTree 
                selectedType={selectedType} 
                onSelectType={handleSelectType} 
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <button
                  onClick={() => {
                    setSelectedType(null);
                    setSearchParams({});
                  }}
                  className="mb-8 text-gold hover:text-gold-300 transition-colors flex items-center gap-2"
                >
                  ← Volver a selección
                </button>

                {selectedType === 'personas' ? (
                  <PersonasBranch />
                ) : (
                  <EntidadesBranch />
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a]/50 to-[#1e3a5f]/50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="font-lato text-xl text-white/80">
                Cada caso es único. Contáctanos y diseñaremos una solución personalizada.
              </p>
              <p className="text-white/80">
                Para actuaciones que requieren firma letrada, coordino con mi abogado de confianza.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;