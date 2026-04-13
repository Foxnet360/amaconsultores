# 🎨 GUÍA DE ESTILOS - AMA CONSULTORES

## Paleta de Colores

### Colores Principales

| Color | HEX | Tailwind | Uso |
|-------|-----|----------|-----|
| **Navy** | `#0D1B3E` | `bg-navy`, `text-navy` | Fondos principales, header, footer, textos importantes |
| **Gold** | `#C9A84C` | `bg-gold-500`, `text-gold-500` | Acentos, CTAs, highlights, bordes decorativos |
| **Gold Hover** | `#b8941f` | `bg-gold-600`, `text-gold-600` | Estados hover del gold |

### Variaciones

```
Navy Scale:
- navy-50: #1a2851 (ligero)
- navy-100: #0D1B3E (principal)
- navy/95: rgba(13, 27, 62, 0.95) (translúcido)

Gold Scale:
- gold-50: #d4b760 (claro)
- gold-100: #C9A84C (principal)
- gold-600: #b8941f (oscuro/hover)
```

### Colores de Texto

- **Sobre fondo oscuro**: `text-gray-200` (gris claro)
- **Sobre fondo oscuro (secundario)**: `text-white/80` ← **WCAG AA compliant**
- **Sobre fondo claro**: `text-navy` (#0D1B3E)
- **Texto secundario**: `text-gray-400`, `text-gray-600`
- **Enlaces**: `text-gold-500` con hover a `text-gold-600`

> **Nota**: Actualizado de `text-white/60` a `text-white/80` para cumplir WCAG AA (ratio 7:1)

### Colores de Fondo

- **Fondo principal**: `bg-navy` (#0D1B3E)
- **Fondo claro**: `bg-white` o `bg-slate-50`
- **Fondo tarjetas**: `bg-white` con sombras
- **Fondo secciones alternadas**: `bg-slate-50` (gris muy claro)

## Tipografía

### Fuentes

| Fuente | Uso | Peso Principal |
|--------|-----|----------------|
| **Raleway** | Títulos (h1-h6), navegación | 700 (Bold) |
| **Playfair Display** | Cuerpo de texto, párrafos | 400 (Regular) |

### Configuración

```css
body {
  font-family: 'Playfair Display', serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
}
```

### Jerarquía

- **h1 (Hero)**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- **h2 (Secciones)**: `text-3xl sm:text-4xl`
- **h3 (Subtítulos)**: `text-2xl`
- **h4 (Cards)**: `text-xl`

## Elementos de UI

### Botones

**Primario (CTA):**
```jsx
<Button className="bg-gold-500 hover:bg-gold-600 text-navy font-bold px-8 py-6 rounded-xl shadow-lg">
  Texto
</Button>
```

**Secundario (Outline):**
```jsx
<Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
  Texto
</Button>
```

**Con Icono:**
```jsx
<Button className="bg-gold-500 hover:bg-gold-600 text-navy font-bold flex items-center gap-2">
  Texto <ArrowRight size={20} />
</Button>
```

### Cards

**Card de Servicio:**
```jsx
<Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold-200">
  <CardContent className="p-8">
    {/* Contenido */}
  </CardContent>
</Card>
```

### Badges

**Gold:**
```jsx
<Badge className="bg-gold-500 text-navy font-semibold">
  Texto
</Badge>
```

## Espaciado

### Contenedores

- **Max-width general**: `max-w-7xl` (1280px)
- **Max-width estrecho**: `max-w-4xl` (896px)
- **Max-width cards**: `max-w-6xl` (1152px)

### Padding

- **Secciones**: `py-24` (96px)
- **Secciones móvil**: `py-16` (64px)
- **Contenedor**: `px-4 sm:px-6 lg:px-8`
- **Cards**: `p-6` o `p-8`

### Grid

- **4 columnas**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **3 columnas**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **2 columnas**: `grid-cols-1 md:grid-cols-2`

## Componentes Específicos

### Navegación

```jsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
  {/* Contenido */}
</nav>
```

**Altura**: `h-24 md:h-28` (96px / 112px)

### Hero

```jsx
<section className="relative min-h-[90vh] flex items-center justify-center bg-navy overflow-hidden">
  {/* Fondo con gradiente dorado sutil */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_70%)]" />
  </div>
</section>
```

### Secciones Alternadas

```jsx
<!-- Oscura -->
<section className="py-24 bg-navy text-white">

<!-- Clara -->
<section className="py-24 bg-white text-navy">

<!-- Gris -->
<section className="py-24 bg-slate-50">
```

## Efectos y Animaciones

### Transiciones

- **Cards hover**: `hover:shadow-xl transition-all duration-300`
- **Links**: `transition-colors` + `hover:text-gold-400`
- **Botones**: `transition-colors` + `hover:shadow-lg`

### Animaciones Framer Motion

```jsx
// Fade in desde abajo
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

// Stagger para listas
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

### Scroll

```css
html {
  scroll-behavior: smooth;
}
```

### Focus (Accesibilidad)

```css
*:focus-visible {
  outline: none;
  ring: 2px solid #C9A84C;
  ring-offset: 2px;
}
```

## Accesibilidad (A11y)

### Skip-to-Content Link

Para navegación por teclado (WCAG 2.1):

```jsx
// En MainLayout.jsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
             bg-gold text-navy-dark px-4 py-2 rounded z-50"
>
  Saltar al contenido principal
</a>

<main id="main-content">
  {children}
</main>
```

### Modal ARIA Attributes

```jsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  className="..."
>
  <h2 id="modal-title">Título del modal</h2>
  <p id="modal-description">Descripción del contenido</p>
</div>
```

### Dropdown Navigation

```jsx
<button
  aria-haspopup="true"
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  Menú
</button>
```

### Live Regions

Para actualizaciones dinámicas (calculadora, notificaciones):

```jsx
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

### Progress Bar ARIA

```jsx
<div
  role="progressbar"
  aria-valuenow={currentStep}
  aria-valuemin={1}
  aria-valuemax={totalSteps}
  aria-label="Progreso de la evaluación"
>
  {/* Visual progress indicator */}
</div>
```

## Breadcrumbs

Patrón estándar para navegación secundaria:

```jsx
import { Home, ChevronRight } from 'lucide-react';

<nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
  <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
    <Home size={16} />
    Inicio
  </Link>
  <ChevronRight size={16} />
  <Link to="/servicios" className="hover:text-gold transition-colors">
    Servicios
  </Link>
  <ChevronRight size={16} />
  <span className="text-gold font-medium">Página Actual</span>
</nav>
```

### Páginas con Breadcrumbs

- PricingPage (`/precios`)
- BlogPage (`/blog`)
- TeamPage (`/quienes-somos`)
- RegularizacionPage (`/servicios/regularizacion`)
- MovilidadPage (`/servicios/movilidad`)

## Service Page Navigation Indices

Pattern for long content pages (legal services):

```jsx
// Sticky sidebar navigation
<aside className="lg:w-64 lg:flex-shrink-0">
  <nav className="lg:sticky lg:top-24 bg-navy-800/50 rounded-xl p-6 border border-white/10">
    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
      <Scale size={20} className="text-gold-400" />
      Índice de contenidos
    </h3>
    <ul className="space-y-2">
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-white/70 hover:text-gold-400 text-sm block py-1 transition-colors"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</aside>

// Content sections with anchors
<motion.div
  id="section-id"
  className="mb-16 scroll-mt-24"  // Compensate for fixed header
>
  {/* Section content */}
</motion.div>
```

### Scroll Offset Compensation

Add `scroll-mt-24` (96px) to offset the fixed header height:

```jsx
className="scroll-mt-24"  // Adjust based on header height
```

**Librería**: Lucide React

```jsx
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  Users, 
  Award,
  Mail,
  Phone,
  MapPin,
  Quote,
  ChevronDown
} from 'lucide-react';
```

**Tamaños:**
- **Nav/Header**: `size={16}`
- **Cards**: `size={24}` o `size={28}`
- **Hero**: `size={32}` o `size={48}`
- **CTAs**: `size={20}`

## Footer

```jsx
<footer className="bg-navy border-t border-white/10 py-12">
  {/* Grid de 3 columnas */}
</footer>
```

## Imágenes

**Logo:**
- **Ruta**: `/images/Logo-transparente.png`
- **Altura nav**: `h-16 md:h-20`
- **Altura footer**: `h-20`

**Hero:**
- Usar overlay navy con transparencia
- Overlay: `bg-gradient-to-br from-navy/95 via-navy/90 to-navy/95`

## Patrones de Diseño

1. **Contraste fuerte**: Navy oscuro vs Gold brillante
2. **Elegancia profesional**: Fuentes serif + sans-serif
3. **Espaciado generoso**: Mucho aire blanco entre secciones
4. **Bordes redondeados**: `rounded-xl` (12px) o `rounded-2xl` (16px)
5. **Sombras sutiles**: `shadow-md` a `shadow-xl`
6. **Transparencias**: `bg-navy/95` para elementos flotantes

---

## Archivos de Configuración

- **Tailwind**: `tailwind.config.js`
- **CSS Custom**: `src/index.css`
- **Fuentes**: Cargadas en `index.html` vía Google Fonts
