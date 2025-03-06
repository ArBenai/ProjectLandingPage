import React from "react";
import "../styles/Animation.css";

const Watchlist = () => {
  return (
    <div className="container">
      <h1>Watchlist</h1>
      <br />
      <section>
        <div className="card">
          <img src="./public/demonslay.jpg" />
          <p>Demon Slayer </p>
        </div>
        <div className="card">
          <img src="./public/onepiece.jpg" />
          <p>One Piece</p>
        </div>
        <div className="card">
        <img src="./public/dragonabll.jpg" />
          <p>Dragon Ball Z</p>
        </div>
        <div className="card">
        <img src="./public/jjk.jpg" />
          <p>JuJutsu Kaisen</p>
        </div>
        <div className="card">
        <img src="./public/solol.jpg" />
          <p>Solo Leveling</p>
        </div>
        <div className="card">
          <p className="heading">Coming soon</p>
          <p>Waiting ...</p>
        </div>
      </section>

      <br />
      <button className="goBack" onClick={() => (window.location = "/")}>
        Go back to the homepage
      </button>

    </div>
  );
};

export default Watchlist;
