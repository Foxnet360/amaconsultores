# Homepage Redesign

## Overview
Rediseño completo de la página de inicio para transmitir un tono humano y cercano, eliminando referencias a "evaluación gratuita".

## Requirements

### REQ-001: Hero Section Update
**Priority**: High

El hero debe mostrar:
- **Título**: "Seguridad y acompañamiento en tu movilidad internacional"
- **Subtítulo**: "Consultoría especializada en Migraciones Internacionales y Proyectos Sociales para personas, ONGs y entidades en España y Colombia."
- **Dos botones CTAs**:
  - [🙋 Soy una persona] → /servicios?type=personas
  - [🏢 Soy una entidad] → /servicios?type=entidades

**Acceptance Criteria**:
- [ ] Título y subtítulo actualizados según especificación
- [ ] Botón "Evaluación Gratuita" eliminado
- [ ] Dos nuevos botones visibles y funcionales
- [ ] Botones redirigen correctamente con parámetros de URL

### REQ-002: Presentation Block
**Priority**: High

Agregar bloque de presentación personal con el texto:

> "Llevo más de 10 años trabajando en el cruce entre el derecho, los derechos humanos y la migración — no porque sea un nicho interesante, sino porque detrás de cada expediente hay una persona que merece ser tratada con dignidad. Trabajo de forma personalizada, con pocas personas a la vez, y cobro siempre por mi trabajo porque la calidad del acompañamiento lo vale."

**Acceptance Criteria**:
- [ ] Texto visible en la home
- [ ] Estilo consistente con el resto de la web
- [ ] Atribución a Ángela Morales

### REQ-003: Service Cards Update
**Priority**: High

Actualizar tarjetas de servicios a 4 categorías específicas:

1. **🌍 Movilidad profesional a España**
   - Link: /servicios/personas/espana#movilidad-profesional
   
2. **📋 Regularización migratoria en España**
   - Link: /servicios/personas/espana#regularizacion
   
3. **🇨🇴 Vivir en Colombia — para extranjeros**
   - Link: /servicios/personas/colombia#vivir-colombia
   
4. **🏢 Proyectos sociales y cooperación — para entidades**
   - Link: /servicios/entidades#proyectos

**Acceptance Criteria**:
- [ ] 4 tarjetas con iconos correspondientes
- [ ] Cada tarjeta linkea a la sección correcta
- [ ] Diseño responsive (grid 2x2 en desktop, 1 columna en mobile)

### REQ-004: Trust Block
**Priority**: Medium

Agregar bloque de confianza con 3 indicadores:

- **+10 años** de experiencia en migraciones y DDHH
- **Actuamos en España y Colombia**
- **Trato personalizado** — trabajo con pocos casos a la vez

**Acceptance Criteria**:
- [ ] 3 indicadores visibles en formato destacado
- [ ] Diseño visual atractivo (números grandes + descripción)
- [ ] Responsive

### REQ-005: SEO Updates
**Priority**: Medium

Actualizar meta tags:
- **Title**: "AMA Consultores — Consultoría en Migraciones España y Colombia | amaconsultores.eu"
- **Description**: Meta descripción optimizada para SEO local

**Acceptance Criteria**:
- [ ] Title tag actualizado
- [ ] Meta description actualizada
- [ ] Open Graph tags actualizados

## Implementation Notes

- Usar componentes existentes de shadcn/ui (Button, Card)
- Mantener consistencia con colores actuales (azul oscuro + dorado)
- Framer Motion para animaciones de entrada
- Imágenes: usar Unsplash o agregar assets locales
