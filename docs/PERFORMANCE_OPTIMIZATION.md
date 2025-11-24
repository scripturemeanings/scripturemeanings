# Performance Optimization Guide

## File Watching Issues on Windows

Windows file watching can cause excessive rebuilds. Here's how we've optimized it:

### 1. Webpack Watch Options

Added optimized watch options in `next.config.ts`:
- **aggregateTimeout: 300ms** - Waits 300ms before rebuilding (batches changes)
- **ignored patterns** - Excludes unnecessary directories from watching
- **No polling** - Uses native file watching instead of polling

### 2. Contentlayer Ignore File

Created `.contentlayerignore` to exclude:
- Build artifacts (`.next`, `dist`, `build`)
- Dependencies (`node_modules`)
- Temporary files (`*.log`, `*.backup`, `*.tmp`)
- IDE files (`.vscode`, `.idea`)

### 3. Reducing Rebuilds

**What triggers rebuilds:**
- Changes to `content/**/*.mdx` files
- Changes to `app/**` files
- Changes to `components/**` files
- Changes to config files

**What doesn't trigger rebuilds (now):**
- Changes to `.md` files outside content
- Changes to build artifacts
- Changes to node_modules
- Changes to temporary files

## Common Issues & Solutions

### Issue: Excessive Rebuilds

**Symptoms:**
- Dev server rebuilding constantly
- High CPU usage
- Slow performance

**Solutions:**
1. Check if you're editing files outside `content/` or `app/`
2. Ensure `.contentlayerignore` is working
3. Restart dev server: `npm run dev:clean`
4. Check for file watchers in other tools (VS Code extensions, etc.)

### Issue: PowerShell Scripts Running Repeatedly

**Symptoms:**
- PowerShell execution policy warnings
- Scripts running on every file change

**Solutions:**
1. Set execution policy once: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
2. Use npm scripts instead of direct PowerShell calls
3. Check VS Code settings for auto-running scripts

### Issue: Contentlayer Regenerating Too Often

**Symptoms:**
- `.contentlayer/generated` folder updating constantly
- Slow dev server startup

**Solutions:**
1. Only edit `.mdx` files in `content/blog/posts/`
2. Avoid editing generated files
3. Use `npm run dev:clean` if stuck in regeneration loop

## Best Practices

1. **Edit only source files** - Don't touch generated files
2. **Use proper file extensions** - `.mdx` for content, not `.md`
3. **Close unused editors** - Multiple file watchers can conflict
4. **Restart when stuck** - `npm run dev:clean` fixes most issues
5. **Monitor file changes** - Use `git status` to see what's changing

## Monitoring

To see what's triggering rebuilds:
1. Check terminal output for file change messages
2. Use `git status` to see modified files
3. Check VS Code's file watcher status (bottom right)

## Quick Fixes

**If rebuilds are excessive:**
```bash
npm run dev:clean
```

**If PowerShell errors:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**If contentlayer stuck:**
```bash
rm -rf .contentlayer
npm run dev
```

