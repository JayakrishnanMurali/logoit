import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import React from "react";

export const DownloadButtonGroup = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(buttonVariants(), "gap-2")}>
        Download
        <ChevronDownIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem className="gap-2">
          <DownloadIcon className="h-4 w-4" />
          Download PNG
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <DownloadIcon className="h-4 w-4" />
          Download SVG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
