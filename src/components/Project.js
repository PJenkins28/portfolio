import React from "react";

export default function Projects(props) {
  return (
    <section className="project-container">
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <img src={props.image} alt="" />
    </section>
  );
}
