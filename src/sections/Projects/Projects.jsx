import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";

const projects = [
  {
    title: "A Flyer Card",
    description: "A full flyer design built with React.",
    image: project1,
    live: "https://firstflyer.netlify.app/",
    code: "https://github.com/Aysports11/first-flyer",
  },
  {
    title: "Dashboard",
    description: "Developer dashboard with React.",
    image: project2,
    live: "https://aysports-dashboard.netlify.app/",
    code: "https://github.com/Aysports11",
  },
  {
    title: "Task Manager",
    description: "Task management app with CRUD.",
    image: project3,
    live: "https://ttodoolist.netlify.app/",
    code: "https://github.com/Aysports1",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // 5s per project (animation + pause)

    return () => clearInterval(interval);
  }, []);

  const project = projects[index];

  return (
    <section id="projects">
      <h2>Some of My Projects</h2>

      <div className="projects-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="project-slide card"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live
              </a>
              <a href={project.code} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
