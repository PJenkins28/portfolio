import React, { useRef } from "react";

export default function Hero(props) {
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
          <li
            ref={props.skillsRef}
            onClick={() => props.handleClick(props.skillsRef)}
          >
            Stack
          </li>
          <li
            ref={props.projectsRef}
            onClick={() => props.handleClick(props.projectsRef)}
          >
            Projects
          </li>
          <li
            ref={props.aboutRef}
            onClick={() => props.handleClick(props.aboutRef)}
          >
            About
          </li>
          <li
            ref={props.contactRef}
            onClick={() => props.handleClick(props.contactRef)}
          >
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
}
