import { motion } from "framer-motion";

const Scene3LoveRealization = () => {
  return (
    <section className="scene relative overflow-hidden" style={{ minHeight: "110vh" }}>
      {/* Deeper background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(340 40% 6%), hsl(350 50% 12%), hsl(340 40% 6%))" }} />
      
      {/* Heartbeat glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle at 40% 50%, hsl(350 60% 30% / 0.4), transparent 60%)" }}
      />

      <div className="relative z-10 max-w-xl mx-auto md:ml-[15%] text-left">
        <div className="space-y-6">
          {[
            { text: "Somewhere between", delay: 0 },
            { text: '"Are you okay?"', delay: 0.3, italic: true },
            { text: "and", delay: 0.5 },
            { text: '"I\'m here."', delay: 0.7, italic: true },
            { text: "", delay: 0 },
            { text: "You became my safest place.", delay: 1.2, highlight: true },
            { text: "", delay: 0 },
            { text: "Not loudly.", delay: 1.6 },
            { text: "Not suddenly.", delay: 1.8 },
            { text: "", delay: 0 },
            { text: "Just… naturally.", delay: 2.2, highlight: true },
          ].map((line, i) => (
            line.text === "" ? (
              <div key={i} className="h-4" />
            ) : (
              <motion.p
                key={i}
                className={`${line.italic ? "accent-text text-2xl md:text-3xl" : "cinematic-text text-xl md:text-2xl"} ${line.highlight ? "glow-text" : ""}`}
                style={{ color: line.highlight ? "hsl(var(--rose-gold))" : line.italic ? "hsl(var(--petal))" : "hsl(var(--ivory))" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: line.delay, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
              >
                {line.text}
              </motion.p>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scene3LoveRealization;
