import React from "react";
import '../styles/HomePage.css';
import Carousel from "./HomePageCar";

const HomePage = () => {
  return (
    <section>
      <div className="container" style={homePageStyle}>
      <h1 style={headingStyle}>Willkommen bei ArbenAI</h1>
      <p style={paragraphStyle}>
        Viel Spaß beim durch stöbern unserer Seite.
      </p>
      <Carousel />
    </div>
    </section>   
    
  );
};

const homePageStyle = {
  backgroundColor: "rgb(240, 240,40, 80%)",
  padding: "50px",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "rgb(240, 240, 0)",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  color: "rgb(240, 240, 0)",
};

const buttonContainerStyle = {
  marginTop: "30px",
};

const buttonStyle = {
  backgroundColor: "#4a90e2",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "1.2rem",
  margin: "10px",
  transition: "background-color 0.3s",
};

export default HomePage;
