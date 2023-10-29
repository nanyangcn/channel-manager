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
        // Light mode
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
        // Dark mode
        'primary-dark': '#2762eb',
        'secondary-dark': '#121828',
        'additional-dark': '#202938',
        'accent-dark': '#384152',
        'disable-dark': '#4c545f',
        'error-dark': '#ef4444',
        'text-primary-dark': '#bec6d5',
        'text-secondary-dark': '#999faf',
        'border-primary-dark': '#2e3746',
        'border-secondary-dark': '#2e3746',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
