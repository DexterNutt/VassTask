import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const storedData = localStorage.getItem("rating");
  const [rating, setRating] = useState([]);
  useEffect(() => {
    setRating(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("rating", JSON.stringify(rating));
  }, [rating]);

  const handleClick = (event, star) => {
    const { left, width } = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - left;
    const starRating = clickPosition > width / 2 ? star : star - 0.5;
    setRating(starRating);
  };

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
                rating >= star
                  ? "/gold_star.png"
                  : rating >= star - 0.5
                  ? "/half_star.png"
                  : "/star.png"
              }
              onClick={(event) => handleClick(event, star)}
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
