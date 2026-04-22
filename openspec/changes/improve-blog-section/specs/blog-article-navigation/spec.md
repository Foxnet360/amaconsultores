# Specification: blog-article-navigation

## ADDED Requirements

### Requirement: Breadcrumbs are present on article pages
Each blog article page SHALL display breadcrumbs linking back to the blog index and home.

#### Scenario: User opens a blog article
- **WHEN** a user visits `/blog/:slug`
- **THEN** breadcrumbs show "Inicio > Blog > [Article Title]"
- **AND** clicking "Blog" navigates to `/blog`
- **AND** clicking "Inicio" navigates to `/`

### Requirement: Sticky table of contents from headings
The article page SHALL extract all `heading_2` blocks from the Notion content and render them as a sticky table of contents on desktop.

#### Scenario: User reads a long article on desktop
- **WHEN** an article has two or more `heading_2` blocks
- **THEN** a sticky sidebar shows clickable links to each heading
- **AND** clicking a link smoothly scrolls to the corresponding section
- **AND** each target heading has `scroll-mt-24` to offset the fixed navbar
- **AND** the table of contents is hidden on mobile or collapses into a dropdown

### Requirement: Reading progress indicator
The article page SHALL display a thin progress bar at the top of the viewport indicating how much of the article has been read.

#### Scenario: User scrolls through an article
- **WHEN** the user scrolls down the page
- **THEN** a progress bar at the top of the viewport fills proportionally to scroll position
- **AND** the progress bar is `h-1` and uses the gold accent color
- **AND** it updates smoothly without causing layout shifts

### Requirement: Previous and next article navigation
At the bottom of each article, the page SHALL show links to the chronologically previous and next published articles.

#### Scenario: User finishes reading an article
- **WHEN** a user scrolls to the end of the article content
- **THEN** cards for the previous and next articles are displayed
- **AND** each card shows the article title and publication date
- **AND** clicking a card navigates to that article

### Requirement: Social sharing buttons
Each article page SHALL provide buttons to share the current article URL via WhatsApp, LinkedIn, X (Twitter), and Facebook.

#### Scenario: User wants to share an article
- **WHEN** a user clicks a share button
- **THEN** the native share dialog opens if the Web Share API is available
- **AND** if unavailable, a share URL for the selected network opens in a new tab
- **AND** buttons appear both below the article header and above the previous/next navigation

### Requirement: End-of-article call to action
Each article SHALL display a prominent CTA after the content prompting the reader to schedule a consultation or contact the team.

#### Scenario: User reaches the end of the article
- **WHEN** the user scrolls past the article body
- **THEN** a CTA block appears with the text "¿Tienes dudas sobre este tema?"
- **AND** it includes a button linking to `/contacto` or opening the TidyCal modal
