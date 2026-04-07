"use client";

import { AlertTriangle, MemoryStick } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";

const icons = [AlertTriangle, MemoryStick];

export const ProblemSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].problem;

  return (
    <section id="diagnostics" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="mb-8 sm:mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 01
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-[2.35rem] leading-[0.95] text-white sm:mt-4 sm:text-5xl">
          {copy.title}
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {copy.cards.map((card, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={card.title} delay={index * 0.12}>
              <article className="panel relative overflow-hidden rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-7">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2),transparent_65%)] blur-2xl" />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-[1.7rem] text-white sm:mt-6 sm:text-2xl">{card.title}</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--text-soft)] sm:mt-4 sm:text-base sm:leading-8">
                    {card.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};