# Accessibility Improvements Specification

## Purpose

Definir mejoras de accesibilidad que cumplan con WCAG 2.1 nivel AA, mejorando el contraste, navegación por teclado, semántica HTML y compatibilidad con lectores de pantalla.

## ADDED Requirements

### Requirement: Color contrast compliance
Todos los textos DEBEN cumplir con ratio de contraste mínimo WCAG 2.1 AA (4.5:1 para texto normal, 3:1 para texto grande).

#### Scenario: Improved text contrast on dark backgrounds
- **WHEN** se renderiza texto sobre fondos oscuros
- **THEN** `text-white/60` (60% opacidad) DEBE cambiarse a `text-white/80` (80% opacidad)
- **AND** el ratio de contraste DEBE ser al menos 4.5:1

#### Scenario: Secondary text visibility
- **WHEN** se renderiza texto secundario o descripciones
- **THEN** DEBE usar `text-white/80` en lugar de `text-white/60`
- **AND** el texto sobre fondos dorados DEBE ser oscuro `#0f172a`

### Requirement: ARIA attributes for interactive components
Todos los componentes interactivos DEBEN tener atributos ARIA apropiados.

#### Scenario: Modal accessibility
- **WHEN** se abre TidyCalModal
- **THEN** DEBE tener `aria-modal="true"`
- **AND** DEBE tener `role="dialog"`
- **AND** DEBE tener `aria-labelledby` apuntando al título
- **AND** DEBE tener `aria-describedby` apuntando a la descripción
- **AND** el foco DEBE quedar atrapado dentro del modal
- **AND** al cerrar, el foco DEBE volver al elemento que abrió el modal

#### Scenario: Dropdown navigation accessibility
- **WHEN** se abre el dropdown de servicios en navegación
- **THEN** el botón DEBE tener `aria-expanded="true"`
- **AND** DEBE tener `aria-haspopup="true"`
- **AND** el menú DEBE tener `role="menu"`
- **AND** cada item DEBE tener `role="menuitem"`

#### Scenario: Calculator progress indication
- **WHEN** un usuario usa la calculadora de elegibilidad
- **THEN** DEBE tener `aria-live="polite"` en el contenedor de resultados
- **AND** DEBE usar `aria-valuenow`, `aria-valuemin`, `aria-valuemax` en la barra de progreso
- **AND** DEBE anunciar cambios de paso a lectores de pantalla

### Requirement: Form accessibility
Los formularios DEBEN ser completamente accesibles por teclado y lectores de pantalla.

#### Scenario: Label associations
- **WHEN** se renderiza un campo de formulario
- **THEN** el `<label>` DEBE tener `htmlFor` coincidiendo con el `id` del input
- **AND** el input DEBE tener `aria-required="true"` si es obligatorio

#### Scenario: Error announcements
- **WHEN** ocurre un error de validación
- **THEN** el mensaje de error DEBE tener `role="alert"`
- **AND** el input DEBE tener `aria-describedby` apuntando al error
- **AND** el foco DEBE moverse al primer campo con error

#### Scenario: Checkbox accessibility
- **WHEN** se renderizan checkboxes de RGPD
- **THEN** DEBEN tener `aria-describedby` apuntando a texto explicativo
- **AND** el estado checked DEBE ser anunciado por lectores de pantalla

### Requirement: Keyboard navigation
El sitio DEBE ser completamente navegable por teclado.

#### Scenario: Skip to content link
- **WHEN** un usuario carga cualquier página
- **THEN** DEBE haber un link "Saltar al contenido principal" visible solo al recibir foco
- **AND** al activarlo, el foco DEBE moverse al `<main>`

#### Scenario: Focus visibility
- **WHEN** cualquier elemento interactivo recibe foco
- **THEN** DEBE mostrar outline dorado: `outline: 2px solid #d4af37`
- **AND** outline-offset DEBE ser `2px`

#### Scenario: Tab order
- **WHEN** un usuario navega con Tab
- **THEN** el orden DEBE seguir el flujo lógico de lectura (arriba-abajo, izquierda-derecha)
- **AND** elementos ocultos visualmente NO DEBEN recibir foco

### Requirement: Semantic HTML
El sitio DEBE usar HTML semántico apropiado.

#### Scenario: Page structure
- **WHEN** se renderiza cualquier página
- **THEN** DEBE tener una estructura:
  - `<header>` para navegación
  - `<main>` para contenido principal
  - `<footer>` para pie de página
  - `<nav>` para menús de navegación
  - `<section>` con `aria-labelledby` para secciones principales

#### Scenario: Heading hierarchy
- **WHEN** se renderizan títulos
- **THEN** DEBEN seguir jerarquía h1 → h2 → h3 sin saltos
- **AND** solo DEBE haber un `<h1>` por página

#### Scenario: Image accessibility
- **WHEN** se renderiza una imagen
- **THEN** DEBE tener atributo `alt` descriptivo
- **AND** imágenes decorativas DEBEN tener `alt=""`
- **AND** el logo DEBE tener alt descriptivo: "Logo AMA Consultores"

## MODIFIED Requirements

*(Ninguno - esta es una nueva capability)*

## REMOVED Requirements

*(Ninguno)*

---

## Testing Requirements

### Tests manuales obligatorios:
1. Navegación completa con teclado (Tab, Enter, Escape)
2. Uso con lector de pantalla (NVDA, JAWS, VoiceOver)
3. Validación de contraste con WebAIM Contrast Checker
4. Zoom al 200% sin pérdida de funcionalidad

### Herramientas de validación:
- axe DevTools
- WAVE Evaluation Tool
- Lighthouse Accessibility Audit
- WebAIM Contrast Checker

### Checklist pre-deploy:
- [ ] Todos los formularios navegables por teclado
- [ ] Todos los CTAs accesibles
- [ ] Contraste verificado en todo el sitio
- [ ] Atributos ARIA implementados en componentes interactivos
- [ ] Skip link funcional
- [ ] Imágenes con alt apropiado
