import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PresentationBlock = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-gold-400"
        >
          <Quote className="absolute top-6 left-6 text-gold-400/20" size={48} />
          
          <blockquote className="relative z-10 text-lg md:text-xl text-slate-700 leading-relaxed italic">
            Llevo más de 10 años trabajando en el cruce entre el derecho, los derechos humanos y la migración 
            — no porque sea un nicho interesante, sino porque detrás de cada expediente hay una persona que 
            merece ser tratada con dignidad. Trabajo de forma personalizada, con pocas personas a la vez, 
            y cobro siempre por mi trabajo porque la calidad del acompañamiento lo vale.
          </blockquote>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">AM</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Ángela Morales Aristizábal</p>
              <p className="text-sm text-gold-500">Fundadora y Directora, AMA Consultores</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresentationBlock;
