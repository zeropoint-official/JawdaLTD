"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/ui/contact-form";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GridPattern } from "@/components/ui/grid-pattern";
import { MovingBorder } from "@/components/ui/moving-border";
import { BorderBeam } from "@/components/ui/border-beam";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/text-reveal";
import {
  Envelope,
  Phone,
  Clock,
} from "@phosphor-icons/react";

const contactInfo = [
  {
    icon: <Envelope size={24} weight="duotone" />,
    label: "Email",
    value: "info@jawdaltd.com",
    href: "mailto:info@jawdaltd.com",
    description: "Send us an email anytime",
  },
  {
    icon: <Phone size={24} weight="duotone" />,
    label: "Phone",
    value: "99766542",
    href: "tel:99766542",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: <Clock size={24} weight="duotone" />,
    label: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM",
    description: "24/7 emergency support",
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We provide services with particular expertise in industrial and commercial projects.",
  },
  {
    q: "How do I get a quote?",
    a: "Simply fill out the contact form above or call us directly. We provide free initial consultations.",
  },
  {
    q: "What is your response time?",
    a: "We respond to all inquiries within 24 hours. Emergency services are available 24/7.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes, all our work comes with comprehensive warranties. Details vary by service type.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
          <GridPattern
            width={60}
            height={60}
            className="opacity-30"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full"
              >
                Contact Us
              </motion.span>
              <TextGenerateEffect
                words="Let's Start Your Project"
                className="text-4xl md:text-5xl lg:text-6xl tracking-tight"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-lg text-muted-foreground"
              >
                Have a question or ready to discuss your next project? We&apos;re
                here to help. Reach out to us and our team will respond within
                24 hours.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <Section className="pt-0">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactInfo.map((item, index) => (
              <StaggerItem key={index}>
                <MovingBorder
                  duration={3000 + index * 500}
                  rx="16px"
                  ry="16px"
                  className="p-5 h-full"
                  containerClassName="h-full"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </MovingBorder>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side */}
            <FadeIn direction="left" className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Choose the best way to reach us. Our team is ready to assist
                    you with your technical needs.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="relative bg-card rounded-2xl border border-border p-6 md:p-8 lg:p-10 overflow-hidden">
                <BorderBeam size={300} duration={15} />
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? Here are some common ones we receive.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <div className="relative p-6 rounded-xl bg-card border border-border overflow-hidden group hover:border-primary/50 transition-colors">
                    <BorderBeam
                      size={100}
                      duration={8}
                      delay={index * 2}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
