/**
 * Datos de servicios de Movilidad Profesional
 * Basado en documento Correcciones.xml de AMA Consultores
 */

// Bloque 1 — Homologación y Equivalencia de Títulos
export const homologacion = {
  id: 'homologacion-titulos',
  title: 'Homologación y Equivalencia de Títulos',
  baseNormativa: 'RD 967/2014 · Ministerio de Universidades',
  description: 'Llevamos años acompañando a profesionales en este proceso. Nos encargamos de analizar tu caso, orientarte sobre el procedimiento correcto, reunir y organizar la documentación, y acompañarte en cada paso hasta la resolución.',
  options: [
    {
      title: 'Tengo un título universitario',
      description: 'La mayoría de los procedimientos se tramitan ante el Ministerio de Universidades. Esto incluye tanto la homologación a un título español concreto como la declaración de equivalencia de nivel.',
      important: 'IMPORTANTE: Para las profesiones no reguladas puedes solicitar equivalencia perfectamente, sin necesidad de homologación. Y hay profesiones reguladas — como el Derecho — en las que si no quieres ejercer en cuenta ajena, puedes optar por la equivalencia a grado.',
    },
    {
      title: 'Tengo un doctorado',
      description: 'La equivalencia se tramita ante la universidad — no ante el Ministerio.',
      price: '1.000€ IVA incluido',
    },
    {
      title: 'Tengo un título de FP, técnico o bachillerato',
      description: 'Procedimiento de equivalencia ante el Ministerio de Educación.',
      price: 'Consultar',
    },
  ],
  prices: [
    { service: 'Homologación profesional universitaria', price: '530€ IVA incluido' },
    { service: 'Homologación técnica/tecnológica', price: '430€ IVA incluido' },
    { service: 'Homologación bachillerato', price: '360€ IVA incluido' },
    { service: 'Equivalencia de doctorado', price: '1.000€ IVA incluido' },
  ],
  note: 'Para titulaciones colombianas, el servicio incluye las apostillas, legalizaciones y en la mayoría de los casos el envío y recepción de documentos desde Colombia — todo dentro de la tarifa. Para titulaciones obtenidas fuera de Colombia, los documentos deberán entregarse previamente legalizados y apostillados.',
};

// Bloque 2 — Orientación Laboral y Acceso a Empleo Cualificado
export const orientacionLaboral = {
  id: 'orientacion-laboral',
  title: 'Orientación Laboral y Acceso a Empleo Cualificado',
  description: 'Muchas personas con formación universitaria o técnica llegan a España y terminan ejerciendo trabajos muy por debajo de su nivel de cualificación — no por falta de capacidad, sino por desconocimiento del sistema o ausencia de acompañamiento estratégico.',
  phases: [
    {
      title: 'Fase 1 — Diagnóstico',
      description: 'Analizamos tu perfil, identificamos si tu título requiere homologación previa y mapeamos el mercado laboral español para tu perfil concreto.',
    },
    {
      title: 'Fase 2 — Estrategia',
      description: 'Orientamos sobre sectores con demanda activa, adaptamos tu CV al formato español y asesoramos sobre cómo presentar tu trayectoria internacional como un activo diferencial.',
    },
    {
      title: 'Fase 3 — Acompañamiento',
      description: 'Apoyo en contratos, alta en Seguridad Social, derechos laborales y autorizaciones de trabajo vinculadas a tu situación migratoria.',
    },
  ],
  note: 'Tu situación migratoria condiciona el acceso al mercado laboral. En AMA Consultores asesoramos de forma integrada: situación migratoria + inserción laboral.',
  price: 'Consulta tu caso',
};

// Bloque 3 — Visado de Nómada Digital
export const nomadaDigital = {
  id: 'visado-nomada-digital',
  title: 'Visado de Nómada Digital',
  baseNormativa: 'Ley 28/2022 (Ley Startups) · Art. 93 LIRPF',
  price: '1.200€ IVA incluido · tasas a cargo del cliente',
  description: '¿Trabajas remotamente para empresas o clientes fuera de España? El visado de nómada digital te permite residir legalmente en España mientras mantienes tu actividad con empleadores o clientes en el extranjero.',
  requirements: [
    'Contrato o relación laboral con empresa fuera de España de al menos 3 meses de antigüedad',
    'Al menos el 80% de los ingresos deben provenir de fuentes fuera de España',
    'Medios económicos mínimos: 200% del SMI mensual (aprox. 2.334€/mes)',
    'Seguro médico público o privado con cobertura completa en España',
    'Sin antecedentes penales en España ni en el país de residencia (últimos 5 años)',
  ],
  duration: 'Dos modalidades: Visado (desde origen · 1 año) o Autorización (en España en situación regular · 3 años renovable).',
  ventajaFiscal: {
    title: 'Ventaja fiscal — Ley Beckham',
    description: 'Tributación a tipo fijo del 24% en el IRPF hasta 600.000€ durante los primeros 6 años. Solicitud ante la AEAT en los 6 meses siguientes a la llegada.',
  },
};
