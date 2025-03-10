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
          <p>HTML </p>
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
          <p>Bootstrap</p>
        </div>
        <div className="card">
          <img src="tailwind.jpeg" alt="Tailwind" />
          <p>Tailwind</p>
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
