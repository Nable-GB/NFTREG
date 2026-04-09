"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { RegistrationSeal } from "./svg-illustrations";

export const ClusterVisualization = () => {
  const { language } = useLanguage();
  const cert = translations[language].certificate;

  return (
    <div className="panel relative min-h-[360px] overflow-hidden rounded-[1.6rem] p-4 sm:min-h-[420px] sm:rounded-[2rem] sm:p-6">
      <div className="paper-glow absolute inset-0" />
      <div className="absolute inset-4 rounded-[1.3rem] border border-[rgba(213,176,106,0.14)] sm:inset-6 sm:rounded-[1.8rem]" />

      <div className="relative mx-auto flex h-full max-w-[420px] items-center justify-center px-2 pt-4 sm:px-0 sm:pt-6">
        <div className="absolute left-2 top-10 h-[210px] w-[152px] rotate-[-8deg] rounded-[1.2rem] border border-[rgba(213,176,106,0.16)] bg-[linear-gradient(180deg,rgba(250,239,214,0.08),rgba(255,255,255,0.02))] shadow-[0_20px_36px_rgba(0,0,0,0.24)] sm:left-8 sm:top-12 sm:h-[268px] sm:w-[210px] sm:rounded-[1.6rem] sm:shadow-[0_24px_50px_rgba(0,0,0,0.26)]" />
        <div className="absolute right-2 top-14 h-[196px] w-[144px] rotate-[10deg] rounded-[1.2rem] border border-[rgba(213,176,106,0.12)] bg-[linear-gradient(180deg,rgba(138,160,196,0.12),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.2)] sm:right-8 sm:top-16 sm:h-[250px] sm:w-[196px] sm:rounded-[1.6rem] sm:shadow-[0_20px_44px_rgba(0,0,0,0.22)]" />

        <article className="relative w-full max-w-[320px] rounded-[1.45rem] border border-[rgba(213,176,106,0.2)] bg-[linear-gradient(180deg,rgba(18,29,46,0.98),rgba(11,18,29,0.98))] px-4 py-5 shadow-[0_24px_44px_rgba(0,0,0,0.3)] sm:max-w-[340px] sm:rounded-[1.8rem] sm:px-6 sm:py-7 sm:shadow-[0_30px_70px_rgba(0,0,0,0.34)]">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.34em]">
                {cert.heading}
              </p>
              <h3 className="mt-2 font-heading text-[1.75rem] leading-none text-white sm:mt-3 sm:text-3xl">USDGA.US</h3>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16">
              <RegistrationSeal className="h-14 w-14 animate-[spin_60s_linear_infinite] sm:h-[72px] sm:w-[72px]" />
            </div>
          </div>

          <div className="legal-rule mt-4 sm:mt-6" />

          <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
            <div className="flex flex-col gap-1 rounded-[1rem] border border-white/6 bg-white/[0.025] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[1.1rem] sm:px-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.28em]">
                {cert.filingAuthority}
              </span>
              <span className="text-sm text-[var(--text)]">{cert.filingAuthorityValue}</span>
            </div>
            <div className="flex flex-col gap-1 rounded-[1rem] border border-white/6 bg-white/[0.025] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[1.1rem] sm:px-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.28em]">
                {cert.assetType}
              </span>
              <span className="text-sm text-[var(--text)]">{cert.assetTypeValue}</span>
            </div>
            <div className="flex flex-col gap-1 rounded-[1rem] border border-white/6 bg-white/[0.025] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[1.1rem] sm:px-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.28em]">
                {cert.registrationNo}
              </span>
              <span className="font-mono text-sm text-[var(--text)]">{cert.registrationNoValue}</span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 sm:grid-cols-2">
            <div className="rounded-[1.05rem] border border-[rgba(213,176,106,0.16)] bg-[rgba(255,248,238,0.03)] p-3 sm:rounded-[1.25rem] sm:p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.3em]">
                {cert.legalProtection}
              </p>
              <p className="mt-2 font-heading text-[1.45rem] text-white sm:mt-3 sm:text-2xl">{cert.legalProtectionValue}</p>
            </div>
            <div className="rounded-[1.05rem] border border-[rgba(213,176,106,0.16)] bg-[rgba(255,248,238,0.03)] p-3 sm:rounded-[1.25rem] sm:p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.3em]">
                {cert.jurisdiction}
              </p>
              <p className="mt-2 font-heading text-[1.45rem] text-white sm:mt-3 sm:text-2xl">{cert.jurisdictionValue}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 rounded-[1.05rem] border border-[rgba(213,176,106,0.16)] bg-[linear-gradient(90deg,rgba(213,176,106,0.08),rgba(138,160,196,0.06))] px-3 py-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:rounded-[1.2rem] sm:px-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.28em]">
              {cert.federalReview}
            </span>
            <span className="rounded-full border border-[rgba(213,176,106,0.26)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
              {cert.verified}
            </span>
          </div>
        </article>
      </div>

      <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-[rgba(213,176,106,0.12)] bg-[rgba(11,18,29,0.78)] px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[1.25rem] sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.38em]">
            {cert.protectionProfile}
          </p>
          <div className="mt-2 flex gap-4 sm:gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.24em]">
                {cert.agency}
              </p>
              <p className="font-heading text-[1.9rem] text-[var(--text)] sm:text-3xl">3</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.24em]">
                {cert.reach}
              </p>
              <p className="font-heading text-[1.9rem] text-[var(--text)] sm:text-3xl">50</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-right sm:text-[11px] sm:tracking-[0.24em]">
          <p>{cert.copyright}</p>
          <p>{cert.trademark}</p>
          <p>{cert.secAdvisory}</p>
        </div>
        </div>
      </div>
    </div>
  );
};