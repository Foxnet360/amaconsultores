import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, GraduationCap, Briefcase, Globe } from 'lucide-react';
import { LegalCard, LegalNotice } from '@/components/legal';
import { 
  homologacion, 
  orientacionLaboral, 
  nomadaDigital 
} from '@/data/mobility-services';
import { Button } from '@/components/ui/button';

const MovilidadPage = () => {
  const navItems = [
    { id: 'homologacion', label: 'Bloque 1: Homologación de títulos' },
    { id: 'orientacion-laboral', label: 'Bloque 2: Orientación laboral' },
    { id: 'nomada-digital', label: 'Bloque 3: Nómada digital' },
  ];

  return (
    <>
      <Helmet>
        <title>Movilidad Profesional — AMA Consultores</title>
        <meta 
          name="description" 
          content="Homologación de títulos, reconocimiento de cualificaciones, visado de nómada digital y orientación laboral en España. Especialistas en movilidad profesional internacional."
        />
        <link rel="canonical" href="https://amaconsultores.eu/servicios/movilidad" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        {/* Hero con degradado */}
        <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744]">
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
                <Link to="/servicios" className="hover:text-gold transition-colors">Servicios</Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium">Movilidad Profesional</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                Movilidad Profesional
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                Impulsa tu carrera en España. Te acompañamos en la homologación de títulos y el acceso al empleo cualificado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sticky Navigation Sidebar */}
              <aside className="lg:w-64 lg:flex-shrink-0">
                <nav className="lg:sticky lg:top-24 bg-navy-800/50 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-gold-400" />
                    Índice de contenidos
                  </h3>
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-white/70 hover:text-gold-400 text-sm block py-1 transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Main Content */}
              <div className="flex-1 max-w-5xl">
            
            {/* Bloque 1 — Homologación y Equivalencia de Títulos */}
            <motion.div
              id="homologacion"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Bloque 1 — Homologación y Equivalencia de Títulos
                  </h2>
                  <p className="text-white/80 text-sm">
                    Base normativa: {homologacion.baseNormativa}
                  </p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {homologacion.description}
              </p>

              {/* Opciones de homologación */}
              <div className="space-y-4 mb-8">
                {homologacion.options.map((option, idx) => (
                  <div 
                    key={idx}
                    className="bg-navy-800 border border-white/10 rounded-lg p-6 hover:border-gold-500/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {option.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-3">
                          {option.description}
                        </p>
                        {option.important && (
                          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mb-3">
                            <p className="text-amber-200 text-sm">
                              {option.important}
                            </p>
                          </div>
                        )}
                      </div>
                      {option.price && (
                        <span className="text-gold-400 font-bold whitespace-nowrap">
                          {option.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabla de precios */}
              <div className="bg-navy-800/50 rounded-lg border border-white/10 overflow-hidden mb-6">
                <div className="bg-gold-500/20 px-6 py-3 border-b border-white/10">
                  <h4 className="text-white font-semibold">Tarifas de homologación</h4>
                </div>
                <div className="divide-y divide-white/10">
                  {homologacion.prices.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-6 py-4">
                      <span className="text-white/80">{item.service}</span>
                      <span className="text-gold-400 font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nota importante */}
              <LegalNotice 
                type="info" 
                text={homologacion.note}
              />

              {/* CTA */}
              <div className="mt-6">
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
                <p className="text-white/50 text-xs mt-2">
                  La asesoría inicial se descuenta del total si continúas
                </p>
              </div>
            </motion.div>

            {/* Bloque 2 — Orientación Laboral */}
            <motion.div
              id="orientacion-laboral"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Bloque 2 — Orientación Laboral y Acceso a Empleo Cualificado
                  </h2>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {orientacionLaboral.description}
              </p>

              {/* Fases */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {orientacionLaboral.phases.map((phase, idx) => (
                  <div 
                    key={idx}
                    className="bg-navy-800 border border-white/10 rounded-lg p-6 hover:border-gold-500/30 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>

              <LegalNotice 
                type="info" 
                text={orientacionLaboral.note}
              />

              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <span className="text-gold-400 font-semibold">
                  Precio: {orientacionLaboral.price}
                </span>
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Bloque 3 — Visado de Nómada Digital */}
            <motion.div
              id="nomada-digital"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Bloque 3 — Visado de Nómada Digital
                  </h2>
                  <p className="text-white/80 text-sm">
                    Base normativa: {nomadaDigital.baseNormativa}
                  </p>
                </div>
              </div>

              <LegalCard {...nomadaDigital} />

              {/* Ventaja fiscal Ley Beckham */}
              <div className="mt-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-green-400 font-bold text-lg mb-2">
                  {nomadaDigital.ventajaFiscal.title}
                </h4>
                <p className="text-white/80">
                  {nomadaDigital.ventajaFiscal.description}
                </p>
              </div>
            </motion.div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovilidadPage;