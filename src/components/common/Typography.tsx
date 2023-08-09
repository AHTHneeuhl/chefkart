import styled from "styled-components";

type TProps = {
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  content: string;
};

const StyledText = styled.p`
  font-family: "Open Sans", sans-serif;
`;

const Typography: React.FC<TProps> = ({ as, content, style, ...rest }) => {
  return (
    <StyledText as={as} style={style} {...rest}>
      {content}
    </StyledText>
  );
};

export default Typography;
