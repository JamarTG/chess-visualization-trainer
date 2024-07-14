import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Square.module.css";

type SquareProps = {
  coordinate: string;
  shade: string;
  highlightedSquare: string;
  setHighlightedSquare: Dispatch<SetStateAction<string>>;
  targetCoordinate: string;
};

const Square = ({
  shade,
  coordinate,
  highlightedSquare,
  setHighlightedSquare,
  targetCoordinate,
}: SquareProps) => {

  const [feedbackStyle, setFeedbackStyle] = useState<string>("");

  const updateHighLightedSquare = () => {
    setHighlightedSquare(coordinate);
    setFeedbackStyle(targetCoordinate == coordinate ? "right" : "wrong");
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
