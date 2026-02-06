"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  variant?: "default" | "compact";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const isCompact = variant === "compact";

  return (
    <form className="space-y-6">
      <div className={isCompact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="h-11"
          />
        </div>
      </div>

      {!isCompact && (
        <div className={isCompact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="99766542"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              placeholder="Your Company"
              className="h-11"
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <select
          id="service"
          className="flex h-11 w-full rounded-4xl border border-border bg-input/30 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Select a service...</option>
          <option value="vehicles">Vehicles & Machinery</option>
          <option value="construction">Construction & Maintenance</option>
          <option value="electrical">Electrical & Fire Protection</option>
          <option value="consulting">Technical Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={isCompact ? 4 : 6}
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
}
