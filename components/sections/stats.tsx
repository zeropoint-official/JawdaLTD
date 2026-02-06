"use client";

import { Section } from "@/components/layout/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GridPattern } from "@/components/ui/grid-pattern";
import { FadeIn } from "@/components/ui/text-reveal";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Team" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <Section className="relative overflow-hidden">
      <GridPattern
        width={60}
        height={60}
        className="opacity-50"
        squares={[
          [1, 1],
          [3, 2],
          [5, 3],
          [7, 1],
          [9, 4],
          [11, 2],
        ]}
      />

      <FadeIn>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
