import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import PresentationBlock from '@/components/home/PresentationBlock';
import ProfileCards from '@/components/home/ProfileCards';
import TrustBlock from '@/components/home/TrustBlock';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AMA Consultores — Consultoría en Migraciones España y Colombia | amaconsultores.eu</title>
        <meta name="description" content="Consultoría especializada en migraciones internacionales y proyectos sociales. Más de 10 años de experiencia en España y Colombia." />
        <meta property="og:title" content="AMA Consultores — Consultoría en Migraciones España y Colombia" />
        <meta property="og:description" content="Especializados en migraciones internacionales, regularización, homologación de títulos y proyectos europeos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amaconsultores.eu" />
        <link rel="canonical" href="https://amaconsultores.eu" />
      </Helmet>
      
      <div className="min-h-screen">
        <HeroSection />
        <PresentationBlock />
        <ProfileCards />
        <TrustBlock />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;