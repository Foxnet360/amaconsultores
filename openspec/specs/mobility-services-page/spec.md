## ADDED Requirements

### Requirement: Mobility Services Page Updates
The system SHALL update the Movilidad Profesional page with additional service blocks for homologación and nómada digital.

#### Scenario: Page structure
- **WHEN** user navigates to `/servicios/movilidad`
- **THEN** page displays:
  - **AND** Existing mobility services
  - **AND** NEW: Homologación de títulos block
  - **AND** NEW: Visado de Nómada Digital block

### Requirement: Homologación de Títulos Content
The system SHALL add a complete Homologación de Títulos service block.

#### Scenario: Homologación block display
- **WHEN** user views Homologación section
- **THEN** it shows:
  - **AND** Title: "Homologación de Títulos Universitarios y Profesionales"
  - **AND** Base normativa: References to Ministerio de Universidades, RD 967/2014, etc.
  - **AND** Description of procedure for Colombian professionals
  - **AND** Requirements list with ★ bullets
  - **AND** Price: [as per document]
  - **AND** CTA: "Agenda tu asesoría — 50€"

### Requirement: Nómada Digital Visa Content
The system SHALL add a complete Nómada Digital visa service block.

#### Scenario: Nómada Digital block display
- **WHEN** user views Nómada Digital section
- **THEN** it shows:
  - **AND** Title: "Visado de Nómada Digital"
  - **AND** Base normativa: Ley de Emprendedores, modifications RD 1155/2024
  - **AND** Description of requirements for remote workers
  - **AND** Requirements list:
    - **AND** ★ Ser nacional de países terceros (no UE)
    - **AND** ★ Estar al corriente de la autorización de entrada vigente
    - **AND** ★ No estar en territorio español en situación irregular
    - **AND** ★ Carecer de antecedentes penales
    - **AND** ★ Contrato de trabajo por cuenta ajena o por cuenta propia
    - **AND** ★ Acreditar relación laboral/profesional de >3 meses
    - **AND** ★ Acreditar medios económicos (200% IPREM mensual)
    - **AND** ★ Acreditar residencia y trabajo autorizado por teletrabajo
    - **AND** ★ Poseer seguro público o privado de enfermedad
  - **AND** Price: [as per document]
  - **AND** CTA: "Agenda tu asesoría — 50€"

### Requirement: Existing Mobility Content Preservation
Existing mobility services SHALL remain accessible and updated.

#### Scenario: Existing services display
- **WHEN** user views existing mobility sections
- **THEN** content is updated per Correcciones document
- **AND** no broken links or missing content
- **AND** prices updated if changed

### Requirement: Legal Citations for New Blocks
New service blocks SHALL include accurate legal citations.

#### Scenario: Homologación legal basis
- **WHEN** user views Homologación section
- **THEN** base normativa cites:
  - **AND** Ministerio de Universidades regulations
  - **AND** RD 967/2014 (procedimiento homologación títulos universitarios)
  - **AND** Spanish and Colombian applicable norms

#### Scenario: Nómada Digital legal basis
- **WHEN** user views Nómada Digital section
- **THEN** base normativa cites:
  - **AND** Ley de Emprendedores
  - **AND** RD 1155/2024 modifications
  - **AND** Article references for visa requirements
