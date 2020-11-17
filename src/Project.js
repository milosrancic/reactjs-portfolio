import React from "react";

const Project = (props) => (
  <>
    <h3>{props.title}</h3>
    <p>{props.tech}</p>
    <a href={props.live} target="_blank" rel="noopener noreferrer">
      live
    </a>{" "}
    <br></br>
    <a href={props.github} target="_blank" rel="noopener noreferrer">
      code
    </a>
  </>
);

export default Project;
