## Why

La web actual de AMA Consultores transmite un tono excesivamente corporativo que no refleja los valores reales de la consultoría: trato humano y personalizado, experiencia experta, y diferenciación clara entre servicios para personas y entidades. El objetivo es alinear la web con la identidad real de Ángela Morales y su equipo, eliminando mensajes de "evaluación gratuita" (ya que cobran siempre por sus servicios) y creando una experiencia que filtre desde el primer contacto el tipo de cliente (persona o entidad).

## What Changes

### Página de Inicio
- **BREAKING**: Eliminar botón "Evaluación Gratuita" del hero
- Reemplazar título y subtítulo del hero con mensaje más humano y cercano
- Agregar dos botones de acceso: "Soy una persona" y "Soy una entidad"
- Agregar bloque de presentación personal de Ángela con tono cercano
- Actualizar tarjetas de servicios a 4 categorías específicas
- Actualizar bloque de confianza con 3 indicadores clave

### Página de Servicios (nueva estructura)
- **BREAKING**: Reestructurar como árbol de decisión Personas/Entidades
- Rama "Personas": subdividir en España/Colombia
  - España: Movilidad profesional, Regularización migratoria, Documentos en orden
  - Colombia: Vivir en Colombia, visados, apostillas
- Rama "Entidades": subdividir en Proyectos europeos/Asesoría migratoria
  - Proyectos europeos: gestión de fondos, formulación, coordinación
  - Asesoría: apoyo técnico, formación, protocolos

### Página Quiénes Somos
- **BREAKING**: Reemplazar contenido actual con 3 perfiles detallados
- Perfil Ángela Morales: fundadora y directora, biografía extensa, foto
- Perfil Rafael Reyes: abogado colaborador, enlace a su web
- Perfil Xiomara Sánchez: asistente legal Colombia
- Agregar nota de cierre sobre equipo pequeño por decisión

### Página de Contacto (nueva)
- Crear página de contacto desde cero
- Formulario mínimo: nombre, email, país, mensaje
- Información de contacto: WhatsApp Colombia, emails, teléfonos España/Colombia
- Aviso visible sobre costos y plazo de respuesta (48h laborables)

### Navegación Global
- **BREAKING**: Actualizar menú: Inicio, Servicios, Quiénes somos, Opiniones, Blog, Contacto
- Eliminar ruta /evaluacion
- Agregar nuevas rutas según estructura de servicios

## Capabilities

### New Capabilities
- `homepage-redesign`: Rediseño completo de la página de inicio con nuevo hero, tarjetas de servicios y bloque de confianza
- `services-tree-navigation`: Sistema de navegación por árbol de decisión Personas/Entidades con subcategorías España/Colombia
- `contact-page`: Página de contacto con formulario e información de contacto multi-país
- `team-profiles`: Sección de equipo con 3 perfiles detallados y fotos
- `navigation-update`: Actualización del menú de navegación global y rutas

### Modified Capabilities
- (ninguna - no hay capabilities existentes que modifiquen requisitos)

## Impact

### Código Afectado
- `src/pages/HomePage.jsx` - Reestructuración completa
- `src/pages/ServicesPage.jsx` - Nueva estructura de árbol de decisión
- `src/pages/AboutPage.jsx` - Nuevo contenido de equipo
- `src/pages/PreEvaluationFormPage.jsx` - **Eliminar** (reemplazado por Contacto)
- `src/pages/ContactPage.jsx` - **Nuevo archivo**
- `src/App.jsx` - Actualizar rutas
- `src/components/Navigation.jsx` - Actualizar menú
- `src/components/home/*` - Actualizar secciones del home
- `src/components/about/*` - Actualizar secciones de about

### Dependencias
- Requiere fotos de equipo (Ángela, Rafael, Xiomara)
- Requiere redacción final en inglés para versión multiidioma (Fase 2)
- No hay dependencias de backend - todo es estático inicialmente

### SEO
- Actualizar meta títulos y descripciones en todas las páginas
- Configurar URLs amigables: /servicios/personas, /servicios/entidades, etc.
