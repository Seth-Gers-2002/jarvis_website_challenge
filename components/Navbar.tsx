"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-lg"
              style={{ background: "var(--blue-600)" }}
            >
              SP
            </div>
            <div>
              <span
                className="block font-bold text-lg leading-tight"
                style={{
                  fontFamily: "Syne, sans-serif",
                  color: scrolled ? "var(--blue-900)" : "white",
                }}
              >
                Seymour Plumbing
              </span>
              <span
                className="block text-xs"
                style={{ color: scrolled ? "var(--slate-400)" : "rgba(255,255,255,0.7)" }}
              >
                Smithfield QLD
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-sm font-medium ${
                  pathname === l.href ? "active" : ""
                }`}
                style={{ color: scrolled ? "var(--slate-800)" : "white" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA Phone */}
          <a
            href="tel:0420909405"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold btn-primary"
          >
            <Phone size={15} />
            0420 909 405
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "var(--slate-800)" : "white" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium py-2"
                style={{ color: "var(--slate-800)" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:0420909405"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold btn-primary mt-2"
            >
              <Phone size={15} />
              0420 909 405
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
