#!/bin/bash
set -e
cd ~/quimica-hero
clear

banner() { echo ""; echo "=== $1 ==="; }

# === package.json ===
banner "1/12 package.json"
cat > package.json << 'EOF'
{
  "name": "quimica-hero",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.11"
  }
}
EOF
echo "done"

# === vite.config.js ===
banner "2/12 vite.config.js"
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
EOF
echo "done"

# === tailwind.config.js ===
banner "3/12 tailwind.config.js"
cat > tailwind.config.js << 'EOF'
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'light-sweep': {
          '0%': { transform: 'translateX(-150%) skewX(-12deg)' },
          '100%': { transform: 'translateX(250%) skewX(-12deg)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'light-sweep': 'light-sweep 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
EOF
echo "done"

# === postcss.config.js ===
banner "4/12 postcss.config.js"
cat > postcss.config.js << 'EOF'
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
EOF
echo "done"

# === index.html ===
banner "5/12 index.html"
cat > index.html << 'EOF'
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Qumica — Elevate</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF
echo "done"

# === .gitignore ===
banner "6/12 .gitignore"
cat > .gitignore << 'EOF'
node_modules
dist
*.log
EOF
echo "done"

# === favicon ===
banner "7/12 favicon"
mkdir -p public
cat > public/favicon.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><text y="28" font-size="28">⚡</text></svg>
EOF
echo "done"

# === src/index.css ===
banner "8/12 src/index.css"
mkdir -p src/components
cat > src/index.css << 'EOF'
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600;1,700&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
html, body, #root {
  height: 100%; width: 100%; margin: 0; padding: 0;
}
body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000; color: #fff;
}
EOF
echo "done"

# === src/main.jsx ===
banner "9/12 src/main.jsx"
cat > src/main.jsx << 'EOF'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);
EOF
echo "done"

# === src/App.jsx ===
banner "10/12 src/App.jsx"
cat > src/App.jsx << 'EOF'
import Hero from "./components/Hero";
export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Hero />
    </div>
  );
}
EOF
echo "done"

# === src/components/Logos.jsx ===
banner "11/12 src/components/Logos.jsx"
cat > src/components/Logos.jsx << 'EOF'
const l = "text-white/90 text-2xl font-semibold tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] whitespace-nowrap select-none";
export const Zapier = () => (<span className={l + " italic"}>Zapier</span>);
export const Make = () => (<span className={l + " font-extrabold"}>make</span>);
export const N8n = () => (<span className={l + " font-bold"}>n8n</span>);
export const UiPath = () => (<span className={l}>UiPath</span>);
export const Tray = () => (<span className={l + " font-bold"}>Tray<span className="opacity-70">.io</span></span>);
export const Workato = () => (<span className={l + " font-bold"}>workato</span>);
EOF
echo "done"

# === src/components/IntegrationMarquee.jsx ===
banner "12/12 src/components/IntegrationMarquee.jsx"
cat > src/components/IntegrationMarquee.jsx << 'EOF'
import { Zapier, Make, N8n, UiPath, Tray, Workato } from "./Logos.jsx";
export default function IntegrationMarquee() {
  const S = (<><Zapier /><Make /><N8n /><UiPath /><Tray /><Workato /></>);
  return (
    <section className="relative w-full">
      <p className="text-center text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2.5">
        Integrating with leading automation
      </p>
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent_0,black_10%,black_90%,transparent_100%)]">
        <div className="flex w-max items-center gap-14 animate-marquee will-change-transform">
          <div className="flex items-center gap-14 px-7">{S}</div>
          <div className="flex items-center gap-14 px-7" aria-hidden="true">{S}</div>
        </div>
      </div>
    </section>
  );
}
EOF
echo "done"

# === src/components/Hero.jsx ===
banner "EXTRA: src/components/Hero.jsx"
cat > src/components/Hero.jsx << 'HEROEOF'
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
            <span className="text-white font-bold tracking-tight text-sm mr-2">Qumica</span>
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
            Ready to <em className="not-italic italic font-serif font-bold">elevate</em> your digital infrastructure?
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
HEROEOF
echo "done"

echo ""
echo "=== ALL FILES CREATED ==="
echo "Now installing dependencies and building..."
npm install 2>&1 | tail -3
npx vite build 2>&1 | tail -5
echo ""
echo "=== COMPLETE ==="
echo "Run: npm run dev    (preview)"
echo "Run: npx vercel --prod   (deploy)"
