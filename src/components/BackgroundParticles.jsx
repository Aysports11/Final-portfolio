import { motion } from "framer-motion";

export default function BackgroundParticles() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="bg-particles">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: ["0%", "-120%"], opacity: [0, 1, 0] }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
          }}
        />
      ))}
    </div>
  );
}
