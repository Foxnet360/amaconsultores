/**
 * Datos de servicios de Regularización Migratoria
 * Basado en documento Correcciones.xml de AMA Consultores
 * Normativa: RD 1155/2024 en vigor desde el 20 de mayo de 2025
 */

// BLOQUE 1 — ARRAIGOS
export const arraigos = [
  {
    id: 'arraigo-segunda-oportunidad',
    title: 'Arraigo de Segunda Oportunidad',
    article: 'art. 127.a',
    baseNormativa: 'RD 1155/2024',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Para personas que tuvieron una autorización de residencia previa en España que no pudieron renovar, y llevan al menos 2 años en el país. Permite regularizar sin necesidad de aportar nuevos contratos.',
    requirements: [
      'Tuve una autorización de residencia en España distinta a las de circunstancias excepcionales',
      'No pude renovarla por vencimiento o incumplimiento — NO por orden público o seguridad',
      'Llevo al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
      'Sin antecedentes penales en España ni países de residencia (últimos 5 años)',
      'No soy ciudadano/a UE, EEE o Suiza',
    ],
    duration: 'Duración: 1 año. Autoriza a trabajar por cuenta ajena y propia.',
  },
  {
    id: 'arraigo-sociolaboral',
    title: 'Arraigo Sociolaboral',
    article: 'art. 127.b',
    baseNormativa: 'RD 1155/2024',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: '2 años de permanencia + contrato de trabajo mínimo 20h/semana al SMI. NO aplica para cuenta propia.',
    requirements: [
      'Al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
      'Uno o varios contratos por cuenta ajena (mín. 20h/semana, mín. SMI o convenio)',
      'Duración del contrato o suma superior a 90 días',
      'Sin antecedentes penales (últimos 5 años)',
      'No soy ciudadano/a UE, EEE o Suiza ni solicitante de protección internacional en trámite',
    ],
    duration: 'Autoriza a trabajar por cuenta ajena.',
    notes: 'Se admiten contratos fijos discontinuos, concatenados o de sustitución.',
  },
  {
    id: 'arraigo-social',
    title: 'Arraigo Social',
    article: 'art. 127.c',
    baseNormativa: 'RD 1155/2024',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Para personas en situación irregular con al menos 2 años de permanencia en España. Se puede acceder mediante contrato de trabajo (mínimo 30h/semana al SMI) o mediante informe de integración de la Comunidad Autónoma.',
    requirements: [
      'Al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
      'Contrato de trabajo de mínimo 30h/semana al SMI, O informe de integración de la CCAA',
      'Sin antecedentes penales (últimos 5 años)',
      'No soy ciudadano/a UE, EEE o Suiza',
    ],
    duration: 'Duración: 1 año renovable a 4. Autoriza a trabajar desde el primer día.',
  },
  {
    id: 'arraigo-socioformativo',
    title: 'Arraigo Socioformativo',
    article: 'art. 127.d',
    baseNormativa: 'RD 1155/2024',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Permite regularizar a quienes estén matriculados, cursando o comprometidos a realizar formación incluida en el Catálogo del SEPE o reconocida por el sistema educativo. Permite trabajar hasta 30h semanales durante la formación. Solo puede concederse una vez cada tres años.',
    requirements: [
      'Al menos 2 años en España de forma continuada (ausencias máx. 90 días)',
      'Matriculado/a, cursando o con plaza solicitada en: secundaria postobligatoria, FP grado medio o superior, certificado de profesionalidad o formación del SEPE',
      'Sin antecedentes penales (últimos 5 años)',
      'No soy ciudadano/a UE, EEE o Suiza',
    ],
    duration: 'Duración: 1 año. Permite trabajar hasta 30h/semana durante la formación.',
  },
  {
    id: 'arraigo-familiar',
    title: 'Arraigo Familiar',
    article: 'art. 127.e',
    baseNormativa: 'RD 1155/2024',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Para progenitores de menores con nacionalidad española. No requiere tiempo mínimo de permanencia.',
    requirements: [
      'Ser progenitor/a de un menor con nacionalidad española',
      'Sin antecedentes penales (últimos 5 años)',
    ],
    duration: '',
  },
];

