import React from 'react';
import { AlertCircle, RefreshCw, Home, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // You can also log error messages to an error reporting service here
    // Example: Sentry, LogRocket, etc.
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: `${error.toString()} ${errorInfo.componentStack}`,
        fatal: true
      });
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/#';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-red-600" size={40} />
            </div>
            
            <h1 className="text-2xl font-bold text-navy mb-4">
              ¡Ups! Algo salió mal
            </h1>
            
            <p className="text-gray-600 mb-6">
              Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo o 
              contacta con nosotros si el problema persiste.
            </p>
            
            {import.meta.env.DEV && this.state.error && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg text-left overflow-auto">
                <p className="text-sm font-mono text-red-600 mb-2">
                  {this.state.error.toString()}
                </p>
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}
            
            <div className="space-y-3">
              <Button
                onClick={this.handleReload}
                className="w-full bg-gold hover:bg-gold-600 text-navy font-semibold"
              >
                <RefreshCw className="mr-2" size={18} />
                Recargar página
              </Button>
              
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold/10"
              >
                <Home className="mr-2" size={18} />
                Volver al inicio
              </Button>
              
              <a
                href="mailto:info@amaconsultores.eu?subject=Error en la web"
                className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-navy transition-colors mt-4"
              >
                <Mail size={16} />
                Reportar error
              </a>
            </div>
            
            <p className="mt-6 text-sm text-gray-400">
              AMA Consultores | info@amaconsultores.eu
            </p>
          </div>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
