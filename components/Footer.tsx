import Link from "next/link";
import { Phone, MapPin, Mail, CheckCircle } from "lucide-react";

export default function Footer() {
  const services = [
    "Plumbing Drainage & Gas",
    "Hot Water Services",
    "Blocked Drains & Toilets",
    "Burst Pipes",
    "Leaking Taps & Toilets",
    "Bathroom Renovations",
    "Backflow Prevention",
    "Thermostatic Mixing Valves",
  ];

  return (
    <footer style={{ background: "var(--blue-950)", color: "white" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                style={{ background: "var(--blue-600)" }}
              >
                SP
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
                Seymour Plumbing
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--slate-400)" }}>
              A locally owned plumbing business with a wealth of experience that can cater for all
              your plumbing needs. Licensed, insured, and committed to the highest standard of work
              at affordable rates.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0420909405"
                className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors"
                style={{ color: "var(--slate-400)" }}
              >
                <Phone size={16} style={{ color: "var(--blue-400)" }} />
                0420 909 405
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--slate-400)" }}
              >
                <MapPin size={16} style={{ color: "var(--blue-400)" }} />
                Smithfield QLD 4878
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--blue-400)" }}>
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--slate-400)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--blue-400)" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/#services", label: "Services" },
                { href: "/#contact", label: "Get a Quote" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--slate-400)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--blue-400)" }}>
                Credentials
              </h4>
              {["Licensed & Insured", "Queensland Based", "All Work Guaranteed"].map((c) => (
                <div key={c} className="flex items-center gap-2 mb-2">
                  <CheckCircle size={14} style={{ color: "var(--blue-400)" }} />
                  <span className="text-sm" style={{ color: "var(--slate-400)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "var(--slate-400)" }}
        >
          <p>© {new Date().getFullYear()} Seymour Plumbing. All rights reserved.</p>
          <p>Smithfield QLD 4878 &nbsp;|&nbsp; PH 0420 909 405</p>
        </div>
      </div>
    </footer>
  );
}
