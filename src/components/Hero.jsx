import { Sparkles, Play } from "lucide-react";
import IntegrationMarquee from "./IntegrationMarquee.jsx";

function AvatarGroup() {
  const c = ["ring-orange-500/60","ring-purple-500/50","ring-cyan-500/50"];
  return (
    <div className="flex -space-x-2.5">
      {[0,1,2].map(i => (
        <div key={i} className={"h-7 w-7 rounded-full ring-2 "+c[i]+" bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10"} />
      ))}
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-orange-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.952c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.952a1 1 0 00-.364-1.118L2.063 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.953z" />
        </svg>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-100">
        <source src="https://cdn.sceneai.art/Hero%20Section%20Video/247f75dd-335a-4aaa-ba65-47df2f7b24b9.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="flex justify-center pt-6 px-4">
          <div className="flex items-center gap-6 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 shadow-lg shadow-black/30">
            <span className="text-white font-bold tracking-tight text-sm mr-2">DigiLock</span>
            <div className="hidden sm:flex items-center gap-5 text-white/80 text-[13px]">
              <a href="#" className="hover:text-white">Products</a>
              <a href="#" className="hover:text-white">Solutions</a>
              <a href="#" className="hover:text-white">Pricing</a>
              <a href="#" className="hover:text-white">Docs</a>
            </div>
            <button className="ml-auto flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-2xl border border-white/40 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/25">
              <Sparkles className="w-3.5 h-3.5" />Generate
            </button>
          </div>
        </nav>
        <div className="flex flex-1 flex-col items-center pt-44 pb-24 px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/10 px-5 py-2.5 scale-[1.05]">
            <AvatarGroup />
            <Stars />
            <span className="text-white/80 text-sm font-medium">Trusted by <strong className="text-white">500+</strong> teams</span>
          </div>
          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            DigiLock - Ready to <em className="not-italic italic font-serif font-bold">elevate</em> your digital infrastructure?
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
            We build high-performance solutions to modernize operations and drive growth across your entire organization.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 bg-[length:200%_200%] animate-gradient-shift px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25">
              <span aria-hidden="true" className="pointer-events-none absolute -inset-y-1 -inset-x-[150%] animate-light-sweep bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-12deg]" />
              <Sparkles className="relative z-10 w-4 h-4" />
              <span className="relative z-10">Generate</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20">
              <Play className="w-4 h-4" />View Platform
            </button>
          </div>
        </div>
        <div className="mt-auto pb-10 px-4">
          <IntegrationMarquee />
        </div>
      </div>
    </div>
  );
}
