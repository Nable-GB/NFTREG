"use client";

import { ActivitySquare, Layers3, Radar } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { translations } from "../lib/translations";
import { Reveal } from "./reveal";

const icons = [Layers3, ActivitySquare, Radar];

export const FeaturesSection = () => {
  const { language } = useLanguage();
  const copy = translations[language].features;

  return (
    <section id="topography" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mb-10 max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
          section 02
        </p>
        <h2 className="mt-4 font-heading text-4xl text-white sm:text-5xl">{copy.title}</h2>
      </Reveal>

      <div className="grid gap-5">
        {copy.items.map((feature, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={feature.index} delay={index * 0.12}>
              <article className="panel grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[120px_1fr_220px] lg:items-center lg:p-8">
                <div className="flex items-center gap-4 lg:block">
                  <p className="font-heading text-5xl text-white/25">{feature.index}</p>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--accent)] lg:mt-5">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl text-white">{feature.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
                    {feature.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="block rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/72"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};