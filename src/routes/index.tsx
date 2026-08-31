import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

import { AppleIcon } from "@/components/AppleIcon";
import { AndroidIcon } from "@/components/AndroidIcon";
import heroImage from "@/assets/hero-spare-parts.jpg";
import logoImage from "@/assets/logo-mobile-engineer.png";

const PHONE = "8610328939";
const EMAIL = "mobileengineerkkdi@gmail.com";
const WHATSAPP = `https://wa.me/${PHONE}`;
const INSTAGRAM = "https://www.instagram.com/mobileengineerkkdi?igsi=NWdlZXByZ3NmZm4z";
const MAPS = "https://maps.app.goo.gl/c2qc3ty16Ueqoj9T9?g_st=ac";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Engineer | iPhone & Android Repair in Karaikudi" },
      {
        name: "description",
        content:
          "Expert iPhone and Android repair in Karaikudi: display, battery, charging port, camera, water damage and motherboard service with a 6-month warranty.",
      },
      {
        property: "og:title",
        content: "Mobile Engineer | iPhone & Android Repair in Karaikudi",
      },
      {
        property: "og:description",
        content:
          "Professional mobile repair with engineered accuracy. Same-day screen and battery service, genuine parts, 6-month warranty.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Repairs", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Expertise", href: "#platform" },
  { label: "Request", href: "#request" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "4,000+", label: "Devices Repaired" },
  { value: "5+ yrs", label: "Bench Experience" },
  { value: "60 min", label: "Average Turnaround" },
  { value: "3 months", label: "Repair Warranty" },
];

const SERVICES = [
  {
    icon: "smartphone",
    title: "Display Replacement",
    body: "Precision calibration and seamless fitting of OEM-grade displays for flawless touch and visual fidelity.",
  },
  {
    icon: "battery_charging_full",
    title: "Battery Replacement",
    body: "High-capacity cell integration ensuring optimized power delivery and extended device longevity.",
  },
  {
    icon: "cable",
    title: "Charging Port Repair",
    body: "Resolve charging issues with micro-soldering and port replacement for stable connectivity.",
  },
  {
    icon: "mic",
    title: "Speaker/Mic Repair",
    body: "Restore crystal clear audio for calls and media with precision component replacement.",
  },
  {
    icon: "photo_camera",
    title: "Camera Repair",
    body: "Fix blurry lenses, focus issues, and blank screens with OEM camera module installation.",
  },
  {
    icon: "system_update_alt",
    title: "Software Issues",
    body: "Resolve boot loops, crashes, and OS corruption with advanced flashing and recovery.",
  },
  {
    icon: "water_drop",
    title: "Water Damage",
    body: "Ultrasonic cleaning and component-level diagnosis to salvage liquid-damaged devices.",
  },
  {
    icon: "memory",
    title: "Motherboard Service",
    body: "Micro-soldering and complex integrated circuit diagnostics to revive dead or malfunctioning boards.",
  },
];

const PROCESS = [
  {
    icon: "chat_bubble",
    title: "Tell Us the Fault",
    body: "Call, WhatsApp, or log a request. Describe the symptoms and your device model.",
  },
  {
    icon: "biotech",
    title: "Free Diagnosis",
    body: "Bench inspection under a microscope, with a fixed quote before any work starts.",
  },
  {
    icon: "handyman",
    title: "Precision Repair",
    body: "Component-level repair with ESD-safe tools and calibrated soldering stations.",
  },
  {
    icon: "verified",
    title: "Test & Handover",
    body: "36-point quality check, then handover with a written 6-month warranty card.",
  },
];

const BRANDS_MARQUEE = [
  "Apple",
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "Redmi",
  "Vivo",
  "Oppo",
  "Realme",
  "Motorola",
  "Nothing",
  "Google Pixel",
  "Poco",
];

const TRUST = [
  { icon: "shield", title: "6-Month Warranty", body: "Written warranty on every part and labour charge." },
  { icon: "bolt", title: "Same-Day Service", body: "Most screen and battery jobs finish while you wait." },
  { icon: "inventory_2", title: "Genuine Parts", body: "OEM-grade components sourced from verified suppliers." },
  { icon: "lock", title: "Data Safe", body: "Your data stays on the device. Nothing is copied or shared." },
];

