"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const SERVICES = [
  "Plumbing Drainage & Gas",
  "Hot Water Services",
  "Blocked Drains & Toilets",
  "Leaking Taps & Toilets",
  "Burst Pipes",
  "Bathroom / Kitchen Renovation",
  "Backflow Prevention",
  "Thermostatic Mixing Valves",
  "Domestic & Commercial Installation",
  "Other",
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ background: "var(--slate-100)" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--blue-600)" }}>
              Get In Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--blue-950)" }}>
              Request a Free Quote
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--slate-600)" }}>
              Whether it&apos;s an emergency repair or a planned renovation, we&apos;re here to help. Fill in
              the form and we&apos;ll be in touch promptly.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "📞", label: "Call us directly", value: "0420 909 405", href: "tel:0420909405" },
                { icon: "📍", label: "Location", value: "Smithfield QLD 4878", href: null },
              ].map((item) => (
                <div key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: "var(--slate-400)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href}
                        className="font-semibold hover:underline"
                        style={{ color: "var(--blue-700)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold" style={{ color: "var(--blue-700)" }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle size={56} style={{ color: "var(--blue-500)" }} />
                <h3 className="text-2xl font-bold" style={{ color: "var(--blue-900)" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--slate-600)" }}>
                  Thanks for reaching out. We&apos;ll be in contact with you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold btn-primary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--slate-800)" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{
                        borderColor: "var(--slate-200)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--slate-800)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{ borderColor: "var(--slate-200)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5"
                    style={{ color: "var(--slate-800)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                    style={{ borderColor: "var(--slate-200)" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5"
                    style={{ color: "var(--slate-800)" }}>
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 bg-white"
                    style={{ borderColor: "var(--slate-200)" }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5"
                    style={{ color: "var(--slate-800)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your plumbing issue or project..."
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none"
                    style={{ borderColor: "var(--slate-200)" }}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try calling us directly on 0420 909 405.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm btn-primary disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
