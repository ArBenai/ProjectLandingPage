import React from "react";
import "../styles/Animation.css";

const Skills = () => {
  return (
    <div className="container">
      <h1>Skills</h1>
      <br />
      <section>
        <div className="card">
          <img src="HTML5.jpg" alt="HTML5" />
          <a
          className="links"
          href="https://arbenai.github.io/First-Project/"
          target="blank"
        >
          First HTML-Vanilla Proj.
        </a>
        </div>
        <div className="card" >
          <img src="css.png" alt="CSS3" />
          <p>CSS</p>
        </div>
        <div className="card">
          <img src="java.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="card">
          <img src="boots.jpeg" alt="Bootstrap" />
          <a
          className="links"
          href="https://arbenai.github.io/first-bootstrap-design/"
          target="blank"
        >
          First Bootstrap Proj.
        </a>
        
        </div>
        <div className="card">
          <img src="tailwind.jpeg" alt="Tailwind" />
          <a className="links"

          href="https://arbenai.github.io/rocket-folio/"
          target="blank"
        >
          Rocket Folio Proj.
        </a>
        </div>
        <div className="card">
          <p className="heading">Coming soon</p>
          <p>Waiting ...</p>
        </div>
      </section>

      <br />
      <button className="goBack" onClick={() => (window.location = "/")}>
      Zur Homepage zurück
      </button>

    </div>
  );
};

export default Skills;
