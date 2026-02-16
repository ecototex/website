/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sageTint: '#E1E9E5', // Mapped to Bone for backward compatibility
        leafGreen: '#3B4953', // Mapped to DeepSlate for monochrome text
        forestMoss: '#3B4953', // Mapped to DeepSlate
        deepSlate: '#3B4953', // Kept for text contrast
        // New Palette
        unhingedWhite: '#E1DFEA',
        offWhite: '#F1F1F1',
        eggshell: '#F3F4E5',
        bone: '#E1E9E5',
      },
      fontFamily: {
        miluno: ['Miluno', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/parallax_hero_background.png')",
      }
    },
  },
  plugins: [],
}
