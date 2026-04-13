/**
 * Datos de servicios en Colombia
 * Basado en documento Correcciones.xml de AMA Consultores
 */

// Disclaimer legal de operación en Colombia
export const disclaimerColombia = {
  text: 'AMA Consultores opera en materia de derecho colombiano en calidad de consultora jurídica. Para actuaciones procesales en Colombia coordinamos con abogados colegiados en ejercicio en el territorio colombiano.',
  type: 'disclaimer',
};

// Bloque 1 — Visados para Colombia
export const visadosColombia = {
  id: 'visados-colombia',
  title: 'Visados para Colombia',
  baseNormativa: 'Resolución 5477/2022 de Cancillería colombiana · Decreto 1067/2015',
  description: 'Tramitación de visados de cualquier tipo para entrada y permanencia en Colombia.',
  tipos: [
    {
      tipo: 'Visa Visitante (V)',
      descripcion: 'Estancias temporales: turismo, negocios, actividades religiosas. Máx. 2 años según subcategoría',
    },
    {
      tipo: 'Visa Migrante (M)',
      descripcion: 'Cónyuge/compañero de colombiano, pensionado, inversionista, trabajador con contrato, rentista. Hasta 3 años',
    },
    {
      tipo: 'Visa Residente (R)',
      descripcion: 'Residencia indefinida. Acceden quienes acumulan 5 años con visa Migrante, cónyuges de colombianos con 3 años de convivencia, y otros supuestos',
    },
  ],
  price: 'Consulta tu caso',
};

// Bloque 2 — Trámites ante Migración Colombia y Cancillería
export const tramitesMigracion = {
  id: 'tramites-migracion-colombia',
  title: 'Trámites ante Migración Colombia y Cancillería',
  baseNormativa: 'Migración Colombia · Ley 1465/2011 · Resolución 3167/2019',
  description: 'Con poder notarial otorgado en el país de residencia del cliente, gestionamos procedimientos ante Migración Colombia, Cancillería y otras entidades a través de nuestra red en Colombia. No es necesario desplazarse. Disponible para clientes de cualquier nacionalidad.',
  servicios: [
    'Solicitud y renovación de cédula de extranjería',
    'Recursos y reclamaciones ante Migración Colombia',
    'Apostillas, autenticaciones y pasaportes ante Cancillería',
    'Gestión de poderes notariales para actuaciones en Colombia',
    'Trámites empresariales: constitución de sociedades, permisos sectoriales',
  ],
  price: 'Consulta tu caso',
};

// Bloque 3 — Apostillas y Legalizaciones
export const apostillasLegalizaciones = {
  id: 'apostillas-legalizaciones',
  title: 'Apostillas y Legalizaciones',
  baseNormativa: 'Convenio de La Haya de 1961 · Decreto 4496/2022 (Colombia)',
  description: 'Gestión de apostillas y legalizaciones de documentos para uso internacional.',
  tipos: [
    {
      tipo: 'Apostilla',
      descripcion: 'Para documentos públicos de países firmantes del Convenio de La Haya. España y Colombia son partes: basta la apostilla española, sin legalización consular adicional',
    },
    {
      tipo: 'Legalización consular',
      descripcion: 'Para documentos de países no firmantes. Se tramita ante el Consulado colombiano en el país de origen',
    },
    {
      tipo: 'Traducción oficial',
      descripcion: 'Documentos en español no requieren traducción para Colombia. Otros idiomas sí requieren traducción oficial por traductor certificado',
    },
  ],
  price: 'Consulta tu caso',
};

// Bloque 4 — Regularización de Situación Migratoria en Colombia
export const regularizacionColombia = {
  id: 'regularizacion-colombia',
  title: 'Regularización de Situación Migratoria en Colombia',
  baseNormativa: 'Resolución 5477/2022 · Decreto 1067/2015',
  description: 'Tener visa no equivale a estar plenamente regularizado. Asesoramos a ciudadanos de cualquier nacionalidad que se encuentran en Colombia en situación irregular o con trámites pendientes.',
  servicios: [
    'Regularización de situaciones migratorias irregulares',
    'Renovaciones de visa y cédula de extranjería',
    'Recursos ante resoluciones de Migración Colombia',
  ],
  price: 'Consulta tu caso',
};

// Bloque 5 — Retorno
export const retornoColombia = {
  id: 'retorno-colombia',
  title: 'Retorno',
  baseNormativa: 'Ley 1565/2012 · Programa Colombia Nos Une — Cancillería',
  description: 'Regresar a Colombia después de años en el exterior también requiere acompañamiento. Te orientamos en la gestión documental, la homologación de títulos españoles en Colombia, y los trámites de reintegración.',
  servicios: [
    'Gestión y organización de documentación para el retorno',
    'Homologación de títulos españoles en Colombia',
    'Reintegración ante entidades colombianas',
    'Para hijos nacidos en España: inscripción en el Registro Civil colombiano y gestión de la doble nacionalidad',
  ],
  price: 'Consulta tu caso',
};
