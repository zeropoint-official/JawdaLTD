"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/section";
import { BorderBeam } from "@/components/ui/border-beam";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/text-reveal";
import {
  Truck,
  Buildings,
  Lightning,
  Fire,
  ArrowRight,
} from "@phosphor-icons/react";

const services = [
  {
    icon: <Fire size={24} weight="duotone" />,
    title: "Fire Resistant & Fire Protection Painting",
    description:
      "Comprehensive fire protection services including fire-resistant applications, specialized coatings, and complete protection systems.",
    link: "/services#fire-protection",
    image: "/metal-frame.jpeg",
  },
  {
    icon: <Truck size={24} weight="duotone" />,
    title: "Vehicles & Machinery",
    description:
      "Complete vehicle and construction machinery services including maintenance, repairs, sales, and imports.",
    link: "/services#vehicles",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=600&q=80",
  },
  {
    icon: <Buildings size={24} weight="duotone" />,
    title: "Construction & Maintenance",
    description:
      "Residential and commercial construction, warehouse building, renovations, and building maintenance.",
    link: "/services#construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: <Lightning size={24} weight="duotone" />,
    title: "Electrical Installations",
    description:
      "Complete electrical solutions, fault diagnosis, system upgrades, and full certification.",
    link: "/services#electrical",
    image: "/electrical-install.jpg",
  },
];

export function ServicesPreview() {
  return (
    <Section id="services" className="bg-muted/30">
      <SectionHeader
        badge="Our Expertise"
        title="Complete Technical Solutions"
        subtitle="We provide integrated technical solutions across mechanical, electrical, construction, and consulting services for businesses of all sizes."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <StaggerItem key={index}>
            <Link href={service.link} className="block group">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full rounded-2xl overflow-hidden border border-border bg-card"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                <BorderBeam
                  size={200}
                  duration={12}
                  delay={index * 3}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
