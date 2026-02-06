"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "relative bg-transparent p-[1px] overflow-hidden",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${rx} - 1px) calc(${ry} - 1px)` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          style={{
            width: "calc(100% + 2px)",
            height: "calc(100% + 2px)",
            top: -1,
            left: -1,
          }}
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            className={cn("stroke-primary", borderClassName)}
            strokeWidth="2"
            strokeDasharray="100 200"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-300"
              dur={`${duration}ms`}
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      <div
        className={cn(
          "relative bg-card border border-border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: `calc(${rx} - 2px) calc(${ry} - 2px)` }}
      >
        {children}
      </div>
    </Component>
  );
}
