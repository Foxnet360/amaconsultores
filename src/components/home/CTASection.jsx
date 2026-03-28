import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTASection = () => {
  const whatsappNumber = '573017174478';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría recibir información sobre sus servicios de migración.');

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            ¿Listo para dar el siguiente paso?
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Cuéntame tu situación y te informaré de las tarifas antes de comenzar. 
            Respondo en un plazo de 48 horas laborables.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                Contactar para presupuesto
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold text-lg px-8 py-6 rounded-xl transition-all"
              >
                <MessageCircle className="mr-2" size={20} />
                Contactar por WhatsApp
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-gray-500 pt-4">
            Las consultas tienen coste. Te informaré de las tarifas antes de comenzar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
