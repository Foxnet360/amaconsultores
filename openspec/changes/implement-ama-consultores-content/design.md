# Design Document: Implementación de Contenido AMA Consultores

## Context

### Current State
El sitio web de AMA Consultores actualmente tiene:
- **Páginas de servicios** con contenido genérico que no refleja la normativa vigente RD 1155/2024
- **Perfiles de equipo** incompletos o desactualizados
- **Sistema de agendamiento** con Calendly (requiere cambio a TidyCal)
- **Formularios de contacto** sin checkbox legal obligatorio

### Constraints

**Técnicos:**
- Stack React 18 + Vite + Tailwind CSS
- Componentes shadcn/ui ya instalados
- Esquema de colores existente (azul marino #1e3a8a, dorado #d4af37)
- Rutas ya definidas en react-router

**De Contenido:**
- Textos legales deben mantenerse EXACTOS como en Correcciones.xml
- Bases normativas, artículos y precios son inmutables
- Las biografías del equipo son textos aprobados por el cliente
- Disclaimers legales obligatorios en secciones específicas

**Visuales:**
- Mantener estética dorado/azul marino existente
- No cambiar tipografía ni paleta general
- Adaptar componentes para soportar textos largos sin perder legibilidad

## Goals / Non-Goals

**Goals:**
- Implementar sistema de componentes reutilizables para contenido legal
- Actualizar/crear 8 páginas de servicios con estructura definida
- Integrar TidyCal reemplazando Calendly completamente
- Implementar 4 perfiles de equipo con fotos/biografías
- Agregar checkbox legal en formulario de contacto
- Mantener 100% de fidelidad con textos del documento fuente

**Non-Goals:**
- Rediseño visual del sitio (colores, tipografía, layout general)
- Implementar backend adicional o APIs nuevas
- Optimización SEO avanzada
- Traducción a otros idiomas
- Sistema de gestión de contenido (CMS)

## Decisions

### 1. Arquitectura de Componentes

**Decisión:** Crear 4 componentes reutilizables en `src/components/legal/`

**Rationale:** 
- El contenido legal sigue patrones repetitivos (tarjeta → requisitos → CTA)
- Componentes especializados aseguran consistencia visual
- Facilita mantenimiento futuro de actualizaciones normativas

**Componentes:**
```
src/components/legal/
├── LegalCard.jsx          # Contenedor principal de servicio
├── LegalNotice.jsx        # Bases normativas y disclaimers
├── RequirementList.jsx    # Lista de requisitos con ★
└── PriceTag.jsx           # Badge de precio estandarizado
```

### 2. Estructura de Páginas

**Decisión:** Usar diseño de "bloques" con anclajes internos

**Rationale:**
- Cada sección tiene 5-6 bloques de servicios
- Usuarios pueden navegar directamente a bloques específicos
- Mejora SEO con secciones semánticas

**Implementación:**
```jsx
<section id="arraigos" className="scroll-mt-20">
  <h2>Bloque 1 — Arraigos</h2>
  {arraigos.map(servicio => <LegalCard {...servicio} />)}
</section>
```

### 3. Manejo de Textos Legales

**Decisión:** Hardcodear textos en archivos de datos, NO en CMS externo

**Rationale:**
- Los textos son estáticos y aprobados legalmente
- El cliente no necesita editarlos frecuentemente
- Evita dependencias externas
- Garantiza que el contenido nunca se "rompe" por error de edición

**Estructura:**
```javascript
// src/data/regularization-services.js
export const arraigoSegundaOportunidad = {
  id: 'arraigo-segunda-oportunidad',
  title: 'Arraigo de Segunda Oportunidad',
  article: 'art. 127.a',
  baseNormativa: 'RD 1155/2024',
  price: '380€ IVA incluido',
  description: 'Para personas que tuvieron una autorización...',
  requirements: [
    'Tuve una autorización de residencia en España...',
    'No pude renovarla por vencimiento...',
    // ...
  ],
  duration: '1 año. Autoriza a trabajar por cuenta ajena y propia.'
}
```

### 4. Integración TidyCal

**Decisión:** Usar iframe embebido de TidyCal, NO widget React

**Rationale:**
- TidyCal no tiene SDK oficial para React
- Iframe es la forma estándar y soportada
- Script de TidyCal se carga asíncrono sin bloquear render

**Implementación:**
```jsx
<iframe 
  src="https://tidycal.com/amaconsultores"
  className="w-full h-[800px] border-0"
  title="Agendar asesoría con AMA Consultores"
/>
```

### 5. Perfiles del Equipo

**Decisión:** Componente genérico `TeamMember` con soporte para fotos/placeholders

**Rationale:**
- 4 perfiles con misma estructura
- Algunos tienen foto, otros placeholder con iniciales
- Facilita agregar/quitar miembros en el futuro

**Implementación:**
```jsx
<TeamMember
  name="Ángela Morales"
  role="CEO — AMA Consultores"
  email="asesorias@amaconsultores.eu"
  photo="/team/angela.jpg" // o null para placeholder
  initials="AM"
  bio="Texto aprobado..."
/>
```

### 6. Checkbox Legal

**Decisión:** Checkbox obligatorio antes del botón de envío en formulario de contacto

**Rationale:**
- Requerimiento legal explícito del cliente
- Protección contra reclamaciones
- Enlace a `/condiciones-servicio` (nueva página)

**Implementación:**
```jsx
<label className="flex items-start gap-2">
  <input type="checkbox" required />
  <span className="text-sm">
    He leído y acepto las <a href="/condiciones-servicio">Condiciones Generales</a>...
  </span>
</label>
```

## Risks / Trade-offs

### [Riesgo] Contenido Legal Extenso Afecta Performance
**→ Mitigación:**
- Usar `React.lazy()` para cargar páginas de servicios bajo demanda
- Implementar intersection observer para lazy loading de imágenes
- El contenido es estático, se puede cachear agresivamente

### [Riesgo] Actualizaciones Normativas Futuras
**→ Mitigación:**
- Estructura de datos modular facilita actualizaciones
- Documentar claramente dónde está cada texto legal
- Considerar crear script de validación que compare con fuente

### [Riesgo] Diseño Visual con Textos Largos
**→ Mitigación:**
- Usar acordeones (Collapsible) para requisitos extensos
- Tipografía legible (interlineado 1.6-1.8)
- Suficiente padding y whitespace
- Testear en móviles (50%+ del tráfico)

### [Riesgo] TidyCal No Disponible o Cambia API
**→ Mitigación:**
- Implementar fallback a formulario de contacto estándar
- Monitorear carga del iframe (onLoad/onError)
- Mantener alternativa de contacto por WhatsApp visible

### [Trade-off] SEO vs Contenido Legal Preciso
- Los textos legales son largos y específicos, no optimizados para keywords
- **Decisión:** Priorizar precisión legal sobre SEO
- **Mitigación:** Usar meta descriptions y títulos optimizados, mantener H1/H2 semánticos

## Migration Plan

### Fase 1: Infraestructura (1-2 horas)
1. Crear componentes legales base (LegalCard, LegalNotice, etc.)
2. Crear estructura de datos para servicios
3. Configurar TidyCal (verificar URL funciona)

### Fase 2: Páginas Principales (4-6 horas)
4. Implementar `/servicios/regularizacion` (más compleja)
5. Implementar `/servicios/movilidad`
6. Implementar `/servicios/convenios`
7. Crear nueva `/servicios/colombia`

### Fase 3: Páginas Secundarias (2-3 horas)
8. Actualizar `/servicios/empresas`
9. Actualizar `/quienes-somos` con perfiles
10. Crear `/condiciones-servicio`
11. Actualizar `/contacto` con checkbox

### Fase 4: Integración y Testing (2-3 horas)
12. Reemplazar Calendly por TidyCal en todas las páginas
13. Testing cross-browser y mobile
14. Revisión de accesibilidad (ARIA labels, contraste)
15. Validación con cliente (screenshots de cada sección)

### Rollback Strategy
- Mantener branch `main` con versión anterior
- Deploy a staging primero para validación
- Feature flags para nuevas páginas (opcional)
- Backup de archivos modificados antes del deploy

## Open Questions

1. **¿El cliente tiene acceso al panel de TidyCal?**
   - Necesario para verificar disponibilidad de horarios
   - Acción: Confirmar con cliente antes de implementar

2. **¿Las fotos de Ángela y Xiomara están optimizadas para web?**
   - Tamaño recomendado: 800x800px, formato WebP/JPG
   - Acción: Solicitar versiones optimizadas

3. **¿El contenido de `/condiciones-servicio` está definido?**
   - El documento solo menciona que debe existir
   - Acción: Solicitar texto legal de condiciones al cliente

4. **¿Hay requisitos de accesibilidad específicos?**
   - WCAG 2.1 AA es estándar
   - Acción: Implementar ARIA labels en componentes legales

5. **¿Necesita el cliente analytics de las páginas de servicios?**
   - Para trackear qué servicios generan más interés
   - Acción: Agregar eventos de tracking (Google Analytics 4)

## Component Architecture Diagram

```
App
├── Layout
│   ├── Navigation
│   └── Footer
│
├── Pages
│   ├── Home
│   ├── Servicios
│   │   ├── Regularizacion (6 bloques legales)
│   │   ├── Movilidad (3 bloques)
│   │   ├── Convenios (5 bloques)
│   │   ├── Colombia (5 bloques)
│   │   └── Empresas (6 bloques)
│   ├── QuienesSomos (4 perfiles)
│   ├── Contacto (+ checkbox legal)
│   ├── CondicionesServicio
│   └── Agenda (TidyCal iframe)
│
└── Components
    └── Legal/
        ├── LegalCard
        ├── LegalNotice
        ├── RequirementList
        └── PriceTag
```

## Data Flow

```
Correcciones.xml
    ↓ (manual extraction)
src/data/*.js (structured data)
    ↓ (imported by)
Page Components
    ↓ (render using)
Legal Components
    ↓ (styled with)
Tailwind + Custom CSS
```

## Success Criteria (Technical)

- [ ] Lighthouse score > 90 en performance y accesibilidad
- [ ] Todos los componentes legales reutilizables y testeados
- [ ] TidyCal carga correctamente en < 3 segundos
- [ ] Formulario de contacto valida checkbox antes de envío
- [ ] Navegación entre secciones funciona con scroll suave
- [ ] Responsive: mobile (375px), tablet (768px), desktop (1440px)
- [ ] No errores de consola en producción
- [ ] Build exitoso sin warnings críticos
