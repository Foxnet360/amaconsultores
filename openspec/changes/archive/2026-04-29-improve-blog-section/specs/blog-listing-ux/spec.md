# Specification: blog-listing-ux

## ADDED Requirements

### Requirement: Blog listing supports pagination
The BlogPage SHALL paginate the list of posts when there are more than 9 articles.

#### Scenario: Blog has more than 9 posts
- **WHEN** the total number of posts exceeds 9
- **THEN** only the first 9 posts are displayed initially
- **AND** pagination controls (numbered pages or "Load more") appear below the grid
- **AND** filtering by category or search resets to the first page

#### Scenario: Blog has 9 or fewer posts
- **WHEN** the total number of posts is 9 or fewer
- **THEN** all posts are displayed without pagination controls

### Requirement: Empty state provides guidance
When no posts match the selected filters or search query, the page SHALL show a helpful empty state instead of a plain message.

#### Scenario: Search yields no results
- **WHEN** the user applies filters or a search query that returns zero posts
- **THEN** an illustration/icon and message "No encontramos artículos con esos criterios" is shown
- **AND** a "Limpiar filtros" button is provided that resets category and search inputs

### Requirement: End-of-list call to action
The bottom of the BlogPage SHALL display a CTA section encouraging visitors to subscribe or contact the team.

#### Scenario: User scrolls past the post grid
- **WHEN** the user reaches the end of the post listing (last page or no pagination)
- **THEN** a CTA section appears with the heading "¿Necesitas asesoría personalizada?"
- **AND** it includes a brief description and a button linking to `/contacto`

### Requirement: Category and search filters are responsive
The category filter pills and search input SHALL remain usable on mobile screens.

#### Scenario: User visits blog on a mobile device
- **WHEN** the viewport width is below 768px
- **THEN** category pills wrap to multiple lines without overflow
- **AND** the search input remains full-width and tappable
