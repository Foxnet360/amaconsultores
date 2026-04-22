## Context

AMA Consultores opera un sitio web React 18 desplegado en Hostinger como hosting estático (SPA). Durante auditoría y uso en producción se identificaron problemas que afectan la experiencia del usuario y la funcionalidad del sitio:

1. **TidyCal**: El modal de reservas muestra texto desactualizado ("consulta gratuita") que contradice el precio real de 50€. El checkbox de aceptación de condiciones es solo visual, sin validación funcional.
2. **Navegación**: Al usar BrowserRouter, las URLs directas (/contacto, /equipo) devuelven 404 en producción porque el hosting no está configurado para redirigir todas las rutas a index.html.
3. **Notion CMS**: El script de sincronización filtra por "Published" pero la base de datos de Notion usa "Publicado" en español, resultando en 0 posts sincronizados.

## Goals / Non-Goals

**Goals:**
- Corregir textos y flujo de aceptación de condiciones en TidyCal
- Migrar a HashRouter para compatibilidad con hosting estático
- Corregir filtro de estado en script de Notion
- Asegurar rutas de imágenes del equipo en producción

**Non-Goals:**
- Rediseñar la interfaz de usuario
- Cambiar el precio de la asesoría
- Modificar la estructura de la base de datos de Notion
- Implementar autenticación de usuarios

## Decisions

**1. HashRouter en lugar de BrowserRouter**
- **Rationale**: Hostinger (plan compartido) no permite configuración de rewrites a nivel de servidor. HashRouter usa fragmentos de URL (#/) que no requieren soporte del servidor.
- **Alternativa considerada**: Configurar .htaccess con mod_rewrite — descartada porque Hostinger CDN puede ignorar estas reglas.
- **Impacto**: Las URLs cambian de /contacto a /#/contacto. Google indexa hash URLs desde 2014.

**2. Checkbox controlado con estado de React**
- **Rationale**: El checkbox actual es HTML puro sin estado. Se necesita estado para habilitar/deshabilitar el botón de reserva.
- **Implementación**: useState para el estado del checkbox, prop disabled en el botón de reserva.

**3. Filtro de Notion en español**
- **Rationale**: La base de datos de Notion está configurada en español con opción "Publicado".
- **Implementación**: Cambiar el filtro en fetch-notion-data.js de "Published" a "Publicado".

## Risks / Trade-offs

- **[Risk]** URLs con # pueden verse menos profesionales → **Mitigación**: Es estándar para SPAs en hosting estático. Se puede usar redirects en dominio si se migra a hosting con soporte.
- **[Risk]** Cambio de router puede afectar Google Analytics → **Mitigación**: El tracking de rutas debe actualizarse para manejar hash routes.
- **[Risk]** Notion API puede tener rate limits → **Mitigación**: El script ya implementa retry con exponential backoff.

## Migration Plan

1. Corregir textos en TidyCalModal.jsx y hacer funcional el checkbox en AgendaPage.jsx
2. Migrar BrowserRouter a HashRouter en App.jsx
3. Actualizar navegaciones manuales (window.location.href) a useNavigate
4. Corregir filtro en fetch-notion-data.js
5. Ejecutar fetch-notion y hacer build
6. Desplegar a producción
7. Verificar acceso directo a URLs y flujo de reservas
