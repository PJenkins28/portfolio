import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  return (
    <section className="contact-wrapper" ref={props.contactRef}>
      <h2>
        Let's work <span>together</span>
      </h2>
      <form>
        <ul>
          <li>
            <section className="inputs">
              <section>
                <label for="name">Name</label>
                <input type="text" id="name"></input>
              </section>
              <section>
                <label for="name">Email</label>
                <input type="email"></input>
              </section>
            </section>
          </li>
          <li>
            <label for="message">Message</label>
            <textarea id="message"></textarea>
          </li>
        </ul>
      </form>
    </section>
  );
}
