import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TidyCalModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trap and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    const closeButton = closeButtonRef.current;
    
    // Focus the close button when modal opens
    if (closeButton) {
      closeButton.focus();
    }

    // Handle tab key for focus trap
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[70] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#1a2335]">
              <div>
                <h2 id="modal-title" className="font-poppins text-xl font-semibold text-white">
                  Agenda tu asesoría
                </h2>
                <p className="font-lato text-sm text-white/70 mt-1">
                  Reserva una consulta gratuita de 30 minutos
                </p>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* TidyCal Widget */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://tidycal.com/amaconsultores/asesoria-migratoria"
                className="w-full h-full"
                frameBorder="0"
                title="Agendar asesoría"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TidyCalModal;