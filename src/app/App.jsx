import Navbar from "../components/Navbar/Navbar";
import SectionDivider from "../components/SectionDivider";

import Home from "../sections/Home/Home";
import About from "../sections/About/About";
import Services from "../sections/Services/Services";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <SectionDivider />

        <section id="about">
          <About />
        </section>

        <SectionDivider />

        <section id="services">
          <Services />
        </section>

        <SectionDivider />

        <section id="experience">
          <Experience />
        </section>

        <SectionDivider />

        <section id="projects">
          <Projects />
        </section>

        <SectionDivider />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
