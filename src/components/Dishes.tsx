import { Dish } from "components/common";
import { useDishes } from "hooks";
import { styled } from "styled-components";

const StyledDishes = styled.div`
  display: flex;
  align-items: center;
`;

const Dishes: React.FC = () => {
  const { dishes, isLoading } = useDishes();

  if (isLoading) return <p>loading</p>;

  return (
    <StyledDishes>
      {dishes?.dishes.map(
        ({ id, name, description, image, equipments, rating }) => (
          <Dish
            key={id}
            name={name}
            description={description}
            image={image}
            equipments={equipments}
            rating={rating}
          />
        )
      )}
    </StyledDishes>
  );
};

export default Dishes;
