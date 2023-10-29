'use client';

import { twMerge } from 'tailwind-merge';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import useThemeStore from 'hooks/useThemeStore';

function ToggleDark() {
  const { theme, setTheme } = useThemeStore();

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={twMerge(
        'relative h-5 w-10 rounded-[100px]',
        theme === 'dark' ? 'bg-primary dark:bg-primary-dark' : 'bg-disable dark:bg-disable-dark',
      )}
      onClick={handleToggle}
    >
      <div
        className={twMerge(
          'absolute left-[18px] top-[2px] h-4 w-4 rounded-full bg-secondary transition-all dark:bg-text-primary-dark',
          theme === 'dark' ? 'left-[22px]' : 'left-[2px]',
        )}
      />
      <div className={twMerge(
        `absolute top-[2px] h-4 w-4 flex items-center
      text-text-primary dark:text-text-primary-dark`,
        theme === 'dark' ? 'left-[2px]' : 'left-[20px]',
      )}
      >
        {theme === 'dark' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
      </div>
    </button>
  );
}

export default ToggleDark;
