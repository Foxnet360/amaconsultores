## Context

El sitio web de AMA Consultores actualmente utiliza una arquitectura one-page donde toda la navegación ocurre mediante scroll a secciones específicas usando hash anchors (#regularizacion, #movilidad, etc.). Esta estructura fue implementada originalmente para simplicidad, pero no satisface las necesidades del cliente que busca:

1. Organizar 10 secciones de contenido de forma jerárquica
2. Diferenciar claramente servicios para personas vs empresas
3. Permitir compartir URLs directas a secciones específicas
4. Mejorar la navegación en dispositivos móviles
5. Destacar la calculadora de elegibilidad como herramienta principal

**Stack tecnológico actual:**
- React 18 con React Router 7
- Vite como build tool
- Tailwind CSS para estilos
- shadcn/ui componentes (basados en Radix UI)
- Framer Motion para animaciones

## Goals / Non-Goals

**Goals:**
- Implementar menú de navegación híbrido con mega dropdown para servicios
- Integrar calculadora de elegibilidad en hero section
- Crear página de precios global accesible desde menú principal
- Establecer sistema de routing multi-página manteniendo compatibilidad legacy
- Mantener consistencia visual con diseño existente (colores navy/dorado)
- Asegurar experiencia responsive óptima en todos los dispositivos

**Non-Goals:**
- Rediseñar contenido de las secciones existentes (solo reestructurar)
- Modificar funcionalidad de la calculadora (solo integración visual)
- Implementar autenticación o áreas privadas
- Crear sistema CMS para gestión de contenido
- Modificar blog existente (ya funciona como páginas independientes)

## Decisions

### 1. Arquitectura de Routing

**Decisión:** Utilizar React Router con estructura de rutas anidadas y layouts compartidos.

**Rationale:** 
- React Router ya está en el proyecto (v7)
- Permite lazy loading opcional para optimización
- Soporte nativo para nested routes
- Compatible con SSR si se necesita en futuro

**Alternativa considerada:** Quedarse con one-page y mejorar navegación visualmente.
- *Rechazada:* No cumple requisito de URLs compartibles y organización jerárquica.

### 2. Estructura del Mega Dropdown

**Decisión:** Implementar mega dropdown con layout de 2 columnas usando CSS Grid, no un componente de terceros.

**Rationale:**
- Mayor control sobre comportamiento responsive
- Integración perfecta con Tailwind CSS existente
- Evita dependencias adicionales
- Animaciones personalizables con Framer Motion

**Alternativa considerada:** Usar librería de mega menus como `react-mega-menu`.
- *Rechazada:* Añade dependencia innecesaria y limita personalización.

### 3. Integración de Calculadora en Hero

**Decisión:** Crear versión "compacta" del componente EligibilityCalculator existente para mostrar solo primera pregunta.

**Rationale:**
- Reutiliza lógica existente
- Mantiene consistencia de UX
- Fácil mantenimiento (cambios en una sola base de código)
- Permite transición fluida a versión completa

**Implementación técnica:**
- Crear prop `variant="compact"` en EligibilityCalculator
- En modo compacto, mostrar solo pregunta 1 con botón "Continuar"
- Al hacer clic, redirigir a `/calculadora` o expandir en sitio

### 4. Página de Precios

**Decisión:** Crear página dedicada `/precios` con tabs para personas/empresas en lugar de sección en home.

**Rationale:**
- Cumple requisito explícito del cliente
- Mejora SEO con URL dedicada
- Permite contenido más detallado sin comprometer diseño home
- Fácil de encontrar desde cualquier página

**Estructura:**
- Hero con título y subtítulo
- Tabs: Personas | Empresas
- Tabla por categoría con diseño de cards en móvil
- FAQs específicas de precios

### 5. Migración de Secciones Existentes

**Decisión:** Mantener secciones existentes como componentes reutilizables, crear páginas wrapper.

**Rationale:**
- Minimiza cambios en código existente
- Facilita rollback si es necesario
- Mantiene consistencia de diseño
- Permite reutilizar secciones en múltiples páginas

**Estrategia:**
- `RegularizacionSection`, `MovilidadSection`, etc. permanecen en `src/components/sections/`
- Crear páginas individuales en `src/pages/` que importen estos componentes
- HomePage mantiene todas las secciones en orden

### 6. Navegación Legacy

**Decisión:** Mantener redirecciones de hash anchors a nuevas URLs durante transición.

**Rationale:**
- Preserva bookmarks existentes
- Mantiene SEO de URLs antiguas
- Permite migración gradual sin rotura

**Implementación:**
```javascript
// En App.jsx o componente de manejo de rutas
useEffect(() => {
  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    const redirectMap = {
      'regularizacion': '/servicios/regularizacion',
      'movilidad': '/servicios/movilidad',
      // ... más mapeos
    };
    if (redirectMap[hash]) {
      navigate(redirectMap[hash], { replace: true });
    }
  }
}, []);
```

## Risks / Trade-offs

**[Riesgo]** Usuarios confundidos por cambio de navegación scroll a páginas.
→ *Mitigación:* Mantener comportamiento similar en transición, usar animaciones suaves, actualizar menú gradualmente.

**[Riesgo]** SEO temporalmente afectado durante migración.
→ *Mitigación:* Implementar redirecciones 301 (o client-side redirects), mantener meta tags consistentes, usar canonical URLs.

**[Riesgo]** Mega dropdown puede ser difícil de usar en móvil.
→ *Mitigación:* Implementar versión alternativa para móvil (menú lateral con acordeones), testear usabilidad.

**[Riesgo]** Performance degradada por carga de múltiples páginas.
→ *Mitigación:* Implementar lazy loading de componentes de página, optimizar imágenes, usar React.memo donde aplique.

**[Trade-off]** URLs más largas y estructura más compleja vs. simplicidad de one-page.
→ *Aceptado:* Beneficios de organización y SEO superan costo de complejidad.

**[Trade-off]** Tiempo de desarrollo mayor para implementar multi-page.
→ *Aceptado:* Cambio necesario para satisfacer requisitos del cliente y mejora a largo plazo.

## Migration Plan

### Fase 1: Preparación (Day 1-2)
1. Crear estructura de carpetas para nuevas páginas
2. Implementar sistema de routing actualizado
3. Crear página de precios vacía con layout

### Fase 2: Navegación (Day 3-4)
1. Rediseñar Navigation.jsx con mega dropdown
2. Implementar responsive behavior
3. Agregar redirecciones legacy
4. Testear en múltiples dispositivos

### Fase 3: Páginas de Servicios (Day 5-7)
1. Crear páginas individuales para cada servicio
2. Migrar contenido de secciones existentes
3. Implementar breadcrumbs opcionales
4. Verificar todas las rutas

### Fase 4: Hero y Calculadora (Day 8-9)
1. Rediseñar HeroSection con layout de 2 columnas
2. Crear variante compacta de calculadora
3. Integrar calculadora en hero
4. Ajustar responsive

### Fase 5: Precios y Contenido (Day 10-11)
1. Completar página de precios con tablas
2. Agregar FAQs de precios
3. Verificar datos y cálculos

### Fase 6: Testing y Ajustes (Day 12-13)
1. Testeo completo de navegación
2. Verificar todos los links
3. Testeo responsive en múltiples dispositivos
4. Optimizaciones de performance

### Rollback Strategy
- Mantener rama git con versión one-page
- Feature flags para activar/desactivar nuevas rutas
- Redirecciones reversibles

## Open Questions

1. ¿Se requiere analítica específica para tracking de uso del mega dropdown?
2. ¿El cliente prefiere que la calculadora en hero sea interactiva completa o solo preview/link?
3. ¿Se necesita soporte multi-idioma para la nueva estructura de navegación?
4. ¿Qué nivel de detalle se requiere en la página de precios? ¿Incluir desglose completo o solo rangos?
5. ¿Se requiere funcionalidad de búsqueda en el menú de servicios?
