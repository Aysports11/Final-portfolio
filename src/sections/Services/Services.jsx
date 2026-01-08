import { FaCode, FaServer, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      icon: <FaPaintBrush />,
      desc: "Modern, responsive UI using React, animations, accessibility, and performance best practices.",
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      desc: "APIs, authentication, databases, and scalable backend systems with Node.js & Express.",
    },
    {
      title: "Full-Stack Applications",
      icon: <FaCode />,
      desc: "End-to-end applications with clean architecture, security, and deployment readiness.",
    },
    {
      title: "Mobile-Ready Web Apps",
      icon: <FaMobileAlt />,
      desc: "Fast, mobile-first web apps optimized for all devices and screen sizes.",
    },
  ];

  return (
    <section id="services">
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        <h2 style={styles.heading}>Services</h2>

        <div style={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass"
              style={styles.card}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p style={styles.desc}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  heading: {
    fontSize: "2.5rem",
    marginBottom: "3rem",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.8rem",
  },
  card: {
    padding: "2rem",
    textAlign: "center",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "var(--accent-1)",
  },
  desc: {
    fontSize: "0.95rem",
    opacity: 0.8,
    lineHeight: 1.6,
  },
};
