import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleCTA = () => {
  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl text-center">
      <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <MessageCircle className="w-7 h-7 text-gold" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">
        ¿Tienes dudas sobre este tema?
      </h3>
      <p className="text-white/70 mb-6 max-w-xl mx-auto">
        Nuestro equipo está disponible para aclarar tus preguntas y orientarte en tu proceso migratorio.
      </p>
      <Link
        to="/contacto"
        className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy font-bold rounded-xl hover:bg-gold-600 transition-colors"
      >
        Solicitar información
      </Link>
    </div>
  );
};

export default ArticleCTA;
