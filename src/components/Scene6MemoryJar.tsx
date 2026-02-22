import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const memories = [
  "Remember when we laughed over nothing?",
  "You're my favorite person to text first",
  "Bestie energy, soulmate vibes",
  "Some memories only make sense with you",
  "You make my heart feel calm",
  "I trust you with my soft side",
  "Life feels easier with you",
  "You're my person. That's it.",
];

const Scene6MemoryJar = () => {
  const [released, setReleased] = useState<string[]>([]);
  const [shownCount, setShownCount] = useState(0);

  const releaseMemory = () => {
    if (shownCount >= memories.length) return;
    const mem = memories[shownCount];
    setReleased((prev) => [...prev, mem]);
    setShownCount((c) => c + 1);
  };

  return (
    <section className="scene relative" style={{ minHeight: "110vh" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(340 40% 6%), hsl(340 35% 9%), hsl(340 40% 6%))" }} />

      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase mb-16"
          style={{ color: "hsl(var(--rose-gold))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Memory Jar
        </motion.p>

        {/* Jar */}
        <motion.div
          className="memory-jar"
          onClick={releaseMemory}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Jar body */}
            <div
              className="w-32 h-44 md:w-40 md:h-52 rounded-b-3xl rounded-t-lg relative overflow-hidden"
              style={{
                background: "linear-gradient(180deg, hsl(350 40% 25% / 0.3), hsl(350 50% 20% / 0.5))",
                border: "1px solid hsl(350 50% 40% / 0.3)",
                boxShadow: "inset 0 0 30px hsl(350 60% 55% / 0.1), 0 0 40px hsl(350 60% 55% / 0.15)",
              }}
            >
              {/* Inner glow */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ background: "radial-gradient(circle at 50% 60%, hsl(350 60% 55% / 0.3), transparent)" }}
              />
              
              {/* Sparkles inside */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: "hsl(var(--rose-gold))",
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </div>
            {/* Jar lid */}
            <div
              className="w-28 h-4 md:w-36 md:h-5 mx-auto -mt-1 rounded-t-md"
              style={{
                background: "hsl(var(--rose-gold) / 0.4)",
                border: "1px solid hsl(var(--rose-gold) / 0.3)",
              }}
            />
          </div>
          <p className="text-center mt-4 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            {shownCount < memories.length ? "tap to release a memory" : "all memories released ✨"}
          </p>
        </motion.div>

        {/* Floating memories */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence>
            {released.map((mem, i) => (
              <motion.p
                key={`${mem}-${i}`}
                className="absolute accent-text text-lg md:text-xl text-center"
                style={{
                  color: "hsl(var(--ivory))",
                  left: `${20 + Math.random() * 60}%`,
                  bottom: "30%",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 1, 0], y: [0, -80, -160, -240] }}
                transition={{ duration: 4, ease: "easeOut" }}
              >
                {mem}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Scene6MemoryJar;
