import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User, Building2, ChevronDown, Clock, ArrowRight } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

const HeroSection = () => {
  const { trackEvent } = useAnalytics();
  const [calculatorStarted, setCalculatorStarted] = useState(false);
  const [calculatorLocation, setCalculatorLocation] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCalculatorStart = (location) => {
    setCalculatorLocation(location);
    setCalculatorStarted(true);
    trackEvent('calculadora_hero_iniciada', { location });
  };

  const handleFullCalculator = () => {
    trackEvent('calculadora_hero_completa');
    scrollToSection('calculadora');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80&t=1"
          alt="Law office interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-navy/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-gold-500 rounded-full px-6 py-2"
            >
              <span className="text-navy font-semibold text-sm">Más de 10 años de experiencia</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Seguridad y acompañamiento
              <br />
              <span className="text-gold-400">en tu movilidad internacional</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              Consultoría especializada en migraciones España-Colombia. 
              Para personas de cualquier nacionalidad y empresas.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('regularizacion')}
                className="bg-gold-500 hover:bg-gold-600 text-navy font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <User size={20} />
                Soy una persona
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('entidades')}
                className="border-2 border-white text-white bg-navy/40 hover:bg-gold-500 hover:text-navy hover:border-gold-500 font-semibold text-lg px-8 py-6 rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm shadow-lg"
              >
                <Building2 size={20} />
                Soy una empresa
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Colegiados España y Colombia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>+1000 casos gestionados</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Respuesta en 24h</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Calculator Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-8"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
              {!calculatorStarted ? (
                /* Calculator Preview */
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    ¿Qué opciones tienes?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Evalúa tu caso en 2 minutos y descubre las vías disponibles para tu situación.
                  </p>

                  {/* Location Selection */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      ¿Dónde te encuentras actualmente?
                    </p>
                    <button
                      onClick={() => handleCalculatorStart('espana')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left group"
                    >
                      <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                        <span className="text-xl">🇪🇸</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-navy">En España</div>
                        <div className="text-sm text-gray-500">Ya estás en territorio español</div>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover:text-gold-500" size={20} />
                    </button>

                    <button
                      onClick={() => handleCalculatorStart('extranjero')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left group"
                    >
                      <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                        <span className="text-xl">🌍</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-navy">Fuera de España</div>
                        <div className="text-sm text-gray-500">En otro país, quiero ir a España</div>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover:text-gold-500" size={20} />
                    </button>
                  </div>

                  {/* Time indicator */}
                  <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>4 preguntas · 2 minutos</span>
                  </div>

                  {/* Full calculator link */}
                  <button
                    onClick={handleFullCalculator}
                    className="text-gold-600 hover:text-gold-700 text-sm font-medium mt-4 underline"
                  >
                    Ver calculadora completa
                  </button>
                </div>
              ) : (
                /* Compact Calculator - Question 1 Follow-up */
                <div>
                  <button
                    onClick={() => setCalculatorStarted(false)}
                    className="text-sm text-gray-500 hover:text-navy mb-4 flex items-center gap-1"
                  >
                    ← Volver
                  </button>

                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="text-gold-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-1">
                      {calculatorLocation === 'espana' 
                        ? '¿Cuánto tiempo llevas en España?' 
                        : '¿Cuál es tu principal motivo para ir a España?'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pregunta 2 de 4
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-gold-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>

                  {/* Options based on location */}
                  <div className="space-y-2">
                    {calculatorLocation === 'espana' ? (
                      <>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Menos de 2 años</div>
                        </button>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Entre 2 y 5 años</div>
                        </button>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Más de 5 años</div>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Trabajo cualificado</div>
                        </button>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Emprender/Negocio</div>
                        </button>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Reunirme con familia</div>
                        </button>
                        <button
                          onClick={handleFullCalculator}
                          className="w-full p-3 rounded-lg border border-gray-200 hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
                        >
                          <div className="font-medium text-navy">Estudiar</div>
                        </button>
                      </>
                    )}
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Continúa la evaluación completa para ver todas las opciones disponibles para tu caso.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => scrollToSection('regularizacion')}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;