"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDownLoad } from "@/hook/useDownload";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  Code2Icon,
  FolderArchiveIcon,
  ImageIcon,
} from "lucide-react";

export const DownloadButtonGroup = () => {
  const { downloadToPng, downloadToSvg, downloadToFavicon } = useDownLoad();

  const onDownloadToPng = async () => {
    await downloadToPng();
  };

  const onDownloadToSvg = async () => {
    await downloadToSvg();
  };

  const onDownloadToFavicon = async () => {
    await downloadToFavicon();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(buttonVariants(), "gap-2")}>
        Download
        <ChevronDownIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuItem onClick={onDownloadToPng} className="gap-2">
          <ImageIcon className="h-4 w-4" />
          PNG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadToSvg} className="gap-2">
          <Code2Icon className="h-4 w-4" />
          SVG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadToFavicon} className="gap-2">
          <FolderArchiveIcon className="h-4 w-4" />
          Favicons
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
