import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = '34123456789'; // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hola, me gustaría recibir información sobre sus servicios de movilidad internacional.');

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="relative">
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            <span className="text-sm">¿Preguntas? Contáctanos por WhatsApp</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-slate-900" />
          </motion.div>
        )}
        
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(34, 197, 94, 0.7)',
              '0 0 0 10px rgba(34, 197, 94, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;