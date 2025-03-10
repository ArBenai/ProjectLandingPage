import React from "react";
import Count from "./Projects/Count";
import "../styles/Project.css";


function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Count />
      <br />
      <div className="projectsCont"> 
        <a className="projects"

          href="https://arbenai.github.io/rocket-folio/"
          target="blank"
        >
          Rocket Folio Proj.
        </a>
        <a
          className="projects"
          href="https://arbenai.github.io/First-Project/"
          target="blank"
        >
          First HTML-Vanilla Proj.
        </a>
        <a
          className="projects"
          href="https://arbenai.github.io/homepage-task/"
          target="blank"
        >
          Burger Proj.
        </a>
        <a
          className="projects"
          href="https://arbenai.github.io/first-bootstrap-design/"
          target="blank"
        >
          First Bootstrap Proj.
        </a>
      </div>
      <br />
      <h1>KEEP WAITING</h1>
      <br />
      <button className="goBack" onClick={() => (window.location = "/")}>
        Zur Homepage zurück
      </button>
    </div>
  );
}

export default Projects;

