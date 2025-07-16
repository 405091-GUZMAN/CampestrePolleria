import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sherlock': ['Sherlock', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config;
