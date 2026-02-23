"use client";

import Image from "next/image";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/text-reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import { CheckCircle } from "@phosphor-icons/react";

const values = [
  "Quality and reliability in every project",
  "Safety and compliance with international standards",
  "Cost-effective and economically viable solutions",
  "Long-term partnerships and client satisfaction",
];

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <FadeIn direction="left">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/about-us.jpg"
              alt="Professional team collaborating"
              fill
              className="object-cover"
            />
            <BorderBeam size={300} duration={15} />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn direction="right">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Philosophy
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is to provide reliable, efficient, and financially viable
              solutions, with emphasis on quality, safety, compliance with
              standards, and long-term cooperation.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve businesses, construction sites, warehouses, agricultural
              and industrial facilities, offering tailored solutions that meet
              the specific needs of each project. Our experienced team combines
              technical expertise with practical knowledge to deliver
              exceptional results.
            </p>

            <ul className="space-y-3 pt-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
