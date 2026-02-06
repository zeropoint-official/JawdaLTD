"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MovingBorder } from "@/components/ui/moving-border";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/text-reveal";
import { CTA } from "@/components/sections/cta";
import {
  Truck,
  Wrench,
  ShoppingCart,
  MagnifyingGlass,
  Buildings,
  House,
  Warehouse,
  HardHat,
  Lightning,
  Plug,
  LightbulbFilament,
  Fire,
  ShieldCheck,
  Certificate,
  ChartLineUp,
  Lightbulb,
  Calculator,
  UsersThree,
  FileText,
  Scales,
  Gear,
  Handshake,
  ArrowRight,
  CheckCircle,
  PaintBrush,
  Factory,
  Wall,
  ListChecks,
  FireExtinguisher,
} from "@phosphor-icons/react";

const services = [
  {
    id: "fire-protection",
    icon: <Fire size={32} weight="duotone" />,
    title: "Fire Resistant & Fire Protection Painting",
    description:
      "Comprehensive fire protection services including fire-resistant applications, specialized coatings, and complete protection systems for warehouses, factories, and industrial facilities.",
    image: "/metal-frame.jpeg",
    features: [
      {
        icon: <Wall size={20} />,
        title: "Fire-Resistant Applications",
        description: "Specialized materials and protective coatings",
      },
      {
        icon: <PaintBrush size={20} />,
        title: "Fire-Resistant Paints",
        description: "Intumescent and fireproof coating systems",
      },
      {
        icon: <ShieldCheck size={20} />,
        title: "Active Protection",
        description: "Sprinklers, alarms, and suppression systems",
      },
      {
        icon: <FireExtinguisher size={20} />,
        title: "Passive Protection",
        description: "Fire barriers, compartmentalization, and seals",
      },
      {
        icon: <Certificate size={20} />,
        title: "Certifications",
        description: "Full technical documentation and compliance",
      },
      {
        icon: <Factory size={20} />,
        title: "Industrial Applications",
        description: "Warehouses, factories, and storage facilities",
      },
    ],
  },
  {
    id: "vehicles",
    icon: <Truck size={32} weight="duotone" />,
    title: "Vehicles & Machinery",
    description:
      "Complete vehicle and construction machinery services including maintenance, repairs, sales, imports, and pre-purchase technical inspections.",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=800&q=80",
    features: [
      {
        icon: <Wrench size={20} />,
        title: "Maintenance & Repair",
        description: "All types of vehicles and construction machinery",
      },
      {
        icon: <ShoppingCart size={20} />,
        title: "Sales & Imports",
        description: "Professional vehicles and machinery on order",
      },
      {
        icon: <MagnifyingGlass size={20} />,
        title: "Technical Inspection",
        description: "Pre-purchase inspections and assessments",
      },
    ],
  },
  {
    id: "construction",
    icon: <Buildings size={32} weight="duotone" />,
    title: "Construction & Maintenance",
    description:
      "Comprehensive construction services from residential homes to commercial facilities, including renovations and ongoing maintenance.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    features: [
      {
        icon: <House size={20} />,
        title: "Residential Construction",
        description: "Custom homes and housing projects",
      },
      {
        icon: <Warehouse size={20} />,
        title: "Commercial Buildings",
        description: "Warehouses and business facilities",
      },
      {
        icon: <HardHat size={20} />,
        title: "Renovations",
        description: "Building upgrades and maintenance",
      },
    ],
  },
  {
    id: "electrical",
    icon: <Lightning size={32} weight="duotone" />,
    title: "Electrical Installations",
    description:
      "Complete electrical solutions from new installations to fault diagnosis and system upgrades for residential, commercial, and industrial facilities.",
    image: "/electrical-install.jpg",
    features: [
      {
        icon: <Plug size={20} />,
        title: "New Installations",
        description: "Complete wiring and electrical panel systems",
      },
      {
        icon: <LightbulbFilament size={20} />,
        title: "Fault Diagnosis",
        description: "Detection and repair of electrical faults",
      },
      {
        icon: <Gear size={20} />,
        title: "System Upgrades",
        description: "Modernization and capacity improvements",
      },
      {
        icon: <Certificate size={20} />,
        title: "Compliance",
        description: "Full certification and documentation",
      },
    ],
  },
  {
    id: "consulting",
    icon: <ChartLineUp size={32} weight="duotone" />,
    title: "Technical Consulting",
    description:
      "Expert consulting services including techno-economic studies, project management, cost-benefit analysis, and investment advisory.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    features: [
      {
        icon: <Lightbulb size={20} />,
        title: "Technical Solutions",
        description: "Customized project recommendations",
      },
      {
        icon: <Calculator size={20} />,
        title: "Project Costing",
        description: "Accurate budgeting and estimates",
      },
      {
        icon: <UsersThree size={20} />,
        title: "Supervision",
        description: "Work coordination and oversight",
      },
      {
        icon: <FileText size={20} />,
        title: "Techno-Economic Studies",
        description: "Comprehensive project analysis",
      },
      {
        icon: <Scales size={20} />,
        title: "Cost-Benefit Analysis",
        description: "Investment ROI evaluation",
      },
      {
        icon: <Gear size={20} />,
        title: "Equipment Selection",
        description: "Optimal machinery recommendations",
      },
      {
        icon: <Handshake size={20} />,
        title: "Investment Advisory",
        description: "Strategic technical guidance",
      },
    ],
  },
];

const additionalServices = [
  {
    title: "Import-Export Materials",
    description: "Building materials, industrial products, and special orders",
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination and delivery",
  },
  {
    title: "Emergency Services",
    description: "Rapid response for urgent technical issues",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80"
              alt="Industrial engineering"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
          </div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
          <GridPattern width={60} height={60} className="opacity-20" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full backdrop-blur-sm"
              >
                Our Services
              </motion.span>
              <TextGenerateEffect
                words="Complete Technical Solutions"
                className="text-4xl md:text-5xl lg:text-6xl tracking-tight"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-lg text-muted-foreground"
              >
                We provide integrated technical solutions across a wide range of
                activities, serving businesses, construction sites, warehouses,
                and industrial facilities.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <Section
            key={service.id}
            id={service.id}
            className={index % 2 === 0 ? "" : "bg-muted/30"}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image - alternating sides */}
              <FadeIn
                direction={index % 2 === 0 ? "left" : "right"}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <BorderBeam size={300} duration={15} />
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn
                direction={index % 2 === 0 ? "right" : "left"}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-4">
                    <Link href="/contact">
                      Request Quote
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </Section>
        ))}

        {/* Additional Services */}
        <Section className="bg-muted/30">
          <SectionHeader
            badge="And More"
            title="Additional Services"
            subtitle="Beyond our core offerings, we provide specialized services to meet your unique needs."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <StaggerItem key={index}>
                <MovingBorder
                  duration={3000 + index * 500}
                  rx="16px"
                  ry="16px"
                  className="p-6"
                  containerClassName="h-full"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <CheckCircle size={24} weight="fill" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </MovingBorder>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* Why Choose Us */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Professional team meeting"
                  fill
                  className="object-cover"
                />
                <BorderBeam size={300} duration={15} />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Excellence in Every Project
                </h2>
                <p className="text-lg text-muted-foreground">
                  With over 15 years of experience and a team of 50+ experts, we
                  deliver solutions that meet the highest industry standards.
                </p>
                <ul className="space-y-4">
                  {[
                    "Certified professionals with global experience",
                    "24/7 emergency support available",
                    "Competitive pricing with transparent quotes",
                    "Full compliance with safety regulations",
                    "Long-term partnership approach",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
