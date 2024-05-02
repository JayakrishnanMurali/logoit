"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { IconContent } from "./icon-content";
import { BackgroundContent } from "./background-content";
import { PaintBucket } from "lucide-react";
import { useIcon } from "@/zustand/useIconStore";
import Link from "next/link";
import { APP_DATA } from "@/lib/constants";

export const Modifier = () => {
  const Icon = useIcon();
  return (
    <div className="h-full">
      <Tabs
        defaultValue="icon"
        className="grid h-full grid-cols-[150px_260px] px-0 py-2"
        orientation="vertical"
      >
        <TabsList className="flex h-full flex-col justify-between gap-2 border-r px-2">
          <div className="flex flex-col">
            <TabsTrigger value="icon">
              <Icon.icon className="h-4 w-4 flex-shrink-0" />
              Icon
            </TabsTrigger>
            <TabsTrigger value="background">
              <PaintBucket className="h-4 w-4 flex-shrink-0" />
              Background
            </TabsTrigger>
          </div>
          <div className="">
            <div className="pb-4 text-center text-xs font-medium">
              App built by{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href={APP_DATA.website}
              >
                {APP_DATA.author}
              </Link>
            </div>
          </div>
        </TabsList>
        <TabsContent
          value="icon"
          className="h-[calc(100vh-66px)] overflow-y-auto border-r pr-6"
        >
          <IconContent />
        </TabsContent>
        <TabsContent
          value="background"
          className="h-[calc(100vh-66px)] overflow-y-auto border-r"
        >
          <BackgroundContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};
