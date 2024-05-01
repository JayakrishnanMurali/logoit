import { create } from "zustand";

interface BackgroundStore {
  padding: number;
  shadow: number;
  borderRadius: number;
  backgroundColor: string;

  actions: {
    updatePadding: (padding: number) => void;
    updateShadow: (shadow: number) => void;
    updateBorderRadius: (borderRadius: number) => void;
    updateBackgroundColor: (backgroundColor: string) => void;
  };
}

const useBackgroundStore = create<BackgroundStore>((set) => ({
  padding: 20,
  shadow: 20,
  borderRadius: 20,
  backgroundColor: "#f0de64",

  actions: {
    updatePadding: (padding) => set({ padding }),
    updateShadow: (shadow) => set({ shadow }),
    updateBorderRadius: (borderRadius) => set({ borderRadius }),
    updateBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  },
}));

export const useBackgroundPadding = () =>
  useBackgroundStore((state) => state.padding);
export const useBackgroundShadow = () =>
  useBackgroundStore((state) => state.shadow);
export const useBackgroundBorderRadius = () =>
  useBackgroundStore((state) => state.borderRadius);
export const useBackgroundColor = () =>
  useBackgroundStore((state) => state.backgroundColor);

export const useBackgroundActions = () =>
  useBackgroundStore((state) => state.actions);
