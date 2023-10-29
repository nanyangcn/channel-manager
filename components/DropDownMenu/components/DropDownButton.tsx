import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

import useHotelStore from 'hooks/useHotelStore';

interface DropDownButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

function DropDownButton({
  isOpen, setIsOpen, children,
}: DropDownButtonProps) {
  const { hotel } = useHotelStore();

  return (
    <div className="relative flex flex-col">
      <button
        type="button"
        className="flex h-10 items-center gap-3 rounded-lg border border-border-primary
          bg-secondary py-2 pl-3 pr-2 shadow
          dark:border-border-primary-dark dark:bg-additional-dark dark:shadow-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p
          className="shrink grow basis-0 text-left text-base font-normal
        leading-normal text-text-primary dark:text-text-primary-dark"
        >
          {hotel?.name ?? 'Select a Hotel'}
        </p>
        <div
          className={twMerge(
            'relative h-6 w-6 transition-transform',
            isOpen ? '-scale-y-100' : '',
          )}
        >
          <Image src="/indicator/caretDown.svg" alt="Arrow Down" fill />
        </div>
      </button>
      {children}
    </div>
  );
}

export default DropDownButton;
