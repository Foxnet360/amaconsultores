# Blog CMS

## Overview
Sistema de blog para publicar artículos de actualidad migratoria con panel de administración sencillo para Ángela.

## Requirements

### REQ-001: Database Schema
**Priority**: High

Tabla `blog_posts`:
- `id`: uuid, primary key
- `title`: string
- `slug`: string (URL-friendly, único)
- `content`: text (markdown o HTML simple)
- `excerpt`: text (resumen para listado)
- `featured_image`: string (URL)
- `category`: string (España, Colombia, Proyectos Europeos, DDHH, Actualidad)
- `author_id`: uuid (referencia a authors)
- `published_at`: timestamp (nullable - permite draft)
- `is_published`: boolean
- `created_at`: timestamp
- `updated_at`: timestamp
- `meta_title`: string (SEO)
- `meta_description`: string (SEO)

Tabla `authors`:
- `id`: uuid, primary key
- `name`: string
- `photo`: string (URL, opcional)
- `bio`: text (corta)
- `is_active`: boolean

**Acceptance Criteria**:
- [ ] Tablas creadas con relaciones
- [ ] Índice en `slug`, `published_at`, `category`
- [ ] RLS configurado

### REQ-002: Blog List Page
**Priority**: High

Página `/blog`:
- Grid de artículos con imagen destacada
- Cada artículo muestra:
  - Imagen destacada
  - Título
  - Extracto (primeros 150 caracteres)
  - Autor con foto
  - Fecha de publicación
  - Categoría (badge)
- Filtro por categoría
- Ordenar por fecha (más recientes primero)
- Paginación (9 artículos por página)
- Diseño responsive

**Acceptance Criteria**:
- [ ] Página accesible en `/blog`
- [ ] Solo muestra artículos publicados
- [ ] Filtros funcionales
- [ ] Paginación funcional

### REQ-003: Blog Post Page
**Priority**: High

Página individual `/blog/:slug`:
- Imagen destacada grande (hero)
- Título
- Metadata: autor, fecha, categoría, tiempo de lectura
- Contenido del artículo (renderizado markdown/HTML)
- Botón "Compartir en LinkedIn"
- Artículos relacionados (misma categoría)
- Navegación: anterior/siguiente artículo
- SEO: meta tags dinámicos, Open Graph

**Acceptance Criteria**:
- [ ] URLs amigables con slug
- [ ] Renderizado de contenido seguro
- [ ] Botón compartir funcional
- [ ] Artículos relacionados mostrados
- [ ] 404 si artículo no existe

### REQ-004: Admin Panel - Create/Edit
**Priority**: High

Panel `/admin/blog`:
- Lista de todos los artículos (publicados y borradores)
- Botón "Nuevo artículo"
- Formulario de edición:
  - Título (input)
  - Slug (auto-generado, editable)
  - Extracto (textarea)
  - Contenido (textarea con markdown simple)
  - Imagen destacada (upload)
  - Categoría (select)
  - Autor (select)
  - SEO: meta title, meta description
  - Fecha de publicación (datetime picker, opcional)
  - Checkbox "Publicar ahora"
- Preview en tiempo real (cómo se verá)
- Guardar como borrador o publicar

**Acceptance Criteria**:
- [ ] Acceso protegido con login
- [ ] CRUD completo de artículos
- [ ] Auto-generación de slug desde título
- [ ] Upload de imágenes funcional
- [ ] Preview funcional
- [ ] Validación de campos requeridos

### REQ-005: Markdown Editor Simple
**Priority**: Medium

Editor de texto para el contenido:
- Textarea con soporte markdown básico:
  - Headers (# ## ###)
  - Negrita (**texto**)
  - Cursiva (*texto*)
  - Listas (- item)
  - Links [texto](url)
  - Imágenes ![alt](url)
- Toolbar con botones de formato
- Preview lado a lado (split view)
- No requiere WYSIWYG complejo

**Acceptance Criteria**:
- [ ] Toolbar funcional
- [ ] Markdown renderizado correctamente
- [ ] Preview en tiempo real
- [ ] Guía de markdown visible (help)

### REQ-006: Infographics Section
**Priority**: Medium

Sección destacada para infografías:
- **INFOGRAFÍA 1**: Regularización Extraordinaria 2026
  - Aviso visible de BORRADOR en rojo
  - Contenido explicativo de las dos vías
  - Link a documento oficial
  - Botón compartir LinkedIn
- **INFOGRAFÍA 2**: Reglamento (UE) 2026/463
  - Explicación de Países de Origen Seguros
  - Lista de 7 países
  - Sin aviso de borrador (norma en vigor)
  - Botón compartir LinkedIn

**Acceptance Criteria**:
- [ ] Ambas infografías visibles
- [ ] Aviso de borrador correcto
- [ ] Diseño responsive de infografías
- [ ] Links de descarga funcionales

## Implementation Notes

- Usar react-markdown para renderizar contenido
- Sanitizar HTML para prevenir XSS
- Las imágenes deben optimizarse automáticamente
- Considerar caching de artículos para performance
- Generar RSS feed en `/blog/rss.xml`
