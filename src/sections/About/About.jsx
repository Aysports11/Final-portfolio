export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "12vh 8vw",
        background:
          "radial-gradient(circle at top left, #1e1b4b, #020617 65%)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "1.5rem",
            color: "#a5b4fc",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            opacity: 0.85,
            marginBottom: "2rem",
          }}
        >
          I’m a <strong>Full-Stack Web Developer</strong> trained at Aptech,
          with hands-on experience building modern, scalable, and
          performance-driven applications.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            opacity: 0.8,
            marginBottom: "3rem",
          }}
        >
          I work across frontend and backend technologies, focusing on clean
          architecture, performance, and user experience. I enjoy solving
          real-world problems with code that scales.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Full-Stack Development",
              desc: "Modern frontend and backend solutions.",
            },
            {
              title: "Real Projects",
              desc: "Hands-on experience with real applications.",
            },
            {
              title: "Problem Solving",
              desc: "Focused on performance and usability.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "1.6rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.6rem",
                  color: "#c7d2fe",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
