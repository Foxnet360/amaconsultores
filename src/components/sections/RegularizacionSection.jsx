import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Diamond, AlertCircle, Clock, Euro, FileCheck, Calculator } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import EligibilityCalculator from '@/components/EligibilityCalculator';

// Data for all 20 accordions organized in 5 blocks
const accordionBlocks = [
  {
    id: 'A',
    title: 'Bloque A: Arraigos (RD 1155/2024)',
    accordions: [
      {
        id: 'arraigo-segunda-oportunidad',
        title: 'Arraigo de Segunda Oportunidad',
        badge: 'RD 1155/2024 · Art. 124.1 LOEx',
        description: 'Modalidad para extranjeros que estén o hayan estado en situación irregular en España y cumplan requisitos específicos.',
        requisitos: [
          'Estar en España de forma irregular O haber estado en los últimos 5 años',
          '2 años de permanencia en España (empadronamiento continuo)',
          'Carecer de antecedentes penales en España y países de residencia previos',
          'No estar sujeto a prohibición de entrada en España',
          'No haber sido objeto de medida de alejamiento en los últimos 5 años'
        ],
        contenido: `El Arraigo de Segunda Oportunidad es una figura creada por el Real Decreto 1155/2024 que permite regularizar la situación de personas extranjeras que se encuentran o han estado en situación administrativa irregular en España.

        Este arraigo NO requiere contrato de trabajo ni vínculo familiar, lo que lo convierte en una opción accesible para muchas personas. Sin embargo, los requisitos son estrictos y deben acreditarse fehacientemente.

        La autorización inicial tiene una duración de 1 año y permite trabajar por cuenta ajena o propia desde el primer día.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Certificado de empadronamiento de 2 años continuados',
          'Certificado de antecedentes penales del país de origen (apostillado y traducido)',
          'Certificado de antecedentes penales de España',
          'Justificante de medios económicos (para mantenimiento durante el primer año)',
          'Seguro médico privado o documentación acreditativa de cobertura sanitaria'
        ],
        optionalDocs: [
          'Certificados de cursos de formación realizados en España',
          'Informes de entidades sociales que acrediten integración',
          'Documentación de voluntariado o participación en actividades comunitarias',
          'Informes de servicios sociales (si ha recibido atención)'
        ],
        tiempo: '3-6 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 500€'
      },
      {
        id: 'arraigo-sociolaboral',
        title: 'Arraigo Sociolaboral',
        badge: 'RD 1155/2024 · Art. 124.2 LOEx',
        description: 'Para extranjeros que acrediten relación laboral en España. Requiere contrato de trabajo activo.',
        requisitos: [
          'Estar en España de forma irregular',
          '2 años de permanencia continuada en España',
          'Contrato de trabajo activo de mínimo 20h/semana (por cuenta ajena)',
          'O 30h/semana si es trabajo por cuenta propia',
          'Carecer de antecedentes penales',
          'No estar sujeto a prohibición de entrada'
        ],
        contenido: `El Arraigo Sociolaboral es la modalidad más común de arraigo y requiere acreditar una relación laboral activa en España. El contrato debe cumplir requisitos específicos:

        - Por cuenta ajena: Mínimo 20 horas semanales O jornada completa si es sector agrario
        - Por cuenta propia: Mínimo 30 horas semanales dedicadas a la actividad
        - El contrato debe tener una duración mínima (generalmente 6 meses a 1 año)
        - El salario debe ser igual o superior al SMI prorrateado según horas

        Esta autorización tiene una duración inicial de 1 año y permite trabajar desde el primer día. Se puede renovar por periodos de 2 años si se mantiene el empleo.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Contrato de trabajo firmado por ambas partes',
          'Informe de vida laboral (TGSS) que acredite los últimos 6 meses cotizados',
          'Nóminas de los últimos 3-6 meses',
          'Certificado de empadronamiento de 2 años',
          'Certificado de antecedentes penales (origen y España)',
          'Declaración del empleador confirmando la viabilidad de la contratación'
        ],
        optionalDocs: [
          'Certificado de estar al corriente de obligaciones tributarias (si autónomo)',
          'Documentación acreditativa de formación relacionada con el puesto',
          'Informes de productividad o valoraciones del empleador'
        ],
        tiempo: '3-6 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 500€'
      },
      {
        id: 'arraigo-social',
        title: 'Arraigo Social',
        badge: 'RD 1155/2024 · Art. 124.3 LOEx',
        description: 'Para extranjeros con fuertes vínculos de integración social en España, con o sin vínculo familiar.',
        requisitos: [
          'Estar en España de forma irregular',
          '2 años de permanencia continuada en España',
          'Vínculo familiar con residente legal en España (cónyuge, padre/madre, hijo/a)',
          'O informe favorable de arraigo social emitido por el ayuntamiento',
          'Carecer de antecedentes penales',
          'Empadronamiento de 2 años continuados'
        ],
        contenido: `El Arraigo Social es una modalidad basada en la integración en la sociedad española. Puede solicitarse por dos vías:

        1. Vía familiar: Tener cónyuge, ascendiente o descendiente residente legal en España
        2. Vía de informe de arraigo: Obtener informe favorable del ayuntamiento

        El informe de arraigo social valora aspectos como:
        - Estancia continuada en España (mínimo 2 años)
        - Integración en la comunidad
        - Historial laboral
        - Formación recibida
        - Vínculos sociales y familiares

        Esta autorización tiene una duración inicial de 1 año y permite trabajar por cuenta ajena o propia.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Certificado de empadronamiento de 2 años continuados',
          'Documentación del vínculo familiar (libro de familia, partida de nacimiento, etc.)',
          'Copia de la tarjeta de residencia del familiar',
          'Informe de arraigo social del ayuntamiento (si no hay vínculo familiar)',
          'Certificado de antecedentes penales (origen y España)',
          'Documentación acreditativa de integración (cursos, voluntariado, etc.)'
        ],
        optionalDocs: [
          'Informes de entidades sociales',
          'Certificados de cursos de español o formación',
          'Documentación de participación en actividades comunitarias',
          'Cartas de referencia de empleadores o entidades'
        ],
        tiempo: '3-6 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 500€'
      },
      {
        id: 'arraigo-socioformativo',
        title: 'Arraigo Socioformativo',
        badge: 'RD 1155/2024 · Art. 124.4 LOEx',
        description: 'Para extranjeros matriculados en formación reglada que mejore su empleabilidad.',
        requisitos: [
          'Estar en España de forma irregular',
          '2 años de permanencia continuada en España',
          'Matrícula en formación reglada (FP, universidad, etc.)',
          'La formación debe mejorar empleabilidad o competencias profesionales',
          'Carecer de antecedentes penales',
          'Empadronamiento de 2 años continuados'
        ],
        contenido: `El Arraigo Socioformativo está destinado a personas que están estudiando en España y pueden acreditar una formación que mejore sus posibilidades de inserción laboral.

        Requisitos de la formación:
        - Debe ser formación reglada (no cursos de corta duración)
        - Debe orientarse a la inserción laboral
        - Puede ser FP, grados universitarios, másteres, doctorado
        - La formación debe estar activa o haberse completado recientemente

        Durante el periodo de formación, esta autorización permite trabajar hasta 30 horas semanales. Una vez finalizada la formación, permite trabajar a jornada completa.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Matrícula vigente en centro educativo reconocido',
          'Certificación académica de los estudios realizados o en curso',
          'Certificado de empadronamiento de 2 años',
          'Certificado de antecedentes penales (origen y España)',
          'Documentación acreditativa de medios económicos para estudios y manutención'
        ],
        optionalDocs: [
          'Informe del centro educativo sobre la formación',
          'Certificados de idioma (DELE, etc.)',
          'Documentación de prácticas en empresas',
          'Informes de servicios de orientación laboral'
        ],
        tiempo: '3-6 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 500€'
      }
    ]
  },
  {
    id: 'B',
    title: 'Bloque B: Familiar',
    accordions: [
      {
        id: 'reagrupacion-familiar',
        title: 'Reagrupación Familiar',
        badge: 'Ley Orgánica 4/2000 · Art. 53-55',
        description: 'Para residentes legales en España que desean traer a su familia.',
        requisitos: [
          'Tener autorización de residencia de larga duración en España',
          'O haber renovado la autorización inicial de residencia',
          'Acreditar medios económicos suficientes',
          'Acreditar vivienda adecuada',
          'Tener seguro médico para los reagrupados (si no son de la Seguridad Social)'
        ],
        contenido: `La reagrupación familiar permite a los residentes legales en España traer a su familia más cercana. El reagrupante debe tener una situación migratoria estable.

        Familiares que pueden reagruparse:
        - Cónyuge o pareja de hecho registrada
        - Ascendientes (padres/madres) a cargo del reagrupante
        - Descendientes (hijos/as) menores de 18 años o mayores de edad con discapacidad
        - Descendientes mayores de edad dependientes económicamente

        La autorización de residencia por reagrupación permite trabajar desde el primer día.`,
        requiredDocs: [
          'Pasaporte del reagrupante (vigente)',
          'Tarjeta de residencia del reagrupante en España',
          'Documentación acreditativa del vínculo familiar (partida de nacimiento/matrimonio, apostillada y traducida)',
          'Documentación acreditativa de medios económicos (nóminas, IRPF, etc.)',
          'Documentación acreditativa de vivienda (escritura o contrato de alquiler)',
          'Certificado de empadronamiento del reagrupante',
          'Seguro médico privado para los reagrupados (si no cubre SS)',
          'Certificado de antecedentes penales del reagrupado'
        ],
        optionalDocs: [
          'Informe de vida laboral del reagrupante',
          'Declaración de la renta del reagrupante',
          'Escritura de vivienda propia',
          'Informe de servicios sociales (si aplica)'
        ],
        tiempo: '2-4 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 600€'
      },
      {
        id: 'residencia-familiar-espanol',
        title: 'Residencia Familiar de Español (NUEVA 2025)',
        badge: 'Novedad 2025 · Real Decreto Legislativo 5/2024',
        description: 'Nueva figura de 5 años para familiares de españoles. Trabajo permitido desde el día 1.',
        requisitos: [
          'Ser familiar de ciudadano español (cónyuge, descendiente, ascendiente)',
          'Acreditar el vínculo familiar',
          'Carecer de antecedentes penales',
          'No estar sujeto a prohibición de entrada',
          'Acreditar medios económicos (puede ser declaración de responsabilidad del español)'
        ],
        contenido: `La Residencia Familiar de Español es una novedad de 2025 que regula una figura específica para familiares de ciudadanos españoles que no son comunitarios.

        VENTAJAS PRINCIPALES:
        - Duración: 5 años directamente (no 1 año como otras autorizaciones)
        - Permiso de trabajo desde el primer día
        - Puede solicitarse desde España o desde el país de origen
        - No requiere visado previo si se solicita desde España (el trámite es de residencia directamente)

        Esta figura mejora significativamente las opciones de los familiares de españoles, eliminando la necesidad de la tarjeta comunitaria en muchos casos.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Documento que acredite la nacionalidad española del familiar (DNI, certificado de nacionalidad)',
          'Documento que acredite el vínculo familiar (partida de nacimiento/matrimonio, apostillada y traducida)',
          'Certificado de antecedentes penales del país de origen (apostillado)',
          'Documentación acreditativa de medios económicos O declaración de responsabilidad del ciudadano español',
          'Seguro médico (si no se acredita acceso a SS)',
          'Certificado médico (si se requiere)'
        ],
        optionalDocs: [
          'Empadronamiento conjunto',
          'Documentación acreditativa de convivencia',
          'Informes de entidades sociales',
          'Justificante de medios económicos propios (si no se usa la declaración de responsabilidad)'
        ],
        tiempo: '1-3 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 500€'
      }
    ]
  },
  {
    id: 'C',
    title: 'Bloque C: Laboral',
    accordions: [
      {
        id: 'cuenta-ajena',
        title: 'Cuenta Ajena',
        badge: 'Ley Orgánica 4/2000 · Art. 51',
        description: 'Contrato de trabajo desde España. Requiere oferta laboral y cumplir requisitos del puesto.',
        requisitos: [
          'Oferta de trabajo firmada por empleador español',
          'El puesto debe estar en el Catálogo de ocupaciones difíciles de cubrir (si es primera autorización)',
          'Cumplir requisitos de cualificación del puesto (estudios, experiencia)',
          'Carecer de antecedentes penales',
          'No estar sujeto a prohibición de entrada'
        ],
        contenido: `La autorización por cuenta ajena es el mecanismo habitual para trabajar en España con contrato laboral. Existen dos vías principales:

        1. CON CERTIFICADO DE EMPRESA (Catálogo SEPE):
        Cuando el puesto está incluido en el catálogo de ocupaciones difíciles de cubrir, la empresa solicita un certificado al SEPE y luego el trabajador puede iniciar el trámite de visado.

        2. POR CUENTA AJENA CUALIFICADA (Ley 14/2013):
        Para puestos cualificados, directivos, o personas con formación específica, existe un procedimiento simplificado sin necesidad de certificado de empresa.

        Duración inicial: 1 año. Renovable por periodos de 2 años.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Contrato de trabajo firmado por ambas partes',
          'Certificado de empresa del SEPE (si procede)',
          'Títulos académicos legalizados/apostillados y traducidos',
          'Certificado de antecedentes penales (apostillado)',
          'Certificado médico (si se requiere)',
          'Documentación acreditativa de experiencia laboral (si aplica)',
          'Declaración de no estar prohibido de entrada'
        ],
        optionalDocs: [
          'Carta de recomendación de empleadores anteriores',
          'Certificados de formación adicional',
          'Documentación de reconocimiento de cualificaciones profesionales',
          'Informes técnicos sobre la necesidad de la contratación'
        ],
        tiempo: '1-3 meses (desde el país de origen)',
        coste: 'Tasa: 80€ | Nuestro servicio: desde 800€'
      },
      {
        id: 'cuenta-propia',
        title: 'Cuenta Propia',
        badge: 'Ley Orgánica 4/2000 · Art. 51',
        description: 'Para emprendedores que quieren establecerse en España con actividad empresarial.',
        requisitos: [
          'Plan de negocio viable y detallado',
          'Inversión suficiente para la actividad',
          'Capacidad para crear empleo (no obligatorio pero valorado)',
          'Cumplir requisitos sectoriales específicos (licencias, etc.)',
          'Carecer de antecedentes penales'
        ],
        contenido: `La autorización por cuenta propia permite establecerse en España para desarrollar una actividad empresarial. Se valora especialmente:

        - Viabilidad del proyecto de inversión o negocio
        - Inversión realizada (no hay mínimo fijo, pero se valora proporcionalidad)
        - Creación de puestos de trabajo
        - Interés general para España del proyecto
        - Formación y experiencia del emprendedor

        REQUISITOS DE INVERSIÓN:
        No existe una cantidad mínima fija, pero generalmente se espera una inversión significativa. La OPE (Orden de Protección del Emprendimiento) establece criterios flexibles según el sector.

        Esta autorización permite trabajar por cuenta propia. También se puede trabajar por cuenta ajena simultáneamente si se compatibiliza horariamente.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Plan de negocio detallado (estudio de mercado, viabilidad económica, etc.)',
          'Documentación acreditativa de la inversión (cuentas bancarias, contratos, etc.)',
          'Documentación acreditativa de los medios materiales y personales',
          'Licencias o autorizaciones sectoriales (si procede)',
          'Certificado de antecedentes penales (apostillado)',
          'Declaración de no estar prohibido de entrada',
          'Documentación acreditativa de formación y experiencia profesional'
        ],
        optionalDocs: [
          'Informe favorable de entidad relevante del sector (cámaras de comercio, asociaciones)',
          'Cartas de intención de clientes o proveedores',
          'Estudios de mercado independientes',
          'Informes de consultoras especializadas',
          'Convenios con otras empresas o entidades'
        ],
        tiempo: '2-4 meses',
        coste: 'Tasa: 238€ | Nuestro servicio: desde 1.200€'
      }
    ]
  },
  {
    id: 'D',
    title: 'Bloque D: Sin trabajo / Estudios / Larga duración',
    accordions: [
      {
        id: 'no-lucrativa',
        title: 'No Lucrativa',
        badge: 'Ley Orgánica 4/2000 · Art. 46',
        description: 'Para personas con medios económicos propios que no van a trabajar en España.',
        requisitos: [
          '400% del IPREM mensual en medios económicos (aprox. 2.880€/mes en 2025)',
          'Más 100% del IPREM por cada familiar a cargo',
          'Seguro médico privado con cobertura completa en España',
          'Carecer de antecedentes penales',
          'No estar sujeto a prohibición de entrada'
        ],
        contenido: `La autorización de residencia no lucrativa está destinada a personas que tienen medios económicos suficientes y no necesitan trabajar en España.

        REQUISITOS ECONÓMICOS (2025):
        - Titular: 400% IPREM = 2.880€/mes (34.560€/año)
        - Cónyuge: +100% IPREM = 720€/mes
        - Cada hijo: +100% IPREM = 720€/mes
        
        Los medios pueden acreditarse mediante:
        - Certificados bancarios
        - Pensiones o rentas
        - Inversiones que generen rendimientos
        - Bienes inmuebles (valorados)
        
        PROHIBICIONES:
        - No permite trabajar ni por cuenta ajena ni propia
        - Sí permite realizar actividades de gestión de patrimonio propio
        
        Duración: 1 año, renovable por periodos de 2 años.`,
        requiredDocs: [
          'Pasaporte completo y vigente (mínimo 1 año de validez)',
          'Certificado médico oficial (libre de enfermedades graves)',
          'Certificado de antecedentes penales (apostillado y traducido)',
          'Documentación acreditativa de medios económicos (certificados bancarios, pensiones, etc.)',
          'Seguro médico privado con cobertura completa sin copagos',
          'Declaración jurada de no tener intención de trabajar',
          'Certificado de empadronamiento (si ya está en España)'
        ],
        optionalDocs: [
          'Escrituras de propiedad de bienes inmuebles',
          'Documentación de inversiones',
          'Certificados de pensiones o rentas vitalicias',
          'Declaraciones de impuestos en país de origen'
        ],
        tiempo: '1-3 meses',
        coste: 'Tasa: 80€ | Nuestro servicio: desde 800€'
      },
      {
        id: 'estudios-modificacion',
        title: 'Estudios y Modificación',
        badge: 'Ley Orgánica 4/2000 · Art. 40-42',
        description: 'Opción de quedarse tras estudios superiores. Permite buscar empleo o crear empresa.',
        requisitos: [
          'Haber completado estudios superiores en España (grado, máster, doctorado)',
          'Solicitud dentro de los 60 días naturales anteriores o 90 días posteriores a la finalización',
          'Encontrar empleo por cuenta ajena O tener plan viable de empresa',
          'Carecer de antecedentes penales'
        ],
        contenido: `La modificación de autorización de estudios a trabajo permite a los estudiantes internacionales quedarse en España tras completar sus estudios.

        DOS OPCIONES:

        1. POR CUENTA AJENA:
        - Encontrar empleo relacionado con los estudios realizados
        - El salario debe ser al menos el 100% del SMI para jornada completa
        - No requiere certificado de empresa del SEPE

        2. POR CUENTA PROPIA:
        - Presentar plan de negocio viable
        - La actividad debe estar relacionada con los estudios
        - Inversión proporcionada al proyecto

        Esta figura es una excelente oportunidad para retener talento internacional formado en España.`,
        requiredDocs: [
          'Pasaporte y tarjeta de estudiante vigente',
          'Título académico español (o resguardo de solicitud)',
          'Certificado académico completo de los estudios realizados',
          'Contrato de trabajo (si por cuenta ajena) O Plan de negocio (si por cuenta propia)',
          'Certificado de empadronamiento',
          'Seguro médico',
          'Certificado de antecedentes penales (si se requiere)'
        ],
        optionalDocs: [
          'Informe del centro educativo sobre la formación recibida',
          'Cartas de recomendación de profesores',
          'Certificados de idioma español (DELE)',
          'Documentación de prácticas realizadas en empresas',
          'Informes de viabilidad del negocio (si por cuenta propia)'
        ],
        tiempo: '1-2 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 400€'
      },
      {
        id: 'larga-duracion',
        title: 'Larga Duración',
        badge: 'Ley Orgánica 4/2000 · Art. 32',
        description: 'Tras 5 años de residencia legal en España. Permite trabajar sin autorización previa.',
        requisitos: [
          '5 años de residencia legal en España',
          'Residencia continuada (ausencias máximas: 6 meses continuados o 10 meses totales en 5 años)',
          'Carecer de antecedentes penales',
          'No estar sujeto a prohibición de entrada'
        ],
        contenido: `La tarjeta de larga duración es una autorización de residencia y trabajo que se obtiene tras 5 años de residencia legal continuada en España.

        CARACTERÍSTICAS PRINCIPALES:
        - Permite trabajar por cuenta ajena o propia SIN necesidad de autorización previa
        - Validez de 5 años (renovable por iguales periodos)
        - Puede solicitar la nacionalidad española si cumple los requisitos (2 años para iberoamericanos)
        
        EXCEPCIONES EN EL CÓMPUTO DE LOS 5 AÑOS:
        - Los periodos en situación irregular no computan
        - Las ausencias deben respetar los límites permitidos
        - La residencia como estudiante solo computa al 50%

        Esta es una autorización muy ventajosa que otorga gran estabilidad laboral y residencial.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Tarjetas de residencia anteriores (TODAS)',
          'Certificado de residencia o empadronamiento histórico de 5 años',
          'Certificado de antecedentes penales de España',
          'Justificante de pago de la tasa',
          'Fotografía reciente (tamaño carnet)'
        ],
        optionalDocs: [
          'Vida laboral completa (TGSS)',
          'Declaraciones de IRPF de los últimos años',
          'Certificados de empadronamiento histórico de varios años',
          'Documentación acreditativa de ausencias justificadas'
        ],
        tiempo: '1-3 meses',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 300€'
      },
      {
        id: 'larga-duracion-ue',
        title: 'Larga Duración UE',
        badge: 'Directiva 2003/109/CE · Art. 32 bis LOEx',
        description: 'Movilidad europea. Permite trasladarse a otro país UE con procedimiento simplificado.',
        requisitos: [
          'Haber obtenido la tarjeta de larga duración en España',
          'Solicitar el traslado al país de destino UE',
          'Acreditar medios de vida en el país destino (empleo, pensiones, etc.)',
          'Acreditar seguro médico en el país destino'
        ],
        contenido: `La larga duración UE permite a los titulares de la tarjeta de larga duración española trasladarse a vivir y trabajar a otro país de la Unión Europea.

        PAÍSES UE DONDE APLICA:
        Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumania y Suecia.

        PROCESO:
        1. Solicitar en el país de destino la equivalencia de la larga duración
        2. Acreditar medios de vida y seguro médico
        3. Obtener la tarjeta de larga duración UE del país destino

        NOTA: Irlanda y Dinamarca no aplican esta directiva completamente.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Tarjeta de larga duración española',
          'Documentación acreditativa de medios de vida en país destino (contrato de trabajo, pensiones, etc.)',
          'Seguro médico válido en el país de destino',
          'Formulario específico del país de destino',
          'Documentación adicional que requiera el país destino específico'
        ],
        optionalDocs: [
          'Certificado de antecedentes penales (algunos países lo solicitan)',
          'Certificado médico (algunos países lo solicitan)',
          'Justificante de alojamiento en país destino',
          'Documentación acreditativa de conocimiento del idioma (si aplica)'
        ],
        tiempo: 'Variable según país (1-6 meses)',
        coste: 'Variable según país | Consultar'
      },
      {
        id: 'nacionalidad-espanola',
        title: 'Nacionalidad Española',
        badge: 'Código Civil · Art. 22',
        description: '2 años para colombianos (nacionalidad iberoamericana). Requiere residencia legal e integración.',
        requisitos: [
          '2 años de residencia legal continuada en España (para iberoamericanos)',
          'Buena conducta cívica (certificado de antecedentes penales limpio)',
          'Integración en la sociedad española (exámenes CCSE y DELE)',
          'Tener nacionalidad de país iberoamericano (Colombia, México, Argentina, etc.)'
        ],
        contenido: `La nacionalidad española por residencia permite a los extranjeros convertirse en ciudadanos españoles tras un periodo de residencia legal.

        TIEMPOS DE RESIDENCIA SEGÚN NACIONALIDAD:
        - 2 años: Nacionalidad iberoamericana, andorrana, filipina, portuguesa, o sefardíes
        - 5 años: Refugiados
        - 10 años: General (otras nacionalidades)

        REQUISITOS DE INTEGRACIÓN:
        1. Examen CCSE (Conocimientos Constitucionales y Socioculturales de España)
        2. Examen DELE A2 o superior (nivel de español)
        
        EXCEPCIÓN: Están exentos del DELE quienes tengan la nacionalidad de país hispanohablante.

        Una vez obtenida la nacionalidad española, se puede mantener la nacionalidad de origen (doble nacionalidad) si es de país iberoamericano.`,
        requiredDocs: [
          'Pasaporte completo y vigente de origen',
          'Certificado literal de nacimiento del país de origen (apostillado y traducido)',
          'Certificado de empadronamiento de 2 años completos',
          'Certificado de antecedentes penales de España',
          'Certificado de antecedentes penales del país de origen (apostillado)',
          'Certificado CCSE (superado)',
          'Certificado DELE A2 (si no se está exento)',
          'Justificante de pago de tasa (104,05€)',
          'Fotografía reciente (tamaño carnet)'
        ],
        optionalDocs: [
          'Certificado de matrimonio (si se acredita vínculo con español)',
          'Libro de familia',
          'Documentación de descendientes españoles (si aplica)',
          'Certificados de formación en España',
          'Informes de integración de entidades sociales'
        ],
        tiempo: '1-3 años (según carga del Registro Civil)',
        coste: 'Tasa: 104,05€ | Nuestro servicio: desde 600€'
      }
    ]
  },
  {
    id: 'E',
    title: 'Bloque E: Protección Especial',
    accordions: [
      {
        id: 'proteccion-internacional',
        title: 'Protección Internacional (Asilo)',
        badge: 'Ley 12/2009 · Derecho de Asilo',
        description: 'Para personas que temen persecución por razones de raza, religión, nacionalidad, opinión política o pertenencia a grupo social.',
        requisitos: [
          'Temor fundado de persecución en país de origen',
          'Por razones de raza, religión, nacionalidad, opiniones políticas o pertenencia a grupo social',
          'El Estado del país de origen no puede o no quiere proteger',
          'Solicitud en frontera o en territorio español'
        ],
        contenido: `La protección internacional incluye dos figuras:

        1. ASILO (REFUGIO):
        Para quienes temen persecución individualizada por razones protegidas.

        2. PROTECCIÓN SUBSIDIARIA:
        Para quienes no califican como refugiados pero enfrentan riesgos graves (tortura, pena de muerte, violencia indiscriminada en conflictos armados).

        PROCEDIMIENTO:
        - Se solicita en la frontera, comisaría o Oficina de Asilo
        - Entrevista personal detallada
        - Resolución en plazo máximo de 6 meses (prorrogables)
        - Durante el trámite se emite documento provisional ("asilado")

        DERECHOS:
        - Residencia y trabajo desde la concesión
        - Acceso a servicios sociales y sanitarios
        - Posibilidad de reagrupación familiar
        - Vía preferente a la nacionalidad (5 años)`,
        requiredDocs: [
          'Pasaporte o documento identidad (si se tiene)',
          'Documentación que sustente el temor fundado de persecución',
          'Documentación acreditativa de pertenencia al grupo social perseguido',
          'Informes de organismos internacionales (ACNUR, Amnistía Internacional, etc.)',
          'Noticias o informes sobre la situación en el país de origen',
          'Testimonios o declaraciones de otros refugiados del mismo grupo',
          'Documentación médica de secuelas de tortura o malos tratos (si aplica)'
        ],
        optionalDocs: [
          'Informes psicológicos o psiquiátricos',
          'Documentación de denuncias previas en país de origen',
          'Cartas de familia o amigos que corroboren la situación',
          'Documentación de organizaciones de defensa de derechos humanos',
          'Fotografías o videos que acrediten la situación'
        ],
        tiempo: '6-24 meses',
        coste: 'Gratuito | Nuestro servicio: gratuito (pro bono)'
      },
      {
        id: 'razones-humanitarias',
        title: 'Razones Humanitarias',
        badge: 'Ley Orgánica 4/2000 · Art. 53.4',
        description: 'Circunstancias excepcionales por interés público, humanitarias o cumplimiento de compromisos internacionales de España.',
        requisitos: [
          'Circunstancias excepcionales de carácter humanitario',
          'O interés público español',
          'O cumplimiento de compromisos internacionales',
          'Evaluación caso por caso por la Administración'
        ],
        contenido: `La residencia por razones de interés público, humanitarias o de cumplimiento de compromisos internacionales es una figura excepcional que se concede discrecionalmente por la Administración.

        SITUACIONES TÍPICAS:
        - Víctimas de trata con fines de explotación laboral o sexual
        - Víctimas de violencia de género (también tiene vía específica)
        - Menores tutelados que cumplen la mayoría de edad
        - Personas con enfermedades graves que requieren tratamiento en España
        - Casos de parentesco especial con españoles
        - Colaboradores de autoridades en investigaciones relevantes
        - Situaciones de extrema vulnerabilidad social

        Esta figura no es un derecho subjetivo, sino una potestad de la Administración. Requiere un análisis exhaustivo de las circunstancias personales y familiares.`,
        requiredDocs: [
          'Pasaporte o documento identidad',
          'Documentación acreditativa de las circunstancias excepcionales',
          'Informes de servicios sociales',
          'Informes de entidades de apoyo (ONGs, asociaciones)',
          'Informes médicos (si aplica)',
          'Informes policiales o judiciales (si colaboración con autoridades)',
          'Documentación de situación de vulnerabilidad'
        ],
        optionalDocs: [
          'Informes de organismos internacionales',
          'Documentación de medios de comunicación sobre la situación',
          'Cartas de apoyo de entidades relevantes',
          'Informes de impacto en menores (si hay hijos)',
          'Documentación de intentos de regularización previos'
        ],
        tiempo: 'Variable (3-12 meses)',
        coste: 'Tasa: 16,50€ | Nuestro servicio: desde 800€'
      },
      {
        id: 'violencia-genero',
        title: 'Víctimas de Violencia de Género',
        badge: 'Ley Orgánica 1/2004 · LO 4/2000',
        description: 'Protección especial para víctimas de violencia de género. Procedimiento preferente y exenciones.',
        requisitos: [
          'Ser víctima de violencia de género (violencia ejercida sobre mujeres por razón de género)',
          'Denuncia o informe acreditativo de la situación',
          'Carecer de medios de vida independientes',
          'Riesgo para la seguridad si se retorna al país de origen'
        ],
        contenido: `La violencia de género es una forma de violencia física, psicológica o sexual ejercida contra las mujeres por parte de su pareja o ex-pareja, o en contextos de dominación patriarcal.

        PROTECCIÓN MIGRATORIA:
        Las víctimas de violencia de género tienen derecho a:

        1. Autorización de residencia y trabajo excepcional
        2. Procedimiento preferente y gratuito
        3. Exención de requisitos económicos
        4. Posibilidad de reagrupación familiar urgente
        5. Acceso a recursos de protección (casas de acogida, etc.)
        6. Orden de protección y medidas judiciales

        No es necesario haber interpuesto denuncia previa, aunque se valorará. Puede acreditarse mediante informes de servicios sociales, atención médica, o informes policiales.`,
        requiredDocs: [
          'Pasaporte o documento identidad',
          'Denuncia ante autoridades (si existe)',
          'Informe de servicios sociales sobre la situación',
          'Informes médicos de lesiones o secuelas',
          'Orden de protección (si existe)',
          'Informes de atención psicológica',
          'Documentación acreditativa de dependencia económica del agresor'
        ],
        optionalDocs: [
          'Testimonios de familiares o amigos',
          'Documentación de medidas cautelares previas',
          'Informes de centros de acogida',
          'Historial de llamadas a servicios de emergencia',
          'Fotografías de lesiones (si se documentaron)'
        ],
        tiempo: '1-3 meses (vía preferente)',
        coste: 'Gratuito | Nuestro servicio: gratuito (pro bono)'
      },
      {
        id: 'violencia-sexual',
        title: 'Víctimas de Violencia Sexual (NUEVA 2025)',
        badge: 'Novedad 2025',
        description: 'Nueva figura de protección para víctimas de violencia sexual con acompañamiento especializado.',
        requisitos: [
          'Ser víctima de violencia sexual',
          'Denuncia o informe acreditativo',
          'Necesidad de protección internacional',
          'Colaboración con autoridades (si procede)'
        ],
        contenido: `La figura de víctimas de violencia sexual como colectivo vulnerable ha sido reforzada en 2025, estableciendo mecanismos específicos de protección y acompañamiento.

        PROTECCIÓN INCLUIDA:
        - Autorización de residencia y trabajo excepcional
        - Acompañamiento psicológico especializado
        - Acceso a recursos de atención a víctimas
        - Protección de datos y anonimato
        - Posibilidad de reagrupación familiar urgente
        - Asistencia letral gratuita
        - Procedimiento preferente y confidencial

        Esta figura reconoce la especial vulnerabilidad de las víctimas de violencia sexual y la necesidad de un enfoque integral de protección.`,
        requiredDocs: [
          'Pasaporte o documento identidad',
          'Denuncia por violencia sexual (si existe)',
          'Informe de atención a víctimas',
          'Informes médicos y psicológicos',
          'Documentación acreditativa de la situación de vulnerabilidad',
          'Informes de servicios sociales especializados'
        ],
        optionalDocs: [
          'Informes de centros de crisis',
          'Documentación de tratamientos médicos',
          'Informes de terapia psicológica',
          'Testimonios en entorno protegido'
        ],
        tiempo: '1-3 meses (vía preferente)',
        coste: 'Gratuito | Nuestro servicio: gratuito (pro bono)'
      },
      {
        id: 'trata-seres-humanos',
        title: 'Víctimas de Trata de Seres Humanos',
        badge: 'Ley Orgánica 4/2000 · Protocolo de Protección',
        description: 'Para víctimas de trata con fines de explotación. Programa de protección y refuerzo de derechos.',
        requisitos: [
          'Ser víctima identificada de trata de seres humanos',
          'Colaboración con autoridades en investigación (si procede)',
          'Necesidad de protección y recuperación',
          'Informe de identificación como víctima'
        ],
        contenido: `La trata de seres humanos es la captación, transporte, traslado, acogida o acogimiento de personas recurriendo a la amenaza, el uso de la fuerza u otras formas de coacción, al rapto, al fraude, al engaño, al abuso de poder o de una situación de vulnerabilidad.

        FINES EXPLOTACIÓN:
        - Explotación sexual
        - Explotación laboral
        - Mendicidad forzosa
        - Extracción de órganos
        - Matrimonios forzados
        - Explotación delictiva

        PROGRAMA DE PROTECCIÓN:
        - Periodo de reflexión y recuperación (mínimo 30 días)
        - Autorización de residencia temporal por circunstancias excepcionales
        - Posibilidad de residencia permanente si colabora con justicia
        - Acceso a recursos de protección integral
        - Acompañamiento psicológico, social y jurídico
        - Protección de identidad y seguridad`,
        requiredDocs: [
          'Pasaporte o documento identidad',
          'Informe de identificación como víctima de trata (policía, fiscalía, juzgado)',
          'Informe de servicios de atención a víctimas',
          'Documentación acreditativa de la situación de explotación',
          'Declaración de colaboración con autoridades (si procede)',
          'Informes médicos y psicológicos de la situación'
        ],
        optionalDocs: [
          'Informes de entidades especializadas en trata',
          'Documentación de denuncias previas',
          'Informes de evaluación de riesgo',
          'Testimonios protegidos',
          'Documentación de atención en recursos de acogida'
        ],
        tiempo: 'Variable según caso',
        coste: 'Gratuito | Nuestro servicio: gratuito (pro bono)'
      },
      {
        id: 'colaboracion-autoridades',
        title: 'Colaboración con Autoridades',
        badge: 'Ley Orgánica 4/2000 · Art. 53.5',
        description: 'Para personas que colaboran con autoridades en investigaciones relevantes (terrorismo, tráfico, etc.).',
        requisitos: [
          'Colaboración efectiva con autoridades españolas',
          'En investigaciones de terrorismo, tráfico de drogas, trata de seres humanos, o crimen organizado',
          'Informe favorable de la autoridad competente',
          'Riesgo para la seguridad personal por la colaboración'
        ],
        contenido: `La residencia por circunstancias excepcionales por colaboración con autoridades está destinada a personas que, colaborando con la justicia o las fuerzas de seguridad españolas, ponen en riesgo su seguridad personal.

        TIPOS DE COLABORACIÓN VALORADOS:
        - Información sobre redes de terrorismo
        - Datos sobre tráfico internacional de drogas
        - Testimonio contra organizaciones criminales
        - Información sobre redes de trata de personas
        - Colaboración en casos de corrupción internacional
        - Denuncia de delitos de gran impacto social

        Esta figura requiere un informe expreso de la autoridad competente (Ministerio Fiscal, Policía, Guardia Civil, etc.) acreditando la colaboración efectiva y el riesgo derivado.`,
        requiredDocs: [
          'Pasaporte o documento identidad',
          'Informe favorable de la autoridad competente',
          'Documentación acreditativa de la colaboración',
          'Informe de riesgo para la seguridad personal',
          'Documentación de la investigación o procedimiento judicial',
          'Declaración jurada de colaboración'
        ],
        optionalDocs: [
          'Informes de evaluación de riesgo de servicios de inteligencia',
          'Documentación de medidas de protección necesarias',
          'Informes de seguridad de las fuerzas del orden',
          'Testimonios protegidos de la colaboración'
        ],
        tiempo: 'Variable según complejidad',
        coste: 'Tasa: 16,50€ | Nuestro servicio: consultar'
      },
      {
        id: 'residencia-investigacion',
        title: 'Residencia por Investigación',
        badge: 'Ley 14/2013 · Emprendedores e Investigadores',
        description: 'Para investigadores, científicos y docentes que realizan actividades de investigación en España.',
        requisitos: [
          'Contrato o acuerdo con centro de investigación reconocido',
          'Realizar actividades de investigación, desarrollo o innovación (I+D+i)',
          'Centro acreditado como OIERT (Organización de Investigación)',
          'Carecer de antecedentes penales',
          'Seguro médico (si no cubre Seguridad Social)'
        ],
        contenido: `La autorización de residencia por investigación está incluida en la Ley de Emprendedores (14/2013) y facilita la entrada y estancia de investigadores altamente cualificados.

        VENTAJAS:
        - Trámite simplificado y rápido
        - Permiso de trabajo para el cónyuge e hijos directamente
        - Posibilidad de residencia permanente tras 2 años
        - Acceso a becas y ayudas de investigación
        - Posibilidad de cambiar a cuenta ajena o propia posteriormente

        REQUISITOS DEL CENTRO:
        El centro de investigación debe estar acreditado por el Ministerio de Economía como organización de investigación (OIERT).

        Esta figura es ideal para investigadores postdoctorales, científicos, y profesores de universidad.`,
        requiredDocs: [
          'Pasaporte completo y vigente',
          'Contrato o acuerdo de investigación con centro acreditado',
          'Currículum vitae académico detallado',
          'Títulos universitarios (doctorado, máster) apostillados y traducidos',
          'Carta de invitación o anexo del centro de investigación',
          'Certificado de antecedentes penales (apostillado)',
          'Seguro médico privado (si no cubre SS)',
          'Declaración de no estar prohibido de entrada'
        ],
        optionalDocs: [
          'Cartas de recomendación de instituciones académicas',
          'Publicaciones científicas',
          'Proyectos de investigación previos',
          'Patentes o desarrollos tecnológicos',
          'Conferencias y ponencias académicas',
          'Premios o reconocimientos académicos'
        ],
        tiempo: '15-30 días (vía preferente)',
        coste: 'Tasa: 80€ | Nuestro servicio: desde 800€'
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

  const handleAccordionChange = (value) => {
    if (value && value !== expandedAccordion) {
      setExpandedAccordion(value);
      // Find the accordion title from the data
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
              <h3 className="text-2xl font-bold mb-6 text-white">
                {block.title}
              </h3>

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
                          <p className="text-sm text-gray-600 font-normal mt-1">{accordion.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6">
                        {/* Main Content */}
                        <div className="prose prose-gray max-w-none">
                          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {accordion.contenido}
                          </div>
                        </div>

                        {/* Requisitos */}
                        <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                            <FileCheck className="text-gold-500" size={18} />
                            Requisitos principales
                          </h4>
                          <ul className="space-y-2">
                            {accordion.requisitos.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                <span className="text-gold-500 mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Required Documents */}
                        <div>
                          <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                            <Star className="text-gold-500" size={18} />
                            Documentos obligatorios (★)
                          </h4>
                          <ul className="space-y-2">
                            {accordion.requiredDocs.map((doc, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-gold-500 mt-1">★</span>
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Optional Documents */}
                        <div>
                          <h4 className="font-semibold text-gray-600 mb-3 flex items-center gap-2">
                            <Diamond className="text-gray-400" size={18} />
                            Según caso (◆)
                          </h4>
                          <ul className="space-y-2">
                            {accordion.optionalDocs.map((doc, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <span className="text-gray-400 mt-1">◆</span>
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Time and Cost */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Clock className="text-gold-500" size={20} />
                            <div>
                              <p className="text-sm text-gray-500">Plazo estimado</p>
                              <p className="font-semibold text-navy">{accordion.tiempo}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Euro className="text-gold-500" size={20} />
                            <div>
                              <p className="text-sm text-gray-500">Costes</p>
                              <p className="font-semibold text-navy">{accordion.coste}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <Button 
                          onClick={scrollToAsesoria}
                          className="w-full bg-gold-500 hover:bg-gold-600 text-navy font-semibold"
                        >
                          Agenda tu asesoría — 50€
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
            <strong>Aviso importante:</strong> La información tiene carácter orientativo. 
            Cada caso es único y requiere análisis individualizado. Para una evaluación precisa 
            de tu situación, te recomendamos agendar una asesoría personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegularizacionSection;
