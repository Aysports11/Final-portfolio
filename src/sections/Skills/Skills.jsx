import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "6rem 8vw",
        background:
          "linear-gradient(180deg, #020617 0%, #020617 40%, #000000 100%)",
        color: "white",
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "clamp(2.4rem, 6vw, 3rem)",
          marginBottom: "3.5rem",
          textAlign: "center",
          letterSpacing: "0.5px",
        }}
      >
        Tech Stack
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.08 }}
            style={{
              padding: "14px 26px",
              borderRadius: "999px",
              background:
                "linear-gradient(180deg, rgba(99,102,241,0.25), rgba(99,102,241,0.1))",
              border: "1px solid rgba(99,102,241,0.5)",
              color: "#e0e7ff",
              fontSize: "0.95rem",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
