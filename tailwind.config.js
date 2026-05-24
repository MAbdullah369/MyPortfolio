/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        accent: ['Syne', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
      },
      colors: {
        dark: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          300: '#d1d5db',
          500: '#9ca3af',
          700: '#1a1a2e',
          900: '#0f0f1e',
        },
      },
    },
  },
  plugins: [],
}

