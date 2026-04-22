import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Quote, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ángela Morales Aristizábal',
    role: 'CEO — AMA Consultores',
    email: 'asesorias@amaconsultores.eu',
    description: 'Nací en Calarcá, Quindío, y hoy tengo hogar también en España. Me siento parte de ambos mundos, y esa mezcla marca mi forma de trabajar y de acompañar a quienes migran. He vivido y estudiado en Colombia, Alemania, Italia, Argentina, Inglaterra y España. Sé lo que significa llegar a un país nuevo con un título que nadie reconoce y una mochila llena de ganas. Llevo más de diez años dedicada al derecho migratorio y a los derechos humanos. Empecé desde grandes organizaciones y hoy ejerzo desde mi propia consultoría. Tengo dos másteres internacionales —en Gobernanza y Derechos Humanos, y en Migraciones y Sistemas de Acogida Internacional— y actualmente soy doctoranda en Estudios Migratorios. He gestionado proyectos sociales con fondos europeos por más de dos millones de euros y he trabajado sobre el terreno con campesinos, líderes sociales, comunidades indígenas, mujeres y familias en situación de vulnerabilidad. Esa combinación de gestión técnica y trabajo humano me enseñó que las políticas migratorias cobran sentido solo cuando se entienden desde las historias reales de las personas. En diciembre de 2025 decidí dar un paso natural y poner toda esa experiencia al servicio directo de quienes migran, creando AMA Consultores. Acompaño procesos migratorios con una mirada integral y empática: porque conozco el sistema por dentro... y también sé lo que se siente desde fuera. La educación fue mi palanca para avanzar; hoy intento serla para otros.',
    image: '/team/angela.jpeg',
    initials: 'AM',
    color: 'bg-[#4A5568]',
    link: null
  },
  {
    name: 'Rafael Reyes Pulido',
    role: 'Abogado Colegiado · España',
    description: 'Soy abogado colegiado en España, graduado en Derecho y con Máster de Acceso a la Abogacía por la UNED. Me especializo en Derecho de Extranjería, Administrativo, Civil, Familia y Penal. Colaboro con AMA Consultores en todas las actuaciones que requieren representación letrada ante juzgados y tribunales, aportando el respaldo jurídico procesal que cada caso necesita.',
    image: '/team/rafael.jpeg',
    initials: 'RR',
    color: 'bg-[#4A5568]',
    link: 'https://rafaelreyespulido.eu'
  },
  {
    name: 'Xiomara Sánchez Arias',
    role: 'Acompañamiento y gestión documental · Colombia',
    email: 'info@amaconsultores.eu',
    description: 'Soy Técnica en Contabilización de Operaciones Comerciales y Financieras y Tecnóloga en Gestión Jurídica de la Información. Trabajo desde Colombia acompañando a cada cliente en el proceso de reunir y organizar su documentación — ese paso que parece pequeño pero que puede definir el resultado de un trámite. Me encargo también de mantener el orden administrativo de AMA Consultores para que nada se pierda por el camino. Soy organizada, cercana y paciente. Para mí, cada expediente tiene nombre y apellidos, y eso se nota en cómo trabajo.',
    image: '/team/xiomara.jpeg',
    initials: 'XS',
    color: 'bg-[#4A5568]',
    link: null
  },
  {
    name: 'Irene Hernández Gálvez',
    role: 'Asesora de Acompañamiento Migratorio · Colombia',
    email: 'asesorias@amaconsultores.eu',
    description: 'Hace nueve años emprendí uno de los viajes más transformadores de mi vida: dejar mi país con el corazón lleno de sueños, ilusiones y metas por cumplir, sin imaginar del todo lo que significaba empezar de nuevo. Migrar es mucho más que cambiar de lugar; es soltar, desaprender y reconstruirse desde lo desconocido. Es atravesar momentos de incertidumbre, sentir la pérdida de identidad y enfrentar la soledad que aparece cuando creemos que todo está perdido. Mi historia, tanto personal como profesional, está profundamente marcada por esta experiencia. Gracias a ella, hoy miro a quienes migramos con una sensibilidad especial: desde la empatía, el respeto y la comprensión genuina de cada proceso, de cada lucha silenciosa y de cada pequeño logro que merece ser reconocido. Por ello, apoyándome en mis conocimientos y experiencia en materia migratoria, quiero acompañar a aquellas personas que actualmente transitan este proceso o están por iniciarlo, ofreciendo, a través de AMA Consultores, soluciones eficaces a sus necesidades.',
    image: '/team/irene.jpeg',
    initials: 'IH',
    color: 'bg-[#4A5568]',
    link: null
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
            Cobertura jurídica en España y Colombia. Consultora especializada con red de abogados colegiados colaboradores en ambos países.
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
              <Card className={`h-full flex flex-col bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow`}>
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
