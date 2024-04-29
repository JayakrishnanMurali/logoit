import React from "react";

export const EditorContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="h-[calc(100vh-56px)]">{children}</div>;
};
