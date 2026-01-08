import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <p style={{ color: "white", padding: "6rem" }}>Project not found</p>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        padding: "8rem 8vw",
        color: "white",
      }}
    >
      <Link to="/" style={{ color: "#6366f1" }}>
        ← Back to Home
      </Link>

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "3rem", margin: "2rem 0 1rem" }}
      >
        {project.title}
      </motion.h1>

      <motion.img
        src={project.image}
        alt={project.title}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          width: "100%",
          maxHeight: "420px",
          objectFit: "cover",
          borderRadius: "18px",
          marginBottom: "2rem",
        }}
      />

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.85 }}
        transition={{ delay: 0.4 }}
        style={{ maxWidth: "720px", lineHeight: 1.7 }}
      >
        {project.desc}
      </motion.p>

      {/* TECH STACK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ marginTop: "2rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}
      >
        {project.tech.map((t, i) => (
          <span
            key={i}
            style={{
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(99,102,241,0.25)",
              color: "#c7d2fe",
            }}
          >
            {t}
          </span>
        ))}
      </motion.div>

      {/* ACTION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <a
  href={project.demo}
  target="_blank"
  rel="noreferrer"
  style={{
    padding: "14px 28px",
    borderRadius: "10px",
    background: "#6366f1",
    color: "white",
    fontWeight: 500,
    position: "relative",
    zIndex: 5,
    pointerEvents: "auto",
  }}
>
  Live Demo
</a>

<a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  style={{
    padding: "14px 28px",
    borderRadius: "10px",
    border: "1px solid #6366f1",
    color: "#6366f1",
    fontWeight: 500,
    position: "relative",
    zIndex: 5,
    pointerEvents: "auto",
  }}
>
  View Code
</a>

      </motion.div>
    </motion.section>
  );
}
