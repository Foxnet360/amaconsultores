import React, { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const NotionBlockRenderer = ({ block }) => {
  if (!block) return null;

  const { type } = block;

  switch (type) {
    case 'paragraph':
      return <ParagraphBlock block={block} />;
    
    case 'heading_1':
      return <Heading1Block block={block} />;
    
    case 'heading_2':
      return <Heading2Block block={block} />;
    
    case 'heading_3':
      return <Heading3Block block={block} />;
    
    case 'bulleted_list_item':
      return <BulletedListItemBlock block={block} />;
    
    case 'numbered_list_item':
      return <NumberedListItemBlock block={block} />;
    
    case 'image':
      return <ImageBlock block={block} />;
    
    case 'callout':
      return <CalloutBlock block={block} />;
    
    case 'divider':
      return <DividerBlock />;
    
    case 'quote':
      return <QuoteBlock block={block} />;
    
    case 'code':
      return <CodeBlock block={block} />;
    
    case 'toggle':
      return <ToggleBlock block={block} />;
    
    case 'table':
      return <TableBlock block={block} />;
    
    case 'table_row':
      // Table rows are rendered inside TableBlock; skip standalone
      return null;
    
    case 'bookmark':
      return <BookmarkBlock block={block} />;
    
    case 'column_list':
      return <ColumnListBlock block={block} />;
    
    case 'column':
      // Columns are rendered inside ColumnListBlock; skip standalone
      return null;
    
    case 'video':
      return <VideoBlock block={block} />;
    
    case 'embed':
      return <EmbedBlock block={block} />;
    
    default:
      return <UnsupportedBlock block={block} />;
  }
};

// Rich text renderer
const RichText = ({ richText }) => {
  if (!richText || richText.length === 0) return null;

  return (
    <>
      {richText.map((text, index) => {
        const { annotations, plain_text } = text;
        const className = cn({
          'font-bold': annotations?.bold,
          'italic': annotations?.italic,
          'underline': annotations?.underline,
          'line-through': annotations?.strikethrough,
          'font-mono bg-white/10 text-white px-1 py-0.5 rounded text-sm': annotations?.code,
        });

        if (text.href) {
          return (
            <a
              key={index}
              href={text.href}
              className="text-gold-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {plain_text}
            </a>
          );
        }

        return (
          <span key={index} className={className}>
            {plain_text}
          </span>
        );
      })}
    </>
  );
};

// Paragraph block
const ParagraphBlock = ({ block }) => {
  const text = block.paragraph?.rich_text;
  return (
    <p className="mb-6 text-white/80 leading-relaxed">
      <RichText richText={text} />
    </p>
  );
};

// Heading 1 block
const Heading1Block = ({ block }) => {
  const text = block.heading_1?.rich_text;
  return (
    <h1 className="text-3xl font-bold text-gold-500 mt-10 mb-6">
      <RichText richText={text} />
    </h1>
  );
};

// Heading 2 block
const Heading2Block = ({ block }) => {
  const text = block.heading_2?.rich_text;
  const slug = text?.map(t => t.plain_text).join('').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-+/g, '-');
  return (
    <h2 id={slug} className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-24">
      <RichText richText={text} />
    </h2>
  );
};

// Heading 3 block
const Heading3Block = ({ block }) => {
  const text = block.heading_3?.rich_text;
  return (
    <h3 className="text-xl font-bold text-white mt-6 mb-3">
      <RichText richText={text} />
    </h3>
  );
};

// Bulleted list item block
const BulletedListItemBlock = ({ block }) => {
  const text = block.bulleted_list_item?.rich_text;
  return (
    <li className="mb-2 text-white/80 flex items-start gap-2">
      <span className="text-gold-400 mt-1.5">•</span>
      <span><RichText richText={text} /></span>
    </li>
  );
};

// Numbered list item block
const NumberedListItemBlock = ({ block }) => {
  const text = block.numbered_list_item?.rich_text;
  return (
    <li className="mb-2 text-white/80">
      <RichText richText={text} />
    </li>
  );
};

