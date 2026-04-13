# AMA Consultores - Sitio Web Corporativo

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

**Sitio web corporativo profesional** de AMA Consultores - Consultoría especializada en Migraciones Internacionales y Proyectos Sociales para personas, ONGs y entidades en España y Colombia.

> 🌐 **URL en producción:** https://amaconsultores.eu

## 🏗️ Arquitectura

**One-Page Architecture** con navegación por anclas smooth-scroll:

```
┌─────────────────────────────────────────────┐
│  #inicio        → Hero + Métricas           │
│  #regularizacion → 20 acordeones migración │
│  #movilidad     → Servicios profesionales  │
│  #convenios     → España-Colombia          │
│  #colombia      → Servicios en Colombia    │
│  #entidades     → Empresas y ONGs          │
│  #equipo        → Quiénes Somos            │
│  #asesoria      → Reservas TidyCal         │
│  #contacto      → Formulario dual          │
└─────────────────────────────────────────────┘
```

## 🚀 Tecnologías

- **Framework**: React 18 + Vite 4
- **Routing**: React Router DOM 7 (hash-based para one-page)
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet + JSON-LD + Breadcrumbs
- **Forms**: React Hook Form
- **PDF**: @react-pdf/renderer
- **CMS**: Notion API (Blog)
- **Accessibility**: WCAG 2.1 AA compliant

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui
│   ├── sections/              # Secciones one-page
│   │   ├── HeroSection.jsx
│   │   ├── RegularizacionSection.jsx
│   │   ├── MovilidadSection.jsx
│   │   ├── ConveniosSection.jsx
│   │   ├── ColombiaSection.jsx
│   │   ├── EntidadesSection.jsx
│   │   ├── EquipoSection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── AsesoriaSection.jsx
│   │   └── ContactoSection.jsx
│   ├── Navigation.jsx         # Navegación sticky
│   ├── Footer.jsx
│   ├── CookieConsentBanner.jsx
│   ├── EligibilityCalculator.jsx
│   ├── GoogleReviewsWidget.jsx
│   └── PDFDownloadButton.jsx
├── pages/
│   ├── HomePage.jsx           # One-page principal
│   ├── BlogPage.jsx
│   ├── BlogPostPage.jsx
│   ├── PoliticaPrivacidadPage.jsx
│   ├── AvisoLegalPage.jsx
│   └── PoliticaCookiesPage.jsx
├── layouts/
│   └── MainLayout.jsx
├── hooks/
│   ├── use-toast.js
│   └── useAnalytics.js        # GA4 tracking
├── lib/
│   ├── utils.js
│   └── notion.js              # Notion CMS integration
└── public/
    └── data/                  # Blog data (JSON)
```

## 🗺️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | One-page principal (9 secciones) |
| `/#regularizacion` | Regularización migratoria |
| `/#movilidad` | Movilidad profesional |
| `/#contacto` | Formulario de contacto |
| `/blog` | Blog con Notion CMS |
| `/blog/:slug` | Artículo individual |
| `/politica-de-privacidad` | GDPR - Privacidad |
| `/aviso-legal` | Aviso legal |
| `/politica-de-cookies` | Cookies |

**Legacy redirects:**
- `/servicios` → `/#regularizacion`
- `/contacto` → `/#contacto`
- `/sobre-nosotros` → `/#equipo`

## 🎨 Identidad Visual

### Colores
- **Navy**: `#0D1B3E` (Primary)
- **Gold**: `#C9A84C` (Accent)
- **Gradient**: Navy → Gold en hover states

### Tipografía
- **Headings**: Raleway Bold
- **Body**: Playfair Display / Raleway Regular
- **UI**: Raleway Medium

### Tono
Profesional pero cercano, humano, empático

## 🔄 Cambios Recientes (v2.1.0)

Ver [CHANGELOG.md](CHANGELOG.md) para detalles completos.

