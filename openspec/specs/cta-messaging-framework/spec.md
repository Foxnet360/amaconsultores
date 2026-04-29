# CTA Messaging Framework Specification

## Purpose

Definir un framework consistente para los mensajes de Call-to-Action (CTA) que elimine confusiones sobre costos, clarifique el proceso de conversión y guíe al usuario de manera efectiva.

## ADDED Requirements

### Requirement: Consistent CTA messaging
Todos los CTAs relacionados con agendar/consultar DEBEN usar mensajes coherentes que clarifiquen costos y próximos pasos.

#### Scenario: Navbar CTA clarity
- **WHEN** un usuario ve el CTA en la navegación
- **THEN** el texto DEBE ser "Agendar consulta gratuita (30 min)"
- **AND** NO DEBE decir simplemente "Reservar asesoría"

#### Scenario: Homepage hero CTAs
- **WHEN** un usuario ve los CTAs en la sección Hero
- **THEN** el CTA principal DEBE ser "Soy una persona - Evaluar mi caso"
- **AND** el CTA secundario DEBE ser "Soy una empresa - Ver servicios"

#### Scenario: Final CTA section clarity
- **WHEN** un usuario llega al CTA final de la homepage
- **THEN** el texto DEBE ser "Comenzar proceso - Consulta inicial gratuita"
- **AND** DEBE incluir subtexto explicativo sobre los 30 minutos

#### Scenario: Calculator results CTA
- **WHEN** un usuario completa la calculadora de elegibilidad
- **THEN** el CTA DEBE decir "Agendar asesoría personalizada"
- **AND** DEBE mostrar "50€ (descontable del total)" claramente
- **AND** DEBE incluir tooltip o explicación de "¿Qué significa esto?"

### Requirement: Cost transparency
El sistema DEBE ser transparente sobre costos en cada etapa del funnel.

#### Scenario: Free consultation clearly marked
- **WHEN** se menciona consulta gratuita
- **THEN** DEBE especificar "30 minutos" o "primera sesión"
- **AND** DEBE explicar qué incluye (evaluación inicial, orientación general)

#### Scenario: Paid services clearly marked
- **WHEN** se mencionan servicios de pago
- **THEN** DEBE mostrar el precio claramente
- **AND** DEBE explicar qué incluye el servicio
- **AND** DEBE indicar si hay gastos adicionales (tasas, traducciones)

#### Scenario: Calculator explains the 50€ fee
- **WHEN** la calculadora muestra el CTA de 50€
- **THEN** DEBE incluir texto explicativo: "Los 50€ son un anticipo que se descuenta del coste total si decides continuar con nosotros"
- **AND** DEBE tener un link a "Ver tarifas completas" en /precios

### Requirement: Clear next steps
Después de cada CTA, el sistema DEBE guiar al usuario sobre qué esperar.

#### Scenario: After scheduling consultation
- **WHEN** un usuario agenda una consulta gratuita
- **THEN** DEBE recibir confirmación con:
  - Fecha y hora seleccionada
  - Link para videollamada o instrucciones
  - Qué documentos preparar (si aplica)
  - Tiempo estimado (30 min)
  - Política de cancelación

#### Scenario: After calculator results
- **WHEN** un usuario ve los resultados de la calculadora
- **THEN** DEBE ver:
  - Opciones de regularización disponibles
  - Breve descripción de cada opción
  - CTA claro para siguiente paso
  - Link a información detallada

## MODIFIED Requirements

*(Ninguno - esta es una nueva capability)*

## REMOVED Requirements

*(Ninguno)*

---

## Message Guidelines

### Mensajes permitidos para CTAs de agendamiento:
- ✅ "Agendar consulta gratuita (30 min)"
- ✅ "Comenzar proceso - Consulta inicial gratuita"
- ✅ "Agendar asesoría personalizada - 50€ (descontable)"
- ✅ "Reservar llamada de evaluación"

### Mensajes prohibidos (confusos):
- ❌ "Reservar asesoría" (sin contexto)
- ❌ "Agendar asesoría gratuita" (sin especificar tiempo)
- ❌ "50€" (sin explicación de descontable)
- ❌ "Gratis" y "50€" en CTAs cercanos sin explicación

### Jerarquía de mensajes:
1. **Primera interacción**: Enfocarse en "gratuito" para reducir fricción
2. **Después de valor demostrado**: Mencionar costos con contexto (calculadora)
3. **Página de precios**: Transparencia total de costos
