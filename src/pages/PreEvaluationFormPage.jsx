import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import EvaluationForm from '@/components/forms/EvaluationForm';

const PreEvaluationFormPage = () => {
  return (
    <>
      <Helmet>
        <title>Evaluación Gratuita - AMA Consultores</title>
        <meta name="description" content="Solicita tu evaluación gratuita. Analizaremos tu caso y te proporcionaremos una consulta inicial sin compromiso." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Evaluación Gratuita
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cuéntanos tu caso y te proporcionaremos una evaluación inicial sin compromiso
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <EvaluationForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default PreEvaluationFormPage;