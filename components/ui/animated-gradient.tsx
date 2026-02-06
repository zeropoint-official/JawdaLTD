"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Primary gradient blob */}
      <div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      {/* Secondary gradient blob */}
      <div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
