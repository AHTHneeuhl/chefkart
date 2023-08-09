import styled, { css } from "styled-components";

type TStyledDishProps = {
  active?: boolean;
};

const StyledDish = styled.div<TStyledDishProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 24px;
  border-radius: 17px;
  opacity: 1;
  border: 0.5px solid #bdbdbd;

  ${({ active }) => {
    if (active) {
      return css`
        background: #fff9f2;
        box-shadow: 0px 3px 6px #fff9f2;
        border-color: #ff941a;
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
  letter-spacing: 0.1px;
  color: ${({ active }) => (active ? "#ff941a" : "#bdbdbd")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  opacity: 1;
`;

type TProps = {
  content: string;
  active?: boolean;
};

const DishType: React.FC<TProps> = ({ content, active = false }) => {
  return (
    <StyledDish active={active}>
      <StyledText active={active}>{content}</StyledText>
    </StyledDish>
  );
};

export default DishType;
