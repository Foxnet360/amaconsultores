## 1. Correcciones TidyCal y Flujo de Reservas

- [x] 1.1 Corregir texto en TidyCalModal.jsx: cambiar "consulta gratuita de 30 minutos" por "consulta personalizada de 30 minutos por 50€"
- [x] 1.2 Implementar estado controlado para checkbox de condiciones en AgendaPage.jsx
- [x] 1.3 Deshabilitar botón de reserva cuando checkbox no esté marcado
- [x] 1.4 Verificar que TidyCalEmbed carga correctamente con la URL configurada

## 2. Migración a HashRouter

- [x] 2.1 Cambiar BrowserRouter por HashRouter en App.jsx
- [x] 2.2 Eliminar componente LegacyHashRedirect (ya no es necesario)
- [x] 2.3 Actualizar navegaciones con window.location.href a useNavigate
- [x] 2.4 Verificar que todas las rutas funcionan correctamente con #/

## 3. Corrección Notion CMS

- [x] 3.1 Cambiar filtro de estado de "Published" a "Publicado" en fetch-notion-data.js
- [x] 3.2 Ejecutar npm run fetch-notion para sincronizar posts
- [x] 3.3 Verificar que posts.json contiene los artículos correctos

## 4. Imágenes del Equipo

- [x] 4.1 Verificar que las imágenes están en public/team/
- [x] 4.2 Confirmar rutas correctas en EquipoSection.jsx y team-profiles.js

## 5. Build y Deploy

- [x] 5.1 Ejecutar npm run lint
- [x] 5.2 Ejecutar npm run build
- [x] 5.3 Desplegar a producción con rsync
- [x] 5.4 Verificar en producción: URLs directas, flujo TidyCal, blog
