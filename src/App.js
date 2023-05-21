import React, { useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import data from "./projects";
export default function App() {
  const skillsRef = useRef(null);
  const scrollToSection = (elementRef) => {
    const scrollOffset = 80; // Adjust this value as needed
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
      <Nav />
      <main>
        <Hero handleClick={scrollToSection} skillsRef={skillsRef} />
        <Skills skillsRef={skillsRef} />
        <section className="projects">{projects}</section>
      </main>
    </section>
  );
}
