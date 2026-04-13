import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Search, Tag, Home, ChevronRight } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogQueries';
import { BlogCardSkeleton } from '@/components/BlogSkeletons';

const categories = ['Todas', 'Noticias', 'Guías', 'Legal', 'Documentos'];

// Fallback mock data when Notion is not configured
const mockPosts = [
  {
    id: '1',
    title: 'Nuevo Real Decreto 1155/2024: Cambios en los arraigos',
    slug: 'nuevo-rd-1155-2024-arraigos',
    excerpt: 'Analizamos las principales novedades del nuevo Real Decreto y cómo afectan a los procesos de arraigo en España.',
    category: 'Noticias',
    publishedDate: '2024-03-15',
    author: 'Ángela Morales',
    featuredImage: null,
  },
  {
    id: '2',
    title: 'Guía completa: Homologación de títulos universitarios',
    slug: 'guia-homologacion-titulos-universitarios',
    excerpt: 'Todo lo que necesitas saber sobre el proceso de homologación de títulos extranjeros en España.',
    category: 'Guías',
    publishedDate: '2024-03-10',
    author: 'Equipo AMA',
    featuredImage: null,
  },
  {
    id: '3',
    title: 'Convenio de Doble Nacionalidad España-Colombia',
    slug: 'convenio-doble-nacionalidad-espana-colombia',
    excerpt: 'Explicamos los beneficios y requisitos del convenio de doble nacionalidad entre España y Colombia de 1979.',
    category: 'Legal',
    publishedDate: '2024-03-05',
    author: 'Rafael Reyes',
    featuredImage: null,
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use React Query for data fetching with caching
  const { data: postsData, isLoading, error } = useBlogPosts();
  
  const posts = useMemo(() => {
    if (postsData && postsData.length > 0) {
      return postsData;
    }
    // Fallback to mock data
    return mockPosts;
  }, [postsData]);
  
  const usingMockData = !postsData;

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | AMA Consultores</title>
        <meta name="description" content="Blog de AMA Consultores. Artículos, guías y noticias sobre migraciones internacionales, regularización y proyectos sociales." />
        <link rel="canonical" href="https://amaconsultores.eu/blog" />
        <meta property="og:title" content="Blog | AMA Consultores" />
        <meta property="og:description" content="Artículos, guías y noticias sobre migraciones internacionales" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amaconsultores.eu/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | AMA Consultores" />
        <meta name="twitter:description" content="Artículos, guías y noticias sobre migraciones internacionales" />
      </Helmet>
      
      <div className="min-h-screen bg-[#0f172a]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744] pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                  <Home size={16} />
                  Inicio
                </Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium">Blog</span>
              </nav>

              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
                Blog AMA Consultores
              </h1>
              <p className="font-lato text-xl text-white/80 max-w-2xl mx-auto">
                Artículos, guías y noticias sobre migraciones internacionales
              </p>
              
              {usingMockData && !isLoading && (
                <div className="mt-4 p-3 bg-gold/20 border border-gold/30 rounded-lg inline-block">
                  <p className="text-gold text-sm">
                    Modo demostración: Usando datos de ejemplo
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-[#1a2335] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gold text-navy'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-white/40 w-full md:w-64"
                  aria-label="Buscar artículos"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Error Message */}
        {error && (
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-400">Error al cargar los artículos. Por favor, inténtalo de nuevo.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 text-red-400 hover:underline font-medium"
                >
                  Intentar de nuevo
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              // Loading skeletons
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <BlogCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2744]/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-300"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      {/* Featured Image */}
                      <div className="h-48 bg-gradient-to-br from-[#1e3a8a] to-[#0f2744] flex items-center justify-center overflow-hidden">
                        {post.featuredImage ? (
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-white text-opacity-30 text-lg font-semibold">AMA Consultores</span>
                        )}
                      </div>
                      
                      <div className="p-6">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <Tag size={16} className="text-gold" />
                          <span className="text-sm text-gold font-medium">{post.category}</span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="font-poppins text-xl font-bold text-white mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-white/70 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        {/* Date and Author */}
                        <div className="flex items-center gap-4 text-sm text-white/50">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.publishedDate)}</span>
                          </div>
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/50 text-lg">No se encontraron artículos con los filtros seleccionados.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
