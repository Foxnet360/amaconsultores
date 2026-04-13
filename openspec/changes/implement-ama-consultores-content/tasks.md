# Tasks: Implementación de Contenido AMA Consultores

## 1. Componentes Legales Base

- [x] 1.1 Crear directorio `src/components/legal/`
- [x] 1.2 Implementar `LegalCard.jsx` con props: title, article, baseNormativa, price, description, requirements, duration
- [x] 1.3 Implementar `LegalNotice.jsx` para bases normativas y disclaimers
- [x] 1.4 Implementar `RequirementList.jsx` con símbolos ★ y formato consistente
- [x] 1.5 Implementar `PriceTag.jsx` como badge dorado estandarizado
- [x] 1.6 Crear archivo de estilos compartidos `src/components/legal/styles.js`
- [x] 1.7 Testear componentes con datos de muestra

## 2. Estructura de Datos

- [x] 2.1 Crear directorio `src/data/`
- [x] 2.2 Crear `src/data/regularization-services.js` con 6 bloques (arraigos, residencias, etc.)
- [x] 2.3 Crear `src/data/mobility-services.js` con homologación y nómada digital
- [x] 2.4 Crear `src/data/colombia-services.js` con 5 bloques de trámites en Colombia
- [x] 2.5 Crear `src/data/convenios-services.js` con 5 tratados España-Colombia
- [x] 2.6 Crear `src/data/enterprise-services.js` con contratación internacional
- [x] 2.7 Crear `src/data/team-profiles.js` con 4 perfiles del equipo
- [x] 2.8 Validar que todos los textos coincidan exactamente con Correcciones.xml

## 3. Página: Regularización Migratoria

