import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, FileText, Flag, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileCards = () => {
  const services = [
    {
      icon: Globe,
      title: 'Movilidad profesional a España',
      description: 'Homologación de títulos, reconocimiento de cualificaciones y orientación laboral para tu carrera en España.',
      link: '/servicios/personas/espana#movilidad-profesional',
      color: 'blue',
    },
    {
      icon: FileText,
      title: 'Regularización migratoria en España',
      description: 'Arraigo social, laboral y familiar. Reagrupación familiar, residencia por circunstancias excepcionales y renovaciones.',
      link: '/servicios/personas/espana#regularizacion',
      color: 'gold',
    },
    {
      icon: Flag,
      title: 'Vivir en Colombia — para extranjeros',
      description: 'Visados para extranjeros, tipos de residencia, trámites ante Migración Colombia y apostillas.',
      link: '/servicios/personas/colombia#vivir-colombia',
      color: 'slate',
    },
    {
      icon: Building2,
      title: 'Proyectos sociales y cooperación',
      description: 'Gestión de proyectos europeos, formulación técnica, coordinación de equipos y justificación para entidades.',
      link: '/servicios/entidades#proyectos',
      color: 'blue',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-800 to-blue-600',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      hover: 'hover:border-blue-500/40',
    },
    gold: {
      bg: 'bg-gradient-to-br from-gold-600 to-gold-500',
      border: 'border-gold-500/20',
      text: 'text-gold-400',
      hover: 'hover:border-gold-500/40',
    },
    slate: {
      bg: 'bg-gradient-to-br from-slate-700 to-slate-600',
      border: 'border-slate-500/20',
      text: 'text-slate-400',
      hover: 'hover:border-slate-500/40',
    },
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Especializados en migraciones internacionales y proyectos sociales para personas y entidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`bg-white rounded-2xl shadow-lg ${colors.border} ${colors.hover} border-2 transition-all hover:shadow-2xl group`}
              >
                <div className="p-8 space-y-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Link to={service.link}>
                    <Button
                      className={`w-full ${colors.bg} hover:opacity-90 text-white font-semibold`}
                    >
                      Ver más
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileCards;
