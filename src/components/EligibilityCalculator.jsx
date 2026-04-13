import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle, AlertCircle, MapPin, Briefcase, Users, GraduationCap, Shield, Clock, Calendar } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

// Question flow definition
const questions = [
  {
    id: 'ubicacion',
    question: '¿Dónde te encuentras actualmente?',
    description: 'Tu ubicación actual determina las opciones disponibles.',
    icon: MapPin,
    options: [
      { value: 'espana', label: 'En España', description: 'Ya estás en territorio español' },
      { value: 'extranjero', label: 'Fuera de España', description: 'En otro país, quiero ir a España' }
    ]
  },
  {
    id: 'tiempo_espana',
    question: '¿Cuánto tiempo llevas en España?',
    description: 'El tiempo de estancia es crucial para determinar tus opciones.',
    icon: Clock,
    condition: (answers) => answers.ubicacion === 'espana',
    options: [
      { value: 'menos_2', label: 'Menos de 2 años', description: 'Menos de 24 meses' },
      { value: '2_a_5', label: 'Entre 2 y 5 años', description: 'De 24 meses a 5 años' },
      { value: 'mas_5', label: 'Más de 5 años', description: 'Más de 60 meses' }
    ]
  },
  {
    id: 'situacion_actual',
    question: '¿Cuál es tu situación administrativa actual?',
    description: 'Tu estado migratorio actual determina el camino a seguir.',
    icon: Shield,
    condition: (answers) => answers.ubicacion === 'espana',
    options: [
      { value: 'regular', label: 'Regular', description: 'Tengo permiso de residencia vigente' },
      { value: 'irregular', label: 'Irregular', description: 'Sin permiso o caducado' },
      { value: 'estudiante', label: 'Estudiante', description: 'Con autorización de estudios' }
    ]
  },
  {
    id: 'nacionalidad',
    question: '¿Cuál es tu nacionalidad?',
    description: 'Algunas opciones dependen de convenios internacionales.',
    icon: Users,
    options: [
      { value: 'iberoamericana', label: 'Iberoamericana', description: 'Colombia, México, Argentina, Perú, etc.' },
      { value: 'ue', label: 'Unión Europea', description: 'Cualquier país de la UE' },
      { value: 'otra', label: 'Otra', description: 'Resto de nacionalidades' }
    ]
  },
  {
    id: 'vinculo_familiar',
    question: '¿Tienes algún vínculo familiar en España?',
    description: 'Los familiares residentes pueden facilitar la regularización.',
    icon: Users,
    condition: (answers) => answers.ubicacion === 'espana',
    options: [
      { value: 'conyuge_espanol', label: 'Cónyuge/Pareja español(a)', description: 'Casado/a o pareja de hecho registrada' },
      { value: 'familiar_residente', label: 'Familiar residente legal', description: 'Padre, hijo, cónyuge con residencia' },
      { value: 'conyuge_extranjero', label: 'Cónyuge extranjero residente', description: 'Pareja con autorización de residencia' },
      { value: 'sin_vinculo', label: 'Sin vínculos familiares directos', description: 'No tengo familia en España' }
    ]
  },
  {
    id: 'trabajo',
    question: '¿Tienes oferta de trabajo o trabajas actualmente?',
    description: 'El empleo es un requisito clave para varias modalidades.',
    icon: Briefcase,
    condition: (answers) => answers.ubicacion === 'espana' && answers.situacion_actual === 'irregular',
    options: [
      { value: 'contrato_20h', label: 'Sí, contrato ≥20h/semana', description: 'Tengo contrato de trabajo activo' },
      { value: 'autonomo', label: 'Soy autónomo/a', description: 'Trabajo por cuenta propia' },
      { value: 'oferta_trabajo', label: 'Tengo oferta de trabajo', description: 'Me quieren contratar' },
      { value: 'sin_trabajo', label: 'Sin trabajo actualmente', description: 'No tengo empleo' }
    ]
  },
  {
    id: 'estudios',
    question: '¿Has estudiado en España?',
    description: 'Los estudios en España abren vías específicas de regularización.',
    icon: GraduationCap,
    condition: (answers) => answers.ubicacion === 'espana' && answers.situacion_actual === 'estudiante',
    options: [
      { value: 'terminados', label: 'Sí, ya terminé', description: 'Completé estudios superiores' },
      { value: 'en_curso', label: 'Sí, estoy estudiando', description: 'Actualmente matriculado/a' },
      { value: 'no_estudios', label: 'No he estudiado en España', description: 'No estudios superiores en España' }
    ]
  },
  {
    id: 'proteccion',
    question: '¿Te encuentras en alguna de estas situaciones especiales?',
    description: 'Algunas situaciones tienen protección especial.',
    icon: Shield,
    condition: (answers) => answers.ubicacion === 'espana',
    options: [
      { value: 'violencia_genero', label: 'Víctima de violencia de género', description: 'Situación de violencia machista' },
      { value: 'violencia_sexual', label: 'Víctima de violencia sexual', description: 'Agresión sexual' },
      { value: 'trata', label: 'Víctima de trata', description: 'Explotación laboral o sexual' },
      { value: 'asilo', label: 'Temor a persecución', description: 'Necesito protección internacional' },
      { value: 'ninguna', label: 'Ninguna de estas', description: 'No aplican situaciones anteriores' }
    ]
  },
  {
    id: 'motivo_espana',
    question: '¿Cuál es tu principal motivo para ir a España?',
    description: 'El motivo determina la mejor vía de entrada.',
    icon: MapPin,
    condition: (answers) => answers.ubicacion === 'extranjero',
    options: [
      { value: 'trabajo_calificado', label: 'Trabajo cualificado', description: 'Tengo oferta de trabajo profesional' },
      { value: 'emprender', label: 'Emprender/Negocio', description: 'Quiero crear empresa' },
      { value: 'estudiar', label: 'Estudiar', description: 'Quiero hacer estudios superiores' },
      { value: 'reunir_familia', label: 'Reunirme con familia', description: 'Mi familia está en España' },
      { value: 'jubilacion', label: 'Jubilación/Renta', description: 'Tengo medios económicos' },
      { value: 'nomada', label: 'Trabajo remoto (Nómada)', description: 'Trabajo online para empresa extranjera' }
    ]
  }
];

