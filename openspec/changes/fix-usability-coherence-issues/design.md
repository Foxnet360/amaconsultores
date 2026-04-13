## Context

AMA Consultores es un sitio web de consultoría migratoria entre España y Colombia. El sitio actualmente tiene:
- **Inconsistencia visual**: PricingPage usa fondo claro (`gray-50`) mientras el resto del sitio usa fondo oscuro (`#0f172a`)
- **Mensajes CTA confusos**: Tres mensajes diferentes para acciones similares ("gratis" vs "50€")
- **Problemas de accesibilidad**: Contraste insuficiente (`text-white/60`), falta de atributos ARIA
- **Código huérfano**: Componente `CallToAction.jsx` no utilizado

### Constraints actuales:
- Tailwind CSS configurado con tema oscuro por defecto
- Framer Motion para animaciones (mantener consistencia)
- Componentes Shadcn/ui ya integrados
- React Router v7 para navegación

## Goals / Non-Goals

**Goals:**
- Unificar sistema visual en todo el sitio (tema oscuro consistente)
- Estandarizar mensajes CTA para eliminar confusión sobre costos
- Implementar mejoras de accesibilidad WCAG 2.1 nivel AA
- Eliminar código muerto y redundante
- Mantener todas las funcionalidades existentes

**Non-Goals:**
- No cambiar URLs ni estructura de rutas
- No modificar lógica de negocio de la calculadora
- No agregar nuevas páginas
- No cambiar dependencias externas (TidyCal, EmailJS, etc.)
- No modificar el CMS (Notion) para el blog

## Decisions

### Decision 1: Unificar PricingPage a tema oscuro
**Rationale**: Consistencia visual es prioridad. Usuarios no deben experimentar "shock" visual al navegar entre páginas.

**Implementation**:
```jsx
// Cambiar en PricingPage.jsx
<div className="min-h-screen bg-[#0f172a]"> // Era: bg-gray-50

// Cards cambiar a:
<Card className="bg-[#0f2744]/60 border-white/10">
```

**Alternatives considered**: Mantener fondo claro en todas las páginas legales → Rechazado porque rompería la identidad visual establecida.

### Decision 2: Framework de mensajes CTA por contexto
**Rationale**: Diferentes etapas del funnel requieren diferentes mensajes. Primera interacción = gratuidad. Después de valor demostrado = transparencia de costos.

**Implementation**:
```jsx
// Navbar - Primera impresión, baja fricción
"Agendar consulta gratuita (30 min)"

// CTA Final - Enfocado en conversión
"Comenzar proceso - Consulta inicial gratuita"

// Calculadora - Después de valor, contexto de costo
"Agendar asesoría personalizada"
Subtexto: "50€ (descontable del total si continúas)"
```

**Alternatives considered**: Usar siempre el mismo mensaje → Rechazado porque no refleja la diferente intención del usuario en cada etapa.

### Decision 3: Incrementar contraste progresivamente
**Rationale**: `text-white/60` tiene ratio ~4.2:1 (casi pasa AA). `text-white/80` tiene ~7:1 (pasa AAA).

**Implementation**:
```css
/* Cambios en index.css */
/* Opción A: Cambiar todas las instancias */
.text-white\/60 → .text-white\/80

/* Opción B: Crear clase utilitaria */
.text-secondary {
  color: rgba(255, 255, 255, 0.8);
}
```

**Decisión**: Opción A - Cambio global simple y efectivo.

### Decision 4: ARIA attributes por componente
**Rationale**: Accesibilidad debe ser incremental. Priorizar componentes más usados.

**Priority order**:
1. TidyCalModal (crítico - bloquea interacción)
2. Navigation dropdown (frecuente)
3. Calculadora (compleja)
4. Formularios (ya tienen buena base)

**Implementation pattern**:
```jsx
// Modal
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
>

// Dropdown
<button
  aria-haspopup="true"
  aria-expanded={isOpen}
>
```

### Decision 5: Eliminación de CallToAction.jsx
**Rationale**: Componente no importado en ningún lado, contiene texto en inglés incorrecto, no aporta valor.

**Risk mitigation**: Verificar con `grep -r "CallToAction" src/` antes de eliminar.

### Decision 6: Skip link implementation
**Rationale**: Requerido para navegación por teclado WCAG 2.1.

**Implementation**:
```jsx
// En MainLayout.jsx o App.jsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-primary-dark px-4 py-2 rounded z-50">
  Saltar al contenido principal
</a>

<main id="main-content">
  {children}
</main>
```

### Decision 7: Índice navegable en páginas de servicio
**Rationale**: 6 bloques normativos son muchos para scrollear. Usuarios necesitan orientación.

