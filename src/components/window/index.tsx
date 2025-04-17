"use client";

import React from "react";
import { Rnd } from "react-rnd";
import TitleBar from "./titleBar";

const Window = ({ children }: { children: React.ReactNode }) => {
  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 500,
        height: 300,
      }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="handle"
      bounds="window"
      resizeHandleStyles={{
        bottom: { bottom: 0, height: "4px", cursor: "s-resize" },
        bottomLeft: {
          bottom: 0,
          left: 0,
          height: "4px",
          width: "4px",
          cursor: "sw-resize",
        },
        bottomRight: {
          bottom: 0,
          right: 0,
          height: "4px",
          width: "4px",
          cursor: "se-resize",
        },
        left: { left: 0, width: "4px", cursor: "w-resize" },
        right: { right: 0, width: "4px", cursor: "e-resize" },
        top: { top: 0, height: "4px", cursor: "n-resize" },
        topLeft: {
          top: 0,
          left: 0,
          height: "4px",
          width: "4px",
          cursor: "nw-resize",
        },
        topRight: {
          top: 0,
          right: 0,
          height: "4px",
          width: "4px",
          cursor: "ne-resize",
        },
      }}
    >
      <div className="h-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        {/* Windows-style title bar */}
        <TitleBar />

        {/* Window Content */}
        <div className="p-6 h-[calc(100%-2rem)]">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
