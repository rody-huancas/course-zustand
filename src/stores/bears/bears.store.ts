import { create } from "zustand";

interface BearState {
  balckBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  balckBears: 10,
  polarBears: 5,
  pandaBears: 1,

  increaseBlackBears: (by: number) =>
    set((state) => ({ balckBears: state.balckBears + by })),
}));
