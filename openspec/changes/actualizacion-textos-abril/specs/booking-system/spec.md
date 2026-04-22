## ADDED Requirements

### Requirement: TidyCal Integration
The system MUST use TidyCal for scheduling advisory sessions instead of the legacy Calendly integration.

#### Scenario: User opens booking modal or link
- **WHEN** a user clicks any "Agenda tu asesoría" button
- **THEN** the system must direct the user to the TidyCal link (`tidycal.com/amaconsultores`) instead of the previous Calendly URL

### Requirement: Mandatory Terms Acceptance
The system MUST require users to explicitly accept the terms and conditions before proceeding to payment or scheduling.

#### Scenario: User attempts to book a session
- **WHEN** a user interacts with the booking section (`AsesoriaSection`)
- **THEN** a mandatory checkbox must be displayed with the text: "He leído y acepto las Condiciones Generales del Servicio de AMA Consultores, incluyendo la política de honorarios, el alcance de la consultoría y la obligación de medios. Entiendo que la contratación del servicio no garantiza una resolución administrativa favorable."
- **THEN** the checkbox text must include a link to `/condiciones-servicio`
- **THEN** the user must check this box before they are allowed to proceed to TidyCal/Stripe
