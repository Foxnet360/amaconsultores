/**
 * Datos de Convenios España-Colombia
 * Basado en documento Correcciones.xml de AMA Consultores
 */

// Bloque 1 — Doble Nacionalidad
export const dobleNacionalidad = {
  id: 'doble-nacionalidad',
  title: 'Doble Nacionalidad',
  baseNormativa: 'Convenio Madrid 27/06/1979 (BOE 25/11/1980)',
  description: 'Colombia y España tienen uno de los convenios de doble nacionalidad más antiguos de América Latina. Un colombiano que adquiere la nacionalidad española no tiene que renunciar a su nacionalidad colombiana — ambas coexisten de forma plena y legal.',
  beneficios: [
    'Solo 2 años de residencia legal para colombianos (vs 10 años del régimen general)',
    'La doble nacionalidad está expresamente garantizada por tratado internacional',
    'Regla de territorialidad: en España se aplica la ley española; en Colombia, la colombiana',
    'Los hijos nacidos en España de padres colombianos pueden tener ambas nacionalidades desde el nacimiento si se inscribe correctamente en el Registro Civil y en el Consulado colombiano',
  ],
  ctaText: '¿Quieres conservar tu colombianidad al naturalizarte? Agenda tu asesoría — 50€',
};

// Bloque 2 — Seguridad Social y Pensiones
export const seguridadSocial = {
  id: 'seguridad-social',
  title: 'Seguridad Social y Pensiones',
  baseNormativa: 'Convenio Bogotá 06/09/2005 (BOE 57/2008) + CMISS desde 01/08/2023',
  description: 'Permite totalizar los periodos cotizados en Colombia y en España para acceder a prestaciones de jubilación, incapacidad permanente y muerte y supervivencia.',
  beneficios: [
    'Los años cotizados en ambos países se suman para el cálculo de la pensión',
    'El CMISS (en vigor para Colombia desde 01/08/2023) es aplicable a cualquier persona independientemente de su nacionalidad — es más favorable que el convenio bilateral',
    'Cualquier solicitud de prestación bajo una legislación se considera solicitud también bajo la otra si el interesado lo manifiesta expresamente',
  ],
  ctaText: '¿Tienes años cotizados en Colombia? No los pierdas — Agenda tu asesoría — 50€',
};

// Bloque 3 — Doble Imposición Fiscal
export const dobleImposicion = {
  id: 'doble-imposicion',
  title: 'Doble Imposición Fiscal',
  baseNormativa: 'Convenio Bogotá 31/03/2005 (BOE 260/2008) · Ley colombiana 1082/2006',
  description: 'Sin este convenio, una persona con ingresos en ambos países podría pagar impuestos dos veces. El convenio establece reglas claras de atribución fiscal.',
  casosPracticos: [
    'Nómadas digitales con clientes en Colombia residentes en España',
    'Personas con inmuebles en Colombia que perciben rentas de arrendamiento',
    'Autónomos colombianos dados de alta en España con contratos en Colombia',
    'Colombianos con pensión en Colombia que residen en España',
  ],
  nota: 'Este convenio interactúa directamente con el régimen fiscal especial del visado de nómada digital (art. 93 LIRPF). La planificación fiscal binacional requiere asesoría especializada.',
  ctaText: '¿Tienes ingresos en Colombia y vives en España? Agenda tu asesoría — 50€',
};

// Bloque 4 — Canje de Permiso de Conducción
export const canjeLicencia = {
  id: 'canje-licencia',
  title: 'Canje de Permiso de Conducción',
  baseNormativa: 'Canje de Notas 30-31/07/2003 (BOE 232/2003) · Restablecido 24/11/2010',
  description: 'Los colombianos residentes en España pueden canjear el carnet colombiano por el español sin realizar pruebas teóricas ni prácticas.',
  requisitos: [
    'EXCEPCIÓN: Para categorías C, C+E y D (camiones y autobuses) sí se exige prueba de conocimientos técnicos y de circulación',
    'La fecha de expedición del permiso colombiano es determinante — cada caso debe analizarse individualmente',
  ],
  ctaText: '¿Quieres canjear tu licencia colombiana? Agenda tu asesoría — 50€',
};

// Bloque 5 — Protección Recíproca de Inversiones (APPRI)
export const appri = {
  id: 'appri',
  title: 'Protección Recíproca de Inversiones (APPRI)',
  baseNormativa: 'Suscrito 16/09/2021',
  description: '¿Tienes una empresa, una propiedad o dinero invertido en Colombia mientras vives en España? Este tratado te protege.',
  beneficios: 'Garantiza un marco de seguridad jurídica cuando los inversores de cada país operan en el otro. Protege frente a expropiaciones arbitrarias y habilita mecanismos de resolución de controversias. La combinación APPRI + CDI forma un escudo jurídico-fiscal bilateral que muy pocas personas conocen.',
  ctaText: '¿Tienes negocios o propiedades en Colombia mientras resides en España? Agenda tu asesoría — 50€',
};

// CTA Final de sección
export const ctaFinal = {
  text: '¿Cuántos de estos convenios te aplican? Descúbrelo en una asesoría personalizada — 50€, descontables si continúas tu proceso con AMA Consultores',
};
