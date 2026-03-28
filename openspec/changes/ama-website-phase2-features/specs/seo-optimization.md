# SEO Optimization

## Overview
Optimización SEO completa para mejorar visibilidad en buscadores, incluyendo meta tags dinámicos, sitemap, robots.txt y configuración multiidioma.

## Requirements

### REQ-001: Dynamic Meta Tags
**Priority**: High

Meta tags dinámicos por página usando React Helmet Async:
- **Home**:
  - Title: "AMA Consultores — Consultoría en Migraciones España y Colombia | amaconsultores.eu"
  - Description: "Consultoría especializada en migraciones internacionales y proyectos sociales. Más de 10 años de experiencia en España y Colombia."
- **Services**:
  - Title: "Servicios — AMA Consultores | Homologación de títulos, arraigo, regularización y visados Colombia"
  - Description: "Especializados en movilidad profesional, regularización migratoria, proyectos europeos y asesoría para entidades."
- **About**:
  - Title: "Quiénes Somos — AMA Consultores | Equipo especializado en migraciones"
  - Description: "Conoce al equipo de AMA Consultores: Ángela Morales, fundadora y directora, junto a Rafael Reyes y Xiomara Sánchez."
- **Contact**:
  - Title: "Contacto — AMA Consultores | Consultoría en Migraciones"
  - Description: "Contacta con AMA Consultores para consultas sobre migraciones España y Colombia. Respuesta en 48h."
- **Blog**:
  - Title dinámico por artículo: "{título} — AMA Consultores"
  - Description: extracto del artículo

**Acceptance Criteria**:
- [ ] Todos los title tags únicos y descriptivos (< 60 caracteres)
- [ ] Meta descriptions únicas (< 160 caracteres)
- [ ] Open Graph tags en todas las páginas
- [ ] Twitter Card tags
- [ ] Canonical URLs correctas

### REQ-002: Sitemap Generation
**Priority**: High

Generar `sitemap.xml` automáticamente:
- URLs de todas las páginas estáticas
- URLs dinámicas del blog (`/blog/:slug`)
- Fecha de última modificación (`lastmod`)
- Prioridad por página:
  - Home: 1.0
  - Services, About, Contact: 0.8
  - Blog posts: 0.6
- Generar durante el build (`npm run build`)
- Ubicación: `/public/sitemap.xml`

**Acceptance Criteria**:
- [ ] Sitemap generado automáticamente en build
- [ ] Incluye todas las URLs
- [ ] Formato XML válido
- [ ] URLs canónicas correctas

### REQ-003: Robots.txt
**Priority**: High

Archivo `robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://amaconsultores.eu/sitemap.xml

# Disallow admin routes
Disallow: /admin/
Disallow: /opiniones/nueva
```

**Acceptance Criteria**:
- [ ] Archivo creado en `/public/robots.txt`
- [ ] Sitemap referenciado
- [ ] Rutas admin bloqueadas

### REQ-004: Hreflang Tags
**Priority**: Medium

Tags hreflang para multiidioma:
- En `<head>` de cada página:
  ```html
  <link rel="alternate" hreflang="es" href="https://amaconsultores.eu/pagina" />
  <link rel="alternate" hreflang="en" href="https://amaconsultores.eu/en/pagina" />
  <link rel="alternate" hreflang="x-default" href="https://amaconsultores.eu/pagina" />
  ```
- x-default apunta a español (idioma principal)
- Implementar en React Helmet

**Acceptance Criteria**:
- [ ] Hreflang presentes en todas las páginas
- [ ] URLs correctas por idioma
- [ ] x-default configurado

### REQ-005: Structured Data (JSON-LD)
**Priority**: Medium

Datos estructurados para rich snippets:
- **Organization** (en todas las páginas):
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AMA Consultores",
    "url": "https://amaconsultores.eu",
    "logo": "https://amaconsultores.eu/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-664-824-098",
      "contactType": "customer service"
    }
  }
  ```
- **BlogPosting** (en artículos individuales):
  - author, datePublished, headline, image

**Acceptance Criteria**:
- [ ] JSON-LD válido en todas las páginas
- [ ] Validado con Google Rich Results Test
- [ ] Blog posts con schema correcto

### REQ-006: Image Optimization
**Priority**: Medium

Optimización de imágenes para SEO:
- Alt text descriptivo en todas las imágenes
- Dimensiones especificadas (width, height)
- Formatos modernos (WebP cuando sea posible)
- Lazy loading para imágenes debajo del fold
- Nombres de archivo descriptivos (no IMG_1234.jpg)

**Acceptance Criteria**:
- [ ] Alt text presente en todas las imágenes
- [ ] Lazy loading implementado
- [ ] Nombres de archivo optimizados

### REQ-007: Performance Metrics
**Priority**: Medium

Métricas de Core Web Vitals:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Optimizaciones:
  - Code splitting por ruta
  - Preload de fuentes críticas
  - Optimización de imágenes
  - Minimización de CSS/JS

**Acceptance Criteria**:
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pasan
- [ ] Tiempo de carga < 3s en 3G

## Implementation Notes

- Usar React Helmet Async (no Helmet regular) para SSR compatibility
- El sitemap debe regenerarse automáticamente cuando se publiquen nuevos artículos
- Validar constantemente con Google Search Console
- Considerar integración con Google Analytics 4 para tracking
- Las URLs deben ser consistentes (con o sin trailing slash)
