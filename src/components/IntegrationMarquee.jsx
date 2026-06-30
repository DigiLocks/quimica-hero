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
