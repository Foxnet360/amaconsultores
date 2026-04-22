import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

const ArticleNav = ({ prevPost, nextPost }) => {
  if (!prevPost && !nextPost) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/10">
      {prevPost ? (
        <Link
          to={`/blog/${prevPost.slug}`}
          className="group p-4 bg-[#0f2744]/60 border border-white/10 rounded-xl hover:border-gold/30 transition-all"
        >
          <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Artículo anterior</span>
          </div>
          <h4 className="font-semibold text-white line-clamp-2 mb-1">{prevPost.title}</h4>
          <div className="flex items-center gap-1 text-xs text-white/40">
            <Calendar size={12} />
            <span>{formatDate(prevPost.publishedDate)}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
      
      {nextPost ? (
        <Link
          to={`/blog/${nextPost.slug}`}
          className="group p-4 bg-[#0f2744]/60 border border-white/10 rounded-xl hover:border-gold/30 transition-all md:text-right"
        >
          <div className="flex items-center justify-end gap-2 text-sm text-white/50 mb-2">
            <span>Artículo siguiente</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <h4 className="font-semibold text-white line-clamp-2 mb-1">{nextPost.title}</h4>
          <div className="flex items-center justify-end gap-1 text-xs text-white/40">
            <Calendar size={12} />
            <span>{formatDate(nextPost.publishedDate)}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ArticleNav;
