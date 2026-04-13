# Contact Page

## Overview
Nueva página de contacto sencilla y directa, sin formularios largos, con información clara sobre costos y tiempos de respuesta.

## Requirements

### REQ-001: Contact Header
**Priority**: High

Título principal:
**"¿Hablamos? Cuéntame tu situación."**

**Acceptance Criteria**:
- [ ] Título visible y destacado
- [ ] Tono cercano y personal

### REQ-002: Contact Form
**Priority**: High

Formulario mínimo con campos:
- **Nombre** (requerido)
- **Email** (requerido, validación de email)
- **País de residencia actual** (requerido)
- **Mensaje breve** (requerido, textarea)

**Acceptance Criteria**:
- [ ] 4 campos visibles y funcionales
- [ ] Validación de campos requeridos
- [ ] Validación de formato de email
- [ ] Submit envía a: info@amaconsultores.eu
- [ ] Mensaje de confirmación tras envío

### REQ-003: WhatsApp Integration
**Priority**: High

Mostrar contacto de WhatsApp Business Colombia:

**WhatsApp Colombia:** +57 301 717 4478
- Gestionado por Xiomara Sánchez como primer filtro de contacto
- Botón que abre WhatsApp Web/App con mensaje predefinido

**Mensaje predefinido:**
"Hola, soy [nombre]. Vivo en [país] y me gustaría consultar sobre [servicio]."

**Acceptance Criteria**:
- [ ] Número visible
- [ ] Botón "Contactar por WhatsApp" funcional
- [ ] Mensaje predefinido incluye campos del formulario

### REQ-004: Contact Information
**Priority**: High

Mostrar información completa:

**Email principal:** angela.morales@amaconsultores.eu
**Email general:** info@amaconsultores.eu
**Teléfono España:** +34 664 824 098 (también WhatsApp)
**Teléfono Colombia:** +57 301 717 4478

**Acceptance Criteria**:
- [ ] Todos los contactos visibles
- [ ] Enlaces mailto: funcionales
- [ ] Enlaces tel: funcionales en mobile
- [ ] Iconos correspondientes (email, phone)

### REQ-005: Cost Warning
**Priority**: High

Aviso visible:

> "Respondo en un plazo de 48 horas laborables. Las consultas tienen coste — al contactar te informaré de las tarifas antes de comenzar."

**Acceptance Criteria**:
- [ ] Aviso visible destacado (alerta o caja destacada)
- [ ] Texto exacto según especificación
- [ ] No prometer respuesta inmediata ni gratuita

### REQ-006: Page SEO
**Priority**: Medium

- **Title**: "Contacto — AMA Consultores | Consultoría en Migraciones"
- **Description**: "Contacta con AMA Consultores para consultas sobre migraciones España y Colombia. Respuesta en 48h."

**Acceptance Criteria**:
- [ ] Title tag configurado
- [ ] Meta description configurada

## Implementation Notes

- Usar shadcn/ui: Input, Textarea, Button, Alert
- Form validation con React Hook Form o validación nativa
- WhatsApp link format: `https://wa.me/573017174478?text=encodedMessage`
- Diseño responsive: formulario arriba, info de contacto abajo en mobile
