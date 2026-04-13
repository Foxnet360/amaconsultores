import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';

// EmailJS configuration - will be set via environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID_PERSONAS = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PERSONAS || '';
const EMAILJS_TEMPLATE_ID_ENTIDADES = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ENTIDADES || '';
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || '';

const ContactoSection = () => {
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('personas');

  // Check URL parameters for auto-selection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'entidades') {
      setActiveTab('entidades');
    }
  }, []);

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Form for Personas
  const personasForm = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      pais: '',
      situacion: '',
      privacidad: false,
      comunicaciones: false
    },
    mode: 'onBlur'
  });

  // Form for Entidades
  const entidadesForm = useForm({
    defaultValues: {
      entidad: '',
      contacto: '',
      email: '',
      telefono: '',
      tipo: '',
      necesidades: '',
      privacidad: false,
      comunicaciones: false
    },
    mode: 'onBlur'
  });

  const onSubmitPersonas = async (data) => {
    if (!data.privacidad) {
      toast({
        title: "Error",
        description: "Debes aceptar la Política de Privacidad",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_PERSONAS || !EMAILJS_USER_ID) {
        // Fallback: simulate submission for development
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Mensaje enviado",
          description: "Te responderemos en un plazo de 48 horas laborables.",
        });
      } else {
        // Send email via EmailJS
        const templateParams = {
          from_name: data.nombre,
          from_email: data.email,
          phone: data.telefono,
          service: data.pais,
          message: data.situacion,
          comunicaciones: data.comunicaciones ? 'Sí' : 'No',
          to_email: 'info@amaconsultores.eu'
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_PERSONAS,
          templateParams,
          EMAILJS_USER_ID
        );

        toast({
          title: "Mensaje enviado",
          description: "Te responderemos en un plazo de 48 horas laborables.",
        });
      }

      personasForm.reset();
      
      // Track form submission
      trackEvent('formulario_enviado', {
        form_type: 'personas',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por teléfono.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitEntidades = async (data) => {
    if (!data.privacidad) {
      toast({
        title: "Error",
        description: "Debes aceptar la Política de Privacidad",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_ENTIDADES || !EMAILJS_USER_ID) {
        // Fallback: simulate submission for development
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Mensaje enviado",
          description: "Te responderemos en un plazo de 48 horas laborables.",
        });
      } else {
        // Send email via EmailJS
        const templateParams = {
          entidad: data.entidad,
          contacto: data.contacto,
          from_email: data.email,
          telefono: data.telefono,
          tipo: data.tipo,
          mensaje: data.necesidades,
          comunicaciones: data.comunicaciones ? 'Sí' : 'No',
          to_email: 'info@amaconsultores.eu'
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_ENTIDADES,
          templateParams,
          EMAILJS_USER_ID
        );

        toast({
          title: "Mensaje enviado",
          description: "Te responderemos en un plazo de 48 horas laborables.",
        });
      }

      entidadesForm.reset();
      
      // Track form submission
      trackEvent('formulario_enviado', {
        form_type: 'entidades',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por teléfono.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            ¿Hablamos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuéntame tu situación y te informaré de las tarifas antes de comenzar. 
            Estoy aquí para acompañarte en tu proceso migratorio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="text-gold-600 shrink-0 mt-0.5" size={24} />
              <div>
                <p className="text-gold-800 font-semibold mb-1">Respondo en un plazo de 48 horas laborables.</p>
                <p className="text-gold-700 text-sm">Las consultas tienen coste — al contactar te informaré de las tarifas antes de comenzar.</p>
              </div>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:info@amaconsultores.eu"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl shadow-md border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-gold-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-navy">info@amaconsultores.eu</p>
                </div>
              </a>

              <a
                href="tel:+34664824098"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl shadow-md border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-gold-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono España</p>
                  <p className="font-semibold text-navy">+34 664 824 098</p>
                </div>
              </a>

              <a
                href="tel:+573017174478"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl shadow-md border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-gold-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono Colombia</p>
                  <p className="font-semibold text-navy">+57 301 717 4478</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-gold-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-semibold text-navy">España y Colombia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-50 rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="personas">Soy una persona</TabsTrigger>
                  <TabsTrigger value="entidades">Soy una entidad</TabsTrigger>
                </TabsList>

                <TabsContent value="personas">
                  <form onSubmit={personasForm.handleSubmit(onSubmitPersonas)} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        {...personasForm.register('nombre', { 
                          required: 'El nombre es obligatorio',
                          minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
                        })}
                        placeholder="Tu nombre"
                        className="mt-2"
                      />
                      {personasForm.formState.errors.nombre && (
                        <p className="text-red-500 text-sm mt-1">{personasForm.formState.errors.nombre.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email-persona">Email *</Label>
                        <Input
                          id="email-persona"
                          type="email"
                          {...personasForm.register('email', { 
                            required: 'El email es obligatorio',
                            pattern: {
                              value: emailRegex,
                              message: 'Por favor, introduce un email válido'
                            }
                          })}
                          placeholder="tu@email.com"
                          className="mt-2"
                        />
                        {personasForm.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">{personasForm.formState.errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          {...personasForm.register('telefono', { 
                            required: 'El teléfono es obligatorio',
                            minLength: { value: 8, message: 'El teléfono debe tener al menos 8 dígitos' }
                          })}
                          placeholder="+34 600 000 000"
                          className="mt-2"
                        />
                        {personasForm.formState.errors.telefono && (
                          <p className="text-red-500 text-sm mt-1">{personasForm.formState.errors.telefono.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="pais">País de residencia actual *</Label>
                      <Input
                        id="pais"
                        {...personasForm.register('pais', { 
                          required: 'El país es obligatorio' 
                        })}
                        placeholder="Ej: Colombia, España, Venezuela..."
                        className="mt-2"
                      />
                      {personasForm.formState.errors.pais && (
                        <p className="text-red-500 text-sm mt-1">{personasForm.formState.errors.pais.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="situacion">Cuéntame brevemente tu situación *</Label>
                      <Textarea
                        id="situacion"
                        {...personasForm.register('situacion', { 
                          required: 'Por favor, describe tu situación',
                          minLength: { value: 20, message: 'Por favor, proporciona más detalles (mínimo 20 caracteres)' }
                        })}
                        placeholder="¿Qué tipo de trámite necesitas? ¿Cuál es tu situación actual?"
                        className="mt-2 min-h-[120px]"
                      />
                      {personasForm.formState.errors.situacion && (
                        <p className="text-red-500 text-sm mt-1">{personasForm.formState.errors.situacion.message}</p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Controller
                          name="privacidad"
                          control={personasForm.control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <Checkbox
                              id="privacidad-persona"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <Label htmlFor="privacidad-persona" className="text-sm font-normal">
                          Acepto la{' '}
                          <a href="/politica-de-privacidad" className="text-gold-500 hover:underline" target="_blank">
                            Política de Privacidad
                          </a>
                          {' '}*
                        </Label>
                      </div>
                      {personasForm.formState.errors.privacidad && (
                        <p className="text-red-500 text-sm">Debes aceptar la Política de Privacidad</p>
                      )}

                      <div className="flex items-start gap-3">
                        <Controller
                          name="comunicaciones"
                          control={personasForm.control}
                          render={({ field }) => (
                            <Checkbox
                              id="comunicaciones-persona"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <Label htmlFor="comunicaciones-persona" className="text-sm font-normal">
                          Deseo recibir comunicaciones comerciales sobre servicios y novedades jurídicas
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold-500 hover:bg-gold-600 text-navy font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="entidades">
                  <form onSubmit={entidadesForm.handleSubmit(onSubmitEntidades)} className="space-y-6">
                    <div>
                      <Label htmlFor="entidad">Nombre de la entidad *</Label>
                      <Input
                        id="entidad"
                        {...entidadesForm.register('entidad', { 
                          required: 'El nombre de la entidad es obligatorio' 
                        })}
                        placeholder="Nombre de empresa u ONG"
                        className="mt-2"
                      />
                      {entidadesForm.formState.errors.entidad && (
                        <p className="text-red-500 text-sm mt-1">{entidadesForm.formState.errors.entidad.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contacto">Persona de contacto *</Label>
                        <Input
                          id="contacto"
                          {...entidadesForm.register('contacto', { 
                            required: 'El nombre del contacto es obligatorio' 
                          })}
                          placeholder="Nombre del contacto"
                          className="mt-2"
                        />
                        {entidadesForm.formState.errors.contacto && (
                          <p className="text-red-500 text-sm mt-1">{entidadesForm.formState.errors.contacto.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="tipo">Tipo de entidad *</Label>
                        <select
                          id="tipo"
                          {...entidadesForm.register('tipo', { required: 'Selecciona el tipo de entidad' })}
                          className="w-full mt-2 p-2 border rounded-md"
                        >
                          <option value="">Selecciona...</option>
                          <option value="ong">ONG</option>
                          <option value="empresa">Empresa</option>
                          <option value="institucion">Institución pública</option>
                          <option value="otro">Otro</option>
                        </select>
                        {entidadesForm.formState.errors.tipo && (
                          <p className="text-red-500 text-sm mt-1">{entidadesForm.formState.errors.tipo.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email-entidad">Email corporativo *</Label>
                        <Input
                          id="email-entidad"
                          type="email"
                          {...entidadesForm.register('email', { 
                            required: 'El email es obligatorio',
                            pattern: {
                              value: emailRegex,
                              message: 'Por favor, introduce un email válido'
                            }
                          })}
                          placeholder="contacto@empresa.com"
                          className="mt-2"
                        />
                        {entidadesForm.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">{entidadesForm.formState.errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="telefono-entidad">Teléfono *</Label>
                        <Input
                          id="telefono-entidad"
                          {...entidadesForm.register('telefono', { 
                            required: 'El teléfono es obligatorio',
                            minLength: { value: 8, message: 'El teléfono debe tener al menos 8 dígitos' }
                          })}
                          placeholder="+34 600 000 000"
                          className="mt-2"
                        />
                        {entidadesForm.formState.errors.telefono && (
                          <p className="text-red-500 text-sm mt-1">{entidadesForm.formState.errors.telefono.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="necesidades">Descripción de necesidades *</Label>
                      <Textarea
                        id="necesidades"
                        {...entidadesForm.register('necesidades', { 
                          required: 'Por favor, describe tus necesidades',
                          minLength: { value: 30, message: 'Por favor, proporciona más detalles (mínimo 30 caracteres)' }
                        })}
                        placeholder="¿Qué servicio necesitan? ¿Cuál es el alcance del proyecto?"
                        className="mt-2 min-h-[120px]"
                      />
                      {entidadesForm.formState.errors.necesidades && (
                        <p className="text-red-500 text-sm mt-1">{entidadesForm.formState.errors.necesidades.message}</p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Controller
                          name="privacidad"
                          control={entidadesForm.control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <Checkbox
                              id="privacidad-entidad"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <Label htmlFor="privacidad-entidad" className="text-sm font-normal">
                          Acepto la{' '}
                          <a href="/politica-de-privacidad" className="text-gold-500 hover:underline" target="_blank">
                            Política de Privacidad
                          </a>
                          {' '}*
                        </Label>
                      </div>
                      {entidadesForm.formState.errors.privacidad && (
                        <p className="text-red-500 text-sm">Debes aceptar la Política de Privacidad</p>
                      )}

                      <div className="flex items-start gap-3">
                        <Controller
                          name="comunicaciones"
                          control={entidadesForm.control}
                          render={({ field }) => (
                            <Checkbox
                              id="comunicaciones-entidad"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )}
                        />
                        <Label htmlFor="comunicaciones-entidad" className="text-sm font-normal">
                          Deseo recibir comunicaciones comerciales sobre servicios y novedades jurídicas
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold-500 hover:bg-gold-600 text-navy font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
