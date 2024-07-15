import { useState, useEffect, SetStateAction, Dispatch } from "react";
import getSquareInfo, { SquareInfo } from "../utils/getSquareInfo";
import boardStyles from "./Board.module.css";
import Square from "./Square";
import { PerfStats } from "./FindTheSquare";

type BoardProps = {
  targetCoordinate: string;
  setTargetCoordinate: Dispatch<SetStateAction<string>>;
  setPerformanceStats: Dispatch<SetStateAction<PerfStats>>;
  performanceStats: PerfStats
};

const Board = ({ targetCoordinate, setPerformanceStats, performanceStats }: BoardProps) => {
  const [squareInfo, setSquareInfo] = useState([] as SquareInfo[]);
  const [highlightedSquare, setHighlightedSquare] = useState<string>("");

  useEffect(() => {
    setSquareInfo(getSquareInfo());
  }, []);

  return (
    <div className={boardStyles.grid}>
      {squareInfo.map((sqr) => (
        <div key={sqr.coordinate}>
          <Square
            targetCoordinate={targetCoordinate}
            highlightedSquare={highlightedSquare}
            setHighlightedSquare={setHighlightedSquare}
            shade={sqr.shade}
            coordinate={sqr.coordinate}
            setPerformanceStats={setPerformanceStats}
            performanceStats={performanceStats}
            
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
