## ADDED Requirements

### Requirement: Migración a HashRouter
La aplicación DEBE usar HashRouter en lugar de BrowserRouter para evitar errores 404 en hosting estático.

#### Scenario: Usuario accede directamente a una ruta
- **WHEN** el usuario escribe directamente en la barra de direcciones una URL como /contacto
- **THEN** la página DEBE cargar correctamente sin error 404
- **AND** la URL DEBE mostrarse como /#/contacto

#### Scenario: Usuario refresca la página en una ruta interna
- **WHEN** el usuario está en /#/servicios/regularizacion y presiona F5
- **THEN** la página DEBE recargarse correctamente
- **AND** no DEBE mostrar error 404

### Requirement: Redirección de URLs legacy
Las URLs legacy con hash DEBEN redirigir correctamente a las nuevas rutas.

#### Scenario: Usuario accede a URL legacy
- **WHEN** el usuario accede a /#regularizacion
- **THEN** DEBE ser redirigido a /#/servicios/regularizacion
- **AND** la redirección DEBE ser transparente para el usuario
