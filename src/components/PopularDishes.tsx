import { PopularDish } from "components/common";
import { useDishes } from "hooks";
import { styled } from "styled-components";

const StyledDishes = styled.div`
  display: flex;
  align-items: center;
`;

const PopularDishes = () => {
  const { dishes, isLoading } = useDishes();

  if (isLoading) return <p>loading</p>;

  return (
    <StyledDishes>
      {dishes?.popularDishes.map(({ id, name, image }) => (
        <PopularDish key={id} name={name} image={image} />
      ))}
    </StyledDishes>
  );
};

export default PopularDishes;
