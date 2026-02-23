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
    icon: <Fire size={24} weight="duotone" className="text-red-500" />,
    iconBg: "bg-red-500/10",
    title: "Fire Protection Painting & Epoxy Products",
    description:
      "Premium epoxy coatings, fire-resistant applications, specialized protective coatings, and industrial flooring solutions for demanding environments.",
    link: "/services#fire-protection",
    image: "/metal-frame.jpeg",
  },
  {
    icon: <Buildings size={24} weight="duotone" className="text-amber-600" />,
    iconBg: "bg-amber-600/10",
    title: "Construction & Maintenance",
    description:
      "Residential and commercial construction, warehouse building, renovations, and building maintenance.",
    link: "/services#construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: <Truck size={24} weight="duotone" className="text-blue-500" />,
    iconBg: "bg-blue-500/10",
    title: "Vehicles & Machinery",
    description:
      "Complete vehicle and construction machinery services including maintenance, repairs, sales, and imports.",
    link: "/services#vehicles",
    image: "/vehicles.jpg",
  },
  {
    icon: <Lightning size={24} weight="duotone" className="text-yellow-500" />,
    iconBg: "bg-yellow-500/10",
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
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.iconBg} backdrop-blur-sm flex items-center justify-center`}>
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
