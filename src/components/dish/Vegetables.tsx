import { Stat, Typography } from "components/common";
import { useDish } from "hooks";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const StyledContainer = styled.div``;

const StyledVegetables = styled.div`
  display: flex;
  flex-direction: column;
`;

const Vegetables: React.FC = () => {
  const { id } = useParams();
  const { dish, isLoading } = useDish(id!);

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <Typography content="Vegetables" />
      <StyledVegetables>
        {dish?.ingredients.vegetables.map(({ name, quantity }) => (
          <Stat key={name} name={name} quantity={quantity} />
        ))}
      </StyledVegetables>
    </StyledContainer>
  );
};

export default Vegetables;
