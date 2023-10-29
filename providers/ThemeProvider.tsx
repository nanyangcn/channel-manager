'use client';

import useThemeStore from 'hooks/useThemeStore';

interface ThemeProviderProps {
  children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeStore();
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
}

export default ThemeProvider;
