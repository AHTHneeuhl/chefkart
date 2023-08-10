import { css } from "styled-components";
import { TFontSizes, TFontWeights, TLineHeights } from "./types";

class Font {
  private fontSizes: TFontSizes = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24,
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
    xs: 11,
    sm: 15,
    md: 18,
    lg: 21,
    xl: 24,
    none: 0,
  };

  getFontSize = (value: keyof TFontSizes | number = "sm") => {
    const fontSize =
      typeof value === "number" ? value + "px" : this.fontSizes[value] + "px";
    return css`
      font-size: ${fontSize};
    `;
  };

  getLineHeight = (value: keyof TLineHeights | number = "sm") => {
    const lineHeight =
      typeof value === "number" ? value + "px" : this.lineHeights[value] + "px";
    return css`
      line-height: ${lineHeight};
    `;
  };

  getFontWeight = (value: keyof TFontWeights = "regular") => {
    return css`
      font-weight: ${this.fontWeights[value]};
    `;
  };
}

export default Font;
