# AMA Consultores - Sitio Web Corporativo

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

**Sitio web corporativo profesional** de AMA Consultores - Consultoría especializada en Migraciones Internacionales y Proyectos Sociales para personas, ONGs y entidades en España y Colombia.

> 🌐 **URL en producción:** https://amaconsultores.eu
> 
> 🛠️ **Desarrollado por:** [Baconhacks.com](https://baconhacks.com)

---

## 🎯 Propósito

AMA Consultores es una firma de consultoría líder en movilidad internacional entre España y Colombia. Este sitio web tiene como objetivo:

- **Informar** sobre trámites de regularización migratoria, movilidad profesional y convenios internacionales
- **Captar clientes** mediante formularios de contacto y reserva de asesorías
- **Demostrar autoridad** con contenido legal detallado, equipo profesional y artículos de blog
- **Facilitar la conversión** con calculadoras de elegibilidad, checklists descargables y CTAs estratégicos
- **Cumplir con GDPR** mediante páginas legales completas y gestión de cookies

---

## 🏗️ Arquitectura

**One-Page Architecture** con navegación por anclas smooth-scroll:

```
┌─────────────────────────────────────────────┐
│  #inicio        → Hero + Métricas           │
│  #regularizacion → Regularización migratoria│
│  #movilidad     → Servicios profesionales   │
│  #convenios     → España-Colombia           │
│  #colombia      → Servicios en Colombia     │
│  #entidades     → Empresas y ONGs           │
│  #equipo        → Quiénes Somos             │
│  #asesoria      → Reservas TidyCal          │
│  #contacto      → Formulario dual           │
└─────────────────────────────────────────────┘
```

**Rutas adicionales:**
- `/blog` - Blog con Notion CMS
- `/blog/:slug` - Artículo individual
- `/politica-de-privacidad` - GDPR
- `/aviso-legal` - Aviso legal
- `/politica-de-cookies` - Política de cookies

---

## 🚀 Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Framework** | React | 18 |
| **Build Tool** | Vite | 4 |
| **Routing** | React Router | 7 (hash-based) |
| **Styling** | Tailwind CSS | 3.4 |
| **UI Components** | shadcn/ui + Radix UI | - |
| **Animations** | Framer Motion | - |
| **Icons** | Lucide React | - |
| **Forms** | React Hook Form | - |
| **PDF Generation** | @react-pdf/renderer | - |
| **CMS** | Notion API | - |
| **SEO** | React Helmet + JSON-LD | - |
| **Analytics** | Google Analytics 4 | - |
| **Booking** | TidyCal | - |
| **Reviews** | Elfsight (Google Reviews) | - |

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui (Button, Card, Accordion...)
│   ├── sections/              # Secciones del one-page
│   │   ├── HeroSection.jsx
│   │   ├── RegularizacionSection.jsx
│   │   ├── MovilidadSection.jsx
│   │   ├── ConveniosSection.jsx
│   │   ├── ColombiaSection.jsx
│   │   ├── EntidadesSection.jsx
│   │   ├── EquipoSection.jsx
│   │   ├── AsesoriaSection.jsx
│   │   └── ContactoSection.jsx
│   ├── forms/                 # Componentes de formularios
│   ├── legal/                 # Componentes de páginas legales
│   ├── about/                 # Componentes de sección equipo
│   ├── services/              # Componentes de servicios
│   ├── Navigation.jsx         # Navegación sticky
│   ├── Footer.jsx
│   ├── CookieConsentBanner.jsx
│   ├── EligibilityCalculator.jsx
│   ├── GoogleReviewsWidget.jsx
│   ├── PDFDownloadButton.jsx
│   ├── ArticleCTA.jsx         # CTA dentro de artículos
│   ├── ArticleNav.jsx         # Navegación entre artículos
│   ├── ReadingProgress.jsx    # Barra de progreso
│   ├── ShareButtons.jsx       # Compartir en redes
│   └── TableOfContents.jsx    # Índice de contenido
├── pages/
│   ├── HomePage.jsx           # One-page principal
│   ├── BlogPage.jsx
│   ├── BlogPostPage.jsx
│   ├── AgendaPage.jsx
│   ├── PricingPage.jsx
│   ├── ContactPage.jsx
│   ├── PoliticaPrivacidadPage.jsx
│   ├── AvisoLegalPage.jsx
│   └── PoliticaCookiesPage.jsx
├── layouts/
│   └── MainLayout.jsx
├── hooks/
│   ├── use-toast.js
│   └── useAnalytics.js        # GA4 tracking
├── lib/
│   ├── utils.js               # Utilidades (cn, etc.)
│   └── notion.js              # Integración Notion CMS
├── data/
│   └── team-profiles.js       # Perfiles del equipo
└── public/
    ├── data/                  # Blog data (JSON generado desde Notion)
    └── team/                  # Fotos del equipo
```

---

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev                    # Servidor en localhost:3000

# Build
npm run build                  # Build de producción (vite only)
npm run build:full             # Build completo: Notion fetch → generate-llms → vite build
npm run preview                # Vista previa de producción en :3000

# Testing y QA
npm run lint                   # ESLint (modo quiet - solo errores)
npm run lint:warn              # ESLint con warnings
npm run test:accessibility     # Verificar accesibilidad
npm run test:links             # Verificar links rotos
npm run test:performance       # Analizar bundle size

# CMS
npm run fetch-notion           # Sincronizar blog desde Notion CMS
```

---

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env`:

```env
# Notion CMS (Blog)
VITE_NOTION_TOKEN=ntn_xxxxxxxxxxxxxxxx
VITE_NOTION_DATABASE_ID=xxxxxxxxxxxxxxxx

# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# EmailJS (Formularios)
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID_PERSONAS=template_xxx
VITE_EMAILJS_TEMPLATE_ID_ENTIDADES=template_xxx
VITE_EMAILJS_USER_ID=user_xxx
```

### Integraciones Externas

| Servicio | Uso | Estado |
|----------|-----|--------|
| **TidyCal** | Reservas de asesoría | ✅ Configurado |
| **Notion** | CMS del Blog | ✅ Configurado |
| **Elfsight** | Google Reviews | ✅ Configurado |
| **GA4** | Analytics | ⚠️ Necesita Measurement ID |
| **EmailJS** | Formularios | ⚠️ Necesita configuración |

---

## 🎯 Características Principales

### 1. One-Page Architecture
- 9 secciones con smooth scroll
- Navegación sticky con detección de sección activa
- URL hash actualizada automáticamente
- Mobile-first responsive design
- Redirects legacy (`/servicios`, `/contacto`, `/sobre-nosotros`)

### 2. Regularización Migratoria
- Acordeones con contenido legal completo
- Sistema de checklists (★ obligatorio / ◆ opcional)
- Calculadora de elegibilidad interactiva
- CTAs a reserva de asesoría
- Descarga de checklist en PDF

### 3. Blog con Notion CMS
- Sincronización automática desde Notion (`npm run fetch-notion`)
- Renderizado avanzado de bloques Notion (texto, imágenes, listas, quotes, bookmarks)
- Tabla de contenidos automática
- Barra de progreso de lectura
- Navegación entre artículos (anterior/siguiente)
- Botones de compartir en redes sociales
- CTA contextual en artículos
- Categorías: Noticias, Guías, Legal, Documentos
- Búsqueda y filtros
- SEO optimizado (meta tags dinámicos, JSON-LD)

### 4. Reservas con TidyCal
- Widget embebido de calendario
- Modal de reserva
- Múltiples tipos de servicio

### 5. Cookie Consent GDPR
- Banner de consentimiento
- Opción de rechazar cookies no esenciales
- GA4 solo carga con consentimiento
- Expiración de consentimiento (1 año)

### 6. Páginas Legales
- Política de Privacidad (GDPR compliant)
- Aviso Legal
- Política de Cookies
- Checkboxes obligatorios en formularios

### 7. Accesibilidad (WCAG 2.1 AA)
- Skip-to-content link
- Atributos ARIA en modales y dropdowns
- Focus trap en modales
- Contraste mejorado
- Navegación por teclado completa

---

## 🎨 Identidad Visual

### Colores
- **Navy**: `#0D1B3E` (Primary)
- **Gold**: `#C9A84C` / `#d4af37` (Accent)
- **Gradient**: Navy → Gold en hover states

### Tipografía
- **Headings**: Raleway Bold
- **Body**: Playfair Display / Raleway Regular
- **UI**: Raleway Medium

### Tono
Profesional pero cercano, humano, empático

---

## 🚀 Deployment

### Build Local + Subir a Hostinger

```bash
# 1. Fetch datos de Notion
npm run fetch-notion

# 2. Build de producción
npm run build

# 3. Verificar build
ls -la dist/

# 4. Subir a Hostinger (File Manager o FTP)
# - Subir todo el contenido de dist/
# - Asegurar que dist/data/ esté incluido

# 5. Verificar en producción
# https://amaconsultores.eu
```

### Variables de Entorno en Hostinger

Configurar en el panel de Hostinger:
- `VITE_NOTION_TOKEN`
- `VITE_NOTION_DATABASE_ID`
- `VITE_GA4_MEASUREMENT_ID`

---

## 📚 Documentación

- **[NOTION_SETUP_GUIDE.md](NOTION_SETUP_GUIDE.md)** - Configuración del Blog
- **[NOTION_CMS_GUIDE.md](NOTION_CMS_GUIDE.md)** - Guía de uso del CMS
- **[TESTING_GUIDE.md](TESTING_GUIDE.md)** - Testing y QA
- **[GOOGLE_REVIEWS_SETUP.md](GOOGLE_REVIEWS_SETUP.md)** - Widget de reseñas

---

## 👥 Equipo AMA Consultores

- **Ángela Morales Aristizábal** - Fundadora y CEO
- **Rafael Reyes Pulido** - Abogado Colegiado
- **Xiomara Sánchez Arias** - Gestión Documental
- **Irene Hernández Gálvez** - Asesora Migratoria

---

## 🛠️ Desarrollo

**Desarrollado por:** [Baconhacks.com](https://baconhacks.com)

Este sitio fue diseñado y construido por el equipo de Baconhacks, especialistas en desarrollo web profesional y soluciones digitales para empresas.

---

## 🔒 Seguridad

- ✅ HTTPS obligatorio
- ✅ Cookies seguras (SameSite, Secure)
- ✅ No PII en GA4 (IP anonimizado)
- ✅ CSP headers recomendados
- ✅ Validación de formularios (cliente y servidor)

---

## 📊 Performance

**Objetivos Core Web Vitals:**
- FCP: < 1.8s
- LCP: < 2.5s
- CLS: < 0.1

**Optimizaciones:**
- Lazy loading de imágenes
- Code splitting automático (Vite)
- Font optimization (Google Fonts display=swap)
- Compression gzip/brotli

---

## 📄 Licencia

© 2026 AMA Consultores. Todos los derechos reservados.

---

**Desarrollado por:** [Baconhacks.com](https://baconhacks.com)  
**Última actualización:** Abril 2026  
**Versión:** 2.1
