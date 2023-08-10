import { DishType } from "components/common";
import { styled } from "styled-components";
import ThemeHelper from "theme/themeHelper";

const helper = new ThemeHelper();

const StyledDishTypes = styled.div`
  ${helper.centerContent()};
  justify-content: flex-start;
  gap: 1.5rem;
  margin: 0.75rem 0;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const dishTypes = ["Italian", "Indian", "Mexican", "Chinese", "Korean"];

const DishTypes: React.FC = () => {
  return (
    <StyledDishTypes>
      {dishTypes.map((type, index) => (
        <DishType
          key={type}
          content={type}
          active={index === 0 ? true : false}
        />
      ))}
    </StyledDishTypes>
  );
};

export default DishTypes;
