import { PopularDish, Typography } from "components/common";
import { useDishes } from "hooks";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  margin: 0.75rem 0;
`;

const StyledDishes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0.5rem;
`;

const PopularDishes = () => {
  const { dishes, isLoading } = useDishes();

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <Typography
        as="h3"
        size="md"
        fontWeight="bold"
        content="Popular Dishes"
      />
      <StyledDishes>
        {dishes?.popularDishes.map(({ id, name, image }, index) => (
          <PopularDish
            key={id}
            name={name}
            image={image}
            active={index !== 0 ? true : false}
          />
        ))}
      </StyledDishes>
    </StyledContainer>
  );
};

export default PopularDishes;
