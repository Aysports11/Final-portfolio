import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Github() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Aysports11/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = Array.isArray(data)
          ? data.filter((repo) => !repo.fork).slice(0, 6)
          : [];
        setRepos(filtered);
      })
      .catch(() => setRepos([]));
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "10vh 8vw",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "3rem", marginBottom: "2rem" }}
      >
        GitHub Activity
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "1.5rem",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
              color: "white",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>{repo.name}</h3>

            <p style={{ opacity: 0.75, fontSize: "0.9rem" }}>
              {repo.description || "No description provided."}
            </p>

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </motion.a>
        ))}
      </div>

      <a
        href="https://github.com/Aysports11"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "3rem",
          color: "#6366f1",
        }}
      >
        View full GitHub →
      </a>
    </section>
  );
}
