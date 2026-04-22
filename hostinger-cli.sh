#!/bin/bash

# ============================================
# CONFIGURACIÓN
# ============================================
HOST="amaconsultores"
REMOTE_BASE="/home/u809577906/domains/amaconsultores.eu/public_html"
# ============================================

function show_help() {
    echo ""
    echo "🚀 Hostinger CLI para amaconsultores.eu"
    echo ""
    echo "Uso: ./hostinger-cli.sh <comando> [argumentos]"
    echo ""
    echo "COMANDOS:"
    echo "  upload <archivo/carpeta>     Subir archivo o carpeta al servidor"
    echo "  upload-all                   Subir todo el proyecto (rsync)"
    echo "  deploy                       Hacer deploy de dist/ al servidor"
    echo "  delete <archivo>             Borrar archivo en el servidor"
    echo "  delete-dir <carpeta>         Borrar carpeta en el servidor"
    echo "  list [ruta]                  Listar archivos (default: raíz)"
    echo "  download <archivo>             Descargar archivo del servidor"
    echo "  exec <comando>               Ejecutar comando bash en el servidor"
    echo "  sync                         Sincronización bidireccional (cuidado)"
    echo "  logs                         Ver logs de errores (si existen)"
    echo ""
    echo "EJEMPLOS:"
    echo "  ./hostinger-cli.sh upload ./index.html"
    echo "  ./hostinger-cli.sh upload ./assets/"
    echo "  ./hostinger-cli.sh delete index.html"
    echo "  ./hostinger-cli.sh list /assets/"
    echo "  ./hostinger-cli.sh exec 'ls -la'"
    echo ""
}

# ============================================
# FUNCIONES
# ============================================

function upload() {
    local source="$1"
    local dest="${2:-$REMOTE_BASE}"
    
    if [ ! -e "$source" ]; then
        echo "❌ Error: '$source' no existe localmente"
        exit 1
    fi
    
    echo "📤 Subiendo '$source' → $HOST:$dest/"
    
    if [ -d "$source" ]; then
        # Es carpeta
        rsync -avz --progress \
            -e ssh \
            "$source/" \
            "$HOST:$dest/$(basename $source)/"
    else
        # Es archivo
        rsync -avz --progress \
            -e ssh \
            "$source" \
            "$HOST:$dest/"
    fi
    
    echo "✅ Subida completada"
}

function upload_all() {
    echo "📤 Sincronizando TODO el proyecto local → servidor"
    echo "⚠️  Esto sobrescribirá archivos en el servidor"
    read -p "¿Continuar? (s/N): " confirm
    
    if [[ $confirm == "s" || $confirm == "S" ]]; then
        rsync -avz --delete \
            -e ssh \
            --exclude=".git" \
            --exclude="node_modules" \
            --exclude=".env" \
            --exclude="hostinger-cli.sh" \
            ./ \
            "$HOST:$REMOTE_BASE/"
        echo "✅ Proyecto sincronizado"
    else
        echo "❌ Cancelado"
    fi
}

function deploy() {
    if [ ! -d "./dist" ]; then
        echo "❌ Error: No existe la carpeta './dist'. Ejecuta 'npm run build' primero."
        exit 1
    fi

    echo "🚀 Haciendo deploy de dist/ → $HOST:$REMOTE_BASE/"
    echo "⚠️  Esto sobrescribirá archivos en el servidor"
    read -p "¿Continuar? (s/N): " confirm

    if [[ $confirm == "s" || $confirm == "S" ]]; then
        rsync -avz --delete \
            -e ssh \
            ./dist/ \
            "$HOST:$REMOTE_BASE/"
        echo "✅ Deploy completado"
    else
        echo "❌ Cancelado"
    fi
}

function delete_file() {
    local file="$1"
    echo "🗑️  Borrando archivo: $REMOTE_BASE/$file"
    ssh "$HOST" "rm -f $REMOTE_BASE/$file && echo '✅ Archivo borrado' || echo '❌ No se pudo borrar'"
}

function delete_dir() {
    local dir="$1"
    echo "🗑️  Borrando carpeta: $REMOTE_BASE/$dir"
    read -p "⚠️  ¿Estás seguro? Esta acción no se puede deshacer (s/N): " confirm
    
    if [[ $confirm == "s" || $confirm == "S" ]]; then
        ssh "$HOST" "rm -rf $REMOTE_BASE/$dir && echo '✅ Carpeta borrada' || echo '❌ Error'"
    else
        echo "❌ Cancelado"
    fi
}

function list_files() {
    local path="${1:-$REMOTE_BASE}"
    echo "📁 Listando: $path"
    ssh "$HOST" "ls -lah $path"
}

function download_file() {
    local remote_file="$1"
    local local_name="${2:-$(basename $remote_file)}"
    
    echo "📥 Descargando: $REMOTE_BASE/$remote_file → ./$local_name"
    scp "$HOST:$REMOTE_BASE/$remote_file" "./$local_name"
    echo "✅ Descarga completada"
}

function remote_exec() {
    local cmd="$1"
    echo "🔧 Ejecutando en servidor: $cmd"
    ssh "$HOST" "cd $REMOTE_BASE && $cmd"
}

function view_logs() {
    echo "📋 Buscando logs..."
    ssh "$HOST" "find $REMOTE_BASE -name '*.log' -o -name 'error_log' 2>/dev/null | head -5"
}

# ============================================
# PARSER DE ARGUMENTOS
# ============================================

COMMAND="$1"
shift || true

case "$COMMAND" in
    upload)
        upload "$1" "$2"
        ;;
    upload-all)
        upload_all
        ;;
    deploy)
        deploy
        ;;
    delete)
        delete_file "$1"
        ;;
    delete-dir)
        delete_dir "$1"
        ;;
    list)
        list_files "$1"
        ;;
    download)
        download_file "$1" "$2"
        ;;
    exec)
        remote_exec "$1"
        ;;
    logs)
        view_logs
        ;;
    help|--help|-h|"")
        show_help
        ;;
    *)
        echo "❌ Comando desconocido: $COMMAND"
        show_help
        exit 1
        ;;
esac
