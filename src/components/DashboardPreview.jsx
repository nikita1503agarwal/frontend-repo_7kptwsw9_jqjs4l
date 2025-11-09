import { Activity, BarChart3, Layers, Network } from "lucide-react";

function Stat({ label, value, glow }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-indigo-900/30">
      <div className={`absolute inset-0 pointer-events-none ${glow}`} />
      <p className="text-xs uppercase tracking-widest text-indigo-200/70">{label}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="analysis" className="relative mx-auto -mt-20 max-w-7xl px-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/40 p-6 backdrop-blur-xl shadow-2xl shadow-indigo-950/40">
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg">
            <Layers size={18} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Konsol Analisis AI</h3>
            <p className="text-xs text-indigo-200/70">Pemetaan waktu nyata keterampilan, sifat, dan probabilitas trajektori</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Kiri: Grafik */}
          <div className="md:col-span-8 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="pointer-events-none absolute -inset-20 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(167,139,250,0.15),rgba(99,102,241,0.12),rgba(251,191,36,0.12),transparent)] blur-2xl" />
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-indigo-100/90">Heatmap Kecocokan Keterampilan</h4>
                <BarChart3 size={16} className="text-amber-300" />
              </div>
              <div className="mt-4 grid grid-cols-12 gap-1">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{
                      background:
                        `radial-gradient(circle at 40% 40%, rgba(99,102,241,${0.05 + (i % 12) / 24}), rgba(167,139,250,${0.05 + (i % 8) / 24}) 60%, rgba(251,191,36,${0.02 + (i % 6) / 40}) 100%)`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(251,191,36,0.12),transparent_40%)]" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-indigo-100/90">Vektor Kepribadian</h4>
                  <Network size={16} className="text-purple-300" />
                </div>
                <div className="mt-4 grid grid-cols-6 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="relative h-24 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <div className="absolute inset-0" style={{
                        background: `linear-gradient(to top, rgba(167,139,250,0.2), rgba(99,102,241,0.15))`,
                        clipPath: `polygon(0% 100%, 0% ${30 + i * 10}%, 100% ${10 + i * 8}%, 100% 100%)`,
                      }} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.15),transparent_50%)]" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-indigo-100/90">Perkiraan Trajektori</h4>
                  <Activity size={16} className="text-amber-300" />
                </div>
                <svg viewBox="0 0 400 120" className="mt-3 h-28 w-full">
                  <defs>
                    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M0,90 C60,80 100,70 150,85 C210,105 260,40 320,60 C360,72 380,50 400,40" stroke="url(#grad)" strokeWidth="3" fill="none" />
                  <g fill="url(#grad)">
                    {[40, 140, 240, 340].map((x, i) => (
                      <circle key={i} cx={x} cy={i % 2 === 0 ? 70 : 55} r="3" />
                    ))}
                  </g>
                </svg>
                <p className="mt-2 text-xs text-indigo-200/70">Perkiraan kepercayaan pertumbuhan selama 12 bulan</p>
              </div>
            </div>
          </div>

          {/* Kanan: Statistik */}
          <div className="md:col-span-4 space-y-4">
            <Stat label="Akurasi Kecocokan" value="97.2%" glow="bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.12),transparent_60%)]" />
            <Stat label="Cakupan Sifat" value="86 dimensi" glow="bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.14),transparent_70%)]" />
            <Stat label="Graf Karier" value="1.284 node" glow="bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.14),transparent_70%)]" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-indigo-200/70">Komputasi AI</p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-300 shadow-[0_0_20px_rgba(167,139,250,0.6)]" />
              </div>
              <p className="mt-2 text-xs text-indigo-200/70">Mengoptimalkan parameter…</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
