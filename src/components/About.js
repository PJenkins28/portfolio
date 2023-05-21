import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function About(props) {
  return (
    <section className="about-component" ref={props.aboutRef}>
      <div>TEST</div>
      <FontAwesomeIcon
        icon={faArrowDown}
        color="purple"
        ref={props.contactRef}
        onClick={() => props.handleClick(props.contactRef)}
      />
    </section>
  );
}
