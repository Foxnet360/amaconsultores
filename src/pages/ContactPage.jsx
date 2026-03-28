import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.pais || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
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
    setFormData({ nombre: '', email: '', pais: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getWhatsAppLink = () => {
    const message = `Hola, soy ${formData.nombre || '[nombre]'}. Vivo en ${formData.pais || '[país]'} y me gustaría consultar sobre servicios de migración.`;
    return `https://wa.me/573017174478?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <Helmet>
        <title>Contacto — AMA Consultores | Consultoría en Migraciones</title>
        <meta name="description" content="Contacta con AMA Consultores para consultas sobre migraciones España y Colombia. Respuesta en 48h." />
        <meta property="og:title" content="Contacto — AMA Consultores" />
        <meta property="og:description" content="Consultoría especializada en migraciones internacionales" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 pt-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-blue-900/20 to-slate-950 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ¿Hablamos? <span className="text-gold-400">Cuéntame tu situación</span>
              </h1>
              <p className="text-gray-400 text-lg">
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
                  <h2 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre" className="text-gray-300">Nombre</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="bg-slate-800 border-slate-700 text-white mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="bg-slate-800 border-slate-700 text-white mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="pais" className="text-gray-300">País de residencia actual</Label>
                      <Input
                        id="pais"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                        placeholder="Ej: Colombia, España, Venezuela..."
                        className="bg-slate-800 border-slate-700 text-white mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensaje" className="text-gray-300">Mensaje breve</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntame brevemente tu situación..."
                        className="bg-slate-800 border-slate-700 text-white mt-2 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold-500 hover:bg-gold-600 text-slate-900 font-semibold py-6"
                    >
                      Enviar mensaje
                    </Button>
                  </form>

                  {/* WhatsApp Alternative */}
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-gray-400 text-sm mb-4 text-center">O contáctanos por WhatsApp</p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      Contactar por WhatsApp Colombia
                    </a>
                    <p className="text-gray-500 text-xs text-center mt-2">
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
                  <AlertDescription className="text-amber-100">
                    <strong className="block mb-1">Respondo en un plazo de 48 horas laborables.</strong>
                    Las consultas tienen coste — al contactar te informaré de las tarifas antes de comenzar.
                  </AlertDescription>
                </Alert>

                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">Información de contacto</h3>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:angela.morales@amaconsultores.eu"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold-400/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <Mail className="text-gold-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email principal</p>
                        <p className="text-white font-medium">angela.morales@amaconsultores.eu</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@amaconsultores.eu"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold-400/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <Mail className="text-gold-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email general</p>
                        <p className="text-white font-medium">info@amaconsultores.eu</p>
                      </div>
                    </a>

                    <a
                      href="tel:+34664824098"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold-400/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <Phone className="text-gold-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Teléfono España</p>
                        <p className="text-white font-medium">+34 664 824 098</p>
                        <p className="text-xs text-gray-500">También WhatsApp</p>
                      </div>
                    </a>

                    <a
                      href="tel:+573017174478"
                      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-gold-400/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <Phone className="text-gold-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Teléfono Colombia</p>
                        <p className="text-white font-medium">+57 301 717 4478</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                      <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-gold-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Ubicación</p>
                        <p className="text-white font-medium">España y Colombia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-gold-400" size={24} />
                    <h3 className="text-lg font-bold text-white">Horario de atención</h3>
                  </div>
                  <p className="text-gray-400">
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
