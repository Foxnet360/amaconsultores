import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const TIDYCAL_URL = 'https://tidycal.com/amaconsultores';

const AsesoriaSection = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <section id="asesoria" className="py-24 bg-navy-100 border-t border-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6">
            <Calendar className="text-gold" size={40} />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Agenda tu Asesoría
          </h2>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto mb-8">
            Reserva una consulta personalizada. Analizaremos tu caso específico y te daremos un plan de acción claro.
          </p>

          {/* Price Tag */}
          <div className="inline-flex items-center gap-2 bg-gold text-navy-900 px-6 py-3 rounded-full font-bold text-xl mb-4">
            50€
            <span className="text-sm font-normal">(IVA incluido)</span>
          </div>

          {/* Discount Note */}
          <div className="flex items-center justify-center gap-2 text-green-700 mb-8">
            <CheckCircle size={20} />
            <p className="font-medium">
              La asesoría inicial de 50€ se descuenta del coste total si decides continuar tu proceso con nosotros.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-navy-200 shadow-sm">
            <Clock className="text-gold" size={24} />
            <div>
              <p className="font-semibold text-navy-900">30 minutos</p>
              <p className="text-sm text-navy-800">Consulta personalizada</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-navy-200 shadow-sm">
            <CreditCard className="text-gold" size={24} />
            <div>
              <p className="font-semibold text-navy-900">Pago seguro</p>
              <p className="text-sm text-navy-800">Vía Stripe</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-navy-200 shadow-sm">
            <Calendar className="text-gold" size={24} />
            <div>
              <p className="font-semibold text-navy-900">Solo online</p>
              <p className="text-sm text-navy-800">Videoconferencia</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-navy-800 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para agendar tu consulta?
            </h3>
            <p className="text-navy-100 mb-6">
              Selecciona la fecha y hora que mejor te convenga. El pago de 50€ se procesará
              de forma segura a través de Stripe.
            </p>

            {/* Mandatory Terms Checkbox */}
            <div className="bg-navy-700/50 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms-asesoria"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(Boolean(checked))}
                  className="mt-1 border-white/50 data-[state=checked]:bg-gold data-[state=checked]:text-navy-900"
                />
                <Label htmlFor="terms-asesoria" className="text-sm text-navy-100 font-normal cursor-pointer">
                  He leído y acepto las{" "}
                  <a href="/condiciones-servicio" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                    Condiciones Generales del Servicio
                  </a>{" "}
                  de AMA Consultores, incluyendo la política de honorarios, el alcance de la consultoría y la obligación de medios. Entiendo que la contratación del servicio no garantiza una resolución administrativa favorable.
                </Label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA - Open TidyCal */}
              <Button
                className="bg-gold hover:bg-gold-dark text-navy-900 font-bold text-lg px-8 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => window.open(TIDYCAL_URL, '_blank')}
                disabled={!termsAccepted}
              >
                <Calendar className="mr-2" size={20} />
                Agenda tu asesoría — 50€
              </Button>

              {/* Secondary CTA - Direct Link */}
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => window.open(TIDYCAL_URL, '_blank')}
                disabled={!termsAccepted}
              >
                <ExternalLink className="mr-2" size={18} />
                Ver en TidyCal
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-navy-800">
            Reservas gestionadas con TidyCal · Pago seguro con Stripe · Cancelación gratuita hasta 24h antes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AsesoriaSection;
