# Proceso de Solicitud de Eliminación de Datos (GDPR)

## Derecho al Olvido - Ejercicio del Derecho de Supresión

Conforme al Reglamento General de Protección de Datos (GDPR) y la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), los usuarios tienen derecho a solicitar la eliminación de sus datos personales.

## Cómo Solicitar la Eliminación de Datos

### 1. Canales de Contacto

Los usuarios pueden ejercer su derecho de supresión a través de:

- **Email**: info@amaconsultores.eu
  - Asunto: "Solicitud de eliminación de datos personales - Derecho al olvido"
  
- **Correo postal**:
  ```
  AMA Consultores
  Att: Ángela Morales (Responsable de Protección de Datos)
  [Dirección postal actualizada]
  ```

- **Teléfono**: +34 664 824 098
  - Horario: Lunes a Viernes, 9:00 - 18:00 (CET)

### 2. Información Requerida

Para procesar la solicitud, el usuario debe proporcionar:

- **Nombre completo** (como aparece en nuestros registros)
- **Email** asociado a la cuenta/servicio
- **Número de teléfono** (si está registrado)
- **Identificación** (DNI/NIE/Pasaporte) - para verificar identidad
- **Descripción específica** de los datos que desea eliminar
- **Motivo** de la solicitud (opcional pero recomendado)

### 3. Plazos de Respuesta

- **Reconocimiento de recepción**: 48 horas hábiles
- **Resolución de la solicitud**: 1 mes desde la recepción
- **Prórroga posible**: 2 meses adicionales en casos complejos (con notificación al usuario)

### 4. Proceso Interno

#### Fase 1: Verificación (Días 1-3)
- [ ] Verificar identidad del solicitante
- [ ] Confirmar datos en nuestros sistemas
- [ ] Validar legitimidad de la solicitud

#### Fase 2: Evaluación (Días 4-10)
- [ ] Identificar todos los sistemas con datos del usuario:
  - Base de datos de clientes (TidyCal)
  - Formularios de contacto (EmailJS)
  - Analytics (GA4 - datos anonimizados)
  - Facturación (Holded)
  - Copias de seguridad
- [ ] Evaluar excepciones legales de conservación
- [ ] Determinar alcance de la eliminación

#### Fase 3: Ejecución (Días 11-25)
- [ ] Eliminar datos de sistemas activos
- [ ] Anonimizar datos en sistemas históricos (si aplica)
- [ ] Notificar a terceros procesadores (TidyCal, Holded, Stripe)
- [ ] Documentar la eliminación

#### Fase 4: Confirmación (Días 26-30)
- [ ] Enviar confirmación al usuario
- [ ] Proporcionar certificado de eliminación si se solicita
- [ ] Archivar registro de la solicitud (datos mínimos)

### 5. Excepciones Legales

Según el Art. 17.3 del GDPR, podemos conservar los datos cuando sea necesario para:

- **Obligación legal**: Cumplimiento de leyes fiscales (4-10 años)
- **Ejercicio de derechos**: Defensa de reclamaciones judiciales
- **Interés público**: Obligaciones de transparencia
- **Consentimiento explícito**: Cuando el usuario haya autorizado conservación para fines específicos

### 6. Notificación a Terceros

Cuando se eliminen datos, notificaremos a los siguientes procesadores:

| Procesador | Tipo de Datos | Plazo de Eliminación |
|------------|---------------|---------------------|
| TidyCal | Citas, datos de contacto | Inmediato |
| Holded | Facturación, datos fiscales | Según ley (10 años) |
| Stripe | Datos de pago | Según PCI DSS |
| Google Analytics | Datos anonimizados | No aplicable |
| Hostinger | Logs del servidor | 30 días |

### 7. Formato de Solicitud

```
SOLICITUD DE ELIMINACIÓN DE DATOS PERSONALES

Fecha: [DD/MM/AAAA]

Yo, [Nombre completo], con DNI/NIE/Pasaporte [número], en calidad de usuario de 
los servicios de AMA Consultores, solicito el ejercicio de mi derecho de supresión 
(derecho al olvido) conforme al Artículo 17 del Reglamento General de Protección 
de Datos (GDPR).

Datos de contacto registrados:
- Email: [email@ejemplo.com]
- Teléfono: [+34 600 000 000]

Descripción de los datos a eliminar:
[Describir específicamente qué datos desea eliminar]

Motivo de la solicitud (opcional):
[Explicar brevemente por qué solicita la eliminación]

Autorizo a AMA Consultores a verificar mi identidad con la documentación 
adjunta para procesar esta solicitud.

Firma: _________________
```

### 8. Registro de Solicitudes

Todas las solicitudes de eliminación se registrarán con:

- Fecha de recepción
- Identidad del solicitante (verificada)
- Descripción de datos eliminados
- Fecha de cumplimiento
- Comunicaciones enviadas
- Excepciones aplicadas (si las hay)

**Plazo de conservación del registro**: 5 años (para acreditar cumplimiento)

### 9. Contacto del Delegado de Protección de Datos (DPD)

**Responsable**: Ángela Morales Aristizábal  
**Email**: info@amaconsultores.eu  
**Teléfono**: +34 664 824 098  
**NIF**: 55595680B

### 10. Vía de Reclamación

Si el usuario no está satisfecho con la respuesta, puede reclamar ante:

**Agencia Española de Protección de Datos (AEPD)**  
- Web: www.aepd.es  
- Teléfono: 91 266 35 17  
- Dirección: C/ Jorge Juan, 6, 28001 Madrid

---

**Última actualización**: Marzo 2026  
**Versión**: 1.0  
**Responsable**: Ángela Morales - AMA Consultores
