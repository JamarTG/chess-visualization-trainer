const getRandomSquare = () => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const fileIndex = Math.floor(Math.random() * 8);
  const rankIndex = Math.floor(Math.random() * 8);

  return `${files[fileIndex]}${ranks[rankIndex]}`;
};

export default getRandomSquare;
