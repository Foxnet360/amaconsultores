import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Quote, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ángela Morales Aristizábal',
    role: 'CEO & Fundadora',
    description: 'Llevo más de 10 años dedicada a la consultoría en migraciones y proyectos sociales. Mi compromiso es acompañar a cada persona en su proceso con cercanía y profesionalidad.',
    image: null, // Placeholder until photo available
    initials: 'AM',
    color: 'bg-gold-500',
    link: null,
    linkedin: null
  },
  {
    name: 'Rafael Reyes Pulido',
    role: 'Abogado Colegiado',
    description: 'Especializado en derecho migratorio y extranjería. Coordinamos cuando los casos requieren firma letrada para garantizar la mejor defensa de tus derechos.',
    image: null,
    initials: 'RR',
    color: 'bg-gray-600',
    link: 'https://rafaelreyespulido.eu',
    linkedin: null
  },
  {
    name: 'Xiomara Sánchez Arias',
    role: 'Gestión Documental',
    description: 'Me encargo de que toda la documentación esté en orden y los trámites avancen correctamente. Soy el primer contacto para resolver dudas administrativas.',
    image: null,
    initials: 'XS',
    color: 'bg-gold-600',
    link: null,
    linkedin: null
  },
  {
    name: 'Irene Hernández Gálvez',
    role: 'Asesora Migratoria',
    description: 'Conozco de primera mano los desafíos de la movilidad internacional. Mi experiencia personal me permite empatizar y guiar mejor a quienes inician este camino.',
    image: null,
    initials: 'IH',
    color: 'bg-gray-600',
    link: null,
    linkedin: null,
    historiaPersonal: true
  }
];

const EquipoSection = () => {
  return (
    <section id="equipo" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo con colegiación en España y Colombia.
            Cobertura jurídica completa en los dos sistemas.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col bg-white border-2 ${member.historiaPersonal ? 'border-gold-400 shadow-xl' : 'border-gray-200 shadow-md hover:shadow-lg transition-shadow'}`}>
                <CardContent className="p-6 flex flex-col flex-grow">
                  {/* Photo or Placeholder */}
                  <div className="flex justify-center mb-6">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover shadow-md"
                      />
                    ) : (
                      <div className={`w-32 h-32 ${member.color} rounded-full flex items-center justify-center shadow-md`}>
                        <span className="text-white text-3xl font-bold">{member.initials}</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="text-center flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                    <p className="text-gold-500 font-medium mb-4">{member.role}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 italic flex-grow">"{member.description}"</p>

                    {/* Historia Personal - Irene */}
                    {member.historiaPersonal && (
                      <div className="mt-4 p-4 bg-gradient-to-br from-gold-50 to-gold-100 rounded-lg border-l-4 border-gold-400 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Quote className="text-gold-500" size={16} />
                          <span className="text-gold-700 font-semibold text-sm">Historia Personal</span>
                        </div>
                        <p className="text-gold-800 text-sm italic">
                          "Mi propia experiencia migratoria me enseñó que detrás de cada trámite 
                          hay una historia humana. Por eso trabajo con empatía y dedicación."
                        </p>
                      </div>
                    )}

                    {/* Links */}
                    <div className="mt-4 flex justify-center gap-3">
                      {/* External Link */}
                      {member.link && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-gold-500 hover:text-gold-600 hover:underline"
                        >
                          Ver perfil profesional
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {/* LinkedIn */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#0077B5] text-white rounded-full text-sm hover:bg-[#005885] transition-colors"
                        >
                          <Linkedin size={16} />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gold-500 mb-2">4</div>
            <div className="text-gray-600">Profesionales</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gold-500 mb-2">10+</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gold-500 mb-2">2</div>
            <div className="text-gray-600">Países de cobertura</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gold-500 mb-2">+2M€</div>
            <div className="text-gray-600">Proyectos europeos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipoSection;
