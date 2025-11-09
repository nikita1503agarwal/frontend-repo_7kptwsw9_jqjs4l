import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto mt-16 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-amber-400/10 p-8 backdrop-blur-xl shadow-2xl">
        <div className="pointer-events-none absolute -inset-40 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.12),rgba(167,139,250,0.12),rgba(99,102,241,0.12),transparent_60%)] blur-3xl" />
        <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to illuminate your path?</h3>
            <p className="mt-2 text-indigo-100/80">Run a full AI scan to map strengths, align skills, and receive a precise, personalized growth route.</p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-6 py-3 text-indigo-950 font-semibold shadow-[0_0_40px_-10px_rgba(245,197,24,0.8)] transition">
              <Rocket className="transition-transform group-hover:translate-x-0.5" size={18} />
              Start Your AI Career Analysis
              <span className="absolute inset-0 -z-0 rounded-full bg-amber-300/30 blur-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
