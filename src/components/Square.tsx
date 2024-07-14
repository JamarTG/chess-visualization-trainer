import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Square.module.css";

type SquareProps = {
  coordinate: string;
  shade: string;
  highlightedSquare: string;
  setHighlightedSquare: Dispatch<SetStateAction<string>>;
  targetCoordinate: string;
  setUserAttempt: Dispatch<SetStateAction<number>>;
};

const Square = ({
  shade,
  coordinate,
  highlightedSquare,
  setHighlightedSquare,
  targetCoordinate,
  setUserAttempt,
}: SquareProps) => {
  
  const [feedbackStyle, setFeedbackStyle] = useState<string>("");

  const updateHighLightedSquare = () => {
    setHighlightedSquare(coordinate);
    setFeedbackStyle(targetCoordinate == coordinate ? "right" : "wrong");
    setUserAttempt((prevAttemptCount) => prevAttemptCount + 1);
  };

  return (
    <div
      onClick={updateHighLightedSquare}
      className={`${styles[shade]} ${styles.square} ${
        coordinate === highlightedSquare && styles[feedbackStyle]
      } ${coordinate === highlightedSquare ? styles.feedbackStyle : ""}`}
    ></div>
  );
};

export default Square;
