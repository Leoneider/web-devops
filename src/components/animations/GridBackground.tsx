"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 perspective-1000">
      <div 
        className="absolute inset-[-100%] origin-center rotate-x-60 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 159, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 159, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gridMove 15s linear infinite",
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-60 { transform: rotateX(60deg); }
      `}} />
    </div>
  );
}
