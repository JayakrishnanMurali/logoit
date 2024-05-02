import {
  getRandomColorHex,
  getRandomNumber,
  getRandomLucideIcon,
} from "@/lib/helpers";
import { useBackgroundActions } from "@/zustand/useBackgroundStore";
import { useIconActions } from "@/zustand/useIconStore";

export const useShuffle = () => {
  const {
    updateBorderColor,
    updateFillColor,
    updateFillOpacity,
    updateIcon,
    updateRotate,
    updateSize,
  } = useIconActions();

  const { updateBackgroundColor, updateBorderRadius, updatePadding } =
    useBackgroundActions();

  const shuffle = () => {
    updateIcon(getRandomLucideIcon());
    updateFillColor(getRandomColorHex());
    updateBorderColor(getRandomColorHex());
    updateBackgroundColor(getRandomColorHex());
    updateFillOpacity(getRandomNumber(0, 100));
    updateSize(getRandomNumber(100, 600));
    updateRotate(getRandomNumber(-180, 180));
    updateBorderRadius(getRandomNumber(0, 300));
    updatePadding(getRandomNumber(0, 100));
  };

  return { shuffle };
};
