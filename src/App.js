import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
export default function App() {
  return (
    <section className="app">
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </section>
  );
}
