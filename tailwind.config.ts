// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './app/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}'
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           DEFAULT: '#2F6BFF',
//           dark: '#1F47B3',
//           light: '#E8F0FF'
//         }
//       }
//     }
//   },
//   plugins: []
// };
// export default config;

// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],

  // // ✅ Keep the classes we use for the logo tilt/hover effects
  // safelist: [
  //   'rotate-6',
  //   '-rotate-6',
  //   'rotate-3',
  //   '-rotate-3',
  //   'group-hover:rotate-0',
  //   'group-hover:scale-105',
  // ],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2F6BFF',
          dark: '#1F47B3',
          light: '#E8F0FF',
        },
      },
    },
  },
  plugins: [],
};

export default config;