- [x] 3.1 Actualizar `src/pages/services/RegularizacionPage.jsx`
- [x] 3.2 Agregar hero section con título y subtítulo del documento
- [x] 3.3 Implementar nota legal inicial: "Normativa vigente: RD 1155/2024..."
- [x] 3.4 Crear sección "Bloque 1 — Arraigos" con 5 tipos de arraigo
- [x] 3.5 Crear sección "Bloque 2 — Residencias por Circunstancias Excepcionales"
- [x] 3.6 Crear sección "Bloque 3 — Movilidad Laboral"
- [x] 3.7 Crear sección "Bloque 4 — Protección Especial"
- [x] 3.8 Crear sección "Bloque 5 — Nacionalidad"
- [x] 3.9 Crear sección "Bloque 6 — Regularización Extraordinaria 2026"
- [x] 3.10 Agregar disclaimer final obligatorio
- [x] 3.11 Agregar CTAs "Agenda tu asesoría — 50€" en cada bloque
- [x] 3.12 Testear navegación por anclajes (#arraigos, #residencias, etc.)

## 4. Página: Movilidad Profesional

- [x] 4.1 Actualizar página de servicios de movilidad (crear o actualizar)
- [x] 4.2 Crear "Bloque 1 — Homologación y Equivalencia de Títulos"
- [x] 4.3 Agregar tabla de precios de homologación
- [x] 4.4 Crear "Bloque 2 — Orientación Laboral y Acceso a Empleo"
- [x] 4.5 Crear "Bloque 3 — Visado de Nómada Digital"
- [x] 4.6 Agregar información de Ley Beckham (24% IRPF)
- [x] 4.7 Agregar CTAs en cada bloque
- [x] 4.8 Testear responsive design

## 5. Página: Convenios España-Colombia

- [x] 5.1 Actualizar página de convenios
- [x] 5.2 Crear "Bloque 1 — Doble Nacionalidad" (Convenio Madrid 1979)
- [x] 5.3 Crear "Bloque 2 — Seguridad Social y Pensiones" (Convenio Bogotá 2005)
- [x] 5.4 Crear "Bloque 3 — Doble Imposición Fiscal" (Convenio Bogotá 2005)
- [x] 5.5 Crear "Bloque 4 — Canje de Permiso de Conducción"
- [x] 5.6 Crear "Bloque 5 — Protección Recíproca de Inversiones (APPRI)"
- [x] 5.7 Agregar CTA final de sección
- [x] 5.8 Verificar todos los enlaces a documentos legales

## 6. Página: Colombia (Nueva)

- [x] 6.1 Crear archivo `src/pages/services/ColombiaPage.jsx`
- [x] 6.2 Configurar ruta `/servicios/colombia` en router
- [x] 6.3 Agregar disclaimer legal de operación en Colombia
- [x] 6.4 Crear "Bloque 1 — Visados para Colombia"
- [x] 6.5 Crear "Bloque 2 — Trámites ante Migración Colombia"
- [x] 6.6 Crear "Bloque 3 — Apostillas y Legalizaciones"
- [x] 6.7 Crear "Bloque 4 — Regularización de Situación Migratoria"
- [x] 6.8 Crear "Bloque 5 — Retorno"
- [x] 6.9 Agregar enlaces desde otras páginas a esta nueva página
- [x] 6.10 Testear navegación y breadcrumbs

## 7. Página: Servicios para Empresas

- [x] 7.1 Actualizar `src/pages/services/EmpresasPage.jsx`
- [x] 7.2 Agregar introducción sobre cooperación bilateral
- [x] 7.3 Crear "Bloque 1 — Contratación Internacional desde Colombia"
- [x] 7.4 Crear "Bloque 2 — ¿Por qué contratar talento colombiano?"
- [x] 7.5 Crear "Bloque 3 — ¿Cuánto cuesta y quién paga qué?"
- [x] 7.6 Crear "Bloque 4 — ¿Es legal? ¿Qué garantías tiene el proceso?"
- [x] 7.7 Crear "Bloque 5 — Proyectos con Financiación Pública y Europea"
- [x] 7.8 Crear "Bloque 6 — Consultoría para el Tercer Sector"
- [x] 7.9 Agregar CTAs "Cuéntanos tu caso — te enviamos propuesta"
- [x] 7.10 Agregar formulario de contacto específico para empresas

## 8. Página: Quiénes Somos

- [x] 8.1 Actualizar `src/pages/TeamPage.jsx`
- [x] 8.2 Crear componente `TeamMember.jsx` reutilizable
- [x] 8.3 Implementar perfil de Ángela Morales (con foto)
- [x] 8.4 Implementar perfil de Rafael Reyes (placeholder RR #4A5568)
- [x] 8.5 Implementar perfil de Xiomara Sánchez (con foto)
- [x] 8.6 Implementar perfil de Irene Hernández (placeholder IH #4A5568)
- [x] 8.7 Agregar fotos al directorio `public/team/`
- [x] 8.8 Optimizar fotos para web (WebP, 800x800px)
- [x] 8.9 Agregar sección de colegiación dual
- [x] 8.10 Testear layout en móviles (cards apiladas)

## 9. Integración TidyCal

- [x] 9.1 Verificar URL de TidyCal: `tidycal.com/amaconsultores`
- [x] 9.2 Crear componente `TidyCalEmbed.jsx`
- [x] 9.3 Implementar iframe con altura ajustable (800px)
- [x] 9.4 Agregar fallback en caso de error de carga
- [x] 9.5 Crear página `/agenda` con TidyCal integrado
- [x] 9.6 Agregar ruta `/agenda` en router
- [x] 9.7 Implementar checkbox legal en página de agenda
- [x] 9.8 Verificar que el precio de 50€ esté visible

## 10. Página: Condiciones del Servicio (Nueva)

- [x] 10.1 Crear archivo `src/pages/CondicionesServicioPage.jsx`
- [x] 10.2 Configurar ruta `/condiciones-servicio` en router
- [x] 10.3 Agregar contenido legal completo de condiciones
- [x] 10.4 Agregar sección: honorarios y pagos
- [x] 10.5 Agregar sección: alcance de la consultoría
- [x] 10.6 Agregar sección: obligación de medios (no de resultados)
- [x] 10.7 Agregar sección: política de cancelación
- [x] 10.8 Agregar información de protección de datos (RGPD)
- [x] 10.9 Agregar datos de registro mercantil/colegial
- [x] 10.10 Testear enlaces desde checkbox de contacto

## 11. Página: Contacto

- [x] 11.1 Actualizar `src/pages/ContactPage.jsx`
- [x] 11.2 Agregar checkbox legal obligatorio antes del botón de envío
- [x] 11.3 Checkbox: "He leído y acepto las Condiciones Generales..."
- [x] 11.4 Enlazar checkbox a `/condiciones-servicio`
- [x] 11.5 Validar que checkbox esté marcado antes de permitir envío
- [x] 11.6 Agregar mensaje de confirmación tras envío
- [x] 11.7 Testear validación del formulario completo
- [x] 11.8 Verificar que el mensaje incluya información sobre costos

## 12. Navegación y UX

- [ ] 12.1 Actualizar menú de navegación principal
- [ ] 12.2 Agregar enlace a nueva página Colombia
- [ ] 12.3 Agregar breadcrumbs en páginas de servicios
- [ ] 12.4 Implementar scroll suave entre secciones (#anclas)
- [ ] 12.5 Agregar "Volver arriba" en páginas largas
- [ ] 12.6 Verificar que todos los CTAs sean visibles y funcionales
- [ ] 12.7 Testear navegación en móviles (menú hamburguesa)

## 13. Testing y QA

- [ ] 13.1 Validar que todos los textos legales coincidan con Correcciones.xml
- [ ] 13.2 Verificar que todas las bases normativas estén correctamente citadas
- [ ] 13.3 Comprobar que los precios (380€, 500€, 1.200€) sean correctos
- [ ] 13.4 Testear responsive en: mobile (375px), tablet (768px), desktop (1440px)
- [ ] 13.5 Ejecutar Lighthouse y obtener score >90 en performance y accesibilidad
- [ ] 13.6 Verificar contraste de colores (WCAG 2.1 AA)
- [ ] 13.7 Testear con screen reader (NVDA/VoiceOver)
- [ ] 13.8 Verificar que no haya errores en consola
- [ ] 13.9 Testear en Chrome, Firefox, Safari, Edge
- [ ] 13.10 Verificar que todos los enlaces externos funcionen

## 14. Deploy y Entrega

- [ ] 14.1 Crear branch `feature/ama-consultores-content`
- [ ] 14.2 Hacer commit de todos los cambios
- [ ] 14.3 Ejecutar `npm run build` y verificar que no haya errores
- [ ] 14.4 Deploy a entorno de staging
- [ ] 14.5 Compartir URL de staging con cliente para revisión
- [ ] 14.6 Recopilar feedback del cliente
- [ ] 14.7 Realizar ajustes según feedback
- [ ] 14.8 Deploy a producción
- [ ] 14.9 Verificar funcionamiento en producción
- [ ] 14.10 Documentar cambios para el cliente
