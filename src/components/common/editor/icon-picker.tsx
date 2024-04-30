import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AppleIcon } from "lucide-react";
import React from "react";

export const IconPicker = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Icon</Label>
        <Label>Some name</Label>
      </div>

      <Dialog>
        <DialogTrigger
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "group ",
          )}
        >
          <AppleIcon className="transform transition-all duration-300 ease-in-out group-hover:scale-110" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select an icon</DialogTitle>
            <DialogDescription>
              Choose from a wide range of icons.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
