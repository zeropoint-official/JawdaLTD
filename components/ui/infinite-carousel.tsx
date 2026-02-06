"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteCarouselProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export function InfiniteCarousel({
  items,
  direction = "left",
  speed = "normal",
  className,
}: InfiniteCarouselProps) {
  const speeds = {
    slow: 40,
    normal: 25,
    fast: 15,
  };

  const duration = speeds[speed];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: direction === "left" ? [0, -50 * items.length + "%"] : [-50 * items.length + "%", 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration * items.length,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-16 px-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Logo placeholder component for the carousel
interface LogoPlaceholderProps {
  name: string;
  className?: string;
}

export function LogoPlaceholder({ name, className }: LogoPlaceholderProps) {
  return (
    <div
      className={cn(
        "text-xl font-bold tracking-tight text-foreground/80",
        className
      )}
    >
      {name}
    </div>
  );
}
