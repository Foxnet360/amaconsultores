# Verified Reviews System

## Overview
Sistema de opiniones verificadas de clientes reales para generar confianza. Las opiniones se recogen mediante formulario privado y se muestran públicamente con indicador de verificación.

## Requirements

### REQ-001: Database Schema
**Priority**: High

Tabla `reviews` en Supabase:
- `id`: uuid, primary key
- `client_name`: string (puede ser iniciales si prefiere anonimato)
- `service_type`: string (ej: 'Arraigo laboral', 'Homologación de título', 'Visado Colombia')
- `rating`: integer (1-5 estrellas)
- `review_text`: text
- `client_photo`: string (URL, opcional)
- `is_verified`: boolean (default: true)
- `created_at`: timestamp
- `is_published`: boolean (default: false) - para moderación

**Acceptance Criteria**:
- [ ] Tabla creada en Supabase
- [ ] Row Level Security configurado (solo admin puede crear/eliminar)
- [ ] Índice en `is_published` y `created_at`

### REQ-002: Reviews Display Page
**Priority**: High

Página `/opiniones`:
- Grid de tarjetas con opiniones
- Cada tarjeta muestra:
  - Nombre del cliente (o iniciales)
  - Tipo de servicio recibido
  - Valoración con estrellas visuales
  - Texto de la opinión
  - Foto del cliente (si existe)
  - Badge "Opinión verificada"
- Filtro por tipo de servicio
- Ordenar por: más recientes, mejor valoradas
- Diseño responsive (grid 1-3 columnas)

**Acceptance Criteria**:
- [ ] Página accesible en `/opiniones`
- [ ] Solo muestra opiniones con `is_published = true`
- [ ] Diseño consistente con resto del sitio
- [ ] Total de opiniones visible
- [ ] Promedio de valoración destacado

### REQ-003: Internal Review Form
**Priority**: High

Formulario para recoger opiniones (acceso por enlace privado):
- URL: `/opiniones/nueva` (no enlazada públicamente)
- Campos:
  - Nombre completo (o iniciales si prefiere anonimato)
  - Tipo de procedimiento/servicio (select con opciones)
  - Valoración 1-5 estrellas (selector visual)
  - Texto libre de la opinión (textarea)
  - Foto opcional (upload)
  - Checkbox: "Doy permiso para publicar esta opinión"
- Submit guarda en BD con `is_published = false` (requiere aprobación)
- Mensaje de confirmación tras envío

**Acceptance Criteria**:
- [ ] Formulario funcional y validado
- [ ] Upload de fotos a Supabase Storage
- [ ] Solo clientes con enlace pueden acceder
- [ ] Notificación por email a admin cuando llega nueva opinión
- [ ] Preview de cómo quedará la opinión

### REQ-004: Admin Moderation
**Priority**: Medium

Panel simple para aprobar/rechazar opiniones:
- URL: `/admin/reviews` (protegido con login)
- Lista de opiniones pendientes (`is_published = false`)
- Acciones: Aprobar, Rechazar, Editar
- Vista previa de cómo se verá publicada
- Búsqueda/filtro por nombre o servicio

**Acceptance Criteria**:
- [ ] Solo accesible con autenticación
- [ ] Lista de opiniones pendientes
- [ ] Botones de acción funcionales
- [ ] Confirmación antes de rechazar
- [ ] Notificación al cliente cuando se aprueba (opcional)

### REQ-005: Star Rating Component
**Priority**: Medium

Componente visual reutilizable para mostrar valoración:
- Muestra 5 estrellas
- Estrellas llenas según rating (1-5)
- Estrellas parciales (ej: 4.5) con gradiente
- Tamaño configurable (sm, md, lg)
- Color dorado (#d4af37)

**Acceptance Criteria**:
- [ ] Componente reutilizable
- [ ] Soporta decimales (ej: 4.5)
- [ ] Responsive
- [ ] Accesible (aria-label)

## Implementation Notes

- Usar Supabase Realtime para actualizaciones en tiempo real (opcional)
- Las opiniones deben marcarse claramente como "verificadas" vs "Google Reviews"
- Considerar paginación si hay >50 opiniones
- Las fotos deben optimizarse automáticamente (resize, compress)
