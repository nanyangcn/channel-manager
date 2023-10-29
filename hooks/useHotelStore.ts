import { create } from 'zustand';

import { Hotel } from 'types/hotel';

interface HotelStore {
  hotel: Hotel | null;
  isLoading: boolean;
  setHotel: (hotel: Hotel) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const useHotelStore = create<HotelStore>((set) => ({
  hotel: null,
  setHotel: (hotel) => set({ hotel }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useHotelStore;
