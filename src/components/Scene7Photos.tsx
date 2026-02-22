import { motion } from "framer-motion";
import { useRef } from "react";

const captions = [
  "Still my favorite human",
  "How are you this cute and this annoying",
  "Bestie moment, core memory",
  "This smile fixes everything",
  "My comfort person",
  "Forever grateful for this day",
];

const rotations = [-3, 2, -1.5, 3, -2, 1.5];
const bgColors = [
  "hsl(350, 50%, 35%)",
  "hsl(340, 45%, 30%)",
  "hsl(15, 40%, 40%)",
  "hsl(350, 60%, 38%)",
  "hsl(340, 40%, 28%)",
  "hsl(15, 50%, 35%)",
];

const Scene7Photos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="scene relative" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0" style={{ background: "var(--gradient-romantic)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase mb-12 text-center"
          style={{ color: "hsl(var(--rose-gold))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Moments
        </motion.p>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {captions.map((caption, i) => (
            <motion.div
              key={i}
              className="polaroid flex-shrink-0 snap-center"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              {/* Photo placeholder */}
              <div
                className="w-48 h-48 md:w-56 md:h-56 rounded-sm"
                style={{
                  background: `linear-gradient(135deg, ${bgColors[i]}, ${bgColors[(i + 1) % bgColors.length]})`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(350, 70%, 75%)" strokeWidth="1" opacity="0.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <p
                className="absolute bottom-3 left-0 right-0 text-center font-accent text-sm italic"
                style={{ color: "hsl(340, 30%, 25%)" }}
              >
                {caption}
              </p>

              {/* Tape effect */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 rounded-sm opacity-50"
                style={{ background: "hsl(40, 30%, 85%)" }}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm mt-4" style={{ color: "hsl(var(--muted-foreground))" }}>
          ← scroll →
        </p>
      </div>
    </section>
  );
};

export default Scene7Photos;
