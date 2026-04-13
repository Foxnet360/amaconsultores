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
            <h1 className="text-4xl font-bold text-navy mb-8">Aviso Legal</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: 12 de abril de 2026
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Identificación</h2>
              <p>En cumplimiento con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información 
              y de comercio electrónico, se informa:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Denominación social:</strong> AMA Consultores</li>
                <li><strong>CNAE:</strong> 7499 - Otras actividades profesionales, científicas y técnicas n.c.o.p.</li>
                <li><strong>NIF:</strong> 55595680B</li>
                <li><strong>Dirección:</strong> España y Colombia</li>
                <li><strong>Email:</strong> info@amaconsultores.eu</li>
                <li><strong>Dominio:</strong> amaconsultores.eu</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Objeto Social</h2>
              <p>
                AMA Consultores es una empresa dedicada a la <strong>consultoría especializada en movilidad internacional, 
                derecho migratorio y gestión de proyectos sociales</strong>. Nuestro objeto social abarca:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Asesoramiento en procesos de regularización migratoria y extranjería</li>
                <li>Gestión de trámites ante administraciones españolas y colombianas</li>
                <li>Consultoría en movilidad profesional internacional</li>
                <li>Gestión integral de contratación internacional para empresas</li>
                <li>Asesoría a entidades del tercer sector en proyectos europeos</li>
                <li>Homologación y reconocimiento de cualificaciones profesionales</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. Objeto del Sitio Web</h2>
              <p>
                El presente aviso legal regula el acceso, navegación y uso del sitio web amaconsultores.eu. 
                La finalidad de este sitio web es ofrecer información sobre nuestros servicios de consultoría en 
                migraciones internacionales y proyectos sociales en España y Colombia.
              </p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Condiciones de Uso</h2>
              <p>El acceso y uso de este sitio web implica la aceptación plena y sin reservas de todas las 
              disposiciones incluidas en este Aviso Legal. El usuario se compromete a:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>Hacer un uso adecuado y lícito del sitio web</li>
                <li>No realizar actividades ilícitas o contrarias a la buena fe</li>
                <li>No causar daños en los sistemas físicos o lógicos del sitio</li>
                <li>No introducir virus o cualquier otro sistema que cause daños</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">5. Exclusión de Responsabilidad</h2>
              <p className="mb-4"><strong>Carácter orientativo:</strong> La información contenida en este sitio web tiene 
              carácter meramente orientativo y <strong>no constituye asesoramiento jurídico individualizado</strong>. 
              El usuario reconoce y acepta que el acceso a este sitio web no implica relación contractual 
              ni profesional alguna con AMA Consultores.</p>
              
              <p className="mb-4"><strong>Limitación de responsabilidad:</strong> AMA Consultores no se hace responsable 
              de los daños o perjuicios que pudieran derivarse de:</p>
              
              <ul className="list-disc pl-6 mb-6">
                <li>La utilización de la información contenida en este sitio web sin asesoramiento profesional previo</li>
                <li>Cambios en la normativa migratoria posteriores a la publicación del contenido</li>
                <li>Decisiones administrativas de organismos públicos</li>
                <li>Errores u omisiones en la información, aunque intentamos mantenerla actualizada</li>
                <li>Problemas técnicos, virus o intrusiones en el sistema</li>
                <li>Enlaces a terceros contenidos en el sitio web</li>
              </ul>
              
              <p className="mb-4"><strong>Cada caso es único:</strong> Los procesos migratorios son altamente 
              dependientes de circunstancias personales y cambios normativos. Para casos específicos, 
              <strong>se recomienda solicitar una asesoría personalizada</strong> a través de los medios de contacto 
              habilitados.</p>
              
              <p className="mt-4"><strong>Exactitud de la información:</strong> AMA Consultores realiza esfuerzos 
              razonables para mantener la información actualizada y precisa, pero no garantiza la ausencia 
              total de errores u omisiones dada la naturaleza cambiante de la normativa migratoria.</p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">6. Propiedad Intelectual</h2>
              <p>Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño, etc.) 
              son propiedad de AMA Consultores o se utilizan con autorización de sus titulares.</p>
              
              <p>Queda prohibida la reproducción, distribución, comunicación pública o transformación 
              de estos contenidos sin autorización expresa.</p>
              
              <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">7. Jurisdicción</h2>
              <p>Para la resolución de cualquier controversia que pudiera surgir en relación con este 
              sitio web, el usuario y AMA Consultores se someten a los Juzgados y Tribunales de 
              <strong>Madrid</strong>, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvisoLegalPage;
