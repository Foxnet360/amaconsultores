import React from 'react';

export const BlogCardSkeleton = () => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
      
      <div className="p-6 space-y-4">
        {/* Category badge placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
        </div>
        
        {/* Title placeholder */}
        <div className="space-y-2">
          <div className="w-full h-6 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
        </div>
        
        {/* Excerpt placeholder */}
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
        </div>
        
        {/* Date and author placeholder */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-200 rounded"></div>
            <div className="w-24 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </article>
  );
};

export const BlogPostSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-50 animate-pulse">
      {/* Hero section placeholder */}
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back link placeholder */}
          <div className="w-32 h-4 bg-white/20 rounded"></div>
          
          {/* Category badge placeholder */}
          <div className="w-24 h-6 bg-white/20 rounded-full"></div>
          
          {/* Title placeholder */}
          <div className="space-y-3">
            <div className="w-full h-10 bg-white/20 rounded"></div>
            <div className="w-3/4 h-10 bg-white/20 rounded"></div>
          </div>
          
          {/* Meta info placeholder */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-32 h-5 bg-white/20 rounded"></div>
            <div className="w-40 h-5 bg-white/20 rounded"></div>
            <div className="w-28 h-5 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
            {/* Excerpt placeholder */}
            <div className="w-full h-6 bg-gray-200 rounded"></div>
            
            {/* Content blocks placeholder */}
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
            </div>
            
            {/* Heading placeholder */}
            <div className="w-1/2 h-8 bg-gray-200 rounded mt-8"></div>
            
            {/* More content placeholder */}
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
