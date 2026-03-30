import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Jawda LTD - Complete Technical Solutions",
    template: "%s | Jawda LTD",
  },
  description:
    "Reliable, efficient, and cost-effective technical solutions. Mechanical, electrical, construction, and consulting services tailored to your project needs.",
  keywords: [
    "technical solutions",
    "construction",
    "electrical services",
    "vehicle maintenance",
    "fire protection",
    "technical consulting",
    "machinery",
    "industrial services",
  ],
  authors: [{ name: "Jawda LTD" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jawda.com",
    siteName: "Jawda LTD",
    title: "Jawda LTD - Complete Technical Solutions",
    description:
      "Reliable, efficient, and cost-effective technical solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawda LTD - Complete Technical Solutions",
    description:
      "Reliable, efficient, and cost-effective technical solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} overflow-x-clip`}>
      <body className="font-sans antialiased overflow-x-clip">{children}</body>
    </html>
  );
}
