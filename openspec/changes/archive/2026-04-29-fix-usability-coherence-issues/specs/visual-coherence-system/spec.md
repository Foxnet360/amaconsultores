# Visual Coherence System Specification

## Purpose

Define un sistema visual unificado que garantice consistencia de colores, tipografía, espaciado y componentes en todo el sitio web de AMA Consultores.

## ADDED Requirements

### Requirement: Color palette consistency
Todas las páginas del sitio DEBEN utilizar la misma paleta de colores definida en el sistema de diseño.

#### Scenario: Pricing page uses dark theme
- **WHEN** un usuario navega a la página de precios
- **THEN** el fondo DEBE ser `#0f172a` (oscuro)
- **AND** las cards DEBEN tener fondo oscuro `#0f2744`/60
- **AND** NO DEBE haber fondos claros como `gray-50` o `slate-50`

#### Scenario: Legal pages maintain visual consistency
- **WHEN** un usuario navega a páginas legales (política de privacidad, aviso legal)
- **THEN** el sistema DEBE mantener coherencia visual con el resto del sitio
- **AND** DEBE haber una transición clara si se mantiene fondo claro

### Requirement: Typography system
El sistema DEBE utilizar tipografías consistentes en todo el sitio.

#### Scenario: Headers use Poppins
- **WHEN** se renderiza cualquier título (h1-h6)
- **THEN** DEBE usar la fuente `Poppins` con `font-weight: 600`

#### Scenario: Body text uses Lato
- **WHEN** se renderiza texto de cuerpo
- **THEN** DEBE usar la fuente `Lato` con `font-weight: 400`
- **AND** `line-height` DEBE ser `1.6`

### Requirement: Component consistency
Los componentes reutilizables DEBEN mantener estilos consistentes.

#### Scenario: Cards maintain dark theme
- **WHEN** se renderiza cualquier card en el sitio
- **THEN** DEBE tener fondo `#0f2744` con 60% opacidad
- **AND** DEBE tener borde `border-white/10`
- **AND** DEBE tener `backdrop-blur-sm`
- **AND** el hover DEBE cambiar a `border-gold/30`

#### Scenario: Buttons use gold accent
- **WHEN** se renderiza cualquier botón primario
- **THEN** DEBE usar color dorado `#d4af37` (gold)
- **AND** el texto DEBE ser oscuro sobre fondo dorado

## MODIFIED Requirements

*(Ninguno - esta es una nueva capability)*

## REMOVED Requirements

### Requirement: Navy color usage
**Reason**: El color `text-navy` no forma parte del sistema de diseño unificado
**Migration**: Reemplazar todas las instancias de `text-navy` por `text-white` o colores del tema oscuro

---

## Design Tokens

```css
/* Colors */
--color-background: #0f172a;
--color-background-elevated: #0f2744;
--color-primary: #1e3a8a;
--color-accent: #d4af37; /* gold */
--color-text-primary: #ffffff;
--color-text-secondary: rgba(255, 255, 255, 0.8);
--color-text-muted: rgba(255, 255, 255, 0.6);
--color-border: rgba(255, 255, 255, 0.1);
--color-border-hover: rgba(212, 175, 55, 0.3);

/* Typography */
--font-heading: 'Poppins', sans-serif;
--font-body: 'Lato', sans-serif;
--font-weight-heading: 600;
--font-weight-body: 400;
--line-height-body: 1.6;

/* Spacing */
--spacing-section: 5rem; /* py-20 */
--spacing-container: 1rem; /* px-4 */
```
