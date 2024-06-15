import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

const storedData = localStorage.getItem("rating");

function App() {
  const [rating, setRating] = useState([]);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setRating(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("rating", JSON.stringify(rating));
  }, [rating]);

  const handleOnClick = (event, star) => {
    const { left, width } = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - left;
    const starRating = clickPosition > width / 2 ? star : star - 0.5;
    setRating(starRating);
  };

  const handleOnHover = (event, star) => {
    const { left, width } = event.target.getBoundingClientRect();
    const hoverPosition = event.clientX - left;
    const hoverStarRating = hoverPosition > width / 2 ? star : star - 0.5;
    setHoverRating(hoverStarRating);
  };

  const handleOnBlur = () => {
    setHoverRating(0);
  };

  const displayRating = hoverRating || rating;

  return (
    <>
      <div className={styles.componentContainer}>
        <div className={styles.title}>
          <h4>Please Rate</h4>
        </div>
        <div className={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <img
              key={star}
              className={styles.star}
              src={
                displayRating >= star
                  ? "/gold_star.png"
                  : displayRating >= star - 0.5
                  ? "/half_star.png"
                  : "/star.png"
              }
              onClick={(event) => handleOnClick(event, star)}
              onMouseMove={(event) => handleOnHover(event, star)}
              onMouseLeave={handleOnBlur}
            />
          ))}
        </div>
        <div className={styles.text}>
          <p>
            Your Feedback Is Very
            <br /> Important To Us.
          </p>
        </div>
        <img src="/logo.png" alt="Vass logo" />
      </div>
    </>
  );
}

export default App;
