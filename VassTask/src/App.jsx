import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [rating, setRating] = useState(null);

  return (
    <>
      <div className={styles.componentContainer}>
        <div className={styles.title}>
          <h4>Please Rate</h4>
        </div>
        <div className={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <img
                className={styles.star}
                src={rating >= star ? "/ShapeGold.png" : "/Shape.png"}
                onClick={() => {
                  setRating(star);
                }}
              ></img>
            );
          })}
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
