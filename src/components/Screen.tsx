import screenStyles from "./Screen.module.css";
import { PerfStats } from "./FindTheSquare";
type ScreenProps = {
  coordinate: string;
  performanceStats: PerfStats;
};
const Screen = ({ coordinate, performanceStats}: ScreenProps) => {
  return (
    <div className={screenStyles.box}>
      <h2>{coordinate}</h2>

      <div className={screenStyles.stats}>
        <p>attempted : {performanceStats.attempts}</p>
        <p>correct : {performanceStats.correct}</p>
        <p>
          win rate :{" "}
          {performanceStats.attempts !== 0
            ? (
                (performanceStats.correct / performanceStats.attempts) *
                100
              ).toFixed(0)
            : 0}
          %
        </p>
      </div>
    </div>
  );
};

export default Screen;
