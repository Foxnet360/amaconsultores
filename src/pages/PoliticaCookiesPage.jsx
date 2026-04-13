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
            <h1 className="text-4xl font-bold text-navy mb-8">Política de Cookies</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: 30 de marzo de 2026
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                un sitio web. Sirven para recordar sus preferencias y mejorar su experiencia de navegación.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.1 Cookies Técnicas y Funcionales (Necesarias)</h3>
              <p>Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. 
              Sin ellas, el sitio no funcionaría correctamente.</p>
              
              <table className="min-w-full border-collapse border border-gray-300 my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ama_cookie_consent</td>
                    <td className="border border-gray-300 px-4 py-2">Almacena sus preferencias de consentimiento de cookies y las categorías aceptadas</td>
                    <td className="border border-gray-300 px-4 py-2">1 año</td>
                  </tr>
                </tbody>
              </table>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.2 Cookies de Análisis (Opcionales)</h3>
              <p>Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web. Solo se instalan si usted da su consentimiento expreso.</p>
              
              <table className="min-w-full border-collapse border border-gray-300 my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics 4 - Distingue usuarios únicos (anonimizado)</td>
                    <td className="border border-gray-300 px-4 py-2">2 años</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics 4 - Distingue sesiones (anonimizado)</td>
                    <td className="border border-gray-300 px-4 py-2">24 horas</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gat</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics 4 - Limita tasa de solicitudes</td>
                    <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                  </tr>
                </tbody>
              </table>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Categorías de Cookies</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-navy mb-2">Cookies Necesarias</h3>
                <p className="text-sm">Son esenciales para el funcionamiento básico del sitio. No almacenan información personal identificable. Se activan automáticamente.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-navy mb-2">Cookies de Análisis (Google Analytics 4)</h3>
                <p className="text-sm">Nos ayudan a mejorar el sitio analizando el comportamiento de los usuarios. <strong>Solo se activan con su consentimiento explícito.</strong></p>
              </div>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Google Analytics 4 - Medidas de Privacidad</h2>
              <p>Utilizamos Google Analytics 4 para analizar el tráfico de nuestro sitio web de forma responsable. <strong>Hemos implementado las siguientes medidas de privacidad:</strong></p>
              
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Anonimización de IP:</strong> Las direcciones IP se anonimizan antes de su almacenamiento</li>
                <li><strong>Sin PII:</strong> No se recopila información personal identificable (nombres, emails, teléfonos)</li>
                <li><strong>Datos agregados:</strong> Solo analizamos estadísticas agregadas, nunca individuales</li>
                <li><strong>Retención limitada:</strong> Los datos se retienen durante 14 meses máximo (estándar de GA4)</li>
                <li><strong>Compartir desactivado:</strong> Los datos no se comparten con otros servicios de Google para publicidad</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Cómo Gestionar las Cookies</h2>
              <p>Puede gestionar sus preferencias de cookies de las siguientes formas:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Banner de cookies:</strong> Al visitar nuestro sitio, puede aceptar o rechazar las cookies de análisis</li>
                <li><strong>Configuración del navegador:</strong> Puede configurar su navegador para bloquear o eliminar cookies</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Más Información</h2>
              <p>Para más información sobre cómo usamos sus datos, consulte nuestra{' '}
                <a href="/politica-de-privacidad" className="text-gold-500 hover:underline">
                  Política de Privacidad
                </a>.
              </p>
              
              <p>Si tiene preguntas sobre nuestra política de cookies, contáctenos en:{' '}
                <a href="mailto:info@amaconsultores.eu" className="text-gold-500 hover:underline">
                  info@amaconsultores.eu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaCookiesPage;
