# Implementation Tasks - AMA Website Redesign Phase 1

## FASE 1: URGENTE (Antes de marzo 2026)

### T1: Navigation Update
**Spec**: navigation-update
**Priority**: HIGH
**Estimado**: 2-3 horas

- [x] T1.1: Actualizar menú en Navigation.jsx
  - Cambiar items: Inicio, Servicios, Quiénes somos, Opiniones, Blog, Contacto
  - Agregar dropdown para Servicios con subcategorías
  - Implementar active state con color dorado
  
- [x] T1.2: Actualizar menú mobile
  - Actualizar Sheet menu con nuevos items
  - Agregar submenús expandibles para Servicios
  
- [x] T1.3: Actualizar Footer.jsx
  - Actualizar links de navegación
  - Cambiar link de /evaluacion a /contacto
  
- [x] T1.4: Actualizar rutas en App.jsx
  - Eliminar ruta /evaluacion
  - Agregar ruta /contacto → ContactPage
  - Agregar rutas de servicios con parámetros
  - Crear redirección /evaluacion → /contacto

**Dependencias**: Ninguna
**Bloquea**: T2, T3, T4, T5

---

### T2: Homepage Redesign
**Spec**: homepage-redesign
**Priority**: HIGH
**Estimado**: 4-5 horas

- [x] T2.1: Actualizar HeroSection.jsx
  - Reemplazar título: "Seguridad y acompañamiento en tu movilidad internacional"
  - Reemplazar subtítulo según especificación
  - **ELIMINAR** botón "Evaluación Gratuita"
  - Agregar 2 botones: "Soy una persona" y "Soy una entidad"
  - Links con parámetros de URL
  
- [x] T2.2: Crear PresentationBlock.jsx
  - Crear componente con texto de Ángela
  - Estilo consistente con diseño
  - Agregar a HomePage
  
- [x] T2.3: Actualizar ProfileCards.jsx
  - Cambiar a 4 tarjetas específicas
  - Iconos: 🌍 📋 🇨🇴 🏢
  - Actualizar títulos y descripciones
  - Links a secciones correctas de servicios
  
- [x] T2.4: Crear TrustBlock.jsx
  - Mostrar 3 indicadores: +10 años, España/Colombia, Trato personalizado
  - Diseño visual destacado
  - Agregar a HomePage
  
- [x] T2.5: Actualizar SEO en HomePage.jsx
  - Actualizar title tag
  - Actualizar meta description
  - Actualizar Open Graph tags

**Dependencias**: T1 (rutas)
**Bloquea**: Ninguna

---

### T3: Services Tree Navigation
**Spec**: services-tree-navigation
**Priority**: HIGH
**Estimado**: 6-8 horas

- [x] T3.1: Crear estructura de componentes de servicios
  - Crear directorio src/components/services/
  - Crear ServiceTree.jsx
  - Crear PersonasBranch.jsx
  - Crear EntidadesBranch.jsx
  
- [x] T3.2: Implementar selector inicial (Personas/Entidades)
  - Dos botones grandes y claros
  - Actualizar URL: ?type=personas o ?type=entidades
  - Persistir selección en URL
  
- [x] T3.3: Implementar rama Personas - España
  - Sub-selección España/Colombia
  - Sección Movilidad Profesional
  - Sección Regularización Migratoria
  - Sección Documentos en Orden (con lista completa)
  - Botón "Pregúntame" con link a contacto
  
- [x] T3.4: Implementar rama Personas - Colombia
  - Sección Vivir en Colombia
  - Lista de servicios
  - Mensaje de cierre sobre costos
  - Botón "Contactar para presupuesto"
  
- [x] T3.5: Implementar rama Entidades - Proyectos Europeos
  - Casos de éxito (Save the Children, Formar para Cuidar)
  - Lista de servicios
  - Diseño profesional
  
- [x] T3.6: Implementar rama Entidades - Asesoría Migratoria
  - Lista de servicios para entidades
  - Descripciones claras
  
- [x] T3.7: Actualizar ServicesPage.jsx
  - Integrar ServiceTree
  - Manejar parámetros de URL
  - Smooth scroll a secciones
  
- [x] T3.8: Implementar navegación entre ramas
  - Tabs persistentes
  - Estado visual activo
  - Transiciones suaves

**Dependencias**: T1 (rutas)
**Bloquea**: Ninguna

---

### T4: Contact Page
**Spec**: contact-page
**Priority**: HIGH
**Estimado**: 3-4 horas

- [x] T4.1: Crear ContactPage.jsx
  - Crear archivo en src/pages/
  - Importar en App.jsx
  
- [x] T4.2: Crear ContactForm.jsx
  - Campos: Nombre, Email, País, Mensaje
  - Validación de campos
  - Submit a info@amaconsultores.eu
  - Mensaje de confirmación
  
- [x] T4.3: Crear ContactInfo.jsx
  - Emails: angela.morales@, info@
  - Teléfonos: España y Colombia
  - Iconos correspondientes
  - Links funcionales (mailto:, tel:)
  
