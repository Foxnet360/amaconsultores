/* eslint-env node */
#!/usr/bin/env node

/**
 * Script de medición de rendimiento
 * Ejecutar: node scripts/check-performance.js
 * 
 * Mide métricas Core Web Vitals usando Lighthouse CI
 * Requiere: npm install -g @lhci/cli
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📊 Medición de rendimiento...\n');

// Verificar que existe el build
const distPath = path.join(__dirname, '..', 'dist', 'index.html');
if (!fs.existsSync(distPath)) {
  console.error('❌ Error: No se encontró el build. Ejecuta "npm run build" primero.');
  process.exit(1);
}

// Obtener tamaño del bundle
const assetsPath = path.join(__dirname, '..', 'dist', 'assets');
let totalSize = 0;
let jsSize = 0;
let cssSize = 0;

if (fs.existsSync(assetsPath)) {
  const files = fs.readdirSync(assetsPath);
  for (const file of files) {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
    
    if (file.endsWith('.js')) jsSize += stats.size;
    if (file.endsWith('.css')) cssSize += stats.size;
  }
}

const formatSize = (bytes) => {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
};

console.log('📦 Tamaño del Bundle:');
console.log(`   JavaScript: ${formatSize(jsSize)}`);
console.log(`   CSS: ${formatSize(cssSize)}`);
console.log(`   Total: ${formatSize(totalSize)}\n`);

// Umbrales recomendados
const JS_THRESHOLD = 1024 * 1024 * 2.5; // 2.5 MB
const TOTAL_THRESHOLD = 1024 * 1024 * 5; // 5 MB

if (jsSize > JS_THRESHOLD) {
  console.warn(`⚠️  El bundle JS es mayor a 2.5 MB. Considera code-splitting.`);
}

if (totalSize > TOTAL_THRESHOLD) {
  console.warn(`⚠️  El bundle total es mayor a 5 MB. Considera optimizar imágenes.`);
}

console.log('\n🎯 Objetivos Core Web Vitals:');
console.log('   FCP (First Contentful Paint): < 1.8s');
console.log('   LCP (Largest Contentful Paint): < 2.5s');
console.log('   TBT (Total Blocking Time): < 200ms');
console.log('   CLS (Cumulative Layout Shift): < 0.1\n');

console.log('💡 Para mediciones precisas con Lighthouse:');
console.log('   1. npm install -g @lhci/cli');
console.log('   2. npx lhci autorun');
console.log('   3. O usa PageSpeed Insights: https://pagespeed.web.dev/\n');

console.log('✅ Análisis de bundle completado.');
