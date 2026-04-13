## ADDED Requirements

### Requirement: Enterprise Services Page Updates
The system SHALL update the Servicios para Entidades page with international hiring section.

#### Scenario: Page structure
- **WHEN** user navigates to `/servicios/empresas`
- **THEN** page displays:
  - **AND** Existing enterprise services
  - **AND** NEW: Contratación Internacional desde Colombia section

### Requirement: Contratación Internacional Content
The system SHALL add a complete Contratación Internacional desde Colombia service block.

#### Scenario: Contratación Internacional block
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Title: "Contratación Internacional de Personal desde Colombia"
  - **AND** Base normativa: Ley de Extranjería, RD 1155/2024, normativa laboral internacional
  - **AND** Description of services for Spanish companies hiring Colombians
  - **AND** Process overview for visa sponsorship
  - **AND** Legal obligations for employers
  - **AND** Requirements list with ★ bullets
  - **AND** Price: [as per document]
  - **AND** CTA: "Agenda tu asesoría — 50€"

### Requirement: Employer Obligations Documentation
The Contratación Internacional block SHALL detail employer legal obligations.

#### Scenario: Employer obligations
- **WHEN** user views Contratación section
- **THEN** it documents:
  - **AND** Obligaciones del empleador español
  - **AND** Requisitos de contrato de trabajo
  - **AND** Salario mínimo y condiciones laborales
  - **AND** Procedimiento de contratación en origen
  - **AND** Documentación requerida del trabajador
  - **AND** Gestión de visado y residencia

### Requirement: Existing Enterprise Content Preservation
Existing enterprise services SHALL remain accessible and updated.

#### Scenario: Existing services
- **WHEN** user views existing enterprise sections
- **THEN** content is updated per Correcciones document
- **AND** all services display correctly
- **AND** no broken functionality

### Requirement: Legal Basis for International Hiring
The Contratación Internacional block SHALL cite specific legal bases.

#### Scenario: Legal citations
- **WHEN** user views Contratación section
- **THEN** base normativa includes:
  - **AND** Ley Orgánica de Extranjería
  - **AND** RD 1155/2024 (Reglamento de Extranjería)
  - **AND** Articles related to work authorization
  - **AND** Ley del Estatuto de los Trabajadores (applicable provisions)
  - **AND** Convenios colectivos aplicables

### Requirement: Target Audience Clarity
The Enterprise services SHALL clearly indicate target audience.

#### Scenario: Audience identification
- **WHEN** user views enterprise services
- **THEN** it is clear these services are for:
  - **AND** Empresas españolas
  - **AND** Entidades públicas
  - **AND** ONGs y organizaciones internacionales
  - **AND** No confusión con servicios para particulares
