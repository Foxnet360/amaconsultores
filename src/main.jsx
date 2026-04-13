import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '@/App';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/index.css';

// Create QueryClient for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Suprimir errores de extensiones de navegador (MetaMask, Polkadot, etc.)
const originalConsoleError = console.error;
console.error = (...args) => {
  // Filtrar errores conocidos de extensiones
  const errorString = args.join(' ');
  if (
    errorString.includes('ethereum') ||
    errorString.includes('evmAsk') ||
    errorString.includes('polkadot') ||
    errorString.includes('content.js') ||
    errorString.includes('Cannot redefine property') ||
    errorString.includes('Fetch error from') && errorString.includes('chrome-error')
  ) {
    // Ignorar errores de extensiones
    return;
  }
  originalConsoleError.apply(console, args);
};

// Mantener filtro de warnings si es necesario para otros servicios

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </QueryClientProvider>
);