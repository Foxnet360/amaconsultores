# AMA Consultores - Sitio Web Corporativo

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

**Sitio web corporativo profesional** de AMA Consultores - Consultoría especializada en Migraciones Internacionales y Proyectos Sociales para personas, ONGs y entidades en España y Colombia.

> 🌐 **URL en producción:** https://amaconsultores.eu

## 🌐 URL

https://amaconsultores.eu

## 🚀 Tecnologías

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── home/            # Secciones de la página de inicio
│   ├── about/           # Secciones de Quiénes Somos
│   ├── services/        # Componentes de servicios (árbol de decisión)
│   ├── forms/           # Componentes de formularios
│   ├── Navigation.jsx   # Navegación principal
│   └── Footer.jsx       # Pie de página
├── pages/
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── layouts/
│   └── MainLayout.jsx
├── hooks/
│   └── use-toast.js
└── lib/
    └── utils.js
```

## 🗺️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/servicios` | Árbol de decisión de servicios |
| `/servicios/personas` | Servicios para personas |
| `/servicios/personas/espana` | Servicios España |
| `/servicios/personas/colombia` | Servicios Colombia |
| `/servicios/entidades` | Servicios para entidades |
| `/sobre-nosotros` | Equipo y misión |
| `/contacto` | Formulario de contacto |
| `/evaluacion` | ↳ Redirige a /contacto |

## 🎨 Identidad Visual

- **Colores principales**: Azul oscuro (#1e3a5f) y Dorado (#d4af37)
- **Tipografía**: Poppins (títulos) + Lato (cuerpo)
- **Tono**: Cercano, humano, profesional

## 📦 Scripts

```bash
npm run dev      # Iniciar servidor de desarrollo (puerto 3000)
npm run build    # Construir para producción
npm run preview  # Vista previa de producción
npm run lint     # Ejecutar ESLint
```

## 🔄 Cambios Recientes (Fase 1)

### Navegación
- Menú actualizado: Inicio, Servicios, Quiénes somos, Opiniones, Blog, Contacto
- Dropdown de servicios con subcategorías
- Eliminado botón "Evaluación Gratuita"

### Página de Inicio
- Nuevo hero con título humano y cercano
- Bloque de presentación personal de Ángela
- 4 tarjetas de servicios específicas
- Bloque de confianza con indicadores

### Página de Servicios
- Estructura de árbol de decisión: Personas/Entidades
- Subcategorías: España/Colombia y Proyectos/Asesoría
- Contenido detallado según especificaciones del cliente

### Página de Contacto
- Formulario mínimo: Nombre, Email, País, Mensaje
- Información de contacto multi-país
- Aviso visible sobre costos y plazo de respuesta (48h)
- Integración WhatsApp Colombia

### Quiénes Somos
- Perfil detallado de Ángela Morales (fundadora)
- Perfiles de Rafael Reyes (abogado) y Xiomara Sánchez (asistente)
- Nota de cierre sobre equipo pequeño

## 🔜 Próximos Pasos (Fase 2)

- [ ] Sistema de opiniones verificadas
- [ ] Blog con panel de administración
- [ ] Integración LinkedIn
- [ ] Multiidioma (ES/EN)

## 👥 Equipo

- **Ángela Morales Aristizábal** - Fundadora y Directora
- **Rafael Reyes Pulido** - Abogado Colaborador
- **Xiomara Sánchez** - Asistente Legal (Colombia)

## 📄 Licencia

© 2026 AMA Consultores. Todos los derechos reservados.
