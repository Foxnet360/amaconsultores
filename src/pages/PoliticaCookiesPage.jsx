import React from 'react';
import { Helmet } from 'react-helmet';

const PoliticaCookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | AMA Consultores</title>
        <meta name="description" content="Política de cookies de AMA Consultores. Información sobre el uso de cookies en nuestro sitio web." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-navy mb-4">Política de Cookies</h1>
            <p className="text-lg text-gray-600 mb-8">URL: /politica-de-cookies · Última actualización: Abril 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. ¿Qué son las cookies?</h2>
              
              <p className="mb-6">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario para recordar preferencias, analizar el uso del sitio o facilitar su funcionamiento. Conforme a la Ley 34/2002 (LSSI) y al RGPD, informamos del uso de cookies en este sitio.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Tipos de cookies que utilizamos</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300 my-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Finalidad</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Consentimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Técnicas (necesarias)</td>
                      <td className="border border-gray-300 px-4 py-2">Cookies de sesión del sitio · Cookie de preferencia</td>
                      <td className="border border-gray-300 px-4 py-2">Funcionamiento básico del sitio web.</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión / 1 año</td>
                      <td className="border border-gray-300 px-4 py-2">No requiere consentimiento</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Analíticas</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics 4 (_ga, _gid, _gat)</td>
                      <td className="border border-gray-300 px-4 py-2">Análisis del comportamiento de los usuarios de forma anonimizada.</td>
                      <td className="border border-gray-300 px-4 py-2">2 años / 24h / 1 min</td>
                      <td className="border border-gray-300 px-4 py-2">Requiere consentimiento</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Funcionales</td>
                      <td className="border border-gray-300 px-4 py-2">Sistema de reservas</td>
                      <td className="border border-gray-300 px-4 py-2">Necesarias para el funcionamiento del sistema de reservas integrado en la web.</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                      <td className="border border-gray-300 px-4 py-2">No requiere consentimiento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Cómo gestionar o eliminar las cookies</h2>
              
              <p className="mb-4">
                Puedes aceptar, rechazar o gestionar las cookies a través del banner que aparece al acceder por primera vez al sitio. También puedes configurar tu navegador:
              </p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                <li>Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                <li>Safari: Preferencias → Privacidad → Gestionar datos del sitio web</li>
                <li>Microsoft Edge: Configuración → Privacidad, búsqueda y servicios → Cookies</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Transferencia internacional de datos</h2>
              
              <p className="mb-6">
                Google Analytics implica la transferencia de datos a servidores de Google LLC en Estados Unidos. Google LLC está acogido a las Cláusulas Contractuales Estándar aprobadas por la Comisión Europea, que garantizan un nivel adecuado de protección conforme al art. 46 RGPD.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Modificación de la política de cookies</h2>
              
              <p className="mb-6">
                AMA Consultores se reserva el derecho de modificar esta política. La versión vigente estará siempre disponible en{' '}
                <a href="https://amaconsultores.eu/politica-de-cookies" className="text-gold-500 hover:underline">
                  amaconsultores.eu/politica-de-cookies
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaCookiesPage;
