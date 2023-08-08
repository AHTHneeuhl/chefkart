const colors = {
  white: "#FFFFFF",
  black: "#000000",
  alpha: "#355FA3",
  success: "#4ECE00",
  error: "#EA4335",
  darkGrey: "#5F5F5F",
  lightGrey: "#868686",
  placeHolder: "#CACACA",
  extraLightGrey: "#E9E9E9",
  ghostWhite: "#F9F9F9",
  milk: "#F7FFF4",
  ultraMarineBlue: "#3768ED",
};

const fonts = {
  playfair: `'Playfair Display', serif`,
  poppins: `'Poppins', sans-serif`,
  roboto: `'Roboto', sans-serif`,
  montserrat: `'Montserrat', sans-serif`,
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
