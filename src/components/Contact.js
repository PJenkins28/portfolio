import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  return (
    <section className="contact-wrapper" ref={props.contactRef}>
      <h2>
        Let's work <span>together</span>
      </h2>
      <form action="https://formsubmit.io/send/d6f12e92-c740-4242-86f7-44b02462af94">
        <ul>
          <li>
            <section className="inputs">
              {/* <section>
                <label for="name">Name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              ></input>
              {/* </section>
              <section>
                <label for="name">Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              ></input>
              {/* </section> */}
            </section>
          </li>
          <li>
            {/* <label for="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              placeholder={"Message"}
              required
            ></textarea>
          </li>
          <button type="submit">Send</button>
        </ul>
      </form>
    </section>
  );
}
