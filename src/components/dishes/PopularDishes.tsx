import { PopularDish, Typography } from "components/common";
import { useDishes } from "hooks";
import { styled } from "styled-components";

const StyledContainer = styled.div``;

const StyledDishes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PopularDishes = () => {
  const { dishes, isLoading } = useDishes();

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <Typography as="h3" content="Popular Dishes" />
      <StyledDishes>
        {dishes?.popularDishes.map(({ id, name, image }) => (
          <PopularDish key={id} name={name} image={image} />
        ))}
      </StyledDishes>
    </StyledContainer>
  );
};

export default PopularDishes;
