import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Scale } from 'lucide-react';
import { LegalCard, LegalNotice } from '@/components/legal';
import { 
  arraigos, 
  residenciasExcepcionales, 
  movilidadLaboral, 
  proteccionEspecial,
  nacionalidad,
  regularizacionExtraordinaria,
  disclaimerGeneral,
  notaNormativa 
} from '@/data/regularization-services';

const RegularizacionPage = () => {
  const navItems = [
    { id: 'arraigos', label: 'Bloque 1: Arraigos' },
    { id: 'residencias-excepcionales', label: 'Bloque 2: Residencias excepcionales' },
    { id: 'movilidad-laboral', label: 'Bloque 3: Movilidad laboral' },
    { id: 'proteccion-especial', label: 'Bloque 4: Protección especial' },
    { id: 'nacionalidad', label: 'Bloque 5: Nacionalidad' },
    { id: 'regularizacion-extraordinaria', label: 'Bloque 6: Regularización extraordinaria' },
  ];

  return (
    <>
      <Helmet>
        <title>Regularización Migratoria — AMA Consultores</title>
        <meta 
          name="description" 
          content="Servicios de regularización migratoria en España: arraigo social, laboral, familiar, reagrupación, nacionalidad española. Especialistas en derecho migratorio RD 1155/2024."
        />
        <link rel="canonical" href="https://amaconsultores.eu/servicios/regularizacion" />
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
                <span className="text-gold font-medium">Regularización</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                ¿Cuál es tu situación en España?
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Encuentra tu camino. Pincha en tu caso y descubre las opciones disponibles.
              </p>

              {/* Nota normativa */}
              <div className="max-w-3xl mx-auto">
                <LegalNotice 
                  type="normative" 
                  text={notaNormativa.text}
                />
              </div>
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
                    <Scale size={20} className="text-gold-400" />
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
            
            {/* BLOQUE 1 — ARRAIGOS */}
            <motion.div
              id="arraigos"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    BLOQUE 1 — ARRAIGOS
                  </h2>
                  <p className="text-gold-400 font-semibold">
                    380€ IVA incluido · tasas a cargo del cliente
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-sm mb-6">
                Base normativa: RD 1155/2024 · Instrucciones SEM 1/2025
              </p>

              <div className="space-y-6">
                {arraigos.map((servicio) => (
                  <LegalCard
                    key={servicio.id}
                    {...servicio}
                  />
                ))}
              </div>
            </motion.div>

            {/* BLOQUE 2 — RESIDENCIAS POR CIRCUNSTANCIAS EXCEPCIONALES */}
            <motion.div
              id="residencias-excepcionales"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    BLOQUE 2 — RESIDENCIAS POR CIRCUNSTANCIAS EXCEPCIONALES
                  </h2>
                  <p className="text-gold-400 font-semibold">
                    380€ IVA incluido · tasas a cargo del cliente
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {residenciasExcepcionales.map((servicio) => (
                  <LegalCard
                    key={servicio.id}
                    {...servicio}
                  />
                ))}
              </div>
            </motion.div>

            {/* BLOQUE 3 — MOVILIDAD LABORAL */}
            <motion.div
              id="movilidad-laboral"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    BLOQUE 3 — MOVILIDAD LABORAL
                  </h2>
                  <p className="text-white/80">Tasas a cargo del cliente</p>
                </div>
              </div>

              <div className="space-y-6">
                {movilidadLaboral.map((servicio) => (
                  <LegalCard
                    key={servicio.id}
                    {...servicio}
                  />
                ))}
              </div>
            </motion.div>

            {/* BLOQUE 4 — PROTECCIÓN ESPECIAL */}
            <motion.div
              id="proteccion-especial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    BLOQUE 4 — PROTECCIÓN ESPECIAL
                  </h2>
                  <p className="text-gold-400 font-semibold">
                    Sin precio · Consulta tu caso → formulario de contacto
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {proteccionEspecial.map((servicio) => (
                  <LegalCard
                    key={servicio.id}
                    {...servicio}
                  />
                ))}
              </div>
            </motion.div>

            {/* BLOQUE 5 — NACIONALIDAD */}
            <motion.div
              id="nacionalidad"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    BLOQUE 5 — NACIONALIDAD
                  </h2>
                  <p className="text-gold-400 font-semibold">
                    500€ IVA incluido · tasas + DELE + CCSE a cargo del cliente
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-sm mb-6">
                Base normativa: Art. 22 Código Civil · Convenio Madrid 27/06/1979
              </p>

              <LegalCard {...nacionalidad} />

              {/* Tabla de plazos */}
              <div className="mt-6 bg-navy-800/50 rounded-lg p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Plazos de residencia</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-navy-900/50 p-4 rounded-lg">
                    <p className="text-white/80">
                      <strong className="text-gold-400">2 años:</strong> Colombianos y resto de iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal
                    </p>
                  </div>
                  <div className="bg-navy-900/50 p-4 rounded-lg">
                    <p className="text-white/80">
                      <strong className="text-gold-400">10 años:</strong> Régimen general (resto del mundo)
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm mt-4 italic">
                  Para colombianos: doble nacionalidad expresamente garantizada — no hay que renunciar a la colombiana (Convenio Madrid 27/06/1979, BOE 25/11/1980).
                </p>
              </div>
            </motion.div>

            {/* BLOQUE 6 — REGULARIZACIÓN EXTRAORDINARIA 2026 */}
            <motion.div
              id="regularizacion-extraordinaria"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    BLOQUE 6 — REGULARIZACIÓN EXTRAORDINARIA 2026
                  </h2>
                  <p className="text-gold-400 font-semibold">
                    Novedad 2026 · Consulta tu caso → formulario de contacto
                  </p>
                </div>
              </div>

              <LegalCard {...regularizacionExtraordinaria} />
            </motion.div>

            {/* DISCLAIMER FINAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <LegalNotice 
                type="disclaimer" 
                text={disclaimerGeneral.text}
              />
            </motion.div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegularizacionPage;
