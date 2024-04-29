import { FlameIcon } from "lucide-react";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex h-full flex-1 items-center justify-center rounded-md bg-gray-50 p-4 px-4">
      <div className="flex aspect-square h-[600px] w-[600px] items-center justify-center border border-dashed p-10">
        <div className="flex h-full items-center justify-center rounded-2xl bg-yellow-200 p-4 shadow-md">
          <FlameIcon className="h-full w-full fill-yellow-100 stroke-1" />
        </div>
      </div>
    </div>
  );
};
