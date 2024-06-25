import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansserif: ['sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'purple-100': '#F2EEF5',
        'purple-200': '#F8EFFF',
        'purple-300': '#EFDBFF',
        'purple-400': '#A68BBC',
        'purple-800': '#3D2351',
        'purple-900': '#2A113E',
        'fushia-100': '#FEDFFE',
        'fushia-200': '#FCBFFD',
        'fushia-300': '#F987FC',
        'fushia-400': '#F85FFB',
        'fushia-500': '#D52AD9',
      },
      fontSize: {
        'heading-1': ['44px', { lineHeight: '50px' }],
        'heading-2': ['32px', { lineHeight: '40px' }],
        'heading-3': ['24px', { lineHeight: '30px' }],
        'heading-4': ['20px', { lineHeight: '24px' }],
        'heading-5': ['16px', { lineHeight: '20px' }],
        'heading-lg': ['60px', { lineHeight: '70px' }],
        'heading-xl': ['80px', { lineHeight: '90px' }],
        'heading-xxl': ['90px', { lineHeight: '100px' }],
      },
      screens: {
        '2xs': '450px',
        xs: '647px',
        sm: '950px',
        md: '1280px',
        lg: '1440px',
        xl: '1920px',
        '2xl': '2560px',
      },
    },
  },
  plugins: [],
};
export default config;
