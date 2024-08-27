import cardBgColors from "../../constants/colors";

const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * cardBgColors.length);
  return cardBgColors[randomNumber];
};

export default getRandomColor;
