## Context

The website texts are currently out of sync with the officially approved document (`@Referencias/Correcciones.xml`). In addition to content discrepancies, several explicit directives require removing legacy elements (such as old counters and specific text phrases) and updating global UI components (such as the main CTA button and the testimonials block). Furthermore, the booking infrastructure must migrate from Calendly to TidyCal, alongside the introduction of a mandatory terms and conditions acceptance step.

## Goals / Non-Goals

**Goals:**
- Update all text strings across the sections (`HeroSection`, `RegularizacionSection`, `MovilidadSection`, `ConveniosSection`, `ColombiaSection`, `EntidadesSection`, `EquipoSection`, `ContactoSection`) exactly as specified in the reference document and the user's explicit instructions.
- Ensure all "Agenda tu asesoría" buttons display "Agenda tu asesoría — 50€".
- Strip out the "1000+ Casos gestionados" counter and other deprecated texts without replacing them.
- 
- Migrate the scheduling link from Calendly to TidyCal (`tidycal.com/amaconsultores`).
- Implement a mandatory acceptance checkbox for the terms of service in `AsesoriaSection` prior to allowing users to proceed to the scheduling/payment step.
- Update the "Quiénes Somos" (`EquipoSection`) to present all team members identically, without specialized highlight styling for any individual.

**Non-Goals:**
- Do not alter the fundamental Tailwind layout, color scheme, or base React component structure unless absolutely required to accommodate the new texts or the Google Reviews widget.
- Do not refactor the global routing or state management.

## Decisions

1. **Text Replacements Strategy**:
   - I will systematically go through each component in `src/components/sections/` and perform exact string replacements or block replacements. This ensures we don't break existing Tailwind classes.

2. **Google Reviews Integration**:
   - The user provided a Google Share link (`https://share.google/DEa6IseNd3BYt2Hn0`). Since directly embedding a raw Google Maps share link via an `iframe` can sometimes be restrictive or require an API key for dynamic widgets, I will design a clean, static representation of the reviews that links out to that URL, or use a standard embed if a specific third-party widget script was intended. *Decision:* Create a clean static CTA block in `ReviewsSection` that reads "Mira nuestras reseñas reales en Google" with a button pointing to the provided URL, replacing the hardcoded cards. This avoids the complexity and potential API costs/CORS issues of fetching raw Google Reviews dynamically on the client side without a dedicated backend or paid widget service like Elfsight.

3. **TidyCal & Checkbox Implementation (`AsesoriaSection`)**:
   - Currently, the Calendly integration likely uses a simple URL open or an iframe. We will replace the URL with the TidyCal URL.
   - We will introduce a React state variable (`isTermsAccepted`, set to `false` initially).
   - The "Agenda tu asesoría" button will be disabled or will show an alert if clicked when `isTermsAccepted` is false.
   - A checkbox input will be added right above the CTA button, linking to `/condiciones-servicio`.

4. **Team Members Presentation (`EquipoSection`)**:
   - The current implementation might feature a prominent card for the CEO and smaller cards for the rest. I will flatten the data structure and mapping so that all four members are rendered using the exact same Card component structure.

## Risks / Trade-offs

- **[Risk] Google Reviews Link**: Directing users away from the site to see reviews might increase bounce rate.
  - *Mitigation*: Ensure the link opens in a new tab (`target="_blank" rel="noopener noreferrer"`).
- **[Risk] Unintended Style Changes**: Flattening the `EquipoSection` might result in a broken grid layout if the CSS expects a specific "featured" item.
  - *Mitigation*: Ensure the grid uses standard Tailwind responsive columns (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) to accommodate all 4 cards evenly.
