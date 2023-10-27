'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ToggleButtonProps {
  isActive: boolean
}
function ToggleButton({ isActive }: ToggleButtonProps) {
  const [state, setState] = useState<boolean>(false);

  const handleToggle = () => {
    setState((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={twMerge(
        'relative h-5 w-9 rounded-[100px]',
        state ? 'bg-blue-600' : 'bg-slate-300',
      )}
      onClick={handleToggle}
    >
      <div
        className={twMerge(
          'absolute left-[18px] top-[2px] h-4 w-4 rounded-full bg-white transition-all',
          state ? 'left-[18px]' : 'left-[2px]',
        )}
      />
    </button>
  );
}

export default ToggleButton;
