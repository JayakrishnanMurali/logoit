import React from "react";
import { CitrusIcon } from "lucide-react";
import { APP_DATA } from "@/lib/constants";
import { DownloadButtonGroup } from "./download-btn-group";

export const Navbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between border-b px-8">
      <div className="flex items-center gap-2">
        <div className="rounded-md  bg-gradient-to-tl from-yellow-100 via-yellow-400 to-orange-400 p-1">
          <CitrusIcon className="h-6 w-6 fill-yellow-200" />
        </div>
        <span className="font-bold">{APP_DATA.name}</span>
      </div>

      <DownloadButtonGroup />
    </nav>
  );
};