// Image block
const ImageBlock = ({ block }) => {
  const image = block.image;
  const src = image?.file?.url || image?.external?.url;
  const caption = image?.caption?.[0]?.plain_text;

  if (!src) return null;

  return (
    <figure className="my-8">
      <img
        src={src}
        alt={caption || 'Imagen del artículo'}
        className="w-full rounded-lg shadow-md"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      {caption && (
        <figcaption className="text-center text-sm text-white/60 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Callout block
const CalloutBlock = ({ block }) => {
  const text = block.callout?.rich_text;
  const icon = block.callout?.icon;

  return (
    <div className="my-6 p-4 bg-amber-500/10 border-l-4 border-amber-500/50 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon?.emoji || '💡'}</span>
        <div className="text-amber-200">
          <RichText richText={text} />
        </div>
      </div>
    </div>
  );
};

// Divider block
const DividerBlock = () => (
  <hr className="my-8 border-t-2 border-white/10" />
);

// Quote block
const QuoteBlock = ({ block }) => {
  const text = block.quote?.rich_text;
  return (
    <blockquote className="my-6 pl-6 border-l-4 border-gold-500 italic text-white/80">
      <RichText richText={text} />
    </blockquote>
  );
};

// Code block for legal citations
const CodeBlock = ({ block }) => {
  const text = block.code?.rich_text;
  const language = block.code?.language || 'plain text';
  
  // Format the code content
  const codeContent = text?.map(t => t.plain_text).join('') || '';
  
  return (
    <div className="my-6">
      <div className="bg-navy-900 rounded-t-lg px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          {language === 'plain text' ? 'Referencia Legal' : language}
        </span>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto font-mono text-sm leading-relaxed border border-gray-800">
        <code>{codeContent}</code>
      </pre>
    </div>
  );
};

// Toggle block
const ToggleBlock = ({ block }) => {
  const [isOpen, setIsOpen] = useState(false);
  const text = block.toggle?.rich_text;
  const children = block.toggle?.children || block.children || [];

  return (
    <div className="my-6 border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 p-4 bg-[#0f2744]/40 hover:bg-[#0f2744]/60 transition-colors text-left"
      >
        <ChevronRight
          size={18}
          className={cn(
            'text-gold-400 transition-transform duration-200',
            isOpen && 'rotate-90'
          )}
        />
        <span className="font-medium text-white">
          <RichText richText={text} />
        </span>
      </button>
      {isOpen && (
        <div className="p-4 pl-10 border-t border-white/10 bg-[#0f172a]/30">
          {children.map((child, index) => (
            <NotionBlockRenderer key={index} block={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Table block
const TableBlock = ({ block }) => {
  // Notion tables: a table block followed by table_row blocks in the parent's array.
  // Since this renderer receives one block at a time, we can't look ahead in the parent.
  // However, some Notion exports include rows as children of the table block.
  const rows = block.children || block.table?.children || [];

  if (!rows.length) {
    return (
      <div className="my-6 p-4 border border-white/10 rounded-lg text-white/50 text-sm">
        Tabla sin filas
      </div>
    );
  }

  return (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#0f2744]/80">
            {rows[0].table_row?.cells?.map((cell, i) => (
              <th
                key={i}
                className="border border-white/10 px-4 py-2 text-left text-sm font-semibold text-white"
              >
                <RichText richText={cell} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-[#0f172a]/40 even:bg-[#0f2744]/30">
              {row.table_row?.cells?.map((cell, i) => (
                <td
                  key={i}
                  className="border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  <RichText richText={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Bookmark block
const BookmarkBlock = ({ block }) => {
  const url = block.bookmark?.url;
  const caption = block.bookmark?.caption;

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 block p-4 border border-white/10 rounded-lg bg-[#0f2744]/30 hover:border-gold/30 hover:bg-[#0f2744]/50 transition-all group"
    >
      <div className="flex items-start gap-3">
        <ExternalLink size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-gold-500 font-medium truncate group-hover:underline">
            {url}
          </p>
          {caption && caption.length > 0 && (
            <p className="text-white/60 text-sm mt-1">
              <RichText richText={caption} />
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

// Column list block
const ColumnListBlock = ({ block }) => {
  const columns = block.children || block.column_list?.children || [];

  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {columns.map((column, index) => (
        <div key={index} className="space-y-2">
          {(column.children || column.column?.children || []).map((child, childIndex) => (
            <NotionBlockRenderer key={childIndex} block={child} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Video block
const VideoBlock = ({ block }) => {
  const url = block.video?.external?.url || block.video?.file?.url;

  if (!url) return null;

  // Convert common video URLs to embed URLs
  const getEmbedUrl = (videoUrl) => {
    if (videoUrl.includes('youtube.com/watch')) {
      const id = new URL(videoUrl).searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : videoUrl;
    }
    if (videoUrl.includes('youtu.be/')) {
      const id = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      return id ? `https://www.youtube.com/embed/${id}` : videoUrl;
    }
    if (videoUrl.includes('vimeo.com/')) {
      const id = videoUrl.split('vimeo.com/')[1]?.split('?')[0];
      return id ? `https://player.vimeo.com/video/${id}` : videoUrl;
    }
    return videoUrl;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="my-8">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          src={embedUrl}
          title="Embedded video"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

// Embed block
const EmbedBlock = ({ block }) => {
  const url = block.embed?.url;

  if (!url) return null;

  return (
    <div className="my-8">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black border border-white/10">
        <iframe
          src={url}
          title="Embedded content"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

// Unsupported block fallback
const UnsupportedBlock = ({ block }) => {
  const type = block?.type || 'unknown';
  const url = block?.[type]?.external?.url || block?.[type]?.url || block?.[type]?.file?.url;

  return (
    <div className="my-6 p-4 border border-dashed border-white/20 rounded-lg bg-white/5">
      <p className="text-sm text-white/50">
        Bloque no soportado: <span className="font-mono text-white/70">{type}</span>
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold-500 hover:underline mt-1 inline-block"
        >
          Ver contenido externo
        </a>
      )}
    </div>
  );
};

export default NotionBlockRenderer;
