import React from "react";

import Count from "./Projects/Count";


function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Count />
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
