# Tasks: Improve Blog Section

## 1. Theme Unification — BlogPostPage

- [x] 1.1 Change `BlogPostPage` outer background from `bg-slate-50` to `bg-[#0f172a]`
- [x] 1.2 Change article content card from `bg-white` to `bg-[#0f2744]/60` with `border border-white/10`
- [x] 1.3 Update hero section to use gradient dark background consistent with service pages
- [x] 1.4 Update all text colors: `text-gray-700` → `text-white/80`, `text-gray-600` → `text-white/70`, `text-gray-500` → `text-white/60`
- [x] 1.5 Update category badge and metadata to use dark-compatible styles
- [x] 1.6 Update "article not found" error page to dark theme
- [x] 1.7 Verify no light-theme backgrounds remain in `BlogPostPage`

## 2. Theme Unification — BlogPage

- [x] 2.1 Review `BlogPage` background colors (already partially dark — verify consistency)
- [x] 2.2 Ensure empty state and error messages use dark-compatible text and backgrounds
- [x] 2.3 Verify post card hover states use `border-gold/30` and translucent dark backgrounds

## 3. Theme Unification — NotionBlockRenderer

- [x] 3.1 Update `ParagraphBlock`: `text-gray-700` → `text-white/80`
- [x] 3.2 Update `Heading1Block`: `text-gold-500` (verify contrast on dark)
- [x] 3.3 Update `Heading2Block` and `Heading3Block`: `text-navy` → `text-white`
- [x] 3.4 Update `BulletedListItemBlock` and `NumberedListItemBlock`: `text-gray-700` → `text-white/80`
- [x] 3.5 Update `CalloutBlock`: `bg-amber-50` → `bg-amber-500/10`, `text-amber-800` → `text-amber-200`, `border-amber-400` → `border-amber-500/50`
- [x] 3.6 Update `QuoteBlock`: `text-gray-700` → `text-white/80`, keep `border-gold-500`
- [x] 3.7 Update `DividerBlock`: `border-gray-200` → `border-white/10`
- [x] 3.8 Update `CodeBlock` window bar to use dark navy instead of light header
- [x] 3.9 Verify inline code (`annotations.code`) uses dark background with light text

## 4. Article Navigation Components

- [x] 4.1 Create `ReadingProgress.jsx` component (fixed top progress bar)
- [x] 4.2 Create `TableOfContents.jsx` component (sticky sidebar from `heading_2` blocks)
- [x] 4.3 Create `ShareButtons.jsx` component (Web Share API + fallbacks)
- [x] 4.4 Create `ArticleNav.jsx` component (previous/next article cards)
- [x] 4.5 Create `ArticleCTA.jsx` component (end-of-article prompt)
- [x] 4.6 Add breadcrumb navigation to `BlogPostPage` matching site pattern

## 5. Integrate Navigation into BlogPostPage

- [x] 5.1 Add `ReadingProgress` to `BlogPostPage`
- [x] 5.2 Extract `heading_2` blocks and render `TableOfContents` in a two-column layout on desktop
- [x] 5.3 Add `scroll-mt-24` to all rendered `heading_2` elements in `NotionBlockRenderer`
- [x] 5.4 Add `ShareButtons` below article header and above previous/next navigation
- [x] 5.5 Fetch and display previous/next articles by published date
- [x] 5.6 Add `ArticleCTA` after article content and before related articles
- [x] 5.7 Ensure TOC is hidden or collapsible on mobile viewports

## 6. Extend NotionBlockRenderer

- [x] 6.1 Add `toggle` block support with accordion UI and recursive children rendering
- [x] 6.2 Add `table` + `table_row` block support with dark-themed scrollable table
- [x] 6.3 Add `bookmark` block support as a bordered link preview card
- [x] 6.4 Add `column_list` + `column` block support with responsive grid layout
- [x] 6.5 Add `video` / `embed` block support with responsive 16:9 iframe container
- [x] 6.6 Handle unsupported blocks with a graceful fallback (show block type and URL if available)

## 7. BlogPage Listing UX Improvements

- [x] 7.1 Implement pagination logic in `BlogPage` (9 posts per page)
- [x] 7.2 Add pagination controls (numbered buttons) below the post grid
- [x] 7.3 Reset to page 1 when category or search filters change
- [x] 7.4 Improve empty state with an icon, clearer message, and "Limpiar filtros" button
- [x] 7.5 Add end-of-list CTA section on the last page
- [x] 7.6 Verify filter pills and search input are fully usable on mobile

## 8. Testing and Validation

- [x] 8.1 Run `npm run lint` and fix any errors
- [x] 8.2 Run `npm run build` and verify no build failures
- [x] 8.3 Test `BlogPostPage` dark theme visually in browser
- [x] 8.4 Test `TableOfContents` smooth scroll and sticky behavior on desktop
- [x] 8.5 Test `ReadingProgress` updates correctly while scrolling
- [x] 8.6 Test social sharing buttons open correct URLs
- [x] 8.7 Test pagination and empty state on `BlogPage`
- [x] 8.8 Verify responsive behavior at 375px, 768px, and 1440px viewports
