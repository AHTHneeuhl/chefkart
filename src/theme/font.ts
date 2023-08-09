import { css } from "styled-components";
import { TFontSizes, TFontWeights, TLineHeights } from "./types";

class Font {
  private fontSizes: TFontSizes = {
    xs: 80,
    sm: 100,
    md: 140,
    lg: 180,
    xl: 220,
    none: 0,
  };

  private fontWeights: TFontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  };

  private lineHeights: TLineHeights = {
    small: 100,
    medium: 130,
    large: 160,
  };

  getFontSize = (value: keyof TFontSizes = "sm") => {
    return css`
      font-size: ${this.fontSizes[value] / 100 + "rem"};
    `;
  };

  getLineHeight = (value: keyof TLineHeights = "small") => {
    return css`
      line-height: ${this.lineHeights[value] + "%"};
    `;
  };

  getFontWeight = (value: keyof TFontWeights = "regular") => {
    return css`
      font-weight: ${this.fontWeights[value]};
    `;
  };
}

export default Font;
