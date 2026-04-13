## Why

El análisis UX del sitio AMA Consultores reveló inconsistencias críticas que afectan la experiencia del usuario y potencialmente la conversión: mensajes contradictorios en CTAs (gratis vs pagado), ruptura de coherencia visual en PricingPage (fondo claro vs oscuro del resto del sitio), páginas de servicio con densidad excesiva de información legal, y problemas de accesibilidad (contraste insuficiente, falta de atributos ARIA). Estos problemas generan confusión en los usuarios y dificultan la navegación fluida entre secciones.

## What Changes

### Coherencia Visual
- **Unificar PricingPage**: Cambiar fondo a `#0f172a` (oscuro), cards oscuras consistentes con el resto del sitio, reemplazar `text-navy` por colores del tema
- **Estandarizar páginas legales**: Evaluar mantener fondo oscuro para consistencia visual o agregar transición clara
- **Eliminar código huérfano**: Remover `CallToAction.jsx` (componente no utilizado con texto en inglés incorrecto)

### Mensajes y CTAs
- **Estandarizar mensajes de CTA**:
  - Navbar: "Agendar consulta gratuita (30 min)"
  - CTA Final: "Comenzar proceso - Consulta inicial gratuita"
  - Calculadora: "Agendar asesoría personalizada - 50€ (descontable)"
- **Clarificar costos**: Agregar explicación de que los 50€ son un anticipo descontable del servicio total
- **Footer**: Destacar teléfono principal (España) y agregar CTA prominente

### Usabilidad
- **Homepage**: Colapsar sección "Por qué confiar" a 2x2 en mobile, considerar "Ver más" para testimonios extensos
- **Calculadora de elegibilidad**: Agregar contexto "Esta evaluación es orientativa", mostrar próximos pasos claros después de resultados
- **Páginas de servicio**: Agregar índice de contenidos navegable para los 6 bloques normativos

### Accesibilidad (A11Y)
- **Mejorar contraste**: Aumentar opacidad de `text-white/60` a `text-white/80` sobre fondos oscuros
- **Agregar atributos ARIA**: `aria-modal="true"` en TidyCalModal, `aria-expanded` en dropdown, indicadores de progreso en calculadora
- **Formularios**: Verificar `htmlFor` en todos los Label, agregar `aria-describedby` para errores
- **Navegación**: Agregar skip-to-content link para teclado

### Optimizaciones adicionales
- **SEO**: Agregar breadcrumbs faltantes en Precios, Blog, Equipo
- **Performance**: Lazy loading consistente en todas las imágenes
- **Legal**: Actualizar fecha en Aviso Legal (muestra "30 de marzo de 2026")

## Capabilities

### New Capabilities
- `visual-coherence-system`: Sistema unificado de estilos visuales para todo el sitio
- `cta-messaging-framework`: Framework consistente de mensajes y calls-to-action
- `accessibility-improvements`: Mejoras de accesibilidad WCAG 2.1 nivel AA

### Modified Capabilities
- `pricing-page`: Cambio de diseño visual para coherencia con el resto del sitio
- `calculator-component`: Agregar contexto y explicaciones de resultados
- `service-pages`: Mejorar navegación en contenido denso

## Impact

### Archivos afectados:
- `src/pages/PricingPage.jsx` - Rediseño visual completo
- `src/pages/HomePage.jsx` - Optimizaciones de layout
- `src/pages/ContactPage.jsx` - Actualizar mensajes CTA
- `src/pages/services/RegularizacionPage.jsx` - Agregar índice navegable
- `src/components/Navigation.jsx` - Actualizar texto CTA
- `src/components/Footer.jsx` - Destacar contacto principal
- `src/components/TidyCalModal.jsx` - Agregar atributos ARIA
- `src/components/EligibilityCalculator.jsx` - Agregar contexto
- `src/components/CallToAction.jsx` - **ELIMINAR** (código huérfano)
- `src/index.css` - Ajustar contraste y opacidades
- `src/pages/AvisoLegalPage.jsx` - Actualizar fecha

### Dependencias:
- Requiere verificación de contraste con herramientas como WebAIM
- Testing en múltiples dispositivos y lectores de pantalla

### Breaking Changes:
- Ninguno - todos los cambios son mejoras visuales y de UX sin cambiar URLs ni estructura de datos
