"use client";

import React, { useState } from "react";
import { Rnd } from "react-rnd";
import TitleBar from "./titleBar";

interface WindowProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: string;
}

const Window = ({ children, trigger, title = "Window" }: WindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Customizable Trigger */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer inline-block"
      >
        {trigger}
      </div>

      {/* Window */}
      {isOpen && (
        <Rnd
          default={{
            x: window.innerWidth / 2 - 250,
            y: window.innerHeight / 2 - 150,
            width: 500,
            height: 300,
          }}
          minWidth={300}
          minHeight={200}
          dragHandleClassName="handle"
          bounds="window"
          // style={{
          //   zIndex: 1000,
          //   position: 'fixed
          // }}
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
          <div className="h-full bg-white window-border overflow-hidden">
            {/* Windows-style title bar */}
            <TitleBar title={title} handleClose={handleClose} />

            {/* Window Content */}
            <div className="p-6 h-[calc(100%-2rem)] bg-white">{children}</div>
          </div>
        </Rnd>
      )}
    </>
  );
};

export default Window;
