# Changelog

All notable changes to the AMA Consultores website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2025-04-12

### Fixed - Usability & Coherence Issues

#### Visual Coherence
- **PricingPage**: Unified dark theme (`#0f172a` background) consistent with rest of site
- **Pricing Cards**: Updated to dark background with proper contrast
- **Removed**: Unused `CallToAction.jsx` component (orphaned code)

#### CTA Messaging Standardization
- **Navigation**: "Agendar consulta gratuita (30 min)"
- **Homepage CTA**: "Comenzar proceso - Consulta inicial gratuita"
- **Calculator**: "Agendar asesoría personalizada" with "50€ (descontable del total)"
- **Footer**: Highlighted Spain phone number, added prominent CTA

#### Accessibility Improvements
- **Contrast**: Increased from `text-white/60` to `text-white/80` (WCAG AA compliant)
- **Skip Link**: Added skip-to-content navigation for keyboard users
- **ARIA Attributes**:
  - TidyCalModal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
  - Navigation dropdown: `aria-expanded`, `aria-haspopup`
  - Calculator: `aria-live="polite"`, progress bar ARIA attributes
- **Focus Management**: Implemented focus trap in TidyCalModal

#### Usability Enhancements
- **Service Pages**: Added sticky navigation indices (RegularizacionPage, MovilidadPage)
- **Homepage**: Optimized "Por qué confiar" section for mobile (2x2 grid)
- **Calculator**: Added context "Esta evaluación es orientativa", improved next steps

#### SEO & Navigation
- **Breadcrumbs**: Added to PricingPage, BlogPage, TeamPage
- **Canonical URLs**: Verified on all pages
- **Legal Page**: Updated date in AvisoLegalPage

### Technical
- All builds pass linting and production build
- No breaking changes to URLs or data structure
- Maintained backward compatibility

## [2.0.0] - 2026-03-31

### Major Release - One-Page Architecture

#### Added
- Complete one-page corporate website with 9 anchor sections
- Blog with Notion CMS integration
- Legal pages (GDPR compliant)
- Cookie consent system
- GA4 analytics with consent management
- PDF generation capabilities
- Eligibility calculator

#### Technical
- React 18 + Vite 4
- Tailwind CSS 3.4
- shadcn/ui + Radix UI
- Framer Motion animations
- React Router v7 (hash-based routing)

## [1.0.0] - 2025-01-15

### Initial Release
- Basic corporate website
- Contact forms with EmailJS
- TidyCal integration