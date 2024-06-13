import React, { useState } from "react";
import "./app.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.ratingContainer}></div>
    </>
  );
}

export default App;
