# Development Troubleshooting

## Common Issue: Next.js Dev Server Lock

If you encounter lock file errors or the dev server won't start:

### Quick Fix (Recommended)
```bash
npm run cleanup
npm run dev
```

Or use the combined command:
```bash
npm run dev:clean
```

### What the cleanup script does:
1. Kills all Node.js processes
2. Removes Next.js lock files (.next/dev/lock, .next/build/lock, etc.)
3. Prepares the environment for a fresh dev server start

### Manual Cleanup (if script doesn't work)
1. Open Task Manager (Ctrl+Shift+Esc)
2. End all Node.js processes
3. Delete `.next` folder manually
4. Run `npm run dev` again

### Alternative: Use a different port
If port 3000 is stuck, Next.js will automatically use the next available port (3001, 3002, etc.)

