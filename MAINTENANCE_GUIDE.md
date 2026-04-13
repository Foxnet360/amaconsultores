# Guía de Mantenimiento - AMA Consultores

## 📋 Actualización de Contenido

Esta guía explica cómo actualizar diferentes tipos de contenido en el sitio web.

---

## 📝 Blog (Notion CMS)

### Crear un Nuevo Artículo

1. **Ir a Notion** → Base de datos "Blog Posts"
2. **Crear nueva página**:
   - Click en "+ New"
   - Seleccionar "Blog Posts" como base de datos

3. **Completar propiedades**:
   ```
   Title: Título del artículo
   Slug: url-amigable (ej: "nueva-ley-migracion-2026")
   Excerpt: Resumen de 2-3 líneas para el listado
   Category: Noticias | Guías | Legal | Documentos
   Status: Publicado
   Published Date: Fecha actual
   Author: Nombre del autor
   ```

4. **Escribir contenido**:
   - Usar bloques de Notion (títulos, párrafos, listas)
   - Añadir imágenes si es necesario
   - Formato recomendado:
     ```
     # Título principal
     
     Introducción...
     
     ## Sección 1
     Contenido...
     
     ## Sección 2
     - Punto 1
     - Punto 2
     
     > 💡 Consejo o nota importante
     
     ## Conclusión
     Resumen...
     ```

5. **Publicar**:
   - Cambiar Status a "Publicado"
   - El artículo aparecerá automáticamente en el blog

### Actualizar Artículo Existente

1. Abrir artículo en Notion
2. Hacer cambios
3. Los cambios se reflejan en el sitio web automáticamente (puede tardar hasta 1 minuto por caché)

### Despublicar un Artículo

1. Abrir artículo en Notion
2. Cambiar Status a "Borrador"
3. El artículo desaparecerá del blog

---

## 👥 Equipo

### Actualizar Información de un Miembro

**Archivo**: `src/components/sections/EquipoSection.jsx`

```javascript
const teamMembers = [
  {
    name: 'Nombre Completo',
    role: 'Cargo',
    description: 'Descripción en primera persona...',
    image: null, // o '/ruta/a/foto.jpg'
    initials: 'NC',
    color: 'bg-gold-500',
    linkedin: 'https://linkedin.com/in/...' // opcional
  },
  // ...
];
```

**Para añadir foto**:
1. Guardar foto en `public/images/team/`
2. Actualizar: `image: '/images/team/nombre.jpg'`
3. Recomendado: 400x400px, formato JPG o WebP

---

## 💰 Precios y Tarifas

### Actualizar Precios en Acordeones

**Ubicación**: Archivos de secciones en `src/components/sections/`

Ejemplo en `EntidadesSection.jsx`:
```javascript
{
  id: 'precios',
  title: '¿Cuánto cuesta y quién paga qué?',
  content: '...',
  precios: [
    { servicio: 'Selección completa', precio: 'Desde 1.800 €' },
    // Actualizar aquí
  ]
}
```

### Precio de Asesoría

**Archivo**: `src/components/sections/AsesoriaSection.jsx`

Buscar:
```javascript
<div className="inline-flex items-center gap-2 bg-gold-500 text-navy px-6 py-3 rounded-full font-bold text-xl mb-4">
  50€  // <-- Cambiar aquí
  <span className="text-sm font-normal">(IVA incluido)</span>
</div>
```

---

## 📄 Páginas Legales

### Política de Privacidad

**Archivo**: `src/pages/PoliticaPrivacidadPage.jsx`

**Qué se puede actualizar**:
- Información de contacto del responsable
- Encargados de tratamiento
- Plazos de conservación
- Fecha de última actualización

**Ejemplo**:
```javascript
<p className="text-sm text-gray-500 mb-8">
  Última actualización: 30 de marzo de 2027  // <-- Actualizar fecha
</p>
```

### Aviso Legal

**Archivo**: `src/pages/AvisoLegalPage.jsx`

**Actualizar**:
- CNAE
- Dirección
- Datos de contacto
- Fecha de actualización

### Política de Cookies

**Archivo**: `src/pages/PoliticaCookiesPage.jsx`

**Actualizar**:
- Lista de cookies si cambian
- Proveedores (TidyCal, Stripe, etc.)
- Fecha de actualización

---

## 🏢 Datos de Contacto

### Actualizar Teléfono/Email

**Ubicaciones** (actualizar en TODAS):

1. **Footer**: `src/components/Footer.jsx`
2. **Contacto**: `src/components/sections/ContactoSection.jsx`
3. **Asesoría**: `src/components/sections/AsesoriaSection.jsx`
4. **Legal**: `src/pages/PoliticaPrivacidadPage.jsx`

