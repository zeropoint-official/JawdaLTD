"use client";

import { Section, SectionHeader } from "@/components/layout/section";
import { MovingBorder } from "@/components/ui/moving-border";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/text-reveal";
import {
  ShieldCheck,
  Clock,
  Handshake,
  Medal,
  Globe,
  Headset,
} from "@phosphor-icons/react";

const features = [
  {
    icon: <ShieldCheck size={28} weight="duotone" />,
    title: "Quality Assured",
    description: "All work meets international standards with full certifications",
  },
  {
    icon: <Clock size={28} weight="duotone" />,
    title: "On-Time Delivery",
    description: "Projects delivered on schedule with transparent timelines",
  },
  {
    icon: <Handshake size={28} weight="duotone" />,
    title: "Long-term Partnership",
    description: "We build lasting relationships, not just complete projects",
  },
  {
    icon: <Medal size={28} weight="duotone" />,
    title: "Expert Team",
    description: "50+ certified professionals with global experience",
  },
  {
    icon: <Globe size={28} weight="duotone" />,
    title: "Comprehensive Service",
    description: "Supporting clients with expert technical solutions",
  },
  {
    icon: <Headset size={28} weight="duotone" />,
    title: "24/7 Support",
    description: "Emergency services available around the clock",
  },
];

export function Features() {
  return (
    <Section>
      <SectionHeader
        badge="Why Choose Us"
        title="Excellence in Every Detail"
        subtitle="Our commitment to quality, safety, and client satisfaction sets us apart in the industry."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <StaggerItem key={index}>
            <MovingBorder
              duration={3000 + index * 500}
              rx="16px"
              ry="16px"
              className="p-6"
              containerClassName="h-full"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </MovingBorder>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
