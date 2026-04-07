"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const copy = translations[language].footer;

  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-white/60">{copy.copy}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {copy.links.map((link) => (
            <a
              key={link}
              href="#overview"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 transition hover:text-white sm:text-[11px] sm:tracking-[0.28em]"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};