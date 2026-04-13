# Guía de Deployment - AMA Consultores

## 🚀 Checklist Pre-Deployment

Antes de cada deploy, verificar:

- [ ] `npm run build` exitoso (sin errores)
- [ ] `npm run lint` sin errores críticos
- [ ] Tests de accesibilidad pasan (`npm run test:accessibility`)
- [ ] Blog tiene datos actualizados (`npm run fetch-notion`)
- [ ] Variables de entorno configuradas en Hostinger
- [ ] Backup del sitio anterior (opcional pero recomendado)

---

## 📋 Proceso de Deployment

### Opción 1: Deploy Automatizado (Recomendado)

Si Hostinger permite SSH/Terminal:

```bash
# Conectar a Hostinger vía SSH
ssh usuario@hostinger-server

# Navegar al directorio del proyecto
cd ~/public_html

# Pull del código (si usas Git)
git pull origin main

# Instalar dependencias
npm install

# Configurar variables de entorno
export VITE_NOTION_TOKEN="tu_token"
export VITE_NOTION_DATABASE_ID="tu_database_id"

# Build de producción
npm run build

# Verificar que se creó la carpeta dist/
ls -la dist/

# Copiar archivos al directorio público
cp -r dist/* .

# Verificar permisos
chmod -R 755 .
```

### Opción 2: Deploy Manual (File Manager)

**Paso 1: Preparar build local**

```bash
# En tu máquina local
npm run build

# Verificar que existe dist/data/
ls -la dist/data/
# Debería mostrar:
# posts.json
# posts-content.json
```

**Paso 2: Subir a Hostinger**

