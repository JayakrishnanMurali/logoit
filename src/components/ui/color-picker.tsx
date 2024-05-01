import React from "react";
import { SketchPicker } from "react-color";

export const ColorPicker = () => {
  return (
    <div>
      <SketchPicker
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
              borderRadius: "0.2rem",
              border: "none",
              height: "1rem",
              margin: "0.8rem 0",
            },
          },
        }}
      />
    </div>
  );
};
