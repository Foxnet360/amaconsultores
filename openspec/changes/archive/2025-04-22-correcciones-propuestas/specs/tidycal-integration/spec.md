## ADDED Requirements

### Requirement: TidyCal modal muestra precio correcto
El modal de TidyCal DEBE mostrar texto acorde al precio real de la asesoría.

#### Scenario: Usuario abre modal de reserva
- **WHEN** el usuario hace clic en el botón para agendar asesoría
- **THEN** el modal DEBE mostrar "Reserva una consulta personalizada de 30 minutos por 50€" en lugar de "consulta gratuita"

### Requirement: Checkbox de condiciones es funcional
El checkbox de aceptación de condiciones del servicio en la página de agenda DEBE ser funcional y bloquear la reserva hasta su aceptación.

#### Scenario: Usuario intenta reservar sin aceptar condiciones
- **WHEN** el usuario no marca el checkbox de condiciones
- **THEN** el botón de reserva DEBE estar deshabilitado
- **AND** el usuario DEBE ver un mensaje indicando que debe aceptar las condiciones

#### Scenario: Usuario acepta condiciones y reserva
- **WHEN** el usuario marca el checkbox de condiciones
- **THEN** el botón de reserva DEBE habilitarse
- **AND** el usuario DEBE poder continuar con la reserva en TidyCal

### Requirement: Integración de TidyCal carga correctamente
El iframe de TidyCal DEBE cargar correctamente en la página de agenda.

#### Scenario: Usuario accede a página de agenda
- **WHEN** el usuario navega a /agenda
- **THEN** el iframe de TidyCal DEBE cargar en menos de 5 segundos
- **AND** DEBE mostrar el calendario de disponibilidad
