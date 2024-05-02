"use client";
import React from "react";
import { CitrusIcon, Shuffle } from "lucide-react";
import { APP_DATA } from "@/lib/constants";
import { DownloadButtonGroup } from "./download-btn-group";
import { Button } from "@/components/ui/button";
import { useShuffle } from "@/hook/useShuffle";

export const Navbar = () => {
  const { shuffle } = useShuffle();

  return (
    <nav className="flex h-14 items-center justify-between border-b px-8">
      <div className="flex items-center gap-2">
        <div className="rounded-md bg-accent/60 p-2">
          <CitrusIcon className="h-6 w-6 fill-accent" />
        </div>
        <span className="font-bold">{APP_DATA.name}</span>
      </div>

      <div className="flex items-center gap-x-4">
        <Button onClick={shuffle} variant="secondary" className="gap-x-2">
          <Shuffle className="h-4 w-4" />
          Shuffle
        </Button>
        <DownloadButtonGroup />
      </div>
    </nav>
  );
};
