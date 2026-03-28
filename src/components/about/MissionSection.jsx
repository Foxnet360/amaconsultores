import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Users } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Proporcionar seguridad jurídica integral en procesos de movilidad internacional, defendiendo los derechos humanos y facilitando la integración legal de personas e instituciones.',
    },
    {
      icon: Heart,
      title: 'Compromiso Social',
      description: 'Trabajamos con especial sensibilidad en casos de vulnerabilidad, asilo y protección internacional, garantizando acceso a justicia para todas las personas.',
    },
    {
      icon: Award,
      title: 'Excelencia Profesional',
      description: 'Combinamos experiencia académica de primer nivel con práctica profesional rigurosa, manteniéndonos actualizados en legislación migratoria europea e internacional.',
    },
    {
      icon: Users,
      title: 'Enfoque Humano',
      description: 'Cada caso es único. Ofrecemos atención personalizada, transparencia total y acompañamiento cercano durante todo el proceso legal.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Nuestra Trayectoria
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expertos en movilidad internacional con trayectoria consolidada en derecho migratorio, derechos humanos y cooperación internacional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;