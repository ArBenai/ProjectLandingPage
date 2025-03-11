import '../styles/Footer.css';

import React from "react";

const Footer = () => {
  return (
    <footer className='footer'
      style={{
        fontSize: "12px",
        width: "100%",
        height: "130px",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "0 0 15px 15px",
        color: "rgba(255, 255, 255, 0.4)",
        textAlign: "center",
      }}
    >
      <div>
        <h3>Folge uns auf unseren sozialen Kanälen</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          >
            <i className="fab fa-discord"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", textDecoration: "none" }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <span>&copy; Copyright 2025 by ArbenAI</span>
      </div>

      <div style={{fontSize: "12px" }}>
      </div>
    </footer>
  );
};

export default Footer;
