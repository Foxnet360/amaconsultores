# GitHub MCP Configuration

## Estado
✅ MCP de GitHub configurado en OpenCode

## Archivos creados
- `~/.opencode/mcp.json` (configuración global)
- `./mcp.json` (configuración del proyecto)

## Configuración requerida

Necesitas configurar tu **GitHub Personal Access Token** como variable de entorno.

### Paso 1: Generar GitHub Token
1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Selecciona los scopes:
   - `repo` (acceso completo a repositorios)
   - `workflow` (opcional, para GitHub Actions)
   - `read:org` (opcional, para organizaciones)
4. Copia el token generado

### Paso 2: Configurar Token

**Opción A - Temporal (sesión actual):**
```bash
export GITHUB_TOKEN="ghp_xxxxxxxxxxxx"
```

**Opción B - Permanente (recomendado):**

Añade a tu `~/.bashrc` o `~/.zshrc`:
```bash
export GITHUB_TOKEN="ghp_xxxxxxxxxxxx"
```

Luego recarga:
```bash
source ~/.bashrc
```

### Paso 3: Verificar
```bash
echo $GITHUB_TOKEN
```

Debe mostrar tu token.

## Uso en OpenCode

Una vez configurado, podrás usar:

```
# Crear repositorio
/gh repo create nombre-repo --public

# Crear issue
/gh issue create --title "Bug" --body "Descripción"

# Crear pull request
/gh pr create --title "Feature" --body "Descripción"

# Listar repos
/gh repo list
```

## Comandos MCP disponibles

- `gh repo create` - Crear repositorio
- `gh repo list` - Listar repositorios
- `gh repo clone` - Clonar repositorio
- `gh issue create` - Crear issue
- `gh issue list` - Listar issues
- `gh pr create` - Crear pull request
- `gh pr list` - Listar pull requests

## Solución de problemas

Si el MCP no responde:
1. Verifica que `GITHUB_TOKEN` esté configurado: `echo $GITHUB_TOKEN`
2. Reinicia OpenCode
3. Verifica que npx esté instalado: `npx --version`

## Seguridad

⚠️ **NUNCA compartas tu token GitHub**
- No lo incluyas en commits
- No lo pegues en chats públicos
- Mantén el archivo `.env` en `.gitignore`
