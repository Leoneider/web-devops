import { seededRandom, round2 } from "@/lib/random";

const rand = seededRandom(1337);

const NODES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: round2(rand() * 100),
  y: round2(rand() * 100),
  durations: [round2(rand() * 5 + 5), round2(rand() * 5 + 5), round2(rand() * 5 + 5)],
  delays: [round2(rand() * 5), round2(rand() * 5), round2(rand() * 5)],
  nodeDuration: round2(rand() * 2 + 2),
}));

export default function NetworkBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      <svg className="absolute inset-0 w-full h-full">
        {NODES.map((node, i) =>
          NODES.slice(i + 1, i + 4).map((target, j) => (
            <line
              key={`${i}-${j}`}
              className="bg-link"
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              pathLength={1}
              stroke="var(--color-primary-container)"
              strokeWidth="0.5"
              style={{
                animationDuration: `${node.durations[j]}s`,
                animationDelay: `${node.delays[j]}s`,
              }}
            />
          ))
        )}
      </svg>
      {NODES.map((node) => (
        <div
          key={node.id}
          className="bg-node absolute w-1 h-1 bg-primary-container rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDuration: `${node.nodeDuration}s`,
          }}
        />
      ))}
    </div>
  );
}
