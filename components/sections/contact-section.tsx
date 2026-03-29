"use client";

import { Section, SectionHeader } from "@/components/layout/section";
import { ContactForm } from "@/components/ui/contact-form";
import { FadeIn } from "@/components/ui/text-reveal";
import {
  Envelope,
  Phone,
  Clock,
} from "@phosphor-icons/react";

const contactInfo = [
  {
    icon: <Envelope size={20} weight="duotone" />,
    label: "Email",
    value: "info@jawdaltd.com",
    href: "mailto:info@jawdaltd.com",
  },
  {
    icon: <Phone size={20} weight="duotone" />,
    label: "Phone",
    value: "97879668",
    href: "tel:97879668",
  },
  {
    icon: <Clock size={20} weight="duotone" />,
    label: "Hours",
    value: "Mon - Fri: 9AM - 6PM",
  },
];

export function ContactSection() {
  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeader
        badge="Get in Touch"
        title="Ready to Start Your Project?"
        subtitle="Contact us today to discuss your technical needs. Our team is ready to provide tailored solutions for your business."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <FadeIn direction="left" className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Reach out to us through any of the following channels, or fill
                out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn direction="right" className="lg:col-span-3">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <ContactForm variant="compact" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
