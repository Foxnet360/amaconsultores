## 1. Global Updates

- [x] 1.1 Global Search - [ ] 1.1 Global Search & Replace: Find all instances of "Agendar consulta gratuita (30 min)" and replace with "Agenda tu asesoría — 50€" across all files in `src/components/sections/`. Replace: Find all instances of "Agendar consulta gratuita (30 min)" and replace with "Agenda tu asesoría — 50€" across all files in `src/components/sections/`.

## 2. Hero Section (`HeroSection.jsx`)

- [x] 2.1 Remove the text "Trabajo con pocas personas a la vez para garantizar la calidad del servicio y la cercanía que tu caso necesita".
- [x] 2.2 Remove the stat counter for "1000+ Casos gestionados".
- [x] 2.3 Remove the text "Entiendo la urgencia de los procesos migratorios. Te respondo en máximo 24 horas hábiles".
- [x] 2.4 Replace the text "Colegiada tanto en España como en Colombia. Conozco los sistemas legales de ambos países desde dentro" with "Consultora especializada con red de abogados colegiados colaboradores en España y Colombia".


## 4. Contact Section (`ContactoSection.jsx`)

- [x] 4.1 Change contact email from `angela.morales@amaconsultores.eu` to `asesorias@amaconsultores.eu`.
- [x] 4.2 Remove the "Contactar por WhatsApp Colombia" button block entirely.
- [x] 4.3 Remove the text "Gestionado por Xiomara Sánchez como primer filtro de contacto".
- [x] 4.4 Replace "Respondo en un plazo de 48 horas laborables" with "Las consultas tienen coste — al contactar te informaré de las tarifas antes de comenzar".

## 5. About Us Section (`EquipoSection.jsx`)

- [x] 5.1 Replace the text "Colegiación Dual: equipo con colegiación en España y Colombia" with "Cobertura jurídica en España y Colombia. Consultora especializada con red de abogados colegiados colaboradores en ambos países".
- [x] 5.2 Refactor the team member cards to ensure a standardized, egalitarian layout (remove featured visual treatments for specific members).
- [x] 5.3 Update the biographies for Ángela, Rafael, Xiomara, and Irene to match the "TEXTO APROBADO" defined in `@Referencias/Correcciones.xml`.

## 6. Services & Legal Sections Text Updates

- [ ] 6.1 `RegularizacionSection.jsx`: Update descriptions, requirements, and prices for Arraigos and Circumstances to match `Correcciones.xml`. Add the legal disclaimer to the bottom of the section.
- [ ] 6.2 `MovilidadSection.jsx`: Update descriptions and prices for Homologación/Equivalencia and Visado Nómada Digital according to `Correcciones.xml`.
- [ ] 6.3 `ConveniosSection.jsx`: Update texts for the 5 blocks (Doble Nacionalidad, Seguridad Social, Doble Imposición, Canje de Permiso, APPRI) and ensure the new CTA is at the end of each block.
- [ ] 6.4 `ColombiaSection.jsx`: Update the visado table/list and insert the legal disclaimer about the role as a legal consultancy.
- [ ] 6.5 `EntidadesSection.jsx`: Insert the strategic introduction paragraph and specify that workers NEVER pay for being selected in the Contratación Internacional block.

## 7. Booking Integration (`AsesoriaSection.jsx`)

- [ ] 7.1 Introduce the `isTermsAccepted` state using React hooks.
- [ ] 7.2 Add a mandatory checkbox input linked to the `isTermsAccepted` state with the specific legal text and a link to `/condiciones-servicio`.
- [ ] 7.3 Replace the Calendly URL `https://calendly.com/amaconsultores-eu/asesoria-inicial-clon` with the TidyCal URL `https://tidycal.com/amaconsultores`.
- [ ] 7.4 Prevent navigation/opening of the TidyCal link if `isTermsAccepted` is false (e.g., using a disabled state on the button or an alert).
