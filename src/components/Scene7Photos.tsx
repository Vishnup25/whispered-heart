import { motion } from "framer-motion";
import { useRef } from "react";

const photos = [
  { src: "/photos/pic1.jpg", type: "image", caption: "Still my favorite human" },
  { src: "/photos/pic2.jpg", type: "image", caption: "How are you this cute and this annoying" },
  { src: "/photos/pic3.mp4", type: "video", caption: "Bestie moment, core memory" },
  { src: "/photos/pic4.jpg", type: "image", caption: "This smile fixes everything" },
  { src: "/photos/pic5.jpeg", type: "image", caption: "My comfort person" },
  { src: "/photos/pic6.mp4", type: "video", caption: "Forever grateful for this day" },
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
    <section className="scene relative min-h-screen">
      <div className="absolute inset-0" style={{ background: "var(--gradient-romantic)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto py-12">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase mb-16 text-center"
          style={{ color: "hsl(var(--rose-gold))" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Moments
        </motion.p>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-16 pt-8 px-8 snap-x snap-mandatory scrollbar-hide items-center justify-start md:justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="polaroid flex-shrink-0 snap-center"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
            >
              {/* Photo Area */}
              <div
                className="w-56 h-64 md:w-64 md:h-72 rounded-sm overflow-hidden relative shadow-inner"
                style={{
                  background: `linear-gradient(135deg, ${bgColors[i]}, ${bgColors[(i + 1) % bgColors.length]})`,
                }}
              >
                {photo.type === "image" ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={photo.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>

              {/* Caption */}
              <p
                className="absolute bottom-5 left-0 right-0 text-center font-accent text-sm md:text-base italic px-4"
                style={{ color: "hsl(340, 30%, 25%)" }}
              >
                {photo.caption}
              </p>

              {/* Tape effect */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 rounded-sm opacity-50 shadow-sm"
                style={{ background: "hsl(40, 30%, 85%)", transform: "rotate(-2deg)" }}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm mt-8 opacity-70" style={{ color: "hsl(var(--muted-foreground))" }}>
          ← scroll →
        </p>
      </div>
    </section>
  );
};

export default Scene7Photos;