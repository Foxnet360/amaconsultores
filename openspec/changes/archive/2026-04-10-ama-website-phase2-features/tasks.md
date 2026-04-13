## 1. Backend Setup (Supabase)

- [ ] 1.1: Crear proyecto en Supabase
- [ ] 1.2: Configurar tabla `reviews` con campos requeridos
- [ ] 1.3: Configurar tabla `blog_posts` con campos requeridos
- [ ] 1.4: Configurar tabla `authors` con campos requeridos
- [ ] 1.5: Configurar Row Level Security (RLS) en todas las tablas
- [ ] 1.6: Crear Storage bucket para imágenes de blog
- [ ] 1.7: Crear Storage bucket para fotos de opiniones
- [ ] 1.8: Configurar políticas de acceso en Storage
- [ ] 1.9: Instalar cliente Supabase en el proyecto (`@supabase/supabase-js`)
- [ ] 1.10: Configurar variables de entorno para Supabase

## 2. Verified Reviews System

- [ ] 2.1: Crear página `/opiniones` con grid de opiniones
- [ ] 2.2: Crear componente `ReviewCard.jsx` para mostrar cada opinión
- [ ] 2.3: Crear componente `StarRating.jsx` reutilizable
- [ ] 2.4: Implementar fetch de opiniones desde Supabase
- [ ] 2.5: Crear página/formulario `/opiniones/nueva` (acceso privado)
- [ ] 2.6: Implementar upload de fotos de clientes
- [ ] 2.7: Crear panel `/admin/reviews` para moderación
- [ ] 2.8: Implementar acciones de aprobar/rechazar/editar opiniones
- [ ] 2.9: Agregar filtros por tipo de servicio en página pública
- [ ] 2.10: Calcular y mostrar promedio de valoraciones

## 3. Blog CMS

- [ ] 3.1: Crear página `/blog` con listado de artículos
- [ ] 3.2: Crear componente `BlogCard.jsx` para preview de artículos
- [ ] 3.3: Crear página `/blog/:slug` para artículo individual
- [ ] 3.4: Implementar renderizado de markdown en artículos
- [ ] 3.5: Crear panel `/admin/blog` para gestión de artículos
- [ ] 3.6: Implementar CRUD completo de artículos
- [ ] 3.7: Crear editor markdown simple con toolbar
- [ ] 3.8: Implementar upload de imágenes destacadas
- [ ] 3.9: Crear sistema de autores con fotos y bios
- [ ] 3.10: Agregar filtros por categoría en blog
- [ ] 3.11: Implementar paginación de artículos
- [ ] 3.12: Crear sección de infografías destacadas
- [ ] 3.13: Subir infografías preparadas (Regularización 2026, Reglamento UE)
- [ ] 3.14: Generar RSS feed en `/blog/rss.xml`

## 4. LinkedIn Integration

- [ ] 4.1: Crear componente `ShareLinkedIn.jsx`
- [ ] 4.2: Agregar botón compartir en página de artículos
- [ ] 4.3: Configurar Open Graph meta tags dinámicos
- [ ] 4.4: Validar previews con LinkedIn Post Inspector
- [ ] 4.5: Agregar link a página de LinkedIn en footer
- [ ] 4.6: Implementar opción de auto-post (API o Zapier) - Opcional

## 5. Multilingual Support

- [ ] 5.1: Instalar dependencias (`react-i18next`, `i18next`, `i18next-http-backend`)
- [ ] 5.2: Crear archivo de configuración `src/i18n.js`
- [ ] 5.3: Crear archivo `public/locales/es/translation.json`
- [ ] 5.4: Extraer todos los textos a archivos de traducción ES
- [ ] 5.5: Crear archivo `public/locales/en/translation.json` (traducciones pendientes)
- [ ] 5.6: Implementar `useTranslation` en componentes
- [ ] 5.7: Crear selector de idioma en Navigation
- [ ] 5.8: Implementar persistencia de preferencia en localStorage
- [ ] 5.9: Configurar rutas con prefijo `/en/` para inglés
- [ ] 5.10: Implementar redirección automática según preferencia

## 6. SEO Optimization

- [ ] 6.1: Instalar `react-helmet-async`
- [ ] 6.2: Crear componente `SEO.jsx` reutilizable
- [ ] 6.3: Configurar meta tags dinámicos en HomePage
- [ ] 6.4: Configurar meta tags dinámicos en ServicesPage
- [ ] 6.5: Configurar meta tags dinámicos en AboutPage
- [ ] 6.6: Configurar meta tags dinámicos en ContactPage
- [ ] 6.7: Configurar meta tags dinámicos en BlogPostPage
- [ ] 6.8: Crear script para generar `sitemap.xml` en build
- [ ] 6.9: Crear archivo `robots.txt`
- [ ] 6.10: Implementar hreflang tags en todas las páginas
- [ ] 6.11: Agregar JSON-LD structured data (Organization)
- [ ] 6.12: Agregar JSON-LD structured data (BlogPosting)
- [ ] 6.13: Optimizar alt text en todas las imágenes
- [ ] 6.14: Implementar lazy loading de imágenes

## 7. Authentication & Admin

- [ ] 7.1: Configurar Supabase Auth
- [ ] 7.2: Crear página de login `/admin/login`
- [ ] 7.3: Implementar protección de rutas `/admin/*`
- [ ] 7.4: Crear contexto de autenticación
- [ ] 7.5: Implementar logout
- [ ] 7.6: Crear dashboard admin simple

## 8. Testing & QA

- [ ] 8.1: Testing de sistema de opiniones (CRUD completo)
- [ ] 8.2: Testing de blog (crear, editar, publicar)
- [ ] 8.3: Testing de upload de imágenes
- [ ] 8.4: Testing de autenticación (login/logout)
- [ ] 8.5: Testing de multiidioma (cambio ES/EN)
- [ ] 8.6: Testing responsive de nuevas páginas
- [ ] 8.7: Validar SEO con Lighthouse (>90 score)
- [ ] 8.8: Validar Open Graph con LinkedIn Inspector
- [ ] 8.9: Testing de rendimiento (Core Web Vitals)
- [ ] 8.10: Revisión de accesibilidad (a11y)

## 9. Documentation & Deployment

- [ ] 9.1: Actualizar README.md con instrucciones de Fase 2
- [ ] 9.2: Documentar proceso de publicación en blog
- [ ] 9.3: Documentar proceso de moderación de opiniones
- [ ] 9.4: Crear guía para Ángela (PDF o Google Docs)
- [ ] 9.5: Verificar build de producción (`npm run build`)
- [ ] 9.6: Configurar variables de entorno en producción
- [ ] 9.7: Deploy a Hostinger
- [ ] 9.8: Verificar funcionamiento en producción
- [ ] 9.9: Configurar Google Search Console
- [ ] 9.10: Configurar Google Analytics 4

## 10. Content & Data Migration

- [ ] 10.1: Solicitar opiniones de clientes a Ángela (20-30)
- [ ] 10.2: Cargar opiniones iniciales en Supabase
- [ ] 10.3: Solicitar traducciones en inglés (textos a traducir)
- [ ] 10.4: Importar traducciones revisadas
- [ ] 10.5: Crear 3-5 artículos de blog iniciales
- [ ] 10.6: Configurar cuenta de LinkedIn de AMA Consultores
- [ ] 10.7: Obtener fotos reales del equipo (Ángela, Rafael, Xiomara)
- [ ] 10.8: Reemplazar placeholders con fotos reales
