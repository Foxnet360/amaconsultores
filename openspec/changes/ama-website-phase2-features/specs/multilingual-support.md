# Multilingual Support

## Overview
Soporte multiidioma para atender a clientes hispanohablantes e instituciones europeas. Idiomas: Español (principal) e Inglés (revisión manual).

## Requirements

### REQ-001: i18n Setup
**Priority**: High

Configuración de react-i18next:
- Instalar: `react-i18next`, `i18next`, `i18next-http-backend`
- Configurar i18n en `src/i18n.js`:
  - Default locale: 'es'
  - Supported locales: ['es', 'en']
  - Fallback: 'es'
  - Lazy loading de traducciones
- Estructura de archivos:
  ```
  public/locales/
  ├── es/
  │   └── translation.json
  └── en/
      └── translation.json
  ```

**Acceptance Criteria**:
- [ ] i18n configurado y funcionando
- [ ] Lazy loading implementado
- [ ] No carga todos los idiomas al inicio

### REQ-002: Language Selector
**Priority**: High

Selector de idioma en navegación:
- Ubicación: menú de navegación (desktop y mobile)
- Diseño: dropdown o botones ES / EN
- Indicador visual del idioma activo
- Guardar preferencia en localStorage
- Cambiar idioma sin recargar página
- Actualizar URL: `/en/` prefijo para inglés

**Acceptance Criteria**:
- [ ] Selector visible en desktop y mobile
- [ ] Cambio de idioma funcional
- [ ] Preferencia guardada
- [ ] URL actualizada correctamente
- [ ] Transición suave al cambiar idioma

### REQ-003: Translation Files Structure
**Priority**: High

Archivos JSON de traducción:
- **Español**: `public/locales/es/translation.json`
  - Todo el contenido actual ya está en español
- **Inglés**: `public/locales/en/translation.json`
  - Traducciones manuales (no automáticas)
  - Estructura:
    ```json
    {
      "nav": {
        "home": "Home",
        "services": "Services",
        "about": "About Us",
        "contact": "Contact"
      },
      "home": {
        "hero": {
          "title": "...",
          "subtitle": "..."
        }
      },
      "services": {...},
      "about": {...},
      "contact": {...}
    }
    ```

**Acceptance Criteria**:
- [ ] Archivo ES completo
- [ ] Archivo EN con traducciones revisadas
- [ ] Estructura consistente entre idiomas
- [ ] Keys descriptivas y organizadas

### REQ-004: Component Translation
**Priority**: High

Traducir todos los componentes:
- Navigation
- HeroSection
- Services pages
- About page (incluyendo biografías)
- Contact page
- Footer
- CTAs y botones

**Acceptance Criteria**:
- [ ] Todos los textos extraídos a traducciones
- [ ] Uso de `useTranslation()` hook
- [ ] No hay textos hardcodeados
- [ ] Interpolación de variables funcional

### REQ-005: URL Structure
**Priority**: Medium

Estructura de URLs multiidioma:
- Español (default): `/`, `/servicios`, `/contacto`, etc.
- Inglés: `/en/`, `/en/services`, `/en/contact`, etc.
- Rutas anidadas preservadas: `/en/services/personas/espana`
- Redirección automática según preferencia del usuario

**Acceptance Criteria**:
- [ ] URLs funcionan correctamente
- [ ] Redirección automática funcional
- [ ] Links internos respetan idioma actual
- [ ] No hay 404 al cambiar idioma

### REQ-006: Content Translation Strategy
**Priority**: High

**IMPORTANTE**: No usar traducción automática sin revisión

- **Fase 1**: Traducir solo elementos de UI (navegación, botones, CTAs)
- **Fase 2**: Traducir contenido estático (home, about)
- **Fase 3**: Traducir servicios y contacto
- **Blog**: Inglés opcional (publicar solo en español inicialmente)

Proceso:
1. Extraer textos a archivos JSON
2. Enviar a traductor/Ángela para revisión
3. Importar traducciones revisadas
4. Publicar versión en inglés

**Acceptance Criteria**:
- [ ] Política de "no automatización sin revisión" documentada
- [ ] Textos en inglés revisados por consultora
- [ ] Marcador de "en revisión" para traducciones pendientes

## Implementation Notes

- Usar namespaces si el proyecto crece (ej: `common`, `home`, `services`)
- Considerar react-i18next Trans component para HTML en traducciones
- Las biografías del equipo requieren traducción especial cuidadosa
- El blog puede mantenerse en español inicialmente
