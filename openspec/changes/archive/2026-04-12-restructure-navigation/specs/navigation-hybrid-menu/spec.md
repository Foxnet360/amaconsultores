# Capability: Navigation Hybrid Menu

## Overview

Sistema de navegación con menú principal jerárquico y mega dropdowns para organizar los servicios de AMA Consultores de forma clara e intuitiva.

## Requirements

### Functional Requirements

1. **Menú Principal**
   - 5 items principales: Inicio, Servicios ▼, Precios, Blog, Equipo, Contacto
   - Logo a la izquierda que redirige al inicio
   - CTA button "Reservar asesoría" a la derecha

2. **Mega Dropdown - Servicios**
   - Aparece al hacer hover/click en "Servicios ▼"
   - Layout de 2 columnas:
     - **Columna Izquierda - Para Personas:**
       - Calculadora de Elegibilidad (destacado)
       - Regularización Migratoria (6 bloques)
       - Movilidad Profesional (3 bloques)
       - Convenios España-Colombia (5 bloques)
       - Colombia: Trámites Internacionales (5 bloques)
     - **Columna Derecha - Para Empresas:**
       - Servicios para Entidades y Empresas (6 bloques)
   - Cada item tiene icono, título corto y descripción breve
   - Fondo blanco con sombra, borde sutil dorado

3. **Comportamiento Responsive**
   - Desktop: Menú horizontal con dropdowns
   - Tablet: Menú hamburguesa con menú lateral deslizable
   - Móvil: Menú hamburguesa con acordeones para submenús

4. **Estados Visuales**
   - Item activo: Texto dorado con línea inferior dorada
   - Hover: Transición suave a color dorado
   - Dropdown abierto: Sombra elevada, animación fade-in

### Non-Functional Requirements

- **Performance**: Menú debe cargar sin delay, animaciones CSS optimizadas
- **Accessibility**: ARIA labels, navegación por teclado, focus visible
- **SEO**: Estructura semántica con nav, ul, li

## User Stories

- Como visitante, quiero ver claramente las categorías de servicios para encontrar rápidamente lo que busco
- Como usuario móvil, quiero poder navegar fácilmente sin que el menú ocupe toda la pantalla
- Como usuario, quiero saber en qué sección estoy mediante el estado activo del menú

## Technical Notes

- Usar Radix UI Dropdown Menu como base
- Implementar con Framer Motion para animaciones
- Tailwind CSS para estilos responsivos
- React Router para navegación
