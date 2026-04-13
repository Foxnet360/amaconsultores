# Guía de Notion CMS para Blog AMA Consultores

Esta guía documenta cómo usar Notion como CMS (Sistema de Gestión de Contenidos) para el blog de AMA Consultores.

## Configuración Inicial

### 1. Configurar Notion (Requisitos)

Para que el blog funcione con Notion, necesitas:

1. **Cuenta de Notion**: La empresa debe tener una cuenta de Notion
2. **Base de datos "Blog AMA"**: Crear una base de datos con las siguientes columnas
3. **Integración de Notion**: Crear una integración y obtener el token

### 2. Estructura de la Base de Datos

Crea una base de datos en Notion con estas propiedades:

| Propiedad | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| **Title** | Title | Título del artículo | "Guía de arraigo social" |
| **Slug** | Rich Text | URL amigable (sin espacios) | "guia-arraigo-social" |
| **Excerpt** | Rich Text | Resumen/intro del artículo | "Todo sobre el arraigo..." |
| **Category** | Select | Categoría del artículo | Guías, Noticias, Legal |
| **Status** | Select | Estado: Draft o Published | Published |
| **Featured Image** | Files & Media | Imagen destacada (opcional) | archivo.jpg o URL |
| **Published Date** | Date | Fecha de publicación | 2024-03-15 |
| **Author** | Rich Text | Nombre del autor | "Ángela Morales" |

#### Opciones de Categoría:
- Todas
- Noticias
- Guías
- Legal
- Documentos

### 3. Crear Integración de Notion

