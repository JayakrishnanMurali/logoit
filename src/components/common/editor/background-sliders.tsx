import { ColorPicker } from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import React from "react";

export const BackgroundSliders = () => {
  return (
    <div className="space-y-8 pb-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Padding</Label>
          <Label className="truncate leading-4">23px</Label>
        </div>

        <Slider step={1} min={0} max={100} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Label className="leading-4">Shadow</Label>
          <Label className="truncate leading-4">None</Label>
        </div>

        <div className="relative">
          <Slider step={20} min={0} max={100} />
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
          <Label className="leading-4">Background color</Label>
          <Label className="truncate leading-4">#ffffff</Label>
        </div>

        <ColorPicker />
      </div>
    </div>
  );
};
