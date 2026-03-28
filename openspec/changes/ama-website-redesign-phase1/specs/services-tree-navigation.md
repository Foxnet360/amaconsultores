# Services Tree Navigation

## Overview
Sistema de navegación por árbol de decisión que permite a los usuarios filtrar servicios según sean personas o entidades, y luego por país o tipo de servicio.

## Requirements

### REQ-001: Initial Decision Tree
**Priority**: High

Al entrar a /servicios, mostrar selector inicial:

**"¿Con quién quiero hablar?"**

- [🙋 Soy una persona]
- [🏢 Soy una entidad]

**Acceptance Criteria**:
- [ ] Selector visible al cargar la página
- [ ] Dos opciones claramente diferenciadas
- [ ] Al seleccionar, se muestra la rama correspondiente
- [ ] URL se actualiza: /servicios?type=personas o /servicios?type=entidades

### REQ-002: Personas Branch - Spain
**Priority**: High

Si el usuario selecciona "Personas" → "España", mostrar:

**Movilidad Profesional:**
- Homologación de títulos
- Reconocimiento de cualificaciones
- Orientación laboral y acceso a empleo cualificado

**Regularización Migratoria:**
- Arraigo social, laboral y familiar
- Reagrupación familiar
- Residencia por circunstancias excepcionales
- Renovaciones y otros trámites

**Documentos en Orden:**
- Títulos universitarios y académicos
- Documentos públicos: partidas de nacimiento, matrimonio, defunción, sentencias judiciales
- Documentos privados que requieren reconocimiento oficial
- Certificados de antecedentes penales con fines migratorios (España y Colombia)
- Escrituras públicas: compraventa, poderes notariales, capitulaciones
- Certificados de estado civil
- Documentos administrativos y oficiales

**Mensaje de cierre:**
> "¿No ves lo que necesitas en esta lista? Cuéntame qué documento necesitas gestionar y te digo si puedo ayudarte."

+ botón [PREGÚNTAME] → abre formulario de contacto

**Acceptance Criteria**:
- [ ] Sección España visible y completa
- [ ] Cada servicio tiene descripción detallada
- [ ] Sección "Documentos en Orden" con lista completa
- [ ] Botón "Pregúntame" funcional

### REQ-003: Personas Branch - Colombia
**Priority**: High

Si el usuario selecciona "Personas" → "Colombia", mostrar:

**Vivir en Colombia:**
- Visados para extranjeros
- Tipos de residencia y requisitos según nacionalidad
- Trámites ante Migración Colombia
- Apostillas y legalizaciones de documentos para Colombia

**Mensaje de cierre:**
> "Trabajo de forma personalizada. Los servicios tienen coste — porque mi tiempo y experiencia tienen valor, y tú mereces un acompañamiento serio. Para actuaciones que requieren firma letrada, coordino con mi abogado de confianza."

+ botón [CONTACTAR PARA PRESUPUESTO]

**Acceptance Criteria**:
- [ ] Sección Colombia visible y completa
- [ ] Mensaje de cierre visible
- [ ] Botón de contacto funcional

### REQ-004: Entidades Branch - Proyectos Europeos
**Priority**: High

Si el usuario selecciona "Entidades" → "Proyectos europeos", mostrar:

**Experiencia destacada:**
- **Save the Children España:** Gestión del programa IMPULSA-CPI (Caixa ProInfancia) con presupuesto de +2M€. Coordinación de equipo de 65 profesionales.

- **Proyecto 'Formar para Cuidar' — Colombia:** Cooperación internacional MAEC/UE. 67 beneficiarios en comunidades rurales remotas. Formación en DDHH, asilo y protección internacional.

**Servicios:**
- Identificación de convocatorias europeas y privadas
- Formulación y redacción técnica
- Gestión y coordinación de equipos
- Justificación técnica y económica
- Informes y memorias

**Acceptance Criteria**:
- [ ] Casos de éxito visibles
- [ ] Lista de servicios completa
- [ ] Formato profesional y atractivo

### REQ-005: Entidades Branch - Asesoría Migratoria
**Priority**: High

Si el usuario selecciona "Entidades" → "Asesoría en migraciones", mostrar:

- Apoyo técnico especializado a entidades que trabajan con población migrante y refugiada
- Formación interna en derecho migratorio y protección internacional
- Diseño de protocolos de atención a personas en situación de vulnerabilidad migratoria

**Acceptance Criteria**:
- [ ] Servicios listados claramente
- [ ] Enfoque en entidades y ONGs

### REQ-006: Navigation Between Branches
**Priority**: Medium

Permitir navegación fácil entre:
- Personas ↔ Entidades
- España ↔ Colombia (dentro de Personas)
- Proyectos ↔ Asesoría (dentro de Entidades)

**Acceptance Criteria**:
- [ ] Navegación persistente entre ramas
- [ ] Estado actual visualmente destacado
- [ ] Transiciones suaves entre secciones

## Implementation Notes

- Usar React Router useSearchParams para manejar estado de URL
- Usar Tabs de shadcn/ui para navegación entre opciones
- Usar Accordion para detalles expandibles de servicios
- Implementar smooth scroll a secciones específicas
