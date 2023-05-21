import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  return (
    <section className="contact-wrapper" ref={props.contactRef}>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Name"></input>
        <textarea placeholder="Make it a good one (;"></textarea>
      </form>
    </section>
  );
}
