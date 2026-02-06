"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
              alt="Modern building architecture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/90" />
          </div>

          {/* Background Beams */}
          <BackgroundBeams className="opacity-30" />

          {/* Background pattern */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
          </div>

          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:py-20 z-10 text-background">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Let&apos;s Build Something{" "}
                <span className="text-primary">Great Together</span>
              </h2>
              <p className="mt-4 text-lg text-background/70 max-w-lg">
                From initial consultation to project completion, our team is
                here to deliver excellence at every step.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <ShimmerButton className="shadow-2xl">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      Start Your Project
                      <ArrowRight size={16} />
                    </span>
                  </ShimmerButton>
                </Link>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10"
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
