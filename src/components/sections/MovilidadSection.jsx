import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Globe, TrendingUp } from 'lucide-react';

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

  const servicios = [
    {
      id: 'homologacion',
      icon: GraduationCap,
      title: 'Homologación vs Equivalencia de Títulos',
      content: '¿Necesitas validar tus estudios universitarios o profesionales en España? Te ayudamos a entender la diferencia entre homologación (para títulos universitarios) y equivalencia (para títulos profesionales), y gestionamos todo el proceso ante el Ministerio de Universidades o el Ministerio de Educación.',
      features: ['Análisis de tu título', 'Preparación de documentación', 'Seguimiento del expediente', 'Recursos si es necesario']
    },
    {
      id: 'cualificaciones',
      icon: Briefcase,
      title: 'Reconocimiento de Cualificaciones Profesionales',
      content: 'Si eres profesional de un sector regulado (médico, enfermero, arquitecto, etc.), necesitarás el reconocimiento de tus cualificaciones para ejercer en España. Gestionamos el procedimiento ante las autoridades competentes de cada sector.',
      features: ['Identificación de autoridad competente', 'Preparación de documentación específica', 'Gestión de compensación de formación si es necesaria', 'Seguimiento hasta resolución']
    },
    {
      id: 'orientacion',
      icon: TrendingUp,
      title: 'Orientación Laboral y Acceso a Empleo Cualificado',
      content: 'Te acompañamos en tu inserción laboral en España: revisión de CV al estilo español, preparación para entrevistas, identificación de portales de empleo especializados, y estrategias para acceder a empleo cualificado según tu perfil profesional.',
      features: ['Revisión y adaptación de CV', 'Preparación de entrevistas', 'Identificación de oportunidades', 'Networking profesional']
    },
    {
      id: 'nomada',
      icon: Globe,
      title: 'Visado de Nómada Digital',
      content: '¿Trabajas remotamente para empresas fuera de España? El visado de nómada digital te permite residir en España mientras trabajas para empresas extranjeras. Además, puedes beneficiarte de la Ley Beckham: tributación del 24% en el IRPF durante los primeros 6 años.',
      features: ['Residencia por 1 año (renovable)', 'Tributación favorable (Ley Beckham)', 'Incluye a familiares', 'Trabajo remoto permitido']
    }
  ];

  return (
    <section id="movilidad" className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-gold" size={28} />
                </div>
                
                <h3 className="font-poppins text-xl font-bold text-white mb-4">{servicio.title}</h3>
                <p className="font-lato text-white/70 mb-6">{servicio.content}</p>
                
                <ul className="space-y-2 mb-6">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToAsesoria}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-primary-dark"
                >
                  Agenda tu asesoría
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1e3a8a]/80 to-[#1e3a5f]/80 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Homologación vs Equivalencia vs Reconocimiento
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Característica</th>
                  <th className="text-left py-4 px-4">Homologación</th>
                  <th className="text-left py-4 px-4">Equivalencia</th>
                  <th className="text-left py-4 px-4">Reconocimiento</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-medium">Tipo de título</td>
                  <td className="py-4 px-4">Universitario</td>
                  <td className="py-4 px-4">No universitario (FP)</td>
                  <td className="py-4 px-4">Sector regulado</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-medium">Trámite ante</td>
                  <td className="py-4 px-4">Ministerio de Universidades</td>
                  <td className="py-4 px-4">Ministerio de Educación</td>
                  <td className="py-4 px-4">Colegio Profesional / Ministerio sectorial</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-medium">Plazo estimado</td>
                  <td className="py-4 px-4">6-12 meses</td>
                  <td className="py-4 px-4">3-6 meses</td>
                  <td className="py-4 px-4">Variable según sector</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Resultado</td>
                  <td className="py-4 px-4">Título oficial español</td>
                  <td className="py-4 px-4">Declaración de equivalencia</td>
                  <td className="py-4 px-4">Autorización para ejercer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MovilidadSection;
