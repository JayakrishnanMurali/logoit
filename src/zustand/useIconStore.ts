import { AppleIcon, type LucideIcon } from "lucide-react";
import { create } from "zustand";

export interface IIconInfo {
  name: string;
  icon: LucideIcon;
}

interface IconStore {
  iconInfo: IIconInfo;

  actions: {
    updateIcon: (icon: IIconInfo) => void;
  };
}

const useIconStore = create<IconStore>((set) => ({
  iconInfo: {
    name: "Apple",
    icon: AppleIcon,
  },

  actions: {
    updateIcon: (icon) => set({ iconInfo: icon }),
  },
}));

export const useIcon = () => useIconStore((state) => state.iconInfo);

export const useIconActions = () => useIconStore((state) => state.actions);
