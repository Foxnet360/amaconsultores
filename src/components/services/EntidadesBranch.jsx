import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  FileText, 
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const EntidadesBranch = () => {
  const [selectedService, setSelectedService] = useState('proyectos');
  const [expandedSections, setExpandedSections] = useState({
    experiencia: true,
    servicios: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Service Selector */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={() => setSelectedService('proyectos')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
            selectedService === 'proyectos'
              ? 'bg-blue-400/20 border-blue-400 text-white'
              : 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/50'
          }`}
        >
          <Briefcase size={24} />
          <span className="font-semibold">Gestión y formulación de proyectos europeos</span>
        </button>

        <button
          onClick={() => setSelectedService('asesoria')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
            selectedService === 'asesoria'
              ? 'bg-blue-400/20 border-blue-400 text-white'
              : 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/50'
          }`}
        >
          <Users size={24} />
          <span className="font-semibold">Asesoría en migraciones para mi entidad</span>
        </button>
      </div>

      {selectedService === 'proyectos' ? (
        <div className="space-y-6">
          {/* Experiencia destacada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection('experiencia')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-gold-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Experiencia Destacada</h3>
              </div>
              {expandedSections.experiencia ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {expandedSections.experiencia && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-6 space-y-4"
              >
                <div className="bg-blue-900/20 border border-blue-400/20 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Save the Children España</h4>
                  <p className="text-gray-300 text-sm">
                    Gestión del programa IMPULSA-CPI (Caixa ProInfancia) con presupuesto de +2M€. 
                    Coordinación de equipo de 65 profesionales en intervenciones de protección infantil e inclusión social.
                  </p>
                </div>

                <div className="bg-blue-900/20 border border-blue-400/20 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Proyecto 'Formar para Cuidar' — Colombia</h4>
                  <p className="text-gray-300 text-sm">
                    Cooperación internacional MAEC/UE. 67 beneficiarios en comunidades rurales remotas. 
                    Formación en DDHH, asilo y protección internacional.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection('servicios')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Servicios</h3>
              </div>
              {expandedSections.servicios ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {expandedSections.servicios && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-6"
              >
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Identificación de convocatorias europeas y privadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Formulación y redacción técnica de proyectos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Gestión y coordinación de equipos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Justificación técnica y económica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Informes y memorias</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Mensaje de cierre */}
          <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-6 mt-8">
            <p className="text-gray-300 text-center">
              Para actuaciones que requieren firma letrada, coordino con mi abogado de confianza.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-slate-900">
                  Contactar para presupuesto
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Asesoría Migratoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Users className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Asesoría en Migraciones</h3>
            </div>

            <p className="text-gray-300 mb-6">
              Apoyo técnico especializado a entidades que trabajan con población migrante y refugiada.
            </p>

            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Apoyo técnico especializado a entidades que trabajan con población migrante y refugiada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Formación interna en derecho migratorio y protección internacional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Diseño de protocolos de atención a personas en situación de vulnerabilidad migratoria</span>
              </li>
            </ul>

            <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-4">
              <p className="text-gray-300 text-sm text-center">
                Para actuaciones que requieren firma letrada, coordino con mi abogado de confianza.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-6">
            <p className="text-gray-300 text-center mb-4">
              ¿Tu entidad necesita apoyo en migraciones? Contáctanos para diseñar una solución a medida.
            </p>
            <div className="flex justify-center">
              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-slate-900">
                  Contactar para presupuesto
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntidadesBranch;
