import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Shield, FileText, CreditCard, TrendingUp } from 'lucide-react';

const ConveniosSection = () => {
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const convenios = [
    {
      id: 'doble-nacionalidad',
      icon: Globe,
      title: 'Doble Nacionalidad',
      badge: 'Convenio de 1979',
      content: 'España y Colombia permiten la doble nacionalidad desde 1979. Esto significa que los colombianos que obtienen la nacionalidad española NO pierden su nacionalidad colombiana. Pueden tener ambos pasaportes y ejercer todos los derechos ciudadanos en ambos países.',
      benefits: ['Conservas tu nacionalidad colombiana', 'Dos pasaportes válidos', 'Derechos ciudadanos en ambos países', 'Facilidad de tránsito entre países']
    },
    {
      id: 'seguridad-social',
      icon: Shield,
      title: 'Seguridad Social y Pensiones',
      badge: 'Incluye CMISS 2023',
      content: 'El Convenio Internacional de Seguridad Social (CMISS) de 2023 facilita el acceso a la Seguridad Social y el cálculo de pensiones cuando has cotizado en ambos países. Los períodos cotizados en España y Colombia se suman para acceder a pensiones y prestaciones.',
      benefits: ['Suma de períodos cotizados', 'Acceso a prestaciones por desempleo', 'Cálculo proporcional de pensiones', 'Asistencia sanitaria garantizada']
    },
    {
      id: 'doble-imposicion',
      icon: CreditCard,
      title: 'Doble Imposición Fiscal',
      badge: 'Convenio vigente',
      content: 'El convenio para evitar la doble imposición fiscal garantiza que no pagues impuestos dos veces por el mismo concepto. Si resides en un país y tienes rentas en el otro, el convenio establece reglas claras sobre dónde debes tributar cada tipo de renta.',
      benefits: ['Evitas pagar impuestos dos veces', 'Certificado de residencia fiscal', 'Reglas claras de tributación', 'Protección para trabajadores desplazados']
    },
    {
      id: 'canje-permiso',
      icon: FileText,
      title: 'Canje de Permiso de Conducción',
      badge: 'Convenio vigente',
      content: 'Los conductores colombianos pueden canjear su licencia de conducir por la española sin necesidad de examen práctico ni teórico. Solo necesitan homologar su permiso colombiano en la Jefatura Provincial de Tráfico correspondiente a su domicilio.',
      benefits: ['Sin examen práctico', 'Sin examen teórico', 'Trámite administrativo sencillo', 'Validez en toda la UE']
    },
    {
      id: 'proteccion-inversiones',
      icon: TrendingUp,
      title: 'Protección Recíproca de Inversiones (APPRI)',
      badge: 'APPRI',
      content: 'El Acuerdo de Promoción y Protección Recíproca de Inversiones (APPRI) protege a los inversores españoles en Colombia y colombianos en España. Garantiza trato justo y equitativo, protección contra expropiación sin compensación y libre transferencia de capitales.',
      benefits: ['Protección contra expropiación', 'Trato justo y equitativo', 'Libre transferencia de capitales', 'Mecanismo de resolución de controversias']
    }
  ];

  return (
    <section id="convenios" className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accordions */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {convenios.map((convenio, index) => {
              const Icon = convenio.icon;
              return (
                <motion.div
                  key={convenio.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={convenio.id} className="border border-white/10 rounded-lg bg-gradient-to-br from-[#1e3a5f]/30 to-[#0f2744]/30 backdrop-blur-sm overflow-hidden hover:border-gold/30 transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-white hover:bg-white/5">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="text-gold" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-gold text-navy text-xs">{convenio.badge}</Badge>
                          </div>
                          <h3 className="font-poppins font-semibold text-lg text-white">{convenio.title}</h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6 text-white/90">
                      <div className="space-y-6">
                        <p className="text-white/80">{convenio.content}</p>
                        
                        <div>
                          <h4 className="font-poppins font-semibold text-gold mb-3">Beneficios principales:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {convenio.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/80">
                                <span className="w-2 h-2 bg-gold rounded-full shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          onClick={scrollToContacto}
                          className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                        >
                          Contáctanos para más información
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ConveniosSection;
