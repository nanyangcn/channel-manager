'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
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
          <Image src="/indicator/loading.svg" alt="Loading" fill />
        </div>
        )}
      <button
        type="button"
        className={twMerge(
          'relative h-5 w-9 rounded-[100px]',
          state ? 'bg-primary' : 'bg-disable',
          isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
        disabled={isDisabled}
        onClick={handleToggle}
      >
        <div
          className={twMerge(
            'absolute left-[18px] top-[2px] h-4 w-4 rounded-full bg-secondary transition-all',
            state ? 'left-[18px]' : 'left-[2px]',
          )}
        />
      </button>
    </div>
  );
}

export default ToggleButton;
