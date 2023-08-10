import { Stat, Typography } from "components/common";
import { useDish } from "hooks";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  margin: 0.75rem 0;
`;

const StyledVegetables = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem;
`;

const Vegetables: React.FC = () => {
  const { id } = useParams();
  const { dish, isLoading } = useDish(id!);

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <Typography
        as="h4"
        fontWeight="bold"
        content={`Vegetables (${dish?.ingredients.vegetables.length})`}
      />
      <StyledVegetables>
        {dish?.ingredients.vegetables.map(({ name, quantity }) => (
          <Stat key={name} name={name} quantity={quantity} />
        ))}
      </StyledVegetables>
    </StyledContainer>
  );
};

export default Vegetables;
