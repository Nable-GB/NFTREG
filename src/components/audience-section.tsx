"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";
import { SectionDivider } from "./svg-illustrations";

/* Tiny inline SVGs for each audience segment – keeps them visually distinct */
const AudienceIcon = ({ index, className = "" }: { index: number; className?: string }) => {
  const svgs = [
    /* 0 - palette (digital artists) */
    <svg key={0} viewBox="0 0 28 28" fill="none" className={className}><circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.3" fill="none"/><circle cx="10" cy="11" r="2" fill="currentColor" opacity=".5"/><circle cx="17" cy="9" r="1.5" fill="currentColor" opacity=".4"/><circle cx="18" cy="15" r="1.8" fill="currentColor" opacity=".6"/><circle cx="12" cy="18" r="1.3" fill="currentColor" opacity=".35"/></svg>,
    /* 1 - music note */
    <svg key={1} viewBox="0 0 28 28" fill="none" className={className}><path d="M10 22V8l12-4v14" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="22" r="3" stroke="currentColor" strokeWidth="1.3" fill="currentColor" opacity=".2"/><circle cx="19" cy="18" r="3" stroke="currentColor" strokeWidth="1.3" fill="currentColor" opacity=".2"/></svg>,
    /* 2 - rocket (startup) */
    <svg key={2} viewBox="0 0 28 28" fill="none" className={className}><path d="M14 4c-3 5-4 10-4 14h8c0-4-1-9-4-14z" stroke="currentColor" strokeWidth="1.3" fill="none"/><path d="M10 18c-3 0-5 2-6 4l6-1" stroke="currentColor" strokeWidth="1" fill="none" opacity=".5"/><path d="M18 18c3 0 5 2 6 4l-6-1" stroke="currentColor" strokeWidth="1" fill="none" opacity=".5"/><circle cx="14" cy="14" r="2" fill="currentColor" opacity=".4"/></svg>,
    /* 3 - building (real estate) */
    <svg key={3} viewBox="0 0 28 28" fill="none" className={className}><rect x="6" y="8" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none"/><path d="M6 8l8-4 8 4" stroke="currentColor" strokeWidth="1.3" fill="none"/><rect x="11" y="16" width="6" height="8" rx="1" fill="currentColor" opacity=".15"/><rect x="9" y="11" width="3" height="3" rx=".5" fill="currentColor" opacity=".2"/><rect x="16" y="11" width="3" height="3" rx=".5" fill="currentColor" opacity=".2"/></svg>,
    /* 4 - diamond (luxury) */
    <svg key={4} viewBox="0 0 28 28" fill="none" className={className}><path d="M14 4l10 8-10 14L4 12l10-8z" stroke="currentColor" strokeWidth="1.3" fill="none"/><path d="M4 12h20" stroke="currentColor" strokeWidth="1" opacity=".4"/><path d="M14 4l-3 8m3-8l3 8" stroke="currentColor" strokeWidth=".8" opacity=".3"/></svg>,
    /* 5 - wallet (investor) */
    <svg key={5} viewBox="0 0 28 28" fill="none" className={className}><rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none"/><path d="M4 8V7a2 2 0 012-2h14l4 3" stroke="currentColor" strokeWidth="1" opacity=".4"/><circle cx="20" cy="15" r="2" fill="currentColor" opacity=".35"/></svg>,
    /* 6 - gamepad */
    <svg key={6} viewBox="0 0 28 28" fill="none" className={className}><path d="M8 10h12a4 4 0 014 4v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.3" fill="none"/><line x1="10" y1="13" x2="10" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><line x1="8" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="19" cy="14" r="1" fill="currentColor" opacity=".5"/><circle cx="21" cy="16" r="1" fill="currentColor" opacity=".5"/></svg>,
  ];
  return svgs[index % svgs.length];
};

export const AudienceSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].audience;

  return (
    <section id="audit-log" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mb-8 max-w-3xl sm:mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 03
        </p>
        <h2 className="mt-3 font-heading text-[2.35rem] leading-[0.95] text-white sm:mt-4 sm:text-5xl">{copy.title}</h2>
      </Reveal>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {copy.items.map((item, index) => {
          return (
            <Reveal key={item.title} delay={index * 0.12}>
              <article className="panel h-full rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--violet)]">
                  <AudienceIcon index={index} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-[1.7rem] text-white sm:mt-6 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--text-soft)] sm:mt-4 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <SectionDivider className="mt-8 w-full sm:mt-10" />
    </section>
  );
};