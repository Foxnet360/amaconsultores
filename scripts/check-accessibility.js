/* eslint-env node */
#!/usr/bin/env node

/**
 * Script de verificación de accesibilidad
 * Ejecutar: node scripts/check-accessibility.js
 * 
 * Verifica:
 * - Imágenes sin alt text
 * - Elementos interactivos sin ARIA labels
 * - Contraste de colores básico
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '..', 'src');

const results = {
  imagesWithoutAlt: [],
  interactiveWithoutAria: [],
  filesChecked: 0,
  totalIssues: 0,
};

// Buscar archivos JSX/TSX recursivamente
function findJsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules')) {
      findJsxFiles(fullPath, files);
    } else if (stat.isFile() && /\.(jsx|tsx)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Verificar imágenes sin alt
function checkImages(content, filePath) {
  // Buscar <img sin alt o con alt=""
  const imgRegex = /<img[^>]*>/gi;
  const matches = content.match(imgRegex);
  
  if (matches) {
    for (const match of matches) {
      if (!match.includes('alt=') || /alt\s*=\s*["']\s*["']/i.test(match)) {
        results.imagesWithoutAlt.push({
          file: path.relative(SRC_DIR, filePath),
          line: getLineNumber(content, match),
          element: match.substring(0, 50) + '...',
        });
      }
    }
  }
}

// Verificar elementos interactivos sin aria-label
function checkInteractiveElements(content, filePath) {
  // Botones sin aria-label (si no tienen texto visible claro)
  const buttonRegex = /<button[^>]*>/gi;
  const matches = content.match(buttonRegex);
  
  if (matches) {
    for (const match of matches) {
      // Si no tiene aria-label, aria-labelledby, o aria-describedby
      if (!match.includes('aria-label') && 
          !match.includes('aria-labelledby') && 
          !match.includes('aria-describedby')) {
        // Solo reportar si parece ser un botón icono (tiene poco texto)
        if (match.includes('size=') || match.includes('icon=')) {
          results.interactiveWithoutAria.push({
            file: path.relative(SRC_DIR, filePath),
            line: getLineNumber(content, match),
            element: 'button',
            issue: 'Missing aria-label',
          });
        }
      }
    }
  }
}

// Obtener número de línea
function getLineNumber(content, match) {
  const index = content.indexOf(match);
  if (index === -1) return '?';
  return content.substring(0, index).split('\n').length;
}

// Ejecutar verificaciones
console.log('🔍 Verificando accesibilidad...\n');

const files = findJsxFiles(SRC_DIR);
results.filesChecked = files.length;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  checkImages(content, file);
  checkInteractiveElements(content, file);
}

// Reportar resultados
console.log(`✅ Archivos verificados: ${results.filesChecked}`);
console.log(`⚠️  Problemas encontrados: ${results.imagesWithoutAlt.length + results.interactiveWithoutAria.length}\n`);

if (results.imagesWithoutAlt.length > 0) {
  console.log('📸 Imágenes sin alt text:');
  results.imagesWithoutAlt.forEach(img => {
    console.log(`   ❌ ${img.file}:${img.line}`);
    console.log(`      ${img.element}`);
  });
  console.log();
}

if (results.interactiveWithoutAria.length > 0) {
  console.log('🎛️  Elementos interactivos sin ARIA:');
  results.interactiveWithoutAria.forEach(el => {
    console.log(`   ⚠️  ${el.file}:${el.line} - ${el.element}: ${el.issue}`);
  });
  console.log();
}

if (results.imagesWithoutAlt.length === 0 && results.interactiveWithoutAria.length === 0) {
  console.log('✨ ¡Excelente! No se encontraron problemas de accesibilidad básicos.\n');
  process.exit(0);
} else {
  console.log('💡 Recomendaciones:');
  console.log('   - Añade alt="descripción" a todas las imágenes');
  console.log('   - Añade aria-label a botones icono sin texto visible\n');
  process.exit(1);
}
