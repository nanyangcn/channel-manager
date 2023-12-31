import { useMutation } from '@tanstack/react-query';
import getHotelById from 'actions/getHotelById';
import useHotelStore from 'hooks/useHotelStore';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { Hotel } from 'types/hotel';

interface DropListProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  hotels: Hotel[];
}
function DropList({ isOpen, setIsOpen, hotels }: DropListProps) {
  const { setHotel, setIsLoading } = useHotelStore();

  const { isPending, mutate } = useMutation({
    mutationFn: getHotelById,
    onSuccess: (hotel) => {
      if (!hotel) return;
      setHotel(hotel);
    },
  });

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending, setIsLoading]);

  const handleClick = (hotelItem: Hotel) => {
    if (!hotelItem.id) return;
    mutate(hotelItem.id);
    setIsOpen(false);
  };

  return (
    <div
      className={twMerge(
        `absolute inset-x-0 top-full mt-1 flex flex-col divide-y-[1px] divide-accent
        rounded-lg border border-border-primary bg-secondary
        shadow overflow-hidden transition-all
        dark:bg-accent-dark dark:border-border-primary-dark dark:divide-additional-dark`,
        isOpen ? 'opacity-100' : 'opacity-0 invisible',
      )}
    >
      {hotels.map((hotelItem) => (
        <button
          key={hotelItem.id}
          type="button"
          className={twMerge(
            'flex h-10 items-center py-2 pl-3 pr-2 transition-all hover:bg-accent hover:dark:bg-additional-dark',
            isOpen ? 'opacity-100' : 'opacity-0 h-0',
          )}
          onClick={() => handleClick(hotelItem)}
        >
          <p
            className={twMerge(
              `shrink grow basis-0 pr-9 transition-all text-left text-base font-normal leading-normal
            text-text-primary dark:text-text-primary-dark`,
              isOpen ? 'opacity-100' : 'opacity-0 scale-y-0',
            )}
          >
            {hotelItem.name}
          </p>
        </button>
      ))}
    </div>
  );
}
export default DropList;
