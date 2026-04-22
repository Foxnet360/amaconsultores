import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Globe } from 'lucide-react';

const MovilidadSection = () => {
  const scrollToAsesoria = () => {
    const element = document.getElementById('asesoria');
    if (element) {
      const offset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="movilidad" className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Impulsa tu carrera en España. Te acompañamos en la homologación de títulos y el acceso al empleo cualificado.
          </p>
        </motion.div>

        {/* Bloque 1 — Homologación y Equivalencia de Títulos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Bloque 1 — Homologación y Equivalencia de Títulos</h3>
              <p className="text-gold-400 text-sm">Base normativa: RD 967/2014 · Ministerio de Universidades</p>
            </div>
          </div>

          <p className="text-white/80 mb-6">
            Llevamos años acompañando a profesionales en este proceso. Nos encargamos de analizar tu caso, orientarte sobre el procedimiento correcto, reunir y organizar la documentación, y acompañarte en cada paso hasta la resolución.
          </p>

          <h4 className="text-lg font-semibold text-white mb-3">¿Cuál es tu situación?</h4>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-white font-medium">Tengo un título universitario y quiero ejercer mi profesión o validar mis estudios en España:</p>
              <p className="text-white/70">La mayoría de los procedimientos se tramitan ante el Ministerio de Universidades. Esto incluye tanto la homologación a un título español concreto como la declaración de equivalencia de nivel.</p>
            </div>

            <div className="bg-navy-900/60 border border-gold-500/30 rounded-lg p-4">
              <p className="text-white/90 text-sm"><strong className="text-gold-400">IMPORTANTE:</strong> Para las profesiones no reguladas puedes solicitar equivalencia perfectamente, sin necesidad de homologación. Y hay profesiones reguladas — como el Derecho — en las que si no quieres ejercer en cuenta ajena, puedes optar por la equivalencia a grado.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-white font-medium">Tengo un doctorado:</p>
                <p className="text-white/70">La equivalencia se tramita ante la universidad — no ante el Ministerio. Precio: 1.000€ IVA incluido.</p>
              </div>
              <div>
                <p className="text-white font-medium">Tengo un título de FP, técnico o bachillerato:</p>
                <p className="text-white/70">Procedimiento de equivalencia ante el Ministerio de Educación.</p>
              </div>
            </div>

            <div>
              <p className="text-white font-medium">¿Homologación o equivalencia — cuál me conviene? Depende de tu objetivo. Te lo analizamos en la asesoría.</p>
            </div>
          </div>

          {/* Precios */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-white text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4">Servicio</th>
                  <th className="text-left py-3 px-4">Precio</th>
                </tr>
              </thead>
              <tbody className="text-white/90">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Homologación profesional universitaria</td>
                  <td className="py-3 px-4 font-semibold text-gold">530€ IVA incluido</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Homologación técnica/tecnológica</td>
                  <td className="py-3 px-4 font-semibold text-gold">430€ IVA incluido</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Homologación bachillerato</td>
                  <td className="py-3 px-4 font-semibold text-gold">360€ IVA incluido</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Equivalencia de doctorado</td>
                  <td className="py-3 px-4 font-semibold text-gold">1.000€ IVA incluido</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-navy-900/60 border border-white/10 rounded-lg p-4 mb-6">
            <p className="text-white/90 text-sm">Para titulaciones colombianas, el servicio incluye las apostillas, legalizaciones y en la mayoría de los casos el envío y recepción de documentos desde Colombia — todo dentro de la tarifa. Para titulaciones obtenidas fuera de Colombia, los documentos deberán entregarse previamente legalizados y apostillados.</p>
          </div>

          <Button
            onClick={scrollToAsesoria}
            className="bg-gold hover:bg-gold-dark text-navy font-semibold"
          >
            Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas
          </Button>
        </motion.div>

        {/* Bloque 2 — Orientación Laboral y Acceso a Empleo Cualificado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
              <Briefcase className="text-gold" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Bloque 2 — Orientación Laboral y Acceso a Empleo Cualificado</h3>
          </div>

          <p className="text-white/80 mb-6">
            Muchas personas con formación universitaria o técnica llegan a España y terminan ejerciendo trabajos muy por debajo de su nivel de cualificación — no por falta de capacidad, sino por desconocimiento del sistema o ausencia de acompañamiento estratégico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-navy-900/40 border border-white/10 rounded-lg p-4">
              <h4 className="text-gold-400 font-semibold mb-2">Fase 1 — Diagnóstico</h4>
              <p className="text-white/80 text-sm">Analizamos tu perfil, identificamos si tu título requiere homologación previa y mapeamos el mercado laboral español para tu perfil concreto.</p>
            </div>
            <div className="bg-navy-900/40 border border-white/10 rounded-lg p-4">
              <h4 className="text-gold-400 font-semibold mb-2">Fase 2 — Estrategia</h4>
              <p className="text-white/80 text-sm">Orientamos sobre sectores con demanda activa, adaptamos tu CV al formato español y asesoramos sobre cómo presentar tu trayectoria internacional como un activo diferencial.</p>
            </div>
            <div className="bg-navy-900/40 border border-white/10 rounded-lg p-4">
              <h4 className="text-gold-400 font-semibold mb-2">Fase 3 — Acompañamiento</h4>
              <p className="text-white/80 text-sm">Apoyo en contratos, alta en Seguridad Social, derechos laborales y autorizaciones de trabajo vinculadas a tu situación migratoria.</p>
            </div>
          </div>

          <p className="text-white/80 mb-2">Tu situación migratoria condiciona el acceso al mercado laboral. En AMA Consultores asesoramos de forma integrada: situación migratoria + inserción laboral.</p>
          <p className="text-gold-400 font-semibold mb-6">Precio: Consulta tu caso</p>

          <Button
            onClick={scrollToAsesoria}
            className="bg-gold hover:bg-gold-dark text-navy font-semibold"
          >
            Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas
          </Button>
        </motion.div>

        {/* Bloque 3 — Visado de Nómada Digital */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
              <Globe className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Bloque 3 — Visado de Nómada Digital</h3>
              <p className="text-gold-400 text-sm">Base normativa: Ley 28/2022 (Ley Startups) · Art. 93 LIRPF</p>
            </div>
          </div>

          <p className="text-white/80 mb-6">
            ¿Trabajas remotamente para empresas o clientes fuera de España? El visado de nómada digital te permite residir legalmente en España mientras mantienes tu actividad con empleadores o clientes en el extranjero.
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-white/90">
              <span className="text-gold mt-1">•</span>
              Contrato o relación laboral con empresa fuera de España de al menos 3 meses de antigüedad
            </li>
            <li className="flex items-start gap-2 text-white/90">
              <span className="text-gold mt-1">•</span>
              Al menos el 80% de los ingresos deben provenir de fuentes fuera de España
            </li>
            <li className="flex items-start gap-2 text-white/90">
              <span className="text-gold mt-1">•</span>
              Medios económicos mínimos: 200% del SMI mensual (aprox. 2.334€/mes)
            </li>
            <li className="flex items-start gap-2 text-white/90">
              <span className="text-gold mt-1">•</span>
              Seguro médico público o privado con cobertura completa en España
            </li>
            <li className="flex items-start gap-2 text-white/90">
              <span className="text-gold mt-1">•</span>
              Sin antecedentes penales en España ni en el país de residencia (últimos 5 años)
            </li>
          </ul>

          <p className="text-white/80 mb-2">Dos modalidades: Visado (desde origen · 1 año) o Autorización (en España en situación regular · 3 años renovable).</p>

          <div className="bg-navy-900/60 border border-gold-500/30 rounded-lg p-4 mb-6">
            <p className="text-white font-medium mb-1">Ventaja fiscal — Ley Beckham:</p>
            <p className="text-white/90 text-sm">Tributación a tipo fijo del 24% en el IRPF hasta 600.000€ durante los primeros 6 años. Solicitud ante la AEAT en los 6 meses siguientes a la llegada.</p>
          </div>

          <p className="text-gold-400 font-semibold mb-4">Precio: 1.200€ IVA incluido · tasas a cargo del cliente</p>

          <Button
            onClick={scrollToAsesoria}
            className="bg-gold hover:bg-gold-dark text-navy font-semibold"
          >
            Agenda tu asesoría — 50€ · La asesoría inicial se descuenta del total si continúas
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MovilidadSection;
