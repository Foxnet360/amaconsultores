# Capability: Multi-Page Routing

## Overview

Sistema de routing multi-página con React Router para soportar la nueva estructura de navegación, reemplazando el enfoque one-page actual por URLs independientes para cada sección principal.

## Requirements

### Functional Requirements

1. **Estructura de Rutas**
   - `/` - Home (hero + calculadora + secciones principales)
   - `/servicios` - Página de servicios (personas + empresas)
   - `/servicios/regularizacion` - Regularización detalle
   - `/servicios/movilidad` - Movilidad profesional
   - `/servicios/convenios` - Convenios España-Colombia
   - `/servicios/colombia` - Trámites Colombia
   - `/servicios/empresas` - Servicios para empresas
   - `/precios` - Tabla de precios global
   - `/blog` - Blog existente (mantener)
   - `/blog/:slug` - Post individual (mantener)
   - `/equipo` - Quiénes somos
   - `/contacto` - Página de contacto
   - `/asesoria` - Agenda de asesoría (Calendly)

2. **Navegación entre Páginas**
   - Transiciones suaves entre páginas (opcional)
   - Scroll to top automático al cambiar de página
   - Breadcrumbs opcionales en páginas de segundo nivel
   - Preservar estado de menú activo según URL actual

3. **Redirecciones Legacy**
   - Mantener redirecciones existentes:
     - `/servicios/*` → `/servicios`
     - `/sobre-nosotros` → `/equipo`
   - Agregar redirección:
     - `/#regularizacion` → `/servicios/regularizacion`
     - `/#movilidad` → `/servicios/movilidad`

4. **Layout Consistente**
   - Navigation component en todas las páginas
   - Footer component en todas las páginas
   - MainLayout wrapper mantenido

### Non-Functional Requirements

- **SEO**: URLs semánticas, meta tags dinámicos por página
- **Performance**: Code splitting por ruta (lazy loading opcional)
- **Accessibility**: Skip links, landmarks ARIA consistentes

## User Stories

- Como usuario, quiero compartir un link directo a la sección de precios sin que mi contacto tenga que buscar
- Como visitante, quiero usar el botón "atrás" del navegador y que funcione correctamente
- Como SEO, quiero URLs limpias y descriptivas para mejor indexación

## Technical Notes

- Actualizar `src/App.jsx` con nuevas rutas
- Crear páginas placeholder para nuevas rutas
- Modificar Navigation.jsx para usar `<Link>` en lugar de scroll handlers
- Mantener compatibilidad con hash navigation legacy
