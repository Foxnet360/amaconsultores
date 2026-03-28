import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2 } from 'lucide-react';

const ServiceTree = ({ selectedType, onSelectType }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Con quién quiero hablar?
        </h2>
        <p className="text-gray-300 text-lg">
          Selecciona el perfil que mejor te describe
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => onSelectType('personas')}
          className={`p-8 rounded-2xl border-2 transition-all text-left group ${
            selectedType === 'personas'
              ? 'bg-gold-400/20 border-gold-400'
              : 'bg-white/5 border-white/10 hover:border-gold-400/50'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${
              selectedType === 'personas' ? 'bg-gold-400' : 'bg-gold-400/20'
            }`}>
              <User className={selectedType === 'personas' ? 'text-slate-900' : 'text-gold-400'} size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Soy una persona</h3>
              <p className="text-gray-300">
                Necesito ayuda con mi proceso migratorio personal: homologación de títulos, 
                regularización, visados para España o Colombia.
              </p>
            </div>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => onSelectType('entidades')}
          className={`p-8 rounded-2xl border-2 transition-all text-left group ${
            selectedType === 'entidades'
              ? 'bg-blue-400/20 border-blue-400'
              : 'bg-white/5 border-white/10 hover:border-blue-400/50'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${
              selectedType === 'entidades' ? 'bg-blue-400' : 'bg-blue-400/20'
            }`}>
              <Building2 className={selectedType === 'entidades' ? 'text-slate-900' : 'text-blue-400'} size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Soy una entidad</h3>
              <p className="text-gray-300">
                Represento a una ONG, empresa o institución que necesita apoyo en proyectos 
                europeos o asesoría en migraciones.
              </p>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceTree;
