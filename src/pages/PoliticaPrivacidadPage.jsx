import React from 'react';
import { Helmet } from 'react-helmet';

const PoliticaPrivacidadPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | AMA Consultores</title>
        <meta name="description" content="Política de privacidad de AMA Consultores. Información sobre el tratamiento de datos personales." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-navy mb-8">Política de Privacidad</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: 8 de abril de 2026
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Responsable del Tratamiento</h2>
              <p>
                El responsable del tratamiento de los datos personales es:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Nombre:</strong> Ángela Morales</li>
                <li><strong>NIF:</strong> 55595680B</li>
                <li><strong>Razón Social:</strong> AMA Consultores</li>
                <li><strong>Email:</strong> info@amaconsultores.eu</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Delegado de Protección de Datos (DPO)</h3>
              <p className="mb-6">
                De acuerdo con el Art. 37 del RGPD, no está obligada a designar un Delegado de Protección de Datos 
                ya que AMA Consultores es una pequeña empresa con menos de 250 empleados y el tratamiento de datos 
                no constituye la actividad principal ni implica el procesamiento sistemático a gran escala de datos 
                personales sensibles. Sin embargo, para garantizar la protección de sus datos personales, 
                el responsable del tratamiento (Ángela Morales) actúa como punto de contacto para todas las 
                cuestiones relacionadas con la protección de datos.
              </p>
              
              <p className="mb-6">
                <strong>Contacto para protección de datos:</strong>{' '}
                <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                  info@amaconsultores.eu
                </a>
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Datos que Recopilamos</h2>
              <p>
                Recopilamos los siguientes datos personales a través de nuestros formularios:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>País de residencia</li>
                <li>Información sobre su situación migratoria</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Base Legal del Tratamiento</h2>
              <p>
                El tratamiento de sus datos personales se realiza conforme a las siguientes bases legales establecidas en el Reglamento General de Protección de Datos (RGPD):
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Ejecución de un contrato (Art. 6.1.b RGPD):</strong> Para la prestación de servicios de consultoría migratoria contratados.</li>
                <li><strong>Consentimiento expreso (Art. 6.1.a RGPD):</strong> Para el envío de comunicaciones comerciales y newsletters.</li>
                <li><strong>Interés legítimo (Art. 6.1.f RGPD):</strong> Para responder a consultas y solicitudes de información.</li>
                <li><strong>Obligación legal (Art. 6.1.c RGPD):</strong> Para el cumplimiento de obligaciones fiscales y contables.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Finalidad del Tratamiento</h2>
              <p>
                Los datos personales se tratan para las siguientes finalidades específicas:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Gestionar las consultas y solicitudes de información</li>
                <li>Prestar los servicios de consultoría migratoria contratados</li>
                <li>Gestionar las reservas de asesoría a través de Calendly</li>
                <li>Facturación y gestión contable de los servicios</li>
                <li>Enviar comunicaciones comerciales (solo con consentimiento explícito previo)</li>
                <li>Cumplir con obligaciones legales fiscales y administrativas</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Encargados de Tratamiento y Transferencias Internacionales</h2>
              <p>
                Para la prestación de nuestros servicios, utilizamos los siguientes encargados de tratamiento 
                con los que existen acuerdos de tratamiento de datos conforme al artículo 28 del RGPD:
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Encargados ubicados en el EEE</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  <strong>Holded (Necotium S.L.):</strong> Facturación, contabilidad y gestión administrativa. 
                  Datos tratados: datos fiscales, facturas, datos de contacto. Ubicación: España (EEE).<br/>
                  <a href="https://holded.com/es/privacidad" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad de Holded
                  </a>
                </li>
                <li>
                  <strong>Hostinger International Ltd.:</strong> Alojamiento web y almacenamiento de datos. 
                  Datos tratados: todos los datos almacenados en el sitio web. Ubicación: Lituania (EEE).<br/>
                  <a href="https://www.hostinger.es/privacidad" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad de Hostinger
                  </a>
                </li>
                <li>
                  <strong>Google Analytics 4:</strong> Análisis de tráfico web (anonimizado). 
                  Datos tratados: datos de navegación anonimizados (no PII). Solo se activa con consentimiento explícito.<br/>
                  <a href="https://policies.google.com/privacy" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad de Google
                  </a>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Encargados con transferencias internacionales</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  <strong>Calendly (Calendly LLC):</strong> Gestión de reservas y citas. 
                  Datos tratados: nombre, email, teléfono.<br/>
                  <strong>Ubicación:</strong> Estados Unidos (fuera del EEE).<br/>
                  <strong>Garantías:</strong> Calendly ha certificado su cumplimiento con el Data Privacy Framework de la UE-EEUU 
                  (adecuación reconocida por la Comisión Europea). Además, existe un contrato de tratamiento con cláusulas 
                  contractuales tipo aprobadas por la Comisión Europea (Art. 46.2.c RGPD).<br/>
                  <a href="https://calendly.com/privacy" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad de Calendly
                  </a>
                </li>
                <li>
                  <strong>Stripe, Inc.:</strong> Procesamiento de pagos y transacciones. 
                  Datos tratados: datos de pago (tarjeta tokenizada), email, nombre.<br/>
                  <strong>Ubicación:</strong> Estados Unidos (fuera del EEE).<br/>
                  <strong>Garantías:</strong> Stripe ha certificado su cumplimiento con el Data Privacy Framework de la UE-EEUU. 
                  Existe contrato de tratamiento con cláusulas contractuales tipo (Art. 46.2.c RGPD).<br/>
                  <a href="https://stripe.com/privacy" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad de Stripe
                  </a>
                </li>
                <li>
                  <strong>EmailJS (EmailJS Corporation):</strong> Envío de formularios de contacto por email. 
                  Datos tratados: nombre, email, mensaje, país.<br/>
                  <strong>Ubicación:</strong> Estados Unidos (fuera del EEE).<br/>
                  <strong>Garantías:</strong> EmailJS procesa los datos como encargado y proporciona un DPA (Data Processing Addendum) 
                  con cláusulas contractuales tipo (SCCs) conforme al Art. 46.2.c RGPD. Los datos se transmiten 
                  temporalmente para el envío del email y no se almacenan permanentemente en sus servidores.<br/>
                  <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad de EmailJS
                  </a>
                </li>
              </ul>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Nota sobre transferencias internacionales:</strong> Algunos de nuestros proveedores están ubicados 
                  en Estados Unidos. Todas las transferencias se realizan con garantías adecuadas conforme al RGPD 
                  (cláusulas contractuales tipo certificadas). Usted puede solicitar copia de estas garantías 
                  contactando con nosotros.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Plazo de Conservación</h2>
              <p>
                Los datos personales se conservarán durante los siguientes períodos:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Datos de clientes y consultas:</strong> 6 años desde la última interacción (conforme al Código Civil español, art. 1964).</li>
                <li><strong>Datos de facturación:</strong> 6 años (conforme a la Ley General Tributaria, art. 66).</li>
                <li><strong>Datos de comunicaciones comerciales:</strong> Hasta que el usuario solicite su supresión o revoque el consentimiento.</li>
                <li><strong>Datos de cookies y navegación (analíticas):</strong> Máximo 14 meses (configuración estándar de Google Analytics 4).</li>
                <li><strong>Datos de consentimiento:</strong> 2 años desde la obtención del consentimiento o su revocación.</li>
              </ul>
              <p>
                Una vez cumplidos estos plazos, los datos serán eliminados o anonimizados de forma segura.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">7. Sus Derechos y Procedimiento de Ejercicio</h2>
              <p className="mb-4">
                Como titular de los datos personales, puede ejercer los siguientes derechos conforme al RGPD:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Derecho de acceso (Art. 15 RGPD):</strong> Obtener confirmación sobre si se están tratando sus datos y acceder a la información sobre el tratamiento.</li>
                <li><strong>Derecho de rectificación (Art. 16 RGPD):</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Derecho de supresión ("derecho al olvido") (Art. 17 RGPD):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios, haya retirado el consentimiento, o se oponga al tratamiento.</li>
                <li><strong>Derecho de oposición (Art. 21 RGPD):</strong> Oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.</li>
                <li><strong>Derecho de limitación del tratamiento (Art. 18 RGPD):</strong> Solicitar la suspensión del tratamiento en determinadas circunstancias.</li>
                <li><strong>Derecho de portabilidad (Art. 20 RGPD):</strong> Recibir sus datos en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Procedimiento para ejercer sus derechos</h3>
              <p className="mb-4">
                Puede ejercer sus derechos enviando una solicitud escrita por cualquiera de los siguientes medios:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <h4 className="font-semibold text-navy mb-3">Por email (recomendado):</h4>
                <p className="mb-3">
                  Envíe un email a:{' '}
                  <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline font-semibold">
                    info@amaconsultores.eu
                  </a>
                </p>
                <p className="text-sm text-gray-600 mb-3">Asunto del email: "Ejercicio de derechos RGPD - [Su nombre completo]"</p>
                
                <h5 className="font-semibold text-navy mb-2">Contenido mínimo del email:</h5>
                <div className="bg-white p-4 rounded border border-gray-300 text-sm font-mono">
                  <p className="mb-2">Estimada AMA Consultores,</p>
                  <p className="mb-2">
                    Por medio de la presente, y en ejercicio de los derechos que me asisten conforme al 
                    Reglamento General de Protección de Datos (RGPD), solicito:
                  </p>
                  <p className="mb-2">
                    [ ] Acceso a mis datos personales<br/>
                    [ ] Rectificación de datos inexactos<br/>
                    [ ] Supresión de mis datos<br/>
                    [ ] Oposición al tratamiento<br/>
                    [ ] Limitación del tratamiento<br/>
                    [ ] Portabilidad de mis datos
                  </p>
                  <p className="mb-2">Datos de identificación:</p>
                  <p className="mb-1">- Nombre completo: [Su nombre]</p>
                  <p className="mb-1">- Email asociado: [email usado en la web]</p>
                  <p className="mb-2">- DNI/NIE/Pasaporte: [número de documento]</p>
                  <p className="mb-2">
                    Motivación específica (opcional pero recomendado):<br/>
                    [Explique brevemente por qué solicita el ejercicio del derecho]
                  </p>
                  <p className="mb-2">En [ciudad], a [fecha]</p>
                  <p>Fdo. [Su nombre completo]</p>
                </div>
              </div>
              
              <p className="mb-4">
                <strong>Plazo de respuesta:</strong> Le responderemos en un plazo máximo de 1 mes desde la recepción 
                de su solicitud. Este plazo puede prorrogarse hasta 2 meses adicionales en caso de solicitudes 
                complejas o numerosas, informándole de dicha prórroga dentro del primer mes.
              </p>
              
              <p className="mb-6">
                <strong>Verificación de identidad:</strong> Para garantizar su privacidad, podremos solicitarle 
                documentación adicional que acredite su identidad (copia del DNI/NIE o pasaporte) antes de 
                proceder con su solicitud.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Reclamación ante la Autoridad de Control</h3>
              <p className="mb-6">
                Si considera que el tratamiento de sus datos personales vulnera la normativa, tiene derecho a 
                presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>. 
                Puede contactar con ellos a través de su web:{' '}
                <a 
                  href="https://www.aepd.es" 
                  className="text-gold-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  www.aepd.es
                </a>{' '}
                o en su dirección postal: C/ Jorge Juan, 6, 28001 Madrid.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">8. Decisiones Automatizadas y Perfiles</h2>
              <p className="mb-4">
                AMA Consultores le informa que <strong>no se toman decisiones automatizadas</strong> basadas únicamente 
                en el tratamiento automatizado de sus datos personales que produzcan efectos jurídicos o le afecten 
                significativamente de forma similar (Art. 22 RGPD).
              </p>
              
              <p className="mb-4">
                <strong>Decisiones que se toman:</strong> Todas las decisiones relacionadas con la prestación de servicios 
                de consultoría migratoria son tomadas por profesionales humanos (Ángela Morales) tras un análisis 
                individualizado de cada caso. No utilizamos algoritmos ni sistemas automáticos para decidir la 
                viabilidad de procedimientos migratorios, aprobación de servicios o cualquier otra decisión 
                que afecte a sus derechos e intereses.
              </p>
              
              <p className="mb-4">
                <strong>Creación de perfiles:</strong> No realizamos creación de perfiles (Art. 4.4 RGPD) que 
                analicen o predigan aspectos personales como preferencias, fiabilidad, comportamiento, ubicación 
                o movimientos. El único seguimiento realizado es el estrictamente necesario para la gestión de 
                su caso migratorio, realizado manualmente por nuestro equipo.
              </p>
              
              <p>
                <strong>Uso de IA y algoritmos:</strong> No utilizamos inteligencia artificial, machine learning 
                ni sistemas automatizados para el tratamiento de sus datos personales. Toda la información 
                proporcionada es analizada y procesada manualmente por personal cualificado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidadPage;
