import Screen from "./Screen";
import Board from "./Board";
import { useEffect, useState } from "react";
import getRandomSquare from "../utils/getRandomSquare";
import gameStyles from "./FindTheSquare.module.css";

const FindTheSquare = () => {
  const [targetCoordinate, setTargetCoordinate] = useState<string>("");


  useEffect(() => {
    setTargetCoordinate(() => getRandomSquare());
  }, []);

  return (
    <div className={gameStyles.container}>
      <Screen coordinate={targetCoordinate} />
      <Board  targetCoordinate = {targetCoordinate} setTargetCoordinate={setTargetCoordinate} />
    
    </div>
  );
};

export default FindTheSquare;
