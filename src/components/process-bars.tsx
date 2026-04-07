const bars = [
  { label: "Consultation", value: 100, tone: "green" },
  { label: "Agency Match", value: 92, tone: "violet" },
  { label: "Filing Package", value: 84, tone: "green" },
  { label: "Review Window", value: 68, tone: "violet" },
  { label: "Compliance Support", value: 96, tone: "green" },
];

export const ProcessBars = () => {
  return (
    <div className="panel relative overflow-hidden rounded-[1.6rem] p-4 sm:rounded-[2rem] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,160,196,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(213,176,106,0.14),transparent_28%)]" />
      <div className="relative space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.38em]">
            filing progress
          </p>
          <p className="w-fit rounded-full border border-[rgba(213,176,106,0.18)] bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/65 sm:text-[10px] sm:tracking-[0.3em]">
            active matters
          </p>
        </div>
        {bars.map((bar) => {
          const accent = bar.tone === "green" ? "var(--accent)" : "var(--violet)";
          return (
            <div key={bar.label} className="rounded-[1.05rem] border border-[rgba(255,248,238,0.08)] bg-white/[0.03] p-3 sm:rounded-[1.25rem]">
              <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-[11px] sm:tracking-[0.24em]">
                <span className="min-w-0 flex-1 truncate">{bar.label}</span>
                <span>{bar.value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/8">
                <div
                  className="bar-flow h-full rounded-full"
                  style={{
                    width: `${bar.value}%`,
                    background: `linear-gradient(90deg, ${accent}, color-mix(in srgb, ${accent} 35%, white))`,
                    boxShadow: `0 0 24px color-mix(in srgb, ${accent} 55%, transparent)`,
                    animationDelay: `${bar.value * 0.02}s`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};