**Buscar y reemplazar**:
```javascript
// Email
info@amaconsultores.eu

// Teléfonos
+34 664 824 098  // España
+57 301 717 4478  // Colombia
```

---

## 🎨 Imágenes

### Hero / Banner Principal

**Ubicación**: `src/components/sections/HeroSection.jsx`

Actualmente usa gradiente. Para usar imagen:
```javascript
<div 
  className="..."
  style={{
    backgroundImage: 'url(/images/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### Logo

**Ubicación**: `public/logo.svg` o `public/logo.png`

Para actualizar:
1. Reemplazar archivo en `public/`
2. Verificar que Navigation y Footer usan el nuevo logo

### Imágenes de Secciones

**Ubicación**: `public/images/`

Estructura recomendada:
```
public/
├── images/
│   ├── hero/
│   ├── team/
│   ├── services/
│   └── blog/
```

**Formatos recomendados**:
- **Hero**: 1920x1080px, WebP o JPG
- **Team**: 400x400px, WebP
- **Blog**: 1200x630px, WebP (para OG images)

---

## 🔗 Enlaces Externos

### Google Maps (Reseñas)

**Archivo**: `src/components/GoogleReviewsWidget.jsx`

Actualizar URL:
```javascript
<a 
  href="https://g.page/r/TU_ID_DE_GOOGLE/review"
  target="_blank"
  rel="noopener noreferrer"
>
```

### LinkedIn

**Archivo**: `src/components/sections/EquipoSection.jsx`

Actualizar por miembro:
```javascript
linkedin: 'https://linkedin.com/in/nombre-perfil'
```

### TidyCal

**Archivo**: `src/components/sections/AsesoriaSection.jsx`

Si cambia el usuario de TidyCal:
```javascript
data-path="nuevo-usuario-tidycal"
```

---

## 📊 Métricas y Estadísticas

### Actualizar Métricas del Hero

**Archivo**: `src/components/sections/HeroSection.jsx`

Buscar:
```javascript
const stats = [
  { value: '10+', label: 'años de experiencia' },
  { value: '2', label: 'países de cobertura' },
  // ...
];
```

---

## 🔄 Proceso Después de Actualizar

### Si cambias código (JSX/CSS):

```bash
# 1. Verificar cambios
git status

# 2. Hacer build
npm run build

# 3. Test local
npm run preview

# 4. Deploy a Hostinger
# (subir dist/ completo)
```

### Si solo cambias contenido en Notion:

```bash
# 1. Descargar datos actualizados
npm run fetch-notion

# 2. Build
npm run build

# 3. Subir SOLO la carpeta data/
# dist/data/posts.json
# dist/data/posts-content.json
```

---

## 🆘 Problemas Comunes

### "Cambios no aparecen en el sitio"

**Posibles causas**:
1. **Caché del navegador** → Limpiar cache (Ctrl+F5)
2. **CDN de Hostinger** → Esperar 5-10 minutos
3. **No hiciste build** → Ejecutar `npm run build`
4. **Subiste archivos incorrectos** → Verificar carpeta dist/

### "Blog muestra artículos antiguos"

**Solución**:
```bash
npm run fetch-notion  # Descargar datos actualizados
npm run build         # Rebuild con nuevos datos
```

### "Imágenes no cargan"

**Verificar**:
1. Imagen existe en `public/images/`
2. Ruta es correcta (`/images/...` no `images/...`)
3. Formato es soportado (JPG, PNG, WebP)
4. No hay errores 404 en consola

---

## 📅 Calendario de Mantenimiento

### Semanal
- [ ] Revisar formularios recibidos
- [ ] Verificar integraciones funcionan

### Mensual
- [ ] Publicar 1-2 artículos en blog
- [ ] Revisar y responder reseñas de Google
- [ ] Actualizar precios si es necesario

### Trimestral
- [ ] Revisar páginas legales (cambios normativos)
- [ ] Actualizar fotos de equipo si hay cambios
- [ ] Backup de archivos importantes

### Anual
- [ ] Actualizar copyright a nuevo año
- [ ] Revisar dominio y SSL
- [ ] Auditoría de SEO

---

## 📞 Contacto para Soporte Técnico

Si necesitas ayuda técnica para actualizar el sitio:

- **Email**: info@amaconsultores.eu
- **Documentación técnica**: Ver README.md
- **Guías específicas**:
  - NOTION_CMS_GUIDE.md (para blog)
  - DEPLOYMENT_GUIDE.md (para deploy)
  - TESTING_GUIDE.md (para testing)

---

**Recordatorio**: Guardar siempre copia de seguridad antes de hacer cambios importantes.
