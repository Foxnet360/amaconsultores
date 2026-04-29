## ADDED Requirements

### Requirement: LegalCard Component
The system SHALL provide a LegalCard component for displaying legal service blocks with consistent formatting.

#### Scenario: LegalCard rendering
- **WHEN** system renders a LegalCard with service data
- **THEN** it displays:
  - **AND** service title with normative base reference
  - **AND** price badge with gold styling
  - **AND** detailed legal description text
  - **AND** RequirementsList component
  - **AND** standardized CTA button

### Requirement: LegalNotice Component
The system SHALL provide a LegalNotice component for displaying normative bases, disclaimers, and legal notes.

#### Scenario: LegalNotice for normative bases
- **WHEN** system displays legal basis information
- **THEN** LegalNotice renders:
  - **AND** section title (e.g., "Base Normativa")
  - **AND** list of applicable laws, RDs, and articles
  - **AND** visual distinction from main content (italics, smaller font, or bordered box)

#### Scenario: LegalNotice for disclaimers
- **WHEN** system displays legal disclaimers
- **THEN** LegalNotice renders:
  - **AND** disclaimer icon (⚠️ or similar)
  - **AND** disclaimer text in prominent but subtle styling
  - **AND** reference to full terms and conditions

### Requirement: RequirementList Component
The system SHALL provide a RequirementList component with star bullet formatting.

#### Scenario: Star bullet list rendering
- **WHEN** system renders a list of requirements
- **THEN** each item is prefixed with ★ symbol
- **AND** items maintain consistent spacing
- **AND** list is semantically an HTML ordered or unordered list

#### Scenario: Nested requirements
- **WHEN** requirements have hierarchical structure
- **THEN** nested items use indentation
- **AND** maintain star bullet format at all levels

### Requirement: PriceTag Component
The system SHALL provide a PriceTag component for consistent price display.

#### Scenario: Price display
- **WHEN** system displays a service price
- **THEN** PriceTag renders:
  - **AND** price amount in bold
  - **AND** currency symbol (€)
  - **AND** gold color scheme (#d4af37)
  - **AND** optional label (e.g., "Desde", "Hasta")

#### Scenario: Price variations
- **WHEN** price has variations (range, "desde", "hasta")
- **THEN** PriceTag handles format: "Desde €380"
- **AND** "Hasta €1.200"
- **AND** "€500" (fixed price)

### Requirement: CTA Button Standardization
All CTAs SHALL follow a standardized pattern across legal content.

#### Scenario: Legal CTA rendering
- **WHEN** system renders CTA in legal context
- **THEN** button displays: "Agenda tu asesoría — 50€"
- **AND** links to TidyCal scheduling page
- **AND** uses consistent button styling (gold border/text or filled)

### Requirement: Typography for Legal Content
Legal text SHALL use appropriate typography for readability.

#### Scenario: Legal text formatting
- **WHEN** displaying legal descriptions
- **THEN** text uses:
  - **AND** readable font size (minimum 16px)
  - **AND** appropriate line height (1.6-1.8)
  - **AND** proper paragraph spacing
  - **AND** bold for key legal terms
  - **AND** italics for Latin legal terms and citations

### Requirement: Component Accessibility
All legal content components SHALL meet WCAG 2.1 AA accessibility standards.

#### Scenario: Screen reader compatibility
- **WHEN** user uses screen reader
- **THEN** all legal content is announced properly
- **AND** headings follow hierarchy (h1 → h2 → h3)
- **AND** lists use proper list markup
- **AND** prices include aria-label for clarity

#### Scenario: Keyboard navigation
- **WHEN** user navigates via keyboard
- **THEN** all interactive elements are reachable
- **AND** focus indicators are visible
- **AND** tab order follows visual order