1. Ve a [notion.so/my-integrations](https://notion.so/my-integrations)
2. Haz clic en "New integration"
3. Nombre: "AMA Blog CMS"
4. Selecciona el workspace de la empresa
5. Copia el "Internal Integration Token"
6. Comparte la base de datos con la integración:
   - Abre la base de datos en Notion
   - Click en "..." (menú) → Add connections
   - Selecciona "AMA Blog CMS"

### 4. Variables de Entorno

Añade estas variables al archivo `.env`:

```env
VITE_NOTION_TOKEN=tu_token_aqui
VITE_NOTION_DATABASE_ID=id_de_tu_base_de_datos
```

Para obtener el Database ID:
- Abre la base de datos en Notion
- La URL tiene este formato: `https://www.notion.so/workspace/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX?v=...`
- Copia la parte de 32 caracteres (XXXXXXXX...)

## Flujo de Trabajo

### Crear un Nuevo Artículo

1. **En Notion**:
   - Abre la base de datos "Blog AMA"
   - Crea una nueva página
   - Completa todas las propiedades obligatorias
   - Escribe el contenido en el cuerpo de la página

2. **Propiedades obligatorias**:
   - ✅ Title (título)
   - ✅ Slug (URL amigable)
   - ✅ Excerpt (resumen)
   - ✅ Category (categoría)
   - ✅ Status: "Published" para publicar
   - ✅ Published Date (fecha)
   - ✅ Author (autor)

3. **Escribir contenido**:
   - Usa los bloques de Notion (párrafos, títulos, listas, etc.)
   - El sistema soporta: párrafos, títulos H1-H3, listas, imágenes, callouts, citas

4. **Publicar**:
   - Cambia Status a "Published"
   - El artículo aparecerá en el blog automáticamente

### Editar un Artículo Existente

1. Abre el artículo en Notion
2. Realiza los cambios
3. Los cambios se reflejan en el blog (puede tardar hasta 1 minuto por caché)

### Despublicar un Artículo

1. Cambia Status de "Published" a "Draft"
2. El artículo dejará de aparecer en el blog

## Mejores Prácticas para Slugs

Los slugs deben ser:
- **Únicos**: No puede haber dos artículos con el mismo slug
- **Descriptivos**: Reflejar el contenido del artículo
- **En minúsculas**: "guia-arraigo" no "Guia-Arraigo"
- **Sin espacios**: Usar guiones "-" en lugar de espacios
- **Sin caracteres especiales**: Solo letras, números y guiones

**Ejemplos de buenos slugs:**
- ✅ "nuevo-rd-1155-2024-arraigos"
- ✅ "guia-homologacion-titulos"
- ✅ "convenio-doble-nacionalidad"

**Ejemplos de malos slugs:**
- ❌ "Nuevo RD 1155/2024" (tiene espacios y mayúsculas)
- ❌ "artículo_1" (usa guión bajo)
- ❌ "guía" (tiene acento)

## Formatos de Contenido Soportados

### Bloques de Notion Soportados

El blog renderiza estos tipos de bloques de Notion:

1. **Párrafos** (Paragraph)
   - Texto normal con formato básico (negrita, cursiva)
   - Links automáticos

2. **Títulos** (Headings)
   - H1: Título principal (color gold)
   - H2: Subtítulo (color navy)
   - H3: Sub-subtítulo (color navy)

3. **Listas con viñetas** (Bulleted list)
   - Puntos de lista con viñetas gold

4. **Listas numeradas** (Numbered list)
   - Listas ordenadas 1, 2, 3...

5. **Imágenes** (Image)
   - Imágenes subidas a Notion
   - URLs externas
   - Caption opcional

6. **Callouts** (Callout)
   - Cajas destacadas con fondo ámbar
   - Útil para avisos importantes
   - Icono personalizable

7. **Separadores** (Divider)
   - Línea horizontal divisoria

8. **Citas** (Quote)
   - Texto en cursiva con borde lateral gold

### Formato de Texto

Dentro de los bloques puedes usar:
- **Negrita** (Ctrl/Cmd + B)
- *Cursiva* (Ctrl/Cmd + I)
- <u>Subrayado</u> (Ctrl/Cmd + U)
- ~~Tachado~~
- `Código` (inline)
- [Links](https://ejemplo.com)

## Imágenes

### Subir Imágenes

1. En Notion, arrastra la imagen al cuerpo del artículo
2. O usa el comando "/image" para añadir un bloque de imagen
3. Añade una caption (descripción) opcional

### Imagen Destacada

La imagen destacada (Featured Image) aparece:
- En la tarjeta del artículo en el listado
- Al inicio del artículo individual

Para añadirla:
1. Usa la propiedad "Featured Image" en la base de datos
2. Sube el archivo o pega una URL

**Recomendaciones de imagen**:
- Tamaño: 1200x630px (ratio 1.91:1) para mejor visualización
- Formato: JPG o PNG
- Tamaño máximo: 2MB

## Categorías

Usa estas categorías para organizar el contenido:

- **Noticias**: Novedades legislativas, cambios en leyes
- **Guías**: Tutoriales paso a paso, explicaciones detalladas
- **Legal**: Análisis jurídico, interpretación de normas
- **Documentos**: Información sobre documentación requerida

## Solución de Problemas

### Los artículos no aparecen en el blog

1. Verifica que Status sea "Published" (no "Draft")
2. Comprueba que las variables de entorno estén configuradas
3. Revisa la consola del navegador (F12) por errores
4. Asegúrate de que la integración tenga acceso a la base de datos

### Error "Database not found"

- Verifica que el DATABASE_ID sea correcto
- Asegúrate de haber compartido la base de datos con la integración

### Las imágenes no cargan

- Notion expira las URLs de imágenes después de tiempo
- Sube las imágenes directamente a Notion (no uses URLs externas que expiren)
- Si usas URLs externas, asegúrate de que sean permanentes

### Cambios no se reflejan inmediatamente

El sistema usa caché para mejorar rendimiento. Los cambios pueden tardar hasta 1 minuto en aparecer.

Para forzar actualización:
- Refresca la página (F5)
- Limpia la caché del navegador

## Limitaciones

- **Rate limiting**: Notion permite 3 requests por segundo
- **Tamaño de imágenes**: Máximo recomendado 2MB por imagen
- **Formatos soportados**: JPG, PNG, GIF
- **Bloques no soportados**: Tablas complejas, bases de datos embebidas, archivos adjuntos

## Contacto y Soporte

Para problemas técnicos con el CMS:
- Email: info@amaconsultores.eu
- El blog tiene un modo "demo" que usa datos de ejemplo si Notion no está configurado

## Plantilla de Artículo

Copia esta plantilla en Notion para crear artículos consistentes:

```
# [Título Principal del Artículo]

[Excerpt: Breve resumen de 2-3 líneas que aparecerá en el listado]

## Introducción

[Párrafo introductorio...]

## Sección Principal

### Subtítulo

Contenido detallado...

- Punto importante 1
- Punto importante 2
- Punto importante 3

> 💡 **Consejo**: Callout para destacar información importante

### Otro Subtítulo

Más contenido...

## Conclusión

Resumen final...

---

*¿Tienes dudas? [Contáctanos](/#contacto) para una asesoría personalizada.*
```

---

**Última actualización**: Marzo 2026  
**Versión**: 1.0
