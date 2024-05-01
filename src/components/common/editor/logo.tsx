"use client";
import { useIcon } from "@/zustand/useIconStore";
import React from "react";

export const Logo = () => {
  const Icon = useIcon();
  return (
    <div className="backgroundGrid flex h-full flex-1 items-center justify-center p-4 px-4">
      <div className="flex aspect-square h-[600px] w-[600px] items-center justify-center border border-dashed p-10">
        <div className="flex h-full items-center justify-center rounded-2xl bg-yellow-200 p-4 shadow-md">
          <Icon.icon className="h-full w-full  stroke-1" />
        </div>
      </div>
    </div>
  );
};
