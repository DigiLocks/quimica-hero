import Hero from "./components/Hero";
import MouseGradient from "./components/MouseGradient.jsx";
export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <MouseGradient />
      <Hero />
    </div>
  );
}
