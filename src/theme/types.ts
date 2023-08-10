import { DefaultFonts } from "styled-components";

export type TFontSizes = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type TFontWeights = {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
};

export type TLineHeights = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type TFontProps = {
  size?: keyof TFontSizes;
  font?: keyof DefaultFonts;
  fontWeight?: keyof TFontWeights;
};
