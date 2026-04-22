import React from 'react';
import { Helmet } from 'react-helmet';

const AvisoLegalPage = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | AMA Consultores</title>
        <meta name="description" content="Aviso legal de AMA Consultores. Información sobre condiciones de uso y responsabilidades." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-navy mb-4">Aviso Legal</h1>
            <p className="text-lg text-gray-600 mb-8">URL: /aviso-legal · Última actualización: Abril 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Identificación del titular</h2>
              
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
                      <td className="py-2 font-semibold text-navy">Actividad registrada</td>
                      <td className="py-2">CNAE 7499 — Otras actividades profesionales, científicas y técnicas n.c.o.p.</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Domicilio fiscal</td>
                      <td className="py-2">Calle Tulipán 6, Escalera H, Piso 4, Puerta 1, 28231 Las Rozas de Madrid</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Inicio de actividad</td>
                      <td className="py-2">17 de diciembre de 2025</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-navy">Email de contacto</td>
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
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Objeto y naturaleza de la actividad</h2>
              
              <p className="mb-4">
                AMA Consultores presta servicios de consultoría y asesoría especializada en movilidad internacional, regularización migratoria, homologación de títulos universitarios y gestión de proyectos sociales con financiación pública y europea.
              </p>
              
              <p className="mb-6">
                La actividad se desarrolla como consultoría profesional y no constituye ejercicio de la abogacía ni representación procesal ante tribunales españoles. Para las actuaciones que requieren firma letrada en España, AMA Consultores coordina con abogados colaboradores debidamente colegiados en el Colegio de Abogados correspondiente. En Colombia, las actuaciones jurídicas son realizadas por abogados colegiados en ejercicio en el territorio colombiano.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Propiedad intelectual e industrial</h2>
              
              <p className="mb-6">
                Los contenidos del sitio web amaconsultores.eu — textos, imágenes, logotipos, diseño gráfico y estructura — son propiedad de Ángela Morales Aristizábal o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución, transformación o comunicación pública sin autorización expresa.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Limitación de responsabilidad</h2>
              
              <p className="mb-6">
                AMA Consultores no garantiza la exactitud, integridad o actualización de la información publicada en la web, que tiene carácter meramente orientativo. La información publicada sobre procedimientos migratorios es orientativa y no sustituye el análisis jurídico individualizado de cada caso.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Ley aplicable</h2>
              
              <p className="mb-6">
                Las presentes condiciones de uso se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a la jurisdicción de los Juzgados y Tribunales de Madrid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvisoLegalPage;
