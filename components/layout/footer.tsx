import Link from "next/link";
import Image from "next/image";
import {
  Envelope,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  services: [
    { href: "/services#vehicles", label: "Vehicles & Machinery" },
    { href: "/services#construction", label: "Construction" },
    { href: "/services#electrical", label: "Electrical & Fire Protection" },
    { href: "/services#consulting", label: "Technical Consulting" },
  ],
  company: [
    { href: "/#about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo-copy.png" alt="Jawda LTD" width={180} height={60} className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Complete Technical Solutions. Reliable, efficient, and
              cost-effective services tailored to your project needs.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Envelope size={16} className="text-primary" />
                <a href="mailto:jawdaltd@gmail.com" className="hover:text-primary transition-colors">
                  jawdaltd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone size={16} className="text-primary" />
                <a href="tel:99766542" className="hover:text-primary transition-colors">
                  99766542
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Jawda LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-background/50 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-background/50 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
