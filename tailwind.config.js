/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'halenoir-regular': ['halenoirexpanded-regularRg', 'sans-serif'],
        'halenoir-light': ['halenoircompact-extralightRg', 'sans-serif'],
        'halenoir-bold': ['halenoirexpanded-boldregular', 'sans-serif'],
      },
      colors: {
        // Colori estratti dal Figma MCP
        'fni-red': '#e94d34',        // Colore principale brand FNI
        'fni-dark': '#1a1a1a',       // Testi scuri e background
        'fni-gray': '#f5f5f5',       // Background grigio chiaro
        'fni-dark-gray': '#333333',  // Gray per footer/press area
        'fni-white': '#ffffff',      // Bianco
        'fni-black': '#000000',      // Nero
      },
      fontSize: {
        // Font size personalizzato per leggibilità ottimale
        'body': '20px',  // Testi paragrafi, descrizioni, contenuti
      },
      spacing: {
        // Spaziature personalizzate
      },
      maxWidth: {
        'screen-2xl': '1920px',
        'container-fni': '1440px',  // Container più stretto per layout Figma
      },
    },
  },
  plugins: [],
}
