import { css } from "styled-components";
import Font from "./font";

class ThemeHelper {
  font = new Font();

  getFontSize = this.font.getFontSize();

  getFontWeight = this.font.getFontWeight();

  getLineHeight = this.font.getLineHeight();

  centerContent = () => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  };
}

export default ThemeHelper;
