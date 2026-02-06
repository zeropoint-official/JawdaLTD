import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

import { ServicesPreview } from "@/components/sections/services-preview";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <ServicesPreview />
        <Stats />
        <About />
        <Features />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
