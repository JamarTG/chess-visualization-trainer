import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Square.module.css";

type SquareProps = {
  coordinate: string;
  shade: string;
  highlightedSquare: string;
  setHighlightedSquare: Dispatch<SetStateAction<string>>;
  targetCoordinate: string;
  coordinateSelected:boolean,
  setCoordinateSelected:Dispatch<SetStateAction<boolean>>;


};
const Square = ({
  shade,
  coordinate,
  highlightedSquare,
  setHighlightedSquare,
  targetCoordinate,
  coordinateSelected,
  setCoordinateSelected,
}: SquareProps) => {
  const [feedbackStyle, setFeedbackStyle] = useState<string>("");


  const updateHighLightedSquare = () => {
    if(coordinateSelected){
      return
    }

    setHighlightedSquare(coordinate);
    setFeedbackStyle(targetCoordinate == coordinate ? "right" : "wrong");
    setCoordinateSelected(true);

  };
  return (
    <div
      onClick={updateHighLightedSquare}  
      className={`${styles[shade]} ${styles.square} ${styles[feedbackStyle]} ${
        coordinate === highlightedSquare ? styles.feedbackStyle : ""
      }`}
    >
  
    </div>
  );
};

export default Square;
