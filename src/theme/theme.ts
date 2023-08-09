const colors = {
  white: "#FFFFFF",
  black: "#000000",
  pizazz: "#FF8800",
  westSide: "#FF941A",
  codGray: "#1C1C1C",
  mineShaft: "#242424",
  gray: "#8A8A8A",
  doveGray: "#707070",
  silverChalice: "#A3A3A3",
  silver: "#BDBDBD",
  wildSand: "#F5F5F5",
  emerald: "#51C452",
};

const fonts = {
  openSans: `'Open Sans', sans-serif`,
};

export const theme = {
  colors,
  fonts,
};

declare module "styled-components" {
  type theme = typeof theme;
  export interface DefaultTheme extends theme {}
  export type DefaultColors = typeof colors;
  export type DefaultFonts = typeof fonts;
}
