/* eslint-env node */
#!/usr/bin/env node

/**
 * Script para descargar datos de Notion durante el build
 * Ejecutar: node scripts/fetch-notion-data.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NOTION_API_URL = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

// Leer variables de entorno
const token = process.env.VITE_NOTION_TOKEN || '';
const databaseId = process.env.VITE_NOTION_DATABASE_ID || '';

if (!token || !databaseId) {
  console.error('❌ Error: Faltan variables de entorno VITE_NOTION_TOKEN o VITE_NOTION_DATABASE_ID');
  console.log('💡 Usando datos de ejemplo...');
  process.exit(0);
}

console.log('🔄 Descargando datos de Notion...');

// Helper para llamadas API
async function notionRequest(endpoint, options = {}) {
  const response = await fetch(`${NOTION_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

// Descargar posts
async function fetchBlogPosts() {
  try {
    const response = await notionRequest(`/databases/${databaseId}/query`, {
      method: 'POST',
      body: JSON.stringify({
        filter: {
          property: 'Status',
          select: {
            equals: 'Publicado',
          },
        },
        sorts: [
          {
            property: 'Published Date',
            direction: 'descending',
            timestamp: 'created_time',
          },
        ],
      }),
    });

    const posts = response.results.map((page) => {
      const properties = page.properties;
      
      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || 'Sin título',
        slug: properties.Slug?.rich_text?.[0]?.plain_text || page.id,
        excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
        category: properties.Category?.select?.name || 'Noticias',
        publishedDate: properties['Published Date']?.date?.start || new Date().toISOString(),
        author: properties.Author?.rich_text?.[0]?.plain_text || 'Equipo AMA',
        featuredImage: properties['Featured Image']?.files?.[0]?.file?.url || 
                      properties['Featured Image']?.files?.[0]?.external?.url || null,
      };
    });

    return posts;
  } catch (error) {
    console.error('❌ Error fetching posts:', error.message);
    return [];
  }
}

// Descargar contenido de cada post
async function fetchPostContent(posts) {
  const postsWithContent = [];
  
  for (const post of posts) {
    try {
      console.log(`  📄 Descargando: ${post.title}`);
      
      // Buscar página por slug
      const response = await notionRequest(`/databases/${databaseId}/query`, {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            property: 'Slug',
            rich_text: {
              equals: post.slug,
            },
          },
        }),
      });

      if (response.results.length === 0) {
        postsWithContent.push({ ...post, content: [] });
        continue;
      }

      const pageId = response.results[0].id;
      
      // Descargar bloques de contenido
      const blocksResponse = await notionRequest(`/blocks/${pageId}/children`);
      
      postsWithContent.push({
        ...post,
        content: blocksResponse.results,
      });
      
      // Esperar un poco para no saturar la API (rate limit: 3 req/s)
      await new Promise(resolve => setTimeout(resolve, 350));
    } catch (error) {
      console.error(`  ❌ Error descargando ${post.title}:`, error.message);
      postsWithContent.push({ ...post, content: [] });
    }
  }
  
  return postsWithContent;
}

// Guardar datos
async function saveData() {
  try {
    // Crear directorio si no existe
    const dataDir = path.join(__dirname, '..', 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Descargar posts
    console.log('📥 Descargando lista de posts...');
    const posts = await fetchBlogPosts();
    console.log(`✅ ${posts.length} posts encontrados`);

    if (posts.length === 0) {
      console.log('⚠️  No hay posts publicados en Notion');
      return;
    }

    // Descargar contenido de cada post
    console.log('📥 Descargando contenido de posts...');
    const postsWithContent = await fetchPostContent(posts);

    // Guardar archivo de posts
    fs.writeFileSync(
      path.join(dataDir, 'posts.json'),
      JSON.stringify(posts, null, 2)
    );
    console.log('✅ posts.json guardado');

    // Guardar archivo de posts con contenido
    fs.writeFileSync(
      path.join(dataDir, 'posts-content.json'),
      JSON.stringify(postsWithContent, null, 2)
    );
    console.log('✅ posts-content.json guardado');

    console.log('\n🎉 Datos de Notion descargados correctamente!');
    console.log('📁 Ubicación: public/data/');
    console.log('🚀 Listo para hacer build y deploy');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

saveData();
