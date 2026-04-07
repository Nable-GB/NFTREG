"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const copy = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="panel rounded-[1.5rem] px-4 py-3 backdrop-blur-xl sm:px-6">
        <div className="flex items-start justify-between gap-3 sm:items-center">
        <a href="#overview" className="flex min-w-0 items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <span className="absolute inset-2 rounded-xl bg-[radial-gradient(circle_at_top,var(--accent-soft),transparent_58%)]" />
            <span className="font-heading text-lg tracking-[0.25em] text-white">NF</span>
          </span>
          <div className="min-w-0">
            <p className="truncate font-heading text-base uppercase tracking-[0.28em] text-white sm:text-lg sm:tracking-[0.32em]">
              NFTReg.US
            </p>
            <p className="truncate font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.35em]">
              {copy.nav.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {copy.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] transition ${
              language === "en"
                ? "bg-[var(--accent)] text-slate-950"
                : "text-white/65 hover:text-white"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage("ko")}
            className={`rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] transition ${
              language === "ko"
                ? "bg-[var(--violet)] text-white"
                : "text-white/65 hover:text-white"
            }`}
          >
            한국어
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:border-[var(--accent)] md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>

        {mobileMenuOpen ? (
          <div className="mt-4 space-y-4 border-t border-white/10 pt-4 md:hidden">
            <nav className="grid gap-2">
              {copy.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/78 transition hover:border-[var(--accent)] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-[0.9rem] px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                  language === "en"
                    ? "bg-[var(--accent)] text-slate-950"
                    : "text-white/65 hover:text-white"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ko")}
                className={`rounded-[0.9rem] px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                  language === "ko"
                    ? "bg-[var(--violet)] text-white"
                    : "text-white/65 hover:text-white"
                }`}
              >
                한국어
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};