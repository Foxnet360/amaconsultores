import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Clock, AlertTriangle, FileText, User, Building, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [clientType, setClientType] = useState(null); // 'persona' | 'entidad'
  const [entityService, setEntityService] = useState(null); // 'contratacion' | 'proyectos'
  
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    pais: '',
    mensaje: '',
    privacyAccepted: false,
    serviceTermsAccepted: false,
    marketingConsent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de campos obligatorios
    if (!formData.nombre || !formData.email || !formData.pais || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    // Validación RGPD - consentimiento obligatorio
    if (!formData.privacyAccepted) {
      toast({
        title: "Política de privacidad",
        description: "Debes aceptar la política de privacidad para enviar el formulario",
        variant: "destructive"
      });
      return;
    }

    // Validación - condiciones de servicio obligatorias
    if (!formData.serviceTermsAccepted) {
      toast({
        title: "Condiciones de servicio",
        description: "Debes aceptar las Condiciones Generales del Servicio para enviar el formulario",
        variant: "destructive"
      });
      return;
    }

    // Simular envío
    toast({
      title: "Mensaje enviado",
      description: "Te responderemos en un plazo de 48 horas laborables",
    });

    // Reset form
    setFormData({ 
      nombre: '', 
      empresa: '',
      email: '', 
      pais: '', 
      mensaje: '',
      privacyAccepted: false,
      serviceTermsAccepted: false,
      marketingConsent: false
    });
    setClientType(null);
    setEntityService(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const getWhatsAppLink = () => {
    const message = `Hola, soy ${formData.nombre || '[nombre]'}. Vivo en ${formData.pais || '[país]'} y me gustaría consultar sobre servicios de migración.`;
    return `https://wa.me/573017174478?text=${encodeURIComponent(message)}`;
  };

  const getMensajePlaceholder = () => {
    if (clientType === 'entidad') {
      if (entityService === 'contratacion') {
        return "Describe el perfil que necesitas contratar (sector, experiencia, funciones...) y cuéntanos sobre tu empresa...";
      } else if (entityService === 'proyectos') {
        return "Describe el tipo de proyecto que gestionas, la financiación que buscas y el ámbito geográfico de actuación...";
      }
    }
    return "Cuéntame brevemente tu situación...";
  };

  return (
    <>
      <Helmet>
        <title>Contacto — AMA Consultores | Consultoría en Migraciones</title>
        <meta name="description" content="Contacta con AMA Consultores para consultas sobre migraciones España y Colombia. Respuesta en 48h." />
        <meta property="og:title" content="Contacto — AMA Consultores" />
        <meta property="og:description" content="Consultoría especializada en migraciones internacionales" />
        <link rel="canonical" href="https://amaconsultores.eu/contacto" />
      </Helmet>

      <div className="min-h-screen bg-primary-dark pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary-dark/20 to-primary-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-poppins text-3xl md:text-5xl font-bold text-white mb-6">
                ¿Hablamos? <span className="text-gold">Cuéntanos tu situación</span>
              </h1>
              <p className="font-lato text-gray-400 text-lg">
                Estoy aquí para acompañarte en tu proceso migratorio
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-6">Envíame un mensaje</h2>
                  
                  {/* Selector de Tipo de Cliente */}
                  <div className="mb-8">
                    <Label className="font-lato text-gray-300 mb-4 block">¿Eres una persona o una entidad? *</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setClientType('persona');
                          setEntityService(null);
                        }}
                        className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-300 ${
                          clientType === 'persona'
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-slate-700 bg-slate-800/50 text-gray-400 hover:border-slate-600'
                        }`}
                      >
                        <User size={32} />
                        <span className="font-semibold">Soy una persona</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setClientType('entidad')}
                        className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-300 ${
                          clientType === 'entidad'
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-slate-700 bg-slate-800/50 text-gray-400 hover:border-slate-600'
                        }`}
                      >
                        <Building size={32} />
                        <span className="font-semibold">Soy una entidad</span>
                      </button>
                    </div>
                  </div>

                  {/* Opciones para Entidades */}
                  {clientType === 'entidad' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8 bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                    >
                      <Label className="font-lato text-gray-300 mb-4 block">¿Qué tipo de servicio necesitas? *</Label>
                      
                      <div className="space-y-4">
                        {/* Opción 1: Contratación */}
                        <label className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          entityService === 'contratacion' 
                            ? 'border-gold bg-gold/10' 
                            : 'border-slate-700 hover:border-slate-600'
                        }`}>
                          <input
                            type="radio"
                            name="entityService"
                            value="contratacion"
                            checked={entityService === 'contratacion'}
                            onChange={(e) => setEntityService(e.target.value)}
                            className="mt-1 w-5 h-5 text-gold border-slate-600 bg-slate-700 focus:ring-gold"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Briefcase size={20} className="text-gold" />
                              <span className="font-semibold text-white">Quiero contratar talento colombiano para mi empresa</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-3">
                              Servicios de contratación internacional, selección de perfiles y gestión de visados.
                            </p>
                            <Link 
                              to="/servicios/empresas#contratacion"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-gold text-sm hover:underline"
                            >
                              Ver más información <ArrowRight size={14} />
                            </Link>
                          </div>
                        </label>

                        {/* Opción 2: Proyectos */}
                        <label className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          entityService === 'proyectos' 
                            ? 'border-gold bg-gold/10' 
                            : 'border-slate-700 hover:border-slate-600'
                        }`}>
                          <input
                            type="radio"
                            name="entityService"
                            value="proyectos"
                            checked={entityService === 'proyectos'}
                            onChange={(e) => setEntityService(e.target.value)}
                            className="mt-1 w-5 h-5 text-gold border-slate-600 bg-slate-700 focus:ring-gold"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Users size={20} className="text-gold" />
                              <span className="font-semibold text-white">Gestiono proyectos sociales o europeos</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-3">
                              Consultoría para fondos FAMI, FSE+, Next Generation EU y gestión de proyectos sociales.
                            </p>
                            <Link 
                              to="/servicios/empresas#proyectos-europeos"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-gold text-sm hover:underline"
                            >
                              Ver más información <ArrowRight size={14} />
                            </Link>
                          </div>
                        </label>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre" className="font-lato text-gray-300">
                        {clientType === 'entidad' ? 'Nombre del contacto *' : 'Nombre completo *'}
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder={clientType === 'entidad' ? 'Nombre de la persona de contacto' : 'Tu nombre completo'}
                        className="bg-slate-800 border-slate-700 text-white mt-2 font-lato"
                        required
                      />
                    </div>

                    {/* Campo Empresa (solo para entidades) */}
                    {clientType === 'entidad' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <Label htmlFor="empresa" className="font-lato text-gray-300">Nombre de la empresa *</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa u organización"
                          className="bg-slate-800 border-slate-700 text-white mt-2 font-lato"
                          required={clientType === 'entidad'}
                        />
                      </motion.div>
                    )}

                    <div>
                      <Label htmlFor="email" className="font-lato text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="bg-slate-800 border-slate-700 text-white mt-2 font-lato"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="pais" className="font-lato text-gray-300">País de residencia actual *</Label>
                      <Input
                        id="pais"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                        placeholder="Ej: Colombia, España, Venezuela..."
                        className="bg-slate-800 border-slate-700 text-white mt-2 font-lato"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensaje" className="font-lato text-gray-300">Mensaje breve *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder={getMensajePlaceholder()}
                        className="bg-slate-800 border-slate-700 text-white mt-2 min-h-[120px] font-lato"
                        required
                      />
                    </div>

                    {/* RGPD - Consentimiento obligatorio */}
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-poppins font-semibold text-white mb-3 flex items-center gap-2">
                        <FileText size={18} className="text-gold" />
                        Protección de datos (RGPD)
                      </h4>
                      
                      <div className="space-y-3">
                        {/* Checkbox obligatorio - Privacidad */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            name="privacyAccepted"
                            checked={formData.privacyAccepted}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 rounded border-slate-600 bg-slate-700 text-gold focus:ring-gold focus:ring-offset-0"
                            required
                          />
                          <span className="text-sm text-gray-300 font-lato leading-relaxed">
                            He leído y acepto la{' '}
                            <a 
                              href="/politica-de-privacidad" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gold hover:underline font-semibold"
                            >
                              Política de Privacidad
                            </a>
                            {' '}* 
                            <span className="text-xs text-gray-500 block mt-1">
                              Tus datos serán tratados por AMA Consultores para responder a tu consulta.
                            </span>
                          </span>
                        </label>

                        {/* Checkbox obligatorio - Condiciones del Servicio */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            name="serviceTermsAccepted"
                            checked={formData.serviceTermsAccepted}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 rounded border-slate-600 bg-slate-700 text-gold focus:ring-gold focus:ring-offset-0"
                            required
                          />
                          <span className="text-sm text-gray-300 font-lato leading-relaxed">
                            He leído y acepto las{' '}
                            <a 
                              href="/condiciones-servicio" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gold hover:underline font-semibold"
                            >
                              Condiciones Generales del Servicio
                            </a>
                            {' '}de AMA Consultores, incluyendo la política de honorarios, el alcance de la consultoría y la obligación de medios. Entiendo que la contratación del servicio no garantiza una resolución administrativa favorable. *
                          </span>
                        </label>

                        {/* Checkbox opcional - Marketing */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            name="marketingConsent"
                            checked={formData.marketingConsent}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 rounded border-slate-600 bg-slate-700 text-gold focus:ring-gold focus:ring-offset-0"
                          />
                          <span className="text-sm text-gray-400 font-lato leading-relaxed">
                            Acepto recibir información sobre servicios, novedades y contenidos de interés 
                            relacionados con migraciones (opcional)
                          </span>
                        </label>
                      </div>

                      <p className="text-xs text-gray-500 mt-3 font-lato">
                        <strong>Tus derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación, 
                        supresión, oposición, limitación y portabilidad enviando un email a{' '}
                        <a href="mailto:info@amaconsultores.eu" className="text-gold hover:underline">
                          info@amaconsultores.eu
                        </a>
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-primary-dark font-semibold py-6 font-poppins"
                      disabled={!formData.privacyAccepted || !formData.serviceTermsAccepted}
                    >
                      Enviar mensaje
                    </Button>
                  </form>

                  {/* WhatsApp Alternative */}
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-gray-400 text-sm mb-4 text-center font-lato">O contáctanos por WhatsApp</p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors font-poppins"
                    >
                      <MessageCircle size={20} />
                      Contactar por WhatsApp Colombia
                    </a>
                    <p className="text-gray-500 text-xs text-center mt-2 font-lato">
                      Gestionado por Xiomara Sánchez como primer filtro de contacto
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                {/* Warning Alert */}
                <Alert className="bg-amber-500/10 border-amber-500/50 text-amber-200">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <AlertDescription className="text-amber-100 font-lato">
                    <strong className="block mb-1 font-poppins">Respondo en un plazo de 48 horas laborables.</strong>
                    Las consultas tienen coste — al contactar te informaré de las tarifas antes de comenzar.
                  </AlertDescription>
                </Alert>

                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="font-poppins text-xl font-bold text-white">Información de contacto</h3>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:angela.morales@amaconsultores.eu"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Mail className="text-gold" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-lato">Email principal</p>
                        <p className="text-white font-medium font-lato">angela.morales@amaconsultores.eu</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@amaconsultores.eu"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Mail className="text-gold" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-lato">Email general</p>
                        <p className="text-white font-medium font-lato">info@amaconsultores.eu</p>
                      </div>
                    </a>

                    <a
                      href="tel:+34664824098"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Phone className="text-gold" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-lato">Teléfono España</p>
                        <p className="text-white font-medium font-lato">+34 664 824 098</p>
                        <p className="text-xs text-gray-500 font-lato">También WhatsApp</p>
                      </div>
                    </a>

                    <a
                      href="tel:+573017174478"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Phone className="text-gold" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-lato">Teléfono Colombia</p>
                        <p className="text-white font-medium font-lato">+57 301 717 4478</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-gold" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-lato">Ubicación</p>
                        <p className="text-white font-medium font-lato">España y Colombia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-gold" size={24} />
                    <h3 className="font-poppins text-lg font-bold text-white">Horario de atención</h3>
                  </div>
                  <p className="text-gray-400 font-lato">
                    Respondemos en horario laboral colombiano y español. 
                    Los fines de semana y festivos no hay servicio de atención.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;