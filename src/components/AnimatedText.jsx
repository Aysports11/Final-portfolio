import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { text: "Full-Stack Developer", color: "#7c7cff" },
  { text: "React Engineer", color: "#4ade80" },
  { text: "Backend Specialist", color: "#facc15" },
  { text: "UI Enthusiast", color: "#fb7185" },
  { text: "Problem Solver", color: "#38bdf8" },
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index].text}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          style={{
            ...styles.text,
            color: words[index].color,
          }}
        >
          {words[index].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "2.5rem",
    overflow: "hidden", // 🔥 FIXES HALF LETTERS
    marginBottom: "1.5rem",
  },
  text: {
    display: "inline-block",
    fontSize: "1.5rem",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
};
