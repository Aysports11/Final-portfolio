import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2024 – Present",
    description:
      "Built scalable web applications using React, Node.js, Express, and MongoDB. Developed responsive UIs, APIs, authentication systems, and deployed projects.",
  },
  {
    role: "Web Development Training",
    company: "Aptech Computer Education",
    period: "2024 – 2025",
    description:
      "Completed professional training in full-stack web development. Gained strong foundations in frontend, backend, and software engineering principles.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{exp.role}</h3>
            <span className="company">
              {exp.company} • {exp.period}
            </span>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
