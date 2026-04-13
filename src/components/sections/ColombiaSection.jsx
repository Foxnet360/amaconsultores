import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, FileCheck, Stamp, Home, Plane, AlertCircle } from 'lucide-react';

const ColombiaSection = () => {
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
      title: 'Visados para Colombia',
      badge: 'Migración Colombia',
      content: 'Asesoramos a extranjeros de cualquier nacionalidad que desean obtener visado para residir, trabajar o estudiar en Colombia. Gestionamos: Visado de Visitante, Visado de Residente (R), Visado de Trabajador, Visado de Estudiante, y Visados especiales para nómadas digitales.',
      docs: ['Pasaporte válido', 'Documento que acredite el vínculo con Colombia', 'Certificado de antecedentes penales apostillado']
    },
    {
      id: 'tramites-migracion',
      icon: FileCheck,
      title: 'Trámites ante Migración Colombia',
      badge: 'Servicio completo',
      content: 'Realizamos todos los trámites ante Migración Colombia: registro de visa, cédula de extranjería, prórrogas, cambio de categoría migratoria, certificados de movimientos migratorios, y salvoconductos. Te acompañamos durante todo el proceso.',
      docs: ['Documento de identidad válido', 'Formularios específicos según trámite', 'Pago de tasas administrativas']
    },
    {
      id: 'apostillas',
      icon: Stamp,
      title: 'Apostillas y Legalizaciones',
      badge: '20 €',
      content: 'Gestionamos la apostilla de documentos españoles para que tengan validez legal en Colombia (y viceversa). Incluye: apostilla de La Haya para partidas de nacimiento, matrimonio, estudios, antecedentes penales, poderes notariales y cualquier documento público.',
      docs: ['Documento original', 'Identificación del solicitante'], 
      note: 'Precio: 20€ por documento (IVA incluido)'
    },
    {
      id: 'regularizacion-colombia',
      icon: MapPin,
      title: 'Regularización de Situación Migratoria en Colombia',
      badge: 'Urgente',
      content: '¿Estás en Colombia con situación migratoria irregular? Te asesoramos sobre las opciones de regularización disponibles según tu caso particular: Permiso Especial de Permanencia (PEP), salvoconducto de salida voluntaria, o ajuste de estatus si cumples los requisitos.',
      docs: ['Documento de identidad', 'Justificación de permanencia', 'Certificado de antecedentes']
    },
    {
      id: 'retorno',
      icon: Home,
      title: 'Retorno (colombianos que regresan)',
      badge: 'Programa especial',
      content: 'Programa especial para colombianos que regresan al país tras vivir en el exterior. Te ayudamos con: inscripción en el Registro de Colombianos en el Exterior (RCE), recuperación de derechos ciudadanos, homologación de estudios realizados en España, y asesoría en la reconstrucción de vida laboral en Colombia.',
      docs: ['Pasaporte colombiano', 'Documentos de residencia en España', 'Certificados de estudios o trabajo']
    }
  ];

  return (
    <section id="colombia" className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <p>{servicio.content}</p>
                        
                        <div>
                          <h4 className="font-poppins font-semibold text-gold mb-3">Documentos requeridos:</h4>
                          <ul className="space-y-2 text-white/90">
                            {servicio.docs.map((doc, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {servicio.note && (
                          <p className="text-gold font-semibold bg-[#1e3a5f]/50 px-3 py-2 rounded-lg inline-block">{servicio.note}</p>
                        )}
                        
                        <Button 
                          onClick={scrollToContacto}
                          className="bg-gold hover:bg-gold-dark text-navy font-semibold mt-4"
                        >
                          Contáctanos
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
            <strong>Nota legal:</strong> AMA opera en derecho colombiano como consultora jurídica. 
            Para actuaciones procesales en Colombia (demandas, recursos, etc.), coordinamos con 
            abogados colegiados en ejercicio en el territorio colombiano.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ColombiaSection;
