import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'Gracias a AMA Consultores logré homologar mi título de medicina y obtener mi permiso de trabajo en España en tiempo récord. Su profesionalismo y conocimiento del proceso fueron fundamentales.',
      author: 'Médico Latinoamericano',
      role: 'Profesional de la Salud',
      country: 'Colombia → España',
    },
    {
      text: 'El equipo de AMA nos ayudó con todo el proceso de reagrupación familiar. Después de 3 años separados, finalmente mi familia está reunida en España. Eternamente agradecidos por su compromiso.',
      author: 'Familia Refugiada',
      role: 'Proceso de Reagrupación',
      country: 'Siria → España',
    },
    {
      text: 'Como ONG internacional, necesitábamos asesoría especializada para nuestros proyectos de cooperación. AMA Consultores nos proporcionó soluciones efectivas y cumplimiento total de normativas.',
      author: 'Director de ONG',
      role: 'Cooperación Internacional',
      country: 'Save the Children',
    },
    {
      text: 'Conseguí mi visado de nómada digital gracias a su experiencia. El proceso fue transparente, rápido y sin complicaciones. Ahora puedo trabajar legalmente desde España.',
      author: 'Profesional Tech',
      role: 'Nómada Digital',
      country: 'Argentina → España',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonios de clientes que han confiado en nuestros servicios
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20"
            >
              <Quote className="text-gold-400 mb-6" size={48} />
              
              <p className="text-xl sm:text-2xl text-white leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;