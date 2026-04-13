import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts, fetchBlogPostBySlug, fetchRelatedPosts } from '@/lib/notion';

// Query keys for caching
export const blogKeys = {
  all: ['blog'],
  posts: () => [...blogKeys.all, 'posts'],
  post: (slug) => [...blogKeys.all, 'post', slug],
  related: (slug, category) => [...blogKeys.all, 'related', slug, category],
};

// Hook to fetch all blog posts with caching
export const useBlogPosts = () => {
  return useQuery({
    queryKey: blogKeys.posts(),
    queryFn: async () => {
      const result = await fetchBlogPosts();
      return result;
    },
    staleTime: 0, // Disable stale time for development
    cacheTime: 0, // Disable cache for development
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook to fetch a single blog post with caching
export const useBlogPost = (slug) => {
  return useQuery({
    queryKey: blogKeys.post(slug),
    queryFn: () => fetchBlogPostBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook to fetch related posts with caching
export const useRelatedPosts = (currentSlug, category, limit = 3) => {
  return useQuery({
    queryKey: blogKeys.related(currentSlug, category),
    queryFn: () => fetchRelatedPosts(currentSlug, category, limit),
    enabled: !!currentSlug && !!category,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    retry: 1,
  });
};
