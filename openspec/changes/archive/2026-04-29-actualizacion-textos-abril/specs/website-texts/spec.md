## ADDED Requirements

### Requirement: Update General Site Texts
The system MUST update global and section-specific texts to match the exact wording provided in `@Referencias/Correcciones.xml`, without altering the underlying component structure or layout.

#### Scenario: Global Button Updates
- **WHEN** a user views any page with the main call-to-action button
- **THEN** the button text must display "Agenda tu asesoría — 50€" instead of "Agendar consulta gratuita (30 min)"

#### Scenario: Hero Section Cleanup
- **WHEN** a user visits the homepage (`HeroSection`)
- **THEN** the following texts must be removed without replacement:
  - "Trabajo con pocas personas a la vez para garantizar la calidad del servicio y la cercanía que tu caso necesita"
  - The counter "1000+ Casos gestionados"
  - "Entiendo la urgencia de los procesos migratorios. Te respondo en máximo 24 horas hábiles"
- **THEN** the text "Colegiada tanto en España como en Colombia. Conozco los sistemas legales de ambos países desde dentro" must be replaced with "Consultora especializada con red de abogados colegiados colaboradores en España y Colombia"

#### Scenario: Contact Section Updates
- **WHEN** a user visits the Contact section (`ContactoSection`)
- **THEN** the email address must be updated to `asesorias@amaconsultores.eu` (from `angela.morales@amaconsultores.eu`)
- **THEN** the button "Contactar por WhatsApp Colombia" must be removed without replacement
- **THEN** the text "Gestionado por Xiomara Sánchez como primer filtro de contacto" must be removed without replacement
- **THEN** the text "Respondo en un plazo de 48 horas laborables" must be replaced with "Las consultas tienen coste — al contactar te informaré de las tarifas antes de comenzar"

#### Scenario: About Us Section Updates
- **WHEN** a user visits the About Us section (`EquipoSection`)
- **THEN** the "Colegiación Dual" block must be replaced with "Cobertura jurídica en España y Colombia. Consultora especializada con red de abogados colegiados colaboradores en ambos países"
- **THEN** the four team member biographies must exactly match the "TEXTO APROBADO" blocks provided in `@Referencias/Correcciones.xml`
- **THEN** all four team member cards must use a standard, egalitarian visual format without special visual treatments for any individual

#### Scenario: Services and Procedures Updates
- **WHEN** a user views sections for Regularización, Movilidad, Convenios, Colombia, and Entidades
- **THEN** all descriptions, requirements, base normative, and prices must exactly match the blocks defined in `@Referencias/Correcciones.xml`
- **THEN** the appropriate disclaimers must be included at the bottom of the relevant sections (e.g., the orientative character disclaimer in Regularización, the legal consultation disclaimer in Colombia)
