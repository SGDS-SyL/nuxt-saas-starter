import type { Config } from 'tailwindcss'
import flowbite from 'flowbite/plugin'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 50: 'var(--primary-50)', 100: 'var(--primary-100)', 200: 'var(--primary-200)', 300: 'var(--primary-300)', 400: 'var(--primary-400)', 500: 'var(--primary-500)', 600: 'var(--primary-600)', 700: 'var(--primary-700)', 800: 'var(--primary-800)', 900: 'var(--primary-900)', 950: 'var(--primary-950)' },
      },
    },
    fontFamily: {
      body: [
        'Inter var',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
      sans: [
        'Inter var',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
    },
  },
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    flowbite,
  ],
}
