import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';

/**
 * Componente proveedor que inicializa Analytics y trackea cambios de página
 */
const AnalyticsProvider = ({ children }) => {
  const location = useLocation();
  const { trackPageView, isInitialized } = useAnalytics();

  // Trackear page views cuando cambia la ruta
  useEffect(() => {
    if (isInitialized) {
      trackPageView(location.pathname + location.search);
    }
  }, [location, isInitialized, trackPageView]);

  return children;
};

export default AnalyticsProvider;
