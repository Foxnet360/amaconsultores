import React from 'react';
import { motion } from 'framer-motion';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

const ReviewsSection = () => {
  return (
<section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Valoraciones reales de personas que han confiado en nosotros
            para su proceso migratorio.
          </p>
        </motion.div>

        {/* Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GoogleReviewsWidget />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            ¿Has trabajado con nosotros?{' '}
          </p>
          <a
            href="https://g.page/r/CVyUjRxxxxx/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 6.09 4.58 11.13 10.5 11.88v-8.4h-3v-3.48h3V9.12c0-2.96 1.76-4.6 4.48-4.6 1.3 0 2.65.23 2.65.23v2.91h-1.5c-1.47 0-1.93.91-1.93 1.85v2.22h3.28l-.52 3.48h-2.76v8.4C19.42 23.13 24 18.09 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Deja tu reseña en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
