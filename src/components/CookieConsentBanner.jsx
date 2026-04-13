import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings } from 'lucide-react';
import CookiePreferences from './CookiePreferences';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice and if it's still valid
    const checkConsent = () => {
      const consentString = localStorage.getItem('ama_cookie_consent');
      
      if (!consentString) {
        // No consent stored, show banner
        return true;
      }
      
      try {
        const consent = JSON.parse(consentString);
        
        // Check if consent has expired (1 year = 365 days)
        if (consent.timestamp) {
          const consentDate = new Date(consent.timestamp);
          const now = new Date();
          const diffTime = Math.abs(now - consentDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays > 365) {
            // Consent expired, remove it and show banner
            localStorage.removeItem('ama_cookie_consent');
            return true;
          }
        }
        
        // Valid consent exists
        return false;
      } catch (e) {
        // Invalid consent data, show banner
        localStorage.removeItem('ama_cookie_consent');
        return true;
      }
    };
    
    const shouldShowBanner = checkConsent();
    
    if (shouldShowBanner) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('ama_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
    
    // Load GA4 if accepted
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleRejectNonEssential = () => {
    const consentData = {
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('ama_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handlePreferencesSaved = () => {
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-primary-dark border-t border-white/20 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <Cookie className="text-gold" size={24} />
                  </div>
                  
                  <div className="text-white">
                    <h3 className="font-poppins font-semibold text-lg mb-2">Utilizamos cookies</h3>
                    <p className="font-lato text-gray-300 text-sm mb-2">
                      Usamos cookies técnicas necesarias para el funcionamiento del sitio y, 
                      opcionalmente, cookies de Google Analytics 4 (anonimizadas) para mejorar tu experiencia.
                    </p>
                    <a
                      href="/politica-de-cookies"
                      className="text-gold text-sm hover:underline font-lato"
                    >
                      Ver política de cookies
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 border-2 border-gray-500 text-gray-300 hover:bg-gray-800 rounded-lg font-poppins font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Settings size={16} />
                    Preferencias
                  </button>

                  <button
                    onClick={handleRejectNonEssential}
                    className="px-4 py-2 border-2 border-white text-white hover:bg-white/20 rounded-lg font-poppins font-semibold transition-colors"
                  >
                    Rechazar no esenciales
                  </button>

                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-gold hover:bg-gold-dark text-primary-dark font-bold shadow-lg rounded-lg font-poppins transition-colors"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Preferences Modal */}
      <CookiePreferences 
        isOpen={showPreferences} 
        onClose={handlePreferencesSaved}
      />
    </>
  );
};

export default CookieConsentBanner;