import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Scale, Award, Globe, Users } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import { teamProfiles, colegiacionInfo } from '@/data/team-profiles';
import { Button } from '@/components/ui/button';

const valores = [
  {
    icon: Scale,
    titulo: 'Cobertura jurídica dual',
    descripcion: 'Cobertura jurídica en España y Colombia — consultora especializada con abogados colegiados colaboradores en ambos países.'
  },
  {
    icon: Award,
    titulo: '10+ Años de Experiencia',
    descripcion: 'Más de una década especializados en migraciones y proyectos sociales entre España y Colombia.'
  },
  {
    icon: Globe,
    titulo: 'Cobertura Internacional',
    descripcion: 'Atendemos clientes de cualquier nacionalidad que necesiten gestionar trámites en España o Colombia.'
  },
  {
    icon: Users,
    titulo: 'Enfoque Humano',
    descripcion: 'Entendemos que detrás de cada trámite hay una persona. Tratamos cada caso con cercanía y empatía.'
  }
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos — AMA Consultores</title>
        <meta name="description" content="Conoce al equipo de AMA Consultores. Especialistas en migraciones entre España y Colombia con colegiación en ambos países." />
        <link rel="canonical" href="https://amaconsultores.eu/quienes-somos" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                  <Home size={16} />
                  Inicio
                </Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium">Quiénes Somos</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                Quiénes Somos
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                {colegiacionInfo.descripcion}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <motion.div
                    key={valor.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-navy-900" size={28} />
                    </div>
                    <h3 className="font-poppins text-lg font-bold text-white mb-2">{valor.titulo}</h3>
                    <p className="font-lato text-white/70 text-sm">{valor.descripcion}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-poppins text-3xl font-bold text-white mb-4">Nuestro Equipo</h2>
              <p className="font-lato text-white/70 max-w-2xl mx-auto">
                Profesionales comprometidos con acompañarte en cada paso de tu proceso migratorio.
              </p>
            </motion.div>

            <div className="space-y-8">
              {teamProfiles.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TeamMember {...member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-poppins text-3xl font-bold text-navy-900 mb-4">
                ¿Listo para comenzar tu proceso?
              </h2>
              <p className="text-navy-900/80 text-lg mb-8 max-w-2xl mx-auto">
                Agenda una asesoría personalizada y conoce cómo podemos ayudarte en tu situación específica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto">
                  <Button 
                    size="lg"
                    className="bg-[#1a2335] hover:bg-[#0f172a] text-white font-bold px-8"
                  >
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;