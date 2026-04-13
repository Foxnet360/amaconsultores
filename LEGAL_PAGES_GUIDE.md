# Guía de Actualización de Páginas Legales

## ⚖️ Importancia de las Páginas Legales

Las páginas legales son **obligatorias por ley** (LSSI, GDPR) y deben mantenerse actualizadas. Cualquier cambio en:
- Datos de contacto de la empresa
- Procesadores de datos
- Finalidades del tratamiento
- Plazos de conservación

...debe reflejarse inmediatamente en estas páginas.

---

## 📝 Estructura de Páginas Legales

### 1. Política de Privacidad
**Archivo**: `src/pages/PoliticaPrivacidadPage.jsx`

**Contenido obligatorio** (GDPR):
- ✅ Responsable del tratamiento
- ✅ Finalidad del tratamiento
- ✅ Base legal
- ✅ Destinatarios
- ✅ Derechos del usuario
- ✅ Procedencia de datos
- ✅ Plazo de conservación
- ✅ Medidas de seguridad

### 2. Aviso Legal
**Archivo**: `src/pages/AvisoLegalPage.jsx`

**Contenido obligatorio** (LSSI):
- ✅ Denominación social
- ✅ NIF/CIF
- ✅ Domicilio social
- ✅ Datos de inscripción (Registro Mercantil)
- ✅ CNAE
- ✅ Email de contacto
- ✅ Objeto social
- ✅ Exclusión de responsabilidad
- ✅ Jurisdicción aplicable

### 3. Política de Cookies
**Archivo**: `src/pages/PoliticaCookiesPage.jsx`

**Contenido obligatorio** (ePrivacy):
- ✅ Definición de cookies
- ✅ Tipos de cookies utilizadas
- ✅ Finalidad de cada cookie
- ✅ Cómo desactivar cookies
- ✅ Terceros (Google Analytics, etc.)
- ✅ Consentimiento

---

## 🔄 Proceso de Actualización

### Cuándo Actualizar

**Inmediatamente** (dentro de 24-48h):
- Cambio de dirección de la empresa
- Cambio de email o teléfono de contacto
- Nuevo procesador de datos (añadir a lista)
- Brecha de seguridad

**Mensualmente**:
- Revisar lista de cookies (si añades nuevas)
- Verificar enlaces a políticas de terceros

**Trimestralmente**:
- Revisar bases legales (cambios normativos)
- Actualizar plazos de conservación si cambian leyes
- Revisar derechos de usuarios

### Cómo Actualizar

#### Paso 1: Identificar cambios
Revisa qué información ha cambiado:
```
□ Datos de contacto
□ Procesadores de datos
□ Cookies utilizadas
□ Plazos de conservación
□ Base legal
```

#### Paso 2: Actualizar archivos

**Ejemplo: Cambio de email**

En TODAS las páginas legales:

**Política de Privacidad**:
```javascript
<div className="...">
  <p>Email:{' '}
    <a href="mailto:nuevoemail@amaconsultores.eu" className="text-gold-500 hover:underline">
      nuevoemail@amaconsultores.eu  // <-- ACTUALIZAR
    </a>
  </p>
</div>
```

**Aviso Legal**:
```javascript
<ul className="list-disc pl-6 mb-6">
  <li><strong>Email:</strong> nuevoemail@amaconsultores.eu</li>  // <-- ACTUALIZAR
</ul>
```

#### Paso 3: Actualizar fecha

En TODAS las páginas:
```javascript
<p className="text-sm text-gray-500 mb-8">
  Última actualización: [FECHA ACTUAL]  // <-- ACTUALIZAR
</p>
```

#### Paso 4: Verificar consistencia

Asegúrate de que:
- ✅ El mismo email en todas las páginas
- ✅ La misma dirección en todas las páginas
- ✅ Los mismos datos de contacto en todas las páginas
- ✅ Fecha de actualización coherente

#### Paso 5: Build y deploy

```bash
npm run build
# Subir dist/ a Hostinger
```

---

## 📋 Casos Comunes de Actualización

### Caso 1: Añadir Nuevo Procesador de Datos

**Ejemplo**: Añadir nuevo servicio de email marketing (ej: Mailchimp)

**En Política de Privacidad**:
```javascript
<li>
  <strong>Mailchimp (Intuit Inc.):</strong> Envío de newsletters. 
  Datos tratados: email, nombre. 
  <br/>
  <a href="https://mailchimp.com/legal/privacy/" className="text-gold-500 hover:underline" target="_blank" rel="noopener noreferrer">
    Política de privacidad de Mailchimp
  </a>
</li>
```

### Caso 2: Cambio en Cookies

**Ejemplo**: Añadir cookie de chat en vivo

**En Política de Cookies**:
```javascript
<tr>
  <td className="border border-gray-300 px-4 py-2">_chat_widget</td>
  <td className="border border-gray-300 px-4 py-2">Chat en vivo - Sesión del usuario</td>
  <td className="border border-gray-300 px-4 py-2">Sesión</td>
</tr>
```

**En Cookie Consent Banner**:
Actualizar si es cookie opcional vs necesaria.

### Caso 3: Cambio de Plazo de Conservación

