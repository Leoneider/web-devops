export default function GridBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0 [perspective:1000px]">
      <div
        className="absolute inset-[-200%] origin-center [transform:rotateX(60deg)] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 159, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 159, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
