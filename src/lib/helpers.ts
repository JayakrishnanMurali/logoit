import { type IIconInfo } from "@/zustand/useIconStore";
import { icons } from "lucide-react";

export const convertCamelCaseToSpace = (str: string) => {
  const res = str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .trim();
  return res.charAt(0).toUpperCase() + res.slice(1);
};

export const getTailwindShadow = (shadow: number) => {
  if (shadow === 0) return "0 0 #0000";
  if (shadow === 20) return "0 1px 2px 0 rgb(0 0 0 / 0.05)";
  if (shadow === 40)
    return "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
  if (shadow === 60)
    return "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
  if (shadow === 80)
    return "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
  if (shadow === 100) return "0 25px 50px -12px rgb(0 0 0 / 0.25)";

  return "0 0 #0000";
};

export const getRandomLucideIcon = (): IIconInfo => {
  const iconList = () => {
    return Object.entries(icons).map(([label, Icon]) => ({ label, Icon }));
  };

  const randomIndex = Math.floor(Math.random() * iconList().length);

  const randomIcon = iconList()[randomIndex];

  return {
    name: randomIcon!.label,
    icon: randomIcon!.Icon,
  };
};

export const getRandomColorHex = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const getRandomNumber = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from) + from);
};
