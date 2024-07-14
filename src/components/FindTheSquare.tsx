import Screen from "./Screen";
import Board from "./Board";
import { useEffect, useState } from "react";
import getRandomSquare from "../utils/getRandomSquare";
import gameStyles from "./FindTheSquare.module.css";

const FindTheSquare = () => {
  const [targetCoordinate, setTargetCoordinate] = useState<string>("");
  const [userAttempt, setUserAttempt] = useState<number>(0);

  useEffect(() => {
    setTargetCoordinate(() => getRandomSquare());
  }, [setUserAttempt,userAttempt]);

  return (
    <div className={gameStyles.container}>
      <Screen coordinate={targetCoordinate} />
      <Board setUserAttempt={setUserAttempt} targetCoordinate = {targetCoordinate} setTargetCoordinate={setTargetCoordinate} />
    
    </div>
  );
};

export default FindTheSquare;
