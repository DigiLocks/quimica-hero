import { useEffect, useState } from "react";

export default function AnimatedCounter({ from = 487, to = 625, duration = 60000 }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const start = Date.now();
    const range = to - from;
    let frameId;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out (rapid la început, lent la final)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + range * eased);
      setValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        // Sari puțin peste țintă ca să arate „live"
        let overshoot = 0;
        const overshootInterval = setInterval(() => {
          overshoot += Math.floor(Math.random() * 2);
          setValue(to + overshoot);
        }, 8000 + Math.random() * 6000);
        // Cleanup după 60s
        return () => clearInterval(overshootInterval);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [from, to, duration]);

  return <>{value}+</>;
}
