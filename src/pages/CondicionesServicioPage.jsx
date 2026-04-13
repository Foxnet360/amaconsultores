import React from 'react';
import { Helmet } from 'react-helmet';

const CondicionesServicioPage = () => {
  return (
    <>
      <Helmet>
        <title>Condiciones del Servicio | AMA Consultores</title>
        <meta name="description" content="Condiciones Generales del Servicio de AMA Consultores. Información sobre honorarios, alcance de la consultoría y política de cancelación." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-navy mb-4">Condiciones del Servicio</h1>
            <p className="text-lg text-gray-600 mb-8">Hoja de encargo digital</p>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: Abril 2026
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Identificación del prestador del servicio</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Denominación</td>
                      <td className="py-2">AMA Consultores</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Responsable</td>
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
                      <td className="py-2 font-semibold text-navy">Email de contacto</td>
                      <td className="py-2">
                        <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                          info@amaconsultores.eu
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Sitio web</td>
                      <td className="py-2">amaconsultores.eu</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-navy">Inicio de actividad</td>
                      <td className="py-2">17 de diciembre de 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-gray-700">
                  AMA Consultores ejerce como consultora especializada en movilidad internacional. No constituye ejercicio de la abogacía ni representación procesal ante tribunales españoles. Para actuaciones que requieren firma letrada, AMA Consultores coordina con abogados colaboradores debidamente colegiados. En Colombia, las actuaciones jurídicas son realizadas por abogados colegiados en ejercicio en el territorio colombiano.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Naturaleza y alcance de los servicios</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.1 Asesoría inicial</h3>
              <p className="mb-4">
                Consulta personalizada de 30 minutos en formato online. Incluye el análisis de la situación del cliente, orientación sobre las vías disponibles y elaboración de un plan de acción. No incluye la tramitación del procedimiento ni la representación ante ningún organismo.
              </p>
              <p className="mb-6">
                <strong>Precio:</strong> 50 € IVA incluido. Este importe se descuenta del coste total si el cliente decide continuar con AMA Consultores para el procedimiento completo.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.2 Servicios de gestión y tramitación</h3>
              <p className="mb-6">
                Gestión integral de procedimientos administrativos migratorios, de homologación y equivalencia de títulos, y de trámites ante organismos españoles y colombianos. El detalle de cada servicio y sus condiciones específicas está disponible en amaconsultores.eu.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.3 Servicios para entidades y empresas</h3>
              <p className="mb-6">
                Consultoría para organizaciones que trabajan con población migrante, gestionan proyectos con financiación pública o europea, o necesitan incorporar talento internacional. El alcance y precio se acuerdan mediante presupuesto personalizado previo al inicio del servicio.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Obligación de medios — no de resultados</h2>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <p className="text-sm text-gray-700 font-semibold">
                  CLÁUSULA ESENCIAL: AMA Consultores asume una obligación de medios y no de resultado. Esta es la regla general en los servicios profesionales de consultoría y asesoría, avalada por doctrina consolidada del Tribunal Supremo.
                </p>
              </div>
              
              <p className="mb-4">
                AMA Consultores se compromete a actuar con diligencia, conocimiento especializado y plena dedicación en la gestión de cada expediente. Sin embargo, la resolución favorable o desfavorable de cualquier procedimiento administrativo depende de las autoridades competentes y de circunstancias ajenas al control de AMA Consultores.
              </p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Una resolución desfavorable de la Administración no implica incumplimiento del servicio contratado.</li>
                <li>Los plazos de resolución dependen de la carga de trabajo de cada organismo y no pueden ser garantizados por AMA Consultores.</li>
                <li>Los cambios normativos sobrevenidos durante la tramitación pueden afectar al procedimiento sin responsabilidad de AMA Consultores.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Obligaciones del cliente</h2>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Proporcionar información veraz, completa y actualizada sobre su situación personal, familiar, laboral y migratoria.</li>
                <li>Entregar la documentación requerida en los plazos acordados y en el formato indicado por AMA Consultores.</li>
                <li>Comunicar cualquier cambio en su situación que pueda afectar al procedimiento en curso.</li>
                <li>Responder a las comunicaciones de AMA Consultores en un plazo razonable.</li>
                <li>Abonar los honorarios en los plazos y formas acordados.</li>
                <li>No proporcionar documentación falsa o alterada. En caso de detectarse documentación fraudulenta, AMA Consultores se reserva el derecho de resolver el encargo de forma inmediata sin reembolso de honorarios.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Honorarios, forma de pago y facturación</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.1 Precios</h3>
              <p className="mb-4">
                Los precios están publicados en amaconsultores.eu e incluyen IVA cuando así se indica. Las tasas oficiales de organismos públicos son siempre a cargo del cliente salvo indicación expresa en contrario.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.2 Forma de pago</h3>
              <p className="mb-4">
                Los pagos se realizan a través de Stripe, integrada en el sistema de reservas. El pago es condición necesaria para el inicio del servicio.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.3 Facturación</h3>
              <p className="mb-4">
                Cada pago genera automáticamente una factura emitida por AMA Consultores a través de Holded, que se remite al cliente por correo electrónico. La factura de la asesoría inicial de 50 € se descuenta del importe total del servicio contratado si el cliente decide continuar.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.4 Impagos</h3>
              <p className="mb-6">
                El impago de honorarios da derecho a AMA Consultores a suspender la prestación del servicio y reclamar la cantidad adeudada por los cauces legales oportunos.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Política de cancelación y devoluciones</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">6.1 Cancelación de asesoría inicial</h3>
              <p className="mb-4">
                El cliente puede cancelar con reembolso completo hasta 24 horas antes de la hora acordada. Las cancelaciones con menos de 24 horas de antelación no dan derecho a reembolso.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">6.2 Desistimiento en servicios completos</h3>
              <p className="mb-4">
                Conforme al RDL 1/2007, el cliente tiene derecho a desistir en un plazo de 14 días naturales desde la celebración del contrato, salvo que el servicio haya comenzado a prestarse con su consentimiento expreso. Una vez iniciada la gestión del expediente, no procede el reembolso de los honorarios ya devengados. Las tasas oficiales abonadas a organismos públicos no son reembolsables en ningún caso.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">6.3 Resolución por causa imputable al cliente</h3>
              <p className="mb-6">
                Si el cliente incumple sus obligaciones de forma grave, AMA Consultores podrá resolver el encargo sin reembolso de los honorarios devengados hasta ese momento.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">7. Confidencialidad y protección de datos (RGPD)</h2>
              
              <p className="mb-4">
                AMA Consultores trata los datos personales del cliente conforme al RGPD (UE) 2016/679 y la LO 3/2018 (LOPDGDD). La información aportada se utiliza exclusivamente para la prestación del servicio contratado.
              </p>
              
              <p className="mb-4">
                En los expedientes que requieren actuación letrada, AMA Consultores puede ceder los datos necesarios a los abogados colaboradores debidamente colegiados que intervengan en cada caso, quienes quedan obligados a tratarlos con la misma confidencialidad exigida por la normativa de protección de datos y por su propio código deontológico profesional. Esta cesión es necesaria para la ejecución del servicio contratado y no requiere consentimiento adicional (art. 6.1.b RGPD).
              </p>
              
              <p className="mb-6">
                El cliente puede ejercer sus derechos dirigiéndose a{' '}
                <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                  info@amaconsultores.eu
                </a>
                . La{' '}
                <a href="/politica-de-privacidad" className="text-gold-500 hover:underline">
                  Política de Privacidad
                </a>{' '}
                completa está disponible en la web.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">8. Limitación de responsabilidad</h2>
              
              <p className="mb-4">AMA Consultores no se hace responsable de:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Los daños derivados de resoluciones administrativas desfavorables, siempre que el servicio haya sido prestado con la diligencia debida.</li>
                <li>Los retrasos imputables a organismos públicos o a causas ajenas al control de AMA Consultores.</li>
                <li>Los efectos derivados de información incompleta, incorrecta o falsa proporcionada por el cliente.</li>
                <li>Los cambios normativos sobrevenidos durante la tramitación.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">9. Propiedad intelectual</h2>
              
              <p className="mb-6">
                Los informes, análisis y materiales elaborados por AMA Consultores son de su propiedad intelectual. El cliente podrá utilizarlos para los fines del procedimiento para el que fueron elaborados, pero no podrá reproducirlos o cederlos sin autorización expresa.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">10. Ley aplicable y resolución de conflictos</h2>
              
              <p className="mb-6">
                Las presentes Condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del consumidor. Con carácter previo a cualquier reclamación judicial, las partes intentarán resolver el conflicto de forma amistosa a través de{' '}
                <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                  info@amaconsultores.eu
                </a>
                .
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">11. Modificación de las condiciones</h2>
              
              <p className="mb-6">
                AMA Consultores se reserva el derecho de modificar las presentes Condiciones. Las modificaciones se publicarán en amaconsultores.eu con indicación de la fecha de entrada en vigor.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Aceptación</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <p className="mb-4">
                  La aceptación del checkbox durante el proceso de reserva o contratación implica que el cliente ha leído, comprendido y acepta íntegramente las presentes Condiciones. Esta aceptación queda registrada con fecha, hora e identificación del usuario, con plena validez como hoja de encargo digital.
                </p>
                
                <div className="bg-white p-4 rounded border border-gray-300 mt-4">
                  <p className="text-sm text-gray-700 italic">
                    "He leído y acepto las Condiciones Generales del Servicio de AMA Consultores, incluyendo la política de honorarios, el alcance de la consultoría y la obligación de medios. Entiendo que la contratación del servicio no garantiza una resolución administrativa favorable."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CondicionesServicioPage;
