import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

export default function Skills(props) {
  return (
    <section className="about-wrapper" ref={props.skillsRef}>
      <h2>My Tech Stack</h2>
      <section>
        <ul className="tech-stack">
          <li>
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            HTML
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCss3} />
            CSS
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faJsSquare} />
            JavaScript
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faGitAlt} />
            Git
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faReact} />
            React
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faNodeJs} />
            NodeJS
          </li>
        </ul>
      </section>
    </section>
  );
}
