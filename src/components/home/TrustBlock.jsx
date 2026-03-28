import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

const TrustBlock = () => {
  const indicators = [
    {
      icon: Calendar,
      value: '+10',
      label: 'años de experiencia en migraciones y DDHH',
    },
    {
      icon: MapPin,
      value: '2',
      label: 'países donde actuamos: España y Colombia',
    },
    {
      icon: Users,
      value: 'Personalizado',
      label: 'trato individual — trabajo con pocos casos a la vez',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Por qué confiar en nosotros?
          </h2>
          <p className="text-gray-300 text-lg">
            Experiencia, cercanía y compromiso real con cada caso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            
            return (
              <motion.div
                key={indicator.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-400/20 rounded-full mb-6">
                  <Icon className="text-gold-400" size={40} />
                </div>
                
                <div className="text-4xl sm:text-5xl font-bold text-gold-400 mb-3">
                  {indicator.value}
                </div>
                
                <p className="text-gray-300 text-lg">
                  {indicator.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