// BLOQUE 2 — RESIDENCIAS POR CIRCUNSTANCIAS EXCEPCIONALES
export const residenciasExcepcionales = [
  {
    id: 'reagrupacion-familiar',
    title: 'Reagrupación Familiar',
    article: 'arts. 65-68',
    baseNormativa: 'RD 1155/2024',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Permite a una persona extranjera con residencia legal en España traer a determinados familiares.',
    requirements: [
      'Residencia temporal renovada por al menos 1 año Y haber solicitado renovación por otro año más — NO es necesaria larga duración salvo para ascendientes',
      'Medios económicos suficientes según número de familiares',
      'Vivienda adecuada — en propiedad O en alquiler (NO se exige vivienda propia)',
      'Seguro médico para los reagrupados si no cubre la Seguridad Social',
    ],
    duration: 'La autorización de residencia por reagrupación permite trabajar desde el primer día.',
    notes: 'Familiares que pueden reagruparse: cónyuge o pareja de hecho registrada, descendientes menores de 18 años o mayores con discapacidad, descendientes mayores de edad dependientes económicamente, ascendientes (padres/madres) — SOLO si el reagrupante tiene residencia de larga duración.',
  },
  {
    id: 'residencia-familiar-espanol',
    title: 'Residencia para Familiar de Ciudadano/a Español/a',
    article: 'arts. 93-99',
    baseNormativa: 'RD 1155/2024 — NUEVA 2025',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Nueva figura con estatuto propio para familiares de españoles. 5 años de residencia con autorización de trabajo desde el primer día.',
    requirements: [],
    duration: '5 años de residencia. Autorización de trabajo desde el primer día.',
  },
  {
    id: 'residencia-no-lucrativa',
    title: 'Residencia No Lucrativa',
    article: '',
    baseNormativa: '',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Para personas con medios económicos propios que no van a trabajar en España.',
    requirements: [],
    duration: '',
  },
  {
    id: 'residencia-larga-duracion',
    title: 'Residencia de Larga Duración',
    article: '',
    baseNormativa: '',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Tras 5 años de residencia legal continuada en España. Permite trabajar sin autorización previa.',
    requirements: [],
    duration: 'Permite trabajar sin autorización previa.',
  },
  {
    id: 'residencia-larga-duracion-ue',
    title: 'Residencia de Larga Duración UE',
    article: '',
    baseNormativa: '',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Permite movilidad intraeuropea con procedimiento simplificado para trasladarse a otro país de la UE.',
    requirements: [],
    duration: '',
  },
];

// BLOQUE 3 — MOVILIDAD LABORAL
export const movilidadLaboral = [
  {
    id: 'cuenta-ajena',
    title: 'Cuenta Ajena',
    article: '',
    baseNormativa: '',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Autorización inicial de residencia y trabajo mediante oferta de empleo desde España.',
    requirements: [],
    duration: '',
  },
  {
    id: 'cuenta-propia',
    title: 'Cuenta Propia (autónomo)',
    article: '',
    baseNormativa: '',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Para emprendedores que quieren establecerse en España con actividad empresarial propia.',
    requirements: [],
    duration: '',
  },
  {
    id: 'altamente-cualificada',
    title: 'Altamente Cualificada / Tarjeta Azul UE',
    article: '',
    baseNormativa: 'Orden PJC/44/2026 · Ley 14/2013',
    price: '1.200€ IVA incluido · tasas a cargo del cliente',
    description: 'Para profesionales altamente cualificados con oferta de empleo con salario mínimo regulado.',
    requirements: [],
    duration: '',
  },
  {
    id: 'residencia-investigacion',
    title: 'Residencia por Investigación',
    article: 'Arts. 65-71 LOEx',
    baseNormativa: 'Directiva UE 2016/801',
    price: '380€ IVA incluido · tasas a cargo del cliente',
    description: 'Para investigadores, científicos y docentes que realizan actividades de investigación en España.',
    requirements: [],
    duration: '',
  },
];

