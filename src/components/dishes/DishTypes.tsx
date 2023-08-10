import { DishType } from "components/common";
import { styled } from "styled-components";
import ThemeHelper from "theme/themeHelper";

const helper = new ThemeHelper();

const StyledDishTypes = styled.div`
  ${helper.centerContent()};
  gap: 24px;
`;

const dishTypes = ["Italian", "Indian", "Mexican", "Chinese", "Korean"];

const DishTypes: React.FC = () => {
  return (
    <StyledDishTypes>
      {dishTypes.map((type) => (
        <DishType key={type} content={type} />
      ))}
    </StyledDishTypes>
  );
};

export default DishTypes;