### Mejoras de UX/UI
- **Coherencia visual**: PricingPage unificada a tema oscuro
- **Mensajes CTA estandarizados**: Claridad sobre gratuidad vs costos
- **Índices navegables**: En páginas de servicio (Regularización, Movilidad)
- **Breadcrumbs**: Añadidos a Precios, Blog y Equipo

### Accesibilidad (WCAG 2.1 AA)
- Contraste mejorado: `text-white/60` → `text-white/80`
- Skip-to-content link para navegación por teclado
- Atributos ARIA en modales y dropdowns
- Focus trap en TidyCalModal

## 📦 Scripts

```bash
# Desarrollo
npm run dev              # Servidor en localhost:3000

# Testing
npm run test:accessibility   # Verificar accesibilidad
npm run test:links          # Verificar links
npm run test:performance    # Analizar bundle

# Build
npm run build            # Construir para producción
npm run preview          # Vista previa de producción
npm run lint             # ESLint
```

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

## 🎯 Características Principales

### 1. One-Page Architecture
- 9 secciones con smooth scroll
- Navegación sticky con detección de sección activa
- URL hash actualizada automáticamente
- Mobile-first responsive design

### 2. Regularización Migratoria
- 20 acordeones con contenido legal completo
- Sistema de checklists (★ obligatorio / ◆ opcional)
- Calculadora de elegibilidad interactiva
- CTAs a reserva de asesoría

### 3. Blog con Notion CMS
- Sincronización automática desde Notion
- Categorías: Noticias, Guías, Legal, Documentos
- Búsqueda y filtros
- SEO optimizado (meta tags, JSON-LD)

### 4. Cookie Consent GDPR
- Banner de consentimiento
- Opción de rechazar cookies no esenciales
- GA4 solo carga con consentimiento
- Expiración de consentimiento (1 año)

### 5. Páginas Legales
- Política de Privacidad (GDPR compliant)
- Aviso Legal
- Política de Cookies
- Checkboxes obligatorios en formularios

## 📚 Documentación

- **[NOTION_SETUP_GUIDE.md](NOTION_SETUP_GUIDE.md)** - Configuración del Blog
- **[NOTION_CMS_GUIDE.md](NOTION_CMS_GUIDE.md)** - Guía de uso del CMS
- **[HOSTINGER_DEPLOY_GUIDE.md](HOSTINGER_DEPLOY_GUIDE.md)** - Deployment
- **[TESTING_GUIDE.md](TESTING_GUIDE.md)** - Testing y QA
- **[GOOGLE_REVIEWS_SETUP.md](GOOGLE_REVIEWS_SETUP.md)** - Widget de reseñas

## 🚀 Deployment

### Local → Hostinger

```bash
# 1. Build de producción
npm run build

# 2. Verificar build
ls -la dist/

# 3. Subir a Hostinger (File Manager o FTP)
# - Subir todo el contenido de dist/
# - Asegurar que dist/data/ esté incluido

# 4. Verificar en producción
# https://amaconsultores.eu
```

### Variables de Entorno en Hostinger

Configurar en el panel de Hostinger (Settings → Environment Variables):
- `VITE_NOTION_TOKEN`
- `VITE_NOTION_DATABASE_ID`
- `VITE_GA4_MEASUREMENT_ID`

## 🔒 Seguridad

- ✅ HTTPS obligatorio
- ✅ Cookies seguras (SameSite, Secure)
- ✅ No PII en GA4 (IP anonimizado)
- ✅ CSP headers recomendados
- ✅ Validación de formularios (cliente y servidor)

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

## 👥 Equipo

- **Ángela Morales Aristizábal** - Fundadora y CEO
- **Rafael Reyes Pulido** - Abogado Colegiado
- **Xiomara Sánchez Arias** - Gestión Documental
- **Irene Hernández Gálvez** - Asesora Migratoria

## 📄 Licencia

© 2026 AMA Consultores. Todos los derechos reservados.

---

**Última actualización:** Marzo 2026
**Versión:** 2.0 (One-Page Architecture)