// Eligibility rules mapping
const eligibilityRules = [
  {
    id: 'arraigo-segunda-oportunidad',
    title: 'Arraigo de Segunda Oportunidad',
    badge: 'RD 1155/2024',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.situacion_actual === 'irregular' && 
      answers.tiempo_espana === '2_a_5' &&
      (answers.trabajo === 'sin_trabajo' || !answers.trabajo),
    description: 'Ideal para personas en situación irregular con 2+ años en España sin necesidad de contrato de trabajo.'
  },
  {
    id: 'arraigo-sociolaboral',
    title: 'Arraigo Sociolaboral',
    badge: 'RD 1155/2024',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.situacion_actual === 'irregular' && 
      answers.tiempo_espana === '2_a_5' &&
      (answers.trabajo === 'contrato_20h' || answers.trabajo === 'autonomo'),
    description: 'Para quienes tienen trabajo o son autónomos con 2+ años en España.'
  },
  {
    id: 'arraigo-social',
    title: 'Arraigo Social',
    badge: 'RD 1155/2024',
    priority: 2,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.situacion_actual === 'irregular' && 
      answers.tiempo_espana === '2_a_5' &&
      (answers.vinculo_familiar === 'familiar_residente' || answers.vinculo_familiar === 'conyuge_extranjero'),
    description: 'Para personas con vínculos familiares en España y 2+ años de estancia.'
  },
  {
    id: 'arraigo-socioformativo',
    title: 'Arraigo Socioformativo',
    badge: 'RD 1155/2024',
    priority: 2,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.situacion_actual === 'irregular' && 
      answers.tiempo_espana === '2_a_5',
    description: 'Para quienes están estudiando o quieren estudiar para mejorar su empleabilidad.'
  },
  {
    id: 'residencia-familiar-espanol',
    title: 'Residencia Familiar de Español (NUEVA 2025)',
    badge: 'Novedad 2025',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.vinculo_familiar === 'conyuge_espanol',
    description: 'Nueva figura de 5 años para familiares de españoles. Trabajo permitido desde el día 1.'
  },
  {
    id: 'reagrupacion-familiar',
    title: 'Reagrupación Familiar',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'extranjero' && 
      answers.motivo_espana === 'reunir_familia',
    description: 'Para familiares de residentes legales en España.'
  },
  {
    id: 'estudios-modificacion',
    title: 'Estudios y Modificación',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.situacion_actual === 'estudiante' &&
      answers.estudios === 'terminados',
    description: 'Para quienes han completado estudios superiores y quieren quedarse a trabajar.'
  },
  {
    id: 'cuenta-ajena',
    title: 'Cuenta Ajena',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      (answers.ubicacion === 'extranjero' && answers.motivo_espana === 'trabajo_calificado') ||
      (answers.ubicacion === 'espana' && answers.situacion_actual === 'irregular' && answers.trabajo === 'oferta_trabajo'),
    description: 'Contrato de trabajo desde España o con oferta previa.'
  },
  {
    id: 'cuenta-propia',
    title: 'Cuenta Propia',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'extranjero' && 
      answers.motivo_espana === 'emprender',
    description: 'Para emprendedores con plan de negocio viable.'
  },
  {
    id: 'no-lucrativa',
    title: 'No Lucrativa',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'extranjero' && 
      answers.motivo_espana === 'jubilacion',
    description: 'Para personas con medios económicos propios que no van a trabajar.'
  },
  {
    id: 'nomada',
    title: 'Visado de Nómada Digital',
    badge: 'Ley 14/2013',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'extranjero' && 
      answers.motivo_espana === 'nomada',
    description: 'Para trabajadores remotos de empresas extranjeras. Ley Beckham: 24% IRPF.'
  },
  {
    id: 'larga-duracion',
    title: 'Larga Duración',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.tiempo_espana === 'mas_5' &&
      answers.situacion_actual !== 'regular',
    description: 'Tras 5 años de residencia legal. Permite trabajar sin autorización previa.'
  },
  {
    id: 'nacionalidad-espanola',
    title: 'Nacionalidad Española',
    badge: 'Código Civil',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.tiempo_espana === 'mas_5' &&
      answers.nacionalidad === 'iberoamericana' &&
      answers.situacion_actual === 'regular',
    description: '2 años para colombianos y otros iberoamericanos. Requiere exámenes CCSE y DELE.'
  },
  {
    id: 'proteccion-internacional',
    title: 'Protección Internacional (Asilo)',
    badge: 'Ley 12/2009',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.proteccion === 'asilo',
    description: 'Para quienes temen persecución en su país de origen.'
  },
  {
    id: 'violencia-genero',
    title: 'Víctimas de Violencia de Género',
    badge: 'Ley Orgánica 1/2004',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.proteccion === 'violencia_genero',
    description: 'Protección especial con procedimiento preferente.'
  },
  {
    id: 'violencia-sexual',
    title: 'Víctimas de Violencia Sexual',
    badge: 'Novedad 2025',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.proteccion === 'violencia_sexual',
    description: 'Nueva figura con acompañamiento especializado.'
  },
  {
    id: 'trata',
    title: 'Víctimas de Trata',
    badge: 'Ley Orgánica 4/2000',
    priority: 1,
    condition: (answers) => 
      answers.ubicacion === 'espana' && 
      answers.proteccion === 'trata',
    description: 'Programa de protección integral para víctimas de trata.'
  }
];

