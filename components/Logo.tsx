'use client';

import React from 'react';
import Image from 'next/image';

import useThemeStore from 'hooks/useThemeStore';

function Logo() {
  const { theme } = useThemeStore();
  return (
    <div className="inline-flex h-5 w-[175px] items-end justify-center gap-2.5">
      <div className="relative flex h-[19px] w-9 flex-col items-start justify-start">
        <Image src="/logo/mp-symbol.svg" alt="Logo" fill />
      </div>
      <div className="relative flex h-[17px] w-[129px] flex-col items-start justify-start">
        {theme === 'dark'
          ? <Image src="/logo/mp-typography-dark.svg" alt="Logo" fill />
          : <Image src="/logo/mp-typography.svg" alt="Logo" fill />}
      </div>
    </div>
  );
}

export default Logo;
