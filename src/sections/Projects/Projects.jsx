import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";

const projects = [
  {
    title: "A FLYER CARD ",
    description: "A full Flyer design with React .",
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

const slider = [...projects, ...projects];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Some of my Projects</h2>

      <div className="projects-slider">
        <motion.div
          className="projects-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {slider.map((p, i) => (
            <div className="project-slide card" key={i}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={p.code} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
