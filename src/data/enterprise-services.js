/**
 * Datos de Servicios para Empresas
 * Basado en documento Correcciones.xml de AMA Consultores
 */

// Introducción de sección
export const introduccionEmpresas = {
  titulo: 'Para empresas, ONGs y entidades públicas',
  subtitulo: 'Soluciones especializadas para organizaciones que trabajan con población migrante, que necesitan incorporar talento internacional, o que gestionan proyectos sociales y europeos.',
  texto: 'La contratación de talento colombiano en España no es solo un proceso administrativo — es migración regular, ordenada y segura. En AMA Consultores creemos que la cooperación bilateral entre España y Colombia es la herramienta más efectiva para que las personas migren con derechos, las empresas encuentren el talento que necesitan y los países se beneficien mutuamente. Trabajamos desde ese convencimiento.',
  nota: 'Esta sección NO tiene precio fijo. Los CTAs llevan al formulario de contacto.',
};

// Bloque 1 — Contratación Internacional desde Colombia
export const contratacionInternacional = {
  id: 'contratacion-internacional',
  title: 'Contratación Internacional desde Colombia',
  baseNormativa: 'LOEx art. 36 y ss. · RD 1155/2024 arts. 37-64 · Catálogo SEPE',
  description: 'Contrata en Colombia. Nosotros gestionamos todo. Desde la búsqueda del perfil hasta el primer día de trabajo en España. Un solo interlocutor para todo el proceso. Contamos con red estable en Colombia para identificar y preseleccionar candidatos cualificados.',
  fases: [
    {
      title: 'Diagnóstico',
      description: 'Análisis del puesto, verificación en el Catálogo SEPE, evaluación de requisitos migratorios y laborales',
    },
    {
      title: 'Búsqueda y selección en Colombia',
      description: 'Identificación de perfiles, verificación de titulaciones y experiencia',
    },
    {
      title: 'Tramitación',
      description: 'Autorización ante SEPE y Extranjería + visado en el Consulado español en Colombia',
    },
    {
      title: 'Acompañamiento en destino',
      description: 'Recepción en España, TIE, NIE y trámites de incorporación',
    },
  ],
  precioEmpresa: 'Precio empresa: presupuesto personalizado. El trabajador NUNCA paga por ser seleccionado.',
  precioTrabajador: 'Precio trabajador en destino (TIE y trámites): 500€ IVA incluido',
  ctaText: '¿Necesitas incorporar talento colombiano? Cuéntanos tu caso — te enviamos propuesta',
};

// Bloque 2 — ¿Por qué contratar talento colombiano?
export const porQueColombia = {
  id: 'por-que-colombia',
  title: '¿Por qué contratar talento colombiano?',
  description: 'Colombia tiene una de las poblaciones más formadas de América Latina, con profesionales cualificados en sectores donde España acredita escasez real incluidos en el Catálogo SEPE.',
  sectores: [
    { sector: 'Sanidad', perfiles: 'médicos, enfermeros, fisioterapeutas, auxiliares de clínica' },
    { sector: 'Construcción y obra civil', perfiles: 'topógrafos, aparejadores, técnicos de obra' },
    { sector: 'Agricultura y ganadería', perfiles: 'técnicos agrícolas, operarios especializados' },
    { sector: 'Hostelería', perfiles: 'cocineros, jefes de sala, personal especializado' },
    { sector: 'Logística y transporte', perfiles: 'conductores de larga distancia, operadores de maquinaria' },
  ],
  ctaText: '¿Tu sector está en la lista? Cuéntanos tu caso — te enviamos propuesta',
};

// Bloque 3 — ¿Cuánto cuesta y quién paga qué?
export const costesYPagos = {
  id: 'costes-pagos',
  title: '¿Cuánto cuesta y quién paga qué?',
  empresa: 'La empresa paga: gestión integral del proceso (presupuesto personalizado) + tasas oficiales ante SEPE y Extranjería. El trabajador NUNCA paga por ser seleccionado.',
  trabajador: 'El trabajador paga una vez en España: tramitación de la TIE y trámites de incorporación → 500€ IVA incluido.',
  ctaText: '¿Quieres saber el coste para tu empresa? Cuéntanos tu caso — te enviamos propuesta',
};

// Bloque 4 — ¿Es legal? ¿Qué garantías tiene el proceso?
export const legalidadYGarantias = {
  id: 'legalidad-garantias',
  title: '¿Es legal? ¿Qué garantías tiene el proceso?',
  description: 'Sí, completamente. El proceso está regulado por la LOEx y el RD 1155/2024. Es el cauce ordinario para la contratación de trabajadores extranjeros.',
  garantias: [
    'El trabajador llega con autorización de residencia y trabajo válida en toda España',
    'El proceso pasa por organismos oficiales: SEPE, Oficina de Extranjería y Consulado español en Colombia',
    'AMA Consultores acompaña el proceso de principio a fin con pleno conocimiento de ambos sistemas',
  ],
  ctaText: '¿Tienes dudas sobre la viabilidad legal? Cuéntanos tu caso — te enviamos propuesta',
};

// Bloque 5 — Proyectos con Financiación Pública y Europea
export const proyectosEuropeos = {
  id: 'proyectos-europeos',
  title: 'Proyectos con Financiación Pública y Europea',
  description: 'Más de 10 años gestionando proyectos sociales hasta 2M€. Desde la formulación hasta la justificación final.',
  fondos: [
    'FAMI (Fondo de Asilo, Migración e Integración)',
    'FSE+ (Fondo Social Europeo Plus)',
    'Next Generation EU',
    'AECID y Ministerio de Cooperación Internacional',
    'IRPF 0,7% nacional y autonómico',
    'Fondos privados: CPI, fundaciones empresariales y convocatorias de RSC',
  ],
  servicios: 'identificación de convocatorias · formulación técnica · presupuesto · seguimiento · justificación · informes y memorias',
  ctaText: 'Solicitar información — formulario de contacto',
};

// Bloque 6 — Consultoría para el Tercer Sector
export const consultoriaTercerSector = {
  id: 'consultoria-tercer-sector',
  title: 'Consultoría para el Tercer Sector',
  description: 'Apoyo estratégico a organizaciones que trabajan con población migrante o en situación de vulnerabilidad.',
  servicios: [
    'Diagnóstico organizacional en materia de atención a población migrante',
    'Diseño de programas de intervención social basados en evidencia',
    'Formación de equipos en normativa migratoria y derechos de las personas migrantes',
    'Consultoría estratégica: planificación, alianzas y posicionamiento institucional',
  ],
  ctaText: 'Solicitar información — formulario de contacto',
};
