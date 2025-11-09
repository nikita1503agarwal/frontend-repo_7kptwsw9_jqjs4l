import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28" id="hero">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ethereal gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,180,254,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(253,230,138,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl bg-gradient-to-r from-indigo-100 via-white to-amber-100 bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow md:text-6xl">
          AI Career Planning for Your Future Path
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-indigo-100/80">
          Precision-guided growth powered by deep AI analysis — mapping your potential, aligning your skills, and illuminating the most promising paths ahead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#cta" className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-6 py-3 text-indigo-950 font-semibold shadow-[0_0_40px_-10px_rgba(245,197,24,0.8)] transition">
            Start Your AI Career Analysis
            <span className="absolute inset-0 -z-0 rounded-full bg-amber-300/30 blur-2xl" />
          </a>
          <a href="#analysis" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white/90 ring-1 ring-white/15 backdrop-blur bg-white/5 hover:bg-white/10 transition">
            Preview Analysis
          </a>
        </div>
      </div>
    </section>
  );
}
