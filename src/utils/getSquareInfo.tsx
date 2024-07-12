export type SquareInfo = { coordinate: string; shade: "dark" | "light" };

const getSquareInfo = () => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
  const squareInfo = [] as SquareInfo[];

  for (const rank of ranks) {
    for (const file of files) {
      const isEvenFile = (files.indexOf(file) + 1) % 2 == 0;
      const isEvenRank = rank % 2 === 0;

      const shade = isEvenFile == isEvenRank ? "dark" : "light";
      squareInfo.push({ coordinate: `${file}${rank}`, shade: shade });
    }
  }
  return squareInfo;
};

export default getSquareInfo;
