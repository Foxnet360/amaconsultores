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
            <h1 className="text-4xl font-bold text-navy mb-4">Política de Privacidad</h1>
            <p className="text-lg text-gray-600 mb-8">URL: /politica-de-privacidad · Última actualización: Abril 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Responsable del tratamiento</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Nombre</td>
                      <td className="py-2">Ángela Morales Aristizábal</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">NIF</td>
                      <td className="py-2">55595680B</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Actividad</td>
                      <td className="py-2">Consultoría y asesoría en movilidad internacional, regularización migratoria, homologación de títulos y gestión de proyectos sociales (CNAE 7499)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Domicilio fiscal</td>
                      <td className="py-2">Calle Tulipán 6, Escalera H, Piso 4, Puerta 1, 28231 Las Rozas de Madrid</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Correo electrónico</td>
                      <td className="py-2">
                        <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                          info@amaconsultores.eu
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-navy">Sitio web</td>
                      <td className="py-2">amaconsultores.eu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Datos que recogemos y por qué</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300 my-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tratamiento</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Datos recogidos</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Finalidad</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Base legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Formulario de contacto</td>
                      <td className="border border-gray-300 px-4 py-2">Nombre, email, país de residencia, descripción de la situación</td>
                      <td className="border border-gray-300 px-4 py-2">Responder a la consulta y evaluar si podemos ayudarte</td>
                      <td className="border border-gray-300 px-4 py-2">Ejecución de relación precontractual (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Reserva de asesoría</td>
                      <td className="border border-gray-300 px-4 py-2">Nombre, email, datos de pago (procesados por Stripe)</td>
                      <td className="border border-gray-300 px-4 py-2">Gestionar la reserva y el cobro de la asesoría</td>
                      <td className="border border-gray-300 px-4 py-2">Ejecución del contrato (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Envío de documentación</td>
                      <td className="border border-gray-300 px-4 py-2">Documentos e información que el usuario remite voluntariamente</td>
                      <td className="border border-gray-300 px-4 py-2">Gestión del expediente del cliente</td>
                      <td className="border border-gray-300 px-4 py-2">Ejecución del contrato (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Comunicaciones comerciales</td>
                      <td className="border border-gray-300 px-4 py-2">Email</td>
                      <td className="border border-gray-300 px-4 py-2">Enviar información sobre servicios y novedades</td>
                      <td className="border border-gray-300 px-4 py-2">Consentimiento explícito (art. 6.1.a RGPD) — solo si se marca la casilla opcional</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Reseñas Google</td>
                      <td className="border border-gray-300 px-4 py-2">Nombre de usuario de Google, texto de la reseña</td>
                      <td className="border border-gray-300 px-4 py-2">Mostrar testimonios verificados en la web</td>
                      <td className="border border-gray-300 px-4 py-2">Interés legítimo (art. 6.1.f RGPD) — datos públicos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Encargados del tratamiento</h2>
              
              <p className="mb-4">
                Para prestar los servicios, AMA Consultores utiliza las siguientes plataformas que actúan como encargados del tratamiento de datos bajo el RGPD:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300 my-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Plataforma</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Función</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">País / Marco legal</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Política de privacidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">TidyCal</td>
                      <td className="border border-gray-300 px-4 py-2">Gestión de reservas de asesoría</td>
                      <td className="border border-gray-300 px-4 py-2">EE.UU. — Cláusulas contractuales estándar UE</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <a href="https://tidycal.com/privacy" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">tidycal.com/privacy</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Stripe</td>
                      <td className="border border-gray-300 px-4 py-2">Procesamiento de pagos</td>
                      <td className="border border-gray-300 px-4 py-2">EE.UU. — Cláusulas contractuales estándar UE + PCI DSS</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <a href="https://stripe.com/es/privacy" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/es/privacy</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Holded</td>
                      <td className="border border-gray-300 px-4 py-2">Facturación automática</td>
                      <td className="border border-gray-300 px-4 py-2">España — RGPD aplicable</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <a href="https://holded.com/es/legal/privacidad" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">holded.com/es/legal/privacidad</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Google Business</td>
                      <td className="border border-gray-300 px-4 py-2">Gestión de reseñas públicas</td>
                      <td className="border border-gray-300 px-4 py-2">EE.UU. — Cláusulas contractuales estándar UE</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <a href="https://policies.google.com/privacy" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Hostinger</td>
                      <td className="border border-gray-300 px-4 py-2">Alojamiento web y correo corporativo</td>
                      <td className="border border-gray-300 px-4 py-2">UE — RGPD aplicable</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <a href="https://hostinger.es/legal/privacidad" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">hostinger.es/legal/privacidad</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">
                Todas estas plataformas disponen de las garantías adecuadas para la transferencia internacional de datos conforme al artículo 46 del RGPD.
              </p>
              
              <p className="mb-6">
                En los expedientes que requieren actuación letrada, AMA Consultores puede ceder los datos necesarios a los abogados colaboradores debidamente colegiados que intervengan en cada caso, quienes quedan obligados a tratarlos con la misma confidencialidad exigida por la normativa de protección de datos y por su propio código deontológico profesional. Esta cesión es necesaria para la ejecución del servicio contratado y no requiere consentimiento adicional (art. 6.1.b RGPD).
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Conservación de los datos</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300 my-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Plazo de conservación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Datos de contacto y consultas</td>
                      <td className="border border-gray-300 px-4 py-2">Mientras dure la relación y hasta 3 años tras el último contacto</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Datos de expedientes de clientes</td>
                      <td className="border border-gray-300 px-4 py-2">5 años desde la finalización del servicio</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Datos de facturación</td>
                      <td className="border border-gray-300 px-4 py-2">10 años (obligación fiscal — art. 30 Código de Comercio y Ley 58/2003)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Comunicaciones comerciales</td>
                      <td className="border border-gray-300 px-4 py-2">Hasta que se retire el consentimiento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Derechos del interesado</h2>
              
              <p className="mb-4">
                Puede ejercer los siguientes derechos enviando un correo a{' '}
                <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                  info@amaconsultores.eu
                </a>{' '}
                con copia de su documento de identidad:
              </p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Acceso: conocer qué datos tratamos sobre usted</li>
                <li>Rectificación: corregir datos inexactos o incompletos</li>
                <li>Supresión: solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
                <li>Portabilidad: recibir sus datos en formato estructurado y legible</li>
                <li>Limitación: restringir el tratamiento en determinadas circunstancias</li>
                <li>Oposición: oponerse al tratamiento basado en interés legítimo o para comunicaciones comerciales</li>
              </ul>
              
              <p className="mb-6">
                Si considera que el tratamiento no es conforme al RGPD, puede presentar una reclamación ante la{' '}
                <a 
                  href="https://www.aepd.es" 
                  className="text-gold-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Agencia Española de Protección de Datos (aepd.es)
                </a>.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Modificación de la política</h2>
              
              <p className="mb-6">
                AMA Consultores se reserva el derecho de modificar esta política para adaptarla a novedades legislativas. La versión vigente estará siempre disponible en{' '}
                <a href="https://amaconsultores.eu/politica-de-privacidad" className="text-gold-500 hover:underline">
                  amaconsultores.eu/politica-de-privacidad
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidadPage;
