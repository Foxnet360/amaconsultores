import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, AlertCircle, Clock, Euro, Calculator } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import EligibilityCalculator from '@/components/EligibilityCalculator';

const accordionBlocks = [
  {
    id: '1',
    title: 'BLOQUE 1 — ARRAIGOS · 380€ IVA incluido · tasas a cargo del cliente',
    subtitle: 'Base normativa: RD 1155/2024 · Instrucciones SEM 1/2025',
    accordions: [
      {
        id: 'arraigo-segunda-oportunidad',
        title: 'Arraigo de Segunda Oportunidad (art. 127.a)',
        badge: 'RD 1155/2024 · Art. 127.a',
        description: 'Para personas que tuvieron una autorización de residencia previa en España que no pudieron renovar, y llevan al menos 2 años en el país. Permite regularizar sin necesidad de aportar nuevos contratos.',
        requisitos: [
          'Tuve una autorización de residencia en España distinta a las de circunstancias excepcionales',
          'No pude renovarla por vencimiento o incumplimiento — NO por orden público o seguridad',
          'Llevo al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
          'Sin antecedentes penales en España ni países de residencia (últimos 5 años)',
          'No soy ciudadano/a UE, EEE o Suiza'
        ],
        contenido: 'Duración: 1 año. Autoriza a trabajar por cuenta ajena y propia.',
        tiempo: '3-6 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'arraigo-sociolaboral',
        title: 'Arraigo Sociolaboral (art. 127.b)',
        badge: 'RD 1155/2024 · Art. 127.b',
        description: '2 años de permanencia + contrato de trabajo mínimo 20h/semana al SMI. NO aplica para cuenta propia.',
        requisitos: [
          'Al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
          'Uno o varios contratos por cuenta ajena (mín. 20h/semana, mín. SMI o convenio)',
          'Duración del contrato o suma superior a 90 días',
          'Sin antecedentes penales (últimos 5 años)',
          'No soy ciudadano/a UE, EEE o Suiza ni solicitante de protección internacional en trámite'
        ],
        contenido: 'Se admiten contratos fijos discontinuos, concatenados o de sustitución.',
        tiempo: '3-6 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'arraigo-social',
        title: 'Arraigo Social (art. 127.c)',
        badge: 'RD 1155/2024 · Art. 127.c',
        description: 'Para personas sin contrato con vínculos familiares directos con residentes legales, o que acreditan integración mediante informe de la Comunidad Autónoma.',
        requisitos: [
          'Al menos 2 años en España (ausencias máx. 90 días)',
          'Familiar en situación regular (cónyuge, pareja registrada, ascendiente o descendiente 1er grado) O informe de integración de la CCAA',
          'Sin antecedentes penales (últimos 5 años)',
          'No soy ciudadano/a UE, EEE o Suiza'
        ],
        contenido: 'Duración: 1 año renovable a 4. Autoriza a trabajar.',
        tiempo: '3-6 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'arraigo-socioformativo',
        title: 'Arraigo Socioformativo (art. 127.d)',
        badge: 'RD 1155/2024 · Art. 127.d',
        description: 'Permite regularizar a quienes estén matriculados, cursando o comprometidos a realizar formación reconocida. Solo puede concederse una vez cada tres años.',
        requisitos: [
          'Al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
          'Matriculado/a, cursando o con plaza solicitada en: secundaria postobligatoria, FP grado medio o superior, certificado de profesionalidad o formación del SEPE',
          'Sin antecedentes penales (últimos 5 años)',
          'No soy ciudadano/a UE, EEE o Suiza'
        ],
        contenido: 'Duración: 1 año. Permite trabajar hasta 30h/semana durante la formación.',
        tiempo: '3-6 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'arraigo-familiar',
        title: 'Arraigo Familiar (art. 127.e)',
        badge: 'RD 1155/2024 · Art. 127.e',
        description: 'Para progenitores de menores con nacionalidad española. No requiere tiempo mínimo de permanencia.',
        requisitos: [
          'Ser progenitor/a de un menor con nacionalidad española',
          'Sin antecedentes penales (últimos 5 años)'
        ],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      }
    ]
  },
  {
    id: '2',
    title: 'BLOQUE 2 — RESIDENCIAS POR CIRCUNSTANCIAS EXCEPCIONALES · 380€ IVA incluido · tasas a cargo del cliente',
    subtitle: '',
    accordions: [
      {
        id: 'reagrupacion-familiar',
        title: 'Reagrupación Familiar (arts. 65-68 RD 1155/2024)',
        badge: 'RD 1155/2024 · Arts. 65-68',
        description: 'Permite a una persona extranjera con residencia legal en España traer a determinados familiares.',
        requisitos: [
          'Residencia temporal renovada por al menos 1 año Y haber solicitado renovación por otro año más — NO es necesaria larga duración salvo para ascendientes',
          'Medios económicos suficientes según número de familiares',
          'Vivienda adecuada — en propiedad O en alquiler (NO se exige vivienda propia)',
          'Seguro médico para los reagrupados si no cubre la Seguridad Social'
        ],
        contenido: `Familiares que pueden reagruparse:\n- Cónyuge o pareja de hecho registrada\n- Descendientes menores de 18 años o mayores con discapacidad\n- Descendientes mayores de edad dependientes económicamente\n- Ascendientes (padres/madres) — SOLO si el reagrupante tiene residencia de larga duración\n\nLa autorización de residencia por reagrupación permite trabajar desde el primer día.`,
        tiempo: '2-4 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'residencia-familiar-espanol',
        title: 'Residencia para Familiar de Ciudadano/a Español/a (arts. 93-99 RD 1155/2024 — NUEVA 2025)',
        badge: 'RD 1155/2024 · Arts. 93-99',
        description: 'Nueva figura con estatuto propio para familiares de españoles. 5 años de residencia con autorización de trabajo desde el primer día.',
        requisitos: [],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'residencia-no-lucrativa',
        title: 'Residencia No Lucrativa',
        badge: 'Residencia',
        description: 'Para personas con medios económicos propios que no van a trabajar en España.',
        requisitos: [],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'larga-duracion',
        title: 'Residencia de Larga Duración',
        badge: 'Residencia Permanente',
        description: 'Tras 5 años de residencia legal continuada en España. Permite trabajar sin autorización previa.',
        requisitos: [],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      },
      {
        id: 'larga-duracion-ue',
        title: 'Residencia de Larga Duración UE',
        badge: 'Movilidad UE',
        description: 'Permite movilidad intraeuropea con procedimiento simplificado para trasladarse a otro país de la UE.',
        requisitos: [],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      }
    ]
  },
  {
    id: '3',
    title: 'BLOQUE 3 — MOVILIDAD LABORAL · tasas a cargo del cliente',
    subtitle: '',
    accordions: [
      {
        id: 'cuenta-ajena',
        title: 'Cuenta Ajena · 380€ IVA incluido',
        badge: 'Movilidad Laboral',
        description: 'Autorización inicial de residencia y trabajo mediante oferta de empleo desde España.',
        requisitos: [],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€',
        ctaAction: 'asesoria'
      },
      {
        id: 'cuenta-propia',
        title: 'Cuenta Propia (autónomo) · 380€ IVA incluido',
        badge: 'Movilidad Laboral',
        description: 'Para emprendedores que quieren establecerse en España con actividad empresarial propia.',
        requisitos: [],
        contenido: '',
        tiempo: '2-4 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€',
        ctaAction: 'asesoria'
      },
      {
        id: 'altamente-cualificada',
        title: 'Altamente Cualificada / Tarjeta Azul UE · 1.200€ IVA incluido',
        badge: 'Orden PJC/44/2026 · Ley 14/2013',
        description: 'Para profesionales altamente cualificados con oferta de empleo con salario mínimo regulado.',
        requisitos: [],
        contenido: '',
        tiempo: '1-2 meses',
        coste: '1.200€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€',
        ctaAction: 'asesoria'
      },
      {
        id: 'residencia-investigacion',
        title: 'Residencia por Investigación · 380€ IVA incluido',
        badge: 'Arts. 65-71 LOEx · Directiva UE 2016/801',
        description: 'Para investigadores, científicos y docentes que realizan actividades de investigación en España.',
        requisitos: [],
        contenido: '',
        tiempo: '1-3 meses',
        coste: '380€ IVA incluido · tasas a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€',
        ctaAction: 'asesoria'
      }
    ]
  },
  {
    id: '4',
    title: 'BLOQUE 4 — PROTECCIÓN ESPECIAL · Sin precio · Consulta tu caso → formulario de contacto',
    subtitle: '',
    accordions: [
      {
        id: 'proteccion-internacional',
        title: 'Protección Internacional — Asilo',
        badge: 'Ley 12/2009',
        description: 'Para quienes huyen de persecución por razones de raza, religión, nacionalidad, opiniones políticas o pertenencia a grupo social.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Sin precio · Consulta tu caso',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      },
      {
        id: 'razones-humanitarias',
        title: 'Razones Humanitarias',
        badge: 'Art. 128 RD 1155/2024',
        description: 'Autorización por circunstancias excepcionales acreditadas por informe de servicios sociales u otras autoridades.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Sin precio · Consulta tu caso',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      },
      {
        id: 'violencia-genero',
        title: 'Víctimas de Violencia de Género',
        badge: 'Arts. 133-136 LOEx · LO 1/2004',
        description: 'Protección desde el inicio del proceso penal — no hay que esperar sentencia.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Sin precio · Consulta tu caso',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      },
      {
        id: 'violencia-sexual',
        title: 'Víctimas de Violencia Sexual (NUEVA 2025)',
        badge: 'Arts. 137-141 LOEx',
        description: 'Figura nueva incorporada en 2025. Independiente de la denuncia penal en determinados supuestos.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Sin precio · Consulta tu caso',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      },
      {
        id: 'trata-seres-humanos',
        title: 'Víctimas de Trata de Seres Humanos',
        badge: 'Arts. 148-155 LOEx',
        description: 'Período de restablecimiento y reflexión: 90 días. La denuncia NO es obligatoria para acceder a la protección.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Sin precio · Consulta tu caso',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      },
      {
        id: 'colaboracion-autoridades',
        title: 'Colaboración con Autoridades',
        badge: 'Arts. 142-147 LOEx',
        description: 'Para personas que colaboran con autoridades en investigaciones relevantes.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Sin precio · Consulta tu caso',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      }
    ]
  },
  {
    id: '5',
    title: 'BLOQUE 5 — NACIONALIDAD · 500€ IVA incluido · tasas + DELE + CCSE a cargo del cliente',
    subtitle: 'Base normativa: Art. 22 Código Civil · Convenio Madrid 27/06/1979',
    accordions: [
      {
        id: 'nacionalidad-espanola',
        title: 'Nacionalidad Española',
        badge: 'Código Civil · Convenio Madrid 1979',
        description: '',
        requisitos: [
          'Pasaporte en vigor',
          'TIE en vigor durante los años inmediatamente anteriores de forma continuada',
          'Certificado de empadronamiento histórico',
          'Acta de nacimiento apostillada (no mayor de 6 meses)',
          'Certificado de antecedentes penales del país de origen — apostillado — no mayor de 3 meses',
          'Certificado de antecedentes penales de España',
          'Diploma DELE A2 o superior (exentos: nacionales de países hispanohablantes)',
          'Diploma CCSE — Conocimientos Constitucionales y Socioculturales'
        ],
        contenido: `Para colombianos: doble nacionalidad expresamente garantizada — no hay que renunciar a la colombiana (Convenio Madrid 27/06/1979, BOE 25/11/1980).\n\nPlazos de residencia:\n- Colombianos y resto de iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal: 2 años\n- Régimen general (resto del mundo): 10 años`,
        tiempo: 'Variable',
        coste: '500€ IVA incluido · tasas + DELE + CCSE a cargo del cliente',
        ctaText: 'Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas',
        ctaAction: 'asesoria'
      }
    ]
  },
  {
    id: '6',
    title: 'BLOQUE 6 — REGULARIZACIÓN EXTRAORDINARIA 2026 · Novedad 2026 · Consulta tu caso → formulario de contacto',
    subtitle: '',
    accordions: [
      {
        id: 'regularizacion-extraordinaria-2026',
        title: 'Regularización Extraordinaria 2026',
        badge: 'Novedad 2026',
        description: 'Proceso excepcional en tramitación. Pendiente de publicación en el BOE. Vigente hasta el 30 de junio de 2026. El texto se actualiza cuando se publique en el BOE.',
        requisitos: [],
        contenido: '',
        tiempo: 'Variable',
        coste: 'Consulta tu caso → formulario de contacto',
        ctaText: 'Consulta tu caso — formulario de contacto',
        ctaAction: 'contacto'
      }
    ]
  }
];

