# Configuración del Widget de Google Reviews

## 🎯 Resumen

El widget de Google Reviews está implementado y listo para configurar. 

## 📁 Archivos Creados

1. **`src/components/GoogleReviewsWidget.jsx`** - Componente principal del widget
2. **`src/components/sections/ReviewsSection.jsx`** - Sección que muestra el widget
3. **Integrado en `src/pages/HomePage.jsx`** - Se muestra después de "Equipo"

## ⚙️ Configuración Requerida

### Paso 1: Obtener Widget ID de Elfsight

1. Ve a [Elfsight](https://elfsight.com/) y crea una cuenta
2. Busca "Google Reviews" widget
3. Configura el widget con tu perfil de Google Business
4. Copia el **Widget ID** (aparece como `elfsight-app-XXXXXXXX`)

### Paso 2: Actualizar el Código

En `src/components/GoogleReviewsWidget.jsx`, actualiza la línea 10:

```javascript
const WIDGET_ID = 'TU_WIDGET_ID_AQUI'; // Reemplaza con tu ID real
```

### Paso 3: Reemplazar Fallback Reviews

Si prefieres usar el widget real de Elfsight en lugar de las reseñas manuales de fallback, asegúrate de que el widget esté correctamente configurado en Elfsight.

## 🔧 Funcionalidades Implementadas

### ✅ Carga Dinámica
- Script de Elfsight se carga dinámicamente
- Lazy loading activado
- Timeout de 10 segundos para evitar bloqueos

### ✅ Estados de UI
- **Loading**: Spinner mientras carga
- **Success**: Widget renderizado
- **Error**: Fallback con reseñas manuales + link a Google Maps

### ✅ Responsive
- Grid de 3 columnas en desktop
- 1 columna en móvil
- Diseño adaptable

### ✅ Fallback Manual
Si Elfsight falla, se muestran 3 reseñas de ejemplo con:
- Estrellas (5/5)
- Texto de reseña
- Nombre del autor
- Fecha
- Link a Google Maps para ver más

## 🎨 Personalización

### Cambiar Reseñas de Fallback

Edita el array `reviews` en `ManualReviewsFallback` component:

```javascript
const reviews = [
  {
    id: 1,
    author: 'Nombre Cliente',
    rating: 5,
    date: 'fecha',
    text: 'Texto de la reseña...'
  },
  // ...
];
```

### Cambiar URL de Google Maps

Actualiza el href en `ReviewsSection.jsx`:

```javascript
href="https://g.page/r/TU_ID_DE_GOOGLE/review"
```

## 🧪 Testing

Para probar el widget:

1. **Carga exitosa**: Widget de Elfsight debería aparecer
2. **Fallback**: Desconecta internet o usa modo offline para ver el fallback
3. **Responsive**: Prueba en diferentes tamaños de pantalla

## ⚠️ Notas Importantes

1. **Widget ID**: Asegúrate de usar tu propio Widget ID de Elfsight
2. **Google Business**: El perfil debe estar verificado en Google
3. **Privacidad**: El widget respeta la configuración de cookies (GDPR)
4. **Performance**: Script carga asíncronamente, no bloquea el renderizado

## 📞 Soporte

Si tienes problemas con Elfsight:
- [Documentación Elfsight](https://help.elfsight.com/)
- [Centro de ayuda](https://elfsight.com/help/)

## 🚀 Deploy

Después de configurar el Widget ID:

```bash
npm run build
# Subir dist/ a Hostinger
```

El widget estará activo en producción.
