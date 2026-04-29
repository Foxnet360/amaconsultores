# Specification: notion-block-renderer-extended

## ADDED Requirements

### Requirement: Toggle blocks are supported
The NotionBlockRenderer SHALL render `toggle` blocks as collapsible accordion sections.

#### Scenario: Article contains a toggle block
- **WHEN** the Notion content includes a `toggle` block
- **THEN** it renders as a clickable accordion with the toggle text as the header
- **AND** clicking the header expands/collapses the nested children blocks
- **AND** the toggle uses a dark-theme compatible style with a chevron icon

### Requirement: Table blocks are supported
The NotionBlockRenderer SHALL render `table` and `table_row` blocks as an HTML table.

#### Scenario: Article contains a Notion table
- **WHEN** the content includes a `table` with `table_row` children
- **THEN** it renders as a semantic `<table>` element
- **AND** the first row is styled as a header row
- **AND** the table is horizontally scrollable on narrow viewports
- **AND** cell text uses light colors on the dark article background

### Requirement: Bookmark blocks are supported
The NotionBlockRenderer SHALL render `bookmark` blocks as rich link previews showing the URL, title, description, and favicon if available.

#### Scenario: Article contains a bookmark block
- **WHEN** the content includes a `bookmark` block
- **THEN** it renders as a bordered card with the bookmark URL
- **AND** if title/description metadata is present, it is displayed
- **AND** clicking the card opens the URL in a new tab

### Requirement: Column layouts are supported
The NotionBlockRenderer SHALL render `column_list` and `column` blocks as responsive side-by-side layouts.

#### Scenario: Article contains a two-column Notion layout
- **WHEN** the content includes a `column_list` with `column` children
- **THEN** each column renders its nested blocks
- **AND** columns display side-by-side on desktop (`grid-cols-2`)
- **AND** columns stack vertically on mobile

### Requirement: Embedded video and media are supported
The NotionBlockRenderer SHALL render `video` and `embed` blocks as responsive iframes or native video players.

#### Scenario: Article contains a YouTube or Vimeo embed
- **WHEN** the content includes a `video` or `embed` block with an external URL
- **THEN** it renders inside a responsive 16:9 container
- **AND** the iframe loads lazily to preserve performance
- **AND** if the provider is unsupported, a fallback link to the original URL is shown
