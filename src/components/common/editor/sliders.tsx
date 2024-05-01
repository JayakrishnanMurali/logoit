import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import React from "react";

export const Sliders = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Size</Label>
          <Label className="truncate leading-4">400px</Label>
        </div>

        <Slider step={1} min={100} max={600} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Rotate</Label>
          <Label className="truncate leading-4">120°</Label>
        </div>

        <Slider step={1} min={-180} max={180} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Border width</Label>
          <Label className="truncate leading-4">2px</Label>
        </div>

        <Slider step={0.01} min={1} max={4} />
      </div>
    </div>
  );
};
