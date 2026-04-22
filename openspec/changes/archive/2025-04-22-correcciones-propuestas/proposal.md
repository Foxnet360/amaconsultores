## Why

El sitio web de AMA Consultores tiene varios problemas identificados durante auditoría y uso en producción: texto desactualizado en el modal de TidyCal que contradice el precio real de la asesoría, un checkbox de aceptación de condiciones sin funcionalidad, errores en la integración con Notion CMS para el blog, y problemas de navegación directa a URLs por el uso de BrowserRouter en un hosting estático.

## What Changes

- Corregir texto en `TidyCalModal.jsx`: cambiar "consulta gratuita de 30 minutos" por texto acorde al precio de 50€
- Hacer funcional el checkbox de aceptación de condiciones en `AgendaPage.jsx` (actualmente es solo visual)
- Migrar de `BrowserRouter` a `HashRouter` para resolver errores 404 al acceder directamente a URLs
- Corregir filtro de estado en script `fetch-notion-data.js` de "Published" a "Publicado" para coincidir con la base de datos de Notion
- Asegurar rutas correctas para imágenes del equipo en producción
- Actualizar textos de checkboxes en formularios de contacto para coincidir exactamente con referencia XML

## Capabilities

### New Capabilities
- `tidycal-integration`: Corrección de integración de reservas y flujo de aceptación de condiciones
- `hash-router-navigation`: Migración a HashRouter para compatibilidad con hosting estático
- `notion-cms-sync`: Corrección de sincronización de datos del blog desde Notion

### Modified Capabilities
- *(ninguno - no hay specs existentes)*

## Impact

- Componentes afectados: `TidyCalModal.jsx`, `AgendaPage.jsx`, `TidyCalEmbed.jsx`, `App.jsx`, `fetch-notion-data.js`, `EquipoSection.jsx`
- Páginas afectadas: `/agenda`, `/contacto`, `/blog`
- Sin cambios en APIs externas
- Sin cambios en dependencias del proyecto
- Impacto en usuario: resolución de errores 404, flujo de reservas funcional, blog con contenido real
