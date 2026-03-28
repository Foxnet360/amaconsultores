## Why

Tras completar el rediseño base de la web (Fase 1), es necesario implementar funcionalidades adicionales que fortalezcan la presencia digital de AMA Consultores: un sistema de opiniones verificadas para generar confianza, un blog de actualidad migratoria para posicionamiento de experta, integración con LinkedIn para difusión de contenido, y soporte multiidioma para atender tanto a clientes hispanohablantes como a instituciones europeas.

## What Changes

### Sistema de Opiniones Verificadas
- **Nueva página** `/opiniones` para mostrar reseñas de clientes
- **Formulario interno** para recoger opiniones (enviado por enlace privado a clientes)
- **Visualización pública** con nombre del cliente, tipo de procedimiento, valoración 1-5 estrellas
- Indicador de "opiniones verificadas de clientes reales" (no Google Reviews)
- Diseño de tarjetas limpias con foto opcional del cliente

### Blog / Actualidad Migratoria
- **Nueva página** `/blog` con listado de artículos
- **Panel de administración sencillo** para que Ángela publique sin conocimientos técnicos
- **Sistema de autores** con perfil propio (nombre, foto, bio)
- Cada artículo: título, autor, fecha, categoría, imagen destacada, texto
- **Botón compartir en LinkedIn** integrado
- **RSS feed** para distribución futura
- **Infografías** ya preparadas (Regularización Extraordinaria 2026, Reglamento UE 2026/463)

### Integración LinkedIn
- Botón de compartir en cada artículo del blog
- Opción de conectar con LinkedIn para publicación automática/semi-automática
- Integración con Zapier/Make si es necesario

### SEO Básico Multiidioma
- Meta títulos y descripciones configurados para todas las páginas
- URLs amigables con prefijo de idioma: `/en/`, `/it/`
- **Idiomas**: Español (principal), Inglés (revisión manual), Italiano (fase 3)
- Selector de idioma en el menú de navegación (ES / EN)

## Capabilities

### New Capabilities
- `verified-reviews-system`: Sistema de opiniones verificadas con formulario interno y visualización pública
- `blog-cms`: Blog con panel de administración, sistema de autores y categorías
- `linkedin-integration`: Botón compartir y opción de publicación automática en LinkedIn
- `multilingual-support`: Soporte multiidioma con selector y contenido en español e inglés
- `seo-optimization`: Meta tags, Open Graph, URLs amigables y sitemap

### Modified Capabilities
- (ninguna - no hay capabilities existentes que modifiquen requisitos, solo nuevas funcionalidades)

## Impact

### Código Afectado
- `src/pages/ReviewsPage.jsx` - Nueva página de opiniones
- `src/pages/BlogPage.jsx` - Nueva página de blog
- `src/pages/BlogPostPage.jsx` - Página individual de artículo
- `src/components/reviews/` - Componentes del sistema de opiniones
- `src/components/blog/` - Componentes del blog
- `src/components/admin/` - Panel de administración del blog
- `src/components/Navigation.jsx` - Selector de idioma
- `src/App.jsx` - Nuevas rutas
- Nuevos archivos de traducción: `src/locales/es.json`, `src/locales/en.json`

### Dependencias
- **Backend**: Necesario para almacenar opiniones y artículos del blog (puede usar Hostinger DB, Supabase, o similar)
- **Imágenes**: Fotos reales del equipo para reemplazar placeholders
- **Traducciones**: Textos en inglés proporcionados por la consultora (no usar traducción automática sin revisión)
- **LinkedIn**: Cuenta de LinkedIn de AMA Consultores configurada

### SEO
- Configurar meta tags dinámicos en todas las páginas
- Generar sitemap.xml
- Configurar robots.txt
- Implementar hreflang para multiidioma

### Consideraciones
- **Las traducciones automáticas NO deben publicarse sin revisión previa**
- El blog debe ser administrable por Ángela sin conocimientos técnicos
- Las opiniones deben ser de clientes reales verificados (no reviews de Google)
- La integración LinkedIn puede ser manual inicialmente, automatizar en fase posterior
