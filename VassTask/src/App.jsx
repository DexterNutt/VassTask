import React, { useState } from "react";
import { RatingReview } from "./starsComp/StarsRating";
import styles from "./App.module.css";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className={styles.componentContainer}>
        <div className={styles.title}>
          <h4>Please Rate</h4>
        </div>
        <div className={styles.starsContainer}>
          <RatingReview rating={rating} setRating={setRating} />
        </div>
        <div className={styles.text}>
          <p>Your feedback is very important to us.</p>
        </div>
        <img src="/logo.png" alt="Vass logo" />
      </div>
    </>
  );
}

export default App;
