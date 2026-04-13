## Overview

Rediseño completo de la web de AMA Consultores para alinear el tono con los valores reales: trato humano y personalizado, experiencia experta, diferenciación entre servicios para personas y entidades.

## Architecture

### Routing Structure

```
/                           → HomePage (rediseñado)
/servicios                  → ServicesPage (árbol de decisión)
/servicios/personas         → ServicesPage con filtro Personas
/servicios/personas/espana  → Subcategoría España
/servicios/personas/colombia → Subcategoría Colombia
/servicios/entidades        → ServicesPage con filtro Entidades
/sobre-nosotros            → AboutPage (contenido actualizado)
/contacto                  → ContactPage (nueva)
/opiniones                 → ReviewsPage (Fase 2)
/blog                      → BlogPage (Fase 2)
/evaluacion                → **ELIMINADA** (redirige a /contacto)
```

### Component Structure

#### New Components
```
src/components/services/
├── ServiceTree.jsx           # Árbol de decisión principal
├── PersonasBranch.jsx        # Rama Personas (España/Colombia)
├── EntidadesBranch.jsx       # Rama Entidades (Proyectos/Asesoría)
├── ServiceDetail.jsx         # Detalle de servicio seleccionado
└── ServiceCard.jsx           # Reutilizar existente, actualizar

src/components/contact/
├── ContactForm.jsx           # Formulario mínimo de contacto
├── ContactInfo.jsx           # Información de contacto multi-país
└── ContactWarning.jsx        # Aviso sobre costos

src/components/about/
├── TeamMember.jsx            # Tarjeta de miembro del equipo
└── TeamNote.jsx              # Nota de cierre del equipo
```

#### Modified Components
```
src/components/home/
├── HeroSection.jsx           # Nuevo título, subtítulo, 2 botones CTAs
├── ProfileCards.jsx          # Actualizar a 4 tarjetas específicas
├── TrustBlock.jsx            # Nuevo: 3 indicadores de confianza
└── PresentationBlock.jsx     # Nuevo: texto personal de Ángela

src/components/
├── Navigation.jsx            # Actualizar menú, agregar dropdown servicios
└── Footer.jsx                # Actualizar enlaces
```

### State Management

- **URL-based navigation**: Usar React Router useSearchParams para el árbol de decisión
- **Local state**: useState para manejar selecciones en el árbol de servicios
- **No global state needed**: Todo es estático inicialmente

### Data Flow

1. **HomePage** → Usuario selecciona "Persona" o "Entidad"
2. **ServicesPage** → Recibe parámetro de URL, renderiza rama correspondiente
3. **ServicesPage** → Usuario navega por subcategorías (España/Colombia o Proyectos/Asesoría)
4. **ContactPage** → Formulario envía a WhatsApp o email

## Key Design Decisions

### 1. Árbol de Decisión en Servicios
- Usar tabs o acordeón para la primera división (Personas/Entidades)
- Segunda división con sub-tabs o cards clickeables
- Detalles de servicios en secciones expandibles o cards

### 2. Eliminación de "Evaluación Gratuita"
- Reemplazar por "Contactar para presupuesto"
- Mensaje claro: "Los servicios tienen coste"
- Filtrar leads desde el primer contacto

### 3. Tono y Estilo
- Segunda persona singular ("tú")
- Lenguaje cercano, sin tecnicismos innecesarios
- Mantener identidad visual actual (azul oscuro + dorado)
- Frase estándar: "Para actuaciones que requieren firma letrada, coordino con mi abogado de confianza."

### 4. Estructura de Datos

#### Team Members (AboutPage)
```javascript
const teamMembers = [
  {
    name: "Ángela Morales Aristizábal",
    role: "Fundadora y Directora",
    image: "/images/angela.jpg",
    bio: "...", // Biografía completa
    isFounder: true
  },
  {
    name: "Rafael Reyes Pulido", 
    role: "Abogado Colaborador",
    image: "/images/rafael.jpg",
    bio: "...",
    website: "https://rafaelreyespulido.eu"
  },
  {
    name: "Xiomara Sánchez",
    role: "Asistente Legal (Colombia)",
    image: "/images/xiomara.jpg",
    bio: "..."
  }
];
```

#### Services Tree
```javascript
const servicesTree = {
  personas: {
    espana: [
      { id: "movilidad-profesional", title: "Movilidad Profesional", ... },
      { id: "regularizacion", title: "Regularización Migratoria", ... },
      { id: "documentos", title: "Documentos en Orden", ... }
    ],
    colombia: [
      { id: "vivir-colombia", title: "Vivir en Colombia", ... }
    ]
  },
  entidades: {
    proyectos: [
      { id: "proyectos-europeos", title: "Proyectos Europeos", ... }
    ],
    asesoria: [
      { id: "asesoria-migratoria", title: "Asesoría en Migraciones", ... }
    ]
  }
};
```

### 5. Responsive Design

- **Mobile**: Árbol de decisión con acordeón, navegación hamburger
- **Tablet**: Tabs horizontales para primera división
- **Desktop**: Layout completo con sidebar de navegación en servicios

## Technical Considerations

### Dependencies
- React Router para navegación
- Framer Motion para animaciones (ya instalado)
- Lucide React para iconos (ya instalado)
- Shadcn/ui components (ya instalados)

### Performance
- Lazy loading para imágenes de equipo
- Code splitting por rutas (opcional)
- Optimización SEO con React Helmet

### Accessibility
- ARIA labels en árbol de decisión
- Keyboard navigation para tabs
- Contraste de colores verificado
