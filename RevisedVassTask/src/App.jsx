import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

const storedData = localStorage.getItem("rating");

function App() {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    setRating(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("rating", JSON.stringify(rating));
  }, [rating]);

  return (
    <>
      <div className={styles.componentContainer}>
        <div className={styles.title}>
          <h4>Please Rate</h4>
        </div>
        <div className={styles.starsContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star, i) => (
            <img
              key={i}
              className={styles.star}
              src={
                rating >= star / 2
                  ? star % 2 === 0
                    ? "/gold_star.png"
                    : "/half_star.png"
                  : "/star.png"
              }
              onClick={() => setRating(star / 2)}
              alt={`star ${star / 2}`}
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
