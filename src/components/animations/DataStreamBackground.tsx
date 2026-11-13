import { seededRandom, round2 } from "@/lib/random";

const rand = seededRandom(7);

const STREAMS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: round2(rand() * 100),
  duration: round2(rand() * 4 + 3),
  delay: round2(rand() * 5),
}));

export default function DataStreamBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {STREAMS.map((stream) => (
        <div
          key={stream.id}
          className="bg-stream absolute w-px h-32 bg-gradient-to-b from-transparent via-primary-container to-transparent"
          style={{
            left: `${stream.left}%`,
            top: "-150px",
            animationDuration: `${stream.duration}s`,
            animationDelay: `${stream.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
