import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        none: 'transparent',
        red: '#ff0014',
        gray: '#ccc',
        blue: '#2684FF',
      },
      spacing: {
        xxl: '60px',
        xl: '40px',
        l: '30px',
        m: '24px',
        s: '20px',
        xs: '15px',
        xxs: '8px',
        xxxs: '5px'
      },
      fontSize: {
        'heading-xl': ['48px', '50px'],
        'heading-l': ['32px', '36px'],
        'heading-m': ['24px', '28px'],
        'regular-s': ['14px', '24px'],
        'regular-m': ['16px', '28px'],
        'regular-l': ['20px', '32px']
      },
    },
  },
  plugins: [],
};
export default config;
