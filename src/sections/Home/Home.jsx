import { motion } from "framer-motion";
import AnimatedText from "../../components/AnimatedText";
import profile from "../../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        {/* Floating Profile Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={styles.profileWrapper}
        >
          <img src={profile} alt="Profile" style={styles.profileImage} />
        </motion.div>

        {/* Name */}
        <h1 style={styles.title}>
          Hi, I’m <span style={styles.accent}>Mine</span>
        </h1>

        {/* Animated Role Text */}
        <AnimatedText />

        {/* Short Description */}
        <p style={styles.subtitle}>
          I build modern, scalable, high-performance web applications with
          clean code and great user experience.
        </p>

        {/* CTA Buttons */}
        <div style={styles.buttons}>
          <a href="#projects" style={styles.primaryBtn}>
            View Projects
          </a>
          <a href="#contact" style={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 6vw",
    background:
      "radial-gradient(circle at top, #1e1b4b, #020617 70%)",
    color: "white",
  },
  container: {
    textAlign: "center",
    maxWidth: "700px",
  },
  profileWrapper: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    margin: "0 auto 1.5rem",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: "90%",
    height: "90%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
  },
  accent: {
    color: "#7c7cff",
  },
  subtitle: {
    marginTop: "1rem",
    fontSize: "1rem",
    opacity: 0.8,
    lineHeight: 1.6,
  },
  buttons: {
    marginTop: "2rem",
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "0.75rem 1.8rem",
    borderRadius: "999px",
    background: "#7c7cff",
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
  },
  secondaryBtn: {
    padding: "0.75rem 1.8rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
  },
};
