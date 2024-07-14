import { useState, useEffect, SetStateAction, Dispatch } from "react";
import getSquareInfo, { SquareInfo } from "../utils/getSquareInfo";
import boardStyles from "./Board.module.css";
import Square from "./Square";

type BoardProps = {
  targetCoordinate: string;
  setTargetCoordinate: Dispatch<SetStateAction<string>>;

};

const Board = ({
  targetCoordinate,

}: BoardProps) => {
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
        
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
