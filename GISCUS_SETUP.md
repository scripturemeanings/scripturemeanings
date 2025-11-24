# Giscus Comments Setup Guide

This guide will help you set up Giscus comments for your Next.js blog, similar to WordPress comments.

## What is Giscus?

Giscus is a comments system powered by GitHub Discussions. It's:
- ✅ **Free** - No cost
- ✅ **No ads** - Privacy-focused
- ✅ **Open source** - Comments stored in your GitHub repo
- ✅ **Easy to moderate** - Manage comments through GitHub

## Setup Steps

### 1. Install the Giscus App on GitHub

1. Go to [https://github.com/apps/giscus](https://github.com/apps/giscus)
2. Click **"Install"** or **"Configure"**
3. Select your repository (the one hosting this blog)
4. Choose which repositories to allow:
   - **Only select repositories** - Choose your blog repo
   - **All repositories** - If you want to use it for multiple projects
5. Click **"Install"**

### 2. Enable GitHub Discussions

1. Go to your repository on GitHub
2. Click **Settings** → **General**
3. Scroll down to **Features**
4. Enable **Discussions**
5. Click **"Set up discussions"** if prompted

### 3. Get Your Giscus Configuration

1. Go to [https://giscus.app](https://giscus.app)
2. Fill in the form:
   - **Repository**: Select your repository (e.g., `yourusername/scripturemeanings`)
   - **Page ↔ Discussions mapping**: Choose **"Page pathname"**
   - **Discussion category**: Choose **"Announcements"** or create a new category
   - **Features**: Enable what you want (reactions, etc.)
   - **Theme**: Choose **"Light"** or **"Dark"** (or both)
   - **Language**: Choose **"English"** or your preferred language
3. Scroll down to see your configuration values

### 4. Add Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```env
NEXT_PUBLIC_GISCUS_REPO=yourusername/scripturemeanings
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id_here
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id_here
```

**Where to find these values:**
- `NEXT_PUBLIC_GISCUS_REPO`: Your GitHub username and repo name (e.g., `marcus/scripturemeanings`)
- `NEXT_PUBLIC_GISCUS_REPO_ID`: Found on the Giscus configuration page
- `NEXT_PUBLIC_GISCUS_CATEGORY`: The category name you chose (e.g., `Announcements`)
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`: Found on the Giscus configuration page

### 5. Restart Your Development Server

After adding the environment variables:

```bash
npm run dev
```

The comments section should now appear at the bottom of each blog post!

## Customization

### Change Theme

You can customize the theme in `app/[slug]/page.tsx`:

```tsx
<Comments
  // ... other props
  theme="dark" // or "light", "dark_dimmed", "transparent_dark", etc.
/>
```

### Change Language

```tsx
<Comments
  // ... other props
  lang="en" // or "es", "fr", "de", etc.
/>
```

### Disable Reactions

```tsx
<Comments
  // ... other props
  reactionsEnabled="0"
/>
```

## How It Works

1. **Comments are stored in GitHub Discussions** - Each blog post gets its own discussion thread
2. **Users sign in with GitHub** - To comment, users need a GitHub account
3. **Moderation through GitHub** - You can moderate comments through GitHub's interface
4. **No database needed** - Everything is stored in GitHub

## Troubleshooting

### Comments not showing?

1. Check that all environment variables are set correctly
2. Make sure the Giscus app is installed on your repository
3. Verify that GitHub Discussions is enabled
4. Check the browser console for any errors
5. Make sure you've restarted your dev server after adding env variables

### "Repository not found" error?

- Verify your `NEXT_PUBLIC_GISCUS_REPO` is in the format `username/repo`
- Make sure the Giscus app has access to your repository

### Comments not loading?

- Check that the repository ID and category ID are correct
- Verify the Giscus app is properly installed
- Try clearing your browser cache

## Alternative: Other Comment Systems

If you prefer other options:

- **Disqus**: Popular but has ads (free tier)
- **Utterances**: Similar to Giscus, uses GitHub Issues instead
- **Cusdis**: Lightweight, privacy-focused
- **Custom solution**: Build your own with a database

## Need Help?

- Giscus Documentation: [https://github.com/giscus/giscus](https://github.com/giscus/giscus)
- Giscus Configuration: [https://giscus.app](https://giscus.app)



