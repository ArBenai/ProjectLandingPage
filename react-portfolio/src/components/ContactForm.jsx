import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="BigContainer">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="name"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "yellow",
              textShadow: "black 2px 2px 5px",
              marginRight: "10px",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            style={{ padding: "5px", marginRight: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="email"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "yellow",
              textShadow: "black 2px 2px 5px",
              marginRight: "10px",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{ padding: "5px", marginRight: "10px" }}
          />
        </div>

        <button type="submit">Antippen</button>
      </form>
    </div>
  );
};

export default ContactForm;
