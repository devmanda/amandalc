/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        headline: [
          'Aventine',
          'Iowan Old Style',
          'Palatino Linotype',
          'Palatino',
          'Georgia',
          'serif',
        ],
        body: ['Venus', 'Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        /* rgb(… / <alpha-value>) so opacity modifiers work with @apply (e.g. border-ink/12) */
        ink: {
          DEFAULT: 'rgb(42 39 36 / <alpha-value>)',
          muted: 'rgb(90 87 83 / <alpha-value>)',
          faint: 'rgb(143 139 133 / <alpha-value>)',
        },
        parchment: {
          DEFAULT: 'rgb(228 224 214 / <alpha-value>)',
          deep: 'rgb(216 210 198 / <alpha-value>)',
          light: 'rgb(239 237 230 / <alpha-value>)',
          margin: 'rgb(203 197 186 / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
