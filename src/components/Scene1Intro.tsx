import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const Scene1Intro = () => {
  return (
    <section className="scene relative overflow-hidden" style={{ minHeight: "120vh", background: "var(--gradient-hero)" }}>
      <FloatingParticles count={30} types={["petal", "heart", "glow"]} />

      {/* Warm center glow */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          className="cinematic-text text-5xl md:text-7xl font-bold glow-text mb-8"
          style={{ color: "hsl(var(--ivory))" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Happy Birthday, My Favorite Human 💕
        </motion.h1>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="body-text text-xl md:text-2xl" style={{ color: "hsl(var(--blush-light))" }}>
            This isn't just a website.
          </p>
          <p className="accent-text text-2xl md:text-3xl" style={{ color: "hsl(var(--rose-gold))" }}>
            It's a story.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 scroll-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
            ⬇ Scroll slowly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Scene1Intro;