const EligibilityCalculator = () => {
  const { trackEvent } = useAnalytics();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [eligibleOptions, setEligibleOptions] = useState([]);
  const [hasTrackedResults, setHasTrackedResults] = useState(false);

  // Track when results are shown
  useEffect(() => {
    if (showResults && eligibleOptions.length > 0 && !hasTrackedResults) {
      trackEvent('calculadora_usada', {
        eligible_options_count: eligibleOptions.length,
        options_list: eligibleOptions.map(opt => opt.id).join(',')
      });
      setHasTrackedResults(true);
    }
  }, [showResults, eligibleOptions, hasTrackedResults, trackEvent]);

  // Filter questions based on conditions
  const activeQuestions = questions.filter(q => !q.condition || q.condition(answers));
  // Progress based on total questions answered vs maximum possible questions
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [activeQuestions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    const matches = eligibilityRules
      .filter(rule => rule.condition(finalAnswers))
      .sort((a, b) => a.priority - b.priority);
    
    setEligibleOptions(matches);
    setShowResults(true);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEligibleOptions([]);
    setHasTrackedResults(false);
  };



  if (showResults) {
  return (
    <Card className="bg-navy-800 shadow-lg border border-white/10">
      <CardContent className="p-8" aria-live="polite" aria-atomic="true">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-400" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Resultados de tu evaluación
          </h3>
          <p className="text-white/70">
            Basándonos en tus respuestas, estas son las opciones más adecuadas para tu situación:
          </p>
        </div>

          {eligibleOptions.length > 0 ? (
            <div className="space-y-4 mb-8">
              {eligibleOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-gold-500/30 rounded-xl p-6 bg-navy-900/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gold-500 text-navy-900 text-xs font-bold px-2 py-1 rounded">
                          {option.badge}
                        </span>
                        {index === 0 && (
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Opción recomendada
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">{option.title}</h4>
                      <p className="text-white/70 text-sm">{option.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-amber-500/10 rounded-xl border border-amber-500/30 mb-8">
              <AlertCircle className="mx-auto text-amber-400 mb-4" size={48} />
              <h4 className="text-lg font-bold text-amber-200 mb-2">
                Situación compleja
              </h4>
              <p className="text-amber-200/80">
                Tu caso requiere análisis personalizado. Te recomendamos agendar una asesoría 
                para evaluar todas las opciones disponibles.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-xl p-6 border border-gold-500/30 mb-6">
            <h4 className="text-lg font-bold text-white text-center mb-2">
              ¿Quieres confirmar tu elegibilidad?
            </h4>
            <p className="text-white/90 text-center mb-2">
              <strong>Próximos pasos:</strong> Agenda una asesoría personalizada donde evaluaremos tu caso en detalle y te explicaremos todas las opciones disponibles.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <Link to="/contacto">
                <Button
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-6 text-lg"
                >
                  <Calendar className="mr-2" size={20} />
                  Agendar asesoría personalizada
                </Button>
              </Link>
              <div className="text-center">
                <p className="text-gold-400 font-semibold">
                  50€ <span className="text-white/80 text-sm">(descontable del total si continúas)</span>
                </p>
                <p className="text-white/50 text-xs mt-1">
                  <button 
                    onClick={() => alert('El costo de 50€ cubre la sesión inicial de asesoría. Si decides contratar nuestros servicios posteriormente, este monto se descuenta del costo total del proceso.')}
                    className="underline hover:text-gold-400 cursor-pointer"
                  >
                    ¿Qué significa esto?
                  </button>
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 mt-2">
                <Link 
                  to="/precios"
                  className="text-center text-gold-400 hover:text-gold-300 text-sm block underline"
                >
                  Ver tarifas completas
                </Link>
              </div>
            </div>
          </div>

          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full border-white/30 text-white/70 hover:bg-white/10"
          >
            <RotateCcw className="mr-2" size={18} />
            Volver a empezar
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = activeQuestions[currentQuestion];
  const Icon = currentQ.icon;

  return (
    <Card className="bg-navy-800 shadow-lg border border-white/10">
      <CardContent className="p-8">
        {/* Disclaimer */}
        <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-amber-200/80 text-sm text-center">
            <strong>Nota:</strong> Esta evaluación es orientativa. Los resultados pueden variar según la normativa aplicable y tu situación específica.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/80 mb-2">
            <span>Paso {currentQuestion + 1}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="text-navy-900" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{currentQ.question}</h3>
          <p className="text-white/70">{currentQ.description}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option) => (
            <Button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              variant="outline"
              className="w-full justify-start text-left h-auto py-4 px-6 border-2 border-white/20 hover:border-gold-400 hover:bg-gold-500/10 transition-all bg-transparent"
            >
              <div className="flex-1">
                <div className="font-semibold text-white">{option.label}</div>
                <div className="text-sm text-white/80">{option.description}</div>
              </div>
              <ArrowRight className="text-white/40 ml-4" size={20} />
            </Button>
          ))}
        </div>

        {/* Back Button */}
        {currentQuestion > 0 && (
          <Button
            onClick={handleBack}
            variant="ghost"
            className="mt-6 text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2" size={18} />
            Pregunta anterior
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EligibilityCalculator;
