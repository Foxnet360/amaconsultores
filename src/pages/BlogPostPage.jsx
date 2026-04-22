import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Home, ChevronRight } from 'lucide-react';
import { useBlogPost, useRelatedPosts } from '@/hooks/useBlogQueries';
import { isNotionConfigured, fetchBlogPostBySlug, fetchRelatedPosts, fetchPrevNextPosts } from '@/lib/notion';
import NotionBlockRenderer from '@/components/NotionBlockRenderer';
import { BlogPostSkeleton } from '@/components/BlogSkeletons';
import ReadingProgress from '@/components/ReadingProgress';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import ArticleNav from '@/components/ArticleNav';
import ArticleCTA from '@/components/ArticleCTA';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  // Mock data for fallback
  const mockPosts = [
    {
      id: '1',
      title: 'Nuevo Real Decreto 1155/2024: Cambios en los arraigos',
      slug: 'nuevo-rd-1155-2024-arraigos',
      excerpt: 'Analizamos las principales novedades del nuevo Real Decreto y cómo afectan a los procesos de arraigo en España.',
      content: [
        {
          type: 'paragraph',
          paragraph: {
            rich_text: [{ plain_text: 'El pasado mes entró en vigor el Real Decreto 1155/2024, que introduce importantes modificaciones en la Ley de Extranjería, especialmente en lo referente a las modalidades de arraigo.', annotations: {} }]
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ plain_text: 'Principales novedades', annotations: {} }]
          }
        },
        {
          type: 'paragraph',
          paragraph: {
            rich_text: [{ plain_text: 'Entre los cambios más significativos encontramos:', annotations: {} }]
          }
        },
        {
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [{ plain_text: 'Nueva figura del arraigo socioformativo', annotations: {} }]
          }
        },
        {
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [{ plain_text: 'Modificación de requisitos para el arraigo sociolaboral', annotations: {} }]
          }
        },
        {
          type: 'bulleted_list_item',
          bulleted_list_item: {
            rich_text: [{ plain_text: 'Procedimiento más ágil para la tramitación', annotations: {} }]
          }
        },
      ],
      category: 'Noticias',
      publishedDate: '2024-03-15',
      author: 'Ángela Morales',
      featuredImage: null,
    },
  ];

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!isNotionConfigured()) {
        console.warn('Notion not configured. Using mock data.');
        const foundPost = mockPosts.find(p => p.slug === slug);
        if (foundPost) {
          setPost(foundPost);
          setUsingMockData(true);
        } else {
          setPost(null);
        }
        setLoading(false);
        return;
      }

      const notionPost = await fetchBlogPostBySlug(slug);
      
      if (notionPost) {
        setPost(notionPost);
        setUsingMockData(false);
        
        // Load related posts
        const related = await fetchRelatedPosts(slug, notionPost.category, 3);
        setRelatedPosts(related);
        
        // Load prev/next posts
        const { prevPost, nextPost } = await fetchPrevNextPosts(slug);
        setPrevPost(prevPost);
        setNextPost(nextPost);
      } else {
        setPost(null);
      }
    } catch (err) {
      console.error('Error loading post:', err);
      setError('Error al cargar el artículo. Por favor, inténtalo de nuevo.');
      
      // Fallback to mock data
      const foundPost = mockPosts.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        setUsingMockData(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Estimate reading time
  const getReadingTime = () => {
    if (!post || !post.content) return 3;
    
    // Calculate based on content blocks
    let wordCount = 0;
    const countWords = (blocks) => {
      blocks.forEach(block => {
        if (block.paragraph?.rich_text) {
          wordCount += block.paragraph.rich_text.reduce((acc, text) => acc + (text.plain_text?.split(/\s+/).length || 0), 0);
        } else if (block.heading_1?.rich_text || block.heading_2?.rich_text || block.heading_3?.rich_text) {
          const text = block.heading_1?.rich_text || block.heading_2?.rich_text || block.heading_3?.rich_text;
          wordCount += text.reduce((acc, t) => acc + (t.plain_text?.split(/\s+/).length || 0), 0);
        }
      });
    };
    
    if (Array.isArray(post.content)) {
      countWords(post.content);
    }
    
    return Math.max(1, Math.ceil(wordCount / 200));
  };

  if (loading) {
    return <BlogPostSkeleton />;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0f172a] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <p className="text-white/70 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gold hover:underline"
          >
            <ArrowLeft size={20} />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog AMA Consultores</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://amaconsultores.eu/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://amaconsultores.eu/blog/${post.slug}`} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Person',
              name: post.author
            },
            datePublished: post.publishedDate,
            publisher: {
              '@type': 'Organization',
              name: 'AMA Consultores',
              logo: {
                '@type': 'ImageObject',
                url: 'https://amaconsultores.eu/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://amaconsultores.eu/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        <ReadingProgress />
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e3a5f] to-[#0f2744] pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                  <Home size={16} />
                  Inicio
                </Link>
                <ChevronRight size={16} />
                <Link to="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
                <ChevronRight size={16} />
                <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
              </nav>
              
              {usingMockData && (
                <div className="mb-4 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full inline-block">
                  <span className="text-amber-400 text-xs">Modo demostración</span>
                </div>
              )}
              
              <span className="inline-block px-3 py-1 bg-gold text-navy text-sm font-semibold rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(post.publishedDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{getReadingTime()} min de lectura</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <TableOfContents blocks={post.content} />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 max-w-4xl mx-auto lg:mx-0 bg-[#0f2744]/60 border border-white/10 rounded-2xl p-8 md:p-12"
              >
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="mb-8 -mx-8 -mt-8 md:-mx-12 md:-mt-12">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                      loading="eager"
                    />
                  </div>
                )}

                {/* Content Blocks */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-white/80 mb-6 font-medium leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mb-8">
                    <ShareButtons title={post.title} url={`https://amaconsultores.eu/blog/${post.slug}`} />
                  </div>
                  
                  {post.content && post.content.length > 0 ? (
                    <>
                      {/* Render grouped lists */}
                      {post.content.map((block, index) => {
                        // Handle list grouping
                        if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
                          const isFirstInList = index === 0 || 
                            !['bulleted_list_item', 'numbered_list_item'].includes(post.content[index - 1]?.type);
                            
                          if (!isFirstInList) return null;
                          
                          // Collect all consecutive list items
                          const listItems = [];
                          let i = index;
                          const isBulleted = block.type === 'bulleted_list_item';
                          
                          while (i < post.content.length && 
                                 post.content[i].type === (isBulleted ? 'bulleted_list_item' : 'numbered_list_item')) {
                            listItems.push(post.content[i]);
                            i++;
                          }
                          
                          const ListTag = isBulleted ? 'ul' : 'ol';
                          return (
                            <ListTag key={index} className={isBulleted ? 'mb-6 space-y-2' : 'mb-6 space-y-2 list-decimal pl-6'}>
                              {listItems.map((item, itemIndex) => (
                                <NotionBlockRenderer key={`${index}-${itemIndex}`} block={item} />
                              ))}
                            </ListTag>
                          );
                        }
                        
                        return <NotionBlockRenderer key={index} block={block} />;
                      })}
                    </>
                  ) : (
                    <div className="text-white/70">
                      <p>Contenido del artículo en desarrollo...</p>
                    </div>
                  )}
                </div>
                
                <ArticleNav prevPost={prevPost} nextPost={nextPost} />
                <ArticleCTA />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-[#0f172a] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">Artículos relacionados</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="block bg-[#0f2744]/60 border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-all"
                  >
                    <span className="text-sm text-gold font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-3">{relatedPost.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPostPage;
