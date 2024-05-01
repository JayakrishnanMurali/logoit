"use client";
import { Button, buttonVariants } from "@/components/ui/button";
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

import { AppleIcon, icons } from "lucide-react";
import { useMemo } from "react";

export const IconPicker = () => {
  const iconList = useMemo(() => {
    return Object.entries(icons).map(([label, Icon]) => ({ label, Icon }));
  }, []);

  const InitialIcon = AppleIcon;

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
          <InitialIcon className="transform transition-all duration-300 ease-in-out group-hover:scale-110" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select an icon</DialogTitle>
            <DialogDescription>
              Choose from a wide range of icons.
            </DialogDescription>
          </DialogHeader>

          <div className="h-[60vh] overflow-y-auto pr-4">
            <div className="grid grid-cols-10 gap-4">
              {iconList.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="icon"
                  className=""
                >
                  <item.Icon />
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
