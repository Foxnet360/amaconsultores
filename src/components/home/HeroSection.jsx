import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Building2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1684400661290-50c3f2600cf0"
          alt="International mobility and legal security"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-blue-950/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-gold-400/20 border border-gold-400/30 rounded-full px-6 py-2"
          >
            <span className="text-gold-400 font-semibold text-sm">Más de 10 años de experiencia</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Seguridad y acompañamiento
            <br />
            <span className="text-gold-400">en tu movilidad internacional</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Consultoría especializada en Migraciones Internacionales y Proyectos Sociales 
            para personas, ONGs y entidades en España y Colombia.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link to="/servicios?type=personas">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-slate-900 font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <User size={20} />
                Soy una persona
              </Button>
            </Link>
            
            <Link to="/servicios?type=entidades">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-6 rounded-xl transition-all flex items-center gap-2"
              >
                <Building2 size={20} />
                Soy una entidad
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
