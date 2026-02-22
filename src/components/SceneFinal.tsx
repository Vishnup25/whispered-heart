import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const SceneFinal = () => {
  return (
    <section className="scene relative" style={{ minHeight: "80vh" }}>
      <div className="absolute inset-0" style={{ background: "var(--gradient-romantic)" }} />
      <FloatingParticles count={15} types={["heart"]} />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <motion.p
          className="body-text text-lg mb-8"
          style={{ color: "hsl(var(--muted-foreground))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Made with love, overthinking, and a best friend who means everything 🤍
        </motion.p>

        <motion.h2
          className="cinematic-text text-3xl md:text-4xl glow-text"
          style={{ color: "hsl(var(--ivory))" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Happy Birthday, my heart.
        </motion.h2>

        {/* Tiny looping heart */}
        <motion.div
          className="mt-12 inline-block"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(350, 70%, 65%)">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default SceneFinal;