- [x] T4.4: Crear ContactWarning.jsx
  - Aviso sobre 48h de respuesta
  - Aviso sobre costos
  - Diseño destacado (alerta)
  
- [x] T4.5: Integrar WhatsApp
  - Botón "Contactar por WhatsApp Colombia"
  - Link wa.me con mensaje predefinido
  - Mensaje incluye datos del formulario
  
- [x] T4.6: SEO para ContactPage
  - Title y meta description
  - Open Graph tags

**Dependencias**: T1 (rutas)
**Bloquea**: Ninguna

---

### T5: Team Profiles
**Spec**: team-profiles
**Priority**: HIGH
**Estimado**: 3-4 horas

- [x] T5.1: Preparar assets de equipo
  - Agregar fotos: /public/images/team/angela.jpg, rafael.jpg, xiomara.jpg
  - Usar placeholders si no están disponibles
  
- [x] T5.2: Crear TeamMember.jsx
  - Componente reutilizable para miembros
  - Props: name, role, image, bio, website (opcional)
  - Diseño responsive
  
- [x] T5.3: Actualizar TeamSection.jsx
  - Perfil Ángela: diseño destacado, biografía completa
  - Perfil Rafael: link a su web
  - Perfil Xiomara: asistente Colombia
  
- [x] T5.4: Crear TeamNote.jsx
  - Nota de cierre: "Somos un equipo pequeño..."
  - Diseño especial (cursiva, caja destacada)
  
- [x] T5.5: Actualizar AboutPage.jsx
  - Integrar TeamSection actualizado
  - Revisar MissionSection (mantener o actualizar según necesidad)
  - Actualizar TrustSignals si es necesario
  
- [x] T5.6: SEO para AboutPage
  - Actualizar title y description

**Dependencias**: T1 (rutas)
**Bloquea**: Ninguna

---

### T6: Testing & QA
**Priority**: HIGH
**Estimado**: 2-3 horas

- [x] T6.1: Testing de navegación
  - Verificar todos los links del menú
  - Verificar dropdown de servicios
  - Verificar menú mobile
  
- [x] T6.2: Testing de rutas
  - Verificar /contacto funciona
  - Verificar /evaluacion redirige a /contacto
  - Verificar parámetros de URL en servicios
  
- [x] T6.3: Testing responsive
  - Desktop (1920px, 1440px)
  - Tablet (768px)
  - Mobile (375px, 390px)
  
- [x] T6.4: Testing de formularios
  - Validación de campos
  - Submit de formulario de contacto
  - Link de WhatsApp
  
- [x] T6.5: Revisión de contenido
  - Verificar textos según documento de referencias
  - Verificar frases estándar ("Para actuaciones que requieren firma letrada...")
  - Verificar tono cercano y humano

**Dependencias**: T1, T2, T3, T4, T5
**Bloquea**: T7

---

### T7: Build & Deploy Preparation
**Priority**: HIGH
**Estimado**: 1-2 horas

- [x] T7.1: Verificar build
  - npm run build
  - Resolver errores de lint si los hay
  - Verificar que no hay errores de compilación
  
- [x] T7.2: Preparar imágenes
  - Optimizar fotos del equipo
  - Verificar rutas de imágenes
  - Agregar alt text descriptivo
  
- [x] T7.3: Documentación
  - Actualizar README si es necesario
  - Documentar nuevas rutas
  - Documentar cambios en navegación

**Dependencias**: T6
**Bloquea**: Ninguna

---

## Resumen de Tareas

| ID | Tarea | Prioridad | Estimado | Dependencias |
|----|-------|-----------|----------|--------------|
| T1 | Navigation Update | HIGH | 2-3h | - |
| T2 | Homepage Redesign | HIGH | 4-5h | T1 |
| T3 | Services Tree | HIGH | 6-8h | T1 |
| T4 | Contact Page | HIGH | 3-4h | T1 |
| T5 | Team Profiles | HIGH | 3-4h | T1 |
| T6 | Testing & QA | HIGH | 2-3h | T1-5 |
| T7 | Build & Deploy | HIGH | 1-2h | T6 |

**Total estimado**: 21-29 horas

---

## Orden de Implementación Recomendado

1. **T1** (Navigation) - Base para todas las demás tareas
2. **T2, T3, T4, T5** en paralelo o secuencial según preferencia
3. **T6** (Testing) - Después de completar funcionalidad
4. **T7** (Build) - Final

---

## Notas Importantes

- **Idioma**: Mantener español como idioma principal
- **Tono**: Cercano, humano, segunda persona ("tú")
- **Colores**: Mantener azul oscuro (#1e3a5f) y dorado (#d4af37)
- **Frase estándar**: Incluir en todas las páginas de servicios: "Para actuaciones que requieren firma letrada, coordino con mi abogado de confianza."
- **Fotos**: Usar placeholders si no están disponibles las fotos reales
- **Evaluación Gratuita**: ELIMINAR completamente de todas las páginas
