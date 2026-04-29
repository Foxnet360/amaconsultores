## ADDED Requirements

### Requirement: Regularization Services Page Structure
The system SHALL provide a complete Regularization page with 6 legal service blocks covering all RD 1155/2024 procedures.

#### Scenario: Page access
- **WHEN** user navigates to `/servicios/regularizacion`
- **THEN** page displays 6 service blocks:
  - **AND** Arraigo Social
  - **AND** Arraigo Familiar
  - **AND** Arraigo Laboral
  - **AND** Residencias por Circunstancias Excepcionales
  - **AND** Protección Internacional y Humanitaria
  - **AND** Nacionalidad y Regularización Extraordinaria

### Requirement: Arraigo Social Content
The Arraigo Social block SHALL display complete legal information per RD 1155/2024.

#### Scenario: Arraigo Social display
- **WHEN** user views Arraigo Social section
- **THEN** it shows:
  - **AND** Title: "Arraigo Social"
  - **AND** Base normativa: "Art. 124 y 125 del Reglamento de Extranjería (RD 1155/2024, en vigor desde mayo de 2025)"
  - **AND** Price: "Desde €380 (gestión completa hasta obtener la resolución)"
  - **AND** Description with legal requirements
  - **AND** Requirements list with ★ bullets
  - **AND** CTA: "Agenda tu asesoría — 50€"

### Requirement: Arraigo Familiar Content
The Arraigo Familiar block SHALL display complete legal information.

#### Scenario: Arraigo Familiar display
- **WHEN** user views Arraigo Familiar section
- **THEN** it shows:
  - **AND** Title: "Arraigo Familiar"
  - **AND** Base normativa with specific articles
  - **AND** Price: "Desde €380"
  - **AND** Description and requirements
  - **AND** Requirements list

### Requirement: Arraigo Laboral Content
The Arraigo Laboral block SHALL display complete legal information.

#### Scenario: Arraigo Laboral display
- **WHEN** user views Arraigo Laboral section
- **THEN** it shows complete legal description
- **AND** price and requirements
- **AND** reference to RD 1155/2024 articles

### Requirement: Residencias por Circunstancias Excepcionales
The Circunstancias Excepcionales block SHALL display all 7 subcategories.

#### Scenario: Circunstancias Excepcionales display
- **WHEN** user views this section
- **THEN** it lists:
  - **AND** Violencia de género
  - **AND** Víctimas de trata
  - **AND** Victimas de tráfico ilegal de personas
  - **AND** Extranjeros en situación de desamparo
  - **AND** Enfermedad grave o accidente grave
  - **AND** Menor extranjero no acompañado una vez alcanzada la mayoría de edad
  - **AND** Extranjeros que hayan solicitado la protección internacional cuya resolución haya sido dictada cuando ya hubieran transcurrido 18 meses desde la solicitud sin resolución expresa
- **AND** Price: "Desde €380"

### Requirement: Protección Internacional y Humanitaria Content
The Protección Internacional block SHALL display asylum and humanitarian information.

#### Scenario: Protección Internacional display
- **WHEN** user views this section
- **THEN** it shows asylum procedure details
- **AND** humanitarian grounds for residency
- **AND** price and requirements

### Requirement: Nacionalidad y Regularización Extraordinaria Content
The Nacionalidad block SHALL display nationality and extraordinary regularization options.

#### Scenario: Nacionalidad display
- **WHEN** user views this section
- **THEN** it shows:
  - **AND** Nationality by residence requirements
  - **AND** Extraordinary regularization procedure (if applicable)
  - **AND** Specific legal bases
  - **AND** Price and requirements

### Requirement: Legal Citations Accuracy
All legal citations SHALL match RD 1155/2024 exactly.

#### Scenario: Legal text verification
- **WHEN** reviewing regularization content
- **THEN** all article references are accurate
- **AND** all RD references are correct
- **AND** all legal terminology matches official text

### Requirement: Price Consistency
All prices SHALL match those specified in the Correcciones document.

#### Scenario: Price verification
- **WHEN** viewing regularization services
- **THEN** all services show "Desde €380"
- **AND** price is displayed in gold badge
- **AND** format is consistent across all blocks
