"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const copy = translations[language];

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="panel flex items-center justify-between rounded-[1.5rem] px-4 py-3 backdrop-blur-xl sm:px-6">
        <a href="#overview" className="flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <span className="absolute inset-2 rounded-xl bg-[radial-gradient(circle_at_top,var(--accent-soft),transparent_58%)]" />
            <span className="font-heading text-lg tracking-[0.25em] text-white">SY</span>
          </span>
          <div>
            <p className="font-heading text-lg uppercase tracking-[0.32em] text-white">
              SYS.CORE
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
              {copy.hero.consoleLabel}
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

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
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
      </div>
    </header>
  );
};