const RegularizacionSection = () => {
  const { trackEvent } = useAnalytics();
  const [expandedAccordion, setExpandedAccordion] = useState(null);

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

  const handleAccordionChange = (value) => {
    if (value && value !== expandedAccordion) {
      setExpandedAccordion(value);
      let accordionTitle = value;
      for (const block of accordionBlocks) {
        const accordion = block.accordions.find(a => a.id === value);
        if (accordion) {
          accordionTitle = accordion.title;
          break;
        }
      }
      trackEvent('acordeon_expandido', {
        accordion_id: value,
        accordion_name: accordionTitle,
        section: 'regularizacion'
      });
    }
  };

  return (
    <section id="regularizacion" className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Cuál es tu situación en España?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Encuentra tu camino. Pincha en tu caso y descubre las opciones disponibles.
          </p>
          <div className="inline-block bg-navy-800 border border-gold-500/30 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-300">
              Normativa vigente: RD 1155/2024 en vigor desde el 20 de mayo de 2025 · Instrucciones SEM 1/2025 y SEM 2/2025.
            </p>
          </div>
        </motion.div>

        {/* Accordion Blocks */}
        <div className="space-y-12">
          {accordionBlocks.map((block, blockIndex) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: blockIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">
                {block.title}
              </h3>
              {block.subtitle && (
                <p className="text-gold-400 mb-6 text-sm">{block.subtitle}</p>
              )}

              <Accordion
                type="single"
                collapsible
                className="space-y-4"
                onValueChange={handleAccordionChange}
              >
                {block.accordions.map((accordion) => (
                  <AccordionItem
                    key={accordion.id}
                    value={accordion.id}
                    className="border-2 border-gold-500 bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <Badge className="bg-gold-500 text-navy font-semibold shrink-0">
                          {accordion.badge}
                        </Badge>
                        <div className="flex-1">
                          <span className="font-semibold text-lg block">{accordion.title}</span>
                          {accordion.description && (
                            <p className="text-sm text-gray-600 font-normal mt-1">{accordion.description}</p>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6">
                        {/* Main Content */}
                        {accordion.contenido && (
                          <div className="prose prose-gray max-w-none">
                            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                              {accordion.contenido}
                            </div>
                          </div>
                        )}

                        {/* Requisitos */}
                        {accordion.requisitos.length > 0 && (
                          <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                              <Star className="text-gold-500" size={18} />
                              Requisitos principales
                            </h4>
                            <ul className="space-y-2">
                              {accordion.requisitos.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                  <span className="text-gold-500 mt-1">★</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Time and Cost */}
                        {(accordion.tiempo || accordion.coste) && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                            {accordion.tiempo && (
                              <div className="flex items-center gap-3">
                                <Clock className="text-gold-500" size={20} />
                                <div>
                                  <p className="text-sm text-gray-500">Plazo estimado</p>
                                  <p className="font-semibold text-navy">{accordion.tiempo}</p>
                                </div>
                              </div>
                            )}

                            {accordion.coste && (
                              <div className="flex items-center gap-3">
                                <Euro className="text-gold-500" size={20} />
                                <div>
                                  <p className="text-sm text-gray-500">Costes</p>
                                  <p className="font-semibold text-navy">{accordion.coste}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* CTA */}
                        <Button
                          onClick={accordion.ctaAction === 'asesoria' ? scrollToAsesoria : scrollToContacto}
                          className="w-full bg-gold-500 hover:bg-gold-600 text-navy font-semibold"
                        >
                          {accordion.ctaText}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Eligibility Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="text-gold-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-navy mb-4">
              ¿No sabes qué opción te conviene?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Responde unas preguntas simples y te recomendaremos las mejores vías de regularización
              según tu situación específica.
            </p>
          </div>

          <EligibilityCalculator />
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gold-50 border border-gold-200 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="text-gold-600 shrink-0 mt-0.5" size={20} />
          <p className="text-gold-800 text-sm">
            La información tiene carácter orientativo. Cada caso es único y requiere análisis individualizado. Información actualizada conforme al RD 1155/2024 en vigor desde el 20 de mayo de 2025 e Instrucciones SEM 1/2025 y SEM 2/2025.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegularizacionSection;
