import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function StarfieldCanvas({ reducedMotion = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const stars = [];
    const shootingStars = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const starCount = Math.floor(
        (width * height) / (reducedMotion ? 18000 : 12000),
      );
      stars.length = 0;

      for (let index = 0; index < starCount; index += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.8 + 0.1,
          twinkleSpeed: Math.random() * 0.02 + 0.003,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawStars = (time) => {
      context.clearRect(0, 0, width, height);

      const scrollProgress = Math.max(
        0,
        Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1),
      );
      const visibleStars = Math.max(
        12,
        Math.floor(stars.length * (0.68 + scrollProgress * 0.32)),
      );
      const speedBoost = 1 + scrollProgress * 1.6;

      for (let i = 0; i < visibleStars; i += 1) {
        const star = stars[i];
        const twinkle =
          (Math.sin(time * star.twinkleSpeed * speedBoost + star.phase) + 1) /
          2;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(225, 247, 255, ${star.alpha * (0.35 + twinkle * 0.65)})`;
        context.fill();
      }

      if (!reducedMotion) {
        const spawnChance = 0.006 + scrollProgress * 0.02;
        const maxShootingStars = 2 + Math.floor(scrollProgress * 3);

        if (
          Math.random() < spawnChance &&
          shootingStars.length < maxShootingStars
        ) {
          shootingStars.push({
            x: Math.random() * width,
            y: Math.random() * height * 0.45,
            length: 120 + Math.random() * 90,
            speed: 8 + Math.random() * 6,
            life: 1,
          });
        }

        for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
          const shoot = shootingStars[i];
          context.beginPath();
          context.moveTo(shoot.x, shoot.y);
          context.lineTo(shoot.x - shoot.length, shoot.y + shoot.length * 0.38);
          context.strokeStyle = `rgba(140, 242, 255, ${shoot.life})`;
          context.lineWidth = 1.35;
          context.stroke();

          shoot.x += shoot.speed * speedBoost;
          shoot.y -= shoot.speed * 0.18 * speedBoost;
          shoot.life -= 0.012 * speedBoost;

          if (shoot.life <= 0) {
            shootingStars.splice(i, 1);
          }
        }
      }
    };

    const loop = (timestamp) => {
      drawStars(timestamp);
      animationFrameId = globalThis.requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrameId = globalThis.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      globalThis.cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1] opacity-80"
    />
  );
}

StarfieldCanvas.propTypes = {
  reducedMotion: PropTypes.bool,
};

export default StarfieldCanvas;
