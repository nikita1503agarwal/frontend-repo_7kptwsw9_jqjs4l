import { Sparkles, LineChart, Brain, Shield } from "lucide-react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-purple-900/20">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-indigo-400/40 via-purple-400/40 to-amber-300/40" />
                <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 text-white shadow-xl" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm tracking-wider text-amber-200/90">AI Career Planner</span>
                <span className="-mt-1 bg-gradient-to-r from-white via-indigo-100 to-amber-100 bg-clip-text text-lg font-semibold text-transparent">Future Path</span>
              </div>
            </a>

            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li>
                <a href="#features" className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-indigo-100/80 transition hover:text-white">
                  <Sparkles size={16} className="text-amber-300 group-hover:scale-110 transition" />
                  <span className="relative">
                    Features
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-amber-300 via-indigo-300 to-purple-300 transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#analysis" className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-indigo-100/80 transition hover:text-white">
                  <Brain size={16} className="text-purple-300 group-hover:scale-110 transition" />
                  <span className="relative">
                    AI Analysis
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-purple-300 via-indigo-300 to-amber-300 transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#security" className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-indigo-100/80 transition hover:text-white">
                  <Shield size={16} className="text-indigo-300 group-hover:scale-110 transition" />
                  <span className="relative">
                    Privacy
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-300 via-purple-300 to-amber-300 transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
            </ul>

            <div className="hidden sm:flex items-center gap-3">
              <a href="#analysis" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-amber-400/20 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:from-indigo-500/30 hover:via-purple-500/30 hover:to-amber-400/30">
                <LineChart size={16} className="text-amber-300 group-hover:rotate-6 transition" />
                Live Demo
              </a>
              <a href="#cta" className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-2 text-sm font-semibold text-indigo-950 shadow-[0_0_25px_-5px_rgba(245,197,24,0.7)] transition hover:shadow-amber-400/50">
                Start Your AI Career Analysis
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
