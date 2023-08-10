import { Dish } from "components/common";
import { useDishes } from "hooks";
import { styled } from "styled-components";

const StyledDishes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0.75rem 0;
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
