import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const reasons = [
  "You understand me without explanations",
  "You're my bestie before anything else",
  "You make boring days lighter",
  "You remember little things",
  "You feel like home",
  "You laugh at my dumb jokes",
  "You're soft and strong",
  "You choose me, even quietly",
];

const HeartIcon = ({ size = 48, color = "hsl(350, 80%, 60%)" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Scene5Reasons = () => {
  const [activeReason, setActiveReason] = useState<number | null>(null);

  const heartPositions = [
    { x: "10%", y: "20%" }, { x: "75%", y: "15%" },
    { x: "20%", y: "60%" }, { x: "65%", y: "55%" },
    { x: "40%", y: "30%" }, { x: "85%", y: "40%" },
    { x: "5%", y: "80%" }, { x: "55%", y: "80%" },
  ];

  return (
    <section className="scene relative" style={{ minHeight: "120vh" }}>
      <div className="absolute inset-0" style={{ background: "var(--gradient-romantic)" }} />

      <motion.p
        className="absolute top-20 left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase z-10"
        style={{ color: "hsl(var(--rose-gold))" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Reasons I Love You
      </motion.p>

      <div className="absolute inset-0">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="absolute heart-button"
            style={{ left: heartPositions[i].x, top: heartPositions[i].y }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            onClick={() => setActiveReason(activeReason === i ? null : i)}
          >
            <motion.div
              animate={activeReason === i ? { scale: [1, 1.3, 1.1] } : { y: [0, -5, 0] }}
              transition={activeReason === i ? { duration: 0.5 } : { duration: 3, repeat: Infinity, delay: i * 0.3 }}
            >
              <HeartIcon size={activeReason === i ? 64 : 44} color={activeReason === i ? "hsl(350, 80%, 65%)" : "hsl(350, 70%, 50%)"} />
            </motion.div>

            <AnimatePresence>
              {activeReason === i && (
                <motion.p
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap accent-text text-lg"
                  style={{ color: "hsl(var(--ivory))" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {reason}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Scene5Reasons;
