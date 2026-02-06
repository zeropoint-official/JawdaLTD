"use client";

import { Section } from "@/components/layout/section";
import { Marquee } from "@/components/ui/marquee";
import { FadeIn } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

// Partner logo cards
const partners = [
  { name: "TechCorp", industry: "Technology" },
  { name: "BuildPro", industry: "Construction" },
  { name: "ElectraSafe", industry: "Electrical" },
  { name: "IndustrialX", industry: "Manufacturing" },
  { name: "GlobalTrade", industry: "Import/Export" },
  { name: "FireShield", industry: "Fire Safety" },
  { name: "MachineWorks", industry: "Machinery" },
  { name: "ConsultPro", industry: "Consulting" },
];

function PartnerCard({ name, industry }: { name: string; industry: string }) {
  return (
    <div
      className={cn(
        "relative h-20 w-48 cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-4",
        "transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
      )}
    >
      <div className="flex h-full flex-col justify-center">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-xs text-muted-foreground">{industry}</span>
      </div>
    </div>
  );
}

export function Logos() {
  return (
    <Section className="py-12 md:py-16">
      <FadeIn>
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies
        </p>
        <div className="relative">
          {/* Gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <Marquee pauseOnHover className="[--duration:30s]">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </Marquee>
        </div>
      </FadeIn>
    </Section>
  );
}
