import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Calendar, Clock, CreditCard, Monitor, AlertCircle } from 'lucide-react';
import TidyCalEmbed from '@/components/TidyCalEmbed';
import { Button } from '@/components/ui/button';

const AgendaPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Agenda tu Asesoría — AMA Consultores</title>
        <meta
          name="description"
          content="Reserva una consulta personalizada de 30 minutos por 50€. Analizaremos tu caso específico y te daremos un plan de acción claro."
        />
        <link rel="canonical" href="https://amaconsultores.eu/agenda" />
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
                <span className="text-gold font-medium">Agenda tu Asesoría</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                Agenda tu Asesoría
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                Reserva una consulta personalizada. Analizaremos tu caso específico y te daremos un plan de acción claro.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 bg-[#0f172a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-navy-800 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-gold-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">30 minutos</h3>
                <p className="text-white/80 text-sm">Consulta personalizada</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-navy-800 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-gold-400" size={24} />
                </div>
                <h3 className="text-gold-400 font-bold text-2xl mb-2">50€</h3>
                <p className="text-white/80 text-sm">IVA incluido · Pago seguro vía Stripe</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-navy-800 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="text-gold-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">Solo online</h3>
                <p className="text-white/80 text-sm">Videoconferencia</p>
              </motion.div>
            </div>

            {/* Discount Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-500/30 rounded-xl p-6 text-center mb-12"
            >
              <p className="text-white text-lg">
                La asesoría inicial de <span className="text-gold-400 font-bold">50€</span> se descuenta del coste total si decides continuar tu proceso con nosotros.
              </p>
            </motion.div>

            {/* Checkbox Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy-800 border border-white/10 rounded-xl p-6 mb-8"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Calendar className="text-gold-400" size={20} />
                Antes de reservar
              </h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="condiciones-check"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-white/30 bg-transparent text-gold-400 focus:ring-gold-500"
                />
                <span className="text-white/80 text-sm">
                  He leído y acepto las{' '}
                  <Link to="/condiciones-servicio" className="text-gold-400 hover:underline font-semibold">
                    Condiciones Generales del Servicio
                  </Link>{' '}
                  de AMA Consultores, incluyendo la política de honorarios, el alcance de la consultoría y la obligación de medios. Entiendo que la contratación del servicio no garantiza una resolución administrativa favorable.
                </span>
              </label>
              {!termsAccepted && (
                <p className="text-gold-400 text-sm mt-2 ml-8">Debes aceptar las condiciones para continuar con la reserva.</p>
              )}
            </motion.div>

            {/* TidyCal Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {termsAccepted ? (
                <TidyCalEmbed 
                  url="https://tidycal.com/amaconsultores"
                  height="800px"
                />
              ) : (
                <div className="bg-navy-800 border border-white/10 rounded-xl p-8 text-center">
                  <AlertCircle className="mx-auto text-gold-400 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Acepta las condiciones para continuar
                  </h3>
                  <p className="text-white/70">
                    Debes leer y aceptar las Condiciones Generales del Servicio antes de realizar la reserva.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Alternative Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-white/80 mb-4">¿Prefieres contactarnos de otra forma?</p>
              <Link to="/contacto">
                <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900">
                  Usar formulario de contacto
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgendaPage;