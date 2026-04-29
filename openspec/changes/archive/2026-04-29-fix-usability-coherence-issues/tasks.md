## 1. Preparación y Limpieza

- [x] 1.1 Verificar que CallToAction.jsx no se usa en ningún lado (grep -r "CallToAction" src/)
- [x] 1.2 Eliminar archivo src/components/CallToAction.jsx
- [x] 1.3 Actualizar fecha en src/pages/AvisoLegalPage.jsx (cambiar "30 de marzo de 2026" a fecha actual)
- [x] 1.4 Crear backup de rama actual en git

## 2. Coherencia Visual - PricingPage

- [x] 2.1 Cambiar fondo de PricingPage: bg-gray-50 → bg-[#0f172a]
- [x] 2.2 Actualizar hero section: bg-primary-blue → degradado oscuro consistente
- [x] 2.3 Modificar PricingCard component interno: fondo oscuro, texto blanco
- [x] 2.4 Reemplazar text-navy por text-white en todos los textos
- [x] 2.5 Actualizar NoteBox: fondo azul oscuro, borde dorado sutil
- [x] 2.6 Actualizar FAQItem: fondo oscuro, mantener acordeón funcional
- [x] 2.7 Verificar visualmente en desktop, tablet y mobile

## 3. Mensajes CTA - Estandarización

- [x] 3.1 Actualizar Navigation.jsx: "Reservar asesoría" → "Agendar consulta gratuita (30 min)"
- [x] 3.2 Actualizar HomePage.jsx CTA final: "Agendar asesoría GRATUITA" → "Comenzar proceso - Consulta inicial gratuita"
- [x] 3.3 Agregar subtexto explicativo en CTA final (30 minutos)
- [x] 3.4 Actualizar Footer.jsx: destacar teléfono de España, agregar CTA "Agendar consulta"
- [x] 3.5 Verificar consistencia de todos los mensajes CTA en el sitio

## 4. Calculadora de Elegibilidad - Mejoras

- [x] 4.1 Agregar texto "Esta evaluación es orientativa" al inicio de la calculadora
- [x] 4.2 Modificar mensaje CTA en resultados: "Agendar asesoría 50€" → "Agendar asesoría personalizada"
- [x] 4.3 Agregar subtexto explicativo: "50€ (descontable del total si continúas)"
- [x] 4.4 Agregar tooltip o link "¿Qué significa esto?" con explicación
- [x] 4.5 Agregar link "Ver tarifas completas" apuntando a /precios
- [x] 4.6 Mejorar descripción de próximos pasos en resultados

## 5. Accesibilidad - Contraste

- [x] 5.1 Actualizar index.css: cambiar todas las instancias de text-white/60 → text-white/80
- [x] 5.2 Verificar que text-white/80 sobre fondo #0f172a pasa WCAG AA (ratio 4.5:1 mínimo)
- [x] 5.3 Verificar que text-white/80 sobre fondo #0f2744 pasa WCAG AA
- [x] 5.4 Validar con WebAIM Contrast Checker
- [x] 5.5 Documentar cambios en STYLE_GUIDE.md si existe

## 6. Accesibilidad - ARIA Attributes

- [x] 6.1 Agregar skip-to-content link en MainLayout.jsx (antes de nav)
- [x] 6.2 Agregar id="main-content" al elemento main en MainLayout.jsx
- [x] 6.3 Actualizar TidyCalModal.jsx: agregar role="dialog", aria-modal="true", aria-labelledby
- [x] 6.4 Implementar focus trap en TidyCalModal
- [x] 6.5 Actualizar Navigation.jsx dropdown: agregar aria-expanded, aria-haspopup
- [x] 6.6 Agregar aria-live="polite" en calculadora de elegibilidad
- [x] 6.7 Agregar aria-valuenow, aria-valuemin, aria-valuemax en barra de progreso
- [x] 6.8 Verificar todos los formularios tienen htmlFor coincidiendo con id
- [x] 6.9 Agregar aria-describedby para mensajes de error en formularios (N/A - usan toast notifications)
- [x] 6.10 Actualizar alt de logo: "Logo AMA Consultores" descriptivo

## 7. Usabilidad - Homepage Optimización

- [x] 7.1 Colapsar sección "Por qué confiar" a 2x2 grid en mobile (md:grid-cols-2)
- [x] 7.2 Verificar que 4 cards de servicios son prominentes
- [x] 7.3 Evaluar truncar testimonios largos con "Ver más" (opcional - no necesario)
- [x] 7.4 Verificar smooth scroll funciona en todos los CTAs internos

## 8. Usabilidad - Páginas de Servicio

- [x] 8.1 Agregar índice navegable en RegularizacionPage.jsx (sidebar sticky)
- [x] 8.2 Crear enlaces a cada bloque: #arraigos, #residencias-excepcionales, etc.
- [x] 8.3 Agregar scroll-mt-24 a cada bloque para compensar header fijo
- [x] 8.4 Agregar índice similar en MovilidadPage.jsx si aplica
- [x] 8.5 Verificar que los anchors funcionan correctamente

## 9. SEO y Breadcrumbs

- [x] 9.1 Agregar breadcrumbs en PricingPage.jsx (como en RegularizacionPage)
- [x] 9.2 Agregar breadcrumbs en BlogPage.jsx
- [x] 9.3 Agregar breadcrumbs en TeamPage.jsx
- [x] 9.4 Verificar que todos los breadcrumbs usan icono Home y ChevronRight
- [x] 9.5 Verificar canonical URLs están presentes

## 10. Testing y Validación

- [x] 10.1 Ejecutar npm run lint (sin errores)
- [x] 10.2 Ejecutar npm run build (sin errores)
- [ ] 10.3 Testear navegación completa con teclado (Tab, Enter, Escape)
- [ ] 10.4 Testear TidyCalModal con teclado (foco atrapado, Escape cierra)
- [ ] 10.5 Ejecutar Lighthouse Accessibility Audit (score > 90)
- [ ] 10.6 Validar contraste con axe DevTools (0 violaciones)
- [ ] 10.7 Testear en Chrome, Firefox, Safari (desktop)
- [ ] 10.8 Testear en Chrome mobile, Safari iOS (simulador o dispositivo real)
- [ ] 10.9 Verificar que calculadora funciona end-to-end
- [ ] 10.10 Verificar que formulario de contacto envía correctamente

## 11. Documentación

- [x] 11.1 Actualizar CHANGELOG.md con cambios realizados
- [x] 11.2 Actualizar README.md si es necesario
- [x] 11.3 Verificar que STYLE_GUIDE.md refleja los nuevos estándares
- [x] 11.4 Documentar decisiones de diseño en docs/ si aplica

## 12. Post-Deploy (después de merge)

- [ ] 12.1 Monitorear analytics: tasa de conversión de CTAs
- [ ] 12.2 Monitorear tiempo en página de PricingPage
- [ ] 12.3 Verificar que no hay errores en consola en producción
- [ ] 12.4 Pedir feedback a usuarios (opcional)
- [ ] 12.5 Considerar A/B test para mensajes CTA (futuro)