1. Acceder a [Hostinger Panel](https://hpanel.hostinger.com/)
2. Ir a **Websites** → **Manage** → **File Manager**
3. Navegar a `public_html/`
4. **IMPORTANTE**: Crear backup de archivos existentes:
   - Seleccionar todos los archivos
   - Click derecho → Compress → `backup-YYYY-MM-DD.zip`
   - Mover a carpeta `backups/`

5. Eliminar archivos antiguos (excepto backups/):
   - Seleccionar todo (Ctrl+A)
   - Deseleccionar carpeta backups/
   - Delete

6. Subir nuevos archivos:
   - Click en **Upload**
   - Seleccionar TODO el contenido de carpeta `dist/`
   - **IMPORTANTE**: Incluir carpeta `data/` con archivos JSON

7. Verificar estructura:
```
public_html/
├── index.html          ✓
├── assets/             ✓
│   ├── index-xxx.js
│   └── index-xxx.css
├── data/               ✓ (IMPORTANTE)
│   ├── posts.json
│   └── posts-content.json
└── backups/            (carpeta de respaldos)
```

**Paso 3: Configurar Variables de Entorno**

Si Hostinger soporta variables de entorno:

1. Hostinger Panel → Advanced → **Environment Variables**
2. Añadir:
   - `VITE_NOTION_TOKEN` = `ntn_xxxxx`
   - `VITE_NOTION_DATABASE_ID` = `xxxxxx`
   - `VITE_GA4_MEASUREMENT_ID` = `G-xxxxx`
3. Save y restart

Si NO soporta variables de entorno, hay que hacer build local y subir:

```bash
# En local, con variables configuradas en .env
npm run build
# Subir dist/ completo
```

---

## 🔄 Deployment de Blog (Actualización de Contenido)

Cuando se publica un nuevo artículo en Notion:

```bash
# 1. Descargar datos actualizados
npm run fetch-notion

# 2. Verificar que se actualizaron los JSON
ls -la public/data/

# 3. Build
npm run build

# 4. Subir a Hostinger (solo carpeta dist/)
# - data/posts.json
# - data/posts-content.json
# - index.html (si cambió)
# - assets/ (si cambió)
```

**Nota**: Si solo cambia el contenido del blog (no el código), solo es necesario subir:
- `dist/data/posts.json`
- `dist/data/posts-content.json`

---

## 🧪 Testing Post-Deployment

Después de cada deploy, verificar:

### 1. Funcionalidad Básica
- [ ] Sitio carga sin errores 404
- [ ] Navegación smooth scroll funciona
- [ ] Todos los anchors (#section) funcionan
- [ ] Menú hamburger en móvil funciona
- [ ] Footer visible

### 2. Formularios
- [ ] Formulario de contacto valida campos
- [ ] Checkbox de privacidad es obligatorio
- [ ] Submit muestra mensaje de éxito
- [ ] Email llega a info@amaconsultores.eu

### 3. Integraciones
- [ ] TidyCal widget carga (o muestra fallback)
- [ ] Cookie banner aparece (limpiar localStorage para probar)
- [ ] GA4 carga (si tiene Measurement ID)
- [ ] Elfsight Reviews carga (o muestra fallback)

### 4. Blog
- [ ] `/blog` muestra artículos
- [ ] Filtros de categoría funcionan
- [ ] Búsqueda funciona
- [ ] Artículos individuales cargan (`/blog/:slug`)

### 5. Performance
- [ ] PageSpeed Insights > 80
- [ ] No hay errores en consola (excepto extensiones)
- [ ] Imágenes cargan correctamente

### 6. SEO
- [ ] Meta tags presentes (ver fuente de página)
- [ ] Canonical URLs correctos
- [ ] Sitemap.xml accesible (si existe)

### 7. Responsive
- [ ] Móvil (320px): usable
- [ ] Tablet (768px): usable
- [ ] Desktop (1440px): usable

---

## 🐛 Troubleshooting

### Problema: "Page Not Found" en rutas
**Solución**: Verificar que el servidor esté configurado para SPA (Single Page Application)

**.htaccess para Apache:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Problema: Blog no muestra artículos
**Causa**: Falta carpeta `data/` o archivos JSON
**Solución**: 
```bash
# Verificar que existen
ls dist/data/

# Si no existen, ejecutar
npm run fetch-notion
npm run build
```

### Problema: Variables de entorno no funcionan
**Causa**: Vite embebe variables en build time, no runtime
**Solución**: 
- Configurar variables ANTES de hacer build
- O usar un config.js dinámico (más complejo)

### Problema: Estilos no cargan (CSS 404)
**Causa**: Assets tienen hash en nombre, cache viejo
**Solución**: 
- Limpiar cache del navegador (Ctrl+F5)
- Verificar que archivos en `dist/assets/` subieron correctamente

### Problema: HTTPS/SSL error
**Solución**:
- Hostinger Panel → SSL → Force HTTPS
- Verificar certificado SSL activo

---

## 📊 Monitoreo Post-Deploy

### Primeras 24 horas:
- [ ] Revisar Google Analytics (si configurado)
- [ ] Verificar formularios recibidos
- [ ] Check de velocidad (PageSpeed Insights)
- [ ] Monitorear errores 404

### Semanal:
- [ ] Revisar métricas de performance
- [ ] Verificar integraciones (TidyCal, etc.)
- [ ] Check de enlaces rotos

### Mensual:
- [ ] Actualizar blog (si hay contenido nuevo)
- [ ] Revisar seguridad (plugins, dependencias)
- [ ] Backup manual de archivos

---

## 🆘 Rollback (Si algo falla)

Si el deploy causa problemas graves:

1. **Acceder a File Manager** en Hostinger
2. **Localizar backup**:
   ```
   backups/backup-YYYY-MM-DD.zip
   ```
3. **Extraer backup**:
   - Click en backup zip
   - Extract
   - Sobrescribir archivos existentes
4. **Verificar** que el sitio funciona
5. **Investigar** qué falló en el nuevo deploy

---

## 📞 Soporte

Si tienes problemas con el deployment:

1. **Revisar logs**: Hostinger Panel → Advanced → Error Logs
2. **Contactar Hostinger**: support@hostinger.com
3. **Documentar error**: Screenshot + descripción detallada

---

**Nota importante**: Siempre hacer backup antes de deploy. La carpeta `dist/` se regenera completa con cada build, así que cualquier cambio manual se perderá.
