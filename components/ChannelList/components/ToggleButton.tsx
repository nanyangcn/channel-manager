'use client';

import { useEffect, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { twMerge } from 'tailwind-merge';

import useHotelStore from 'hooks/useHotelStore';
import putHotelById from 'actions/putHotelById';
import { useMutation } from '@tanstack/react-query';

interface ToggleButtonProps {
  channelId: string;
}

function ToggleButton({ channelId }: ToggleButtonProps) {
  const { hotel, setHotel, isLoading } = useHotelStore();
  const [state, setState] = useState<boolean | null>(null);

  const { isPending, mutate } = useMutation({
    mutationFn: putHotelById,
    onSuccess: () => {
      if (!hotel) return;
      const newHotel = {
        ...hotel,
        channels: hotel.channels.includes(channelId)
          ? hotel.channels.filter((c) => c !== channelId)
          : [...hotel.channels, channelId],
      };
      setHotel(newHotel);
      setState((prev) => !prev);
    },
  });

  useEffect(() => {
    if (!hotel?.channels) return;
    setState(hotel?.channels.includes(channelId) ?? false);
  }, [hotel?.channels, channelId]);

  const handleToggle = () => {
    if (!hotel?.id) return;
    const isChannelVisible = hotel?.channels.includes(channelId) ?? false;
    mutate({
      hotelId: hotel?.id,
      channelId,
      action: isChannelVisible ? 'pull' : 'push',
    });
  };

  const isDisabled = isLoading || isPending || state === null;
  return (
    <div className="flex items-center gap-2">
      {(isLoading || isPending)
        && (
        <div className="flex h-5 w-5 animate-spin items-center">
          <VscLoading size={20} className="dark:text-text-primary-dark" />
        </div>
        )}
      <button
        type="button"
        className={twMerge(
          'relative h-5 w-9 rounded-[100px]',
          state ? 'bg-primary dark:bg-primary-dark' : 'bg-disable dark:bg-disable-dark',
          isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
        disabled={isDisabled}
        onClick={handleToggle}
      >
        <div
          className={twMerge(
            'absolute left-[18px] top-[2px] h-4 w-4 rounded-full bg-secondary transition-all dark:bg-text-primary-dark',
            state ? 'left-[18px]' : 'left-[2px]',
          )}
        />
      </button>
    </div>
  );
}

export default ToggleButton;
