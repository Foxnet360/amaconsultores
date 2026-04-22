import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import { Globe, ClipboardCheck, Building2 } from 'lucide-react';

const EntidadesSection = () => {
  const navigate = useNavigate();
  const scrollToContacto = () => {
    navigate('/contacto?mode=entidades');
  };

  const features = [
    {
      icon: Globe,
      title: 'Equipo en Colombia',
      description: 'Preseleccionamos perfiles directamente en origen'
    },
    {
      icon: ClipboardCheck,
      title: 'Gestión integral',
      description: 'Documentación migratoria completa en España y Colombia'
    },
    {
      icon: Building2,
      title: 'Proyectos europeos',
      description: 'Más de 10 años gestionando proyectos hasta 2M€ con FAMI, FSE+ y Save the Children'
    }
  ];

  const servicios = [
    {
      id: 'contratacion',
      title: 'Bloque 1 — Contratación Internacional desde Colombia',
      badge: 'LOEx art. 36 y ss. · RD 1155/2024 arts. 37-64 · Catálogo SEPE',
      content: 'Contrata en Colombia. Nosotros gestionamos todo. Desde la búsqueda del perfil hasta el primer día de trabajo en España. Un solo interlocutor para todo el proceso. Contamos con red estable en Colombia para identificar y preseleccionar candidatos cualificados.',
      items: [
        'Diagnóstico: análisis del puesto, verificación en el Catálogo SEPE, evaluación de requisitos migratorios y laborales',
        'Búsqueda y selección en Colombia: identificación de perfiles, verificación de titulaciones y experiencia',
        'Tramitación: autorización ante SEPE y Extranjería + visado en el Consulado español en Colombia',
        'Acompañamiento en destino: recepción en España, TIE, NIE y trámites de incorporación'
      ],
      precios: [
        'Precio empresa: presupuesto personalizado. El trabajador NUNCA paga por ser seleccionado.',
        'Precio trabajador en destino (TIE y trámites): 500€ IVA incluido'
      ],
      cta: '¿Necesitas incorporar talento colombiano? Cuéntanos tu caso — te enviamos propuesta'
    },
    {
      id: 'porque-colombia',
      title: 'Bloque 2 — ¿Por qué contratar talento colombiano?',
      content: 'Colombia tiene una de las poblaciones más formadas de América Latina, con profesionales cualificados en sectores donde España acredita escasez real incluidos en el Catálogo SEPE.',
      items: [
        'Sanidad: médicos, enfermeros, fisioterapeutas, auxiliares de clínica',
        'Construcción y obra civil: topógrafos, aparejadores, técnicos de obra',
        'Agricultura y ganadería: técnicos agrícolas, operarios especializados',
        'Hostelería: cocineros, jefes de sala, personal especializado',
        'Logística y transporte: conductores de larga distancia, operadores de maquinaria'
      ],
      cta: '¿Tu sector está en la lista? Cuéntanos tu caso — te enviamos propuesta'
    },
    {
      id: 'costes',
      title: 'Bloque 3 — ¿Cuánto cuesta y quién paga qué?',
      content: 'La empresa paga: gestión integral del proceso (presupuesto personalizado) + tasas oficiales ante SEPE y Extranjería. El trabajador NUNCA paga por ser seleccionado. El trabajador paga una vez en España: tramitación de la TIE y trámites de incorporación → 500€ IVA incluido.',
      cta: '¿Quieres saber el coste para tu empresa? Cuéntanos tu caso — te enviamos propuesta'
    },
    {
      id: 'legalidad',
      title: 'Bloque 4 — ¿Es legal? ¿Qué garantías tiene el proceso?',
      content: 'Sí, completamente. El proceso está regulado por la LOEx y el RD 1155/2024. Es el cauce ordinario para la contratación de trabajadores extranjeros.',
      items: [
        'El trabajador llega con autorización de residencia y trabajo válida en toda España',
        'El proceso pasa por organismos oficiales: SEPE, Oficina de Extranjería y Consulado español en Colombia',
        'AMA Consultores acompaña el proceso de principio a fin con pleno conocimiento de ambos sistemas'
      ],
      cta: '¿Tienes dudas sobre la viabilidad legal? Cuéntanos tu caso — te enviamos propuesta'
    },
    {
      id: 'proyectos-europeos',
      title: 'Bloque 5 — Proyectos con Financiación Pública y Europea',
      content: 'Más de 10 años gestionando proyectos sociales hasta 2M€. Desde la formulación hasta la justificación final.',
      items: [
        'FAMI (Fondo de Asilo, Migración e Integración)',
        'FSE+ (Fondo Social Europeo Plus)',
        'Next Generation EU',
        'AECID y Ministerio de Cooperación Internacional',
        'IRPF 0,7% nacional y autonómico',
        'Fondos privados: CPI, fundaciones empresariales y convocatorias de RSC'
      ],
      footer: 'Servicios: identificación de convocatorias · formulación técnica · presupuesto · seguimiento · justificación · informes y memorias',
      cta: 'Solicitar información — formulario de contacto'
    },
    {
      id: 'tercer-sector',
      title: 'Bloque 6 — Consultoría para el Tercer Sector',
      content: 'Apoyo estratégico a organizaciones que trabajan con población migrante o en situación de vulnerabilidad.',
      items: [
        'Diagnóstico organizacional en materia de atención a población migrante',
        'Diseño de programas de intervención social basados en evidencia',
        'Formación de equipos en normativa migratoria y derechos de las personas migrantes',
        'Consultoría estratégica: planificación, alianzas y posicionamiento institucional'
      ],
      cta: 'Solicitar información — formulario de contacto'
    }
  ];

  return (
    <section id="entidades" className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PDF Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <PDFDownloadButton />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Para empresas, ONGs y entidades públicas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Soluciones especializadas para organizaciones que trabajan con población migrante, que necesitan incorporar talento internacional, o que gestionan proyectos sociales y europeos.
          </p>
          <div className="inline-block bg-navy-800 border border-gold-500/30 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-300">
              La contratación de talento colombiano en España no es solo un proceso administrativo — es migración regular, ordenada y segura. En AMA Consultores creemos que la cooperación bilateral entre España y Colombia es la herramienta más efectiva para que las personas migren con derechos, las empresas encuentren el talento que necesitan y los países se beneficien mutuamente. Trabajamos desde ese convencimiento.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-gold" size={32} />
                </div>
                <h3 className="font-poppins text-xl font-bold mb-3">{feature.title}</h3>
                <p className="font-lato text-white/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-navy-900/60 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-white/90 text-sm">Esta sección NO tiene precio fijo. Los CTAs llevan al formulario de contacto.</p>
          </div>
        </div>

        {/* Services Accordions */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={servicio.id} className="border border-white/10 rounded-lg bg-gradient-to-br from-[#1e3a5f]/30 to-[#0f2744]/30 backdrop-blur-sm overflow-hidden hover:border-gold/30 transition-all duration-300">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-white hover:bg-white/5">
                    <div className="text-left">
                      {servicio.badge && (
                        <Badge className="bg-gold text-navy text-xs mb-2">{servicio.badge}</Badge>
                      )}
                      <h3 className="font-poppins font-semibold text-lg">{servicio.title}</h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 text-white/90">
                    <div className="space-y-6">
                      <p className="text-white/80">{servicio.content}</p>

                      {servicio.items && servicio.items.length > 0 && (
                        <ul className="space-y-2">
                          {servicio.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-gold mt-1">★</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {servicio.precios && servicio.precios.length > 0 && (
                        <div className="bg-navy-900/40 border border-white/10 rounded-lg p-4">
                          {servicio.precios.map((p, idx) => (
                            <p key={idx} className="text-white/90 text-sm">{p}</p>
                          ))}
                        </div>
                      )}

                      {servicio.footer && (
                        <p className="text-white/80 text-sm">{servicio.footer}</p>
                      )}

                      <Button
                        onClick={scrollToContacto}
                        className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                      >
                        {servicio.cta}
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EntidadesSection;
