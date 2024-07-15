import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Square.module.css";
import { PerfStats } from "./FindTheSquare";

type SquareProps = {
  coordinate: string;
  shade: string;
  highlightedSquare: string;
  setHighlightedSquare: Dispatch<SetStateAction<string>>;
  targetCoordinate: string;
  performanceStats: PerfStats;
  setPerformanceStats: Dispatch<SetStateAction<PerfStats>>;
};

const Square = ({
  shade,
  coordinate,
  highlightedSquare,
  setHighlightedSquare,
  targetCoordinate,
  performanceStats,
  setPerformanceStats,
}: SquareProps) => {
  const [feedbackStyle, setFeedbackStyle] = useState<string>("");

  const updateHighLightedSquare = () => {
    const isCorrect = targetCoordinate == coordinate;

    setHighlightedSquare(coordinate);
    setFeedbackStyle(isCorrect ? "right" : "wrong");
    setPerformanceStats({
      ...performanceStats,
      attempts: performanceStats.attempts + 1,
      correct: performanceStats.correct + (isCorrect ? 1 : 0),
    });
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
