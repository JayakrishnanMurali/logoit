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
import { convertCamelCaseToSpace } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import {
  type IIconInfo,
  useIcon,
  useIconActions,
} from "@/zustand/useIconStore";

import { icons } from "lucide-react";
import { useMemo, useState } from "react";

export const IconPicker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => setIsModalOpen(false);

  const iconList = useMemo(() => {
    return Object.entries(icons).map(([label, Icon]) => ({ label, Icon }));
  }, []);

  const Icon = useIcon();

  const { updateIcon } = useIconActions();

  const onIconClick = (item: IIconInfo) => {
    updateIcon(item);
    onCloseModal();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <Label className="leading-4">Icon</Label>
        <Label className="truncate leading-4">
          {convertCamelCaseToSpace(Icon.name)}
        </Label>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "group ",
          )}
        >
          <Icon.icon className="transform transition-all duration-300 ease-in-out group-hover:scale-110" />
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
                  onClick={() =>
                    onIconClick({
                      name: item.label,
                      icon: item.Icon,
                    })
                  }
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
