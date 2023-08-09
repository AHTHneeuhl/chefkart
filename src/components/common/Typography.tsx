import styled from "styled-components";

type TProps = {
  as?: keyof JSX.IntrinsicElements;
  content: string;
};

const StyledText = styled.p`
  font-family: "Open Sans", sans-serif;
`;

const Typography: React.FC<TProps> = ({ as, content, ...rest }) => {
  return (
    <StyledText as={as} {...rest}>
      {content}
    </StyledText>
  );
};

export default Typography;
