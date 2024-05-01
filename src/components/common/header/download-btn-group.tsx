import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  Code2Icon,
  FolderArchiveIcon,
  ImageIcon,
} from "lucide-react";

export const DownloadButtonGroup = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(buttonVariants(), "gap-2")}>
        Download
        <ChevronDownIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuItem className="gap-2">
          <ImageIcon className="h-4 w-4" />
          PNG
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Code2Icon className="h-4 w-4" />
          SVG
        </DropdownMenuItem>
        <DropdownMenuItem disabled className="gap-2">
          <FolderArchiveIcon className="h-4 w-4" />
          Favicon
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
