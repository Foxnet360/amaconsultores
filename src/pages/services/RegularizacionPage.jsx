import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Scale, Star, X, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
                    Base normativa: Real Decreto de 14 de abril de 2026 · BOE 15 de abril de 2026 · En vigor desde el 16 de abril
                  </p>
                </div>
              </div>

              <Card className="bg-navy-800 shadow-lg border border-white/10 mb-6 hover:border-gold-500/30 transition-all">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">
                          Regularización Extraordinaria 2026
                        </h3>
                        <Badge variant="secondary" className="bg-gold-500 text-navy-900 font-bold">
                          NOVEDAD ABRIL 2026
                        </Badge>
                      </div>
                    </div>
                    <span className="text-gold-400 font-semibold text-sm whitespace-nowrap">
                      Consulta tu caso → formulario de contacto
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Proceso excepcional y de plazo limitado para personas en situación irregular que llevan años construyendo su vida en España. El plazo de solicitud cierra el 30 de junio de 2026.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">¿Quién puede acogerse?</h4>
                    <ol className="space-y-2">
                      {[
                        'Estar en España antes del 1 de enero de 2026',
                        'Permanencia ininterrumpida de al menos 5 meses en el momento de la solicitud (sin haber salido de España en ese período)',
                        'No tener antecedentes penales ni suponer amenaza para el orden o la seguridad pública',
                        'Haber trabajado al menos 90 días, o tener contrato de trabajo',
                        'No tener en trámite ninguna otra solicitud de residencia, renovación o modificación',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                          <Star className="text-gold-400 flex-shrink-0 mt-1" size={14} fill="#d4af37" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">¿Quién NO puede acogerse?</h4>
                    <ol className="space-y-2">
                      {[
                        'Personas con estancia o residencia en vigor (estudiantes, no lucrativa, búsqueda de empleo)',
                        'Personas con un procedimiento de residencia activo (arraigo en trámite, renovación pendiente...)',
                        'Personas con orden de expulsión en vigor',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                          <X className="text-red-400 flex-shrink-0 mt-1" size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Efectos:</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-2">
                      La admisión a trámite habilita para trabajar provisionalmente en cualquier sector y lugar de España. La resolución favorable concede residencia de 1 año, tras la cual la persona se incorpora a las figuras ordinarias del Reglamento.
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Para hijos menores presentes en España: autorización de residencia de 5 años.
                    </p>
                  </div>
                  <p className="text-gold-400 text-sm mb-6 font-medium">
                    Cada caso tiene particularidades. Analiza tu situación con nosotros antes de presentar la solicitud.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <Link to="/contacto">
                      <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                        <Calendar className="mr-2 h-4 w-4" />
                        Consulta tu caso → formulario de contacto
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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
