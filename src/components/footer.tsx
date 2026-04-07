"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const copy = translations[language].footer;

  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/60">{copy.copy}</p>
        <div className="flex flex-wrap gap-4">
          {copy.links.map((link) => (
            <a
              key={link}
              href="#overview"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};