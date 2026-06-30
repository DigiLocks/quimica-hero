import { useEffect, useState } from "react";

export default function MouseGradient() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    let rafId = null;
    let target = { x: -200, y: -200 };
    let current = { x: -200, y: -200 };

    const onMove = (e) => {
      target = { x: e.clientX, y: e.clientY };
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      // Lerp către target cu un factor mic (mai mare = mai rapid)
      const ease = 0.12;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      // Update CSS variables direct (fără React rerender)
      const root = document.documentElement;
      root.style.setProperty("--mx1", `${current.x}px`);
      root.style.setProperty("--my1", `${current.y}px`);

      if (
        Math.abs(target.x - current.x) > 0.5 ||
        Math.abs(target.y - current.y) > 0.5
      ) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Orange light */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx1, -200px) var(--my1, -200px), rgba(249, 115, 22, 0.12), transparent 40%)",
        }}
      />
      {/* Purple light */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px circle at calc(var(--mx1, -200px) + 100px) calc(var(--my1, -200px) + 50px), rgba(168, 85, 247, 0.10), transparent 45%)",
        }}
      />
    </>
  );
}
