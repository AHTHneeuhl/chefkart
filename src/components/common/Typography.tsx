import styled, { css } from "styled-components";
import { IDesignSystemProps } from "theme/types";
import ThemeHelper from "theme/themeHelper";

const helper = new ThemeHelper();

interface IStyledTextProps extends IDesignSystemProps {
  style?: React.CSSProperties;
}

const StyledText = styled.p<IStyledTextProps>`
  margin: unset;
  outline: unset;
  border: unset;
  background: unset;

  ${({ size = "sm" }) => helper.getFontSize(size)};
  ${({ fontWeight = "regular" }) => helper.getFontWeight(fontWeight)};

  ${({ theme, font = "openSans" }) => {
    return css`
      font-family: ${theme.fonts[font]};
    `;
  }};

  ${({ theme, variant = "codGray" }) => {
    return css`
      color: ${theme.colors[variant]};
    `;
  }};
`;

type TProps = {
  as?: keyof JSX.IntrinsicElements;
  content: string | number;
} & IStyledTextProps;

const Typography: React.FC<TProps> = ({ as, content, style, ...rest }) => {
  return (
    <StyledText as={as} style={style} {...rest}>
      {content}
    </StyledText>
  );
};

export default Typography;
