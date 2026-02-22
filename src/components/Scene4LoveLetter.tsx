import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const letterText = `Hey you,

You started as my bestie — the one I could talk to about anything.
Somewhere between the laughs, the late talks, and the quiet moments…
you became my home.

Now you're my comfort,
my happiness,
my favorite hello.

Happy Birthday —
to my best friend,
and so much more 💗`;

const Scene4LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < letterText.length) {
        setDisplayedText(letterText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="scene relative" style={{ minHeight: "110vh" }}>
      <div className="absolute inset-0" style={{ background: "var(--gradient-romantic)" }} />
      {/* Soft focus blur */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 30%, hsl(340 40% 4% / 0.5) 100%)" }} />

      <motion.div
        className="relative z-10 letter-card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setStarted(true)}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(var(--rose-gold))" }}>
          A Letter For You
        </p>

        <div className="body-text text-lg md:text-xl whitespace-pre-line" style={{ color: "hsl(var(--ivory))" }}>
          {displayedText}
          {started && displayedText.length < letterText.length && (
            <span className="inline-block w-0.5 h-5 ml-1 bg-petal" style={{ animation: "typewriter-cursor 0.8s infinite" }} />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Scene4LoveLetter;
