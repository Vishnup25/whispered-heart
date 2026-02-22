import { motion } from "framer-motion";

const lines = [
  "You started as my best friend.",
  "The one I talked to without thinking.",
  "The one who felt easy.",
  "",
  "We laughed.",
  "We talked.",
  "We stayed.",
  "",
  "And somehow…",
  "that became everything.",
];

const Scene2BestFriend = () => {
  return (
    <section className="scene relative" style={{ background: "var(--gradient-romantic)" }}>
      <div className="absolute inset-0" style={{ background: "var(--gradient-warm)", opacity: 0.5 }} />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase mb-12"
          style={{ color: "hsl(var(--rose-gold))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Best Friend Era
        </motion.p>

        <div className="space-y-4">
          {lines.map((line, i) => (
            line === "" ? (
              <div key={i} className="h-6" />
            ) : (
              <motion.p
                key={i}
                className="body-text text-xl md:text-2xl"
                style={{ color: "hsl(var(--ivory))" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {line}
              </motion.p>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scene2BestFriend;
