import { seededRandom, round2 } from "@/lib/random";

const rand = seededRandom(42);

// Star-like particles. Generated once with a seeded PRNG, animated in CSS
// (see `bg-twinkle` in globals.css) so no JS runs per frame.
const PARTICLES = Array.from({ length: 70 }, (_, i) => {
  const size = round2(rand() * 1.5 + 0.5);
  return {
    id: i,
    x: round2(rand() * 100),
    y: round2(rand() * 100),
    size,
    duration: round2(rand() * 40 + 20),
    delay: round2(rand() * 10),
  };
});

export default function ParticleBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="bg-twinkle absolute bg-white rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: `0 0 ${round2(p.size * 5)}px ${round2(p.size * 1.5)}px rgba(255, 255, 255, 0.8)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
