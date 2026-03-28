import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building2, Globe } from 'lucide-react';

const TrustSignals = () => {
  const partners = [
    {
      name: 'Save the Children',
      description: 'Colaboración en proyectos de protección internacional',
      logo: Building2,
    },
    {
      name: 'Universidad de Granada',
      description: 'Investigación en derecho migratorio y derechos humanos',
      logo: Award,
    },
    {
      name: 'Oxford Programme',
      description: 'Formación especializada en migración forzada',
      logo: Globe,
    },
    {
      name: 'Red EURES',
      description: 'Portal Europeo de la Movilidad Profesional',
      logo: Users,
    },
  ];

  const stats = [
    { number: '500+', label: 'Casos exitosos' },
    { number: '15+', label: 'Países atendidos' },
    { number: '98%', label: 'Tasa de éxito' },
    { number: '10+', label: 'Años de experiencia' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gold-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Colaboradores y Alianzas
            </h2>
            <p className="text-xl text-gray-300">
              Trabajamos con organizaciones de primer nivel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.logo;
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;