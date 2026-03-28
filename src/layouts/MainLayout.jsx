import React from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;