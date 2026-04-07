"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";
import { IconKakao, IconTelegram, IconWhatsApp, ShieldBadge } from "./svg-illustrations";

export const CtaSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].cta;
  const contact = translations[language].contact;

  const channels = [
    { label: contact.telegram, icon: IconTelegram, href: "https://t.me/NFTRegUS", color: "#229ED9" },
    { label: contact.whatsapp, icon: IconWhatsApp, href: "https://wa.me/message/NFTRegUS", color: "#25D366" },
    { label: contact.kakao, icon: IconKakao, href: "https://open.kakao.com/o/NFTRegUS", color: "#FEE500" },
  ];

  return (
    <section id="download" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="panel relative overflow-hidden rounded-[1.9rem] px-5 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,176,106,0.16),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(138,160,196,0.14),transparent_32%),linear-gradient(135deg,rgba(255,248,238,0.05),rgba(255,255,255,0.015))]" />
          {/* Decorative shield */}
          <ShieldBadge className="pointer-events-none absolute -right-6 -bottom-4 h-[180px] w-[180px] opacity-30 sm:-right-2 sm:-bottom-2 sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px]" />
          <div className="relative flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] sm:tracking-[0.38em]">
                section 05
              </p>
              <h2 className="mt-3 font-heading text-[2.35rem] leading-[0.95] text-white sm:mt-4 sm:text-5xl">
                {copy.title}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[var(--text-soft)] sm:mt-6 sm:text-base sm:leading-8">
                {copy.description}
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#overview"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_0_40px_rgba(213,176,106,0.24)] sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
                >
                  {copy.primary}
                </a>
                <a
                  href="#topography"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgba(213,176,106,0.2)] bg-white/[0.03] px-5 py-3.5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/84 transition hover:border-[rgba(255,248,238,0.32)] hover:text-white sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
                >
                  {copy.secondary}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)] sm:text-[11px]">
                  {contact.heading}
                </p>
                <div className="flex flex-wrap gap-3">
                  {channels.map((ch) => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/75 transition hover:border-white/20 hover:text-white sm:text-[11px]"
                    >
                      <ch.icon className="h-4 w-4" style={{ color: ch.color }} />
                      {ch.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};