import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: 'url("/hero.png")',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#2F2F2F', // Slate Gray for background
        foreground: '#D3D3D3', // Light Gray for main text
        primary: {
          DEFAULT: '#A3C1DA', // Light Blue for headers and buttons
          foreground: '#1C1C1C', // Dark Slate Gray for button text
        },
        accent: {
          DEFAULT: '#FFFFFF', // White for buttons and highlights
        },
        muted: {
          DEFAULT: '#D3D3D3', // Light Gray for muted text
          foreground: '#2F2F2F', // Darker slate for contrast
        },
        border: '#A3C1DA', // Light Blue for borders if needed
        input: '#FFFFFF', // White for input backgrounds
        ring: '#A3C1DA', // Light Blue for focus rings
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
