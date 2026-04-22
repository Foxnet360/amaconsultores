# Proposal: Improve Blog Section

## Why

The blog section currently breaks visual consistency with the rest of the AMA Consultores website, creating a jarring experience for users navigating from service pages. Additionally, the blog article pages lack essential reading navigation (table of contents, progress bar, sharing), and the Notion block renderer is missing support for several content types (toggle, table, bookmark, video) that the editorial team may already be using. These gaps reduce engagement, readability, and the perceived professionalism of the content area.

## What Changes

- **Unify BlogPostPage to the site's dark theme**: Migrate backgrounds, text colors, borders, and cards to match the navy/gold visual system used across the rest of the site.
- **Update NotionBlockRenderer for dark theme support**: Adjust callout, quote, divider, list, and code block styles to work correctly on dark backgrounds.
- **Add article navigation UX**: Implement breadcrumbs, a sticky table of contents extracted from `heading_2` blocks, a reading progress bar, and previous/next article navigation.
- **Add social sharing buttons**: WhatsApp, LinkedIn, X (Twitter), and Facebook share buttons at the top and bottom of each article.
- **Extend NotionBlockRenderer with missing block types**: Add support for `toggle`, `table`/`table_row`, `bookmark`, `column_list`/`column`, and `video`/`embed`.
- **Improve BlogPage listing UX**: Add end-of-list CTA section, better empty state, and pagination or "Load more" logic (if post count exceeds 9).
- **Add final article CTA**: Prompt readers to book a consultation or contact the team after reading an article.

## Capabilities

### New Capabilities
- `blog-dark-theme`: Visual unification of blog article and listing pages with the site's dark color system.
- `blog-article-navigation`: Sticky table of contents, reading progress bar, breadcrumbs, previous/next navigation, and social sharing on article pages.
- `notion-block-renderer-extended`: Expanded Notion block support including toggle, table, bookmark, column layouts, and embedded media.
- `blog-listing-ux`: Pagination, empty-state improvements, and end-of-list CTAs on the blog listing page.

### Modified Capabilities
- *(none — no existing specs to modify)*

## Impact

- **Files affected**: `src/pages/BlogPage.jsx`, `src/pages/BlogPostPage.jsx`, `src/components/NotionBlockRenderer.jsx`, `src/hooks/useBlogQueries.js` (possible pagination changes), `src/layouts/MainLayout.jsx` (if progress bar is global).
- **Dependencies**: No new external libraries required. Social sharing uses standard Web Share API with native URL fallbacks.
- **CMS compatibility**: Changes must remain compatible with the current Notion-to-JSON fetch pipeline (`npm run fetch-notion`).
- **SEO/Performance**: Should not negatively impact Core Web Vitals; lazy-loaded images and code-split blocks remain intact.
