## ADDED Requirements

### Requirement: TidyCal Integration
The system SHALL replace all Calendly integrations with TidyCal for appointment scheduling.

#### Scenario: TidyCal widget embedding
- **WHEN** user clicks "Agenda tu asesoría" CTA
- **THEN** TidyCal scheduling widget loads
- **AND** widget is embedded at `tidycal.com/amaconsultores`
- **AND** widget displays available time slots

### Requirement: TidyCal Configuration
TidyCal SHALL be configured with appropriate services and pricing.

#### Scenario: Service configuration
- **WHEN** TidyCal loads
- **THEN** it displays configured services:
  - **AND** "Asesoría Legal Migratoria — 50€"
  - **AND** Duration: 30-45 minutes
  - **AND** Payment integration configured
  - **AND** Cancellation/rescheduling policies displayed

#### Scenario: Pricing display
- **WHEN** user views booking options
- **THEN** price of 50€ is clearly displayed
- **AND** currency is EUR
- **AND** payment methods are indicated

### Requirement: CTA Links Update
All CTAs linking to scheduling SHALL point to TidyCal.

#### Scenario: CTA link verification
- **WHEN** user clicks any "Agenda tu asesoría" button
- **THEN** link directs to `https://tidycal.com/amaconsultores`
- **AND** no references to Calendly remain in codebase

#### Scenario: Multiple CTA locations
- **WHEN** reviewing all site CTAs
- **THEN** every scheduling CTA uses TidyCal URL
- **AND** CTAs appear on: Services pages, Colombia page, Contact page, Hero sections

### Requirement: TidyCal Widget Styling
TidyCal widget SHALL match site aesthetic or use native styling appropriately.

#### Scenario: Widget appearance
- **WHEN** TidyCal widget loads
- **THEN** it displays professionally
- **AND** loading state is handled gracefully
- **AND** error state shows fallback message with contact info

### Requirement: Mobile Responsiveness
TidyCal widget SHALL be fully functional on mobile devices.

#### Scenario: Mobile booking
- **WHEN** user accesses TidyCal on mobile
- **THEN** widget is responsive
- **AND** calendar is touch-friendly
- **AND** form fields are mobile-optimized
- **AND** time slot selection works on touch devices

### Requirement: Fallback for TidyCal Unavailability
The system SHALL provide fallback if TidyCal is unavailable.

#### Scenario: Widget load failure
- **WHEN** TidyCal widget fails to load
- **THEN** display message: "Para agendar, contáctanos directamente"
- **AND** show contact email: info@amaconsultores.es
- **AND** show phone: [phone number]
- **AND** provide link to contact form

### Requirement: Analytics Tracking
TidyCal interactions SHALL be trackable for analytics.

#### Scenario: Booking conversion tracking
- **WHEN** user completes TidyCal booking
- **THEN** conversion event is tracked (if analytics configured)
- **AND** booking source (page) is recorded
- **AND** service type is recorded
