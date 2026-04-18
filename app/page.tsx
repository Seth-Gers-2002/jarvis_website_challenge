import Link from "next/link";
import {
  Phone, Droplets, Flame, Wrench, ShieldCheck, Clock,
  ThumbsUp, BadgeCheck, ArrowRight, Zap, Home,
  RotateCcw, Thermometer, Pipette,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Drainage & Gas",
    description: "All plumbing, drainage and gas fitting for domestic and commercial properties. No job is too big or too small.",
    items: ["Domestic & Commercial Installations", "Extensions & Renovations", "Fixture Replacement"],
  },
  {
    icon: Droplets,
    title: "Hot Water Services",
    description: "Expert installation, servicing and repair of all hot water systems. We'll have your hot water back up and running fast.",
    items: ["Hot Water Repairs", "New System Installation", "Emergency Service"],
  },
  {
    icon: Flame,
    title: "Gas Services",
    description: "Licensed gas fitting services for installation, repairs, and compliance. Safety is our number one priority.",
    items: ["Gas Fitting & Installation", "Gas Leak Detection", "Safety Compliance"],
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "Burst pipes, blocked drains, leaking taps — when you need us most, we respond fast with the right solution.",
    items: ["Burst Pipes", "Blocked Drains & Toilets", "Leaking Taps & Toilets"],
  },
  {
    icon: Home,
    title: "Renovations",
    description: "Transform your bathroom, laundry or kitchen with professional plumbing fit-outs that are built to last.",
    items: ["Bathroom Renovations", "Laundry & Kitchen Fit-outs", "Full Project Management"],
  },
  {
    icon: Thermometer,
    title: "Specialised Services",
    description: "From backflow prevention to thermostatic mixing valves — we handle the technical work with precision.",
    items: ["Backflow Prevention", "Thermostatic Mixing Valves", "Compliance & Certification"],
  },
];

const trustPoints = [
  { icon: BadgeCheck, title: "Licensed & Insured", desc: "Fully licensed and insured for all plumbing, drainage and gas work in Queensland." },
  { icon: Clock, title: "Prompt & Reliable", desc: "We show up when we say we will. Honest timelines, no surprises." },
  { icon: ThumbsUp, title: "Honest Pricing", desc: "Competitive, transparent rates. You'll know exactly what you're paying before we start." },
  { icon: ShieldCheck, title: "Quality Guaranteed", desc: "All our work is completed to the highest standard. We never cut corners." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--blue-950)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, var(--blue-600) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--blue-800) 0%, transparent 40%)" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(var(--blue-400) 1px, transparent 1px), linear-gradient(90deg, var(--blue-400) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Right image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center" style={{ background: "var(--blue-900)" }}>
          <div className="text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
            <Pipette size={64} className="mx-auto mb-3" />
            <p className="text-sm">Hero image placeholder</p>
            <p className="text-xs mt-1">Replace with your photo</p>
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--blue-950) 0%, transparent 50%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in" style={{ background: "rgba(37,99,235,0.2)", color: "var(--blue-400)", border: "1px solid rgba(96,165,250,0.3)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Smithfield QLD — Locally Owned
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ fontFamily: "Syne, sans-serif" }}>
              Plumbing You<br />
              <span style={{ color: "var(--blue-400)" }}>Can Rely On.</span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-10 animate-fade-up delay-200" style={{ color: "rgba(255,255,255,0.7)" }}>
              Seymour Plumbing is a locally owned business covering all aspects of plumbing, drainage and gas — from emergency repairs to full renovations. Licensed, insured, and always affordable.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a href="tel:0420909405" className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm btn-primary">
                <Phone size={16} />
                Call 0420 909 405
              </a>
              <Link href="#contact" className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm btn-outline">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-up delay-400">
              {["Licensed & Insured", "Competitive Pricing", "Honest & Reliable"].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <BadgeCheck size={16} style={{ color: "var(--blue-400)" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section style={{ background: "var(--blue-600)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm font-medium">
            {["All Plumbing & Gas Work", "Domestic & Commercial", "Emergency Repairs", "Renovations & Fit-outs"].map((item, i) => (
              <div key={item} className="flex items-center gap-4">
                <span>{item}</span>
                {i < 3 && <span className="hidden sm:block opacity-30">|</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--blue-600)" }}>What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-5" style={{ color: "var(--blue-950)" }}>Our Services</h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--slate-600)" }}>
              We offer an extensive range of services, from installation and upgrades to maintenance and emergency repairs. We never cut corners or take shortcuts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="service-card rounded-2xl p-8 border" style={{ borderColor: "var(--slate-200)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--blue-50)" }}>
                    <Icon size={22} style={{ color: "var(--blue-600)" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--blue-950)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--slate-600)" }}>{s.description}</p>
                  <ul className="flex flex-col gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--slate-600)" }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--blue-500)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm btn-primary">
              Request a Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24" style={{ background: "var(--blue-950)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-96 lg:min-h-[480px] flex items-center justify-center" style={{ background: "var(--blue-900)" }}>
              <div className="text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
                <RotateCcw size={48} className="mx-auto mb-3" />
                <p className="text-sm">About image placeholder</p>
                <p className="text-xs mt-1">Replace with your photo</p>
              </div>
              <div className="absolute bottom-6 right-6 px-5 py-4 rounded-xl text-white text-center" style={{ background: "var(--blue-600)" }}>
                <p className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>10+</p>
                <p className="text-xs mt-1 opacity-80">Years Experience</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--blue-400)" }}>Why Choose Us</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                Professional Service,<br />
                <span style={{ color: "var(--blue-400)" }}>Every Time.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
                Our professional and courteous service ensures all our work is completed to the highest standard — work you deserve, at rates that are fair.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trustPoints.map((tp) => {
                  const Icon = tp.icon;
                  return (
                    <div key={tp.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,99,235,0.3)" }}>
                        <Icon size={18} style={{ color: "var(--blue-400)" }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{tp.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{tp.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10">
                <Link href="/about" className="flex items-center gap-2 w-fit px-7 py-4 rounded-full font-semibold text-sm btn-outline">
                  About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />
    </>
  );
}
