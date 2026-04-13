/* eslint-env node */
#!/usr/bin/env node

/**
 * Script de verificación para Notion CMS
 * Ejecutar: node scripts/check-notion-config.js
 */

console.log('🔍 Verificando configuración de Notion CMS...\n');

// Check 1: Environment variables
console.log('✅ Check 1: Variables de entorno');
const token = process.env.VITE_NOTION_TOKEN;
const databaseId = process.env.VITE_NOTION_DATABASE_ID;

if (!token) {
  console.log('   ❌ VITE_NOTION_TOKEN no está configurado');
  console.log('   💡 Añádelo al archivo .env');
} else if (!token.startsWith('secret_')) {
  console.log('   ⚠️  VITE_NOTION_TOKEN no parece válido (debe empezar con "secret_")');
} else {
  console.log('   ✅ VITE_NOTION_TOKEN configurado correctamente');
  console.log(`   📄 Token: ${token.substring(0, 20)}...`);
}

if (!databaseId) {
  console.log('   ❌ VITE_NOTION_DATABASE_ID no está configurado');
  console.log('   💡 Añádelo al archivo .env');
} else if (databaseId.length !== 32) {
  console.log(`   ⚠️  VITE_NOTION_DATABASE_ID no tiene 32 caracteres (tiene ${databaseId.length})`);
} else {
  console.log('   ✅ VITE_NOTION_DATABASE_ID configurado correctamente');
  console.log(`   📄 ID: ${databaseId}`);
}

console.log('\n📋 Resumen:');
if (!token || !databaseId) {
  console.log('   ❌ Configuración incompleta. Falta configurar variables de entorno.');
  console.log('\n📝 Pasos para solucionar:');
  console.log('   1. Crea un archivo .env en la raíz del proyecto');
  console.log('   2. Añade las variables:');
  console.log('      VITE_NOTION_TOKEN=secret_tu_token_aqui');
  console.log('      VITE_NOTION_DATABASE_ID=tu_database_id_aqui');
  console.log('   3. Reinicia el servidor de desarrollo');
} else {
  console.log('   ✅ Variables de entorno configuradas');
  console.log('\n🚀 Para probar la conexión:');
  console.log('   1. Crea un artículo en Notion con Status = "Published"');
  console.log('   2. Ve a http://localhost:3000/blog');
  console.log('   3. Deberías ver el artículo listado');
}

console.log('\n📚 Documentación:');
console.log('   - Guía de configuración: NOTION_SETUP_GUIDE.md');
console.log('   - Guía de uso: NOTION_CMS_GUIDE.md');
