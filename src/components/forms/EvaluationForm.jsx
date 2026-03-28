import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Loader2, CheckCircle, Upload, X } from 'lucide-react';

const EvaluationForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  
  const [formData, setFormData] = useState({
    userType: '',
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    mensaje: '',
    privacyAccepted: false,
  });

  const userTypes = [
    {
      id: 'profesional',
      title: 'Profesional Cualificado',
      description: 'Homologaciones, visados profesionales, EURES',
    },
    {
      id: 'vulnerabilidad',
      title: 'Persona en Vulnerabilidad',
      description: 'Asilo, arraigo, reagrupación familiar',
    },
    {
      id: 'institucion',
      title: 'Institución',
      description: 'Cooperación internacional, movilidad corporativa',
    },
  ];

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => file.size <= 5 * 1024 * 1024);
    
    if (validFiles.length !== selectedFiles.length) {
      toast({
        title: 'Archivo demasiado grande',
        description: 'Algunos archivos superan el límite de 5MB y no fueron agregados.',
        variant: 'destructive',
      });
    }
    
    setFiles(prev => [...prev, ...validFiles].slice(0, 5));
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      toast({
        title: 'Política de privacidad',
        description: 'Debes aceptar la política de privacidad para continuar.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      toast({
        title: '¡Formulario enviado!',
        description: 'Nos pondremos en contacto contigo en las próximas 24 horas.',
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-lg p-12 text-center"
      >
        <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          ¡Formulario Enviado!
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Gracias por confiar en AMA Consultores. Nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
        <p className="text-slate-500">
          Revisa tu correo electrónico para la confirmación.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: User Type Selection */}
        {step === 1 && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  ¿Qué perfil te describe mejor?
                </h2>
                <p className="text-slate-600">
                  Selecciona la opción que mejor se ajuste a tu situación
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {userTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`relative flex items-start p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.userType === type.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={type.id}
                      checked={formData.userType === type.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <span className="block text-lg font-semibold text-slate-900 mb-1">
                        {type.title}
                      </span>
                      <span className="block text-sm text-slate-600">
                        {type.description}
                      </span>
                    </div>
                    {formData.userType === type.id && (
                      <CheckCircle className="text-blue-600 shrink-0" size={24} />
                    )}
                  </label>
                ))}
              </div>

              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.userType}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6"
              >
                Continuar
              </Button>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Step 2: Contact Information */}
        {step === 2 && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Información de Contacto
                </h2>
                <p className="text-slate-600">
                  Completa tus datos para que podamos contactarte
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <Label htmlFor="nombre" className="text-slate-900 font-semibold">
                    Nombre completo *
                  </Label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-900 font-semibold">
                    Email *
                  </Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-slate-900 font-semibold">
                    Teléfono *
                  </Label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                    placeholder="+34 123 456 789"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="pais" className="text-slate-900 font-semibold">
                    País de origen *
                  </Label>
                  <input
                    id="pais"
                    name="pais"
                    type="text"
                    required
                    value={formData.pais}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                    placeholder="Tu país de origen"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="mensaje" className="text-slate-900 font-semibold">
                    Describe tu caso *
                  </Label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                    placeholder="Describe brevemente tu situación y qué servicio necesitas..."
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1"
                >
                  Atrás
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Step 3: Documents and Privacy */}
        {step === 3 && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Documentos (Opcional)
                </h2>
                <p className="text-slate-600">
                  Puedes adjuntar documentos relevantes (máx. 5MB por archivo)
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-slate-700 mb-4">
                  Arrastra archivos aquí o haz clic para seleccionar
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <Label
                  htmlFor="file-upload"
                  className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors"
                >
                  Seleccionar archivos
                </Label>
                <p className="text-sm text-slate-500 mt-2">
                  PDF, DOC, JPG, PNG (máx. 5MB)
                </p>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm text-slate-700 truncate">
                        {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                        aria-label={`Remove ${file.name}`}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Protección de Datos (RGPD)
                </h3>
                <p className="text-sm text-slate-700 mb-4">
                  De conformidad con el Reglamento General de Protección de Datos (RGPD), 
                  tus datos personales serán tratados por AMA Consultores exclusivamente para 
                  gestionar tu solicitud de evaluación. Tienes derecho a acceder, rectificar 
                  y suprimir tus datos en cualquier momento.
                </p>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-700">
                    Acepto la política de privacidad y el tratamiento de mis datos personales *
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="flex-1"
                >
                  Atrás
                </Button>
                <Button
                  type="submit"
                  disabled={loading || !formData.privacyAccepted}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Solicitud'
                  )}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </form>
    </motion.div>
  );
};

export default EvaluationForm;