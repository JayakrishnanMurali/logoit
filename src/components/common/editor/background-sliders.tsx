"use client";
import { ColorPicker } from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  useBackgroundActions,
  useBackgroundBorderRadius,
  useBackgroundColor,
  useBackgroundPadding,
  useBackgroundShadow,
} from "@/zustand/useBackrgoundStore";
import React from "react";

export const BackgroundSliders = () => {
  const padding = useBackgroundPadding();
  const shadow = useBackgroundShadow();
  const borderRadius = useBackgroundBorderRadius();
  const backgroundColor = useBackgroundColor();

  const {
    updateBackgroundColor,
    updateBorderRadius,
    updatePadding,
    updateShadow,
  } = useBackgroundActions();

  const onBackgroundColorChange = (color: string) => {
    updateBackgroundColor(color);
  };

  const convertShadowToPx = (shadow: number) => {
    if (shadow === 0) return "none";
    if (shadow === 20) return "sm";
    if (shadow === 40) return "md";
    if (shadow === 60) return "lg";
    if (shadow === 80) return "xl";
    if (shadow === 100) return "2xl";
  };

  return (
    <div className="space-y-8 pb-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Rounded</Label>
          <Label className="truncate leading-4">{borderRadius}px</Label>
        </div>

        <Slider
          value={[borderRadius]}
          step={1}
          min={0}
          max={300}
          onValueChange={(value) => {
            updateBorderRadius(value[0] ?? 0);
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Padding</Label>
          <Label className="truncate leading-4">{padding}px</Label>
        </div>

        <Slider
          value={[padding]}
          step={1}
          min={0}
          max={100}
          onValueChange={(value) => {
            updatePadding(value[0] ?? 0);
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Shadow</Label>
          <Label className="truncate uppercase leading-4">
            {convertShadowToPx(shadow)}
          </Label>
        </div>

        <div className="relative">
          <Slider
            value={[shadow]}
            step={20}
            min={0}
            max={100}
            onValueChange={(value) => {
              updateShadow(value[0] ?? 0);
            }}
          />

          <div className=" flex items-center gap-6 pt-2 text-[10px]">
            <div>NA</div>
            <div className="absolute left-[46px]">SM</div>
            <div className="absolute left-[87px]">MD</div>
            <div className="absolute left-[128px]">LG</div>
            <div className="absolute left-[169px]">XL</div>
            <div className="absolute right-0">2XL</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Background</Label>
          <div className="flex items-center gap-1">
            <Label className="truncate leading-4">{backgroundColor}</Label>

            <div
              className="h-4 w-4 rounded-full"
              style={{
                backgroundColor: backgroundColor,
              }}
            />
          </div>
        </div>

        <ColorPicker
          color={backgroundColor}
          onChange={onBackgroundColorChange}
        />
      </div>
    </div>
  );
};
