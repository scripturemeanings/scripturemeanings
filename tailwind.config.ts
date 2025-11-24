import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}', // Add this if not present
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Customize prose styles
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5aa0',
              },
            },
            'h2, h3, h4': {
              scrollMarginTop: '100px',
            },
            // Style for blockquotes (Bible verses)
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#3182ce',
              backgroundColor: '#f7fafc',
              padding: '1rem',
              borderRadius: '0.375rem',
            },
            // Style for bullet lists
            'ul > li': {
              paddingLeft: '0.5rem',
            },
            // Style for ordered lists
            'ol > li': {
              paddingLeft: '0.5rem',
            },
            // Code blocks
            code: {
              backgroundColor: '#f7fafc',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this!
  ],
}

export default config
