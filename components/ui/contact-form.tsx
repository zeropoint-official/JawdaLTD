"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  variant?: "default" | "compact";
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const isCompact = variant === "compact";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-input/30 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
          <svg
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold">Message Sent!</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={isCompact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            className="h-11"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className="h-11"
            required
          />
        </div>
      </div>

      {!isCompact && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="99766542"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
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
          name="service"
          className="flex h-11 w-full rounded-4xl border border-border bg-input/30 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Select a service...</option>
          <option value="fire-protection">Fire Protection</option>
          <option value="epoxy-products">Epoxy Products</option>
          <option value="construction">Construction & Maintenance</option>
          <option value="vehicles">Vehicles & Machinery</option>
          <option value="electrical">Electrical Installations</option>
          <option value="consulting">Technical Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={isCompact ? 4 : 6}
          required
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
