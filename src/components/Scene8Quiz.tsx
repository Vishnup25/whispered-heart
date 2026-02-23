import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Scene8Quiz = () => {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const moveNo = () => {
    setNoPosition({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 100,
    });
  };

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  return (
    <section className="scene relative" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(340 40% 6%), hsl(340 30% 10%), hsl(340 40% 6%))" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-warm)", opacity: 0.3 }} />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] uppercase mb-8" style={{ color: "hsl(var(--rose-gold))" }}>
                A Quick Question
              </p>

              <h2 className="cinematic-text text-3xl md:text-4xl mb-12" style={{ color: "hsl(var(--ivory))" }}>
                Are we more than best friends now?
              </h2>

              <div className="flex gap-8 justify-center items-center relative">
                <motion.button
                  className="px-10 py-4 rounded-full font-accent text-lg tracking-wide"
                  style={{
                    background: "linear-gradient(135deg, hsl(350 60% 45%), hsl(350 70% 55%))",
                    color: "hsl(var(--ivory))",
                    boxShadow: "0 0 30px hsl(350 60% 55% / 0.3)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                >
                  YES 💗
                </motion.button>

                <motion.button
                  className="px-10 py-4 rounded-full font-accent text-lg tracking-wide"
                  style={{
                    background: "hsl(var(--secondary))",
                    color: "hsl(var(--muted-foreground))",
                    border: "1px solid hsl(var(--border))",
                  }}
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onMouseEnter={moveNo}
                  onTouchStart={moveNo}
                >
                  no
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="cinematic-text text-2xl" style={{ color: "hsl(var(--rose-gold))" }}>
                Correct 😌
              </p>
              <p className="body-text text-xl" style={{ color: "hsl(var(--ivory))" }}>
                Best friends don't usually end up like this…
              </p>
              <p className="body-text text-xl" style={{ color: "hsl(var(--blush-light))" }}>
                but I'm glad we did.
              </p>
              <p className="accent-text text-2xl mt-8" style={{ color: "hsl(var(--petal))" }}>
                You're stuck with me forever.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-5%",
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  borderRadius: i % 3 === 0 ? "50%" : "2px",
                  background: [
                    "hsl(350, 70%, 65%)",
                    "hsl(15, 50%, 70%)",
                    "hsl(350, 80%, 75%)",
                    "hsl(340, 60%, 55%)",
                    "hsl(30, 40%, 85%)",
                  ][i % 5],
                }}
                animate={{
                  y: [0, window.innerHeight + 100],
                  x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
                  rotate: [0, Math.random() * 720],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Scene8Quiz;
