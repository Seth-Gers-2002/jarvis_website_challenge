import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Star,
  Users,
  Wrench,
  Heart,
  Target,
  Phone,
  Image,
} from "lucide-react";

const testimonials = [
  {
    name: "Roger Lee",
    quote:
      "Genuine bloke, no BS and excellent service. Phoned one day — new toilet installed the next.",
    rating: 5,
  },
  {
    name: "Kristen Palmer",
    quote:
      "Highly recommend Seymour Plumbing. We had a busted water pipe. Boofa drove out straight away and fixed the issue. Excellent job done!",
    rating: 5,
  },
  {
    name: "James Bate",
    quote:
      "Great bloke, did an excellent job on my bathroom refit. Honest advice and no BS. Plus he actually showed up early!",
    rating: 5,
  },
  {
    name: "Andrew Hooper",
    quote:
      "Fantastic local bloke with loads of experience and a professional attitude — highly recommended!",
    rating: 5,
  },
];

const values = [
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured for all plumbing, drainage and gas work across Queensland.",
  },
  {
    icon: Heart,
    title: "Locally Owned",
    desc: "Proudly serving the Smithfield and Far North Queensland community.",
  },
  {
    icon: Target,
    title: "Your Satisfaction First",
    desc: "We never settle for second best and always have your satisfaction as our top priority.",
  },
  {
    icon: Wrench,
    title: "Tailored Solutions",
    desc: "Every customer is unique. We customise every plan to fit your specific needs exactly.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "var(--blue-950)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, var(--blue-600) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--blue-400) 1px, transparent 1px), linear-gradient(90deg, var(--blue-400) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-400)" }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            About Us
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            We offer the very best services in our field. We never settle for second best,
            and always have your satisfaction as our top priority.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden h-96 lg:min-h-[500px] flex items-center justify-center"
              style={{ background: "var(--slate-100)" }}
            >
              <div className="text-center" style={{ color: "var(--slate-400)" }}>
                <Image size={48} className="mx-auto mb-3" />
                <p className="text-sm">Team / owner photo placeholder</p>
                <p className="text-xs mt-1">Replace with your photo</p>
              </div>
              <div
                className="absolute top-6 left-6 px-5 py-4 rounded-xl text-white text-center"
                style={{ background: "var(--blue-600)" }}
              >
                <p className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>10+</p>
                <p className="text-xs mt-1 opacity-80">Years in Trade</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--blue-600)" }}
              >
                Who We Are
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: "var(--blue-950)" }}
              >
                Passionate About
                <br />
                <span style={{ color: "var(--blue-600)" }}>Getting It Right.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--slate-600)" }}>
                We love what we do and it shows. With many years of experience in the plumbing trade,
                we know our industry like the back of our hands. There&apos;s no challenge too big or too
                small, and we dedicate our utmost energy to every project we take on.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--slate-600)" }}>
                Seymour Plumbing is a locally owned business covering all aspects of plumbing and
                gas — from rectifying leaks and hot water repairs to blocked drains and full
                renovations. Our professional and courteous service ensures all work is completed to
                the highest standard at affordable rates.
              </p>

              <div className="flex gap-4">
                <a
                  href="tel:0420909405"
                  className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm btn-primary"
                >
                  <Phone size={16} />
                  Call Us Now
                </a>
                <Link
                  href="/#contact"
                  className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm border-2 transition-all hover:bg-blue-50"
                  style={{ borderColor: "var(--blue-600)", color: "var(--blue-700)" }}
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIES & PLANS ── */}
      <section className="py-24" style={{ background: "var(--slate-100)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue-600)" }}
            >
              Our Approach
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-5"
              style={{ color: "var(--blue-950)" }}
            >
              Strategies & Plans
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--slate-600)" }}>
              Every customer is unique. That&apos;s why we customise every one of our plans to fit your
              needs exactly. Whether it&apos;s a small fix or a comprehensive project, we&apos;ll sit down
              with you, listen to your requests, and prepare the right solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-7 shadow-sm service-card"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--blue-50)" }}
                  >
                    <Icon size={22} style={{ color: "var(--blue-600)" }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--blue-950)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--slate-600)" }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue-600)" }}
            >
              Customer Reviews
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--blue-950)" }}
            >
              Why People Believe In Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 border service-card"
                style={{ borderColor: "var(--slate-200)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--accent)"
                      style={{ color: "var(--accent)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: "var(--slate-600)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: "var(--blue-600)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "var(--blue-950)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--slate-400)" }}>
                      Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ background: "var(--blue-600)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <Users size={12} />
            Ready to Help
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-xl mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Whether it&apos;s an emergency repair or a planned renovation, we&apos;re here to help.
            Get in touch today for honest advice and a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0420909405"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm bg-white transition-all hover:bg-slate-100"
              style={{ color: "var(--blue-700)" }}
            >
              <Phone size={16} />
              Call 0420 909 405
            </a>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm btn-outline"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
