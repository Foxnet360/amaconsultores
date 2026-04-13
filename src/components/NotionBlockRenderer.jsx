import React from 'react';
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
    
    default:
      console.warn(`Unsupported block type: ${type}`);
      return null;
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
          'font-mono bg-gray-100 px-1 py-0.5 rounded text-sm': annotations?.code,
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
    <p className="mb-6 text-gray-700 leading-relaxed">
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
  return (
    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
      <RichText richText={text} />
    </h2>
  );
};

// Heading 3 block
const Heading3Block = ({ block }) => {
  const text = block.heading_3?.rich_text;
  return (
    <h3 className="text-xl font-bold text-navy mt-6 mb-3">
      <RichText richText={text} />
    </h3>
  );
};

// Bulleted list item block
const BulletedListItemBlock = ({ block }) => {
  const text = block.bulleted_list_item?.rich_text;
  return (
    <li className="mb-2 text-gray-700 flex items-start gap-2">
      <span className="text-gold-500 mt-1.5">•</span>
      <span><RichText richText={text} /></span>
    </li>
  );
};

// Numbered list item block
const NumberedListItemBlock = ({ block }) => {
  const text = block.numbered_list_item?.rich_text;
  return (
    <li className="mb-2 text-gray-700">
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
        <figcaption className="text-center text-sm text-gray-500 mt-2">
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
    <div className="my-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon?.emoji || '💡'}</span>
        <div className="text-amber-800">
          <RichText richText={text} />
        </div>
      </div>
    </div>
  );
};

// Divider block
const DividerBlock = () => (
  <hr className="my-8 border-t-2 border-gray-200" />
);

// Quote block
const QuoteBlock = ({ block }) => {
  const text = block.quote?.rich_text;
  return (
    <blockquote className="my-6 pl-6 border-l-4 border-gold-500 italic text-gray-700">
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
      <div className="bg-navy rounded-t-lg px-4 py-2 flex items-center justify-between">
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

export default NotionBlockRenderer;
