# Implementación de Contenido AMA Consultores

## Problem Statement

El sitio web de AMA Consultores requiere una actualización completa de su contenido según el documento de correcciones proporcionado por el cliente. El contenido actual no refleja:

1. La normativa migratoria vigente (RD 1155/2024, en vigor desde mayo 2025)
2. Los textos legales precisos con bases normativas y artículos específicos
3. Los precios actualizados de los servicios
4. La estructura de 10 secciones principales definidas por el cliente
5. Los perfiles del equipo con biografías aprobadas

Esta implementación es crítica para mantener la credibilidad legal de la consultora y asegurar que la información proporcionada a los clientes sea precisa, actualizada y conforme a la legislación española y los convenios internacionales España-Colombia.

## Proposed Solution

Reestructurar y actualizar completamente el sitio web implementando el contenido del documento Correcciones.xml, manteniendo la estética visual existente pero adaptando los componentes para soportar textos legales extensos con formato específico.

## Implementation Scope

### New Capabilities

- **colombia-services-page**: Nueva página dedicada a trámites en Colombia con 5 bloques de servicios
- **legal-content-components**: Sistema de componentes UI para mostrar textos legales (bases normativas, requisitos con listas ordenadas, disclaimers)
- **team-profiles-section**: Sección de equipo con 4 perfiles detallados incluyendo biografías aprobadas
- **tidycal-integration**: Sustitución de Calendly por TidyCal para agendamiento de asesorías

### Modified Capabilities

- **regularization-services-page**: Actualización completa con 6 bloques legales (Arraigos, Residencias, Movilidad Laboral, Protección Especial, Nacionalidad, Regularización Extraordinaria)
- **mobility-services-page**: Agregado de bloques de homologación de títulos y visado de nómada digital
- **bilateral-agreements-page**: Actualización con 5 bloques de tratados España-Colombia
- **enterprise-services-page**: Agregado de sección de contratación internacional desde Colombia
- **contact-page**: Implementación de checkbox legal obligatorio con enlace a condiciones del servicio

## Technical Requirements

### Frontend Components Required

1. **LegalCard**: Tarjeta contenedora para bloques de servicios con:
   - Título del servicio con base normativa
   - Precio destacado en badge dorado
   - Descripción legal
   - Lista de requisitos con formato de estrellas (★)
   - CTA estandarizado

2. **LegalNotice**: Componente para:
   - Bases normativas
   - Disclaimers legales
   - Notas importantes

3. **RequirementList**: Lista ordenada con:
   - Símbolos de estrella (★) como bullets
   - Formato consistente con el documento fuente

4. **PriceTag**: Badge de precio con formato consistente

### Pages to Create/Modify

| Page | Action | Complexity |
|------|--------|------------|
| `/servicios/regularizacion` | Complete rewrite | High |
| `/servicios/movilidad` | Major update | High |
| `/servicios/convenios` | Major update | Medium |
| `/servicios/colombia` | New page | Medium |
| `/servicios/empresas` | Major update | Medium |
| `/quienes-somos` | Update team section | Medium |
| `/contacto` | Add legal checkbox | Low |
| `/condiciones-servicio` | New page | Low |

### Content Structure

El documento fuente define 10 secciones principales:

1. **Regularización Migratoria**: 6 bloques con normativa RD 1155/2024
2. **Movilidad Profesional**: Homologación, orientación laboral, nómada digital
3. **Convenios España-Colombia**: 5 tratados internacionales
4. **Colombia - Trámites Internacionales**: 5 bloques de servicios en Colombia
5. **Servicios para Entidades**: Contratación, proyectos europeos, consultoría
6. **Quiénes Somos**: 4 perfiles del equipo
7. **Agenda tu Asesoría**: Integración TidyCal
8. **Contacto y Footer**: Formularios y disclaimers

## Acceptance Criteria

- [ ] Todos los textos legales coinciden exactamente con el documento Correcciones.xml
- [ ] Las bases normativas (artículos, RD, leyes) están correctamente citadas
- [ ] Los precios (380€, 500€, 1.200€, etc.) están visibles y correctos
- [ ] Los CTAs siguen el patrón: "Agenda tu asesoría — 50€"
- [ ] El checkbox legal está presente en el formulario de contacto
- [ ] TidyCal reemplaza a Calendly completamente
- [ ] Los perfiles del equipo incluyen las biografías aprobadas
- [ ] Los disclaimers legales están presentes en todas las secciones requeridas
- [ ] La navegación entre secciones es intuitiva
- [ ] El diseño mantiene la estética dorado/azul marino existente

## Dependencies

- TidyCal configurado en `tidycal.com/amaconsultores`
- Fotos del equipo (Angela y Xiomara disponibles, placeholders para Rafael e Irene)
- Aprobación final del contenido por parte de AMA Consultores

## Out of Scope

- Cambios en el diseño visual general (colores, tipografía)
- Implementación de funcionalidades de backend adicionales
- Optimización SEO avanzada
- Traducción a otros idiomas

## Estimated Effort

- **Total**: 12-16 horas de trabajo
- **Fase 1** (Regularización): 4 horas
- **Fase 2** (Movilidad + Convenios): 3 horas
- **Fase 3** (Colombia + Empresas): 3 horas
- **Fase 4** (Equipo + Contacto + TidyCal): 2-3 horas
- **Revisión y ajustes**: 2 horas
