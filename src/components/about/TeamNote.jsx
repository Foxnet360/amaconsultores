import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TeamNote = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <Quote className="absolute top-6 left-6 text-gold-400/30" size={48} />
          
          <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium italic">
            Somos un equipo pequeño por decisión propia. Preferimos trabajar bien con pocos casos que mal con muchos. 
            Cada historia importa.
          </blockquote>
          
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamNote;
