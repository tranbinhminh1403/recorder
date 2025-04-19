"use client";

import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import TitleBar from "./titleBar";

interface WindowProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: string;
  onOpen?: (element: HTMLElement) => void;
}

const Window = ({
  children,
  trigger,
  title = "Window",
  onOpen,
}: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (windowRef.current && onOpen) {
        onOpen(windowRef.current);
      }
    }, 0);
  };

  return (
    <>
      {/* Customizable Trigger */}
      <div onClick={handleOpen} className="cursor-pointer inline-block">
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
          minWidth={200}
          minHeight={100}
          dragHandleClassName="handle"
          bounds="window"
          // style={{
          //   zIndex: 1000,
          //   position: "fixed",
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
          <div
            ref={windowRef}
            className="h-full bg-white window-border overflow-hidden"
          >
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
