import React, { useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import data from "./projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    const scrollOffset = 80; // I would adjust this value as needed
    const top = elementRef.current.offsetTop + scrollOffset;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };
  const projects = data.map((item) => {
    return (
      <Project
        key={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
      />
    );
  });
  return (
    <section className="app">
      <Nav
        handleClick={scrollToSection}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <main>
        <Hero
          handleClick={scrollToSection}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <Skills
          handleClick={scrollToSection}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
        />
        <section ref={projectsRef} className="projects">
          <section className="project-content">
            <h2>Projects</h2>
            <section className="project-items">{projects}</section>
          </section>
          <FontAwesomeIcon
            icon={faArrowDown}
            size="4x"
            onClick={() => scrollToSection(aboutRef)}
          />
        </section>
        <About
          aboutRef={aboutRef}
          contactRef={contactRef}
          handleClick={scrollToSection}
        />
        <Contact contactRef={contactRef} />
      </main>
    </section>
  );
}