const REVIEWS = [
  {
    quote:
      "Excellent service! Replaced my iPhone battery within an hour. The technician was very professional and explained the process clearly. Highly recommend.",
    name: "Rahul K.",
    device: "iPhone 12 · Battery",
  },
  {
    quote:
      "My Samsung screen was completely shattered. They replaced it with original parts and it looks brand new. Great pricing too compared to official service centers.",
    name: "Priya S.",
    device: "Galaxy S21 · Display",
  },
  {
    quote:
      "Saved my phone from water damage! I thought I lost all my data, but they managed to fix the motherboard and recover everything. True experts.",
    name: "Arun M.",
    device: "Redmi Note 11 · Board",
  },
];

const FAQS = [
  {
    q: "How long does a screen replacement take?",
    a: "Most iPhone and Android display replacements are completed in 45 to 60 minutes while you wait, provided the part is in stock.",
  },
  {
    q: "Do you use original parts?",
    a: "Yes. We fit OEM or OEM-grade components and tell you upfront which grade is being used along with its warranty.",
  },
  {
    q: "Will I lose my data during repair?",
    a: "No. Hardware repairs do not touch your storage. For software recovery jobs we always ask before performing any wipe.",
  },
  {
    q: "Is there a charge for diagnosis?",
    a: "Diagnosis is free. You only pay once you approve the fixed quote we share after inspecting the device.",
  },
  {
    q: "Do you offer pickup and drop?",
    a: "Yes, within Karaikudi town limits. Message us on WhatsApp and we will arrange a collection slot.",
  },
];

const BRANDS = [
  { value: "apple", label: "Apple (iPhone)" },
  { value: "samsung", label: "Samsung" },
  { value: "oneplus", label: "OnePlus" },
  { value: "xiaomi", label: "Xiaomi/Redmi" },
  { value: "vivo", label: "Vivo" },
  { value: "oppo", label: "Oppo" },
  { value: "other", label: "Other Android" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className ?? ""}`}>
      {name}
    </span>
  );
}


function Reveal({
  children,
  className,
  variant = "reveal",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: "reveal" | "reveal-left" | "reveal-right" | "reveal-zoom";
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error -- polymorphic ref
    <Tag ref={ref} className={`${variant} ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-xs font-semibold tracking-[0.24em] text-primary-container uppercase">
        {eyebrow}
      </p>
      <h2 className="mb-3 text-[28px] leading-9 font-bold tracking-[-0.01em] text-on-surface md:text-[32px] md:leading-[40px]">
        {title}
      </h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-primary-container" />
      {sub && <p className="mx-auto mt-4 max-w-[620px] text-tertiary">{sub}</p>}
    </Reveal>
  );
}

const inputClass =
  "w-full rounded border border-border bg-surface-lowest px-4 py-3 text-base transition-all outline-none focus:border-2 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20";
