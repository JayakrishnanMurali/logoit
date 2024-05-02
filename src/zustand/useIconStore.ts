import { Blend, type LucideIcon } from "lucide-react";
import { create } from "zustand";

export interface IIconInfo {
  name: string;
  icon: LucideIcon;
}

interface IconStore {
  iconInfo: IIconInfo;
  size: number;
  rotate: number;
  borderWidth: number;
  borderColor: string;
  fillColor: string;
  fillOpacity: number;

  actions: {
    updateIcon: (icon: IIconInfo) => void;
    updateSize: (size: number) => void;
    updateRotate: (rotate: number) => void;
    updateBorderWidth: (width: number) => void;
    updateBorderColor: (color: string) => void;
    updateFillColor: (color: string) => void;
    updateFillOpacity: (opacity: number) => void;
  };
}

const useIconStore = create<IconStore>((set) => ({
  iconInfo: {
    name: "Apple",
    icon: Blend,
  },
  size: 300,
  rotate: 0,
  borderWidth: 1.5,
  fillOpacity: 0,
  borderColor: "#000",
  fillColor: "#000",

  actions: {
    updateIcon: (icon) => set({ iconInfo: icon }),
    updateSize: (size) => set({ size }),
    updateRotate: (rotate) => set({ rotate }),
    updateBorderWidth: (borderWidth) => set({ borderWidth }),
    updateBorderColor: (borderColor) => set({ borderColor }),
    updateFillColor: (fillColor) => set({ fillColor }),
    updateFillOpacity: (fillOpacity) => set({ fillOpacity }),
  },
}));

export const useIcon = () => useIconStore((state) => state.iconInfo);
export const useIconSize = () => useIconStore((state) => state.size);
export const useIconRotate = () => useIconStore((state) => state.rotate);
export const useIconBorderWidth = () =>
  useIconStore((state) => state.borderWidth);
export const useIconBorderColor = () =>
  useIconStore((state) => state.borderColor);
export const useIconFillColor = () => useIconStore((state) => state.fillColor);
export const useIconFillOpacity = () =>
  useIconStore((state) => state.fillOpacity);

export const useIconActions = () => useIconStore((state) => state.actions);
