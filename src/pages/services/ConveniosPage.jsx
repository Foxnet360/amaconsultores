import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Globe, Shield, FileText, Car, Building } from 'lucide-react';
import { LegalNotice } from '@/components/legal';
import { Button } from '@/components/ui/button';
import {
  dobleNacionalidad,
  seguridadSocial,
  dobleImposicion,
  canjeLicencia,
  appri,
  ctaFinal,
} from '@/data/convenios-services';

const ConveniosPage = () => {
  return (
    <>
      <Helmet>
        <title>Convenios España-Colombia — AMA Consultores</title>
        <meta
          name="description"
          content="Conoce los tratados internacionales entre España y Colombia: doble nacionalidad, seguridad social, doble imposición fiscal, canje de licencia y protección de inversiones."
        />
        <link rel="canonical" href="https://amaconsultores.eu/servicios/convenios" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                  <Home size={16} />
                  Inicio
                </Link>
                <ChevronRight size={16} />
                <Link to="/servicios" className="hover:text-gold transition-colors">Servicios</Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium">Convenios España-Colombia</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                España y Colombia: lo que los tratados internacionales te garantizan
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                Dos países, un marco legal que protege tus derechos. Conoce los acuerdos que te benefician directamente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <LegalNotice
              type="info"
              text="Sección diferenciadora de AMA Consultores. Pocas consultoras comunican estos tratados con rigor."
            />

            {/* Bloque 1 — Doble Nacionalidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{dobleNacionalidad.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {dobleNacionalidad.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{dobleNacionalidad.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {dobleNacionalidad.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {dobleNacionalidad.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 2 — Seguridad Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{seguridadSocial.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {seguridadSocial.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{seguridadSocial.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {seguridadSocial.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {seguridadSocial.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 3 — Doble Imposición */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{dobleImposicion.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {dobleImposicion.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{dobleImposicion.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <h4 className="text-white font-semibold mb-4">Casos prácticos:</h4>
                <ul className="space-y-3">
                  {dobleImposicion.casosPracticos.map((caso, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {caso}
                    </li>
                  ))}
                </ul>
              </div>

              <LegalNotice type="info" text={dobleImposicion.nota} />

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {dobleImposicion.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 4 — Canje de Licencia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Car className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{canjeLicencia.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {canjeLicencia.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{canjeLicencia.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {canjeLicencia.requisitos.map((requisito, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {requisito}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {canjeLicencia.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 5 — APPRI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Building className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{appri.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {appri.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-4 leading-relaxed">{appri.description}</p>
              <p className="text-white/70 mb-6 leading-relaxed">{appri.beneficios}</p>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {appri.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* CTA Final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-500/30 rounded-xl p-8 text-center"
            >
              <p className="text-white text-lg mb-6">{ctaFinal.text}</p>
              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-lg px-8 py-6">
                  Agenda tu asesoría — 50€
                </Button>
              </Link>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ConveniosPage;