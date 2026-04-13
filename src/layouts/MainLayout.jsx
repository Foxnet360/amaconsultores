import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-primary-dark px-4 py-2 rounded z-50 font-semibold"
      >
        Saltar al contenido principal
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

export default MainLayout;