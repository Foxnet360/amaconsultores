# Capability: Hero Calculator Integration

## Overview

Integración destacada de la calculadora de elegibilidad migratoria en la sección Hero para captar la atención inmediata de los visitantes y proporcionar valor desde el primer momento.

## Requirements

### Functional Requirements

1. **Hero Section Redesign**
   - Dividir hero en dos áreas:
     - **Izquierda (60%)**: Mensaje principal, headline, subheadline, CTA buttons
     - **Derecha (40%)**: Calculadora de elegibilidad embebida o preview interactivo
   - Background con imagen sutil y overlay degradado navy

2. **Calculadora Preview**
   - Mostrar primer pregunta de la calculadora directamente en el hero
   - Diseño compacto pero legible (máximo 3-4 opciones visibles)
   - Botón "Comenzar evaluación" que expande o redirige a calculadora completa
   - Indicador de progreso visual ("4 preguntas · 2 minutos")

3. **Estados de la Calculadora**
   - Estado inicial: Pregunta 1 visible con opciones
   - Estado activo: Usuario interactúa, opciones se resaltan
   - Estado completo: Preview muestra "¡Evaluación completada!" con resumen rápido

4. **CTAs Alternativos**
   - Botón principal: "Evaluar mi caso gratis" (lleva a calculadora completa)
   - Botón secundario: "Ver todos los servicios" (scroll a sección servicios)
   - Botón terciario: "Soy una empresa" (redirige a página empresas)

### Non-Functional Requirements

- **Mobile**: En móviles, la calculadora aparece debajo del texto, no al lado
- **Performance**: Carga lazy de la calculadora, no bloquear render inicial
- **Conversion**: Tracking de eventos para analizar uso de la calculadora

## User Stories

- Como visitante, quiero saber rápidamente si califico para algún servicio sin navegar por todo el sitio
- Como usuario potencial, quiero una herramienta interactiva que me guíe paso a paso
- Como visitante móvil, quiero que la calculadora sea accesible sin dificultar la lectura del mensaje principal

## Technical Notes

- Reutilizar componente EligibilityCalculator.jsx existente
- Crear versión "compacta" del componente para hero
- Implementar con Framer Motion para transiciones suaves
- Integrar con analytics para tracking de conversiones
