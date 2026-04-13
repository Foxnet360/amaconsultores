import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, BarChart3, Settings } from 'lucide-react';

const CookiePreferences = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false
  });
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Load existing consent
    const consentString = localStorage.getItem('ama_cookie_consent');
    if (consentString) {
      try {
        const consent = JSON.parse(consentString);
        setPreferences({
          essential: true,
          analytics: consent.analytics || false
        });
        setHasConsent(true);
      } catch (e) {
        console.error('Error parsing consent:', e);
      }
    }
  }, []);

  const savePreferences = () => {
    const consentData = {
      essential: true,
      analytics: preferences.analytics,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('ama_cookie_consent', JSON.stringify(consentData));
    
    // Update GA4 consent if needed
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied'
      });
    }
    
    setHasConsent(true);
    onClose();
    
    // Show confirmation
    alert('Preferencias de cookies guardadas correctamente');
  };

  const revokeAll = () => {
    localStorage.removeItem('ama_cookie_consent');
    setPreferences({ essential: true, analytics: false });
    setHasConsent(false);
    
    // Revoke GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
    
    onClose();
    alert('Todas las cookies han sido eliminadas. La página se recargará.');
    window.location.reload();
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Cannot disable essential
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 md:w-full md:max-w-2xl md:max-h-[90vh] overflow-auto"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <Settings className="text-[#d4af37]" size={24} />
                  </div>
                  <div>
                    <h2 className="font-poppins text-2xl font-bold text-[#0f172a]">
                      Configuración de cookies
                    </h2>
                    <p className="font-lato text-gray-600 text-sm">
                      Gestiona tus preferencias de privacidad
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {/* Status */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-lato text-sm text-gray-700">
                  <strong>Estado actual:</strong>{' '}
                  {hasConsent ? (
                    <span className="text-green-600">
                      Has configurado tus preferencias el {new Date(JSON.parse(localStorage.getItem('ama_cookie_consent'))?.timestamp).toLocaleDateString('es-ES')}
                    </span>
                  ) : (
                    <span className="text-amber-600">
                      No has configurado tus preferencias todavía
                    </span>
                  )}
                </p>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-8">
                {/* Essential */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield size={20} className="text-[#1e3a8a]" />
                        <h3 className="font-poppins font-semibold text-[#0f172a]">
                          Cookies técnicas y funcionales
                        </h3>
                        <span className="px-2 py-1 bg-[#1e3a8a] text-white text-xs rounded-full font-medium">
                          Obligatorias
                        </span>
                      </div>
                      <p className="font-lato text-sm text-gray-600">
                        Necesarias para el funcionamiento básico del sitio web. 
                        Incluyen cookies de sesión, seguridad y preferencias básicas. 
                        No se pueden desactivar.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 size={20} className="text-[#1e3a8a]" />
                        <h3 className="font-poppins font-semibold text-[#0f172a]">
                          Cookies analíticas
                        </h3>
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">
                          Opcional
                        </span>
                      </div>
                      <p className="font-lato text-sm text-gray-600">
                        Nos ayudan a entender cómo interactúas con el sitio web 
                        mediante Google Analytics 4. Los datos están anonimizados 
                        y se utilizan para mejorar la experiencia del usuario.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.analytics ? 'bg-[#d4af37]' : 'bg-gray-300'
                        }`}
                        aria-label={preferences.analytics ? 'Desactivar analytics' : 'Activar analytics'}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                            preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Info */}
              <div className="bg-[#1e3a8a]/5 p-4 rounded-lg mb-6">
                <p className="font-lato text-sm text-gray-700">
                  <strong>¿Necesitas más información?</strong>{' '}
                  Consulta nuestra{' '}
                  <a
                    href="/politica-de-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e3a8a] hover:underline font-semibold"
                  >
                    Política de Cookies
                  </a>{' '}
                  completa para conocer todos los detalles sobre cómo utilizamos las cookies.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-3 bg-[#d4af37] hover:bg-[#b8941f] text-[#0f172a] font-poppins font-semibold rounded-lg transition-colors"
                >
                  Guardar preferencias
                </button>
                
                {hasConsent && (
                  <button
                    onClick={revokeAll}
                    className="px-6 py-3 border-2 border-red-500 text-red-500 hover:bg-red-50 font-poppins font-semibold rounded-lg transition-colors"
                  >
                    Revocar todo
                  </button>
                )}
                
                <button
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-poppins font-semibold rounded-lg transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferences;