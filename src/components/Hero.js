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
  //   function createGridElements() {
  //     let elements = [];
  //     for (let i = 0; i < 24; i++) {
  //       elements.push(
  //         <div className="hero-grid-item">
  //           {/* <div className={addClassName(i)}></div> */}
  //         </div>
  //       );
  //     }
  //     return elements;
  //   }

  return (
    <section
      //   aria-label="introduction interaction and text"
      className="hero-container"
    >
      {/* <div className="hero-grid-wrapper">{createGridElements()}</div> */}
      <div className="hero-text-content">
        <span>
          Hi, I'm <span className="name">Paige.</span>
        </span>
        <p className="title">I'm a full stack developer.</p>
        <ul className="links">
          <li>Stack</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}
