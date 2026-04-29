# Design: Improve Blog Section

## Context

The AMA Consultores website uses a cohesive dark theme (`#0f172a` base, gold accents, translucent navy surfaces) across all service and legal pages. The blog section is the only area that still uses a light theme (`bg-slate-50`, white cards, `text-gray-700`), creating a visual disconnect. Additionally, the article pages were built as a minimum viable Notion-to-blog pipeline and lack reader-navigation affordances (TOC, progress, sharing) that are standard in content-heavy sites. The `NotionBlockRenderer` currently handles only basic blocks (paragraph, headings, lists, image, callout, quote, code), so any advanced Notion layout used by the editorial team is silently dropped.

## Goals / Non-Goals

**Goals:**
- Unify `BlogPage` and `BlogPostPage` with the site's dark visual system.
- Add sticky table of contents, breadcrumbs, reading progress bar, prev/next navigation, and social sharing to article pages.
- Extend `NotionBlockRenderer` to support `toggle`, `table`, `bookmark`, `column_list`, and `video`/`embed` blocks.
- Improve the blog listing with pagination, a better empty state, and an end-of-list CTA.

**Non-Goals:**
- Rebuilding the Notion fetch pipeline (`npm run fetch-notion`) or changing the JSON schema exported from Notion.
- Adding a newsletter/email subscription backend.
- Implementing comments or user-generated content on articles.
- Changing the existing React Query caching strategy beyond pagination offsets.

## Decisions

### 1. Dark theme migration approach: modify pages and renderer in place
**Rationale:** The blog section is only two main files (`BlogPage.jsx`, `BlogPostPage.jsx`) and one renderer. A full refactor is unnecessary; targeted color swaps and border adjustments will achieve consistency quickly.
- **Alternatives considered:** Creating a separate `BlogLayout` wrapper. Rejected because `MainLayout` already provides the global nav/footer and skip-link; a wrapper would add nesting without benefit.

### 2. Table of contents extracted from `heading_2` blocks in the Notion content array
**Rationale:** Notion exports heading blocks with plain text. We can scan the `post.content` array at render time, collect `heading_2` items, and generate slugs for anchor links. This avoids parsing HTML after render and keeps the dependency on the existing JSON structure.
- **Implementation note:** Each `heading_2` will be wrapped with an `id` derived from the text (kebab-case, URL-safe). The TOC sidebar will be sticky at `lg:top-24` and hidden below `lg` breakpoints.

### 3. Reading progress bar as a dedicated component positioned fixed at the top of the viewport
**Rationale:** A global progress bar in `MainLayout` would require route-aware article detection. It's simpler and lower-risk to place a `ReadingProgress` component inside `BlogPostPage` that listens to scroll events on `window` and updates a `transform: scaleX(...)` bar.
- **Performance note:** Use a throttled scroll listener (or `requestAnimationFrame`) to avoid jank.

### 4. Social sharing: Web Share API with native URL fallbacks
**Rationale:** No external libraries needed. Mobile users get the native OS share sheet; desktop users get direct share URLs (WhatsApp Web, LinkedIn share, X intent, Facebook sharer).
- **Security note:** All fallbacks use `encodeURIComponent(window.location.href)` and open in a new tab with `rel="noopener noreferrer"`.

### 5. Notion block extensions handled via additional `case` statements in `NotionBlockRenderer`
**Rationale:** The renderer uses a clean `switch` per block type. Adding new block types is a natural extension. For `toggle`, we need recursive rendering of `children` blocks, so a new `ToggleBlock` sub-component will manage its own open/closed state.
- **Table rendering:** Notion represents tables as a `table` block followed by `table_row` blocks. The renderer will group consecutive `table_row` blocks under a shared `<table>` wrapper and treat the first row as the header.

### 6. Pagination on BlogPage: client-side page slicing
**Rationale:** The blog data is fetched once into a static JSON (`public/data/posts.json`) and loaded via React Query. Server-side pagination is impossible without a backend. We will slice the filtered array client-side and show 9 posts per page with simple numbered page buttons.
- **Edge case:** If the user searches or changes category, the page resets to 1.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Scroll performance degradation from progress bar + TOC intersection observers | Use a lightweight `scroll` listener with `requestAnimationFrame` instead of `IntersectionObserver` for the progress bar. TOC links use standard anchor clicks. |
| Heading slug collisions if two `heading_2` blocks have identical text | Append an index suffix (`-1`, `-2`) during slug generation to guarantee unique IDs. |
| Notion block `children` may be deeply nested in toggles | Cap recursive depth at a reasonable limit (e.g., 5 levels) or rely on React's call stack; toggles in this domain are unlikely to exceed 2-3 levels. |
| Tables with many columns break mobile layout | Wrap tables in an `overflow-x-auto` container and use `min-w-full` so horizontal scrolling is isolated to the table, not the page. |
| Dark theme migration may introduce contrast regressions in Notion callouts | Use translucent backgrounds (`bg-amber-500/10`, `bg-blue-500/10`) and light text (`text-amber-200`, `text-blue-200`) to preserve WCAG AA compliance. |

## Migration Plan

1. **Phase 1 — Theme unification:** Update `BlogPostPage` and `NotionBlockRenderer` colors. Verify no `bg-slate-50` or `text-gray-700` remain in the blog scope.
2. **Phase 2 — Navigation & UX:** Add `Breadcrumb`, `TableOfContents`, `ReadingProgress`, `ArticleNav`, `ShareButtons`, and `ArticleCTA` components. Wire them into `BlogPostPage`.
3. **Phase 3 — Notion blocks:** Extend `NotionBlockRenderer` with `toggle`, `table`, `bookmark`, `column_list`, and `video`/`embed`.
4. **Phase 4 — Listing improvements:** Add pagination, empty-state upgrade, and end-of-list CTA to `BlogPage`.
5. **Validation:** Run `npm run lint`, `npm run build`, and manual smoke tests on `/blog` and `/blog/:slug`.

## Open Questions

1. Does the current Notion export include `children` arrays inside `toggle` blocks, or do we need to adjust the fetch script to include nested blocks?
2. Are there existing blog posts that already use `table`, `bookmark`, or `video` blocks in Notion so we can test the new renderer immediately?
3. Should the "previous/next" navigation be based purely on chronological order, or should it prefer posts in the same category?
