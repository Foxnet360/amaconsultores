import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Shield, FileText, CreditCard, TrendingUp } from 'lucide-react';

const ConveniosSection = () => {
  const scrollToAsesoria = () => {
    const element = document.getElementById('asesoria');
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
      title: 'Bloque 1 — Doble Nacionalidad',
      badge: 'Convenio Madrid 27/06/1979 (BOE 25/11/1980)',
      content: 'Colombia y España tienen uno de los convenios de doble nacionalidad más antiguos de América Latina. Un colombiano que adquiere la nacionalidad española no tiene que renunciar a su nacionalidad colombiana — ambas coexisten de forma plena y legal.',
      items: [
        'Solo 2 años de residencia legal para colombianos (vs 10 años del régimen general)',
        'La doble nacionalidad está expresamente garantizada por tratado internacional',
        'Regla de territorialidad: en España se aplica la ley española; en Colombia, la colombiana',
        'Los hijos nacidos en España de padres colombianos pueden tener ambas nacionalidades desde el nacimiento si se inscribe correctamente en el Registro Civil y en el Consulado colombiano'
      ],
      cta: '¿Quieres conservar tu colombianidad al naturalizarte? Agenda tu asesoría — 50€'
    },
    {
      id: 'seguridad-social',
      icon: Shield,
      title: 'Bloque 2 — Seguridad Social y Pensiones',
      badge: 'Convenio Bogotá 06/09/2005 (BOE 57/2008) + CMISS desde 01/08/2023',
      content: 'Permite totalizar los periodos cotizados en Colombia y en España para acceder a prestaciones de jubilación, incapacidad permanente y muerte y supervivencia.',
      items: [
        'Los años cotizados en ambos países se suman para el cálculo de la pensión',
        'El CMISS (en vigor para Colombia desde 01/08/2023) es aplicable a cualquier persona independientemente de su nacionalidad — es más favorable que el convenio bilateral',
        'Cualquier solicitud de prestación bajo una legislación se considera solicitud también bajo la otra si el interesado lo manifiesta expresamente'
      ],
      cta: '¿Tienes años cotizados en Colombia? No los pierdas — Agenda tu asesoría — 50€'
    },
    {
      id: 'doble-imposicion',
      icon: CreditCard,
      title: 'Bloque 3 — Doble Imposición Fiscal',
      badge: 'Convenio Bogotá 31/03/2005 (BOE 260/2008) · Ley colombiana 1082/2006',
      content: 'Sin este convenio, una persona con ingresos en ambos países podría pagar impuestos dos veces. El convenio establece reglas claras de atribución fiscal.',
      hasSubitems: true,
      subitemsTitle: 'Casos prácticos:',
      items: [
        'Nómadas digitales con clientes en Colombia residentes en España',
        'Personas con inmuebles en Colombia que perciben rentas de arrendamiento',
        'Autónomos colombianos dados de alta en España con contratos en Colombia',
        'Colombianos con pensión en Colombia que residen en España'
      ],
      footer: 'Este convenio interactúa directamente con el régimen fiscal especial del visado de nómada digital (art. 93 LIRPF). La planificación fiscal binacional requiere asesoría especializada.',
      cta: '¿Tienes ingresos en Colombia y vives en España? Agenda tu asesoría — 50€'
    },
    {
      id: 'canje-permiso',
      icon: FileText,
      title: 'Bloque 4 — Canje de Permiso de Conducción',
      badge: 'Canje de Notas 30-31/07/2003 (BOE 232/2003) · Restablecido 24/11/2010',
      content: 'Los colombianos residentes en España pueden canjear el carnet colombiano por el español sin realizar pruebas teóricas ni prácticas.',
      items: [
        'EXCEPCIÓN: Para categorías C, C+E y D (camiones y autobuses) sí se exige prueba de conocimientos técnicos y de circulación',
        'La fecha de expedición del permiso colombiano es determinante — cada caso debe analizarse individualmente'
      ],
      cta: '¿Quieres canjear tu licencia colombiana? Agenda tu asesoría — 50€'
    },
    {
      id: 'proteccion-inversiones',
      icon: TrendingUp,
      title: 'Bloque 5 — Protección Recíproca de Inversiones (APPRI)',
      badge: 'Suscrito 16/09/2021',
      content: '¿Tienes una empresa, una propiedad o dinero invertido en Colombia mientras vives en España? Este tratado te protege.',
      items: [
        'Garantiza un marco de seguridad jurídica cuando los inversores de cada país operan en el otro. Protege frente a expropiaciones arbitrarias y habilita mecanismos de resolución de controversias. La combinación APPRI + CDI forma un escudo jurídico-fiscal bilateral que muy pocas personas conocen.'
      ],
      cta: '¿Tienes negocios o propiedades en Colombia mientras resides en España? Agenda tu asesoría — 50€'
    }
  ];

  return (
    <section id="convenios" className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            España y Colombia: lo que los tratados internacionales te garantizan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Dos países, un marco legal que protege tus derechos. Conoce los acuerdos que te benefician directamente.
          </p>
          <div className="inline-block bg-navy-800 border border-gold-500/30 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-300">
              Sección diferenciadora de AMA Consultores. Pocas consultoras comunican estos tratados con rigor. CTA al final de cada bloque: Agenda tu asesoría 50€.
            </p>
          </div>
        </motion.div>

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

                        {convenio.hasSubitems && convenio.subitemsTitle && (
                          <p className="text-white font-medium">{convenio.subitemsTitle}</p>
                        )}

                        <ul className="grid grid-cols-1 gap-2">
                          {convenio.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/80">
                              <span className="text-gold mt-1">★</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {convenio.footer && (
                          <p className="text-white/80 text-sm">{convenio.footer}</p>
                        )}

                        <Button
                          onClick={scrollToAsesoria}
                          className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                        >
                          {convenio.cta}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-xl px-6 py-4">
            <p className="text-white font-medium">
              ¿Cuántos de estos convenios te aplican? Descúbrelo en una asesoría personalizada — 50€, descontables si continúas tu proceso con AMA Consultores
            </p>
            <Button
              onClick={scrollToAsesoria}
              className="mt-4 bg-gold hover:bg-gold-dark text-navy font-semibold"
            >
              Agenda tu asesoría — 50€
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConveniosSection;
