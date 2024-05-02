"use client";
import { LOGO_ID } from "@/lib/constants";
import { getTailwindShadow } from "@/lib/helpers";
import {
  useBackgroundBorderRadius,
  useBackgroundColor,
  useBackgroundPadding,
  useBackgroundShadow,
} from "@/zustand/useBackgroundStore";
import {
  useIcon,
  useIconBorderColor,
  useIconBorderWidth,
  useIconFillColor,
  useIconFillOpacity,
  useIconRotate,
  useIconSize,
} from "@/zustand/useIconStore";
import React from "react";

export const Logo = () => {
  // Background
  const backgroundColor = useBackgroundColor();
  const padding = useBackgroundPadding();
  const borderRadius = useBackgroundBorderRadius();
  const shadow = useBackgroundShadow();

  // Icon
  const Icon = useIcon();
  const size = useIconSize();
  const strokeWidth = useIconBorderWidth();
  const rotate = useIconRotate();
  const strokeColor = useIconBorderColor();
  const fillOpacity = useIconFillOpacity();
  const fillColor = useIconFillColor();

  return (
    <div className="backgroundGrid flex h-full flex-1 items-center justify-center p-4 px-4">
      <div className="border border-dashed">
        <div
          id={LOGO_ID}
          className="flex aspect-square h-[600px] w-[600px] items-center justify-center  p-10"
        >
          <div
            style={{
              backgroundColor,
              padding,
              borderRadius,
              boxShadow: getTailwindShadow(shadow),
            }}
            className="flex aspect-square h-full items-center  justify-center"
          >
            <Icon.icon
              style={{
                transform: `rotate(${rotate}deg)`,
              }}
              size={size}
              strokeWidth={strokeWidth}
              stroke={strokeColor}
              fill={fillColor}
              fillOpacity={fillOpacity / 100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
