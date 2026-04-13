import { useEffect, useState } from 'react';

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

/**
 * Hook para gestionar Google Analytics 4 con consentimiento del usuario
 * Solo carga GA4 si el usuario ha dado consentimiento para cookies de análisis
 */
export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Verificar si hay consentimiento para analytics
    const checkConsentAndInit = () => {
      const consentString = localStorage.getItem('ama_cookie_consent');
      
      if (!consentString) {
        return false;
      }
      
      try {
        const consent = JSON.parse(consentString);
        return consent.analytics === true;
      } catch (e) {
        return false;
      }
    };

    const hasAnalyticsConsent = checkConsentAndInit();

    // Solo inicializar GA4 si hay consentimiento y no está ya inicializado
    if (hasAnalyticsConsent && !isInitialized && GA4_MEASUREMENT_ID) {
      // Crear script de GA4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      
      script.onload = () => {
        // Inicializar dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', GA4_MEASUREMENT_ID, {
          anonymize_ip: true,
          cookie_expires: 14 * 30 * 24 * 60 * 60, // 14 meses en segundos
          cookie_flags: 'SameSite=None;Secure',
        });
        
        // Configurar consentimiento
        gtag('consent', 'default', {
          analytics_storage: 'granted',
        });
        
        setIsInitialized(true);
      };
      
      document.head.appendChild(script);
    }
  }, [isInitialized]);

  // Función para trackear eventos personalizados
  const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== 'undefined' && window.gtag && isInitialized) {
      window.gtag('event', eventName, eventParams);
    }
  };

  // Función para trackear page views
  const trackPageView = (pagePath) => {
    if (typeof window !== 'undefined' && window.gtag && isInitialized) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
      });
    }
  };

  return {
    isInitialized,
    trackEvent,
    trackPageView,
  };
};

export default useAnalytics;
