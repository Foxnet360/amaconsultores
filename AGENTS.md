# Agent Guidelines

## Build Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (runs llms generator then vite build)
- `npm run preview` - Preview production build on port 3000
- `npm run lint` - Run ESLint (quiet mode - errors only)
- `npm run lint:warn` - Run ESLint with warnings

## Code Style

### Imports
- Use `@/` alias for all src imports (configured in vite.config.js and jsconfig.json)
- Group imports: React first, then external libraries, then internal components/utils
- Example: `import { Button } from '@/components/ui/button';`

### Component Structure
- Use functional components with arrow functions for page components
- Use function declarations for reusable UI components
- Components use PascalCase (e.g., `HomePage.jsx`, `Button.jsx`)
- One component per file, default export

### Naming Conventions
- Components: PascalCase (e.g., `Navigation.jsx`)
- Utilities/hooks: camelCase (e.g., `useToast.js`, `utils.js`)
- CSS classes: Tailwind with custom gold color utilities (`text-gold-400`, `bg-gold-500`)
- Boolean props: use `is`/`has` prefixes (e.g., `isOpen`, `hasError`)

### Styling
- Use Tailwind CSS exclusively (no inline styles)
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- Theme uses CSS variables defined in `src/index.css`
- Custom gold colors available: `gold-400` (#d4af37), `gold-500` (#d4af37), `gold-600` (#b8941f)
- Shadcn/ui components use `neutral` base color

### State Management
- Use React hooks (useState, useEffect) for local state
- No global state library - lift state when needed

### Error Handling
- ESLint configured with critical rules only
- Prop-types validation disabled (non-critical)
- Runtime errors: ensure no-undef rule is followed

### File Organization
```
src/
  components/
    ui/          # Shadcn/ui components
    home/        # Home page sections
    about/       # About page sections
    services/    # Services page sections
    forms/       # Form components
  pages/         # Route-level pages
  layouts/       # Layout wrappers
  hooks/         # Custom React hooks
  lib/           # Utilities (cn, etc.)
```

### ESLint Rules
- Critical: `no-undef` (error)
- Disabled non-critical: prop-types, unused-vars, react-in-jsx-scope
- Import rules: no-self-import (error), no-cycle (off for performance)

### TypeScript
- Project uses JavaScript (not TypeScript)
- JSDoc comments acceptable but not required

### Testing
- No test framework currently configured
- Add tests with `npm install --save-dev vitest @testing-library/react` if needed

## Key Libraries
- React 18 + React Router 7
- Tailwind CSS 3.4 + tailwindcss-animate
- Shadcn/ui components with Radix UI primitives
- Framer Motion for animations
- Lucide React for icons
- Vite for build tooling

## Environment
- Node.js version: see `.nvmrc`
- Package manager: npm
- Port: 3000 for dev and preview
