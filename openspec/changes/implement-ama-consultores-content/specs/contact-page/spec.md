## ADDED Requirements

### Requirement: Contact Page Legal Checkbox
The system SHALL add a mandatory legal checkbox to the contact form.

#### Scenario: Checkbox display
- **WHEN** user views contact form on `/contacto`
- **THEN** form includes:
  - **AND** Checkbox with label: "He leído y acepto las condiciones del servicio"
  - **AND** Link text: "condiciones del servicio" linking to `/condiciones-servicio`
  - **AND** Checkbox is required (mandatory)
  - **AND** Unchecked by default

### Requirement: Checkbox Validation
The form SHALL prevent submission without checkbox checked.

#### Scenario: Submission without consent
- **WHEN** user attempts to submit form without checking legal checkbox
- **THEN** form validation prevents submission
- **AND** error message displays: "Debes aceptar las condiciones del servicio para continuar"
- **AND** checkbox field is highlighted in error state

#### Scenario: Submission with consent
- **WHEN** user checks legal checkbox and submits form
- **THEN** form submits successfully
- **AND** consent is recorded (if backend tracking)
- **AND** confirmation message displays

### Requirement: Terms and Conditions Link
The checkbox label SHALL link to Terms and Conditions page.

#### Scenario: Link functionality
- **WHEN** user clicks "condiciones del servicio" link
- **THEN** new page `/condiciones-servicio` opens
- **AND** link uses proper target="_blank" or same tab
- **AND** link text is underlined or colored to indicate clickability

### Requirement: Terms and Conditions Page
The system SHALL provide a Terms and Conditions page.

#### Scenario: Terms page content
- **WHEN** user navigates to `/condiciones-servicio`
- **THEN** page displays:
  - **AND** Page title: "Condiciones del Servicio"
  - **AND** Legal disclaimer about consultancy services
  - **AND** Fee structure and payment terms
  - **AND** Cancellation and refund policy
  - **AND** Data protection and privacy policy reference
  - **AND** Limitation of liability
  - **AND** Contact information for disputes

### Requirement: Form Accessibility
The legal checkbox SHALL meet accessibility standards.

#### Scenario: Screen reader support
- **WHEN** user uses screen reader
- **THEN** checkbox is properly labeled
- **AND** required status is announced
- **AND** link purpose is clear

#### Scenario: Keyboard navigation
- **WHEN** user navigates via keyboard
- **THEN** checkbox is focusable
- **AND** link within label is accessible
- **AND** tab order is logical

### Requirement: Visual Design Consistency
Legal checkbox SHALL match site design aesthetic.

#### Scenario: Checkbox styling
- **WHEN** checkbox is displayed
- **THEN** it uses consistent sizing (minimum 20px)
- **AND** checked state uses gold color (#d4af37)
- **AND** label text matches site typography
- **AND** spacing is consistent with other form elements

### Requirement: Mobile Form Usability
Legal checkbox SHALL be usable on mobile devices.

#### Scenario: Mobile interaction
- **WHEN** user views form on mobile
- **THEN** checkbox touch target is minimum 44x44px
- **AND** label text is readable (minimum 16px)
- **AND** link is easily tappable
- **AND** form layout is responsive
