import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: "#020617",
        border: project.highlight
          ? "2px solid #6366f1"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      {project.highlight && (
        <span
          style={{
            fontSize: "0.7rem",
            color: "#6366f1",
            letterSpacing: "0.1em",
          }}
        >
          FEATURED PROJECT
        </span>
      )}

      <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>
        {project.title}
      </h3>

      <p style={{ opacity: 0.75 }}>{project.description}</p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "0.75rem",
              padding: "4px 8px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ marginTop: "1.2rem", display: "flex", gap: "1rem" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
