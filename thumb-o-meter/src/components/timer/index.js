import { Progress } from "@chakra-ui/react";
import styles from "./index.module.css";
function Timer({ count, time }) {
  function calculateValue() {
    return (Number(count) / Number(time)) * 100;
  }

  return (
    <div className={styles.container}>
      <Progress
        className={styles.timer}
        colorScheme={count < 5 ? "red" : "green"}
        height="3vh"
        value={calculateValue()}
      />
    </div>
  );
}

export default Timer;
