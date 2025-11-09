import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-300/40 selection:text-slate-900">
      {/* Decorative background grid and circuits */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0)_0%,rgba(49,46,129,0.25)_60%,rgba(2,6,23,0.8)_100%)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: "40px 40px"}} />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_60%_40%,rgba(167,139,250,0.05),transparent_30%,rgba(99,102,241,0.05),transparent_60%,rgba(251,191,36,0.04),transparent_90%)]" />
      </div>

      <NavBar />
      <main>
        <Hero />
        <DashboardPreview />
        <CTA />
      </main>

      <footer id="security" className="relative mt-20 border-t border-white/10 bg-white/5/5">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-indigo-100/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="">© {new Date().getFullYear()} AI Career Planner. All rights reserved.</p>
            <p className="">Privacy-first design • Your data is encrypted and never sold.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
