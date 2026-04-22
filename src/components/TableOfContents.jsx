import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

const TableOfContents = ({ blocks }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const headings = blocks
    ?.filter(block => block.type === 'heading_2')
    ?.map(block => block.heading_2?.rich_text?.map(t => t.plain_text).join(''))
    ?.filter(Boolean) || [];

  if (headings.length < 2) return null;

  const handleClick = (e, text) => {
    e.preventDefault();
    const slug = slugify(text);
    const element = document.getElementById(slug);
    if (element) {
      const offset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 p-4 bg-[#0f2744]/60 border border-white/10 rounded-xl text-white font-medium"
        >
          <span className="flex items-center gap-2">
            <List size={20} className="text-gold" />
            Índice de contenidos
          </span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <nav className="mt-2 p-4 bg-[#0f2744]/60 border border-white/10 rounded-xl">
            <ul className="space-y-2">
              {headings.map((heading, index) => (
                <li key={index}>
                  <a
                    href={`#${slugify(heading)}`}
                    onClick={(e) => handleClick(e, heading)}
                    className="block text-sm text-white/70 hover:text-gold transition-colors py-1"
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
        <nav className="lg:sticky lg:top-24 bg-[#0f2744]/60 rounded-xl p-6 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <List size={20} className="text-gold" />
            Índice de contenidos
          </h3>
          <ul className="space-y-2">
            {headings.map((heading, index) => (
              <li key={index}>
                <a
                  href={`#${slugify(heading)}`}
                  onClick={(e) => handleClick(e, heading)}
                  className="block text-sm text-white/70 hover:text-gold transition-colors py-1"
                >
                  {heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default TableOfContents;
