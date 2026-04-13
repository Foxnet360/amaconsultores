# Capability: Pricing Global Page

## Overview

Página dedicada de tabla de precios global que muestra de forma clara y transparente los costos de todos los servicios de AMA Consultores, tanto para personas como para empresas.

## Requirements

### Functional Requirements

1. **Estructura de Página**
   - URL: `/precios`
   - Hero con título "Tarifas Transparentes" y subtítulo explicativo
   - Tabs o secciones: "Para Personas" | "Para Empresas"
   - Tabla comparativa por categorías
   - Notas y FAQs al final

2. **Tabla de Precios - Personas**
   - Categoría: Regularización Migratoria
     - Arraigo (cualquier tipo): Desde 500€
     - Reagrupación familiar: Desde 600€
     - Nacionalidad: Desde 600€
     - Renovaciones: Desde 300€
   - Categoría: Movilidad Profesional
     - Homologación títulos: Desde 400€
     - Reconocimiento cualificaciones: Desde 500€
     - Visado nómada: Desde 800€
   - Categoría: Colombia
     - Apostillas: 20€/doc
     - Visados Colombia: Desde 300€
     - Trámites migratorios: Desde 400€
   - Nota: "Tasas oficiales no incluidas (16,50€ - 238€ según trámite)"

3. **Tabla de Precios - Empresas**
   - Consulta diagnóstico inicial: 300€
   - Selección completa (4 fases): Desde 1.800€
   - Gestión trabajador individual: 500€
   - Proyectos europeos: Consultar
   - Consultoría ONGs: Desde 1.500€
   - Nota: "Tasas oficiales a cargo de la empresa"

4. **Diseño de Tabla**
   - Filas alternadas con fondo sutil
   - Precios destacados en color dorado
   - Iconos de información (tooltip) para detalles
   - Fila de "más información" expandible por servicio
   - CTA por categoría: "Solicitar información"

5. **FAQs de Precios**
   - ¿Los precios incluyen tasas oficiales?
   - ¿Hay pagos a plazos?
   - ¿Qué pasa si el trámite se resuelve negativamente?
   - ¿El precio varía según complejidad?

### Non-Functional Requirements

- **Responsive**: Tabla horizontal scroll en móvil o cards apiladas
- **SEO**: Schema.org PriceSpecification para rich snippets
- **Conversion**: CTAs claros, formulario de contacto rápido

## User Stories

- Como visitante, quiero ver los precios antes de contactar para evaluar si está dentro de mi presupuesto
- Como empresa, quiero entender la estructura de costos para proyectos de contratación internacional
- Como usuario, quiero saber qué está incluido en cada precio para tomar una decisión informada

## Technical Notes

- Crear nueva página: `src/pages/PricingPage.jsx`
- Usar componentes Table de shadcn/ui
- Implementar tabs con Radix UI
- Agregar ruta en App.jsx
