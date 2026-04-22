import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Users, Award, FileCheck, GraduationCap, Building2, Quote, CheckCircle, Star, Clock, HeartHandshake, Scale, Calendar, Eye } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import EligibilityCalculator from '@/components/EligibilityCalculator';
import TidyCalModal from '@/components/TidyCalModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicios = [
    {
      icon: Shield,
      titulo: 'Regularización Migratoria',
      descripcion: 'Arraigo social, laboral y familiar. Reagrupación familiar, residencia por circunstancias excepcionales y renovaciones.',
      link: '/servicios/regularizacion'
    },
    {
      icon: GraduationCap,
      titulo: 'Movilidad Profesional',
      descripcion: 'Homologación de títulos, reconocimiento de cualificaciones y orientación laboral para tu carrera en España.',
      link: '/servicios/movilidad'
    },
    {
      icon: Globe,
      titulo: 'Convenios España-Colombia',
      descripcion: 'Doble nacionalidad, seguridad social, trámites bilaterales y gestión documental entre ambos países.',
      link: '/servicios/convenios'
    },
    {
      icon: Building2,
      titulo: 'Servicios para Empresas',
      descripcion: 'Contratación internacional, proyectos europeos y consultoría especializada para entidades.',
      link: '/servicios/empresas'
    }
  ];



  const razones = [
    {
      icon: Scale,
      titulo: 'Especialización real'
    },
    {
      icon: HeartHandshake,
      titulo: 'Acompañamiento personalizado'
    },
    {
      icon: Eye,
      titulo: 'Transparencia',
      descripcion: 'Tarifas claras, proceso explicado paso a paso. Sin sorpresas.'
    }
  ];

  const testimonios = [
    {
      nombre: 'Mauricio Rodríguez Herrera',
      pais: 'Homologación de doctorado · México',
      texto: 'Gracias a su equipo logré la homologación de mi doctorado de México en España con la Universidad Complutense de Madrid de manera satisfactoria, a un precio justo y con un acompañamiento constante en cada paso. No es solo que hagan el trabajo, es que te guían y te dan tranquilidad, que es clave en estos trámites. Totalmente recomendados.',
      estrellas: 5
    },
    {
      nombre: 'Stefany Rave',
      pais: 'Homologación + Nacionalidad · Colombia',
      texto: 'Contar con Ángela desde el principio me quitó un peso enorme de los hombros. Me ayudó con la homologación de mi título, con el proceso de nacionalidad y, además, me conectó con personas clave para construir una red de apoyo aquí en España. Estoy muy agradecida y la recomiendo con los ojos cerrados.',
      estrellas: 5
    },
    {
      nombre: 'Juan Esteban Bermúdez',
      pais: 'Residencia por estudios + Homologación · Colombia',
      texto: 'Desde el primer contacto recibí un trato muy amable y sincero. Me dieron la confianza para hacer realidad mi objetivo de estudiar y trabajar en España. Siempre tuve apoyo y seguimiento en cada paso. Muy recomendados.',
      estrellas: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AMA Consultores | Consultoría en Migraciones España y Colombia</title>
        <meta name="description" content="Consultoría especializada en migraciones internacionales y proyectos sociales. Más de 10 años de experiencia en España y Colombia." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section - Estilo Producción */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744]">
          {/* Imagen de fondo con overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80&t=1"
              alt="Oficina profesional"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e3a5f]/85 to-[#0f2744]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-gold text-sm font-medium mb-6">
                  Más de 10 años de experiencia
                </span>

                {/* Título principal */}
                <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Seguridad y acompañamiento
                  <span className="text-gold block mt-2">en tu movilidad internacional</span>
                </h1>

                {/* Subtítulo */}
                <p className="font-lato text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                  Acompañamos a personas que migran, empresas que contratan talento internacional y entidades que impulsan proyectos sociales — en España, Colombia y Europa.
                </p>

                {/* Botones CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-primary-dark font-poppins font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Users size={20} />
                    Soy una persona
                  </button>
                  <Link
                    to="/servicios/empresas"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark font-poppins font-semibold rounded-lg transition-all duration-300"
                  >
                    <Building2 size={20} />
                    Soy una entidad
                  </Link>
                </div>
              </motion.div>


            </div>
          </div>
        </section>

        {/* SECCIÓN 2: Frase de la SEO */}
        <section className="py-20 bg-[#0f2744]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
              <blockquote className="font-lato text-xl sm:text-2xl text-white italic mb-8 leading-relaxed">
                "Acompaño procesos migratorios con una mirada integral y empática: porque conozco el sistema por dentro... y también sé lo que se siente desde fuera."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="/team/angela.jpeg"
                  alt="Ángela Morales Aristizábal"
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div className="text-left">
                  <div className="font-poppins font-semibold text-white">Ángela Morales Aristizábal</div>
                  <div className="font-lato text-sm text-white/70">CEO · AMA Consultores</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN 3: ¿Por qué confiar en nosotros? */}
        <section className="py-20 bg-[#1a2335]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Por qué confiar en nosotros?
              </h2>
              <p className="font-lato text-lg text-white/70 max-w-2xl mx-auto">
                Más de una década de experiencia nos respalda
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {razones.map((razon, index) => {
                const Icon = razon.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-all duration-300 group text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                      <Icon className="text-gold" size={28} />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold text-white mb-2">
                      {razon.titulo}
                    </h3>
                    {razon.descripcion && (
                      <p className="font-lato text-sm text-white/70">
                        {razon.descripcion}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: Nuestros Servicios Destacados */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a5f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">
                Nuestros Servicios
              </h2>
              <p className="font-lato text-lg text-white/80 max-w-2xl mx-auto">
                Especializados en migraciones internacionales y proyectos sociales
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map((servicio, index) => {
                const Icon = servicio.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={servicio.link}>
                      <div className="bg-[#0f2744]/80 backdrop-blur-sm rounded-xl p-6 h-full group cursor-pointer border border-white/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                            <Icon className="text-gold" size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-poppins text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                              {servicio.titulo}
                            </h3>
                            <p className="font-lato text-white/70 mb-4 leading-relaxed">
                              {servicio.descripcion}
                            </p>
                            <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                              Ver más <ArrowRight size={16} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-poppins font-semibold rounded-lg hover:bg-gold hover:text-primary-dark transition-all duration-300"
              >
                Ver todos los servicios
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: Calculadora de Elegibilidad */}
        <section id="calculadora" className="py-20 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Qué opciones tienes?
              </h2>
              <p className="font-lato text-lg text-white/70 max-w-2xl mx-auto">
                Evalúa tu caso en 2 minutos y descubre las vías disponibles para tu situación
              </p>
            </motion.div>
            
            <EligibilityCalculator />
          </div>
        </section>

        {/* SECCIÓN 6: Casos de Éxito (Testimonios) */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">
                Casos de Éxito
              </h2>
              <p className="font-lato text-lg text-white/70 max-w-2xl mx-auto">
                Lo que dicen quienes ya han pasado por el proceso
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0f2744]/60 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonio.estrellas)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-lato text-white/90 mb-6 italic leading-relaxed">
                    "{testimonio.texto}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-poppins font-semibold text-white">
                      {testimonio.nombre}
                    </div>
                    <div className="font-lato text-sm text-gold">
                      {testimonio.pais}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 7: CTA Final */}
        <section className="py-20 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Lista para comenzar tu proceso?
              </h2>
              <p className="font-lato text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una asesoría personalizada. Analizaremos tu caso específico y te informaremos de las tarifas antes de comenzar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-primary-dark font-poppins font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Agenda tu asesoría — 50€
                </button>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark font-poppins font-semibold rounded-lg transition-all duration-300"
                >
                  Contactar
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Modal TidyCal */}
      <TidyCalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
