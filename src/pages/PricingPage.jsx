import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  Building2, 
  FileCheck,
  Info,
  ChevronDown,
  ChevronUp,
  Home,
  ChevronRight
} from 'lucide-react';

const PricingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Tarifas Transparentes — AMA Consultores</title>
        <meta name="description" content="Consulta nuestras tarifas transparentes para servicios de regularización migratoria, movilidad profesional y consultoría para empresas." />
        <link rel="canonical" href="https://amaconsultores.eu/precios" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#0f2744] to-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                  <Home size={16} />
                  Inicio
                </Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium">Tarifas</span>
              </nav>

              <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-white mb-6">
                Tarifas Transparentes
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-3xl mx-auto">
                Precios claros sin sorpresas. Consulta nuestras tarifas para personas y empresas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="personas" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-[#0f2744]/60">
                <TabsTrigger value="personas" className="data-[state=active]:bg-gold data-[state=active]:text-primary-dark text-white/80">Para Personas</TabsTrigger>
                <TabsTrigger value="empresas" className="data-[state=active]:bg-gold data-[state=active]:text-primary-dark text-white/80">Para Empresas</TabsTrigger>
              </TabsList>

              {/* Personas Tab */}
              <TabsContent value="personas" className="space-y-8">
                {/* Regularización Migratoria */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Regularización Migratoria</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PricingCard
                      title="Asesoría inicial"
                      price="50€ IVA incluido"
                      description="Se descuenta del total si continúas"
                      icon={Calculator}
                      features={[
                        "Consulta personalizada de 30 minutos",
                        "Análisis de tu situación",
                        "Orientación sobre vías disponibles",
                        "Elaboración de un plan de acción"
                      ]}
                      highlighted
                    />
                    <PricingCard
                      title="Arraigo (cualquier tipo)"
                      price="380€ IVA incluido"
                      description="Tasas a cargo del cliente"
                      icon={FileCheck}
                      features={[
                        "Asesoría personalizada",
                        "Preparación de documentación",
                        "Seguimiento del expediente",
                        "Recursos si es necesario"
                      ]}
                    />
                    <PricingCard
                      title="Reagrupación Familiar"
                      price="380€ IVA incluido"
                      description="Tasas a cargo del cliente"
                      icon={Globe}
                      features={[
                        "Evaluación de viabilidad",
                        "Gestión documental",
                        "Seguimiento ante administración",
                        "Asesoría post-concesión"
                      ]}
                    />
                    <PricingCard
                      title="Residencias por circunstancias excepcionales"
                      price="380€ IVA incluido"
                      description="Tasas a cargo del cliente"
                      icon={Building2}
                      features={[
                        "Evaluación de viabilidad",
                        "Preparación de expediente",
                        "Seguimiento ante administración",
                        "Asesoría post-concesión"
                      ]}
                    />
                    <PricingCard
                      title="Nacionalidad Española"
                      price="500€ IVA incluido"
                      description="Tasas + DELE + CCSE a cargo del cliente"
                      icon={Building2}
                      features={[
                        "Análisis de requisitos",
                        "Preparación de expediente",
                        "Gestión de exámenes CCSE/DELE",
                        "Seguimiento hasta resolución"
                      ]}
                    />
                  </div>
                </div>

                {/* Movilidad Profesional */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Movilidad Profesional</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PricingCard
                      title="Cuenta ajena / Cuenta propia"
                      price="380€ IVA incluido"
                      description="Tasas a cargo del cliente"
                      icon={Briefcase}
                      features={[
                        "Evaluación de viabilidad",
                        "Preparación de documentación",
                        "Gestión ante administración",
                        "Seguimiento hasta resolución"
                      ]}
                    />
                    <PricingCard
                      title="Altamente cualificada / Tarjeta Azul UE"
                      price="1.200€ IVA incluido"
                      description="Tasas a cargo del cliente"
                      icon={GraduationCap}
                      features={[
                        "Evaluación de requisitos",
                        "Preparación de documentación",
                        "Gestión de visado",
                        "Seguimiento hasta resolución"
                      ]}
                    />
                    <PricingCard
                      title="Visado Nómada Digital"
                      price="1.200€ IVA incluido"
                      description="Tasas a cargo del cliente"
                      icon={Globe}
                      features={[
                        "Evaluación de requisitos",
                        "Preparación de documentación",
                        "Gestión de visado",
                        "Asesoría fiscal (Ley Beckham)"
                      ]}
                    />
                    <PricingCard
                      title="Homologación profesional universitaria"
                      price="530€ IVA incluido"
                      description="Titulaciones colombianas: incluye apostillas, legalizaciones y envío. Otras: documentos previos apostillados a cargo del cliente"
                      icon={FileCheck}
                      features={[
                        "Análisis de título",
                        "Preparación de documentación",
                        "Gestión ante ministerios",
                        "Seguimiento del expediente"
                      ]}
                    />
                    <PricingCard
                      title="Homologación técnica/tecnológica"
                      price="430€ IVA incluido"
                      description="Titulaciones colombianas: incluye apostillas, legalizaciones y envío. Otras: documentos previos apostillados a cargo del cliente"
                      icon={FileCheck}
                      features={[
                        "Análisis de título",
                        "Preparación de documentación",
                        "Gestión ante ministerios",
                        "Seguimiento del expediente"
                      ]}
                    />
                    <PricingCard
                      title="Homologación bachillerato"
                      price="360€ IVA incluido"
                      description="Titulaciones colombianas: incluye apostillas, legalizaciones y envío. Otras: documentos previos apostillados a cargo del cliente"
                      icon={FileCheck}
                      features={[
                        "Análisis de título",
                        "Preparación de documentación",
                        "Gestión ante ministerios",
                        "Seguimiento del expediente"
                      ]}
                    />
                    <PricingCard
                      title="Equivalencia de doctorado"
                      price="1.000€ IVA incluido"
                      description="Titulaciones colombianas: incluye apostillas, legalizaciones y envío. Otras: documentos previos apostillados a cargo del cliente"
                      icon={GraduationCap}
                      features={[
                        "Análisis de título",
                        "Preparación de documentación",
                        "Gestión ante universidad",
                        "Seguimiento del expediente"
                      ]}
                    />
                  </div>
                </div>

                {/* Colombia */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Servicios en Colombia</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PricingCard
                      title="Visados para Colombia"
                      price="Consulta tu caso"
                      description="Tramitación de visados de cualquier tipo"
                      icon={Globe}
                      features={[
                        "Evaluación de visado requerido",
                        "Preparación de documentación",
                        "Gestión ante Migración Colombia",
                        "Seguimiento hasta concesión"
                      ]}
                    />
                    <PricingCard
                      title="Trámites ante Migración Colombia"
                      price="Consulta tu caso"
                      description="Regularización y trámites ante Migración Colombia"
                      icon={Building2}
                      features={[
                        "Evaluación de situación",
                        "Identificación de vía más adecuada",
                        "Gestión completa del trámite",
                        "Seguimiento y resolución"
                      ]}
                    />
                    <PricingCard
                      title="Apostillas y legalizaciones"
                      price="Consulta tu caso"
                      description="Apostilla de documentos españoles para Colombia"
                      icon={FileCheck}
                      features={[
                        "Gestión documental",
                        "Apostilla de La Haya",
                        "Traducción si es necesaria",
                        "Envío certificado"
                      ]}
                    />
                    <PricingCard
                      title="Regularización en Colombia"
                      price="Consulta tu caso"
                      description="Regularización de situación migratoria"
                      icon={Building2}
                      features={[
                        "Evaluación de situación",
                        "Identificación de vía más adecuada",
                        "Gestión completa del trámite",
                        "Seguimiento y resolución"
                      ]}
                    />
                    <PricingCard
                      title="Retorno"
                      price="Consulta tu caso"
                      description="Acompañamiento en retorno a Colombia"
                      icon={Globe}
                      features={[
                        "Gestión documental",
                        "Homologación de títulos españoles",
                        "Reintegración ante entidades",
                        "Gestión de doble nacionalidad"
                      ]}
                    />
                  </div>
                </div>

                <NoteBox />
              </TabsContent>

              {/* Empresas Tab */}
              <TabsContent value="empresas" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PricingCard
                    title="Contratación internacional desde Colombia — empresa"
                    price="Presupuesto personalizado"
                    description="Proceso integral de selección y contratación"
                    icon={Briefcase}
                    features={[
                      "Fase 1: Diagnóstico y perfil",
                      "Fase 2: Preselección en Colombia",
                      "Fase 3: Entrevistas finales",
                      "Fase 4: Gestión documental completa"
                    ]}
                    highlighted
                  />
                  <PricingCard
                    title="Acompañamiento al trabajador en destino — TIE y trámites"
                    price="500€ IVA incluido"
                    description="Tramitación individual de documentación migratoria"
                    icon={FileCheck}
                    features={[
                      "Evaluación de documentación",
                      "Preparación de expediente",
                      "Gestión ante administración española",
                      "Seguimiento hasta resolución"
                    ]}
                  />
                  <PricingCard
                    title="Proyectos con financiación pública y europea"
                    price="Presupuesto personalizado"
                    description="Asesoría en proyectos FAMI, FSE+, Next Generation EU"
                    icon={Building2}
                    features={[
                      "Identificación de convocatorias",
                      "Formulación técnica",
                      "Presupuesto y seguimiento",
                      "Justificación e informes"
                    ]}
                  />
                  <PricingCard
                    title="Consultoría para el tercer sector"
                    price="Presupuesto personalizado"
                    description="Asesoría especializada para el tercer sector"
                    icon={Building2}
                    features={[
                      "Diseño de protocolos de atención",
                      "Formación técnica equipos",
                      "Facilitación de alianzas",
                      "Apoyo en proyectos europeos"
                    ]}
                  />
                </div>

                <div className="bg-[#0f2744] border border-gold/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Info className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Notas importantes para empresas</h3>
                      <ul className="space-y-2 text-white/80">
                        <li>• Las tasas oficiales (visados, residencias) corren por cuenta de la empresa</li>
                        <li>• Precios para proyectos europeos y financiación pública: consultar</li>
                        <li>• Posibilidad de pagos fraccionados según fases del proyecto</li>
                        <li>• Contrato directo entre empresa y trabajador; AMA actúa como intermediario documental</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* FAQs */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes sobre Precios</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <FAQItem 
                  question="¿Los precios incluyen tasas oficiales?"
                  answer="No, nuestros precios son por servicio de asesoría y gestión. Las tasas oficiales son siempre a cargo del cliente o empresa, ya que se pagan directamente a la administración."
                />
                <FAQItem 
                  question="¿Hay pagos a plazos?"
                  answer="Sí, en proyectos empresariales y ciertos servicios personales ofrecemos la posibilidad de pagos fraccionados según el avance de las fases del proyecto. Consúltanos para tu caso específico."
                />
                <FAQItem 
                  question="¿Qué pasa si el trámite se resuelve negativamente?"
                  answer="En caso de resolución negativa, analizamos las causas y opciones de recurso. Si procede recurrir, este servicio puede tener coste adicional según complejidad. Si no hay posibilidad de recurso, el servicio de asesoría ya prestado no es reembolsable."
                />
                <FAQItem 
                  question="¿El precio varía según la complejidad del caso?"
                  answer="Los precios mostrados son tarifas base. Casos con circunstancias especiales (antecedentes, situaciones administrativas complejas, etc.) pueden requerir evaluación personalizada. Siempre te informaremos antes de iniciar si hay costes adicionales."
                />
                <FAQItem 
                  question="¿Incluye seguimiento post-resolución?"
                  answer="Sí, todos nuestros servicios incluyen seguimiento hasta la resolución final y asesoría post-concesión básica. Si necesitas asesoría continua o servicios adicionales, estos se presupuestan aparte."
                />
              </div>
            </section>

            {/* CTA */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-br from-[#0f2744] to-[#0f172a] border border-gold/20 rounded-2xl p-12">
                <h2 className="font-poppins text-3xl font-bold text-white mb-4">
                  ¿Tienes dudas sobre nuestras tarifas?
                </h2>
                <p className="font-lato text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Agenda una asesoría personalizada. Analizaremos tu caso específico y te informaremos de las tarifas antes de comenzar.
                </p>
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-primary-dark font-bold px-8 py-6 text-lg"
                  onClick={() => navigate('/agenda')}
                >
                  Agenda tu asesoría — 50€
                </Button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

// Componente de tarjeta de precio
const PricingCard = ({ title, price, description, icon: Icon, features, highlighted = false }) => {
  return (
    <Card className={`h-full flex flex-col bg-[#0f2744]/60 border-white/10 ${highlighted ? 'border-2 border-gold shadow-lg' : ''}`}>
      <CardHeader className="pb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${highlighted ? 'bg-gold' : 'bg-gold/20'}`}>
          <Icon className={highlighted ? 'text-primary-dark' : 'text-gold'} size={24} />
        </div>
        <CardTitle className="font-poppins text-xl text-white">{title}</CardTitle>
        <p className="font-lato text-white/70 text-sm mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="font-poppins text-3xl font-bold text-gold">{price}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-white/80 font-lato">
              <span className="text-gold mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Componente de nota informativa
const NoteBox = () => (
  <div className="bg-[#0f2744] border border-gold/30 rounded-lg p-6 mt-8">
    <div className="flex items-start gap-3">
      <Info className="text-gold flex-shrink-0 mt-1" size={20} />
      <div>
        <h3 className="font-semibold text-white mb-2">Tasas oficiales no incluidas</h3>
        <p className="text-white/80 mb-2">
          Los precios mostrados son por nuestro servicio de asesoría y gestión. Las tasas oficiales 
          que debes pagar a la administración no están incluidas y son siempre a cargo del cliente.
        </p>
      </div>
    </div>
  </div>
);

// Componente de FAQ
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-[#0f2744]/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-[#0f2744]/60 hover:bg-[#0f2744]/80 transition-colors"
      >
        <span className="font-poppins font-semibold text-white">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-white/80" /> : <ChevronDown size={20} className="text-white/80" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-[#0f2744]/30 border-t border-white/10">
          <p className="font-lato text-white/80">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
