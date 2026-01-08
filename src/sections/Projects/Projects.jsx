import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {
  const controls = useAnimation();

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack shopping platform with authentication, payments, and admin dashboard.",
      image: "https://picsum.photos/600/400?random=21",
      tech: ["React", "Node", "MongoDB"],
      demo: "#",
      code: "#",
    },
    {
      title: "Task Manager",
      desc: "Productivity app with drag-and-drop tasks and real-time updates.",
      image: "https://picsum.photos/600/400?random=22",
      tech: ["React", "Firebase"],
      demo: "#",
      code: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Animated developer portfolio with motion and clean UX.",
      image: "https://picsum.photos/600/400?random=23",
      tech: ["React", "Framer Motion"],
      demo: "#",
      code: "#",
    },
    {
      title: "SaaS Dashboard",
      desc: "Analytics dashboard with charts, auth, and role management.",
      image: "https://picsum.photos/600/400?random=24",
      tech: ["React", "Node", "PostgreSQL"],
      demo: "#",
      code: "#",
    },
  ];

  const loopProjects = [...projects, ...projects];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: window.innerWidth < 768 ? 60 : 35,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section id="projects">
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Projects</h2>

        <div style={styles.slider}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -3000, right: 0 }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() =>
              controls.start({
                x: ["0%", "-50%"],
                transition: {
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear",
                },
              })
            }
            animate={controls}
            style={styles.track}
          >
            {loopProjects.map((project, i) => (
              <motion.div
                key={i}
                className="glass"
                style={styles.card}
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img src={project.image} alt={project.title} style={styles.image} />

                <div style={styles.content}>
                  <h3>{project.title}</h3>
                  <p style={styles.desc}>{project.desc}</p>

                  <div style={styles.tech}>
                    {project.tech.map((t, idx) => (
                      <span key={idx} style={styles.badge}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={styles.buttons}>
                    <a href={project.demo} className="btn-primary" target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.code} className="btn-secondary" target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  heading: {
    fontSize: "2.7rem",
    marginBottom: "3rem",
    textAlign: "center",
  },
  slider: {
    overflow: "hidden",
    width: "100%",
    cursor: "grab",
  },
  track: {
    display: "flex",
    gap: "2rem",
    width: "max-content",
    paddingBottom: "2rem",
  },
  card: {
    minWidth: "340px",
    maxWidth: "340px",
    display: "flex",
    flexDirection: "column",
    transformStyle: "preserve-3d",
  },
  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },
  content: {
    padding: "1.5rem",
  },
  desc: {
    opacity: 0.8,
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: "0.6rem 0 0.8rem",
  },
  tech: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  badge: {
    fontSize: "0.75rem",
    padding: "0.25rem 0.6rem",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
  },
  buttons: {
    display: "flex",
    gap: "0.8rem",
    flexWrap: "wrap",
  },
};
