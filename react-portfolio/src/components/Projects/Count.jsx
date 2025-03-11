import './Count.css'

import React, { useState, useEffect } from "react";

function CountGame() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(5); 
  const [gameStarted, setGameStarted] = useState(false); 
  const [intervalId, setIntervalId] = useState(null);
  const [notification, setNotification] = useState(""); 


  const startGame = () => {
    setCount(0); 
    setTimer(5); 
    setGameStarted(true); 
    setNotification(""); 
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1; 
        } else {
          clearInterval(id); 
          setGameStarted(false);
          showNotification(); 
          return 0;
        }
      });
    }, 1000); 
    setIntervalId(id); 
  };


  const increaseCount = () => {
    setCount(count + 1); 
  };

  const showNotification = () => {
    setNotification(`Dein Ergebnis: ${count} Klicks!`);
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <div className='box' style={{ padding: "20px", textAlign: "center" }}>
      <p>Klicken Sie so oft wie möglich bis die Zeit abläuft. Der erste Versuch ist Frei. </p>
      {!gameStarted ? (<button
          onClick={startGame}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Play
        </button>
      ) : (
        // Game Section (wenn das Spiel läuft)
        <div>
          <h1>Zahl Spiel</h1>
          <p>Aktuelle Zahl: {count}</p>
          <button
            onClick={increaseCount}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            +1
          </button>
          <br />
          <p>Timer: {timer} Sekunden</p>
        </div>
      )}
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "30rem",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "yellow",
            padding: "20px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            fontSize: "14px",
            zIndex: "9999",
          }}
        >
          {notification}
        </div>
      )}
    </div>
  );
}

export default CountGame;
