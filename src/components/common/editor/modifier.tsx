"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { IconContent } from "./icon-content";
import { BackgroundContent } from "./background-content";
import { PaintBucket } from "lucide-react";
import { useIcon } from "@/zustand/useIconStore";

export const Modifier = () => {
  const Icon = useIcon();
  return (
    <div className="h-full">
      <Tabs
        defaultValue="icon"
        className="grid h-full grid-cols-[150px_260px] px-0 py-2"
        orientation="vertical"
      >
        <TabsList className="flex h-full flex-col gap-2 border-r bg-white px-2">
          <TabsTrigger value="icon">
            <Icon.icon className="h-4 w-4 flex-shrink-0" />
            Icon
          </TabsTrigger>
          <TabsTrigger value="background">
            <PaintBucket className="h-4 w-4 flex-shrink-0" />
            Background
          </TabsTrigger>
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
