const bars = [
  { label: "MEM_BLOCK", value: 88, tone: "green" },
  { label: "QUERY_EXEC", value: 64, tone: "violet" },
  { label: "CACHE_SYNC", value: 91, tone: "green" },
  { label: "REPL_WAIT", value: 42, tone: "violet" },
  { label: "TRACE_IO", value: 73, tone: "green" },
];

export const ProcessBars = () => {
  return (
    <div className="panel relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,255,136,0.16),transparent_30%)]" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
            process lanes
          </p>
          <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/65">
            live
          </p>
        </div>
        {bars.map((bar) => {
          const accent = bar.tone === "green" ? "var(--accent)" : "var(--violet)";
          return (
            <div key={bar.label} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3">
              <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-white/65">
                <span>{bar.label}</span>
                <span>{bar.value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/8">
                <div
                  className="bar-flow h-full rounded-full"
                  style={{
                    width: `${bar.value}%`,
                    background: `linear-gradient(90deg, ${accent}, color-mix(in srgb, ${accent} 55%, white))`,
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