import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Scene9Surprise = () => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <section className="scene relative" style={{ minHeight: "110vh" }}>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.button
                className="px-12 py-6 rounded-full font-display text-xl tracking-wide pulse-glow"
                style={{
                  background: "linear-gradient(135deg, hsl(350 60% 40%), hsl(340 70% 35%))",
                  color: "hsl(var(--ivory))",
                  border: "1px solid hsl(350 50% 50% / 0.3)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReveal}
              >
                Tap Gently… It's a Surprise 🎁
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-8"
            >
              <motion.h2
                className="cinematic-text text-4xl md:text-5xl glow-text"
                style={{ color: "hsl(var(--ivory))" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                You are loved more than you'll ever realize 💗
              </motion.h2>

              <div className="space-y-4 mt-12">
                {[
                  { text: "As my best friend.", delay: 1.5 },
                  { text: "As my safe place.", delay: 2 },
                  { text: "As my person.", delay: 2.5 },
                  { text: "", delay: 0 },
                  { text: "Today, tomorrow, always.", delay: 3.5 },
                ].map((line, i) => (
                  line.text === "" ? (
                    <div key={i} className="h-4" />
                  ) : (
                    <motion.p
                      key={i}
                      className="body-text text-xl md:text-2xl"
                      style={{ color: i === 4 ? "hsl(var(--rose-gold))" : "hsl(var(--blush-light))" }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: line.delay }}
                    >
                      {line.text}
                    </motion.p>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Roses bloom on reveal */}
        {revealed && (
          <div className="fixed inset-0 pointer-events-none z-40">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 0.8], opacity: [0, 0.7, 0] }}
                transition={{ duration: 3, delay: Math.random() * 2, ease: "easeOut" }}
              >
                <svg width={20 + Math.random() * 20} height={20 + Math.random() * 20} viewBox="0 0 24 24" fill={`hsl(350, ${60 + Math.random() * 20}%, ${50 + Math.random() * 20}%)`}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Scene9Surprise;
