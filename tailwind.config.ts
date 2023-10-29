import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0050FF',
        secondary: '#FFFFFF',
        additional: '#F8FAFC',
        accent: '#E2E8F0',
        disable: '#CBD5E1',
        error: '#ef4444',
        'text-primary': '#16181B',
        'text-secondary': '#334155',
        'border-primary': '#CBD5E1',
        'border-secondary': '#E2E8F0',
      },
    },
  },
  plugins: [],
};
export default config;
