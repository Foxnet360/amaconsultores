# Agent Guidelines

## Build Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (vite only)
- `npm run build:full` - Full production build (Notion fetch → generate-llms → vite build)
- `npm run preview` - Preview production build on port 3000
- `npm run lint` - Run ESLint (quiet mode - errors only)
- `npm run lint:warn` - Run ESLint with warnings
- `npm run fetch-notion` - Sync blog data from Notion CMS
- `npm run test:accessibility` - Check accessibility compliance
- `npm run test:links` - Check for broken links
- `npm run test:performance` - Analyze bundle size

## Architecture

One-page corporate site (AMA Consultores - immigration consultancy) with:
- 9 anchor sections (#inicio, #regularizacion, #movilidad, #convenios, #colombia, #entidades, #equipo, #asesoria, #contacto)
- Blog at /blog route (Notion CMS)
- Legal pages (GDPR compliant)

## Code Style

### Imports
- Use `@/` alias for all src imports (vite.config.js + jsconfig.json)
- Group order: React → external libs → internal components/utils
- Example: `import { Button } from '@/components/ui/button';`

### Component Patterns
- **Page components**: Arrow functions in pages/ directory
- **UI components**: Function declarations with forwardRef in components/ui/
- **Hooks**: camelCase with `use` prefix (e.g., `use-toast.js`)
- **Utilities**: camelCase in lib/ directory

### Styling
- Tailwind CSS exclusively (no inline styles)
- Use `cn()` from `@/lib/utils` for conditional classes
- CSS variables in src/index.css (navy/gold color scheme)
- Custom colors: `text-gold-400` (#d4af37), `bg-gold-500` (#d4af37)
- shadcn/ui uses `neutral` base color

### ESLint Rules
- **Critical (error)**: `no-undef` - undefined variables cause runtime errors
- **Disabled**: prop-types, unused-vars, react-in-jsx-scope
- **Imports**: `no-self-import` (error), `no-cycle` (off for performance)

## File Organization

```
src/
  components/
    ui/          # shadcn/ui components
    sections/    # One-page sections
    forms/       # Form components
    legal/       # Legal page components
    about/       # About page sections
    services/    # Service components
  pages/         # Route pages + services/* subpages
  layouts/       # Layout wrappers
  hooks/         # Custom React hooks
  lib/           # Utilities (cn, notion.js, etc.)
public/
  data/          # Blog JSON files (generated from Notion)
```

## Environment

- **Node.js**: v20.19.1 (see .nvmrc)
- **Package manager**: npm
- **Port**: 3000 for dev and preview
- **Notion CMS**: Requires VITE_NOTION_TOKEN and VITE_NOTION_DATABASE_ID

## Key Libraries

- React 18 + React Router 7 (hash-based routing for one-page)
- Tailwind CSS 3.4 + tailwindcss-animate
- shadcn/ui + Radix UI primitives
- Framer Motion for animations
- Lucide React for icons
- @react-pdf/renderer for PDF generation
- React Hook Form for forms

## Testing

No test framework configured. Scripts available:
- `npm run test:accessibility` - accessibility checks
- `npm run test:links` - link validation
- `npm run test:performance` - bundle analysis

## Important Notes

- **No TypeScript**: JavaScript only (JSDoc acceptable)
- **No global state**: Use React hooks, lift state when needed
- **Notion CMS**: Blog data must be fetched before build with `npm run fetch-notion`
- **GDPR compliance**: Cookie consent required, GA4 only loads with consent