**Ejemplo**: Ley cambia de 6 a 5 años

**En Política de Privacidad**:
```javascript
<ul className="list-disc pl-6 mb-6">
  <li><strong>Datos de facturación:</strong> 5 años (conforme a la nueva Ley General Tributaria, art. 66)</li>  // <-- ACTUALIZAR
</ul>
```

### Caso 4: Cambio de Domicilio Social

**Actualizar en**:
1. Política de Privacidad
2. Aviso Legal
3. Formularios de contacto (si aplica)

### Caso 5: Actualización Legal (Nueva Normativa)

**Ejemplo**: Cambio en GDPR o nueva ley

1. Revisar páginas legales
2. Identificar secciones afectadas
3. Actualizar texto
4. Añadir referencia a nueva normativa
5. Actualizar fecha

---

## ⚠️ Checklist de Calidad Legal

Antes de publicar cambios:

### Política de Privacidad
- [ ] Responsable del tratamiento correcto
- [ ] Todos los procesadores listados
- [ ] Finalidades específicas y legítimas
- [ ] Base legal para cada tratamiento
- [ ] Plazos de conservación realistas
- [ ] Derechos del usuario completos
- [ ] Procedimiento para ejercer derechos claro
- [ ] Email de contacto para protección de datos
- [ ] Fecha de actualización actualizada

### Aviso Legal
- [ ] Denominación social exacta
- [ ] NIF/CIF correcto
- [ ] Dirección actualizada
- [ ] Email de contacto válido
- [ ] CNAE correcto
- [ ] Jurisdicción especificada
- [ ] Exclusión de responsabilidad clara
- [ ] Fecha de actualización actualizada

### Política de Cookies
- [ ] Lista completa de cookies
- [ ] Finalidad de cada cookie
- [ ] Duración de cada cookie
- [ ] Terceros identificados
- [ ] Enlaces a políticas de terceros funcionan
- [ ] Instrucciones para desactivar cookies
- [ ] Fecha de actualización actualizada

---

## 📞 Consulta Legal

### ¿Cuándo consultar a un abogado?

**SIEMPRE consultar si**:
- Hay cambio de objeto social de la empresa
- Se añade un nuevo tipo de tratamiento de datos sensible
- Hay una brecha de seguridad
- Se recibe una solicitud de la AEPD (Agencia Española de Protección de Datos)
- Se hace marketing automatizado (perfilado)

### ¿Dónde obtener información actualizada?

- **AEPD**: https://www.aepd.es/ (guías y recomendaciones)
- **GDPR**: Reglamento General de Protección de Datos
- **LSSI**: Ley de Servicios de la Sociedad de la Información
- **Abogado especializado** en protección de datos

---

## 🔄 Flujo de Actualización Rápida

```
Detectar cambio necesario
        ↓
Identificar páginas afectadas
        ↓
Actualizar contenido en JSX
        ↓
Actualizar fecha de última actualización
        ↓
Verificar consistencia entre páginas
        ↓
npm run build
        ↓
Deploy a Hostinger
        ↓
Verificar en producción
        ↓
Documentar cambio (opcional: changelog)
```

---

## 📝 Ejemplo de Changelog Legal

Crear archivo `LEGAL_CHANGES.md` para trackear cambios:

```markdown
# Cambios en Páginas Legales

## 2026-03-30
- **Política de Privacidad**: Añadido procesador Mailchimp
- **Cookies**: Añadida cookie _chat_widget
- **Fechas**: Actualizadas en todas las páginas

## 2026-02-15
- **Aviso Legal**: Actualizada dirección fiscal
- **Contacto**: Cambio de teléfono de Colombia

## 2026-01-10
- **Privacidad**: Actualizado plazo de conservación (5 años)
- **Cookies**: Eliminada cookie obsoleta de analytics
```

---

## 🆘 Emergencias Legales

### Si hay brecha de seguridad (data breach)

1. **Notificar a AEPD** en 72 horas
2. **Notificar a usuarios afectados** sin demora indebida
3. **Actualizar Política de Privacidad** con medidas tomadas
4. **Documentar** todo el incidente

### Si cambia la normativa

1. **Revisar sitios oficiales**: BOE, AEPD
2. **Identificar cambios aplicables**
3. **Actualizar páginas legales**
4. **Comunicar a usuarios** si es necesario (email/blog)

---

## ✅ Verificación Final

Antes de considerar la actualización completa:

```bash
# 1. Build exitoso
npm run build

# 2. Sin errores de ESLint
npm run lint

# 3. Verificar en preview local
npm run preview
# Abrir http://localhost:3000/politica-de-privacidad
# Abrir http://localhost:3000/aviso-legal
# Abrir http://localhost:3000/politica-de-cookies

# 4. Verificar enlaces funcionan
# Click en todos los links a políticas de terceros

# 5. Deploy
# Subir dist/ a Hostinger

# 6. Verificar en producción
# https://amaconsultores.eu/politica-de-privacidad
```

---

**Recuerda**: Esta guía es orientativa. Para cuestiones legales complejas, siempre consulta con un abogado especializado en protección de datos y comercio electrónico.
