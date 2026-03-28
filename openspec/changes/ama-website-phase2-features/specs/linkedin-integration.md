# LinkedIn Integration

## Overview
Integración con LinkedIn para compartir artículos del blog y difundir contenido de actualidad migratoria.

## Requirements

### REQ-001: Share Button Component
**Priority**: High

Botón "Compartir en LinkedIn" para artículos del blog:
- Ubicación: página individual de artículo `/blog/:slug`
- Posición: debajo del título o al final del artículo
- Diseño: botón con logo de LinkedIn (estilo oficial)
- URL de compartir: `https://www.linkedin.com/sharing/share-offsite/?url={article_url}`
- Abre en ventana popup (no redirige)

**Acceptance Criteria**:
- [ ] Botón visible en artículos
- [ ] URL de compartir correcta
- [ ] Popup funcional
- [ ] Seguimiento con analytics (opcional)

### REQ-002: Open Graph Meta Tags
**Priority**: High

Meta tags para preview en LinkedIn:
- `og:title`: Título del artículo
- `og:description`: Extracto del artículo
- `og:image`: URL de imagen destacada
- `og:url`: URL canónica del artículo
- `og:type`: "article"
- `og:site_name`: "AMA Consultores"
- `article:published_time`: Fecha de publicación
- `article:author`: Nombre del autor

**Acceptance Criteria**:
- [ ] Todos los meta tags presentes
- [ ] Imagen preview se muestra correctamente en LinkedIn
- [ ] Validado con LinkedIn Post Inspector

### REQ-003: Auto-Post to LinkedIn (Optional)
**Priority**: Medium

Publicación automática o semi-automática:
- Al publicar nuevo artículo, opción de compartir en LinkedIn
- Opción A: Integración API LinkedIn (requiere app aprobada)
- Opción B: Integración Zapier/Make (más simple)
- Mensaje predefinido pero editable:
  ```
  📢 Nuevo artículo: {título}
  
  {extracto}
  
  👉 Leer más: {url}
  
  #Migraciones #Extranjería #{categoría}
  ```

**Acceptance Criteria**:
- [ ] Checkbox "Publicar en LinkedIn" al crear artículo
- [ ] Integración funcional (API o Zapier)
- [ ] Mensaje editable antes de publicar
- [ ] Confirmación de publicación exitosa

### REQ-004: LinkedIn Company Page Link
**Priority**: Low

Link a página de LinkedIn de AMA Consultores:
- Ubicación: footer y/o página de contacto
- Icono de LinkedIn clickeable
- URL: (pendiente - solicitar a Ángela)

**Acceptance Criteria**:
- [ ] Link visible en footer
- [ ] URL correcta configurada

## Implementation Notes

- Para API de LinkedIn: requiere aplicación en LinkedIn Developer Portal
- Zapier es más simple pero tiene costo si >100 tareas/mes
- Open Graph tags también benefician a Facebook, Twitter, etc.
- Testear siempre con LinkedIn Post Inspector antes de publicar
