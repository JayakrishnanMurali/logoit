"use client";
import { ColorPicker } from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  useIconActions,
  useIconBorderColor,
  useIconBorderWidth,
  useIconFillColor,
  useIconFillOpacity,
  useIconRotate,
  useIconSize,
} from "@/zustand/useIconStore";
import React from "react";

export const IconSliders = () => {
  const size = useIconSize();
  const rotate = useIconRotate();
  const borderWidth = useIconBorderWidth();
  const borderColor = useIconBorderColor();
  const fillColor = useIconFillColor();
  const fillOpacity = useIconFillOpacity();

  const {
    updateBorderWidth,
    updateFillOpacity,
    updateRotate,
    updateSize,
    updateFillColor,
    updateBorderColor,
  } = useIconActions();

  const onFillColorChange = (color: string) => {
    updateFillColor(color);
  };

  const onBorderColorChange = (color: string) => {
    updateBorderColor(color);
  };

  return (
    <div className="space-y-8 pb-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Size</Label>
          <Label className="truncate leading-4">{size}px</Label>
        </div>

        <Slider
          value={[size]}
          step={1}
          min={100}
          max={600}
          onValueChange={(value) => {
            updateSize(value[0] ?? 0);
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Rotate</Label>
          <Label className="truncate leading-4">{rotate}°</Label>
        </div>

        <Slider
          value={[rotate]}
          step={1}
          min={-180}
          max={180}
          onValueChange={(value) => {
            updateRotate(value[0] ?? 0);
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Stroke width</Label>
          <Label className="truncate leading-4">{borderWidth}px</Label>
        </div>

        <Slider
          value={[borderWidth]}
          step={0.01}
          min={1}
          max={4}
          onValueChange={(value) => {
            updateBorderWidth(value[0] ?? 0);
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Border color</Label>
          <div className="flex items-center gap-1">
            <Label className="truncate leading-4">{borderColor}</Label>

            <div
              className="h-4 w-4 rounded-full"
              style={{
                backgroundColor: borderColor,
              }}
            />
          </div>
        </div>

        <ColorPicker color={borderColor} onChange={onBorderColorChange} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Fill opacity</Label>
          <Label className="truncate leading-4">{fillOpacity}%</Label>
        </div>

        <Slider
          value={[fillOpacity]}
          step={1}
          min={0}
          max={100}
          onValueChange={(value) => {
            updateFillOpacity(value[0] ?? 0);
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Fill color</Label>
          <div className="flex items-center gap-1">
            <Label className="truncate leading-4">{fillColor}</Label>
            <div
              className="h-4 w-4 rounded-full"
              style={{
                backgroundColor: fillColor,
              }}
            />
          </div>
        </div>

        <ColorPicker color={fillColor} onChange={onFillColorChange} />
      </div>
    </div>
  );
};
