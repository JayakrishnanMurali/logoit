import React from "react";
import { IconPicker } from "./icon-picker";
import { IconSliders } from "./icon-sliders";

export const IconContent = () => {
  return (
    <div className="space-y-10 py-4">
      <IconPicker />

      <IconSliders />
    </div>
  );
};
