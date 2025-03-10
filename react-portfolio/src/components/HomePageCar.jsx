import React, { useState, useEffect } from 'react';

const Carousel = () => {

  const images = [];
  for (let i = 1; i <= 3; i++) {
    images.push(`https://picsum.photos/600/400?random=${i}`);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel-container" style={{ position: "relative", width: "600px", overflow: "hidden" }}>
      <div
        className="carousel-slides"
        style={{
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ minWidth: "100%", height: "200px" }}>
            <img
              src={image}
              alt={`carousel-slide-${index}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: "10",
        }}
      >
        &gt;
      </button>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: "10",
        }}
      >
        &lt;
      </button>
    </div>
  );
};

export default Carousel;
