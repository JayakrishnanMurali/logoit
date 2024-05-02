import React from "react";
import { CitrusIcon } from "lucide-react";
import { APP_DATA } from "@/lib/constants";
import { DownloadButtonGroup } from "./download-btn-group";

export const Navbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between border-b px-8">
      <div className="flex items-center gap-2">
        <div className="rounded-md bg-accent/60 p-2">
          <CitrusIcon className="h-6 w-6 fill-accent" />
        </div>
        <span className="font-bold">{APP_DATA.name}</span>
      </div>

      <DownloadButtonGroup />
    </nav>
  );
};
