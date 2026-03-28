## Context

La Fase 1 del rediseño de AMA Consultores se ha completado exitosamente, incluyendo la estructura base del sitio, navegación por árbol de decisión, páginas de contacto y equipo. La Fase 2 busca agregar funcionalidades avanzadas: sistema de opiniones verificadas, blog administrable, integración LinkedIn y soporte multiidioma.

**Estado actual:**
- Sitio web estático con React + Vite
- Componentes UI con shadcn/ui
- Sin backend actualmente (contenido hardcodeado)
- SEO básico implementado

**Restricciones:**
- Hosting en Hostinger (con posibilidad de usar bases de datos MySQL)
- Sin framework de backend completo (Node.js, etc.)
- Ángela debe poder administrar el blog sin conocimientos técnicos
- Traducciones deben ser revisadas manualmente (no automáticas)

## Goals / Non-Goals

**Goals:**
- Implementar sistema de opiniones verificadas con almacenamiento persistente
- Crear blog administrable con panel simple para Ángela
- Agregar integración LinkedIn (compartir artículos)
- Implementar soporte multiidioma (ES/EN) con selector visible
- Optimizar SEO con sitemap, hreflang y meta tags dinámicos
- Publicar infografías de actualidad migratoria

**Non-Goals:**
- Sistema de autenticación completo (login de usuarios)
- Editor de texto WYSIWYG complejo (usar markdown simple)
- Traducción automática sin revisión
- Integración real-time (websockets)
- Aplicación móvil nativa
- Sistema de pagos online

## Decisions

### 1. Backend para Opiniones y Blog
**Decisión:** Usar una solución serverless/simple con Hostinger

**Opciones consideradas:**
- **A) Hostinger MySQL + PHP simple**: Integrado en el hosting actual, pero requiere crear endpoints PHP
- **B) Supabase (Firebase alternative)**: Backend-as-a-Service, fácil de integrar con React, autenticación incluida
- **C) Airtable**: Spreadsheet como base de datos, muy simple para Ángela, pero limitado

**Elegido:** Opción B (Supabase)
- **Razón:** API REST/GraphQL lista para usar, autenticación simple, almacenamiento de imágenes, buena documentación React
- **Trade-off:** Dependencia externa, pero con plan gratuito generoso

### 2. Panel de Administración del Blog
**Decisión:** Crear una ruta protegida `/admin` simple

**Opciones consideradas:**
- **A) CMS headless (Strapi, Sanity)**: Muy potente pero complejo para este caso
- **B) Markdown + Git**: Técnico, Ángela no sabe Git
- **C) Formulario simple en web**: Directo en el sitio, protegido con contraseña simple

**Elegido:** Opción C
- **Razón:** Más simple para Ángela, no requiere aprender nueva herramienta
- **Implementación:** Ruta `/admin/blog` con autenticación básica (usuario/contraseña en Supabase Auth)

### 3. Multiidioma
**Decisión:** Usar react-i18next con lazy loading

**Opciones consideradas:**
- **A) i18next + react-i18next**: Estándar de la industria, flexible
- **B) react-intl**: Más pesado, más complejo
- **C) Solución propia simple**: Riesgo de errores, no escalable

**Elegido:** Opción A
- **Razón:** Más usado, buena integración React, soporte lazy loading
- **Estructura:** Archivos JSON por idioma en `/public/locales/`

### 4. Almacenamiento de Imágenes
**Decisión:** Supabase Storage para blog y opiniones

**Opciones consideradas:**
- **A) Hostinger hosting**: Limitado, no API directa
- **B) Cloudinary**: Optimización automática, pero costo adicional
- **C) Supabase Storage**: Incluido con Supabase, integración directa

**Elegido:** Opción C
- **Razón:** Integración perfecta con backend elegido, CDN incluido

### 5. SEO Dinámico
**Decisión:** Usar React Helmet Async + generación de sitemap

**Implementación:**
- Helmet para meta tags dinámicos por página
- Script de build para generar sitemap.xml
- hreflang tags para multiidioma

## Risks / Trade-offs

**[Riesgo] Dependencia de Supabase** → Mitigación: Plan gratuito generoso, fácil migrar a alternativa (Firebase, etc.) si es necesario

**[Riesgo] Autenticación simple del panel admin** → Mitigación: Usar Supabase Auth con RLS (Row Level Security), no almacenar contraseñas en código

**[Riesgo] Ángela necesita aprender a subir imágenes** → Mitigación: Crear interfaz muy simple drag-and-drop, con instrucciones claras

**[Riesgo] Traducciones en inglés no disponibles inmediatamente** → Mitigación: Mostrar sitio en español por defecto, opción de cambiar a inglés cuando traducciones estén listas

**[Trade-off] No usar CMS headless completo** → Beneficio: Más simple para Ángela. Costo: Menos flexibilidad a largo plazo

## Migration Plan

### Fase 2A - Backend Setup (1-2 días)
1. Crear cuenta Supabase
2. Configurar tablas: `reviews`, `blog_posts`, `authors`
3. Configurar Storage buckets para imágenes
4. Configurar RLS policies

### Fase 2B - Opiniones (2-3 días)
1. Crear página `/opiniones`
2. Integrar Supabase para leer opiniones
3. Crear formulario interno (accesible por enlace privado)
4. Testing con datos de ejemplo

### Fase 2C - Blog (3-4 días)
1. Crear páginas `/blog` y `/blog/:slug`
2. Implementar panel admin `/admin/blog`
3. Integrar Supabase para CRUD de artículos
4. Subir infografías preparadas
5. Testing de flujo completo

### Fase 2D - LinkedIn (1 día)
1. Agregar botón compartir en artículos
2. Configurar Open Graph tags para preview

### Fase 2E - Multiidioma (2-3 días)
1. Instalar react-i18next
2. Crear estructura de archivos de traducción
3. Implementar selector de idioma
4. Traducir contenido estático
5. Testing de cambio de idioma

### Fase 2F - SEO (1 día)
1. Generar sitemap.xml
2. Configurar robots.txt
3. Implementar hreflang
4. Verificar meta tags

### Rollback
- Mantener Fase 1 funcionando
- Usar feature flags si es necesario
- Backup de base de datos antes de migraciones

## Open Questions

1. **¿Ángela tiene preferencia por el nombre de usuario/contraseña del panel admin?**
   - Por defecto: usuario `admin`, contraseña temporal generada

2. **¿Qué categorías exactas tendrá el blog?**
   - Propuestas: España, Colombia, Proyectos Europeos, DDHH, Actualidad

3. **¿Los autores invitados necesitan poder loguearse o Ángela publica en su nombre?**
   - Por defecto: Ángela publica en nombre de invitados (más simple)

4. **¿Se requiere búsqueda en el blog?**
   - Fase 2: No, solo categorías. Fase 3: Considerar búsqueda.

5. **¿Cuántas opiniones iniciales se tienen para cargar?**
   - Pendiente: solicitar a Ángela el listado de 20-30 opiniones