**Implementation**:
```jsx
// Sidebar sticky o dropdown en mobile
<nav className="sticky top-24">
  <ul>
    <li><a href="#arraigos">Bloque 1: Arraigos</a></li>
    <li><a href="#residencias">Bloque 2: Residencias</a></li>
    {/* ... */}
  </ul>
</nav>
```

## Risks / Trade-offs

**[Risk] Cambios visuales pueden afectar SEO temporalmente**
→ Mitigation: Mantener estructura HTML semántica, no cambiar URLs, usar `Helmet` existente

**[Risk] Usuarios acostumbrados a PricingPage clara pueden encontrar oscura la nueva versión**
→ Mitigation: Asegurar suficiente contraste, mantener jerarquía visual clara con el dorado

**[Risk] Cambios de mensaje CTA pueden afectar métricas de conversión inicialmente**
→ Mitigation: Monitorear analytics con `useAnalytics`, estar preparado para A/B test si es necesario

**[Risk] Eliminación accidental de código necesario**
→ Mitigation: Buscar con grep antes de eliminar, mantener backup en git

**[Risk] ARIA attributes pueden romper si se implementan incorrectamente**
→ Mitigation: Testear con axe DevTools y lectores de pantalla reales

**[Trade-off] Consistencia visual vs familiaridad**
PricingPage clara era diferente pero algunos usuarios podrían preferirla. Sin embargo, la consistencia global mejora la experiencia general.

## Migration Plan

### Fase 1: Preparación (sin riesgo)
1. Crear backup de rama
2. Ejecutar tests existentes
3. Verificar con grep que CallToAction no se usa

### Fase 2: Coherencia visual (riesgo bajo)
1. Modificar `PricingPage.jsx` - cambiar fondo y cards
2. Eliminar `CallToAction.jsx`
3. Actualizar `AvisoLegalPage.jsx` - fecha
4. Test visual en diferentes pantallas

### Fase 3: Mensajes CTA (riesgo medio)
1. Actualizar `Navigation.jsx`
2. Actualizar `HomePage.jsx` (CTA final)
3. Actualizar `EligibilityCalculator.jsx`
4. Actualizar `Footer.jsx`
5. Verificar flujo completo de conversión

### Fase 4: Accesibilidad (riesgo bajo)
1. Agregar skip link en `MainLayout.jsx`
2. Implementar ARIA en `TidyCalModal.jsx`
3. Implementar ARIA en `Navigation.jsx` dropdown
4. Actualizar contraste en `index.css`
5. Testear con herramientas a11y

### Fase 5: Usabilidad adicional (riesgo bajo)
1. Agregar índice en `RegularizacionPage.jsx`
2. Optimizar layout mobile en `HomePage.jsx`
3. Agregar breadcrumbs faltantes

### Rollback Strategy
- Todos los cambios son reversibles individualmente
- Git permite revertir commits específicos
- No hay cambios de base de datos ni dependencias externas

## Testing Plan

### Testing Manual:
1. **Visual**: Verificar PricingPage en desktop, tablet, mobile
2. **Funcional**: Completar flujo calculadora → contacto
3. **Accesibilidad**: Navegar con Tab, usar lector de pantalla
4. **Contraste**: Validar con WebAIM contrast checker

### Testing Automatizado:
```bash
# Linting
npm run lint

# Build
npm run build

# A11y testing (si se agrega)
npx axe-core --help
```

## Open Questions

1. **¿Deberíamos mantener fondo claro en páginas legales?**
   Páginas de privacidad/aviso legal a veces usan fondo claro por convención. Evaluar si la consistencia visual vale más que la convención.

2. **¿Agregamos analytics específicos para medir impacto de CTAs?**
   Recomendado: trackear eventos "cta_clicked" con metadata de ubicación.

3. **¿Implementamos A/B test para mensajes?**
   Podríamos probar "Agendar consulta gratuita" vs "Comenzar proceso" para ver cuál convierte mejor.

4. **¿Necesitamos traducción de páginas legales a inglés?**
   Usuarios colombianos pueden preferir español, pero la traducción mejoraría SEO internacional.

## Success Metrics

- **Coherencia visual**: 0 páginas con fondo claro (excepto si decidimos mantener legales)
- **Accesibilidad**: Score 90+ en Lighthouse Accessibility
- **Contraste**: 100% de elementos pasan WCAG AA
- **CTAs consistentes**: 1 mensaje por tipo de CTA (navegación, hero, calculadora)
- **Code quality**: Eliminación de 1 archivo huérfano
