import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': '240px 1fr'
      },
      colors: {
        green: {
          500: 'hsla(160, 84%, 39%, 1)'
        },
        gray: {
          50: 'hsla(210, 20%, 98%, 1)',
          100: 'hsla(220, 14%, 96%, 1)',
          200: 'hsla(220, 13%, 91%, 1)',
          500: 'hsla(220, 9%, 46%, 1)',
          900: 'hsla(221, 39%, 11%, 1)',
        }
      }
    }
  },
  plugins: [],
}
export default config
