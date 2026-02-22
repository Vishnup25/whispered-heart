import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

const reasons = [
  { text: "You understand me without explanations", tone: "light" },
  { text: "You're my bestie before anything else", tone: "light" },
  { text: "You make boring days lighter", tone: "light" },
  { text: "You remember little things", tone: "light" },
  { text: "You feel like home", tone: "light" },
  { text: "You laugh at my dumb jokes", tone: "light" },
  { text: "You're soft and strong", tone: "mid" },
  { text: "You choose me, even quietly", tone: "mid" },
  { text: "You make silence feel safe", tone: "mid" },
  { text: "You check in without being asked", tone: "mid" },
  { text: "You notice when I'm not okay", tone: "deep" },
  { text: "You bring calm into my chaos", tone: "deep" },
  { text: "You feel familiar in the best way", tone: "deep" },
  { text: "You care deeply, even when you don't say it", tone: "deep" },
  { text: "You stay", tone: "deep" },
  { text: "You feel like my person", tone: "deep" },
];

const HeartIcon = ({ size = 44, glowing = false }: { size?: number; glowing?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="hsl(350, 80%, 60%)"
    style={{
      filter: glowing ? "drop-shadow(0 0 16px hsl(350, 80%, 60%))" : "drop-shadow(0 0 6px hsl(350, 60%, 50% / 0.4))",
      transition: "filter 0.5s ease",
    }}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Zig-zag positions: alternating left/right
const getHeartPosition = (i: number, total: number) => {
  const isLeft = i % 2 === 0;
  const x = isLeft ? "25%" : "65%";
  const yPercent = 8 + (i / (total - 1)) * 72; // spread from 8% to 80%
  return { x, y: `${yPercent}%` };
};

const Scene5Reasons = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeReason, setActiveReason] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [headerOpacity, setHeaderOpacity] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Fade header out after mid-scroll
    if (v < 0.3) setHeaderOpacity(1);
    else if (v < 0.5) setHeaderOpacity(1 - (v - 0.3) / 0.2);
    else setHeaderOpacity(0);
  });

  // Closing text opacity based on scroll
  const closingOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.85, 0.95], [40, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        minHeight: "250vh",
        background: "linear-gradient(180deg, hsl(340 40% 6%), hsl(350 45% 12%) 30%, hsl(340 50% 10%) 70%, hsl(340 35% 7%))",
      }}
    >
      {/* Background parallax hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`bg-heart-${i}`}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 85}%`,
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }}
          >
            <svg
              width={10 + Math.random() * 12}
              height={10 + Math.random() * 12}
              viewBox="0 0 24 24"
              fill={`hsl(350, 60%, ${40 + Math.random() * 15}%)`}
              opacity={0.12 + Math.random() * 0.08}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Blur overlay when card is open */}
      <AnimatePresence>
        {activeReason !== null && (
          <motion.div
            className="fixed inset-0 z-30"
            style={{ backdropFilter: "blur(6px)", background: "hsl(340 40% 4% / 0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActiveReason(null)}
          />
        )}
      </AnimatePresence>

      {/* Sticky header */}
      <div className="sticky top-0 z-20 pt-16 pb-8 pointer-events-none">
        <motion.div
          className="text-center"
          style={{ opacity: headerOpacity }}
        >
          <h2
            className="cinematic-text text-3xl md:text-4xl font-semibold tracking-wide glow-text"
            style={{ color: "hsl(var(--rose-gold))" }}
          >
            REASONS I LOVE YOU
          </h2>
          <p
            className="accent-text text-base md:text-lg mt-3"
            style={{ color: "hsl(var(--blush-light) / 0.7)" }}
          >
            (Some are loud. Most are quiet.)
          </p>
        </motion.div>
      </div>

      {/* Heart path — zig-zag */}
      <div className="relative w-full max-w-3xl mx-auto px-4" style={{ paddingTop: "4rem", paddingBottom: "12rem" }}>
        {/* Subtle connecting line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px"
          style={{
            top: "4rem",
            bottom: "14rem",
            background: "linear-gradient(180deg, transparent, hsl(350 50% 40% / 0.15) 10%, hsl(350 50% 40% / 0.15) 90%, transparent)",
          }}
        />

        {reasons.map((reason, i) => {
          const pos = getHeartPosition(i, reasons.length);
          const isLeft = i % 2 === 0;

          // Delay increases for deeper tones
          const staggerDelay = reason.tone === "deep" ? i * 0.12 + 0.3 : i * 0.08;

          return (
            <motion.div
              key={i}
              className="relative"
              style={{
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                paddingLeft: isLeft ? "10%" : "0",
                paddingRight: isLeft ? "0" : "10%",
                marginBottom: reason.tone === "deep" ? "6rem" : "4rem",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reason.tone === "deep" ? 1.2 : 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div
                className="flex items-center gap-5 cursor-pointer group"
                style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
                onClick={() => setActiveReason(activeReason === i ? null : i)}
              >
                {/* Heart */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                >
                  <HeartIcon size={reason.tone === "deep" ? 48 : 40} glowing={activeReason === i} />
                </motion.div>

                {/* Inline reason preview (subtle) */}
                <motion.p
                  className="accent-text text-base md:text-lg max-w-[220px]"
                  style={{
                    color: "hsl(var(--blush-light) / 0.5)",
                    textAlign: isLeft ? "left" : "right",
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {reason.text}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Reason card modal */}
      <AnimatePresence>
        {activeReason !== null && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReason(null)}
          >
            <motion.div
              className="rounded-2xl p-8 md:p-10 max-w-md w-full text-center"
              style={{
                background: "hsl(340 45% 12% / 0.85)",
                border: "1px solid hsl(350 50% 40% / 0.2)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 0 60px hsl(350 60% 40% / 0.2), 0 20px 60px hsl(340 40% 4% / 0.5)",
              }}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="mb-6 flex justify-center"
                initial={{ scale: 0.5 }}
                animate={{ scale: [0.5, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                <HeartIcon size={56} glowing />
              </motion.div>

              <motion.p
                className="cinematic-text text-xl md:text-2xl leading-relaxed"
                style={{ color: "hsl(var(--ivory))" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {reasons[activeReason].text}
              </motion.p>

              <motion.div
                className="mt-6 w-12 h-px mx-auto"
                style={{ background: "hsl(var(--rose-gold) / 0.4)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.p
                className="mt-4 text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                tap anywhere to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closing moment */}
      <motion.div
        className="relative z-10 text-center max-w-xl mx-auto px-6 pb-32"
        style={{ opacity: closingOpacity, y: closingY }}
      >
        <div className="space-y-4">
          <p
            className="accent-text text-xl md:text-2xl"
            style={{ color: "hsl(var(--ivory))" }}
          >
            I don't love you for one big reason.
          </p>
          <div className="h-2" />
          <p
            className="body-text text-xl md:text-2xl"
            style={{ color: "hsl(var(--blush-light))" }}
          >
            I love you for all the small ones
          </p>
          <p
            className="accent-text text-xl md:text-2xl"
            style={{ color: "hsl(var(--rose-gold))" }}
          >
            that made you feel like home.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Scene5Reasons;
