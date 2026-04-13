# Guía de Testing para AMA Consultores

Esta guía documenta las pruebas automáticas y manuales necesarias antes del lanzamiento.

## ✅ Tests Automáticos (Scripts)

Hemos creado scripts para automatizar parte del testing:

### 1. Accesibilidad
```bash
npm run test:accessibility
```nVerifica:
- Imágenes sin alt text
- Elementos interactivos sin ARIA labels
- Estructura básica de accesibilidad

### 2. Links
```bash
npm run test:links
```
Verifica:
- Links internos
- Links externos
- Anchors (#section)

### 3. Performance (Bundle)
```bash
npm run test:performance
```
Mide:
- Tamaño del bundle JS/CSS
- Umbrales recomendados

### 4. Build
```bash
npm run build
```
Verifica:
- Compilación exitosa
- Errores de sintaxis
- Generación de archivos en `dist/`

### 5. Lint
```bash
npm run lint
```
Verifica:
- Errores de ESLint
- Estándares de código

---

## 📝 Tests Manuales Requeridos

### Responsive Testing (18.1)

**Dispositivos a probar:**
- [ ] Mobile pequeño (320px) - iPhone SE
- [ ] Mobile estándar (375px) - iPhone 12/13
- [ ] Mobile grande (414px) - iPhone Pro Max
- [ ] Tablet (768px) - iPad
- [ ] Tablet grande (1024px) - iPad Pro
- [ ] Desktop (1440px) - Laptop
- [ ] Desktop grande (1920px) - Monitor

**Herramientas:**
- Chrome DevTools (Device Toolbar)
- Firefox Responsive Design Mode
- Safari Web Inspector

**Qué verificar:**
1. Navegación sticky no cubre contenido
2. Menú hamburger funciona
3. Accordions se expanden/contraen
4. Formularios son usables
5. Texto legible (no overflow)
6. Botones clickeables
7. Imágenes no se desbordan

### Accesibilidad Manual (18.2)

**Navegación por teclado:**
- [ ] Tab navega por todos los elementos interactivos
- [ ] Enter activa botones y links
- [ ] Escape cierra modales/menús
- [ ] Foco visible en todos los elementos

**Screen Reader (NVDA/VoiceOver):**
- [ ] Landmarks anunciados correctamente
- [ ] Imágenes con alt text leídas
- [ ] Botones con aria-label leídos
- [ ] Formularios navegables

### Cross-Browser Testing (18.4)

**Navegadores a probar:**
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)

**Qué verificar en cada uno:**
1. Scroll suave funciona
2. Animaciones CSS funcionan
3. Formularios envían datos
4. Cookie banner aparece
5. PDF se descarga
6. Calculadora funciona

### Funcionalidad (18.5)

**Navegación:**
- [ ] Click en logo va a #inicio
- [ ] Links del menú navegan a secciones
- [ ] URL se actualiza con hash
- [ ] Refresh en #section mantiene posición

**Accordions:**
- [ ] Todos los 20 accordions se expanden
- [ ] Checklists funcionan
- [ ] CTAs llevan a #contacto
- [ ] Solo uno abierto a la vez

**Formulario de contacto:**
- [ ] Validación de campos requeridos
- [ ] Validación de email
- [ ] Checkbox de privacidad obligatorio
- [ ] Submit muestra mensaje de éxito
- [ ] Reset limpia formulario

**TidyCal:**
- [ ] Widget carga (o muestra error graceful)
- [ ] Precio visible (50€)
- [ ] Fallback funciona si falla

**Calculadora:**
- [ ] Flujo de preguntas funciona
- [ ] Resultados mostrados correctamente
- [ ] Links a accordions funcionan

**PDF:**
- [ ] Botón "Descargar ficha PDF" funciona
- [ ] PDF generado correctamente
- [ ] Contenido completo en PDF

**Cookie Banner:**
- [ ] Aparece en primera visita
- [ ] "Aceptar todas" funciona
- [ ] "Rechazar no esenciales" funciona
- [ ] No reaparece después de aceptar
- [ ] Link a política funciona

---

## 🔧 Tests de Performance Avanzados

### Lighthouse CI
```bash
# Instalar
npm install -g @lhci/cli

# Ejecutar
npx lhci autorun
```

### PageSpeed Insights
1. Ir a: https://pagespeed.web.dev/
2. Ingresar URL del sitio
3. Analizar Mobile y Desktop
4. Objetivos:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

### WebPageTest
1. Ir a: https://www.webpagetest.org/
2. Configurar:
   - Location: Madrid, Spain
   - Browser: Chrome
   - Connection: Cable
3. Revisar:
   - First Byte < 600ms
   - Start Render < 1.5s
   - Speed Index < 3s

---

## 🚀 Pre-Deploy Checklist

Antes de subir a producción:

1. [ ] `npm run build` exitoso
2. [ ] `npm run lint` sin errores críticos
3. [ ] Tests manuales completados
4. [ ] Lighthouse score > 90
5. [ ] Revisar consola del navegador (sin errores rojos)
6. [ ] Probar en dispositivo real (móvil)
7. [ ] Verificar HTTPS activo
8. [ ] Probar formulario de contacto (enviar email real)
9. [ ] Verificar TidyCal carga correctamente
10. [ ] Confirmar cookie banner GDPR funciona

---

## 📱 Testing en Dispositivos Reales

### iOS (Safari)
1. Abrir sitio en iPhone/iPad
2. Probar scroll suave
3. Verificar formularios
4. Probar navegación

### Android (Chrome)
1. Abrir sitio en Android
2. Probar menú hamburger
3. Verificar touch targets (mínimo 44px)
4. Probar formularios

---

## 🐛 Debugging Común

### Problema: Scroll no funciona suave
**Solución:** Verificar `scroll-behavior: smooth` en CSS

### Problema: Foco no visible
**Solución:** Verificar `:focus` styles en CSS

### Problema: Cookie banner no aparece
**Solución:** Limpiar localStorage y refrescar

### Problema: Build falla
**Solución:** Verificar `npm install` actualizado

---

**Nota:** Los tests manuales deben realizarse antes de cada deploy importante.
