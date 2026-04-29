## ADDED Requirements

### Requirement: Bilateral Agreements Page Updates
The system SHALL update the Convenios page with 5 complete bilateral agreement blocks covering España-Colombia treaties.

#### Scenario: Page access
- **WHEN** user navigates to `/servicios/convenios`
- **THEN** page displays 5 agreement blocks:
  - **AND** Convenio de Doble Nacionalidad
  - **AND** Convenio de Seguridad Social
  - **AND** Convenio para evitar la Doble Imposición
  - **AND** Convenio de Reconocimiento de Títulos
  - **AND** Acuerdo de Movilidad Laboral

### Requirement: Convenio de Doble Nacionalidad Content
The system SHALL display complete information about the dual nationality agreement.

#### Scenario: Doble Nacionalidad block
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Title: "Convenio de Doble Nacionalidad España-Colombia"
  - **AND** Base normativa: Tratado específico entre España y Colombia
  - **AND** Description of benefits and requirements
  - **AND** Requirements list with ★ bullets
  - **AND** Price if applicable
  - **AND** CTA: "Agenda tu asesoría — 50€"

### Requirement: Convenio de Seguridad Social Content
The system SHALL display complete information about the social security agreement.

#### Scenario: Seguridad Social block
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Title: "Convenio de Seguridad Social España-Colombia"
  - **AND** Base normativa: Convenio bilateral de seguridad social
  - **AND** Benefits for workers and pensioners
  - **AND** Procedure for certificate of coverage
  - **AND** Requirements and documentation
  - **AND** Price if applicable

### Requirement: Convenio de Doble Imposición Content
The system SHALL display complete information about the tax agreement.

#### Scenario: Doble Imposición block
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Title: "Convenio para Evitar la Doble Imposición"
  - **AND** Base normativa: CDI España-Colombia
  - **AND** Tax benefits for cross-border workers
  - **AND** Fiscal residency implications
  - **AND** Requirements and procedures
  - **AND** Price if applicable

### Requirement: Convenio de Reconocimiento de Títulos Content
The system SHALL display complete information about academic title recognition.

#### Scenario: Reconocimiento de Títulos block
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Title: "Convenio de Reconocimiento de Títulos Académicos"
  - **AND** Base normativa: Acuerdo educativo España-Colombia
  - **AND** Homologación simplificada procedure
  - **AND** Valid for university and professional titles
  - **AND** Requirements and documentation
  - **AND** Price if applicable

### Requirement: Acuerdo de Movilidad Laboral Content
The system SHALL display complete information about labor mobility agreement.

#### Scenario: Movilidad Laboral block
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Title: "Acuerdo de Movilidad Laboral España-Colombia"
  - **AND** Base normativa: Acuerdo bilateral laboral
  - **AND** Simplified work visa procedures
  - **AND** Benefits for Colombian workers in Spain
  - **AND** Requirements and procedures
  - **AND** Price if applicable

### Requirement: Treaty References Accuracy
All treaty references SHALL be accurate and cite official documents.

#### Scenario: Treaty verification
- **WHEN** reviewing bilateral agreement content
- **THEN** each treaty cites:
  - **AND** Official treaty name
  - **AND** Signing date and effective date
  - **AND** Applicable articles
  - **AND** Reference to official publications (BOE, etc.)

### Requirement: Cross-Reference Links
Bilateral agreements SHALL cross-reference related services.

#### Scenario: Related services links
- **WHEN** user views Convenio de Reconocimiento de Títulos
- **THEN** link to Homologación de Títulos service is provided
- **AND** when viewing Acuerdo de Movilidad Laboral
- **THEN** links to relevant visa services are provided
