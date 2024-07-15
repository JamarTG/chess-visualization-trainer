import Screen from "./Screen";
import Board from "./Board";
import { useEffect, useState } from "react";
import getRandomSquare from "../utils/getRandomSquare";
import gameStyles from "./FindTheSquare.module.css";

export interface PerfStats {
  attempts: number;
  correct: number;
}

const FindTheSquare = () => {
  const [targetCoordinate, setTargetCoordinate] = useState<string>("");
  const [performanceStats, setPerformanceStates] = useState<PerfStats>({
    attempts: 0,
    correct: 0,
  });

  useEffect(() => {
    setTargetCoordinate(() => getRandomSquare());
  }, [performanceStats, setPerformanceStates]);

  return (
    <div className={gameStyles.container}>
      <Screen performanceStats={performanceStats} coordinate={targetCoordinate} />

      <Board
        setPerformanceStats={setPerformanceStates}
        performanceStats={performanceStats}
        targetCoordinate={targetCoordinate}
        setTargetCoordinate={setTargetCoordinate}
      />
    </div>
  );
};

export default FindTheSquare;
