import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import TeamSection from '@/components/about/TeamSection';
import TeamNote from '@/components/about/TeamNote';
import MissionSection from '@/components/about/MissionSection';
import TrustSignals from '@/components/about/TrustSignals';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos — AMA Consultores | Equipo especializado en migraciones</title>
        <meta name="description" content="Conoce al equipo de AMA Consultores: Ángela Morales, fundadora y directora, junto a Rafael Reyes y Xiomara Sánchez. Especializados en migraciones España y Colombia." />
        <meta property="og:title" content="Quiénes Somos — AMA Consultores" />
        <meta property="og:description" content="Equipo especializado en migraciones internacionales con más de 10 años de experiencia." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Quiénes Somos
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un equipo humano, comprometido con cada historia
              </p>
            </motion.div>
          </div>
        </section>

        <MissionSection />
        <TeamSection />
        <TeamNote />
        <TrustSignals />
      </div>
    </>
  );
};

export default AboutPage;
