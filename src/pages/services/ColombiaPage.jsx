import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Globe, Building2, FileCheck, Plane } from 'lucide-react';
import { LegalNotice } from '@/components/legal';
import { Button } from '@/components/ui/button';
import {
  disclaimerColombia,
  visadosColombia,
  tramitesMigracion,
  apostillasLegalizaciones,
  regularizacionColombia,
  retornoColombia,
} from '@/data/colombia-services';

const ColombiaPage = () => {
  return (
    <>
      <Helmet>
        <title>Colombia: Trámites Internacionales — AMA Consultores</title>
        <meta
          name="description"
          content="Servicios de trámites en Colombia: visados, apostillas, legalizaciones, regularización migratoria y retorno. Atendemos clientes de cualquier nacionalidad."
        />
        <link rel="canonical" href="https://amaconsultores.eu/servicios/colombia" />
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
                <span className="text-gold font-medium">Colombia</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                Colombia: también te acompañamos allá
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                Atendemos clientes de cualquier nacionalidad con vínculos jurídicos, familiares o laborales con Colombia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <LegalNotice type="disclaimer" text={disclaimerColombia.text} />

            {/* Bloque 1 — Visados para Colombia */}
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
                  <h2 className="text-2xl font-bold text-white">{visadosColombia.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {visadosColombia.baseNormativa}</p>
                </div>
              </div>

              <div className="bg-navy-800 border border-white/10 rounded-lg overflow-hidden mb-6">
                <div className="bg-gold-500/20 px-6 py-3 border-b border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-white">
                    <span>Tipo de visa</span>
                    <span>Para quién</span>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {visadosColombia.tipos.map((tipo, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 px-6 py-4">
                      <span className="text-gold-400 font-semibold">{tipo.tipo}</span>
                      <span className="text-white/70 text-sm">{tipo.descripcion}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-semibold">Precio: {visadosColombia.price}</span>
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Bloque 2 — Trámites ante Migración */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Building2 className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{tramitesMigracion.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {tramitesMigracion.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{tramitesMigracion.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {tramitesMigracion.servicios.map((servicio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {servicio}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-semibold">Precio: {tramitesMigracion.price}</span>
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Bloque 3 — Apostillas y Legalizaciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <FileCheck className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{apostillasLegalizaciones.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {apostillasLegalizaciones.baseNormativa}</p>
                </div>
              </div>

              <div className="bg-navy-800 border border-white/10 rounded-lg overflow-hidden mb-6">
                <div className="bg-gold-500/20 px-6 py-3 border-b border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-white">
                    <span>Tipo</span>
                    <span>Descripción</span>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {apostillasLegalizaciones.tipos.map((tipo, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 px-6 py-4">
                      <span className="text-gold-400 font-semibold">{tipo.tipo}</span>
                      <span className="text-white/70 text-sm">{tipo.descripcion}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-semibold">Precio: {apostillasLegalizaciones.price}</span>
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Contacta con nosotros
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Bloque 4 — Regularización */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Building2 className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{regularizacionColombia.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {regularizacionColombia.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{regularizacionColombia.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {regularizacionColombia.servicios.map((servicio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {servicio}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-semibold">Precio: {regularizacionColombia.price}</span>
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Bloque 5 — Retorno */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Plane className="text-gold-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{retornoColombia.title}</h2>
                  <p className="text-white/80 text-sm">Base normativa: {retornoColombia.baseNormativa}</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{retornoColombia.description}</p>

              <div className="bg-navy-800 border border-white/10 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  {retornoColombia.servicios.map((servicio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-gold-400 mt-1">•</span>
                      {servicio}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-semibold">Precio: {retornoColombia.price}</span>
                <Link to="/contacto">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold">
                    Agenda tu asesoría — 50€
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ColombiaPage;