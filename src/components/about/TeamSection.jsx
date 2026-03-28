import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Personas reales, compromiso real
          </p>
        </motion.div>

        {/* Ángela Morales - Featured Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 mb-12 border border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-6xl font-bold">AM</span>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">Ángela Morales Aristizábal</h3>
                <p className="text-gold-500 font-semibold text-lg">Fundadora y Directora</p>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  Soy jurista colombo-española, con raíces en Calarcá, Quindío, y con hogar también en España. 
                  Me siento parte de ambos mundos, y esa mezcla marca mi forma de trabajar y de acompañar a 
                  quienes migran. He vivido y estudiado en Colombia, Alemania, Italia, Argentina, Inglaterra y España. 
                  Sé lo que significa llegar a un país nuevo con un título que nadie reconoce y una mochila llena de ganas.
                </p>
                
                <p className="text-slate-700 leading-relaxed">
                  Llevo más de diez años dedicada al derecho migratorio y a los derechos humanos. Empecé desde 
                  grandes organizaciones y hoy ejerzo desde mi propia consultoría. Tengo dos másteres internacionales 
                  —en Gobernanza y Derechos Humanos, y en Migraciones y Sistemas de Acogida Internacional— y 
                  actualmente soy doctoranda en Estudios Migratorios en la Universidad de Granada.
                </p>
                
                <p className="text-slate-700 leading-relaxed">
                  He gestionado proyectos sociales con fondos europeos por más de dos millones de euros y he trabajado 
                  sobre el terreno con campesinos, líderes sociales, comunidades indígenas, mujeres y familias en 
                  situación de vulnerabilidad. Esa combinación de gestión técnica y trabajo humano me enseñó que 
                  las políticas migratorias cobran sentido solo cuando se entienden desde las historias reales de las personas.
                </p>
                
                <p className="text-slate-700 leading-relaxed">
                  En diciembre de 2025 decidí dar un paso natural y poner toda esa experiencia al servicio directo 
                  de quienes migran, creando AMA Consultores. Acompaño procesos migratorios con una mirada integral 
                  y empática: porque conozco el sistema por dentro... y también sé lo que se siente desde fuera. 
                  La educación fue mi palanca para avanzar; hoy intento serla para otros.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rafael Reyes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white text-2xl font-bold">RR</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Rafael Reyes Pulido</h3>
                  <p className="text-gold-500 font-semibold">Abogado Colaborador</p>
                </div>
                
                <p className="text-slate-700">
                  Graduado en Derecho y Máster de Acceso a la Abogacía por la UNED. Especialista en Derecho de 
                  Extranjería, Derecho Administrativo, Derecho Civil, Derecho de Familia y Derecho Penal. 
                  Colabora con AMA Consultores en todas las actuaciones que requieren firma letrada.
                </p>
                
                <a
                  href="https://rafaelreyespulido.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  rafaelreyespulido.eu
                </a>
              </div>
            </div>
          </motion.div>

          {/* Xiomara Sánchez */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gold-600 to-gold-500 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white text-2xl font-bold">XS</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Xiomara Sánchez</h3>
                  <p className="text-gold-500 font-semibold">Asistente Legal (Colombia)</p>
                </div>
                
                <p className="text-slate-700">
                  Técnica en Contabilización de Operaciones Comerciales y Financieras y Tecnóloga en Gestión 
                  Jurídica de la Información. Trabaja desde Colombia de forma autónoma y acompaña a cada cliente 
                  en el proceso de compilación y organización de documentación. Su trato es individual, cercano y paciente.
                </p>
                
                <p className="text-sm text-slate-500">
                  WhatsApp Colombia: +57 301 717 4478
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