const labelClass = "mb-1 block text-xs font-medium text-on-surface-variant";

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveReview((i) => (i + 1) % REVIEWS.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Repair Request — ${data.get("name")} (${data.get("brand") || "Device"})`,
    );
    const body = encodeURIComponent(
      [
        `Customer Name: ${data.get("name")}`,
        `Contact Number: ${data.get("phone")}`,
        `Mobile Brand: ${data.get("brand") || "-"}`,
        `Mobile Model: ${data.get("model") || "-"}`,
        "",
        "Issue Description:",
        `${data.get("issue") || "-"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <nav
        className={`sticky top-0 z-50 w-full border-b bg-surface-lowest/90 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "border-border shadow-md" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-margin-mobile md:px-margin-desktop">
          <a href="#home" className="group flex items-center gap-2">
            <img
              alt="Mobile Engineer logo"
              className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12"
              src={logoImage}
              width={816}
              height={816}
            />
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-primary sm:text-xl">
                Mobile Engineer
              </span>
              <span className="mt-0.5 text-[10px] font-medium tracking-[0.22em] text-tertiary uppercase">
                Precision Tech Repairs
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-container after:transition-all after:duration-300 hover:text-primary ${
                  i === 0
                    ? "font-semibold text-primary after:w-full"
                    : "text-on-surface-variant after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 rounded bg-primary-container px-4 py-2 text-sm font-semibold tracking-[0.05em] text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md active:scale-95"
          >
            <Icon name="call" className="text-[18px]" />
            Call Now
          </a>
        </div>
      </nav>

      <header
        id="home"
        className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Black and white mobile phone spare parts laid out on a repair bench"
          width={1920}
          height={1088}
          className="animate-ken-burns absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 z-10 bg-charcoal/80" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
        <Reveal
          variant="reveal-zoom"
          className="relative z-20 mx-auto max-w-[900px] px-margin-mobile py-24 text-center md:px-margin-desktop"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-container/50 bg-charcoal/60 px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-primary-fixed uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-whatsapp" />
            Open today · 9am – 9pm
          </span>
          <h1 className="mb-4 text-[30px] leading-10 font-bold tracking-[-0.02em] text-surface-lowest md:text-5xl md:leading-[56px]">
            iPhone &amp; Android Specialist
          </h1>
          <p className="mx-auto mb-8 max-w-[700px] text-base leading-7 text-surface-variant md:text-lg md:leading-8">
            Professional Mobile Repair. Trusted Service. Expert Technicians. Restoring peak
            performance with engineered accuracy.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#request"
              className="group w-full rounded bg-primary-container px-8 py-4 text-center text-sm font-semibold tracking-[0.05em] text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg sm:w-auto"
            >
              Request Repair
              <Icon
                name="arrow_forward"
                className="ml-1 align-middle text-[18px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="w-full rounded border border-outline bg-charcoal/70 px-8 py-4 text-center text-sm font-semibold tracking-[0.05em] text-primary-foreground shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-container sm:w-auto"
            >
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded bg-whatsapp px-8 py-4 text-center text-sm font-semibold tracking-[0.05em] text-surface-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-dark sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </header>

      <main>
        {/* Stats */}
        <section className="border-b border-border bg-surface-lowest px-margin-mobile py-10 md:px-margin-desktop">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center">
                <div className="text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs tracking-[0.14em] text-tertiary uppercase">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Brand marquee */}
        <section className="overflow-hidden border-b border-border bg-surface-low py-4">
          <div className="animate-marquee flex w-max items-center gap-10">
            {[...BRANDS_MARQUEE, ...BRANDS_MARQUEE].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="text-sm font-semibold tracking-[0.18em] text-outline uppercase"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-background px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading
              eyebrow="What we fix"
              title="Technical Expertise / Services"
              sub="Component-level repairs carried out on an ESD-safe bench, with transparent pricing before we start."
            />
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 90}>
                  <div className="glass-panel hover-lift group flex h-full flex-col rounded-lg border-t-2 border-t-transparent bg-surface-lowest p-6 hover:border-t-primary-container">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-container transition-colors duration-300 group-hover:bg-primary-container/20">
                      <Icon
                        name={s.icon}
                        className="text-[26px] text-tertiary transition-colors duration-300 group-hover:text-primary-container"
                      />
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-on-surface">{s.title}</h3>
                    <p className="text-sm text-tertiary">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-surface-low px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading eyebrow="How it works" title="Four Steps to a Working Phone" />
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-4">
              {PROCESS.map((p, i) => (
                <Reveal key={p.title} variant="reveal-left" delay={i * 120}>
                  <div className="relative h-full rounded-lg border border-border bg-surface-lowest p-6 transition-shadow duration-300 hover:shadow-md">
                    <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                      {i + 1}
                    </span>
                    <Icon name={p.icon} className="mt-3 mb-3 block text-3xl text-primary-container" />
                    <h3 className="mb-2 text-base font-semibold text-on-surface">{p.title}</h3>
                    <p className="text-sm text-tertiary">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="bg-background px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading eyebrow="Why us" title="Small Details That Matter" />
            <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
              {TRUST.map((t, i) => (
                <Reveal key={t.title} variant="reveal-zoom" delay={i * 90}>
                  <div className="hover-lift flex h-full items-start gap-4 rounded-lg border border-border bg-surface-lowest p-6">
                    <Icon name={t.icon} className="text-3xl text-primary-container" />
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-on-surface">{t.title}</h3>
                      <p className="text-sm text-tertiary">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="bg-surface-low px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[1200px] text-center">
            <SectionHeading eyebrow="Platforms" title="Platform Expertise" />
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              <Reveal variant="reveal-left" className="w-full sm:w-80">
                <div className="hover-lift flex flex-col items-center rounded-lg border border-border bg-surface-lowest p-10 shadow-sm">
                  <div className="animate-float mb-4 flex h-32 w-32 items-center justify-center rounded-2xl bg-surface-container">
                    <AppleIcon className="h-24 w-24 text-on-surface" />
                  </div>
                  <h3 className="text-xl font-semibold">iPhone Repair</h3>
                  <p className="mt-2 text-sm text-tertiary">
                    iPhone 6 through iPhone 16 Pro Max, Face ID and True Tone safe.
                  </p>
                </div>
              </Reveal>
              <Reveal variant="reveal-right" className="w-full sm:w-80">
                <div className="hover-lift flex flex-col items-center rounded-lg border border-border bg-surface-lowest p-10 shadow-sm">
                  <div className="animate-float mb-4 flex h-32 w-32 items-center justify-center rounded-2xl bg-surface-container">
                    <AndroidIcon className="h-24 w-24 text-android" />
                  </div>
                  <h3 className="text-xl font-semibold">Android Repair</h3>
                  <p className="mt-2 text-sm text-tertiary">
                    Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme, Pixel and more.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Request form */}
        <section id="request" className="bg-background px-margin-mobile py-16 md:px-margin-desktop">
          <Reveal
            variant="reveal-zoom"
            className="mx-auto max-w-[800px] rounded-lg border border-border bg-surface-lowest p-8 shadow-sm md:p-12"
          >
            <h2 className="mb-2 text-center text-[28px] leading-9 font-bold tracking-[-0.01em] text-on-surface md:text-[32px] md:leading-10">
              Log Repair Request
            </h2>
            <p className="mb-8 text-center text-tertiary">
              Enter device specifications for a preliminary diagnostic assessment.
            </p>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Customer Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className={inputClass}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="brand">
                    Mobile Brand
                  </label>
                  <select id="brand" name="brand" className={inputClass} defaultValue="">
                    <option value="">Select Brand</option>
                    {BRANDS.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="model">
                    Mobile Model
                  </label>
                  <input
                    id="model"
                    name="model"
                    type="text"
                    placeholder="Model number"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="issue">
                  Issue Description
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  rows={4}
                  placeholder="Describe the hardware or software malfunction..."
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-primary-container py-4 text-sm font-semibold tracking-[0.05em] text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md active:scale-[0.99]"
              >
                Submit Diagnostic Request
              </button>
              {submitted && (
                <p
                  role="status"
                  className="rounded border border-whatsapp/40 bg-whatsapp/10 px-4 py-3 text-center text-sm text-on-surface"
                >
                  Request logged. We'll call you back on the number provided.
                </p>
              )}
            </form>
          </Reveal>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-surface-low px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading eyebrow="Reviews" title="Customer Reviews" />

            {/* Slider (mobile) */}
            <div className="md:hidden">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${activeReview * 100}%)` }}
                >
                  {REVIEWS.map((r) => (
                    <div key={r.name} className="w-full shrink-0 px-1">
                      <ReviewCard review={r} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {REVIEWS.map((r, i) => (
                  <button
                    key={r.name}
                    aria-label={`Show review ${i + 1}`}
                    onClick={() => setActiveReview(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeReview ? "w-6 bg-primary-container" : "w-2 bg-surface-dim"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Grid (desktop) */}
            <div className="hidden grid-cols-3 gap-gutter md:grid">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 120}>
                  <ReviewCard review={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[800px]">
            <SectionHeading eyebrow="Answers" title="Frequently Asked Questions" />
            <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface-lowest">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-low"
                    >
                      <span className="text-base font-semibold text-on-surface">{f.q}</span>
                      <Icon
                        name="expand_more"
                        className={`shrink-0 text-2xl text-primary-container transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm text-tertiary">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-surface-low px-margin-mobile py-16 md:px-margin-desktop">
          <div className="mx-auto max-w-[1200px]">
            <SectionHeading eyebrow="Visit us" title="Contact Information" />
            <div className="grid grid-cols-1 items-center gap-12 rounded-lg border border-border bg-surface-lowest p-8 shadow-sm md:grid-cols-2">
              <Reveal variant="reveal-left" className="space-y-6">
                <ContactRow icon="call" title="Call Us">
                  <a className="transition-colors hover:text-primary" href={`tel:${PHONE}`}>
                    {PHONE}
                  </a>
                </ContactRow>
                <ContactRow icon="chat" title="WhatsApp" iconClass="text-whatsapp">
                  <a
                    className="transition-colors hover:text-whatsapp-dark"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat with us directly
                  </a>
                </ContactRow>
                <ContactRow icon="mail" title="Email">
                  <a className="transition-colors hover:text-primary" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </ContactRow>
                <ContactRow icon="schedule" title="Working Hours">
                  Monday – Saturday: 9:00 am – 9:00 pm
                  <br />
                  Sunday: 10:00 am – 9:00 pm
                </ContactRow>
                <ContactRow icon="location_on" title="Location">
                  Burma Colony, Trichy Main Road, Karaikudi
                  <a
                    className="mt-2 inline-block rounded border border-border bg-surface-container px-4 py-2 text-xs font-medium text-on-surface transition-colors hover:bg-surface-dim"
                    href={MAPS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </ContactRow>
              </Reveal>
              <Reveal
                variant="reveal-right"
                className="h-[340px] w-full overflow-hidden rounded-lg border border-border bg-surface-container"
              >
                <iframe
                  title="Mobile Engineer location map"
                  src="https://maps.google.com/maps?q=Burma%20Colony,%20Trichy%20Main%20Road,%20Karaikudi&output=embed"
                  className="h-full w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t-4 border-primary-container bg-primary">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-gutter px-margin-mobile py-12 md:grid-cols-4 md:px-margin-desktop">
          <div className="col-span-1 flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <img
                alt="Mobile Engineer logo"
                className="h-11 w-11 rounded bg-surface-lowest p-1.5"
                src={logoImage}
                loading="lazy"
                width={816}
                height={816}
              />
              <div className="text-2xl font-bold text-surface-lowest">Mobile Engineer</div>
            </div>
            <p className="max-w-md text-surface-variant">
              Precision Tech Repairs. Engineered for reliability. Expert solutions for all your
              mobile device needs in Karaikudi.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href={WHATSAPP} label="WhatsApp" external>
                <WhatsAppIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={INSTAGRAM} label="Instagram" external>
                <InstagramIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={`mailto:${EMAIL}`} label="Email">
                <MailIcon className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-[0.05em] text-primary-fixed">Contact</h4>
            <ul className="space-y-2">
              <FooterLink href={`tel:${PHONE}`}>{PHONE}</FooterLink>
              <FooterLink href={WHATSAPP} external>
                WhatsApp Us
              </FooterLink>
              <FooterLink href={`mailto:${EMAIL}`}>{EMAIL}</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-[0.05em] text-primary-fixed">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#process">Our Process</FooterLink>
              <FooterLink href="#request">Request Repair</FooterLink>
              <FooterLink href="#reviews">Reviews</FooterLink>
            </ul>
          </div>
        </div>
        <div className="border-t border-outline/30 px-margin-mobile py-6 text-center">
          <p className="text-surface-variant">
            © 2026 Mobile Engineer. Burma Colony, Karaikudi. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-surface-lowest shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <Icon name="chat" className="text-[26px]" />
      </a>
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="hover-lift flex h-full flex-col rounded-lg border border-border bg-surface-lowest p-6 shadow-sm">
      <div className="mb-4 flex items-center text-star">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" className="text-xl" />
        ))}
      </div>
      <p className="mb-5 flex-1 text-base text-on-surface-variant italic">"{review.quote}"</p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container/20 text-sm font-bold text-primary">
          {review.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-bold text-on-surface">{review.name}</div>
          <div className="text-xs text-tertiary">{review.device}</div>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  title,
  children,
  iconClass,
}: {
  icon: string;
  title: string;
  children: ReactNode;
  iconClass?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon name={icon} className={`text-3xl ${iconClass ?? "text-primary-container"}`} />
      <div>
        <h4 className="text-sm font-bold tracking-[0.05em] text-on-surface">{title}</h4>
        <p className="text-tertiary">{children}</p>
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        className="text-surface-variant transition-colors hover:text-primary-fixed"
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-lowest text-primary-fixed shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary-container hover:text-primary-foreground"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.428-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.432 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.955L0 24l6.335-1.652c1.744.953 3.71 1.452 5.715 1.454h.006c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#833AB4" />
          <stop offset="50%" stopColor="#FD1D1D" />
          <stop offset="100%" stopColor="#F77737" />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagramGradient)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#EA4335" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
