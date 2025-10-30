import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2F6BFF',
          dark: '#1F47B3',
          light: '#E8F0FF'
        }
      }
    }
  },
  plugins: []
};
export default config;
