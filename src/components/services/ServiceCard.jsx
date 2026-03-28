import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden group"
    >
      <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
      
      <div className="p-8 space-y-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
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

        <div className="space-y-3">
          <p className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
            Servicios incluidos:
          </p>
          <ul className="space-y-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start space-x-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                <span className="text-slate-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/evaluacion" className="block">
          <Button
            className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold`}
          >
            Solicitar Evaluación
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;