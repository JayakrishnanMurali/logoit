import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { IconContent } from "./icon-content";
import { BackgroundContent } from "./background-content";
import { CogIcon, PaintBucket } from "lucide-react";

export const Modifier = () => {
  return (
    <div className="h-full">
      <Tabs
        defaultValue="account"
        className="grid h-full grid-cols-[150px_250px] px-0 py-2"
        orientation="vertical"
      >
        <TabsList className="flex h-full flex-col gap-2 border-r bg-white px-2">
          <TabsTrigger value="icon">
            <CogIcon className="h-4 w-4 flex-shrink-0" />
            Icon
          </TabsTrigger>
          <TabsTrigger value="background">
            <PaintBucket className="h-4 w-4 flex-shrink-0" />
            Background
          </TabsTrigger>
        </TabsList>
        <TabsContent value="icon" className="border-r ">
          <IconContent />
        </TabsContent>
        <TabsContent value="background" className="border-r ">
          <BackgroundContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};
