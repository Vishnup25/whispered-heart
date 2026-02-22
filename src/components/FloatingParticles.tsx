import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "petal" | "heart" | "glow";
}

const FloatingParticles = ({ count = 20, types = ["petal", "heart", "glow"] as const }: { count?: number; types?: readonly ("petal" | "heart" | "glow")[] }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setParticles(p);
  }, [count, types]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
            opacity: [0, 0.7, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.type === "heart" ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="hsl(350, 80%, 60%)" opacity={0.4}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ) : p.type === "petal" ? (
            <div
              className="rounded-full"
              style={{
                width: p.size,
                height: p.size * 0.6,
                background: `hsl(350, 70%, ${65 + Math.random() * 15}%)`,
                opacity: 0.3,
                borderRadius: "50% 50% 50% 0",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ) : (
            <div
              className="rounded-full"
              style={{
                width: p.size * 0.5,
                height: p.size * 0.5,
                background: `radial-gradient(circle, hsl(15, 50%, 70%), transparent)`,
                opacity: 0.3,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
