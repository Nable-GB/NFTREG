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
    <section id="diagnostics" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 01
        </p>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl text-white sm:text-5xl">
          {copy.title}
        </h2>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {copy.cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={card.title} delay={index * 0.12}>
              <article className="panel relative overflow-hidden rounded-[2rem] p-7">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2),transparent_65%)] blur-2xl" />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl text-white">{card.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-soft)]">
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