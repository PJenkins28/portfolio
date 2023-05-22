import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Nav(props) {
  return (
    <header aria-label="main navigation">
      <nav>
        <ul className="nav">
          <li onClick={() => props.handleClick(props.skillsRef)}>Skills</li>
          <li onClick={() => props.handleClick(props.projectsRef)}>Projects</li>
          <li onClick={() => props.handleClick(props.aboutRef)}>About</li>
          <li onClick={() => props.handleClick(props.contactRef)}>Contact</li>
        </ul>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/paige-jenkins-4954a5200"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/PJenkins28"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} />
        </li>
      </ul>
    </header>
  );
}
