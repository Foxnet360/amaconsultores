## ADDED Requirements

### Requirement: Filtro de estado correcto para Notion
El script de sincronización con Notion DEBE usar el filtro de estado correcto en español.

#### Scenario: Script sincroniza posts publicados
- **WHEN** se ejecuta el script fetch-notion-data.js
- **THEN** DEBE filtrar posts con Status = "Publicado" (en español)
- **AND** DEBE descargar todos los posts con ese estado

#### Scenario: Base de datos tiene posts con diferentes estados
- **WHEN** la base de datos de Notion tiene posts con estado "Publicado" y "Borrador"
- **THEN** solo los posts "Publicado" DEBEN sincronizarse
- **AND** los posts "Borrador" NO DEBEN aparecer en el sitio web

### Requirement: Datos del blog se muestran correctamente
Los posts sincronizados desde Notion DEBEN mostrarse correctamente en la sección del blog.

#### Scenario: Usuario visita página del blog
- **WHEN** el usuario navega a /blog
- **THEN** DEBE ver los posts sincronizados desde Notion
- **AND** cada post DEBE mostrar título, extracto, fecha, autor y categoría

#### Scenario: No hay posts publicados en Notion
- **WHEN** no hay posts con estado "Publicado" en Notion
- **THEN** la página del blog DEBE mostrar un mensaje indicando que no hay artículos disponibles
- **AND** NO DEBE mostrar datos de ejemplo antiguos
