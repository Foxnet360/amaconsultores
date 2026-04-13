import React, { useState, useEffect } from 'react';
import { Star, AlertCircle } from 'lucide-react';

// Elfsight widget configuration
const ELFSIGHT_WIDGET_URL = 'https://elfsightcdn.com/platform.js';
const WIDGET_ID = 'aee9e13f-c760-4604-b5b2-01e0feec0470';

const GoogleReviewsWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Check if widget is already loaded
    if (window.eapps) {
      setWidgetLoaded(true);
      setIsLoading(false);
      return;
    }

    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = ELFSIGHT_WIDGET_URL;
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    
    script.onload = () => {
      setWidgetLoaded(true);
      setIsLoading(false);
    };
    
    script.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    // Set timeout for loading (10 seconds)
    const timeout = setTimeout(() => {
      if (!widgetLoaded) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000);

    document.head.appendChild(script);

    return () => {
      clearTimeout(timeout);
      // Script remains in DOM as Elfsight manages its own cleanup
    };
  }, [widgetLoaded]);

  // Fallback content when widget fails to load
  if (hasError) {
    return (
      <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Reseñas de Google no disponibles momentáneamente</p>
        <p className="text-sm text-gray-500">
          Puedes ver nuestras reseñas directamente en{' '}
          <a 
            href="https://g.page/r/CVyUjRxxxxx/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold-500 hover:underline"
          >
            Google Maps
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
        </div>
      )}
      
      {/* Elfsight widget container */}
      <div 
        className={`elfsight-app-${WIDGET_ID} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        data-elfsight-app-lazy
      >
        {/* Widget content will be injected here by Elfsight */}
      </div>
    </div>
  );
};

// Fallback component with static reviews
const ManualReviewsFallback = () => {
  const reviews = [
    {
      id: 1,
      author: 'María García',
      rating: 5,
      date: '2 semanas atrás',
      text: 'Excelente servicio. Ángela me ayudó con todo el proceso de regularización. Muy profesional y atenta.'
    },
    {
      id: 2,
      author: 'Carlos Rodríguez',
      rating: 5,
      date: '1 mes atrás',
      text: 'Gran equipo de profesionales. Resolvieron todas mis dudas sobre el proceso migratorio.'
    },
    {
      id: 3,
      author: 'Ana Martínez',
      rating: 5,
      date: '2 meses atrás',
      text: 'Muy recomendables. El proceso fue rápido y sin complicaciones.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {reviews.map((review) => (
        <div 
          key={review.id}
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
        >
          {/* Stars */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          
          {/* Review text */}
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
          
          {/* Author and date */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-navy text-sm">{review.author}</span>
            <span className="text-gray-400 text-xs">{review.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviewsWidget;
