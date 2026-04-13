import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Briefcase, Users, Wallet, Shield, Euro, Building } from 'lucide-react';
import { LegalNotice } from '@/components/legal';
import { Button } from '@/components/ui/button';
import {
  introduccionEmpresas,
  contratacionInternacional,
  porQueColombia,
  costesYPagos,
  legalidadYGarantias,
  proyectosEuropeos,
  consultoriaTercerSector,
} from '@/data/enterprise-services';

const EmpresasPage = () => {
  return (
    <>
      <Helmet>
        <title>Empresas, ONGs y Entidades Públicas — AMA Consultores</title>
        <meta
          name="description"
          content="Soluciones especializadas para empresas, ONGs y entidades públicas. Contratación internacional desde Colombia, proyectos europeos y consultoría para el tercer sector."
        />
        <link rel="canonical" href="https://amaconsultores.eu/servicios/empresas" />
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
                <span className="text-gold font-medium">Empresas</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                {introduccionEmpresas.titulo}
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                {introduccionEmpresas.subtitulo}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Intro paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {introduccionEmpresas.texto}
              </p>

              <LegalNotice type="note" text={introduccionEmpresas.nota} />
            </motion.div>

            {/* Bloque 1 — Contratación Internacional */}
            <motion.div
              id="contratacion"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{contratacionInternacional.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {contratacionInternacional.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{contratacionInternacional.description}</p>

              {/* Fases as steps */}
              <div className="bg-navy-800 border border-white/10 rounded-lg overflow-hidden mb-6">
                <div className="bg-gold-500/20 px-6 py-3 border-b border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-white">
                    <span>Fase</span>
                    <span>Descripción</span>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {contratacionInternacional.fases.map((fase, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 px-6 py-4">
                      <span className="text-gold-400 font-semibold">{fase.title}</span>
                      <span className="text-white/70 text-sm">{fase.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/80 text-sm mb-2">{contratacionInternacional.precioEmpresa}</p>
                <p className="text-gold-400 text-sm">{contratacionInternacional.precioTrabajador}</p>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {contratacionInternacional.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 2 — ¿Por qué contratar talento colombiano? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{porQueColombia.title}</h2>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{porQueColombia.description}</p>

              {/* Sectores as list */}
              <div className="bg-navy-800 border border-white/10 rounded-lg overflow-hidden mb-6">
                <div className="bg-gold-500/20 px-6 py-3 border-b border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-white">
                    <span>Sector</span>
                    <span>Perfiles</span>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {porQueColombia.sectores.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 px-6 py-4">
                      <span className="text-gold-400 font-semibold">{item.sector}</span>
                      <span className="text-white/70 text-sm">{item.perfiles}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {porQueColombia.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 3 — Costes y Pagos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Wallet className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{costesYPagos.title}</h2>
                </div>
              </div>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed">{costesYPagos.empresa}</p>
                  <p className="text-gold-400 leading-relaxed">{costesYPagos.trabajador}</p>
                </div>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {costesYPagos.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 4 — Legalidad y Garantías */}
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
                  <h2 className="text-2xl font-bold text-white">{legalidadYGarantias.title}</h2>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{legalidadYGarantias.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {legalidadYGarantias.garantias.map((garantia, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {garantia}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {legalidadYGarantias.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 5 — Proyectos con Financiación Pública y Europea */}
            <motion.div
              id="proyectos-europeos"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Euro className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{proyectosEuropeos.title}</h2>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{proyectosEuropeos.description}</p>

              {/* Fondos array */}
              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <h3 className="text-gold-400 font-semibold mb-4">Fondos disponibles:</h3>
                <ul className="space-y-2">
                  {proyectosEuropeos.fondos.map((fondo, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {fondo}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    <span className="text-gold-400">Servicios:</span> {proyectosEuropeos.servicios}
                  </p>
                </div>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {proyectosEuropeos.ctaText}
                </Button>
              </Link>
            </motion.div>

            {/* Bloque 6 — Consultoría para el Tercer Sector */}
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
                  <h2 className="text-2xl font-bold text-white">{consultoriaTercerSector.title}</h2>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{consultoriaTercerSector.description}</p>

              {/* Servicios array */}
              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {consultoriaTercerSector.servicios.map((servicio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {servicio}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contacto">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                  {consultoriaTercerSector.ctaText}
                </Button>
              </Link>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default EmpresasPage;