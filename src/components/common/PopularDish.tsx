import styled, { css } from "styled-components";

type TStyledDishProps = {
  active?: boolean;
};

const StyledDish = styled.div<TStyledDishProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background: #1c1c1c9a 0% 0% no-repeat padding-box;
  opacity: 1;

  ${({ active }) => {
    if (active) {
      return css`
        padding: 6px;
        border: 1px solid #ff941a;
      `;
    }
  }}
`;

type TStyledTextProps = {
  active?: boolean;
};

const StyledText = styled.div<TStyledTextProps>`
  width: 34px;
  height: 14px;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0px;
  color: #ffffff;
  font-weight: 600;
  opacity: 1;
`;

type TProps = {
  content: string;
  active?: boolean;
};

const PopularDish: React.FC<TProps> = ({ content, active = false }) => {
  return (
    <StyledDish active={active}>
      <StyledText active={active}>{content}</StyledText>
    </StyledDish>
  );
};

export default PopularDish;