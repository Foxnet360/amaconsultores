# Navigation Update

## Overview
Actualización del menú de navegación global para reflejar la nueva estructura de páginas.

## Requirements

### REQ-001: Main Navigation Menu
**Priority**: High

Actualizar menú principal a:

1. **Inicio** → /
2. **Servicios** → /servicios (con dropdown)
3. **Quiénes somos** → /sobre-nosotros
4. **Opiniones** → /opiniones (Fase 2)
5. **Blog** → /blog (Fase 2)
6. **Contacto** → /contacto

**Acceptance Criteria**:
- [ ] Menú actualizado con 6 items
- [ ] Orden correcto
- [ ] Links funcionales

### REQ-002: Services Dropdown
**Priority**: High

Agregar dropdown en "Servicios" con:

- **Para Personas** → /servicios?type=personas
  - En España → /servicios/personas/espana
  - En Colombia → /servicios/personas/colombia
- **Para Entidades** → /servicios?type=entidades
  - Proyectos Europeos → /servicios/entidades/proyectos
  - Asesoría Migratoria → /servicios/entidades/asesoria

**Acceptance Criteria**:
- [ ] Dropdown visible al hacer hover/click en "Servicios"
- [ ] Submenús anidados para Personas y Entidades
- [ ] Todos los links funcionales
- [ ] Responsive: dropdown funciona en mobile

### REQ-003: Mobile Navigation
**Priority**: High

Actualizar menú hamburguesa mobile:
- Mostrar todos los items del menú principal
- Servicios expandible con sub-items
- Icono de menú funcional
- Cierre al seleccionar item

**Acceptance Criteria**:
- [ ] Menú hamburguesa visible en mobile
- [ ] Todos los items navegables
- [ ] Submenús expandibles
- [ ] Cierre automático al navegar

### REQ-004: Route Updates
**Priority**: High

Actualizar rutas en App.jsx:

**Eliminar:**
- /evaluacion → redirigir a /contacto

**Agregar:**
- /contacto → ContactPage
- /servicios/personas → ServicesPage (con filtro)
- /servicios/personas/espana → ServicesPage
- /servicios/personas/colombia → ServicesPage
- /servicios/entidades → ServicesPage (con filtro)
- /opiniones → ReviewsPage (Fase 2)
- /blog → BlogPage (Fase 2)

**Acceptance Criteria**:
- [ ] Rutas nuevas configuradas
- [ ] Ruta /evaluacion redirige a /contacto
- [ ] ServicesPage maneja parámetros de URL correctamente

### REQ-005: Footer Links
**Priority**: Medium

Actualizar links en Footer:
- Links de navegación actualizados
- Link a /contacto en lugar de /evaluacion
- Links a redes sociales (si existen)

**Acceptance Criteria**:
- [ ] Footer links actualizados
- [ ] Link de contacto funcional

### REQ-006: Active State
**Priority**: Medium

Resaltar item de menú activo:
- Color dorado (#d4af37) para item activo
- Indicador visual claro
- Funciona en todos los niveles de navegación

**Acceptance Criteria**:
- [ ] Item activo resaltado
- [ ] Color dorado aplicado
- [ ] Funciona en desktop y mobile

## Implementation Notes

- Usar React Router NavLink para active state
- Usar shadcn/ui: NavigationMenu para dropdowns
- Mobile: Sheet component para menú lateral
- Redirección: useNavigate o Navigate component
