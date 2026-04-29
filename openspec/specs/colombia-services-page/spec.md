## ADDED Requirements

### Requirement: Colombia Services Page Structure
The system SHALL provide a dedicated page for Colombia international procedures with 5 distinct service blocks.

#### Scenario: Page navigation
- **WHEN** user navigates to `/servicios/colombia`
- **THEN** the page displays 5 service blocks in vertical order
- **AND** each block has consistent visual styling

### Requirement: Colombia Service Block Content
Each Colombia service block SHALL display title, normative base, price, description, and requirements list.

#### Scenario: Service block display
- **WHEN** user views any Colombia service block
- **THEN** the block shows:
  - **AND** service title with normative reference
  - **AND** price badge in gold styling
  - **AND** detailed legal description
  - **AND** ordered requirements list with star bullets (★)
  - **AND** CTA button "Agenda tu asesoría — 50€"

### Requirement: Colombia Service Pricing
Each Colombia service SHALL display its specific price prominently.

#### Scenario: Price visibility
- **WHEN** user views a Colombia service block
- **THEN** the price is displayed in a gold badge format
- **AND** prices match: Apostilla (varies), Poderes (€150-€200), Visados (varies), Registro Civil (€150), Certificaciones (€200)

### Requirement: Legal References Display
Each Colombia service SHALL cite its specific legal and administrative bases.

#### Scenario: Normative references
- **WHEN** user views service details
- **THEN** each service shows applicable:
  - **AND** International treaties (Hague Apostille Convention, etc.)
  - **AND** Colombian regulations (Resoluciones, Decretos)
  - **AND** Spanish applicable norms

### Requirement: Responsive Layout
The Colombia page SHALL be fully responsive across all device sizes.

#### Scenario: Mobile view
- **WHEN** user accesses page on mobile device
- **THEN** service blocks stack vertically
- **AND** text remains readable at 16px minimum
- **AND** CTAs remain tappable (minimum 44px touch target)

#### Scenario: Desktop view
- **WHEN** user accesses page on desktop
- **THEN** service blocks use optimal reading width (max 800px)
- **AND** navigation sidebar is available (if applicable)
