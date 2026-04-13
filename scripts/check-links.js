#!/usr/bin/env node

/**
 * Script de validación de links
 * Ejecutar: node scripts/check-links.js
 * 
 * Verifica que todos los links internos y externos sean válidos
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '..', 'src');

const results = {
  internalLinks: [],
  externalLinks: [],
  anchors: [],
  issues: [],
};

// Buscar archivos JSX/TSX
function findJsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules')) {
      findJsxFiles(fullPath, files);
    } else if (stat.isFile() && /\.(jsx|tsx|js|ts)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Extraer links
function extractLinks(content, filePath) {
  // Links internos (href="/...")
  const internalLinkRegex = /href\s*=\s*["']\/(?!\/)[^"']*["']/gi;
  const internalMatches = content.match(internalLinkRegex);
  
  if (internalMatches) {
    internalMatches.forEach(match => {
      const link = match.replace(/href\s*=\s*["']/i, '').replace(/["']$/, '');
      results.internalLinks.push({
        file: path.relative(SRC_DIR, filePath),
        link,
        type: 'internal',
      });
    });
  }
  
  // Links externos (href="http...")
  const externalLinkRegex = /href\s*=\s*["']https?:\/\/[^"']*["']/gi;
  const externalMatches = content.match(externalLinkRegex);
  
  if (externalMatches) {
    externalMatches.forEach(match => {
      const link = match.replace(/href\s*=\s*["']/i, '').replace(/["']$/, '');
      results.externalLinks.push({
        file: path.relative(SRC_DIR, filePath),
        link,
        type: 'external',
      });
    });
  }
  
  // Anchors (href="#...")
  const anchorRegex = /href\s*=\s*["']#[^"']*["']/gi;
  const anchorMatches = content.match(anchorRegex);
  
  if (anchorMatches) {
    anchorMatches.forEach(match => {
      const link = match.replace(/href\s*=\s*["']/i, '').replace(/["']$/, '');
      results.anchors.push({
        file: path.relative(SRC_DIR, filePath),
        link,
        type: 'anchor',
      });
    });
  }
}

// Verificar links
console.log('🔗 Verificando links...\n');

const files = findJsxFiles(SRC_DIR);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  extractLinks(content, file);
}

// Resultados
console.log(`📄 Archivos analizados: ${files.length}`);
console.log(`🔗 Links internos: ${results.internalLinks.length}`);
console.log(`🌐 Links externos: ${results.externalLinks.length}`);
console.log(`⚓ Anchors: ${results.anchors.length}\n`);

// Verificar rutas internas conocidas
const validRoutes = [
  '/',
  '/blog',
  '/politica-de-privacidad',
  '/aviso-legal',
  '/politica-de-cookies',
  '/servicios',
  '/contacto',
  '/sobre-nosotros',
  '/evaluacion',
];

const anchorsNeeded = [
  '#inicio',
  '#regularizacion',
  '#movilidad',
  '#convenios',
  '#colombia',
  '#entidades',
  '#equipo',
  '#asesoria',
  '#contacto',
];

console.log('✅ Rutas conocidas:');
results.internalLinks
  .filter(l => !validRoutes.includes(l.link))
  .forEach(l => {
    console.log(`   ⚠️  Ruta no estándar: ${l.link} (${l.file})`);
  });

console.log('\n⚓ Anchors verificados:');
const foundAnchors = new Set(results.anchors.map(a => a.link));
anchorsNeeded.forEach(anchor => {
  if (foundAnchors.has(anchor)) {
    console.log(`   ✅ ${anchor}`);
  } else {
    console.log(`   ❌ Falta: ${anchor}`);
  }
});

console.log('\n💡 Links externos únicos:');
const uniqueExternal = [...new Set(results.externalLinks.map(l => l.link))];
uniqueExternal.slice(0, 10).forEach(link => {
  console.log(`   ${link}`);
});
if (uniqueExternal.length > 10) {
  console.log(`   ... y ${uniqueExternal.length - 10} más`);
}

console.log('\n✅ Validación de links completada.');
console.log('💡 Para verificar links externos (200 OK), usa: npx link-checker dist/\n');
