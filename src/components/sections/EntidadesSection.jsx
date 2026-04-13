import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import { Globe, ClipboardCheck, Building2, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const EntidadesSection = () => {
  const scrollToContacto = () => {
    // Navigate to contact form with entity mode parameter
    window.location.href = '/#contacto?mode=entidades';
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
      title: 'Contratación Internacional desde Colombia — Gestión Integral',
      badge: 'Ley 14/2013 · RD 1155/2024 · Arts. 71 y ss. LOEx · Catálogo SEPE',
      content: 'Servicio integral de selección y contratación de talento colombiano para empresas españolas. Incluye: preselección en origen, entrevistas, verificación de documentación, tramitación de visados y residencias, y acompañamiento post-llegada.',
      fases: [
        'Diagnóstico: Análisis de necesidades y perfil requerido',
        'Selección: Preselección en Colombia y entrevistas finales',
        'Tramitación: Gestión completa de documentación migratoria',
        'Incorporación: Acompañamiento en la llegada e integración'
      ],
      perfiles: ['Personal de hogar', 'Empleados de construcción', 'Personal de hostelería', 'Cuidadores', 'Otros sectores con escasez']
    },
    {
      id: 'porque-colombia',
      title: '¿Por qué contratar talento colombiano?',
      content: 'Colombia ofrece ventajas únicas para la contratación internacional: Convenio de Doble Nacionalidad que facilita la integración, equipo de AMA en origen que garantiza selección de calidad, adaptación cultural al idioma español, y experiencia contrastada en gestión de movilidad España-Colombia.',
      ventajas: [
        'Idioma español: Sin barrera idiomática',
        'Doble nacionalidad: Facilita la integración y permanencia',
        'Equipo en origen: Preselección de calidad en Colombia',
        'Experiencia: Más de 10 años en movilidad entre ambos países'
      ]
    },
    {
      id: 'costes',
      title: '¿Cuánto cuesta y quién paga qué?',
      content: 'Nuestra tarifa es transparente y competitiva. El pago se realiza por fases según avance del proceso, y las tasas oficiales son siempre a cargo de la empresa contratante.',
      tabla: [
        { servicio: 'Selección completa (4 fases)', precio: 'Desde 1.800 €' },
        { servicio: 'Gestión trabajador (individual)', precio: '500 €' },
        { servicio: 'Consulta diagnóstico inicial', precio: '300 €' },
        { servicio: 'Tasas oficiales (visados, etc.)', precio: 'A cargo de la empresa' }
      ]
    },
    {
      id: 'legalidad',
      title: '¿Es legal? ¿Qué garantías tiene el proceso?',
      content: 'El proceso es completamente legal. AMA Consultores opera como consultora jurídica (CNAE 7499). La empresa contrata directamente al trabajador, siendo AMA el intermediario en la gestión documental y migratoria. Todas las contrataciones se realizan bajo la normativa vigente: Ley 14/2013, RD 1155/2024, Arts. 71 y ss. LOEx, y Catálogo de ocupaciones difíciles de cubrir del SEPE.',
      garantias: [
        'Transparencia total en costes y procesos',
        'Cumplimiento estricto de la normativa vigente',
        'Contrato directo entre empresa y trabajador',
        'Seguimiento post-incorporación',
        'Responsabilidad civil profesional'
      ]
    },
    {
      id: 'proyectos-europeos',
      title: 'Proyectos con Financiación Pública y Europea',
      content: 'Experiencia sólida en gestión de proyectos europeos y públicos. La fundadora, Ángela Morales, cuenta con más de 10 años de experiencia gestionando proyectos hasta 2M€ con fondos FAMI, FSE+ y organizaciones internacionales como Save the Children.',
      experiencia: [
        'Save the Children España: Programa IMPULSA-CPI (+2M€)',
        'Fondos FAMI y FSE+: Gestión y justificación',
        'Proyecto "Formar para Cuidar" Colombia: Cooperación MAEC/UE',
        'Alianzas con ONGs y entidades públicas'
      ]
    },
    {
      id: 'tercer-sector',
      title: 'Consultoría para el Tercer Sector',
      content: 'Apoyo especializado a ONGs y entidades sociales que trabajan con población migrante. Diseñamos protocolos de atención, formamos equipos técnicos, y facilitamos alianzas estratégicas entre entidades colombianas y españolas para proyectos de cooperación.',
      servicios: [
        'Diseño de protocolos de atención a personas en situación de vulnerabilidad',
        'Formación técnica en derecho migratorio y protección internacional',
        'Facilitación de alianzas España-Colombia',
        'Apoyo en formulación de proyectos europeos'
      ]
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
                      <p>{servicio.content}</p>
                      
                      {servicio.fases && (
                        <div>
                          <h4 className="font-poppins font-semibold text-gold mb-3">Las 4 fases del proceso:</h4>
                          <ul className="space-y-2">
                            {servicio.fases.map((fase, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-gold font-bold">{idx + 1}.</span>
                                {fase}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <p className="text-sm text-white/80">Perfiles habituales: {servicio.perfiles.join(', ')}</p>
                          </div>
                        </div>
                      )}
                      
                      {servicio.ventajas && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {servicio.ventajas.map((ventaja, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-gold shrink-0" size={18} />
                              <span className="text-sm">{ventaja}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {servicio.tabla && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-white/20">
                                <th className="text-left py-2">Servicio</th>
                                <th className="text-right py-2">Precio</th>
                              </tr>
                            </thead>
                            <tbody>
                              {servicio.tabla.map((row, idx) => (
                                <tr key={idx} className="border-b border-white/10">
                                  <td className="py-2">{row.servicio}</td>
                                  <td className="text-right py-2 font-semibold text-gold">{row.precio}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      
                      {servicio.garantias && (
                        <ul className="space-y-2">
                          {servicio.garantias.map((garantia, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Shield className="text-gold shrink-0" size={18} />
                              {garantia}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {servicio.experiencia && (
                        <ul className="space-y-2">
                          {servicio.experiencia.map((exp, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <TrendingUp className="text-gold shrink-0" size={18} />
                              {exp}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {servicio.servicios && (
                        <ul className="space-y-2">
                          {servicio.servicios.map((srv, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-gold shrink-0" size={18} />
                              {srv}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <Button 
                        onClick={scrollToContacto}
                        className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                      >
                        Solicitar información/propuesta
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
