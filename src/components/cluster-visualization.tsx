const nodes = [
  { top: "12%", left: "18%", color: "var(--node-cyan)", delay: "0s", height: "62%" },
  { top: "20%", left: "42%", color: "var(--node-blue)", delay: "0.4s", height: "56%" },
  { top: "11%", left: "68%", color: "var(--node-green)", delay: "0.8s", height: "64%" },
  { top: "34%", left: "10%", color: "var(--node-violet)", delay: "0.2s", height: "46%" },
  { top: "40%", left: "34%", color: "var(--node-green)", delay: "0.6s", height: "42%" },
  { top: "38%", left: "58%", color: "var(--node-cyan)", delay: "1s", height: "47%" },
  { top: "56%", left: "24%", color: "var(--node-blue)", delay: "0.5s", height: "28%" },
  { top: "60%", left: "50%", color: "var(--node-violet)", delay: "0.9s", height: "24%" },
];

export const ClusterVisualization = () => {
  return (
    <div className="panel relative min-h-[420px] overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.28),transparent_35%),radial-gradient(circle_at_75%_20%,rgba(135,92,246,0.24),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
      <div className="absolute inset-[14%_8%_18%] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,182,212,0.08),rgba(255,255,255,0.02))] [transform:skewY(-12deg)_rotate(-12deg)]">
        <div className="grid-fade absolute inset-0 rounded-[2rem]" />
      </div>

      {nodes.map((node, index) => (
        <div
          key={`${node.left}-${node.top}`}
          className="absolute"
          style={{ top: node.top, left: node.left }}
        >
          <div
            className="absolute left-1/2 top-5 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(120,255,201,0.85),rgba(120,255,201,0))]"
            style={{ height: node.height }}
          />
          <div
            className="node-orb h-5 w-5 rounded-full"
            style={{
              background: node.color,
              animationDelay: node.delay,
              boxShadow: `0 0 0 6px color-mix(in srgb, ${node.color} 14%, transparent), 0 0 22px ${node.color}`,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-xl"
            style={{ background: node.color }}
          />
          <span className="absolute left-7 top-0 font-mono text-[10px] uppercase tracking-[0.35em] text-white/45">
            N0{index + 1}
          </span>
        </div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between rounded-[1.25rem] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
            inbound / outbound
          </p>
          <div className="mt-2 flex gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                in
              </p>
              <p className="font-heading text-3xl text-[var(--text)]">45,447</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                out
              </p>
              <p className="font-heading text-3xl text-[var(--text)]">12,005</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 text-right font-mono text-[11px] uppercase tracking-[0.24em] text-white/55">
          <p>mesh.online</p>
          <p>signal.stable</p>
          <p>latency 04ms</p>
        </div>
      </div>
    </div>
  );
};