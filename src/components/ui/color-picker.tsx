import React from "react";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  return (
    <div>
      <SketchPicker
        color={color}
        onChange={(color) => {
          onChange(color.hex);
        }}
        styles={{
          default: {
            picker: {
              boxShadow: "none",
              border: "none",
              background: "transparent",
              width: "100%",
              padding: "0",
            },
            activeColor: {
              display: "none",
            },
            saturation: {
              borderRadius: "0.4rem",
              marginBottom: "0.8rem",
              border: "none",
            },
            color: {
              display: "none",
            },
            hue: {
              borderRadius: "0.2rem",
              border: "none",
              height: "1rem",
            },

            alpha: {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
};
