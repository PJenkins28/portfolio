import React from "react";

export default function Hero() {
  function addClassName(index) {
    if (Math.floor(Math.random() * 12) % 2 === 0) {
      return "circle test";
    } else {
      return "circle test2";
    }
  }
  // Creates 100 grid items
  function createGridElements() {
    let elements = [];
    for (let i = 0; i < 24; i++) {
      elements.push(
        <div className="hero-grid-item">
          {/* <div className={addClassName(i)}></div> */}
        </div>
      );
    }
    return elements;
  }

  return (
    <section className="hero-container">
      <div className="hero-grid-wrapper">{createGridElements()}</div>
      <div className="hero-text-content">
        <span>
          Hey, I'm <span className="name">Paige</span>
        </span>
        <p>Full-stack web developer based in Atlanta, GA.</p>
      </div>
    </section>
  );
}
