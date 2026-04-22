import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plane, FileCheck, Stamp, MapPin, Home, AlertCircle } from 'lucide-react';

const ColombiaSection = () => {
  const scrollToAsesoria = () => {
    const element = document.getElementById('asesoria');
    if (element) {
      const offset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const servicios = [
    {
      id: 'visados',
      icon: Plane,
      title: 'Bloque 1 — Visados para Colombia',
      badge: 'Resolución 5477/2022 de Cancillería colombiana · Decreto 1067/2015',
      hasTable: true,
      tableHeaders: ['Tipo de visa', 'Para quién'],
      tableRows: [
        ['Visa Visitante (V)', 'Estancias temporales: turismo, negocios, actividades religiosas. Máx. 2 años según subcategoría'],
        ['Visa Migrante (M)', 'Cónyuge/compañero de colombiano, pensionado, inversionista, trabajador con contrato, rentista. Hasta 3 años'],
        ['Visa Residente (R)', 'Residencia indefinida. Acceden quienes acumulan 5 años con visa Migrante, cónyuges de colombianos con 3 años de convivencia, y otros supuestos']
      ],
      cta: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
      ctaAction: 'asesoria'
    },
    {
      id: 'tramites-migracion',
      icon: FileCheck,
      title: 'Bloque 2 — Trámites ante Migración Colombia y Cancillería',
      badge: 'Migración Colombia · Ley 1465/2011 · Resolución 3167/2019',
      content: 'Con poder notarial otorgado en el país de residencia del cliente, gestionamos procedimientos ante Migración Colombia, Cancillería y otras entidades a través de nuestra red en Colombia. No es necesario desplazarse. Disponible para clientes de cualquier nacionalidad.',
      items: [
        'Solicitud y renovación de cédula de extranjería',
        'Recursos y reclamaciones ante Migración Colombia',
        'Apostillas, autenticaciones y pasaportes ante Cancillería',
        'Gestión de poderes notariales para actuaciones en Colombia',
        'Trámites empresariales: constitución de sociedades, permisos sectoriales'
      ],
      cta: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
      ctaAction: 'asesoria'
    },
    {
      id: 'apostillas',
      icon: Stamp,
      title: 'Bloque 3 — Apostillas y Legalizaciones',
      badge: 'Convenio de La Haya de 1961 · Decreto 4496/2022 (Colombia)',
      hasTable: true,
      tableHeaders: ['Tipo', 'Descripción'],
      tableRows: [
        ['Apostilla', 'Para documentos públicos de países firmantes del Convenio de La Haya. España y Colombia son partes: basta la apostilla española, sin legalización consular adicional'],
        ['Legalización consular', 'Para documentos de países no firmantes. Se tramita ante el Consulado colombiano en el país de origen'],
        ['Traducción oficial', 'Documentos en español no requieren traducción para Colombia. Otros idiomas sí requieren traducción oficial por traductor certificado']
      ],
      precio: 'Precio: Consulta tu caso — formulario de contacto',
      cta: 'Contacta con nosotros para recibir presupuesto personalizado',
      ctaAction: 'contacto'
    },
    {
      id: 'regularizacion-colombia',
      icon: MapPin,
      title: 'Bloque 4 — Regularización de Situación Migratoria en Colombia',
      badge: 'Resolución 5477/2022 · Decreto 1067/2015',
      content: 'Tener visa no equivale a estar plenamente regularizado. Asesoramos a ciudadanos de cualquier nacionalidad que se encuentran en Colombia en situación irregular o con trámites pendientes.',
      items: [
        'Regularización de situaciones migratorias irregulares',
        'Renovaciones de visa y cédula de extranjería',
        'Recursos ante resoluciones de Migración Colombia'
      ],
      cta: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
      ctaAction: 'asesoria'
    },
    {
      id: 'retorno',
      icon: Home,
      title: 'Bloque 5 — Retorno',
      badge: 'Ley 1565/2012 · Programa Colombia Nos Une — Cancillería',
      content: 'Regresar a Colombia después de años en el exterior también requiere acompañamiento. Te orientamos en la gestión documental, la homologación de títulos españoles en Colombia, y los trámites de reintegración.',
      items: [
        'Gestión y organización de documentación para el retorno',
        'Homologación de títulos españoles en Colombia',
        'Reintegración ante entidades colombianas',
        'Para hijos nacidos en España: inscripción en el Registro Civil colombiano y gestión de la doble nacionalidad'
      ],
      cta: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
      ctaAction: 'asesoria'
    }
  ];

  return (
    <section id="colombia" className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Colombia: también te acompañamos allá
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Atendemos clientes de cualquier nacionalidad con vínculos jurídicos, familiares o laborales con Colombia.
          </p>
        </motion.div>

        {/* Services Accordions */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={servicio.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={servicio.id} className="border border-white/10 rounded-lg bg-gradient-to-br from-[#1e3a5f]/30 to-[#0f2744]/30 backdrop-blur-sm overflow-hidden hover:border-gold/30 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-white hover:bg-white/5">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="text-navy" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-gold text-navy text-xs font-bold">{servicio.badge}</Badge>
                          </div>
                          <h3 className="font-poppins font-semibold text-lg text-white">{servicio.title}</h3>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6 text-white/90">
                      <div className="space-y-6">
                        {servicio.content && (
                          <p className="text-white/80">{servicio.content}</p>
                        )}

                        {servicio.hasTable && servicio.tableHeaders && servicio.tableRows && (
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-white/20">
                                  {servicio.tableHeaders.map((h, i) => (
                                    <th key={i} className="text-left py-3 px-4 font-semibold text-gold">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="text-white/90">
                                {servicio.tableRows.map((row, ridx) => (
                                  <tr key={ridx} className="border-b border-white/10">
                                    {row.map((cell, cidx) => (
                                      <td key={cidx} className="py-3 px-4">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {servicio.items && servicio.items.length > 0 && (
                          <ul className="space-y-2 text-white/90">
                            {servicio.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-gold mt-1">★</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {servicio.precio && (
                          <p className="text-gold font-semibold">{servicio.precio}</p>
                        )}

                        <Button
                          onClick={servicio.ctaAction === 'asesoria' ? scrollToAsesoria : scrollToContacto}
                          className="bg-gold hover:bg-gold-dark text-navy font-semibold mt-4"
                        >
                          {servicio.cta}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto p-6 bg-white/10 border border-white/20 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="text-gold-400 shrink-0 mt-0.5" size={20} />
          <p className="text-white/80 text-sm">
            AMA Consultores opera en materia de derecho colombiano en calidad de consultora jurídica. Para actuaciones procesales en Colombia coordinamos con abogados colegiados en ejercicio en el territorio colombiano.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ColombiaSection;
