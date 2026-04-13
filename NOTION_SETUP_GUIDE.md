# Guía Paso a Paso: Configurar Notion CMS para Blog AMA Consultores

## 📋 Resumen de lo que necesitas

1. ✅ Cuenta de Notion (gratuita)
2. ✅ Base de datos "Blog AMA" con columnas específicas
3. ✅ Integración de Notion + Token
4. ✅ Database ID
5. ✅ Variables de entorno configuradas

---

## PASO 1: Crear Cuenta de Notion (5 minutos)

### Si no tienes cuenta:

1. **Ve a** [notion.so](https://notion.so)
2. **Haz clic en** "Get Notion free" o "Registrarse"
3. **Elige método:**
   - Registrarse con Google (recomendado)
   - O con email corporativo: `info@amaconsultores.eu`
4. **Nombre del workspace:** `AMA Consultores`
5. **Tipo:** Selecciona "Personal" o "Team"

### Si ya tienes cuenta:

- Inicia sesión en [notion.so](https://notion.so)

---

## PASO 2: Crear la Base de Datos "Blog AMA" (10 minutos)

### 2.1 Crear página nueva

1. En el sidebar izquierdo, haz clic en **"+ New page"**
2. Selecciona **"Database"** → **"Table"**
3. **Nombre:** `Blog AMA`

### 2.2 Configurar columnas (PROPIEDADES)

Haz clic en el encabezado de cada columna para modificar. Configura EXACTAMENTE así:

| Columna actual | Cambiar a | Tipo | Configuración |
|----------------|-----------|------|---------------|
| Name | **Title** | Title | (Dejar por defecto) |
| Tags | **Slug** | Rich Text | (Texto plano) |
| (añadir) | **Excerpt** | Rich Text | (Texto plano) |
| (añadir) | **Category** | Select | Ver opciones abajo |
| (añadir) | **Status** | Select | Ver opciones abajo |
| (añadir) | **Featured Image** | Files & Media | (Permitir archivos + URLs) |
| (añadir) | **Published Date** | Date | (Formato: ISO) |
| (añadir) | **Author** | Rich Text | (Texto plano) |

### 2.3 Configurar opciones de Category (Select)

Haz clic en la columna **Category** → "Edit property" → "Add an option":

```
Noticias (color amarillo)
Guías (color azul)
Legal (color rojo)
Documentos (color verde)
```

### 2.4 Configurar opciones de Status (Select)

Haz clic en la columna **Status** → "Edit property":

```
Draft (color gris)
Published (color verde)
```

### 2.5 Tu base de datos debe verse así:

```
┌─────────────────────────────────────────────────────────────────┐
│  Blog AMA                                                       │
├────────────┬────────────┬───────────┬──────────┬────────┬───────┤
│  Title     │  Slug      │ Excerpt   │ Category │ Status │ ...   │
├────────────┼────────────┼───────────┼──────────┼────────┼───────┤
│  [título]  │  [url]     │ [resumen] │ [select] │[select]│ ...   │
└────────────┴────────────┴───────────┴──────────┴────────┴───────┘
```

---

## PASO 3: Crear Integración y Obtener TOKEN (10 minutos)

### 3.1 Ir a Integraciones

1. Ve a [notion.so/my-integrations](https://notion.so/my-integrations)
   - O: Click en tu foto de perfil (arriba derecha) → Settings → Integrations

### 3.2 Crear nueva integración

1. Haz clic en **"New integration"**
2. **Associated workspace:** Selecciona "AMA Consultores"
3. **Name:** `AMA Blog CMS`
4. **Logo:** (Opcional) Puedes subir el logo de AMA
5. **Type:** Internal (para uso propio)
6. Haz clic en **"Submit"**

### 3.3 Copiar el TOKEN (¡IMPORTANTE!)

1. Se mostrará una página con los detalles de la integración
2. Busca **"Internal Integration Token"**
3. Es un texto largo que empieza con `secret_`
4. **Haz clic en "Show"** para revelarlo
5. **Copia todo el token** (Ctrl+C / Cmd+C)
6. **GUÁRDALO EN UN LUGAR SEGURO** (gestor de contraseñas)

```
Ejemplo de token:
secret_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

⚠️ **ADVERTENCIA:** Este token es como una contraseña. Nunca lo compartas públicamente.

---

## PASO 4: Conectar Integración con Base de Datos (5 minutos)

### 4.1 Volver a la base de datos

1. Ve a tu página "Blog AMA" en Notion

### 4.2 Compartir con la integración

1. Arriba a la derecha, haz clic en **"Share"**
2. Aparecerá un campo de búsqueda
3. Escribe: `AMA Blog CMS`
4. Selecciona la integración que creaste
5. **¡IMPORTANTE!** Asegúrate que tenga permiso **"Can edit"**
6. Haz clic en **"Invite"**

### 4.3 Verificar conexión

Deberías ver "AMA Blog CMS" en la lista de usuarios con acceso.

---

## PASO 5: Obtener DATABASE_ID (3 minutos)

### 5.1 Copiar URL de la base de datos

1. Estás en la página "Blog AMA"
2. Copia la URL del navegador (barra de direcciones)

La URL se ve así:
```
https://www.notion.so/amaconsultores/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX?v=...
```

### 5.2 Extraer el ID

El DATABASE_ID es la parte de **32 caracteres** entre las barras:

```
https://www.notion.so/amaconsultores/1234567890abcdef1234567890abcdef?v=...
                                    └────────────────────────────────┘
                                              DATABASE_ID
```

**Ejemplo:**
```
URL: https://www.notion.so/amaconsultores/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p?v=123
DATABASE_ID: 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

### 5.3 Guardar el ID

Copia solo esos 32 caracteres y guárdalos.

---

## PASO 6: Configurar Variables de Entorno (5 minutos)

### 6.1 Crear archivo .env

En la raíz del proyecto (donde está package.json), crea un archivo llamado `.env`:

```bash
# Windows:
type nul > .env

# Mac/Linux:
touch .env
```

### 6.2 Añadir variables

Abre `.env` en tu editor y añade:

```env
# Notion CMS Configuration
VITE_NOTION_TOKEN=secret_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
VITE_NOTION_DATABASE_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p

# EmailJS Configuration (para formularios)
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID_PERSONAS=tu_template_personas
VITE_EMAILJS_TEMPLATE_ID_ENTIDADES=tu_template_entidades
VITE_EMAILJS_USER_ID=tu_user_id

# Google Analytics (cuando lo tengas)
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 6.3 Reemplazar valores

Reemplaza los valores de ejemplo con los tuyos reales:
- `VITE_NOTION_TOKEN`: El token que copiaste del paso 3.3
- `VITE_NOTION_DATABASE_ID`: El ID de 32 caracteres del paso 5

---

## PASO 7: Probar la Conexión (5 minutos)

### 7.1 Crear artículo de prueba

En Notion, en tu base de datos "Blog AMA":

1. Haz clic en "+ New"
2. Completa los campos:
   - **Title:** "Artículo de prueba"
   - **Slug:** "articulo-prueba"
   - **Excerpt:** "Este es un artículo de prueba para verificar la conexión con Notion"
   - **Category:** "Noticias"
   - **Status:** "Published"
   - **Published Date:** [Hoy]
   - **Author:** "Ángela Morales"

3. En el cuerpo del artículo (abajo), escribe:
   ```
   # ¡Hola desde Notion!
   
   Este es el contenido del artículo.
   
   ## Subtítulo
   
   - Punto 1
   - Punto 2
   - Punto 3
   
   > Esto es un callout importante
   ```

### 7.2 Reiniciar servidor de desarrollo

```bash
npm run dev
```

### 7.3 Verificar en el blog

1. Abre [http://localhost:3000/blog](http://localhost:3000/blog)
2. Deberías ver tu artículo de prueba
3. Haz clic en el artículo para ver el contenido completo

---

## 🎯 CHECKLIST FINAL

Antes de decir que está listo, verifica:

- [ ] Cuenta de Notion creada y accesible
- [ ] Base de datos "Blog AMA" creada
- [ ] Todas las 8 columnas configuradas correctamente
- [ ] Integración "AMA Blog CMS" creada
- [ ] Token copiado y guardado de forma segura
- [ ] Base de datos compartida con la integración
- [ ] Database ID de 32 caracteres extraído
- [ ] Archivo `.env` creado con ambas variables
- [ ] Artículo de prueba creado en Notion
- [ ] Blog muestra el artículo correctamente

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### "No se muestran los artículos"

1. Verifica que el Status sea "Published" (no "Draft")
2. Revisa la consola del navegador (F12) por errores rojos
3. Verifica que las variables de entorno estén correctas:
   ```bash
   # En consola del navegador (F12):
   console.log(import.meta.env.VITE_NOTION_TOKEN)
   # Debería mostrar tu token (o undefined si no está configurado)
   ```

### "Error 401 Unauthorized"

- El token es incorrecto o ha expirado
- La integración no tiene acceso a la base de datos
- Solución: Repetir pasos 3 y 4

### "Error 404 Database not found"

- El DATABASE_ID es incorrecto
- La base de datos fue eliminada
- Solución: Verificar el ID del paso 5

### "Los cambios no se ven inmediatamente"

- Notion puede tardar hasta 1 minuto en actualizar
- Prueba hacer hard refresh (Ctrl+F5 / Cmd+Shift+R)
- Limpia la caché del navegador

---

## 📞 SOPORTE

Si tienes problemas:

1. Revisa que seguiste cada paso exactamente
2. Verifica los nombres de las columnas (distinguen mayúsculas)
3. Asegúrate que la integración tenga permiso "Can edit"
4. Contacta soporte si persiste el error

---

## 📚 RECURSOS ADICIONALES

- [Documentación oficial Notion API](https://developers.notion.com/)
- [Ejemplos de integraciones](https://github.com/makenotion/notion-sdk-js)
- [Límites de la API](https://developers.notion.com/reference/rate-limits)

---

**¿Listo para empezar?** Abre Notion y comienza con el Paso 1. Si tienes alguna duda en algún paso específico, dime cuál y te ayudo.