// BLOQUE 4 — PROTECCIÓN ESPECIAL
export const proteccionEspecial = [
  {
    id: 'proteccion-internacional',
    title: 'Protección Internacional — Asilo',
    article: '',
    baseNormativa: 'Ley 12/2009',
    price: 'Sin precio · Consulta tu caso',
    description: 'Para quienes huyen de persecución por razones de raza, religión, nacionalidad, opiniones políticas o pertenencia a grupo social.',
    requirements: [],
    duration: '',
    showCTA: false,
    ctaText: 'Consulta tu caso',
  },
  {
    id: 'razones-humanitarias',
    title: 'Razones Humanitarias',
    article: 'Art. 128',
    baseNormativa: 'RD 1155/2024',
    price: 'Sin precio · Consulta tu caso',
    description: 'Autorización por circunstancias excepcionales acreditadas por informe de servicios sociales u otras autoridades.',
    requirements: [],
    duration: '',
    showCTA: false,
    ctaText: 'Consulta tu caso',
  },
  {
    id: 'violencia-genero',
    title: 'Víctimas de Violencia de Género',
    article: 'Arts. 133-136 LOEx',
    baseNormativa: 'LO 1/2004',
    price: 'Sin precio · Consulta tu caso',
    description: 'Protección desde el inicio del proceso penal — no hay que esperar sentencia.',
    requirements: [],
    duration: '',
    showCTA: false,
    ctaText: 'Consulta tu caso',
  },
  {
    id: 'violencia-sexual',
    title: 'Víctimas de Violencia Sexual',
    article: 'Arts. 137-141 LOEx',
    baseNormativa: 'NUEVA 2025',
    price: 'Sin precio · Consulta tu caso',
    description: 'Figura nueva incorporada en 2025. Independiente de la denuncia penal en determinados supuestos.',
    requirements: [],
    duration: '',
    showCTA: false,
    ctaText: 'Consulta tu caso',
  },
  {
    id: 'trata',
    title: 'Víctimas de Trata de Seres Humanos',
    article: 'Arts. 148-155 LOEx',
    baseNormativa: '',
    price: 'Sin precio · Consulta tu caso',
    description: 'Período de restablecimiento y reflexión: 90 días. La denuncia NO es obligatoria para acceder a la protección.',
    requirements: [],
    duration: '',
    showCTA: false,
    ctaText: 'Consulta tu caso',
  },
  {
    id: 'colaboracion-autoridades',
    title: 'Colaboración con Autoridades',
    article: 'Arts. 142-147 LOEx',
    baseNormativa: '',
    price: 'Sin precio · Consulta tu caso',
    description: 'Para personas que colaboran con autoridades en investigaciones relevantes.',
    requirements: [],
    duration: '',
    showCTA: false,
    ctaText: 'Consulta tu caso',
  },
];

// BLOQUE 5 — NACIONALIDAD
export const nacionalidad = {
  id: 'nacionalidad-espanola',
  title: 'Nacionalidad Española',
  article: 'Art. 22',
  baseNormativa: 'Código Civil · Convenio Madrid 27/06/1979',
  price: '500€ IVA incluido · tasas + DELE + CCSE a cargo del cliente',
  description: 'Para colombianos y otros iberoamericanos: solo 2 años de residencia legal (vs 10 años del régimen general).',
  requirements: [
    'Pasaporte en vigor',
    'TIE en vigor durante los años inmediatamente anteriores de forma continuada',
    'Certificado de empadronamiento histórico',
    'Acta de nacimiento apostillada (no mayor de 6 meses)',
    'Certificado de antecedentes penales del país de origen — apostillado — no mayor de 3 meses',
    'Certificado de antecedentes penales de España',
    'Diploma DELE A2 o superior (exentos: nacionales de países hispanohablantes)',
    'Diploma CCSE — Conocimientos Constitucionales y Socioculturales',
  ],
  duration: 'Plazo para colombianos e iberoamericanos: 2 años. Para régimen general: 10 años.',
  notes: 'La doble nacionalidad está expresamente garantizada — no hay que renunciar a la colombiana (Convenio Madrid 27/06/1979, BOE 25/11/1980).',
};

// BLOQUE 6 — REGULARIZACIÓN EXTRAORDINARIA 2026
export const regularizacionExtraordinaria = {
  id: 'regularizacion-extraordinaria-2026',
  title: 'Regularización Extraordinaria 2026',
  article: '',
  baseNormativa: 'Novedad 2026',
  price: 'Consulta tu caso',
  description: 'Proceso excepcional en tramitación. Pendiente de publicación en el BOE. Vigente hasta el 30 de junio de 2026.',
  requirements: [],
  duration: '',
  showCTA: false,
  ctaText: 'Consulta tu caso → formulario de contacto',
};

// DISCLAIMER GENERAL
export const disclaimerGeneral = {
  text: 'La información tiene carácter orientativo. Cada caso es único y requiere análisis individualizado. Información actualizada conforme al RD 1155/2024 en vigor desde el 20 de mayo de 2025 e Instrucciones SEM 1/2025 y SEM 2/2025.',
  type: 'disclaimer',
};

// Nota inicial sobre normativa
export const notaNormativa = {
  text: 'Normativa vigente: RD 1155/2024 en vigor desde el 20 de mayo de 2025 · Instrucciones SEM 1/2025 y SEM 2/2025.',
  type: 'normative',
};
