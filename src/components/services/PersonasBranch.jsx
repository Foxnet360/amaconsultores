import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Shield, 
  FileText, 
  MapPin, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const PersonasBranch = () => {
  const [selectedCountry, setSelectedCountry] = useState('espana');
  const [expandedSections, setExpandedSections] = useState({
    movilidad: true,
    regularizacion: true,
    documentos: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Country Selector */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={() => setSelectedCountry('espana')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
            selectedCountry === 'espana'
              ? 'bg-gold-400/20 border-gold-400 text-white'
              : 'bg-white/5 border-white/10 text-gray-300 hover:border-gold-400/50'
          }`}
        >
          <span className="text-2xl">🇪🇸</span>
          <span className="font-semibold">Quiero vivir o gestionar mi situación en España</span>
        </button>

        <button
          onClick={() => setSelectedCountry('colombia')}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
            selectedCountry === 'colombia'
              ? 'bg-gold-400/20 border-gold-400 text-white'
              : 'bg-white/5 border-white/10 text-gray-300 hover:border-gold-400/50'
          }`}
        >
          <span className="text-2xl">🇨🇴</span>
          <span className="font-semibold">Quiero vivir o gestionar trámites en Colombia</span>
        </button>
      </div>

      {selectedCountry === 'espana' ? (
        <div className="space-y-6">
          {/* Movilidad Profesional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection('movilidad')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Movilidad Profesional</h3>
              </div>
              {expandedSections.movilidad ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {expandedSections.movilidad && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-6"
              >
                <p className="text-gray-300 mb-4">
                  Homologación de títulos, reconocimiento de cualificaciones, orientación laboral 
                  y acceso a empleo cualificado.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Homologación de títulos universitarios y profesionales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Reconocimiento de cualificaciones profesionales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Orientación laboral y acceso a empleo cualificado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Visados de nómada digital
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Regularización Migratoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection('regularizacion')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="text-gold-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Regularización Migratoria</h3>
              </div>
              {expandedSections.regularizacion ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {expandedSections.regularizacion && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-6"
              >
                <p className="text-gray-300 mb-4">
                  Arraigo social, laboral y familiar. Reagrupación familiar. Residencia por 
                  circunstancias excepcionales. Renovaciones y otros trámites.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Arraigo social, laboral y familiar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Reagrupación familiar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Residencia por circunstancias excepcionales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Renovaciones y modificaciones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Nacionalidad española por residencia
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Documentos en Orden */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection('documentos')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Documentos en Orden</h3>
              </div>
              {expandedSections.documentos ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {expandedSections.documentos && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-6"
              >
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Títulos universitarios y académicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Documentos públicos: partidas de nacimiento, matrimonio, defunción, sentencias judiciales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Documentos privados que requieren reconocimiento oficial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Certificados de antecedentes penales con fines migratorios — tanto para presentar en España como en Colombia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Escrituras públicas: compraventa, poderes notariales, capitulaciones, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Certificados de estado civil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                    <span>Documentos administrativos y oficiales</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-gold-400/10 rounded-lg border border-gold-400/20">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="text-gold-400 shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        ¿No ves lo que necesitas en esta lista? Cuéntame qué documento necesitas 
                        gestionar y te digo si puedo ayudarte.
                      </p>
                      <Link to="/contacto" className="inline-block mt-3">
                        <Button className="bg-gold-500 hover:bg-gold-600 text-slate-900">
                          Pregúntame
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Mensaje de cierre */}
          <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-6 mt-8">
            <p className="text-gray-300 text-center">
              Trabajo de forma personalizada. Los servicios tienen coste — porque mi tiempo y 
              experiencia tienen valor, y tú mereces un acompañamiento serio. 
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
          {/* Colombia Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center">
                <MapPin className="text-gold-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Vivir en Colombia</h3>
            </div>

            <p className="text-gray-300 mb-6">
              Asesoría completa para extranjeros que desean vivir, trabajar o establecerse en Colombia.
            </p>

            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Visados para extranjeros según tu nacionalidad y propósito</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Tipos de residencia y requisitos según nacionalidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Trámites ante Migración Colombia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-gold-400 rounded-full mt-2"></span>
                <span>Apostillas y legalizaciones de documentos para Colombia</span>
              </li>
            </ul>
          </motion.div>

          {/* Mensaje de cierre */}
          <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-6">
            <p className="text-gray-300 text-center">
              Trabajo de forma personalizada. Los servicios tienen coste — porque mi tiempo y 
              experiencia tienen valor, y tú mereces un acompañamiento serio. 
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
      )}
    </div>
  );
};

export default PersonasBranch;
