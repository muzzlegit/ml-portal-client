import getColorToken from "./getColorToken";

export const theme = {
  colors: {
    primary: getColorToken("#1B1D1B"),
    secondary: getColorToken("#2D2F2D"),
    text: getColorToken("#DDDDBD"),
    textAcent: getColorToken("#8397a7"),
    red: getColorToken("#BB0A01"),
    green: getColorToken("#06EC38"),
    orange: getColorToken("#F7AD0E"),
    black: getColorToken("#000000"),
    white: getColorToken("#FFFFFF"),
    acents: {
      acent1: getColorToken("#A0A5A7"),
      acent2: getColorToken("#B4A7B3"),
      acent3: getColorToken("#7D8B8C"),
      acent4: getColorToken("#D1C6B1"),
      acent5: getColorToken("#B7C4B7"),
      acent6: getColorToken("#9A7B60"),
    },
  },
};
