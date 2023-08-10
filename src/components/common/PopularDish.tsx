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
  position: absolute;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0px;
  color: #ffffff;
  font-weight: 600;
  opacity: 1;
`;

const StyledPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  opacity: 0.25;
`;

type TProps = {
  name: string;
  image: string;
  active?: boolean;
};

const PopularDish: React.FC<TProps> = ({ name, image, active = false }) => {
  return (
    <StyledDish active={active}>
      <StyledPicture src={image} alt={name} />
      <StyledText active={active}>{name}</StyledText>
    </StyledDish>
  );
};

export default PopularDish;
