"use client";

import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { IconKakao, IconTelegram, IconWhatsApp } from "./svg-illustrations";

const channels = [
  { key: "telegram" as const, icon: IconTelegram, href: "https://t.me/NFTRegUS", color: "#229ED9" },
  { key: "whatsapp" as const, icon: IconWhatsApp, href: "https://wa.me/message/NFTRegUS", color: "#25D366" },
  { key: "kakao" as const, icon: IconKakao, href: "https://open.kakao.com/o/NFTRegUS", color: "#FEE500" },
];

export const Footer = () => {
  const { language } = useLanguage();
  const copy = translations[language].footer;
  const contact = translations[language].contact;

  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <p className="text-sm leading-6 text-white/60">{copy.copy}</p>
          <div className="flex items-center gap-3">
            {channels.map((ch) => (
              <a
                key={ch.key}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact[ch.key]}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-white/20 hover:text-white"
              >
                <ch.icon className="h-4 w-4" style={{ color: ch.color }} />
              </a>
            ))}
          </div>
        </div>
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