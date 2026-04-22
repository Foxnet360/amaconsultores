// Notion data loader - reads from static JSON files
// This avoids CORS issues by fetching at build time, not runtime

// Rate limiting configuration
const RETRY_CONFIG = {
  maxRetries: 3,
  baseDelay: 1000, // 1 second
  maxDelay: 10000, // 10 seconds
};

// Exponential backoff delay calculation
const getRetryDelay = (attempt) => {
  const delay = Math.min(
    RETRY_CONFIG.baseDelay * Math.pow(2, attempt),
    RETRY_CONFIG.maxDelay
  );
  // Add random jitter (±20%)
  const jitter = delay * 0.2 * (Math.random() - 0.5);
  return delay + jitter;
};

// Retry wrapper for async functions
const withRetry = async (fn, operationName = 'operation') => {
  let lastError;
  
  for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      // Don't retry on 4xx errors (client errors)
      if (error.status >= 400 && error.status < 500) {
        throw error;
      }
      
      // Check if it's a rate limit error (429)
      const isRateLimit = error.status === 429 || 
                         error.message?.includes('rate limit') ||
                         error.message?.includes('too many requests');
      
      if (attempt < RETRY_CONFIG.maxRetries) {
        const delay = isRateLimit 
          ? getRetryDelay(attempt) * 2 // Double delay for rate limits
          : getRetryDelay(attempt);
        
        console.warn(`${operationName} failed (attempt ${attempt + 1}/${RETRY_CONFIG.maxRetries + 1}). Retrying in ${Math.round(delay)}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
};

// Check if Notion is configured (for build-time validation)
export const isNotionConfigured = () => {
  return !!(import.meta.env.VITE_NOTION_TOKEN && import.meta.env.VITE_NOTION_DATABASE_ID);
};

// Load posts from static JSON with retry logic
async function loadPosts() {
  return withRetry(async () => {
    const response = await fetch('/data/posts.json');
    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
  }, 'loadPosts');
}

// Load posts with content from static JSON with retry logic
async function loadPostsWithContent() {
  return withRetry(async () => {
    const response = await fetch('/data/posts-content.json');
    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
  }, 'loadPostsWithContent');
}

// Fetch all published blog posts with error handling
export const fetchBlogPosts = async () => {
  try {
    const posts = await loadPosts();
    if (posts) return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error.message);
  }
  
  // Fallback to mock data
  console.warn('Using mock data for blog posts');
  return null;
};

// Fetch a single blog post by slug with error handling
export const fetchBlogPostBySlug = async (slug) => {
  try {
    const posts = await loadPostsWithContent();
    if (!posts) return null;
    
    const post = posts.find(p => p.slug === slug);
    return post || null;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error.message);
    return null;
  }
};

// Fetch related posts (same category, excluding current) with error handling
export const fetchRelatedPosts = async (currentSlug, category, limit = 3) => {
  try {
    const posts = await loadPosts();
    if (!posts) return [];
    
    return posts
      .filter(p => p.category === category && p.slug !== currentSlug)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching related posts:', error.message);
    return [];
  }
};

// Fetch previous and next posts by published date
export const fetchPrevNextPosts = async (currentSlug) => {
  try {
    const posts = await loadPosts();
    if (!posts) return { prevPost: null, nextPost: null };
    
    // Sort by published date descending (newest first)
    const sortedPosts = [...posts].sort((a, b) => 
      new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    
    const currentIndex = sortedPosts.findIndex(p => p.slug === currentSlug);
    if (currentIndex === -1) return { prevPost: null, nextPost: null };
    
    return {
      prevPost: sortedPosts[currentIndex + 1] || null,
      nextPost: sortedPosts[currentIndex - 1] || null,
    };
  } catch (error) {
    console.error('Error fetching prev/next posts:', error.message);
    return { prevPost: null, nextPost: null };
  }
};
