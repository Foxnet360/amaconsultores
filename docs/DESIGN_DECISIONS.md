# Decisiones de Diseño

Documento que registra las decisiones arquitectónicas y de diseño importantes del proyecto AMA Consultores.

## 2025-04-12: Fix Usability & Coherence Issues

### 1. Unificación Visual - PricingPage a Tema Oscuro

**Estado:** ✅ Aceptada

**Contexto:**
PricingPage usaba fondo claro (`bg-gray-50`) mientras el resto del sitio usa tema oscuro (`#0f172a`). Esto creaba un "shock" visual al navegar.

**Decisión:**
Cambiar PricingPage a tema oscuro consistente con el resto del sitio.

**Implementación:**
- Fondo: `bg-[#0f172a]`
- Cards: `bg-[#0f2744]/60` con borde `border-white/10`
- Texto: `text-white` y `text-white/80` (secundario)

**Alternativas consideradas:**
- Mantener fondo claro en todas las páginas legales → Rechazado (rompería identidad visual)
- Usar tema claro en todo el sitio → Rechazado (cambio muy grande, afecta reconocimiento de marca)

**Consecuencias:**
- ✅ Mejora coherencia visual
- ✅ Reduce carga cognitiva del usuario
- ⚠️ Usuarios acostumbrados a versión clara necesitarán adaptación

---

### 2. Framework de Mensajes CTA

**Estado:** ✅ Aceptada

**Contexto:**
Tres mensajes diferentes para acciones similares generaban confusión sobre costos ("gratis" vs "50€").

**Decisión:**
Estandarizar mensajes por contexto del funnel:

| Ubicación | Mensaje | Rationale |
|-----------|---------|-----------|
| **Navbar** | "Agendar consulta gratuita (30 min)" | Primera impresión, baja fricción |
| **CTA Final** | "Comenzar proceso - Consulta inicial gratuita" | Enfocado en conversión |
| **Calculadora** | "Agendar asesoría personalizada" + "50€ (descontable)" | Después de valor demostrado |

**Alternativas consideradas:**
- Usar siempre el mismo mensaje → Rechazado (no refleja intención diferente del usuario)
- Eliminar costo de calculadora → Rechazado (falta de transparencia)

**Consecuencias:**
- ✅ Claridad en cada etapa del funnel
- ✅ Transparencia de costos
- ⚠️ Posible impacto temporal en conversiones (monitorear)

---

### 3. Incremento de Contraste

**Estado:** ✅ Aceptada

**Contexto:**
`text-white/60` tiene ratio ~4.2:1 (casi pasa WCAG AA). Necesitamos cumplir accesibilidad.

**Decisión:**
Cambiar globalmente a `text-white/80` (~7:1, pasa WCAG AAA).

**Implementación:**
```css
/* Todas las instancias */
.text-white\/60 → .text-white\/80
```

**Alternativas consideradas:**
- Crear clase utilitaria `.text-secondary` → Rechazado (cambio global más simple)
- Ajustar solo elementos problemáticos → Rechazado (inconsistente)

**Consecuencias:**
- ✅ Cumple WCAG AA (y AAA)
- ✅ Mejora legibilidad general
- ✅ Cambio mínimo de código

---

### 4. Skip Link y ARIA Attributes

**Estado:** ✅ Aceptada

**Contexto:**
Navegación por teclado no tenía soporte adecuado. Modales no anunciaban su estado a lectores de pantalla.

**Decisión:**
Implementar progresivamente:
1. Skip-to-content link (MainLayout)
2. Modal ARIA attributes (TidyCalModal)
3. Dropdown ARIA (Navigation)
4. Live regions (calculadora)

**Prioridad:**
1. TidyCalModal (crítico - bloquea interacción)
2. Navigation dropdown (frecuente)
3. Calculadora (compleja)
4. Formularios (ya tenían buena base)

**Consecuencias:**
- ✅ Cumple WCAG 2.1
- ✅ Mejora experiencia usuarios con discapacidad
- ⚠️ Requiere testing con lectores de pantalla reales

---

### 5. Índices Navegables en Páginas de Servicio

**Estado:** ✅ Aceptada

**Contexto:**
6 bloques normativos en RegularizacionPage son muchos para scrollear. Usuarios necesitan orientación.

**Decisión:**
Agregar sidebar sticky con índice de contenidos en páginas de servicio largas.

**Implementación:**
- Sidebar: `lg:sticky lg:top-24`
- Anchors: `#arraigos`, `#residencias-excepcionales`, etc.
- Offset: `scroll-mt-24` para compensar header fijo

**Consecuencias:**
- ✅ Mejora navegabilidad en contenido denso
- ✅ Reduce tiempo para encontrar información
- ✅ Patrón replicable en otras páginas

---

### 6. Eliminación de CallToAction.jsx

**Estado:** ✅ Aceptada

**Contexto:**
Componente no importado en ningún lado, contiene texto en inglés incorrecto.

**Decisión:**
Eliminar archivo después de verificar con grep.

**Verificación:**
```bash
grep -r "CallToAction" src/
# Sin resultados
```

**Consecuencias:**
- ✅ Reduce bundle size
- ✅ Elimina código muerto
- ✅ Limpia codebase

---

## Principios de Diseño Establecidos

1. **Coherencia sobre familiaridad**: Preferir consistencia visual global a mantener elementos que rompen el sistema
2. **Contexto en CTAs**: Mensajes diferentes según etapa del funnel son válidos si reducen fricción
3. **Accesibilidad incremental**: Priorizar componentes más usados, no bloquear lanzamiento por perfección
4. **Documentar decisiones**: Cada decisión arquitectónica significativa debe registrarse

---

## Referencias

- [STYLE_GUIDE.md](../STYLE_GUIDE.md) - Guía de estilos actualizada
- [CHANGELOG.md](../CHANGELOG.md) - Historial de cambios
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Guía de accesibilidad
