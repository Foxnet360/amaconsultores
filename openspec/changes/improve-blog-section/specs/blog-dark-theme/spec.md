# Specification: blog-dark-theme

## ADDED Requirements

### Requirement: Blog article page uses the site's dark visual system
The BlogPostPage SHALL use the same dark color scheme (`#0f172a` base, `#0f2744` surfaces, gold accents, white text hierarchy) as the service pages.

#### Scenario: User navigates to an article from a service page
- **WHEN** a user opens any `/blog/:slug` route
- **THEN** the page background is `#0f172a` or equivalent dark shade
- **AND** the article content card uses a dark translucent surface with subtle border
- **AND** no light-gray (`bg-slate-50`, `bg-gray-50`) backgrounds are present

### Requirement: Notion block renderer supports dark backgrounds
All rendered Notion blocks within an article SHALL maintain readability and visual hierarchy on dark backgrounds without introducing light-themed elements.

#### Scenario: Article contains callouts, quotes, and code blocks
- **WHEN** the article renders a callout block
- **THEN** it uses a dark-tinted background (e.g., `bg-amber-500/10`) with light text
- **AND** quotes use `border-gold-500` with light text
- **AND** code blocks retain a dark terminal-like appearance
- **AND** horizontal dividers use `border-white/10`

### Requirement: Blog listing page follows the dark theme
The BlogPage SHALL apply the same dark palette to its hero, filters, and post cards.

#### Scenario: User visits the blog index
- **WHEN** a user opens `/blog`
- **THEN** the hero, filter bar, and empty state use dark surfaces
- **AND** post cards use dark translucent backgrounds with `hover:border-gold/30`
