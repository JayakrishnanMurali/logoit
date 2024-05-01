import React from "react";
import { IconPicker } from "./icon-picker";
import { Sliders } from "./sliders";

export const IconContent = () => {
  return (
    <div className="space-y-10 py-4">
      <IconPicker />

      <Sliders />

      {/* color picker */}
    </div>
  );
};
