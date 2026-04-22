## Why

The current website content contains discrepancies with the official approved texts documented in `@Referencias/Correcciones.xml`. This change is needed now to ensure all information provided to users—especially regarding legal immigration procedures, services, and team biographies—is accurate, up-to-date, and legally compliant (e.g., incorporating the RD 1155/2024 updates).

## What Changes

- Update text content across multiple sections to strictly match `Correcciones.xml` without altering the site's layout or structure.
- Rewrite descriptions, requirements, and prices for Arraigos, Reagrupación Familiar, Movilidad, and Nacionalidad.
- Update "Convenios" section with the new Call to Action (CTA) texts.
- Add the required disclaimers about AMA Consultores' role and the "carácter orientativo" of the information.
- Replace team biographies with the approved texts and standardize the visual presentation (removing special highlights).
- **BREAKING**: Replace the current Calendly booking widget with TidyCal (`tidycal.com/amaconsultores`).
- Add a mandatory acceptance checkbox for Terms and Conditions before the booking payment.

## Capabilities

### New Capabilities

- `website-texts`: Covers the strict text updates across all sections (`RegularizacionSection`, `MovilidadSection`, `ConveniosSection`, `ColombiaSection`, `EntidadesSection`, `EquipoSection`, `ContactoSection`).
- `booking-system`: Covers the integration of the TidyCal booking widget and the addition of the mandatory terms and conditions acceptance checkbox in `AsesoriaSection`.

### Modified Capabilities

- 

## Impact

- **UI Components affected**: `src/components/sections/*.jsx`
- **Dependencies**: No new external dependencies required, except changing the embed URL/script for TidyCal.
- **User Flow**: The scheduling flow changes from Calendly to TidyCal, adding an extra mandatory checkbox for terms acceptance.
