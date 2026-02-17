/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earth-toned luxury palette
        warmCream: '#FAF7F2',
        warmStone: '#F0EBE3',
        clayBrown: '#8B7355',
        deepEarth: '#2C2418',
        forestSage: '#6B7F5E',
        mutedOlive: '#9CA88C',
        sandDrift: '#D4C5A9',
        parchment: '#F5F0E8',
        charcoal: '#1A1A1A',
        // Legacy compatibility
        sageTint: '#FAF7F2',
        leafGreen: '#6B7F5E',
        forestMoss: '#6B7F5E',
        deepSlate: '#2C2418',
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        // Legacy
        miluno: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'subhead': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 12vh, 10rem)',
        'gutter': 'clamp(1.5rem, 4vw, 4rem)',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/parallax_hero_background.png')",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'counter': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'counter': 'counter 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
