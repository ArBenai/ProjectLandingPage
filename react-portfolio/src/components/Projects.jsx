import React from "react";
import "../styles/Animation.css";

const Projects = () => {
  return (
    <div className="container" > 
      <h1>Our Projects</h1>
      <p>Here are some of the projects we have worked on.</p>
     
      <br />
      <section>
      <div class="card">
        <p class="heading">Popular this month</p>
        <p>Powered By</p>
  
      </div>
      <div class="card">
        <p class="heading">Popular this month</p>
        <p>Powered By</p>

      </div>
      <div class="card">
        <p class="heading">Popular this month</p>
        <p>Powered By</p>

      </div>
      </section>
      
      <br />
      <button className='goBack' onClick={() => window.location = '/'}>Go back to the homepage</button>
    
    </div>
  );
};

export default Projects;
