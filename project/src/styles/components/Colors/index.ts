import { IColor } from "src/interfaces/styles";

export const colors = {
  brand1: "var(--brand1)",
  brand2: "var(--brand2)",
  brand3: "var(--brand3)",
  brand4: "var(--brand4)",
  grey0: "var(--grey0)",
  grey1: "var(--grey1)",
  grey2: "var(--grey2)",
  grey3: "var(--grey3)",
  grey4: "var(--grey4)",
  grey5: "var(--grey5)",
  grey6: "var(--grey6)",
  grey7: "var(--grey7)",
  grey8: "var(--grey8)",
  grey9: "var(--grey9)",
  grey10: "var(--grey10)",
  whiteFixed: "var(--whiteFixed)",
  alert1: "var(--alert1)",
  alert2: "var(--alert2)",
  alert3: "var(--alert3)",
  success1: "var(--success1)",
  success2: "var(--success2)",
  success3: "var(--success3)",
  random1: "var(--random1)",
  random2: "var(--random2)",
  random3: "var(--random3)",
  random4: "var(--random4)",
  random5: "var(--random5)",
  random6: "var(--random6)",
  random7: "var(--random7)",
  random8: "var(--random8)",
  random9: "var(--random9)",
  random10: "var(--random10)",
  random11: "var(--random11)",
  random12: "var(--random12)",
};

const setColors = (color: IColor): string => {
  return colors[color] || colors.grey1;
};

export default setColors;
