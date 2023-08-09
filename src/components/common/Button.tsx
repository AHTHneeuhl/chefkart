import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 56px;
  height: 22px;
  background: #1c1c1c 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 4px #00000029;
  border-radius: 6px;
  color: #ffffff;
  font-size: 8px;
  line-height: 11px;
  font-weight: 700;
  letter-spacing: 0px;
  opacity: 1;
`;

type TProps = {
  content: string;
};

const Button: React.FC<TProps> = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

export default Button;
