import React, { useState } from "react";
import thumb from "./thumb.png";
import styles from "../results/results.module.css";

function Results() {
  const [thumbResult, setThumbResult] = useState(90);
  const [responses, setResponses] = useState(6);
  const [participants, setParticipants] = useState(10);

  return (
    <div className={styles.results}>
      <img
        className={styles.thumb}
        src={thumb}
        alt="thumb"
        style={{ transform: `rotate(${thumbResult}deg)` }}
      />
      <div>
        <p>
          {responses} / {participants}
        </p>
      </div>
    </div>
  );
}

export default Results;
