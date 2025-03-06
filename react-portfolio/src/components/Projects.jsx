import React from "react";
import "../styles/Animation.css";



const Projects = () => {
  return (
    <div className="container" > 
      <h1>Our Projects</h1>     
      <br />
      <section>
      <div className="card">
      <p className="heading">Popular this month</p>
      <p>Powered By</p>
  
      </div>
      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>

      </div>
      <div className="card">
        <p className="heading">Popular this month</p>
        <p>Powered By</p>

      </div>
      
      </section>
      
      <br />
      <button className='goBack' onClick={() => window.location = '/'}>Go back to the homepage</button>
    
    </div>
  );
};

export default Projects;
