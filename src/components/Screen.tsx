import screenStyles from "./Screen.module.css"

type ScreenProps = {
  coordinate: string;
};
const Screen = ({ coordinate }: ScreenProps) => {
  return (
    <div className={screenStyles.box}>
      <h2>{coordinate}</h2>
    </div>
  );
};

export default Screen;
