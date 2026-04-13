## Why

El cliente no está satisfecho con el diseño one-page actual del sitio web de AMA Consultores. La navegación por scroll con anchors no permite una organización clara de los servicios ni facilita a los usuarios encontrar información específica rápidamente. Se necesita una estructura de navegación por menús que organice las 10 secciones principales de forma jerárquica e intuitiva, diferenciando claramente entre servicios para personas y servicios para empresas.

## What Changes

- **Reestructurar la navegación principal** de one-page con anchors a un sistema de menús jerárquicos con dropdowns
- **Crear estructura de menú híbrida** con 5 items principales: Inicio, Servicios ▼, Precios, Blog, Equipo, Contacto
- **Implementar mega dropdown para Servicios** con dos columnas: "Para Personas" y "Para Empresas"
- **Organizar 10 secciones de contenido** bajo la nueva estructura de navegación
- **Actualizar Routing** de React Router para soportar navegación multi-página
- **BREAKING**: Cambiar comportamiento de navegación actual de scroll-to-section a navigation-to-page/section
- **Mantener calculadora de elegibilidad** como herramienta destacada accesible desde múltiples puntos
- **Integrar tabla de precios global** como página independiente accesible desde menú principal

## Capabilities

### New Capabilities
- `navigation-hybrid-menu`: Sistema de navegación con menú principal jerárquico y mega dropdowns
- `hero-calculator-integration`: Integración de calculadora de elegibilidad en sección hero destacada
- `pricing-global-page`: Página de tabla de precios global con todos los servicios
- `multi-page-routing`: Sistema de routing multi-página con React Router

### Modified Capabilities
- *None* - This is a structural/UX change that doesn't modify existing spec requirements

## Impact

- **Navigation.jsx**: Rediseño completo del componente de navegación
- **App.jsx**: Actualización de rutas para soportar estructura multi-página
- **HomePage.jsx**: Reestructuración de secciones para integrar con nueva navegación
- **New Pages**: Creación de páginas individuales para servicios agrupados
- **CSS/Tailwind**: Ajustes de estilos para soportar mega dropdowns y nuevos layouts
- **SEO**: Mejora en estructura de URLs para mejor indexación
